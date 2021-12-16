import React from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import AuthPage from './pages/authpage.component';
import NotesPage from './pages/notespage.componenet'
import EditNotePage from './pages/editnotepage.componenet'
function App() {
  return (
    <div className="container my-5">
      
      <Routes>
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/notes" element={<NotesPage/>} />
        <Route path="/edit-note" element={<EditNotePage/>} />
        <Route path="/edit-note/:noteId" element={<EditNotePage/>} />
        <Route path="/" element={<Navigate replace to="/auth" />} />
       
      </Routes>
    
    </div>
  );
}

export default App;
