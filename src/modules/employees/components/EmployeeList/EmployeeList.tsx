import React from 'react'

import { Employee } from '../../types'
import EmployeeRow from '../EmployeeRow'


type Props = {
  employees:Employee[]
}

const EmployeeList: React.FC<Props> = ({employees}) => {

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
        {employees.map(employee => (
            <EmployeeRow key={employee._id} {...employee}/>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList








