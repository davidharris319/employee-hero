import React  from 'react';

const EmployeeListItem = (props) => (
  <div className='panel panel-default'>
    <div className="panel-heading">
      <h2 className="panel-title">{props.employee.name}</h2>
    </div>
  </div>
)

export default EmployeeListItem;