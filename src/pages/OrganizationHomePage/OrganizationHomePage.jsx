import React, { Component } from 'react';
import EmployeeListItem from '../../components/EmployeeListItem/EmployeeListItem';
import './OrganizationHomePage.css';

class OrganizationHomePage extends Component {

  render() {
    return (
      <div className="OrgPage">
        <h3>Employees of {this.props.organization.name}</h3>
        <div className='EmployeeListPage-grid'>
          {this.props.organization.employees.map(employee =>
            <EmployeeListItem
              {...this.props}
              employee={employee}
              key={employee._id}
            />)}
        </div>
      </div>
    );
  }
};

export default OrganizationHomePage;