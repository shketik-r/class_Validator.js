 class Validator {
  lastName;
  firstName;
  email;
  password;
  confirmPassword;

  #checkValidationName(value) {
    const REGEXP = /^([A-Z]{1}[a-z]{1,30})$/;
    if (value === "") {
      return "blank field";
    }
    if (REGEXP.test(value)) {
      return true;
    } else {
      return "The field is written incorrectly";
    }
  }

  #checkValidationPassword(value) {
    const REGEXP = /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{8,}/g;
    if (value === "") {
      return "blank field";
    }
    if (REGEXP.test(value)) {
      return true;
    } else {
      return "The field is written incorrectly";
    }
  }
  #checkValidationEmail(value) {
    const REGEXP =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (value === "") {
      return "blank field";
    }
    if (REGEXP.test(value)) {
      return true;
    } else {
      return "The field is written incorrectly";
    }
  }

  #checkValidationConfirmPassword(pass, confirmPass) {
    if (confirmPass === "") {
      return "blank field";
    }
    if (pass === confirmPass) {
      return true;
    } else {
      return "Passwords do not match ";
    }
  }

  setLastName(value) {
    this.lastName = value;
  }
  setFirstName(value) {
    this.firstName = value;
  }

  setEmail(value) {
    this.email = value;
  }

  setPassword(value) {
    this.password = value;
  }
  setConfirmPassword(value) {
    this.confirmPassword = value;
  }

  getLastName() {
    return this.#checkValidationName(this.lastName);
  }
  getFirstName() {
    return this.#checkValidationName(this.firstName);
  }

  getEmail() {
    return this.#checkValidationEmail(this.email);
  }

  getPassword() {
    return this.#checkValidationPassword(this.password);
  }
  getConfirmPassword() {
    return this.#checkValidationConfirmPassword(
      this.password,
      this.confirmPassword
    );
  }
}
