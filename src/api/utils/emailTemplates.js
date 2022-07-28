let resetPassword = (email, token) => {
  const emailTemplate = {
    from: "noreply@gmail.com",
    to: email,
    subject: "Password reset for " + email,
    text:
      "Password Reset Link: " +
      "http://localhost:8000/customers/" +
      "resetPassword/" +
      token,
  };
  return emailTemplate;
};

module.exports = { resetPassword };
