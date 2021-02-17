import React  from 'react';
import { Link } from 'react-router-dom';


const EmployeeListItem = (props) => (
  <div className='panel panel-default'>
    <div className="panel-heading">
      <h2 className="panel-title">{props.employee.name}</h2>
      <Link className="btn btn-xs" to={{
        pathname:'employee/details',
        state: {employee: props.employee}
      }}>View Profile</Link>
    </div>
  </div>
)

export default EmployeeListItem;