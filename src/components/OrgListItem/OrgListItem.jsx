import React, { Component } from 'react';
import './OrgListItem.css';
import orgService from '../../utils/orgService';
import tokenService from '../../utils/tokenService';

class OrgListItem extends Component {

  handleSubmit = async (e, props) => {
    e.preventDefault();
    try {
      const orgId = this.props.organization._id;
      const { user, token, organization } = await orgService.registerEmployee(orgId);
      this.props.updateOrganization(organization);
      tokenService.setToken(token)
      this.props.updateUser(user);
      this.props.history.push('/organization/employee-list');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className='panel panel-default'>
        <div className="panel-heading">
          <h2 className="panel-title">{this.props.organization.name}</h2>
        </div>
        <div className="panel-footer OrgListItem-action-panel">
          <h5>Industry: {this.props.organization.industry}</h5>
          <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <div className="form-group">
              <div className="col-sm-12">
                <input type="hidden" className="form-control" value={this.props.organization._id} name="id"/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button className="btn btn-default btn-sm">Register as an Employee of {this.props.organization.name}</button>&nbsp;&nbsp;
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default OrgListItem;