import React, { Component } from 'react';
import EmployeeListItem from '../../components/OrgListItem/OrgListItem';

class OrganizationHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {organizations: []}
  }
 
  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className="OrgPage">
        <h3>Employees of {this.props.organization.name}</h3>
        <div className='OrgListPage-grid'>
          {this.state.organizations.map(organization =>
            <EmployeeListItem
              {...this.props}
              organization={organization}
              key={organization._id}
            />)}
        </div>
      </div>
    );
  }
};

export default OrganizationHomePage;