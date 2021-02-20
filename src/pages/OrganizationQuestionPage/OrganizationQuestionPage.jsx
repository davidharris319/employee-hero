import React, { Component } from 'react';
import AddQuestionForm from '../../components/AddQuestionForm/AddQuestionForm';
import QuestionListItem from '../../components/QuestionListItem/QuestionListItem';
import './OrganizationQuestionPage.css';
import questionService from '../../utils/questionService';


class OrganizationQuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {questions: []}
  }

    addQuestion = (newQuestion) => this.setState({questions:[...this.state.questions, newQuestion]})
    
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
      <div>
        {this.state.questions.length > 0 ?
          <div className="questionList">
            <h3 className="mb-5">Current Question List for {this.props.organization.name}
            </h3>
            {this.state.questions.map((question, index) =>
              <QuestionListItem
              {...this.props}
              question={question}
              key={index}
              setQuestions={this.setQuestions}
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
            addQuestion={this.addQuestion}
            />
        </div>
      </div>

    )
  }
}

export default OrganizationQuestionPage;