import React, { Component } from 'react';
import Questions from './components/Questions'
import './App.css';

const houses = [
  {
    houseName: 'Gryffindor',
    attributes: ['bravery', 'daring', 'nerve', 'chivalry', 'determination'],
    animal: 'lion',
    colors: ['scarlet', 'gold'],
    famousMembers: ['Godric Gryffindor', 'Albus Dumbledore', 'Minerva McGonagall', 'Harry Potter', 'Ron Weasley', 'Hermione Granger']
  },
  {
    houseName: 'Hufflepuff',
    attributes: ['hard work', 'dedication', 'patience', 'loyalty', 'fair play'],
    animal: 'badger',
    colors: ['yellow', 'black'],
    famousMembers: ['Helga Hufflepuff', 'Bridget Wenlock', 'Newt Scamander', 'Pomona Sprout', 'Cedric Diggory', 'Nymphadora Tonks']
  },
  {
    houseName: 'Ravenclaw',
    attributes: ['intelligence', 'knowledge', 'wit', 'learning', 'talent'],
    animal: 'eagle',
    colors: ['blue', 'bronze'],
    famousMembers: ['Rowena Ravenclaw', 'Luna Lovegood', 'Garrick Ollivander', 'Filius Flitwick', 'Millicent Bagnold', 'Gilderoy Lockhart', 'Ignatia Wildsmith']
  },
  {
    houseName: 'Slytherin',
    attributes: ['ambition', 'cunning', 'resourcefulness', 'achievement', 'determination'],
    animal: 'serpent',
    colors: ['emerald green', 'silver'],
    famousMembers: ['Salazar Slytherin', 'Merlin', 'Severus Snape', 'Phineas Nigellus Black', 'Tom Riddle', 'Horace Slughorn']
  }
]

const attrQuestion = 'Which of these attributes best describes you?';
const animalQuestion = 'Which animal best describes you?';

const questions = [
  {
    questionNum: 1,
    question: attrQuestion,
    choices: []
  },
  {
    questionNum: 2,
    question: attrQuestion,
    choices: []
  },
  {
    questionNum: 3,
    question: attrQuestion,
    choices: []
  },
  {
    questionNum: 4,
    question: attrQuestion,
    choices: []
  },
  {
    questionNum: 5,
    question: attrQuestion,
    choices: []
  },
  {
    questionNum: 6,
    question: animalQuestion,
    choices: []
  }
]

houses.forEach(house => {
  let currAttrIdx;
  house.attributes.forEach((attr, attrIdx) => {
    currAttrIdx = attrIdx;
    questions[attrIdx].choices.push(attr);
  })
  questions[currAttrIdx + 1].choices.push(house.animal);
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayQuestions: false,
      answers: [
        {
          questionNum: 1,
          answerIdx: ''
        },
        {
          questionNum: 2,
          answerIdx: ''
        },
        {
          questionNum: 3,
          answerIdx: ''
        },
        {
          questionNum: 4,
          answerIdx: ''
        },
        {
          questionNum: 5,
          answerIdx: ''
        },
        {
          questionNum: 6,
          answerIdx: ''
        }
      ],
      houseIdx: ''
    }
  }

  sortingHat = () => {

  }

  render() {
    return (
      <div className="container">
        <button onClick={this.sortingHat}>Sort me into a house!</button>
        <Questions display={this.state.displayQuestions} questions={questions} />
      </div>
    );
  }
}

export default App;
