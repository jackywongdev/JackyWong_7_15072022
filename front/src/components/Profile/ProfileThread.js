import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/post.actions";
import CardProfile from "./CardProfile";

const ProfileThread = () => {
  const [loadPost, setLoadPost] = useState(true);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const posts = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setLoadPost(false);
    }
  }, [loadPost, dispatch]);

  const userPosts = () => {
    return posts.filter((userPost) => userPost.posterId === userData._id);
  };

  return (
    <div className="thread-container">
      <ul>
        {userPosts().length > 0 ? (
          userPosts().map((post) => {
            return <CardProfile post={post} key={post._id} />;
          })
        ) : (
          <div className="no-post">
            <h1>
              Vous n'avez pas encore partager de contenue n'hésitez pas à le
              faire via votre page d'accueil
            </h1>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ProfileThread;
