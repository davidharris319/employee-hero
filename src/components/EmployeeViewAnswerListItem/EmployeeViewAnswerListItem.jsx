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
    if(prevState.answers.length !== this.state.answers.length) {
      this.filterAnswers();
    }
  }


  render() {
    return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className="panel-title">{this.props.question.body}</h3>
        <h4>{this.state.answers.body}</h4>
        <Link className="btn btn-xs" to={{
          pathname:'profile/edit',
          state: {answer: this.state.answers}
        }}>Edit Answer</Link>
      </div>
    </div>
  )}
}

export default EmployeeViewAnswerListItem;