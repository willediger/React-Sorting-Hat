import React from 'react';
import './Questions.css';

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  updateScores = e => {
    const { name, value } = e.target;
    this.setState({[name]: Number.parseInt(value)});
    this.props.onChange({name: name, value: Number.parseInt(value)});
  }

  render = () => {
    const props = this.props;
    // console.log(this.state);
    return (
      <>
        <p>{props.question.questionNum + 1}. {props.question.question}</p>
        {props.question.choices.map((c,i) => (
          <div key={c}>
            <input 
              type="radio"
              value={i}
              id={c}
              name={props.question.questionNum}
              onChange={this.updateScores}
            />
            <label
              htmlFor={c}
            >
              {c}
            </label>
          </div>
        ))}
      </>
    );
  }
}


export default Question;