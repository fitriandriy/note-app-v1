import React from 'react';
import ContactInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../utils/api';

function AddPage() {
  const navigate = useNavigate();

  function onAddContactHandler(contact) {
    addContact(contact);
    navigate('/');
  }

  return (
    <section>
      <h2>Tambahkan catatan</h2>
      <ContactInput addContact={onAddContactHandler} />
    </section>
  )
}

export default AddPage;