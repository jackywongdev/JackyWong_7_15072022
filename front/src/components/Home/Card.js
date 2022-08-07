import { Card, Spin } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const CardThread = ({ posts }) => {
  const [isLoading, setIsLoading] = useState(true);
  const userData = useSelector((state) => state.usersReducer);
  return (
    <div>
      <Card className="card-container" key={posts._id}>
        {isLoading ? (
          <Spin />
        ) : (
          <div>
            <p>titre</p>
            <p>message</p>
            <p>timestamp</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CardThread;
