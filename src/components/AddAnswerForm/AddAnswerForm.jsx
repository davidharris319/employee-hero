import React, { Component } from 'react';
import answerService from '../../utils/answerService';
import questionService from '../../utils/questionService';



class AddAnswerForm extends Component {
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

  handleAddAnswer = async (e) => {
    e.preventDefault();
    try {
      const question = this.props.question._id;
      const newAnswer = await answerService.addAnswer({...this.state.formData, question: question});
      this.props.addAnswer(newAnswer.answer);
      this.setState({   
        formData: {
          body: '',
      }
      
    });
    this.props.history.push('/user/profile');
    } catch (err) {
      console.log(err);
    }
  }

  isFormInvalid() {
    return !(this.state.body);
  }

  render() {
    return(
      <div>
        <div className="card CardBorder mt-4 CardWidth-Min">
          <div className="m-2 CardWidth">
            <h3 className="Card-Text">{this.props.question.body}</h3>
          </div>
          <div className="m-2 CardWidth">
            <form className="form-horizontal" onSubmit={this.handleAddAnswer} >
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="text" className="form-control" placeholder="Answer" name="body" value={this.state.formData.body} onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12 text-center my-1">
                  <button className="btn SubmitButton mt-2">Add Answer</button>&nbsp;&nbsp;
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default AddAnswerForm;