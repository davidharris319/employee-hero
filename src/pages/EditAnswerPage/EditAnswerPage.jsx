import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import answerService from '../../utils/answerService';

class EditAnswerPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.answer
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    answerService.update(this.state.formData);
    this.props.history.push('/user/profile');
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
      <div className="EditAnswer">
        <h1>Edit Question</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control EditAnswerForm" name="body" value={this.state.formData.body} onChange={this.handleChange} required />
          </div>
          <button type="submit" className="btn btn-xs" disabled={this.state.invalidForm}>Update Answer</button>&nbsp;&nbsp;
          <Link to='/user/profile'>Cancel</Link>
        </form>
      </div>
    );
  }
}


export default EditAnswerPage;