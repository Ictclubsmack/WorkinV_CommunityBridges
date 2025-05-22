document.addEventListener("DOMContentLoaded", async function() {
  const form = document.querySelector("form");

  const fields = {
    username: {
      el: document.getElementById("username"),
      errorEl: document.getElementById("username").nextElementSibling
    },
    email: {
      el: document.getElementById("email"),
      errorEl: document.getElementById("email").nextElementSibling
    },
    password: {
      el: document.getElementById("password"),
      errorEl: document.getElementById("password").nextElementSibling
    },
    confirm_password: {
      el: document.getElementById("confirm_password"),
      errorEl: document.getElementById("confirm_password").nextElementSibling
    },
    terms: {
      el: document.getElementById("terms"),
      errorEl: document.getElementById("terms-error")
    }
  };

  form.addEventListener("submit", function (e) {
    let valid = true;

    // Clear old errors
    Object.values(fields).forEach(f => f.errorEl.textContent = "");

    // Username check
    if (fields.username.el.value.trim() === "") {
      fields.username.errorEl.textContent = "Username is required.";
      valid = false;
    }

    // Email check
    if (!validateEmail(fields.email.el.value)) {
      fields.email.errorEl.textContent = "Enter a valid email.";
      valid = false;
    }

    // Password length
    if (fields.password.el.value.length < 6) {
      fields.password.errorEl.textContent = "Password must be at least 6 characters.";
      valid = false;
    }

    // Password match
    if (fields.password.el.value !== fields.confirm_password.el.value) {
      fields.confirm_password.errorEl.textContent = "Passwords do not match.";
      valid = false;
    }

    // Terms checkbox
    if (!fields.terms.el.checked) {
      fields.terms.errorEl.textContent = "You must agree to the terms.";
      valid = false;
    }

    if (!valid) {
      e.preventDefault(); // Stop form submission
    }
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  

   const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username ,email ,password , confirm_password })
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Redirect to React dashboard
        window.location.href = data.redirect || '/dashboard';
      } else {
        alert(data.message || 'Login failed');
      }
    });



