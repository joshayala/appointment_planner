import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState("");
  const [contact, setContact] = useState( contacts.length > 0 ? contacts[0].name : "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(name, contact, date, time);
   setName("");
   setContact("");
   setDate("");
   setTime("");
  };

  return (
    <div>
      <section >
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={contacts}
          name={name}
          setTitle={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section className="aplist">
        <h2>Appointments</h2>
        <TileList dataArray={appointments}/>
      </section>
    </div>
  );
};