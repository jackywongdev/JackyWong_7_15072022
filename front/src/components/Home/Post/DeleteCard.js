import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/actions/post.actions";

const DeleteCard = (props) => {
  const dispatch = useDispatch();

  const deleteQuote = () => dispatch(deletePost(props.id));

  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer ce post ?")) {
          deleteQuote();
        }
      }}
    >
      <img src="./images/icons/trash.svg" alt="trash" />
    </div>
  );
};

export default DeleteCard;
