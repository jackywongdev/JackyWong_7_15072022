import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/post.actions";
import CardProfile from "./CardProfile";
import { isEmpty } from "../../pages/Utils";

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

  return (
    <div className="thread-container">
      <ul>
        {!isEmpty(posts[0]) &&
          posts
            .filter((userPost) => userPost.posterId === userData._id)
            .map((post) => {
              return <CardProfile post={post} key={post._id} />;
            })}
      </ul>
    </div>
  );
};

export default ProfileThread;
