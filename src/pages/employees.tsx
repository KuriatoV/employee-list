import React from 'react';

import { App } from 'types';
import components from 'modules/employees'

const {Employees} =components

const EmployeesPage: React.FC<App.Page> = () => {
  
    return <Employees/>
}

export default EmployeesPage;