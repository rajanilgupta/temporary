const loginvalidation = (values) => {
  let errors = {};
  if (!values.userid) {
    errors.userid = "User Name is required";
  }
  if (!values.pwd) {
    errors.pwd = "Password is required";
  }
  return errors;
};

export default loginvalidation;
