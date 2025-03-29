// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validate form
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
      document.getElementById('contactForm').reset(); // Clear the form
    } else {
      alert('Please fill out all fields.');
    }
  });