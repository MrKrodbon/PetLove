import RegistrationForm from "@/components/Auth/RegistrationForm/RegistrationForm";
import Comment from "@/assets/images/RegisterImage/CatComment.png";

import React from "react";
import AuthPageTemplate from "@/components/layouts/AuthPageTemplate/AuthPageTemplate";

const RegisterPage = () => {
  return (
    <AuthPageTemplate
      commentSrc={Comment}
      commentAlt="Comment with cat emoji"
      form={<RegistrationForm />}
      title="Register"
      subtitle="Thank you for your interest in our platform."
    />
  );
};

export default React.memo(RegisterPage);
