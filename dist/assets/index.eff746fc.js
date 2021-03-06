var _e = Object.defineProperty,
  ve = Object.defineProperties;
var fe = Object.getOwnPropertyDescriptors;
var Q = Object.getOwnPropertySymbols;
var Ne = Object.prototype.hasOwnProperty,
  ye = Object.prototype.propertyIsEnumerable;
var X = (s, i, a) =>
  i in s
    ? _e(s, i, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (s[i] = a),
  v = (s, i) => {
    for (var a in i || (i = {})) Ne.call(i, a) && X(s, a, i[a]);
    if (Q) for (var a of Q(i)) ye.call(i, a) && X(s, a, i[a]);
    return s;
  },
  w = (s, i) => ve(s, fe(i));
import {
  j as e,
  B as _,
  r as n,
  a as P,
  i as be,
  g as Se,
  b as Pe,
  P as xe,
  G as we,
  s as ke,
  v as Ce,
  w as G,
  D as Le,
  e as $e,
  u as se,
  c as Ie,
  d as Ee,
  f as t,
  N as f,
  A as H,
  F as $,
  h as ie,
  k as re,
  l as oe,
  m as F,
  n as ne,
  T as le,
  o as De,
  S as Te,
  E as Re,
  p as Ae,
  q as qe,
  t as A,
  x as Ue,
  y as Me,
  R as Be,
  z as Z,
  C as ee,
  H as B,
  I as O,
  W as ce,
  J as Fe,
  K as We,
  L as Ve,
  M as He,
  O as je,
  Q as Ge,
  U as E,
  V as Oe,
  X as Je,
} from "./vendor.a94fb1eb.js";
const Ke = function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const l of r)
      if (l.type === "childList")
        for (const d of l.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && o(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(r) {
    const l = {};
    return (
      r.integrity && (l.integrity = r.integrity),
      r.referrerpolicy && (l.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (l.credentials = "include")
        : r.crossorigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const l = a(r);
    fetch(r.href, l);
  }
};
Ke();
const Ye = "https://village-backend-finalproject.herokuapp.com";
function ze() {
  return e(_, { href: `${Ye}/auth/logout`, children: "Log out" });
}
const Qe = "https://village-backend-finalproject.herokuapp.com";
function q(s) {
  const [i, a] = n.exports.useState(!1),
    [o, r] = n.exports.useState(""),
    l = () => {
      P.get(`${Qe}/auth/profile`, { withCredentials: !0 })
        .then((d) => {
          d.data && (a(!0), r(d.data));
        })
        .catch((d) => console.log(d));
    };
  return (
    n.exports.useEffect(() => {
      l();
    }, [i]),
    { isLoggedIn: i, userInfo: o }
  );
}
const Xe = {
  apiKey: "AIzaSyCNMJDGK0pc6sklvk0eHnutZyFO2E5eugo",
  authDomain: "village-345022.firebaseapp.com",
  projectId: "village-345022",
  storageBucket: "village-345022.appspot.com",
  messagingSenderId: "1059450499873",
  appId: "1:1059450499873:web:d202c0b796f92795f5c460",
  measurementId: "G-NDJ9KSQRWT",
},
  K = be(Xe),
  de = Se(K),
  Y = Pe(K),
  J = xe(K),
  Ze = new we(),
  et = async () => {
    try {
      const i = (await ke(Y, Ze)).user,
        a = Ce(G(J, "users"), Le("uid", "==", i.uid));
      (await $e(a)).docs.length === 0 &&
        (await se(G(J, "users"), {
          uid: i.uid,
          name: i.displayName,
          authProvider: "google",
          email: i.email,
        }));
    } catch (s) {
      console.error(s), alert(s.message);
    }
  },
  tt = async (s, i, a) => {
    try {
      const r = (await Ie(Y, i, a)).user;
      await se(G(J, "users"), {
        uid: r.uid,
        name: s,
        authProvider: "local",
        email: i,
      });
    } catch (o) {
      console.error(o), alert(o.message);
    }
  },
  at = "https://village-backend-finalproject.herokuapp.com";
function st() {
  const [s, i] = n.exports.useState(""),
    [a, o] = n.exports.useState(""),
    [r, l] = n.exports.useState(""),
    [d, p, N] = Ee(Y),
    m = () => {
      r || alert("Please enter name"),
        tt(r, s, a),
        P.post(`${at}/auth/newlogin`, { google_id: d.uid, email: d.email })
          .then((h) => {
            console.log("res", h);
          })
          .catch((h) => console.log(h));
    };
  return (
    n.exports.useEffect(() => { }, [d, p]),
    e("div", {
      className: "register",
      children: t("div", {
        className: "register__container",
        children: [
          e("input", {
            type: "text",
            className: "register__textBox",
            value: r,
            onChange: (h) => l(h.target.value),
            placeholder: "Full Name",
          }),
          e("input", {
            type: "text",
            className: "register__textBox",
            value: s,
            onChange: (h) => i(h.target.value),
            placeholder: "E-mail Address",
          }),
          e("input", {
            type: "password",
            className: "register__textBox",
            value: a,
            onChange: (h) => o(h.target.value),
            placeholder: "Password",
          }),
          e("button", {
            className: "register__btn",
            onClick: m,
            children: "Register",
          }),
          e("button", {
            className: "register__btn register__google",
            onClick: et,
            children: "Register with Google",
          }),
        ],
      }),
    })
  );
}
function it() {
  const { userInfo: s, isLoggedIn: i } = q(),
    [a, o] = n.exports.useState(!1),
    r = () => {
      o(!a);
    };
  return t("header", {
    className: "header",
    children: [
      e(f, {
        className: "navLink fontStyle",
        activeClassName: "activeheader",
        to: "/",
        children: t("div", {
          className: "header__logo",
          children: [
            "Vi",
            e("span", { className: "header__logo--special", children: "ll" }),
            "ge",
          ],
        }),
      }),
      e(st, {}),
      i
        ? t("div", {
          children: [
            e(H, {
              onClick: r,
              sx: { width: 56, height: 56 },
              className: "header__userIcon",
              src: s.avatar_url,
              alt: "UserIcon",
            }),
            a &&
            t("div", {
              onClick: r,
              className: "header__info",
              children: [
                e(f, {
                  className: "navLink",
                  to: "/createpost",
                  children: e(_, {
                    variant: "contained",
                    children: " Create a Post",
                  }),
                }),
                e(f, {
                  className: "navLink header_user",
                  activeClassName: "activeheader",
                  to: `/profile/${s.id}`,
                  children: e(_, { children: "My profile" }),
                }),
                e(ze, {}),
              ],
            }),
          ],
        })
        : e($, {
          children: e(f, {
            className: "navLink",
            to: "/loginWithGoogle",
            children: e(_, {
              variant: "contained",
              disableElevation: !0,
              children: "Log in / Create a new Account",
            }),
          }),
        }),
      e("div", {
        className: "header__nav",
        children: t("div", {
          className: "header__nav",
          children: [
            e(f, {
              className: "header__nav--pageDefault",
              activeClassName: "header__nav--pageState",
              to: "/home",
              children: "HOME",
            }),
            e(f, {
              className: "header__nav--pageDefault",
              activeClassName: "header__nav--pageState",
              to: "/category",
              children: "CATEGORY",
            }),
          ],
        }),
      }),
    ],
  });
}
function rt() {
  return e("footer", { className: "footer" });
}
const ot = "https://village-backend-finalproject.herokuapp.com";
function he(s) {
  const [i, a] = n.exports.useState(0),
    [o, r] = n.exports.useState(""),
    l = (p) => {
      p.preventDefault(), console.log("aaaa");
      const N = p.target[0].files[0];
      d(N);
    },
    d = (p) => {
      if (!p) return;
      const N = ie(de, `/files/${p.name}`),
        m = re(N, p);
      m.on(
        "state_changed",
        (h) => {
          const u = Math.round(h.bytesTransferred / h.totalBytes) * 100;
          a(u);
        },
        (h) => console.log(h),
        () => {
          oe(m.snapshot.ref).then((h) =>
            P.put(
              `${ot}/users/${s.userInfo.id}`,
              { avatar_url: h },
              { withCredentials: !0 }
            )
              .then((u) => {
                r(h), console.log(u);
              })
              .catch((u) => console.log(u))
          );
        }
      );
    };
  return t("div", {
    className: "regform",
    children: [
      i
        ? t("div", {
          className: "regform__photo",
          children: [
            e("img", { className: "profilePicture", src: o, alt: "icon" }),
            t("h3", { children: ["Uploaded ", i, " %"] }),
          ],
        })
        : e("img", {
          className: "profilePicture",
          src: s.userInfo.avatar_url,
          alt: "icon",
        }),
      t("form", {
        className: "regform__upload",
        onSubmit: l,
        children: [
          e("input", { className: "navLink", type: "file" }),
          e("div", {
            className: "createPostButton",
            children: e("button", {
              className: "noStyle",
              type: "submit",
              children: e(_, { variant: "contained", children: "Submit" }),
            }),
          }),
        ],
      }),
    ],
  });
}
const j = "https://village-backend-finalproject.herokuapp.com";
function nt(s) {
  var g, b;
  const { isLoggedIn: i } = q(),
    [a, o] = n.exports.useState(""),
    [r, l] = n.exports.useState(!1),
    [d, p] = n.exports.useState(!0),
    {
      register: N,
      handleSubmit: m,
      reset: h,
      formState: { errors: u },
    } = F(""),
    y = () => {
      d && p(!1);
    },
    C = () => {
      d || p(!0);
    },
    I = () => {
      const L = s.match.params.id;
      P.get(`${j}/users/${L}`).then((x) => {
        o(x.data);
      });
    },
    k = () => {
      const L = s.match.params.id;
      P.get(`${j}/users/posts/${L}`)
        .then((x) => {
          l(x.data);
        })
        .catch((x) => {
          console.log("Error fetching posts:", x);
        });
    },
    R = (L) => {
      const x = { age: L.age };
      P.put(`${j}/users/${a.id}`, x, { withCredentials: !0 })
        .then((T) => {
          s.history.push("/"), location.reload();
        })
        .catch((T) => console.log(T));
    };
  return (
    n.exports.useEffect(() => {
      (document.title = `${a.displayName} Profile`), I(), k();
    }, [a.displayName]),
    n.exports.useEffect(() => {
      a && h({ avatar_url: a.avatar_url, displayName: a.displayName });
    }, [a]),
    console.log(r),
    t("section", {
      className: "profile",
      children: [
        t("h1", {
          className: "pageHeader",
          children: [a.displayName, "'s Profile"],
        }),
        i &&
        e(f, {
          className: "navLink profile__edit",
          to: `/updateProfile/${a.id}`,
          children: e(_, { variant: "contained", children: "Edit Profile" }),
        }),
        t("div", {
          className: "profile__info",
          children: [
            e("div", {
              className: "profile__info--areaone",
              children: e(H, {
                sx: { width: 250, height: 250 },
                src: a.avatar_url,
                alt: "UserIcon",
              }),
            }),
            t("div", {
              className: "profile__info--areatwo",
              children: [
                t("div", {
                  className: "profile__info--text",
                  children: [
                    t("section", {
                      className: "profile__info--nameAndPerform",
                      children: [
                        e("h3", { children: "Info" }),
                        t("div", { children: ["First Name: ", a.givenName] }),
                        t("div", { children: ["Last Name: ", a.familyName] }),
                        t("div", { children: ["Age: ", a.age] }),
                      ],
                    }),
                    t("section", {
                      className: "profile__info--nameAndPerform",
                      children: [
                        e("h3", { children: "Performance" }),
                        t("div", { children: ["Rating: ", a.rating] }),
                        t("div", { children: ["Done Case: ", a.doneCase] }),
                      ],
                    }),
                  ],
                }),
                t("section", {
                  className: "profile__info--contact",
                  children: [
                    e("h3", { children: "Contact Me" }),
                    e("div", {
                      className: "profile__info--email",
                      children: a.email,
                    }),
                    t("div", { children: ["Address: ", a.address] }),
                    t("div", {
                      children: ["Accounts create at ", a.updated_at],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        t("div", {
          className: "profile__info--functionArea",
          children: [
            r.length > 0 &&
            t("div", {
              className: "profile__info--areathree",
              children: [
                e("h2", {
                  className: "profile__info--subheader",
                  children: "The Latest Post",
                }),
                t(f, {
                  className: "navLink ",
                  to: `/post/${r[0].post_id}`,
                  children: [
                    e("h2", { children: r[0].title }),
                    t("div", {
                      className: "profile__info--postTextInfo",
                      children: [
                        e("img", {
                          className: "profile__info--picture",
                          src: r[0].picture_Details,
                          alt: r[0].title,
                        }),
                        t("div", {
                          className: "profile__info--postText",
                          children: [
                            e("div", { children: r[0].content }),
                            e("div", {
                              className: "postType",
                              children: r[0].type,
                            }),
                            e("div", {
                              className: "postStatus",
                              children: r[0].status,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e(f, {
                  className: "navLink morePost",
                  to: `/users/posts/${a.id}`,
                  children: e(_, {
                    variant: "contained",
                    children: "More posts",
                  }),
                }),
              ],
            }),
            i &&
            e($, {
              children:
                a.age > 0
                  ? e($, {})
                  : t("div", {
                    children: [
                      e("div", { className: "register__background" }),
                      e("div", {
                        className: "register",
                        children: d
                          ? t($, {
                            children: [
                              e("h1", {
                                className: "register__heading",
                                children:
                                  "Two more steps for your Journey...",
                              }),
                              e(he, { userInfo: a }),
                              e("div", {
                                className: "register__button",
                                children: e(_, {
                                  variant: "outlined",
                                  onClick: y,
                                  children: "Next",
                                }),
                              }),
                            ],
                          })
                          : t("div", {
                            className: "regform2",
                            children: [
                              e("h1", {
                                className: "register__heading",
                                children:
                                  "One more step for your Journey...",
                              }),
                              t("form", {
                                className: "regform2__form",
                                onSubmit: m(R),
                                children: [
                                  t("div", {
                                    className: "regform2__box",
                                    children: [
                                      t("div", {
                                        className: "regform2__box--topic",
                                        children: ["DisplayName:", " "],
                                      }),
                                      e(
                                        "input",
                                        v(
                                          { className: "inputStyle" },
                                          N("displayName", {
                                            required: "This is required",
                                          })
                                        )
                                      ),
                                    ],
                                  }),
                                  e("p", {
                                    children:
                                      (g = u.age) == null
                                        ? void 0
                                        : g.message,
                                  }),
                                  t("div", {
                                    className: "regform2__box",
                                    children: [
                                      e("div", {
                                        className: "regform2__box--topic",
                                        children: "Your Age: ",
                                      }),
                                      e(
                                        "input",
                                        v(
                                          { className: "inputStyle" },
                                          N("age", {
                                            required: "This is required",
                                          })
                                        )
                                      ),
                                    ],
                                  }),
                                  e("p", {
                                    children:
                                      (b = u.age) == null
                                        ? void 0
                                        : b.message,
                                  }),
                                  t("div", {
                                    className: "regform2__button",
                                    children: [
                                      e("div", {
                                        onClick: C,
                                        children: e(_, {
                                          variant: "outlined",
                                          children: "Back",
                                        }),
                                      }),
                                      e("button", {
                                        className: "noStyle",
                                        type: "submit",
                                        children: e(_, {
                                          variant: "contained",
                                          children:
                                            "Starting Your Journey",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
            }),
          ],
        }),
      ],
    })
  );
}
function ue(s) {
  const i = s.posts.filter((a) =>
    s.input === ""
      ? a
      : a.title.toLowerCase().includes(s.input) ||
      a.type.toLowerCase().includes(s.input) ||
      a.status.toLowerCase().includes(s.input) ||
      a.displayName.toLowerCase().includes(s.input)
  );
  return e("section", {
    className: "postSection",
    children: i.map((a) =>
      t(
        f,
        {
          className: "postSection__post",
          to: `/post/${a.post_id}`,
          children: [
            a.picture_Details
              ? e("div", {
                className: "postSection__replace",
                children: e("img", {
                  className: "postSection__picture",
                  src: a.picture_Details,
                  alt: `${a.title} picture`,
                }),
              })
              : e("div", {
                className: "postSection__noPicture",
                children: e(ne, { sx: { width: 100, height: 100 } }),
              }),
            t("div", {
              className: "postSection__detailBox",
              children: [
                t("div", {
                  className: "postSection__details--user",
                  children: ["By ", a.displayName],
                }),
                e("div", {
                  className: "postSection__details--time",
                  children: a.updated_at,
                }),
              ],
            }),
            e("div", { className: "postSection__title", children: a.title }),
            t("div", {
              className: "postSection__details",
              children: [
                t("div", { className: "postType", children: [" ", a.type] }),
                t("div", {
                  className: "postStatus",
                  children: [" ", a.status],
                }),
              ],
            }),
          ],
        },
        a.post_id
      )
    ),
  });
}
function lt(s) {
  const [i, a] = n.exports.useState(s);
  return {
    value: i,
    toggleValue: (r) => {
      a((l) => (typeof r == "boolean" ? r : !l));
    },
  };
}
const ct = "https://village-backend-finalproject.herokuapp.com";
function dt() {
  const [s, i] = n.exports.useState(""),
    [a, o] = n.exports.useState(""),
    { value: r, toggleValue: l } = lt(!1),
    d = (u) => {
      var y = u.target.value.toLowerCase();
      o(y);
    },
    [p, N] = n.exports.useState("Cook"),
    m = () => {
      P.get(`${ct}/posts/category/${p}`)
        .then((u) => {
          i(u.data);
        })
        .catch((u) => {
          console.log("Error fetching posts:", u);
        });
    },
    h = (u) => {
      N(u.target.innerHTML);
    };
  return (
    n.exports.useEffect(() => {
      m(), (document.title = "Category");
    }, [p]),
    t("div", {
      className: "category",
      children: [
        e("div", {
          className: "searchBar",
          children: e(le, {
            id: "outlined-basic",
            onChange: d,
            variant: "outlined",
            fullWidth: !0,
            label: "Search Key Words",
          }),
        }),
        t("div", {
          className: "category__wrapper",
          children: [
            t("div", {
              className: "category__area",
              children: [
                e("div", {
                  className: "category__area--box account",
                  children: e("div", {
                    className: "category__area--title",
                    type: "text",
                    onClick: h,
                    children: "Accounting",
                  }),
                }),
                e("div", {
                  className: "category__area--box babysitting",
                  children: e("div", {
                    className: "category__area--title",
                    type: "text",
                    onClick: h,
                    children: "Babysitting",
                  }),
                }),
                r
                  ? t($, {
                    children: [
                      e("div", {
                        className: "category__area--box cook",
                        children: e("div", {
                          className: "category__area--title",
                          type: "text",
                          onClick: h,
                          children: "Cook",
                        }),
                      }),
                      e("div", {
                        className: "category__area--box housekeeping",
                        children: e("div", {
                          className: "category__area--title",
                          type: "text",
                          onClick: h,
                          children: "Housekeeping",
                        }),
                      }),
                      e("div", {
                        className: "category__area--box design",
                        children: e("div", {
                          className: "category__area--title",
                          type: "text",
                          onClick: h,
                          children: "Design",
                        }),
                      }),
                      e("div", {
                        className: "category__area--box gardening",
                        children: e("div", {
                          className: "category__area--title ",
                          type: "text",
                          onClick: h,
                          children: "Gardening",
                        }),
                      }),
                      e("div", {
                        className: "category__area--box dog",
                        children: e("div", {
                          className: "category__area--title",
                          type: "text",
                          onClick: h,
                          children: "dog walking",
                        }),
                      }),
                      e("div", {
                        className: "category__area--box technician",
                        children: e("div", {
                          className: "category__area--title",
                          type: "text",
                          onClick: h,
                          children: "technician jobs",
                        }),
                      }),
                      e("div", {
                        className: "category__area--box house",
                        children: e("div", {
                          className: "category__area--title",
                          type: "text",
                          onClick: h,
                          children: "house moving",
                        }),
                      }),
                    ],
                  })
                  : e("div", {
                    className: "category__area--showMore",
                    onClick: l,
                    children: "MORE ...",
                  }),
              ],
            }),
            s && e(ue, { posts: s, input: a }),
          ],
        }),
      ],
    })
  );
}
const ht = De.button`
  blackground-color: transparent;
  border: 1px solid black;
  width: 3rem;
  height: 3rem;
`;
function z() {
  return e(ht, { children: " Log in / Create a new Account" });
}
const ut = "https://village-backend-finalproject.herokuapp.com";
function pt(s) {
  var N, m, h, u, y;
  const { userInfo: i, isLoggedIn: a } = q(),
    {
      register: o,
      handleSubmit: r,
      reset: l,
      formState: { errors: d },
    } = F(""),
    p = (C) => {
      const I = {
        givenName: C.givenName,
        familyName: C.familyName,
        displayName: C.displayName,
        age: C.age,
        address: C.address,
      };
      P.put(`${ut}/users/${i.id}`, I, { withCredentials: !0 })
        .then((k) => {
          location.reload(), s.history.push(`/profile/${i.id}`);
        })
        .catch((k) => console.log(k));
    };
  return (
    n.exports.useEffect(() => {
      i &&
        l({
          displayName: i.displayName,
          familyName: i.familyName,
          givenName: i.givenName,
          age: i.age,
          address: i.address,
        });
    }, [i]),
    t("div", {
      className: "updatePage",
      children: [
        e("h1", { className: "pageHeader", children: "Update" }),
        a
          ? t("div", {
            children: [
              e(he, { userInfo: i }),
              t("form", {
                className: "updatePage__form",
                onSubmit: r(p),
                children: [
                  t("div", {
                    className: "updatePage__box boxOne",
                    children: [
                      e("div", { children: "Display Name: " }),
                      e(
                        "input",
                        v(
                          { className: "inputStyle" },
                          o("displayName", { required: "This is required" })
                        )
                      ),
                      e("p", {
                        children:
                          (N = d.displayName) == null ? void 0 : N.message,
                      }),
                      e("div", { children: "First Name: " }),
                      e(
                        "input",
                        v(
                          { className: "inputStyle" },
                          o("givenName", { required: "This is required" })
                        )
                      ),
                      e("p", {
                        children:
                          (m = d.givenName) == null ? void 0 : m.message,
                      }),
                      e("div", { children: "Last Name: " }),
                      e(
                        "input",
                        v(
                          { className: "inputStyle" },
                          o("familyName", { required: "This is required" })
                        )
                      ),
                      e("p", {
                        children:
                          (h = d.familyName) == null ? void 0 : h.message,
                      }),
                      e("div", { children: "Age: " }),
                      e(
                        "input",
                        v(
                          { className: "inputStyle" },
                          o("age", { required: "This is required" })
                        )
                      ),
                      e("p", {
                        children: (u = d.age) == null ? void 0 : u.message,
                      }),
                      e("div", { children: "Address: " }),
                      e(
                        "input",
                        v(
                          { className: "inputStyle" },
                          o("address", { required: "This is required" })
                        )
                      ),
                      e("p", {
                        children:
                          (y = d.address) == null ? void 0 : y.message,
                      }),
                      e("div", {
                        className: "createPostButton",
                        children: e("button", {
                          className: "noStyle",
                          type: "submit",
                          children: e(_, {
                            variant: "contained",
                            children: "Submit",
                          }),
                        }),
                      }),
                    ],
                  }),
                  t("div", {
                    className: "updatePage__box boxTwo",
                    children: [
                      e("h2", { children: "Info you cannot change" }),
                      t("div", { children: ["Email: ", i.email] }),
                      t("div", { children: ["Rating: ", i.rating] }),
                      t("div", { children: ["Done Case: ", i.doneCase] }),
                      t("div", {
                        children: ["Account creates at ", i.updated_at],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
          : t($, {
            children: [
              e("p", { children: "Login to update your profile." }),
              e(z, {}),
            ],
          }),
      ],
    })
  );
}
const mt = "https://village-backend-finalproject.herokuapp.com";
function gt() {
  const [s, i] = n.exports.useState(""),
    [a, o] = n.exports.useState(""),
    r = (d) => {
      var p = d.target.value.toLowerCase();
      o(p);
    },
    l = () => {
      P.get(`${mt}/posts`)
        .then((d) => {
          i(d.data);
        })
        .catch((d) => {
          console.log("Error fetching posts:", d);
        });
    };
  return (
    n.exports.useEffect(() => {
      (document.title = "HOME"), l();
    }, [s]),
    t("section", {
      className: "postPage",
      children: [
        t("div", {
          className: "postPage__text fontStyletwo",
          children: [
            e("h1", {
              className: "postPage__text--header",
              children: "Welcome!",
            }),
            e("div", {
              className:
                "animate__animated animate__flipInX postPage__text--subheaderTwo ",
              children: "A new way to Contribute our Community.",
            }),
            e("h1", {
              className: "postPage__text--subheader",
              children: "This is VILLAGE",
            }),
          ],
        }),
        s &&
        t("div", {
          className: "newPostSection",
          children: [
            e("h2", {
              className: "newPostSection__topic",
              children: "Lastest Posts",
            }),
            t(Te, {
              effect: "flip",
              grabCursor: !0,
              pagination: !0,
              navigation: !0,
              modules: [Re, Ae, qe],
              className: "mySwiper",
              children: [
                e(A, {
                  children: e(f, {
                    to: `/post/${s[0].post_id}`,
                    children: e("img", {
                      className: "newPostSection__Picture",
                      src: s[0].picture_Details,
                      alt: "",
                    }),
                  }),
                }),
                e(A, {
                  children: e(f, {
                    to: `/post/${s[1].post_id}`,
                    children: e("img", {
                      className: "newPostSection__Picture",
                      src: s[1].picture_Details,
                      alt: "",
                    }),
                  }),
                }),
                e(A, {
                  children: e(f, {
                    to: `/post/${s[2].post_id}`,
                    children: e("img", {
                      className: "newPostSection__Picture",
                      src: s[2].picture_Details,
                      alt: "",
                    }),
                  }),
                }),
                e(A, {
                  children: e(f, {
                    to: `/post/${s[3].post_id}`,
                    children: e("img", {
                      className: "newPostSection__Picture",
                      src: s[3].picture_Details,
                      alt: "",
                    }),
                  }),
                }),
                e(A, {
                  children: e(f, {
                    to: `/post/${s[4].post_id}`,
                    children: e("img", {
                      className: "newPostSection__Picture",
                      src: s[4].picture_Details,
                      alt: "",
                    }),
                  }),
                }),
                e(A, {
                  children: e(f, {
                    to: `/post/${s[5].post_id}`,
                    children: e("img", {
                      className: "newPostSection__Picture",
                      src: s[5].picture_Details,
                      alt: "",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        e("div", {
          className: "searchBar",
          children: e(le, {
            id: "outlined-basic",
            onChange: r,
            variant: "outlined",
            fullWidth: !0,
            label: "Search Topic, Category, User... ",
          }),
        }),
        e("h2", { className: "newPostSection__topic", children: "All Posts" }),
        s && e(ue, { posts: s, input: a }),
      ],
    })
  );
}
const _t = "https://village-backend-finalproject.herokuapp.com";
function vt(s) {
  const [i, a] = n.exports.useState([]),
    o = () => {
      const r = s.match.params.id;
      P.get(`${_t}/users/posts/${r}`)
        .then((l) => {
          a(l.data);
        })
        .catch((l) => {
          console.log("Error fetching posts:", l);
        });
    };
  return (
    n.exports.useEffect(() => {
      o();
    }, []),
    t("div", {
      className: "postList",
      children: [
        e("h1", { className: "pageHeader", children: "Post List" }),
        i &&
        i.map((r) =>
          t(
            f,
            {
              className: "postSection__post",
              to: `/post/${r.post_id}`,
              children: [
                r.picture_Details
                  ? e("div", {
                    className: "postSection__replace",
                    children: e("img", {
                      className: "postSection__picture",
                      src: r.picture_Details,
                      alt: `${r.title} picture`,
                    }),
                  })
                  : e("div", {
                    className: "postSection__noPicture",
                    children: e(ne, { sx: { width: 100, height: 100 } }),
                  }),
                t("div", {
                  className: "postSection__detailBox",
                  children: [
                    t("div", {
                      className: "postSection__details--user",
                      children: ["By ", r.displayName],
                    }),
                    e("div", {
                      className: "postSection__details--time",
                      children: r.updated_at,
                    }),
                  ],
                }),
                e("div", {
                  className: "postSection__title",
                  children: r.title,
                }),
                t("div", {
                  className: "postSection__details",
                  children: [
                    t("div", {
                      className: "postType",
                      children: [" ", r.type],
                    }),
                    t("div", {
                      className: "postStatus",
                      children: [" ", r.status],
                    }),
                  ],
                }),
              ],
            },
            r.post_id
          )
        ),
      ],
    })
  );
}
function pe(s) {
  return t(Ue, {
    children: [
      e(Me, { className: "subTitle", children: "Payment" }),
      t(Be, {
        "aria-labelledby": "paymentMethod",
        name: "controlled-radio-buttons-group",
        value: s.value,
        onChange: s.handleChange,
        children: [
          e(Z, {
            value: "Non-Monetary Payment",
            control: e(ee, { color: "success" }),
            label: "Non-Monetary Payment",
          }),
          e(Z, {
            value: "Money",
            control: e(ee, { color: "default" }),
            label: "Money",
          }),
        ],
      }),
    ],
  });
}
const ft = "https://village-backend-finalproject.herokuapp.com";
function Nt(s) {
  var x, T, U, M;
  const { userInfo: i, isLoggedIn: a } = q(),
    [o, r] = n.exports.useState("Non-Monetary Payment"),
    [l, d] = n.exports.useState(!0),
    [p, N] = n.exports.useState(""),
    [m, h] = n.exports.useState(0),
    {
      register: u,
      control: y,
      handleSubmit: C,
      formState: { errors: I },
    } = F({
      defaultValues: {
        title: "",
        content: "",
        status: "open to apply",
        type: "",
        salary: "",
        requireDate: "",
        estimate_time: "",
        salary_replacement: "",
      },
    }),
    k = () => {
      d(o !== "Money");
    };
  n.exports.useEffect(() => {
    k(), (document.title = "Upload Post");
  }, [o]);
  const R = (c) => {
    r(c.target.value);
  },
    g = (c) => {
      P.post(
        `${ft}/posts`,
        {
          picture_Details: p,
          title: c.title,
          content: c.content,
          status: c.status,
          type: c.type.value,
          requireDate: c.requireDate,
          salary: c.salary,
          salary_replacement: c.salary_replacement,
          estimate_time: c.estimate_time.value,
        },
        { withCredentials: !0 }
      )
        .then((S) => {
          s.history.push("/");
        })
        .catch((S) => {
          console.log("Error creating a new post:", S);
        });
    },
    b = (c) => {
      c.preventDefault();
      const S = c.target[0].files[0];
      L(S);
    },
    L = (c) => {
      if (!c) return;
      const S = ie(de, `/files/${c.name}`),
        W = re(S, c);
      W.on(
        "state_changed",
        (D) => {
          const ge = Math.round(D.bytesTransferred / D.totalBytes) * 100;
          h(ge);
        },
        (D) => console.log(D),
        () => {
          oe(W.snapshot.ref).then((D) => N(D));
        }
      );
    };
  return e("section", {
    className: "createPage",
    children: a
      ? t($, {
        children: [
          e("h1", { className: "pageheader", children: "Create New Post" }),
          t("div", {
            className: "createPageForm",
            children: [
              t("form", {
                className: "createPageForm__Upload",
                onSubmit: b,
                children: [
                  e("h3", { children: "Upload Photo First" }),
                  e("input", {
                    className: "noStyle createPageForm__Upload--button",
                    type: "file",
                  }),
                  e("button", {
                    type: "submit",
                    className: "noStyle createPageForm__Upload--button",
                    children: e(_, {
                      variant: "contained",
                      children: "Upload",
                    }),
                  }),
                ],
              }),
              m
                ? t("div", {
                  className: "createPageForm__Upload--photo",
                  children: [
                    e("img", {
                      className: "profilePicture",
                      src: p,
                      alt: "icon",
                    }),
                    t("h3", { children: ["Uploaded ", m, " %"] }),
                  ],
                })
                : e("div", { className: "picture-replace" }),
            ],
          }),
          t("form", {
            className: "createPostTwo",
            onSubmit: C(g),
            children: [
              t("div", {
                className: "createPostTwo__textInfo",
                children: [
                  e("div", { className: "subTitle", children: "TITLE: " }),
                  e(
                    "input",
                    w(
                      v(
                        { className: "inputStyle" },
                        u("title", { required: "This is required." })
                      ),
                      {
                        placeholder:
                          "something like: Looking for a dog walker",
                      }
                    )
                  ),
                  e("p", {
                    className: "errorMessage",
                    children: (x = I.title) == null ? void 0 : x.message,
                  }),
                  e("div", { className: "subTitle", children: "DETAIlS: " }),
                  e(
                    "input",
                    w(
                      v(
                        { className: "inputStyleBig" },
                        u("content", { required: "This is required." })
                      ),
                      { placeholder: "I need a dog walker" }
                    )
                  ),
                  e("p", {
                    className: "errorMessage",
                    children: (T = I.content) == null ? void 0 : T.message,
                  }),
                  t("section", {
                    className: "dropdown",
                    children: [
                      e("div", { className: "subTitle", children: "Type" }),
                      e(B, {
                        name: "type",
                        control: y,
                        render: ({ field: c }) =>
                          e(
                            O,
                            w(v({ isClearable: !0 }, c), {
                              options: [
                                { value: "Accounting", label: "Accounting" },
                                {
                                  value: "Babysitting",
                                  label: "Babysitting",
                                },
                                { value: "Cook", label: "Cook" },
                                {
                                  value: "Housekeeping",
                                  label: "Housekeeping",
                                },
                                {
                                  value: "Design/ video editing",
                                  label: "Design/ video editing",
                                },
                                { value: "Gardening", label: "Gardening" },
                                {
                                  value: "dog walking",
                                  label: "dog walking",
                                },
                                {
                                  value: "technician jobs",
                                  label: "technician jobs",
                                },
                                {
                                  value: "house moving",
                                  label: "house moving",
                                },
                              ],
                            })
                          ),
                      }),
                    ],
                  }),
                ],
              }),
              t("div", {
                className: "createPostTwo__otherInfo",
                children: [
                  t("div", {
                    className: "createPostTwo__otherInfo--payment",
                    children: [
                      e(pe, { handleChange: R, value: o, control: y }),
                      l
                        ? t("div", {
                          children: [
                            e("div", {
                              className: "subTitle",
                              children:
                                "What would you like to offer except money?",
                            }),
                            e(
                              "input",
                              w(
                                v(
                                  { className: "inputStyle" },
                                  u("salary_replacement", {
                                    required: "This is required.",
                                  })
                                ),
                                { placeholder: "a dozen of beer" }
                              )
                            ),
                            e("p", {
                              className: "errorMessage",
                              children:
                                (U = I.salary_replacement) == null
                                  ? void 0
                                  : U.message,
                            }),
                          ],
                        })
                        : t("div", {
                          children: [
                            t("div", {
                              className: "subTitle",
                              children: [
                                "Show a range you would like to offer:",
                                " ",
                              ],
                            }),
                            e(
                              "input",
                              w(
                                v(
                                  { className: "inputStyle" },
                                  u("salary", {
                                    required: "This is required.",
                                  })
                                ),
                                { placeholder: "CA$20 - CA$25  per hour" }
                              )
                            ),
                            e("p", {
                              className: "errorMessage",
                              children:
                                (M = I.salary) == null ? void 0 : M.message,
                            }),
                          ],
                        }),
                    ],
                  }),
                  t("div", {
                    className: "createPostTwo__otherInfo--other",
                    children: [
                      t("section", {
                        children: [
                          e("div", {
                            className: "subTitle",
                            children: "Require Date",
                          }),
                          e(B, {
                            control: y,
                            name: "requireDate",
                            render: ({ field: c }) =>
                              e(ce, {
                                className: "inputStyle",
                                placeholderText: "Select date",
                                onChange: (S) => c.onChange(S),
                                selected: c.value,
                              }),
                          }),
                        ],
                      }),
                      t("section", {
                        className: "dropdown",
                        children: [
                          e("div", {
                            className: "subTitle",
                            children: "Estimate Working Hour",
                          }),
                          e(B, {
                            name: "estimate_time",
                            className: "dropdowninside",
                            control: y,
                            render: ({ field: c }) =>
                              e(
                                O,
                                w(v({ isClearable: !0 }, c), {
                                  options: [
                                    {
                                      value: "less than 30mins",
                                      label: "less than 5mins",
                                    },
                                    { value: "Hours", label: "Hours" },
                                    {
                                      value: "0.5 - 1 hour",
                                      label: "0.5 - 1 hour",
                                    },
                                    { value: "2 hours", label: "2 hours" },
                                    {
                                      value: "3 - 5 hours",
                                      label: "3 - 5 hours",
                                    },
                                    {
                                      value: "5 - 10 hours",
                                      label: "5 - 10 hours",
                                    },
                                    { value: "Days", label: "Days" },
                                    {
                                      value: "within 1 day",
                                      label: "within 1 day",
                                    },
                                    {
                                      value: "1 - 3 days",
                                      label: "1 - 3 days",
                                    },
                                    { value: "Weeks", label: "Weeks" },
                                    {
                                      value: "within 1 week",
                                      label: "within 1 week",
                                    },
                                    {
                                      value: "1 - 2 weeks",
                                      label: "1 - 2 weeks",
                                    },
                                    { value: "Months", label: "Months" },
                                  ],
                                })
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e("div", {
                    className: "createPostButton",
                    children: e("button", {
                      className: "noStyle",
                      type: "submit",
                      children: e(_, {
                        variant: "contained",
                        endIcon: e(Fe, {}),
                        children: "Send",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
      : t($, {
        children: [
          e("p", { children: "Login to create your own posts." }),
          e(z, {}),
        ],
      }),
  });
}
function me(s) {
  var r, l;
  const {
    register: i,
    handleSubmit: a,
    formState: { errors: o },
  } = F({});
  return e($, {
    children: s.isLoggedIn
      ? t("div", {
        className: "applyList",
        children: [
          e("div", { className: "applyList__background" }),
          t("form", {
            className: "applyList__form",
            onSubmit: a(s.handleApply),
            children: [
              t("h2", {
                className: "applyList__title",
                children: ["leave a message to ", s.postUserId, " "],
              }),
              e(
                "input",
                w(
                  v(
                    { className: "inputStyle" },
                    i("content", { required: "This is required." })
                  ),
                  { placeholder: "Introduction and explain why" }
                )
              ),
              t("h2", {
                className: "applyList__title",
                children: ["What would you like to receive?", " "],
              }),
              e("p", {
                children: (r = o.content) == null ? void 0 : r.message,
              }),
              e(
                "input",
                w(
                  v(
                    { className: "inputStyle" },
                    i("offer", { required: "This is required." })
                  ),
                  { placeholder: "something like: 10 bucks per hour" }
                )
              ),
              e("p", {
                children: (l = o.offer) == null ? void 0 : l.message,
              }),
              e(_, { onClick: s.hideApplyModal, children: "cancel" }),
              e("button", {
                className: "noStyle",
                type: "submit",
                children: e(_, { variant: "contained", children: "Sumbit" }),
              }),
              e("div", {
                children:
                  "Please apply carefully. Once you applied the job, you are not able the edit / detele it.",
              }),
            ],
          }),
        ],
      })
      : t("div", {
        children: [
          e("div", { className: "applyList__background" }),
          t("div", {
            className: "applyList__form",
            children: [
              e(_, { onClick: s.hideApplyModal, children: "cancel" }),
              e("h2", {
                className: "",
                children: "OPPS! You haven't logged in yet...",
              }),
              e(f, {
                className: "navLink LinkButton",
                to: "/loginWithGoogle",
                children: e(_, {
                  variant: "contained",
                  children: " Click here",
                }),
              }),
            ],
          }),
        ],
      }),
  });
}
const V = "https://village-backend-finalproject.herokuapp.com";
function yt(s) {
  const { userInfo: i, isLoggedIn: a } = q(),
    [o, r] = n.exports.useState({}),
    [l, d] = n.exports.useState([]),
    [p, N] = n.exports.useState(!1),
    [m, h] = n.exports.useState(""),
    u = () => {
      const g = s.match.params.postID;
      P.get(`${V}/posts/${g}`)
        .then((b) => {
          r(b.data);
        })
        .catch((b) => {
          console.log("Error fetching posts:", b);
        });
    },
    y = (g) => {
      P.post(
        `${V}/apply/${o.post_id}`,
        {
          post_id: o.post_id,
          post_title: o.title,
          content: g.content,
          offer: g.offer,
        },
        { withCredentials: !0 }
      )
        .then(() => {
          window.location.reload(!1);
        })
        .catch((b) => {
          console.log("Error creating a new post:", b);
        });
    },
    C = () => {
      const g = s.match.params.postID;
      P.get(`${V}/apply/${g}`)
        .then((b) => {
          d(b.data);
          const L = b.data.find((x) => x.user_id === i.id);
          L.user_id === i.id && h(L);
        })
        .catch((b) => console.log(b));
    },
    I = () => {
      P.delete(`${V}/posts/${o.post_id}`)
        .then((g) => {
          s.history.push("/");
        })
        .catch((g) => console.log(g));
    },
    k = () => {
      p || N(!0);
    },
    R = () => {
      p && N(!1);
    };
  return (
    n.exports.useEffect(() => {
      u(), (document.title = o.title);
    }, [o.title]),
    n.exports.useEffect(() => {
      C();
    }, [i]),
    t("section", {
      className: "postDetails",
      children: [
        t("div", {
          className: "postDetails__box",
          children: [
            e("div", { className: "postDetails__box1--image" }),
            t("div", {
              className: "postDetails__box1--info",
              children: [
                t("div", {
                  className: "postDetails__box1--headline",
                  children: [
                    e(f, {
                      className: "navLink postDetails__box1--name",
                      to: `/profile/${o.user_id}`,
                      children: e(H, { alt: o.displayname, src: o.avatar_url }),
                    }),
                    t("h2", { children: [" ", o.title] }),
                  ],
                }),
                t("div", {
                  className: "postDetails__box1--StatAndCat",
                  children: [
                    e("div", { className: "postStatus", children: o.status }),
                    e("div", { className: "postType", children: o.type }),
                  ],
                }),
              ],
            }),
          ],
        }),
        t("div", {
          className: "postSection__postWrapper",
          children: [
            e("img", {
              className: "postSection__postPicture",
              src: o.picture_Details,
              alt: `${o.title} picture`,
            }),
            t("div", {
              className: "postDetails__box2",
              children: [
                e("h2", { children: "Content" }),
                t(f, {
                  className: "navLink postDetails__box1",
                  to: `/profile/${o.user_id}`,
                  children: ["By ", o.displayname],
                }),
                t("div", {
                  className: "time",
                  children: ["Post at ", o.updated_at],
                }),
                o.salary && t("div", { children: ["salary: ", o.salary] }),
                o.salary_replacement &&
                t("div", {
                  children: ["Non-Monetary Payment: ", o.salary_replacement],
                }),
                t("div", { children: ["Required Date: ", o.requireDate] }),
                t("div", { children: ["Estimate Time: ", o.estimate_time] }),
                t("div", { children: ["Detail: ", o.content] }),
                t("div", { children: [l.length, " People applied"] }),
              ],
            }),
          ],
        }),
        a && i.id === o.user_id
          ? t("div", {
            children: [
              t("div", {
                className: "post__button",
                children: [
                  e(f, {
                    className: "navLink",
                    to: `/postEdit/${o.post_id}`,
                    children: e(_, {
                      variant: "contained",
                      children: "Edit",
                    }),
                  }),
                  e(_, {
                    onClick: I,
                    startIcon: e(We, {}),
                    variant: "outlined",
                    color: "error",
                    children: "Delete",
                  }),
                ],
              }),
              l.map((g) =>
                t(
                  f,
                  {
                    className: "post navLink applicantsList",
                    to: `/profile/${g.user_id}`,
                    children: [
                      e(H, { src: g.avatar_url, alt: g.username }),
                      t("div", { children: ["message: ", g.content] }),
                      t("div", {
                        className: "applicantsSpe",
                        children: ["I Need ", g.offer],
                      }),
                      t("div", {
                        className: "time",
                        children: ["time: ", g.updated_at],
                      }),
                      t("div", { children: ["By ", g.username] }),
                    ],
                  },
                  g.id
                )
              ),
            ],
          })
          : e("div", {
            className: "appliants",
            children:
              a && m.user_id === i.id
                ? t("div", {
                  className: "applicantsList",
                  children: [
                    t("h2", {
                      children: ["Your application: ", m.content],
                    }),
                    t("div", { children: ["Requires: ", m.offer] }),
                    e("div", { className: "time", children: m.updated_at }),
                    e(_, { children: "Applied" }),
                  ],
                })
                : t($, {
                  children: [
                    e("div", {
                      onClick: k,
                      className: "post__apply",
                      children: "Apply Now",
                    }),
                    p &&
                    e(me, {
                      handleApply: y,
                      hideApplyModal: R,
                      postUserId: o.displayname,
                      isLoggedIn: a,
                    }),
                  ],
                }),
          }),
      ],
    })
  );
}
const te = "https://village-backend-finalproject.herokuapp.com";
function bt(s) {
  var L, x, T, U, M;
  const { userInfo: i, isLoggedIn: a } = q(),
    [o, r] = n.exports.useState("Non-Monetary Payment"),
    [l, d] = n.exports.useState(!0),
    [p, N] = n.exports.useState(!0),
    [m, h] = n.exports.useState(""),
    {
      register: u,
      control: y,
      handleSubmit: C,
      reset: I,
      formState: { errors: k },
    } = F(""),
    R = () => {
      const c = s.match.params.postID;
      P.get(`${te}/posts/${c}`)
        .then((S) => {
          h(S.data);
        })
        .catch((S) => {
          console.log("Error fetching posts:", S);
        });
    };
  n.exports.useEffect(() => {
    m &&
      I({
        title: m.title,
        content: m.content,
        salary: m.salary,
        salary_replacement: m.salary_replacement,
      });
  }, [m]),
    n.exports.useEffect(() => {
      R();
    }, []);
  const g = (c) => {
    const S = s.match.params.postID,
      W = {
        title: c.title,
        content: c.content,
        status: c.status,
        requireDate: c.requireDate,
        salary: c.salary,
        salary_replacement: c.salary_replacement,
      };
    P.put(`${te}/posts/${S}`, W, { withCredentials: !0 })
      .then((D) => {
        console.log(D), s.history.push(`/post/${S}`);
      })
      .catch((D) => console.log(D));
  },
    b = (c) => {
      r(c.target.value);
    };
  return t("section", {
    className: "EditPost",
    children: [
      e("h1", { className: "headline", children: "Edit Post" }),
      a && i.id === m.user_id
        ? t("form", {
          className: "EditPost__box",
          onSubmit: C(g),
          children: [
            t("div", {
              className: "EditPost__box--one",
              children: [
                e("div", { className: "subTitle", children: "TITLE: " }),
                e(
                  "input",
                  w(
                    v(
                      { className: "inputStyle" },
                      u("title", { required: "This is required." })
                    ),
                    {
                      placeholder: "something like: Looking for a dog walker",
                    }
                  )
                ),
                e("p", {
                  children: (L = k.title) == null ? void 0 : L.message,
                }),
                e("div", { className: "subTitle", children: "DETAIlS: " }),
                e(
                  "input",
                  w(
                    v(
                      { className: "inputStyleBig " },
                      u("content", { required: "This is required." })
                    ),
                    { placeholder: "I need a dog walker" }
                  )
                ),
                e("p", {
                  children: (x = k.content) == null ? void 0 : x.message,
                }),
              ],
            }),
            t("div", {
              className: "EditPost__box--two",
              children: [
                e(pe, { handleChange: b, value: o, control: y }),
                l
                  ? t("div", {
                    children: [
                      e("div", {
                        className: "subTitle",
                        children:
                          "What would you like to offer except money?",
                      }),
                      e(
                        "input",
                        w(
                          v(
                            { className: "inputStyle" },
                            u("salary_replacement", {
                              required: "This is required.",
                            })
                          ),
                          { placeholder: "a dozen of beer" }
                        )
                      ),
                      e("p", {
                        children:
                          (T = k.salary_replacement) == null
                            ? void 0
                            : T.message,
                      }),
                    ],
                  })
                  : t("div", {
                    children: [
                      t("div", {
                        className: "subTitle",
                        children: [
                          "Show a range you would like to offer:",
                          " ",
                        ],
                      }),
                      e(
                        "input",
                        w(
                          v(
                            { className: "inputStyle" },
                            u("salary", { required: "This is required." })
                          ),
                          { placeholder: "CA$20 - CA$25  per hour" }
                        )
                      ),
                      e("p", {
                        children:
                          (U = k.salary) == null ? void 0 : U.message,
                      }),
                    ],
                  }),
                t("section", {
                  children: [
                    e("div", {
                      className: "subTitle",
                      children: "Require Date",
                    }),
                    p
                      ? t($, {
                        children: [
                          t("div", {
                            onClick: (c) => N(!1),
                            children: [m.requireDate, "."],
                          }),
                          t("div", {
                            className: "changeDate",
                            children: [
                              e(Ve, {}),
                              "Click me to edit the require date",
                            ],
                          }),
                        ],
                      })
                      : e($, {
                        children: e(
                          B,
                          w(
                            v(
                              { control: y },
                              u("requireDate", {
                                required: "This is required.",
                              })
                            ),
                            {
                              render: ({ field: c }) =>
                                e(ce, {
                                  className: "inputStyle",
                                  placeholderText: "Select date",
                                  onChange: (S) => c.onChange(S),
                                  selected: c.value,
                                }),
                            }
                          )
                        ),
                      }),
                    e("p", {
                      children: (M = k.type) == null ? void 0 : M.message,
                    }),
                  ],
                }),
                t("section", {
                  className: "dropdown",
                  children: [
                    e("div", {
                      className: "subTitle",
                      children: "Estimate Working Hour",
                    }),
                    e(B, {
                      name: "estimate_time",
                      className: "dropdowninside",
                      control: y,
                      render: ({ field: c }) =>
                        e(
                          O,
                          w(v({ isClearable: !0 }, c), {
                            options: [
                              {
                                value: "less than 30mins",
                                label: "less than 5mins",
                              },
                              { value: "Hours", label: "Hours" },
                              {
                                value: "0.5 - 1 hour",
                                label: "0.5 - 1 hour",
                              },
                              { value: "2 hours", label: "2 hours" },
                              { value: "3 - 5 hours", label: "3 - 5 hours" },
                              {
                                value: "5 - 10 hours",
                                label: "5 - 10 hours",
                              },
                              { value: "Days", label: "Days" },
                              {
                                value: "within 1 day",
                                label: "within 1 day",
                              },
                              { value: "1 - 3 days", label: "1 - 3 days" },
                              { value: "Weeks", label: "Weeks" },
                              {
                                value: "within 1 week",
                                label: "within 1 week",
                              },
                              { value: "1 - 2 weeks", label: "1 - 2 weeks" },
                              { value: "Months", label: "Months" },
                            ],
                          })
                        ),
                    }),
                  ],
                }),
                e("div", {
                  className: "createPostButton",
                  children: e("button", {
                    className: "noStyle",
                    type: "submit",
                    children: e(_, {
                      variant: "contained",
                      children: "Submit",
                    }),
                  }),
                }),
              ],
            }),
          ],
        })
        : t($, {
          children: [
            e("p", { children: "Login to create your own posts." }),
            e(z, {}),
          ],
        }),
    ],
  });
}
const ae = "https://village-backend-finalproject.herokuapp.com";
function St() {
  return (
    n.exports.useEffect(() => {
      document.title = "Login";
    }),
    t("div", {
      className: "login",
      children: [
        e("h1", {
          className: "animate__animated animate__bounce login__header",
          children: "Login with Google in one step",
        }),
        t("div", {
          className: "login__box",
          children: [
            e("div", {
              className: "login__box--text border",
              children: e(_, {
                variant: "contained",
                className: "navLink",
                href: `${ae}/auth/google`,
                children: "Login",
              }),
            }),
            t("div", {
              className: "login__box--text",
              children: [
                e("h2", { children: "First time? " }),
                e(_, {
                  variant: "text",
                  href: `${ae}/auth/google`,
                  children: "Try to create a new account with google",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
const Pt = "https://village-backend-finalproject.herokuapp.com";
function xt() {
  return (
    n.exports.useEffect(() => {
      document.title = "Successfully Create An Account";
    }),
    e("div", {
      className: "loginSuccessed",
      children: t("div", {
        className: "loginSuccessed__background",
        children: [
          e("h2", {
            className: "animate__animated animate__fadeInDown ",
            children: "Congregate!!! Your account is successfully created...",
          }),
          e(_, {
            variant: "contained",
            color: "success",
            href: `${Pt}/auth/google`,
            children: "Click here to login",
          }),
        ],
      }),
    })
  );
}
function wt() {
  return t(He, {
    children: [
      e(it, {}),
      t(je, {
        children: [
          e(Ge, { exact: !0, from: "/", to: "/home" }),
          e(E, { path: "/home", exact: !0, component: gt }),
          e(E, { path: "/loginWithGoogle", component: St }),
          e(E, { path: "/registerSuccee", component: xt }),
          e(E, { path: "/profile/:id", component: nt }),
          e(E, { path: "/users/posts/:id", component: vt }),
          e(E, { path: "/category", component: dt }),
          e(E, { path: "/updateProfile/:id", component: pt }),
          e(E, { path: "/createpost", component: Nt }),
          e(E, { path: "/post/:postID", component: yt }),
          e(E, { path: "/postEdit/:postID", component: bt }),
          e(E, { path: "/postApply/:postID", component: me }),
        ],
      }),
      e(rt, {}),
    ],
  });
}
Oe.render(
  e(Je.StrictMode, { children: e(wt, {}) }),
  document.getElementById("root")
);
