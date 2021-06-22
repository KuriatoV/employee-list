import React from 'react'

import AddEmployee  from '../AddEmployee'
import EmployeeList  from '../EmployeeList'
import useEmployees from './useEmployees'

const Employees: React.FC = () => {
  const { employees,addEmployee} = useEmployees()

  return (
    <>
      <AddEmployee addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </>

  );
}

export default Employees








