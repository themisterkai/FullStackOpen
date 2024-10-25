const Note = ({ note, toggleImportance, deleteNoteHandler }) => {
  const label = note.important ? 'make not important' : 'make important';

  return (
    <li className="note">
      {note.content}
      <button onClick={() => toggleImportance(note.id)}>{label}</button>
      <button onClick={() => deleteNoteHandler(note.id)}>delete</button>
    </li>
  );
};

export default Note;
