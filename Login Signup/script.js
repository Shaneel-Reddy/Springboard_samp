document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-box form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailOrPhone = loginForm.querySelector('input[type="text"]');
      const password = loginForm.querySelector('input[type="password"]');
      if (!validateEmailOrPhone(emailOrPhone.value)) {
        alert("Please enter a valid email or phone number.");
        return;
      }

      if (password.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }
      alert("Login successful!");
      loginForm.submit();
    });
  }
  const signupForm = document.querySelector(".signup-container form");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const firstName = signupForm.querySelector(
        'input[placeholder="First name"]'
      );
      const surname = signupForm.querySelector('input[placeholder="Surname"]');
      const dob = signupForm.querySelector('input[type="date"]');
      const gender = signupForm.querySelector('input[name="gender"]:checked');
      const emailOrPhone = signupForm.querySelector(
        'input[placeholder="Mobile number or email address"]'
      );
      const password = signupForm.querySelector(
        'input[placeholder="New password"]'
      );

      if (firstName.value.trim() === "") {
        alert("Please enter your first name.");
        return;
      }

      if (surname.value.trim() === "") {
        alert("Please enter your surname.");
        return;
      }

      if (!dob.value) {
        alert("Please select your date of birth.");
        return;
      }

      if (!gender) {
        alert("Please select your gender.");
        return;
      }

      if (!validateEmailOrPhone(emailOrPhone.value)) {
        alert("Please enter a valid email or phone number.");
        return;
      }

      if (password.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }

      alert("Signup successful!");
      signupForm.submit();
    });
  }
  function validateEmailOrPhone(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    return emailPattern.test(input) || phonePattern.test(input);
  }
});
