import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import answerService from '../../utils/answerService';


class EmployeeViewAnswerListItem extends Component {
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
    const filteredAnswers = unfilteredAnswers.filter(answer => answer.question == question && answer.user == this.props.employee._id)
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
      <p className="Card-Text answer-font mb-2 mx-2 CardWidth-Min ">{this.state.answers.body}</p> 
      : <p className="Card-Text answer-font mb-2 mx-2 CardWidth-Min ">This question has not been answered yet.</p>

    return (
    <div className=' card CardBorder mt-4 '>
      <div className="Card-Text mt-2">
        <h3 className="card-title mx-2">{this.props.question.body}</h3>
      </div>
      {answersBody}
    </div>
  )}
}

export default EmployeeViewAnswerListItem;