import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import answerService from '../../utils/answerService';
import './AnswerListItem.css';


class AnswerListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {}
    }
  }

  setAnswers = (answers) => this.setState({answers})

  filterAnswers = async () => {
    const unfilteredAnswers = await answerService.getAllAnswers();
    const question = this.props.question._id;
    const filteredAnswers = unfilteredAnswers.filter(answer => answer.question == question && answer.user == this.props.user._id)
    const answers = filteredAnswers.pop();
    this.setAnswers(answers);
  }

  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    this.filterAnswers();
  }

  async componentDidUpdate(prevProps, prevState) {
    if(prevState.answers && this.state.answers && prevState.answers.length !== this.state.answers.length) {
      this.filterAnswers();
    } 
  }

  

  render() {
    const answersBody = this.state.answers ? 
      <div className="center-form">
        <p className="answer-font mx-2">{this.state.answers.body}</p> 
        <div className="center-btn">
          <button className="CancelButton btn mb-3">
            <Link className="CancelLink" to={{
              pathname:'profile/edit',
              state: {answer: this.state.answers}
            }}>Edit Answer</Link>
          </button>
        </div>
      </div>
      : 
      <div className="center-form">
        <p className="answer-font mx-2">This question has not been answered yet.</p>
        <button className="CancelButton btn mb-3">
        <Link className="CancelLink" to={{
          pathname:'profile/create/answer',
          state: {question: this.props.question}
        }}>Add Answer</Link>
        </button>

      </div>

    return (
    <div className='card CardBorder mt-4'>
      <div className="Card-Text m-2">
        <h3 className="card-title">{this.props.question.body}</h3>
      </div>
      {answersBody}
    </div>
  )}
}

export default AnswerListItem;