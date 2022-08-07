import { DownloadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const UploadPicture = () => {
  const userData = useSelector((state) => state.userReducer);

  const handleUpload = ({ fileList }) => {
    //---------------^^^^^----------------
    // this is equivalent to your "const img = event.target.files[0]"
    // here, antd is giving you an array of files, just like event.target.files
    // but the structure is a bit different that the original file
    // the original file is located at the `originFileObj` key of each of this files
    // so `event.target.files[0]` is actually fileList[0].originFileObj
    console.log("fileList", fileList);

    // you store them in state, so that you can make a http req with them later
    this.setState({ fileList });
  };

  let formData = new FormData();
  // add one or more of your files in FormData
  // again, the original file is located at the `originFileObj` key
  formData.append("file", this.state.fileList[0].originFileObj);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    // add one or more of your files in FormData
    // again, the original file is located at the `originFileObj` key
    formData.append("file", this.state.fileList[0].originFileObj);

    axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}/api/user/${userData._id}`,
      data: {
        file: formData,
        name: `${userData.pseudo}`,
      },
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <form action="">
        <Upload
          action={`process.env.REACT_APP_API_URL/api/user/${userData._id}`}
          listType="picture"
          accept=".png, .jpeg, .jpg"
          method="put"
          multiple="false"
          beforeUpload={() => false}
        >
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            on
            onSubmit={handleUpload}
          >
            Changer de photo
            <label htmlFor="file"></label>
          </Button>
        </Upload>

        <Button onClick={handleSubmit}>Envoyer</Button>
      </form>
    </>
  );
};

export default UploadPicture;
