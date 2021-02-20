import React  from 'react';
import { Link } from 'react-router-dom';


const EmployeeListItem = (props) => (
  <div className=' card CardBorder mt-4 '>
    <div className="m-2">
      <h2 className="Card-Text">{props.employee.name}</h2>
      <div className="center-btn mt-3 mb-1">
        <button className="CancelButton btn">
          <Link className="CancelLink" to={{
            pathname:'employee/details',
            state: {employee: props.employee}
          }}>View Profile</Link>
        </button>
      </div>


    </div>
  </div>
)

export default EmployeeListItem;