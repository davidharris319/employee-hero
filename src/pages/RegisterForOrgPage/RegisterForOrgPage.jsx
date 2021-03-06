import React, { Component } from 'react';
import OrgListItem from '../../components/OrgListItem/OrgListItem';
import orgService from '../../utils/orgService';
import './RegisterForOrgPage.css'

class RegisterForOrgPage extends Component {
  constructor(props) {
    super(props);
    this.state = {organizations: []}
  }
 
  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    const organizations = await orgService.getAllOrgs();
    this.setState({organizations})
  }

  render() {
    return (
      <div className="OrgPage">
        <h3>Please Click on Your Organization to Complete Registration</h3>
        <div className='OrgListPage-grid'>
          {this.state.organizations.map(organization =>
            <OrgListItem
              {...this.props}
              organization={organization}
              key={organization._id}
            />)}
        </div>
      </div>
    );
  }
};

export default RegisterForOrgPage;