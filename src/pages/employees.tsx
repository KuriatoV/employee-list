import React from 'react';

import { App } from 'types';
import { components } from 'modules/employees'

const {EmployeeList} =components

const EmployeesPage: React.FC<App.Page> = () => {
  
    return <EmployeeList/>
}

export default EmployeesPage;