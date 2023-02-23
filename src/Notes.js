import React, { useState, useEffect } from 'react';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newNote}
        onChange={(event) => setNewNote(event.target.value)}
      />
      <button onClick={handleAddNote}>Add note</button>
    </div>
  );
}

export default Notes;
