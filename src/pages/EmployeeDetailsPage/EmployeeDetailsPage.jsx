import React, { Component } from 'react';
import EmployeeViewAnswerListItem from '../../components/EmployeeViewAnswerListItem/EmployeeViewAnswerListItem';
import answerService from '../../utils/answerService';
import questionService from '../../utils/questionService';

class EmployeeDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: []
    }
  }

  addAnswer = (newAnswer) => this.setState({answers:[...this.state.answers, newAnswer]})

  setQuestions = (questions) => this.setState({questions})

  filterQuestions = async () => {
    const unfilteredQuestions = await questionService.getAllQuestions();
    const org = this.props.organization._id;
    const questions = unfilteredQuestions.filter(question => question.organization == org)
    this.setQuestions(questions)
  }

  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    this.filterQuestions();
  }

  async componentDidUpdate(prevProps, prevState) {
    if(prevState.questions.length !== this.state.questions.length) {
      this.filterQuestions();
    }
  }


  render() {
    return (
      <div className="OrgPage">
        <h3>Employee Profile</h3>
        <br/>
        <h4>Name: {this.props.location.state.employee.name}</h4>
        <h5>Email: {this.props.location.state.employee.email}</h5>
        <div>
          
          {this.state.questions.map(question =>
            <EmployeeViewAnswerListItem
              {...this.props}
              question={question}
              employee={this.props.location.state.employee}
              key={question._id}
              addAnswer={this.addAnswer}
            />)}
        </div>
      </div>
    );
  }
};

export default EmployeeDetailsPage;