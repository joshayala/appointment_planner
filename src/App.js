import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from 'react';
import  Footer from './components/footer/Footer';

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  /*
  Implement functions to add data to
  contacts and appointments... basically make two functions that handle what happens 
  when a new contact/appointment is submitted in... IE store the new contact/appointment.
  */
  const addContact = (name, phone, email) => {
    setContacts([...contacts, {
      name: name,
      phone: phone,
      email: email,
    },
  ]);
  };

  const addAppointment = (name, contact, date, time) => {
    setAppointments([...appointments, {
      name: name,
      contact: contact,
      date: date,
      time: time,
    },
  ]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} />  }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts}/>  }/>
    </Route>
  ));
  
  return (
    <>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  );
}

export default App;
