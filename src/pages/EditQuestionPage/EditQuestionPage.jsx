import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditQuestionPage.css';
import questionService from '../../utils/questionService';

class EditQuestionPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.question
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    questionService.update(this.state.formData);
    this.props.history.push('/organization/questions');
  }

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };


  render() {
    return (
      <div className="OrgPage">
        <div className="card CardBorder mt-4 CardWidth">
          <h1 className="Card-Text m-2">Edit Question</h1>
          <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input className="form-control EditQuestionForm" name="body" value={this.state.formData.body} onChange={this.handleChange} required />
            </div>
            <div className="center-btn mt-3 mb-3">
              <button type="submit" className="btn SubmitButton" disabled={this.state.invalidForm}>Update Question</button>&nbsp;&nbsp;
              <button className="CancelButton btn">
              <Link className="CancelLink" to='/organization/questions'>Cancel</Link>
              </button>
            </div>

            
          </form>
        </div>
      </div>

    );
  }
}


export default EditQuestionPage;