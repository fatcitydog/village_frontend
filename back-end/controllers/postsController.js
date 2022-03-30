const knex = require("knex")(require("../knexfile.js").development);

const getAllPost = (req, res) => {
  // console.log("req", req);
  knex
    .select(
      "posts.id as post_id",
      "posts.title",
      "posts.content",
      "posts.updated_at",
      "users.id as user_id",
      "users.avatar_url",
      "users.displayName"
    )
    .from("posts")
    .leftJoin("users", "posts.user_id", "users.id")
    .orderBy("posts.id", "desc")
    .then((posts) => {
      let updatedPosts = posts;
      if (req.user) {
        updatedPosts = updatedPosts.map((post) => {
          return {
            ...post,
            isCurrentUser: post.user_id === req.user.id,
          };
        });
      }
      res.status(200).json(posts);
    })
    .catch(() => {
      res.status(500).json({ message: "Error fetching posts" });
    });
};

const createNewPost = (req, res) => {
  const userId = req.user;
  if (userId === undefined)
    return res.status(401).json({ message: "Unauthorized" });
  if (!req.body.title || !req.body.content) {
    return res
      .status(400)
      .json({ message: "Missing post tilte or content fields" });
  }
  knex("posts")
    .insert({
      user_id: req.user.id,
      title: req.body.title,
      content: req.body.content,
    })
    .then((postId) => {
      res.status(201).json({ newPostId: postId[0] });
    })
    .catch(() => {
      res.status(500).json({ message: "Error creating a new post" });
    });
};

const getPostById = (req, res) => {
  const typeId = req.params.postID;
  knex("posts")
    .where({ id: typeId })
    .then((post) => {
      if (post.length > 0) {
        res.status(200).json(post.shift());
      } else {
        res.status(400).json({ message: "Error getting post" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "Error getting post" });
    });
};

const editPost = async (req, res) => {
  const typeId = req.params.postID;
  const changes = req.body;
  console.log(typeId);
  try {
    const count = await knex("posts").where({ id: typeId }).update(changes);
    if (count) {
      res.status(200).json({ updated: count });
    } else {
      res.status(404).json({ message: "ID not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: { err } });
    // .json({ message: "Error updating new post" }, { error: err });
  }
};

const deletePost = async (req, res) => {
  const typeId = req.params.postID;
  try {
    const count = await knex("posts").where({ id: typeId }).del();
    if (count) {
      res.status(200).json({ updated: count });
    } else {
      res.status(404).json({ message: "ID not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: { err } });
  }
};
module.exports = {
  getAllPost,
  createNewPost,
  editPost,
  getPostById,
  deletePost
};
