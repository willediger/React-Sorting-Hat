import React from 'react';
import Question from './Question';
import './Questions.css';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  questionAnswered = arg => {
    const { name, value } = arg;
    this.setState({
      [name]: value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render = () => {
    console.log(this.state);
    const classes = [];
    const props = this.props;
    if (!props.display) {classes.push('hidden')}
    return (
      <div className={classes.join(' ')}>
        <form onSubmit={this.onSubmit}>
          {props.questions.map(q => (
            <Question
              question={q}
              key={q.questionNum}
              onChange={this.questionAnswered}
            />
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Questions;