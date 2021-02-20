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
      <div className="OrgPage">
        <div className="card CardBorder mt-4 CardWidth">
          <div className="m-2 CardWidth">
            <h1 className="Card-Text">Edit Question</h1>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
              <div className="form-group m-2">
                <input className="form-control EditAnswerForm" name="body" value={this.state.formData.body} onChange={this.handleChange} required />
              </div>
              <div className="center-btn mt-3 mb-1">
                <button type="submit" className="btn SubmitButton" disabled={this.state.invalidForm}>Update Answer</button>&nbsp;&nbsp;
                <button className="CancelButton btn">
                <Link className="CancelLink" to='/user/profile'>Cancel</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


    );
  }
}


export default EditAnswerPage;