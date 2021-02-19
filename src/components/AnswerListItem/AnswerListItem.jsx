import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import answerService from '../../utils/answerService';


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
      <div>
        <h4>{this.state.answers.body}</h4> 
        <Link className="btn btn-xs" to={{
          pathname:'profile/edit',
          state: {answer: this.state.answers}
        }}>Edit Answer</Link>
      </div>
      : 
      <div>
        <h4>This question has not been answered yet.</h4>
        <Link className="btn btn-xs" to={{
          pathname:'profile/create/answer',
          state: {question: this.props.question}
        }}>Add Answer</Link>
      </div>

    return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className="panel-title">{this.props.question.body}</h3>
        {answersBody}
      </div>
    </div>
  )}
}

export default AnswerListItem;