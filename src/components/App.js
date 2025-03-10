import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';
import AdminNavBar from './AdminNavBar';

function App() {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState("List");

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={addQuestion} />
      ) : (
        <QuestionList questions={questions} setQuestions={setQuestions} />
      )}
    </div>
  );
}

export default App;
