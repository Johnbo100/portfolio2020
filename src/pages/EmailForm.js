import React, { useState } from 'react';


function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  

  const handleSubmit = (event) => {
    event.preventDefault();

    
  };

    const mailOptions = {
      from: formData.email,
      to: 'recipient@example.com',
      subject: formData.subject,
      text: `${formData.name} (${formData.email}) says: ${formData.message}`
    };

    const handleInputChange=()=>{

    }
  

  return (
    <div className='contact-form'>
    <p>Please send me an email if you are interested in my work or want to know more.</p>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        name="subject"
        id="subject"
        value={formData.subject}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        id="message"
        value={formData.message}
        onChange={handleInputChange}
        required
      ></textarea>

      <button type="submit">Send Email</button>
    </form>
    </div>
  );
}

export default EmailForm;
