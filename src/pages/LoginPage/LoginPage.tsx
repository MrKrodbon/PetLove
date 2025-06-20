import LoginForm from "../../components/LoginForm/LoginForm";
import AuthPageTemplate from "../../components/AuthPageTemplate/AuthPageTemplate";

import React from "react";

const LoginPage = () => {
  return (
    <AuthPageTemplate
      iconSrc="/icons/dogEmoji.png"
      petInfo={{
        petName: "Rich",
        description: `Rich would be the perfect addition 
                      to an active family that loves to
                      play and go on walks. I bet he would love
                      having a doggy playmate too!`,
        petBirthday: "21.09.2020",
      }}
      form={<LoginForm />}
      title="Log in"
      subtitle="Welcome! Please enter your credentials to login to the platform:"
    />
  );
};

export default React.memo(LoginPage);
