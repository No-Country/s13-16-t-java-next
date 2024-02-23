import React from "react";

export default function Index() {
  const [showPassword, setShowPassword] = React.useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return {
    showPassword,
    handleShowPassword,
  };
}
