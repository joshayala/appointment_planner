import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label> Contact Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="John Doe"
          aria-label="Contact Name"
        />
      </label>
      <br  />
      <label> Contact Phone:
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          placeholder="555-555-5555"
          aria-label="Contact Phone"
        />
      </label>
      <br />
      <label> Contact Email: 
        <input 
          type="email"
          name="email"
          value={email}
          onChange={ e => setEmail(e.target.value)}
          required
          placeholder="johndoe@example.com"
          aria-label="Contact Email"
        />
      </label>
      <br />
      <input
        type="submit"
        value="Add Contact"
        aria-label="Add Contact"
      />
    </form>
    </>
  );
};

