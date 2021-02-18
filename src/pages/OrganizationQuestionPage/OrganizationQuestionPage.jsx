import React, { Component } from 'react';
import AddQuestionForm from '../../components/AddQuestionForm/AddQuestionForm';
import QuestionList from '../../components/QuestionList/QuestionList';
import './OrganizationQuestionPage.css';
import questionService from '../../utils/questionService';


class OrganizationQuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {questions: []}
  }

    /*--- Lifecycle Methods ---*/
    async componentDidMount() {
    const unfilteredQuestions = await questionService.getAllQuestions();
    const org = this.props.organization._id;
    const questions = unfilteredQuestions.filter(question => question.organization == org)
    this.setState({questions})
  }


  render() {
    return (
      <div>
        {this.state.questions ?
          <div className="questionList">
            <h3>Current Question List for {this.props.organization.name}
            </h3>
            {this.state.questions.map((question, index) =>
              <QuestionList
              {...this.props}
              question={question}
              key={index}
              /> 
              )}
          </div> :
          <div></div>
        }
        <div className="QuestionPage">
          <AddQuestionForm
            {...this.props}
            handleChange={this.handleChange}
            handleAddQuestion={this.handleAddQuestion}
            isFormInvalid={this.isFormInvalid}
            />
        </div>
      </div>

    )
  }
}

export default OrganizationQuestionPage;