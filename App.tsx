
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserRole, AppState, Quiz, QuizAttempt, User, Comment, Note } from './types';
import { MOCK_QUIZZES } from './constants';
import RoleSelector from './pages/RoleSelector';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import QuizSession from './pages/QuizSession';
import Auth from './pages/Auth';
import Header from './components/Header';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    user: null,
    quizzes: MOCK_QUIZZES,
    attempts: [],
    users: [],
    comments: [],
    notes: []
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('keam_state_v3');
    if (saved) {
      const parsed = JSON.parse(saved);
      setState({
        user: parsed.user || null,
        quizzes: parsed.quizzes || MOCK_QUIZZES,
        attempts: parsed.attempts || [],
        users: parsed.users || [],
        comments: parsed.comments || [],
        notes: parsed.notes || []
      });
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('keam_state_v3', JSON.stringify(state));
    }
  }, [state, isLoaded]);

  const handleLogin = (user: User) => {
    setState(prev => {
      const userExists = prev.users.find(u => u.email === user.email);
      return {
        ...prev,
        user,
        users: userExists ? prev.users : [...prev.users, user]
      };
    });
  };

  const handleLogout = () => {
    setState(prev => ({ ...prev, user: null }));
  };

  const addAttempt = (attempt: QuizAttempt) => {
    setState(prev => ({
      ...prev,
      attempts: [attempt, ...prev.attempts]
    }));
  };

  const addQuiz = (quiz: Quiz) => {
    setState(prev => ({
      ...prev,
      quizzes: [quiz, ...prev.quizzes]
    }));
  };

  const addComment = (comment: Comment) => {
    setState(prev => ({
      ...prev,
      comments: [comment, ...prev.comments]
    }));
  };

  const addNote = (note: Note) => {
    setState(prev => ({
      ...prev,
      notes: [note, ...prev.notes]
    }));
  };

  if (!isLoaded) return null;

  return (
    <HashRouter>
      <div className="min-h-screen bg-fire-dark text-white selection:bg-fire-orange/30">
        {state.user && <Header user={state.user} onLogout={handleLogout} />}
        
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={
              state.user 
                ? <Navigate to={state.user.role === UserRole.STUDENT ? "/student" : "/teacher"} /> 
                : <RoleSelector />
            } />
            
            <Route path="/auth/:role" element={<Auth onLogin={handleLogin} />} />
            
            <Route path="/student" element={
              state.user?.role === UserRole.STUDENT 
                ? <StudentDashboard state={state} onAddComment={addComment} onAddNote={addNote} onAddQuiz={addQuiz} /> 
                : <Navigate to="/" />
            } />
            
            <Route path="/teacher" element={
              state.user?.role === UserRole.TEACHER 
                ? <TeacherDashboard state={state} addQuiz={addQuiz} onAddComment={addComment} onAddNote={addNote} /> 
                : <Navigate to="/" />
            } />
            
            <Route path="/quiz/:quizId" element={
              state.user 
                ? <QuizSession quizzes={state.quizzes} user={state.user} onComplete={addAttempt} /> 
                : <Navigate to="/" />
            } />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
