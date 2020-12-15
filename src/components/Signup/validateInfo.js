//error handler for the validation fields

export default function validateInfo(values) {
    let errors = {}

    if (!values.email) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'This email address is invalid, please try again';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more';
      }
    
      if (!values.password2) {
        errors.password2 = 'Password is required';
      } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
      }
      return errors;
}