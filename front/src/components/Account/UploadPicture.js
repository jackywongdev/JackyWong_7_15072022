import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { uploadPicture } from "../../redux/actions/user.actions";

const UploadPicture = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("pseudo", userData.pseudo);
    data.append("_id", userData._id);
    data.append("file", file);

    dispatch(uploadPicture(data, userData._id, userData.pseudo));
  };

  return (
    <>
      <form action="" className="upload-pic" onSubmit={handlePicture}>
        <div className="choose-container">
          <input
            className="choose"
            type="file"
            id="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <br />
        <div className="send-container">
          <input className="send" type="submit" value="Envoyer" />
        </div>
      </form>
    </>
  );
};

export default UploadPicture;
