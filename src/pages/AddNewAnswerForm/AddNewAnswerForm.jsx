import React, { Component } from 'react';
import AnswerListItem from '../../components/AnswerListItem/AnswerListItem';
import AddAnswerForm from '../../components/AddAnswerForm/AddAnswerForm';
import questionService from '../../utils/questionService';



class AddNewAnswerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: []
    }
  }

  addAnswer = (newAnswer) => this.setState({answers:[...this.state.answers, newAnswer]})

  setQuestions = (questions) => this.setState({questions})

  render() {



    return (
      <div className="OrgPage">
        <h3>Employee Profile</h3>
        <h4>Name: {this.props.user.name}</h4>
        <h5>Email: {this.props.user.email}</h5>
        <div>
          <AddAnswerForm
            {...this.props}
            question={this.props.location.state.question}
            key={this.props.location.state.question._id}
            addAnswer={this.addAnswer}
          />
        </div>
      </div>
    );
  }
};

export default AddNewAnswerForm;