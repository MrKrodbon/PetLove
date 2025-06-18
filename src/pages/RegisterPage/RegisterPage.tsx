import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import AuthPageTemplate from "../../components/AuthPageTemplate/AuthPageTemplate";
import useAuthDisplayBackground from "../../hooks/useAuthDisplayBackground";
import React from "react";

const RegisterPage = () => {
  const backgroundImageSrc = useAuthDisplayBackground({ pageType: "register" });

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
      iconSrc="/icons/catEmoji.png"
      backgroundImageSrc={backgroundImageSrc || ""}
    />
  );
};

export default React.memo(RegisterPage);
