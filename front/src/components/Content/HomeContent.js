import React from "react";
import Thread from "../Home/Post/Thread";
import NewPostForm from "../Home/Post/NewPostForm";

const HomeContent = () => {
  return (
    <div>
      <NewPostForm />
      <Thread />
    </div>
  );
};

export default HomeContent;
