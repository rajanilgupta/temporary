const teamvalidation = (values) => {
  let errors = {};
  if (!values.teamName) {
    errors.teamName = "Name is required";
  }
  if (!values.participants) {
    errors.participants = "City is required";
  }
  if (!values.college) {
    errors.college = "User id is required";
  }
  if (!values.contact) {
    errors.contact = "Phone no is required";
  }
  if (!values.username) {
    errors.username = "Password is required";
  }
  if (!values.password) {
    errors.password = "Confirm password is required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  }

  if (
    values.password &&
    values.confirmPassword &&
    values.password !== values.confirmPassword
  ) {
    errors.cpwd = "Password not match";
  }

  return errors;
};

export default teamvalidation;
