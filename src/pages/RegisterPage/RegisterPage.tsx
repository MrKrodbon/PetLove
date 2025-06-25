import RegistrationForm from "../../components/Auth/RegistrationForm/RegistrationForm";
import catIcon from "../../assets/icons/catEmoji.png";

import React from "react";
import AuthPageTemplate from "../../components/Auth/AuthPageTemplate/AuthPageTemplate";

const RegisterPage = () => {
  return (
    <AuthPageTemplate
      form={<RegistrationForm />}
      petInfo={{
        petName: "Rich",
        description: `Jack is a gray Persian cat with green eyes. He loves to be
      pampered and groomed, and enjoys playing with toys.`,
        petBirthday: "18.10.2021",
      }}
      title="Register"
      subtitle="Thank you for your interest in our platform."
      iconSrc={catIcon}
    />
  );
};

export default React.memo(RegisterPage);
