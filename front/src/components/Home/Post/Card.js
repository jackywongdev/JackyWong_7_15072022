import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../../../pages/Utils";
import LikeButton from "./LikeButton";
import { updatePost } from "../../../redux/actions/post.actions";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";
import { Spin } from "antd";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
    }
    setIsUpdated(false);
  };

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-container" key={post.posterId}>
      {isLoading ? (
        <div className="spinner">
          <Spin style={{ justifyContent: "center" }} />
        </div>
      ) : (
        <>
          <div className="card-header">
            <div className="top-container">
              <div className="user-container">
                <img
                  src={
                    !isEmpty(usersData[0]) &&
                    usersData.find((user) => user._id === post.posterId).picture
                  }
                  alt="poster-pic"
                />
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData.find((user) => user._id === post.posterId)
                      ?.pseudo}
                </h3>
              </div>
              <div className="post-timestamp">
                <span>{dateParser(post.createdAt)}</span>
              </div>
            </div>
          </div>

          <div className="card-content">
            {isUpdated === false && <p className="text-area">{post.message}</p>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.message}
                  onChange={(e) => setTextUpdate(e.target.value)}
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Valider la modification
                  </button>
                </div>
              </div>
            )}

            {post.picture && (
              <img src={post.picture} alt="card-pic" className="card-pic" />
            )}

            {post.video && (
              <div className="wrapper">
                <iframe
                  src={post.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={post._id}
                ></iframe>
              </div>
            )}

            {userData.isAdmin === true || userData._id === post.posterId ? (
              <div className="button-container">
                <div onClick={() => setIsUpdated(!isUpdated)}>
                  <img src="./images/icons/edit.svg" alt="edit" />
                </div>
                <DeleteCard id={post._id} />
              </div>
            ) : (
              ""
            )}

            <div className="card-footer">
              <div className="comment-icon">
                <img
                  onClick={() => setShowComments(!showComments)}
                  src="./images/icons/message1.svg"
                  alt="comment"
                />
                <span>{post.comments.length}</span>
              </div>
              <LikeButton post={post} />
            </div>
            {showComments && <CardComments post={post} />}
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
