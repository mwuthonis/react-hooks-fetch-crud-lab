import React from 'react';
import QuestionItem from './QuestionItem';

function QuestionList({ questions, setQuestions }) {
  const handleDelete = (id) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setQuestions(questions.filter(question => question.id !== id));
    });
  };

  const handleUpdate = (id, correctIndex) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correctIndex }),
    }).then(() => {
      setQuestions(questions.map(question =>
        question.id === id ? { ...question, correctIndex } : question
      ));
    });
  };

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map(question => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
