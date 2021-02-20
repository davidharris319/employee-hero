import React, { Component } from 'react';
import AnswerListItem from '../../components/AnswerListItem/AnswerListItem';
import answerService from '../../utils/answerService';
import questionService from '../../utils/questionService';



class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: []
    }
  }

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
        <h3>Your Employee Profile</h3>
        <br/>
        <h4>Name: {this.props.user.name}</h4>
        <h5>Email: {this.props.user.email}</h5>
        <div>
          
          {this.state.questions.map(question =>
            <AnswerListItem
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