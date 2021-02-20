import React, { Component } from 'react';
import questionService from '../../utils/questionService';


class AddQuestionForm extends Component {
  state = {
    formData: {
      body: ''
    }
  }

  handleChange = (e) => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData
    });
  }

  handleAddQuestion = async (e) => {
    e.preventDefault();
    try {
      const newQuestion = await questionService.addQuestion(this.state.formData);
      this.props.addQuestion(newQuestion.question);
      this.setState({   
        formData: {
          body: ''
      }
    })
    } catch (err) {
      console.log(err);
    }
  }

  isFormInvalid() {
    return !(this.state.body);
  }

  render() {
    return(
      <div className='card CardBorder mt-2 CardWidth-Min'>
        <div className="m-3 CardWidth">
        <h3 className="Card-Text">Add an Introductory Question for {this.props.organization.name} Employees</h3>
        </div>
        <div className="m-2 CardWidth">
          <form className="form-horizontal" onSubmit={this.handleAddQuestion} >
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Question" name="body" value={this.state.formData.body} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center my-1">
                <button className="btn SubmitButton mt-2">Add Question</button>&nbsp;&nbsp;
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}





export default AddQuestionForm;
