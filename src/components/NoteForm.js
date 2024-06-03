// src/components/NoteForm.js
import React, { useState } from 'react';
import { Input, Button } from 'antd';

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState('');

  const handleAddNote = () => {
    addNote(note);
    setNote('');
  };

  return (
    <div>
      <Input.TextArea
        rows={4}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />
      <Button type="primary" onClick={handleAddNote} style={{ marginTop: 10 }}>
        Add Note
      </Button>
    </div>
  );
};

export default NoteForm;
