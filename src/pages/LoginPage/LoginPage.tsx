import React from "react";
import AuthPageTemplate from "@/components/layouts/AuthPageTemplate/AuthPageTemplate";
import LoginForm from "@/components/Auth/LoginForm/LoginForm";
import Comment from "@/assets/images/LoginImage/dogComment.png";

const LoginPage = () => {
  return (
    <AuthPageTemplate
      commentSrc={Comment}
      commentAlt="Comment with dog emoji"
      form={<LoginForm />}
      title="Log in"
      subtitle="Welcome! Please enter your credentials to login to the platform:"
    />
  );
};

export default React.memo(LoginPage);
