import React from 'react';
import Question from './Question';
import './Questions.css';

const Questions = props => {
  const classes = [];
  if (!props.display) {classes.push('hidden')}
  return (
    <div className={classes.join(' ')}>
      {props.questions.map(q => (
        <Question
          question={q}
          key={q.questionNum}
        />
      ))}
    </div>
  );
}

export default Questions;