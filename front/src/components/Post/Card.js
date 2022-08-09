import { Spin } from "antd";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../../pages/Utils";

const CardThread = ({ posts }) => {
  const [isLoading, setIsLoading] = useState(true);
  const userData = useSelector((state) => state.usersReducer);
  return <div></div>;
};

export default CardThread;
