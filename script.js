
  const form = document.getElementById("contactForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Name
    if (nameInput.value.trim() === "") {
      setError(nameInput, "Name is required");
      isValid = false;
    } else {
      setSuccess(nameInput);
    }

    // Email
    if (!validateEmail(emailInput.value)) {
      setError(emailInput, "Enter a valid email address");
      isValid = false;
    } else {
      setSuccess(emailInput);
    }

    // Phone (optional)
    if (phoneInput.value && !validatePhone(phoneInput.value)) {
      setError(phoneInput, "Enter a valid phone number");
      isValid = false;
    } else {
      setSuccess(phoneInput);
    }

    // Subject
    if (subjectInput.value.trim() === "") {
      setError(subjectInput, "Subject is required");
      isValid = false;
    } else {
      setSuccess(subjectInput);
    }

    // Message
    if (messageInput.value.trim().length < 10) {
      setError(messageInput, "Message must be at least 10 characters");
      isValid = false;
    } else {
      setSuccess(messageInput);
    }

    if (isValid) {
      alert("Message sent successfully!");
      form.reset();
      clearStates();
    }
  });

  function setError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector("small");
    error.innerText = message;
    error.style.visibility = "visible";
    formGroup.classList.add("error");
    formGroup.classList.remove("success");
  }

  function setSuccess(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector("small");
    error.style.visibility = "hidden";
    formGroup.classList.add("success");
    formGroup.classList.remove("error");
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[0-9+\-\s]{8,15}$/.test(phone);
  }

  function clearStates() {
    document.querySelectorAll(".form-group").forEach(group => {
      group.classList.remove("success", "error");
    });
  }
