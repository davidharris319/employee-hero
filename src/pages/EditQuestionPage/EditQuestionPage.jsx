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
      <div className="EditQuestion">
        <h1>Edit Question</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control EditQuestionForm" name="body" value={this.state.formData.body} onChange={this.handleChange} required />
          </div>
          <button type="submit" className="btn btn-xs" disabled={this.state.invalidForm}>Update Question</button>&nbsp;&nbsp;
          <Link to='/organization/questions'>Cancel</Link>
        </form>
      </div>
    );
  }
}


export default EditQuestionPage;