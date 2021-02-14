import React, { Component } from 'react';
import RegisterOrgForm from '../../components/RegisterOrgForm/RegisterOrgForm';
import orgService from '../../utils/orgService';

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
        <h2>Organizations</h2>


      </div>
    );
  }
};

export default RegisterForOrgPage;