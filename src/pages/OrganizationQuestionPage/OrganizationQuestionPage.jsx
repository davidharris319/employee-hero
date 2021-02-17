import React, { Component } from 'react';
import questionService from '../../utils/questionService';
import tokenService from '../../utils/tokenService';


class OrganizationQuestionPage extends Component {
  state = {
    formData: {
      body: '',
    }
  }

  
  handleChange = (e) => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData
    });
  }

  handleAddQuestion = async (e, props) => {
    e.preventDefault();
    try {
      await questionService.addQuestion(this.state.formData);
      this.props.history.push('/organization/questions');
    } catch (err) {
      console.log(err);
    }
  }

  isFormInvalid() {
    return !(this.state.body);
  }

  render() {
    return (
      <div className='panel panel-default'>
        <div className="panel-heading">
         <h3>Add an Introductory Question for {this.props.organization.name} Employees</h3>
        </div>
        <div className="panel-footer ">

          <form className="form-horizontal" onSubmit={this.handleAddQuestion} >
            {/* <div className="form-group">
              <div className="col-sm-12">
                <input type="hidden" className="form-control" value={this.props.organization._id} name="organization"/>
              </div>
            </div> */}
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Question" name="body" value={this.state.formData.body} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button className="btn btn-default btn-sm">Add Question</button>&nbsp;&nbsp;
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default OrganizationQuestionPage;