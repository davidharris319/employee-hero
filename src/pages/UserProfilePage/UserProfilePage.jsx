import React, { Component } from 'react';
import AnswerListItem from '../../components/AnswerListItem/AnswerListItem';
import AddAnswerForm from '../../components/AddAnswerForm/AddAnswerForm';
import questionService from '../../utils/questionService';



class UserProfilePage extends Component {
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


  render() {
    return (
      <div className="OrgPage">
        <h3>Employee Profile</h3>
        <h4>Name: {this.props.user.name}</h4>
        <h5>Email: {this.props.user.email}</h5>
        <div>
          
          {this.state.questions.map(question =>
            <AddAnswerForm
              {...this.props}
              question={question}
              key={question._id}
              addAnswer={this.addAnswer}
            />)}
        </div>
      </div>
    );
  }
};

export default UserProfilePage;