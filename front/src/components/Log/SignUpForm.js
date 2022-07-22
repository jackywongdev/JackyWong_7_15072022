import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (e) => {
    const messageError = document.querySelector(".messageError");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/register`,
      data: {
        pseudo: pseudo,
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          messageError.innerHTML = res.data.error;
        } else {
          setFormSubmit(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {formSubmit ? (
        <>
          <SignInForm />
          <span></span>
          <h4 className="success">
            Enregistrement réussi, veuillez-vous connecter
          </h4>
        </>
      ) : (
        <div className="form-container">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Nom d'utilisateur"
              name="pseudo"
              rules={[
                {
                  required: true,
                  message: "Merci de renseigner votre nom d'utilisateur!",
                  type: "name",
                },
              ]}
            >
              <Input
                onChange={(e) => setPseudo(e.target.value)}
                value={pseudo}
              />
            </Form.Item>
            <div className="pseudo error"></div>
            <br />
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Merci de renseigner votre e-mail!",
                  type: "email",
                },
              ]}
            >
              <Input onChange={(e) => setEmail(e.target.value)} value={email} />
            </Form.Item>
            <div className="email error"></div>
            <br />
            <Form.Item
              label="Mot de passe"
              name="Votre mot de passe"
              rules={[
                {
                  required: true,
                  message: "Merci de renseigner votre mot de passe",
                },
              ]}
            >
              <Input
                className="site-form-item-icon"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </Form.Item>
            <div className="messageError"></div>
            <br />
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                S'enregister
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
