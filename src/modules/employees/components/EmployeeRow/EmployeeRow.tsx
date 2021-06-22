import React from 'react'
import {Employee} from '../../types'




const EmployeeRow: React.FC<Employee> = ({name,age,gender,status}) => {
    return (<tr>
        <td>{name}</td>
          <td>{age}</td>
          <td>{gender}</td>
          <td>{status}</td>
        </tr>)
}

export default EmployeeRow