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
      <div className="upload-picture-form">
        <form action="" className="upload-pic" onSubmit={handlePicture}>
          <div className="choose-container">
            <div className="icon">
              <img src="./images/icons/picture.svg" alt="img" />
              <input
                className="choose"
                type="file"
                id="file-upload"
                name="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="btn-send">
              <input className="send" type="submit" value="Envoyer"></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadPicture;
