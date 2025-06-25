import dogIcon from "@/assets/icons/dogEmoji.png";

import React from "react";
import AuthPageTemplate from "@/components/Auth/AuthPageTemplate/AuthPageTemplate";
import LoginForm from "@/components/Auth/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <AuthPageTemplate
      iconSrc={dogIcon}
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
