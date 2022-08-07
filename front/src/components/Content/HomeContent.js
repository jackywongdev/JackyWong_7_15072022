import React from "react";
import { Content } from "antd/lib/layout/layout";
import Thread from "../Home/Thread";

export default function HomeContent() {
  return (
    <>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280,
        }}
      >
        <Thread />
      </Content>
    </>
  );
}
