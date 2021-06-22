import React from 'react'

import EmployeeRow from '../EmployeeRow'
import useEmployeeList from './useEmployeeList'


const EmployeeList: React.FC = () => {
    const { employeesList} = useEmployeeList()

    return  (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {employeesList.map(employee => (
            <EmployeeRow key={employee._id} {...employee}/>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList








