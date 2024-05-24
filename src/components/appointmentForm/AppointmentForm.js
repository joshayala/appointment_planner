import React, { useMemo }from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
    <form onSubmit={handleSubmit} >
      <label>Appointment Title: 
        <input 
          type="text"
          id="title"
          name="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Global Zoom Call"
          aria-label="Appointment Name"
        />
      </label>
      <br />

      <label> Contact:
        { <ContactPicker 
          name="contact"
          value={contact}
          contacts={contactNames}
          onChange={(e) => setContact(e.target.value)}
          />}
      </label>
      <br />
      <label>Appointment Date: 
        <input 
          type="date"
          name="date"
          value={date}
          min={getTodayString()}
          onChange={e => setDate(e.target.value)}
          required
          aria-label="Date Picker"
          />
      </label>
      <br />

      <label>Appointment Time: 
        <input 
          type="time"
          name="appointment time"
          value={time}
          onChange={e => setTime(e.target.value)}
          required
          aria-label="Time Picker"
        />
      </label>
      <br />
      <input aria-label="Add Appointment" type="submit" value="Add Appointment" />
    </form>
    </>
  );
};
