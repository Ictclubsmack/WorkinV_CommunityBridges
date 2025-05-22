 document.getElementById('loginForm').addEventListener('submit', async function (e) {
      e.preventDefault();

      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const emailError = email.nextElementSibling;
      const passwordError = password.nextElementSibling;

      let valid = true;

      // Reset error states
      [email, password].forEach(input => input.classList.remove('error'));
      [emailError, passwordError].forEach(msg => msg.textContent = '');

      // Validate email
      if (!email.value.trim()) {
        emailError.textContent = "Email is required.";
        email.classList.add('error');
        valid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        email.classList.add('error');
        valid = false;
      }

      // Validate password
      if (!password.value.trim()) {
        passwordError.textContent = "Password is required.";
        password.classList.add('error');
        valid = false;
      } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        password.classList.add('error');
        valid = false;
      }

      if (valid) {
        this.submit();
      }

     const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Redirect to React dashboard
        window.location.href = data.redirect || '/dashboard';
      } else {
        alert(data.message || 'Login failed');
      }
    });
  