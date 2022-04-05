import "./Profile.scss";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SERVER_URL = "http://localhost:8080";

function Profile(props) {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [userPostList, setuserPostList] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm("");

  //login function
  const loginFunction = () => {
    axios
      .get(`${SERVER_URL}/auth/profile`, { withCredentials: true })
      .then((res) => {
        if (res.data) {
          setisLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const getUserInfobyId = () => {
    const userId = props.match.params.id;
    axios.get(`${SERVER_URL}/users/${userId}`).then((res) => {
      setUserInfo(res.data);
    });
  };
  const fetchPostsbyUserId = () => {
    const userId = props.match.params.id;
    axios
      .get(`${SERVER_URL}/users/posts/${userId}`)
      .then((posts) => {
        setuserPostList(posts.data);
      })
      .catch((err) => {
        console.log("Error fetching posts:", err);
      });
  };
  const handelUpdate = (data) => {
    const newUpdateInfo = {
      age: data.age,
    };
    axios
      .put(`${SERVER_URL}/users/${userInfo.id}`, newUpdateInfo, {
        withCredentials: true,
      })
      .then((data) => {
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loginFunction();
    getUserInfobyId();
    fetchPostsbyUserId();
  }, []);

  return (
    <section className="profile">
      <h1 className="profile__header">Profile</h1>
      <div className="profile__info">
        <div className="profile__info--user">
          {/* {userInfo && <div className="updatedEffect">Profile Updated</div>} */}

          <img src={userInfo.avatar_url} alt="UserIcon" />
          <div>Email: {userInfo.email}</div>
          <div>Display Name: {userInfo.displayName}</div>
          <div>First Name: {userInfo.givenName}</div>
          <div>Last Name: {userInfo.familyName}</div>
          <div>Rating: {userInfo.rating}</div>
          <div>Done Case: {userInfo.doneCase}</div>
          <div>Age: {userInfo.age}</div>
          <div>Address: {userInfo.address}</div>
          <div>Accounts create at {userInfo.updated_at}</div>

          {isLoggedIn && (
            <>
              {userInfo.age > 0 ? (
                <NavLink to={`/updateProfile/${userInfo.id}`}>
                  Edit Profile
                </NavLink>
              ) : (
                <div>
                  <div className="register__background"></div>
                  <form
                    className="register"
                    onSubmit={handleSubmit(handelUpdate)}
                  >
                    <div>Age: </div>
                    <input
                      {...register("age", { required: "This is required" })}
                    />
                    <p>{errors.age?.message}</p>
                    <button type="submit">Starting Your Journey</button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {userPostList.length > 1 && (
        <div className="userPost">
          <h2>Post</h2>
          <div>{userPostList[userPostList.length - 1].title}</div>
          <div>{userPostList[userPostList.length - 1].content}</div>
          <NavLink to={`/users/posts/${userInfo.id}`}>More post</NavLink>
        </div>
      )}
    </section>
  );
}

export default Profile;
