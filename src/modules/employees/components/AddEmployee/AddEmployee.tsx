import React from 'react';

import {EMPLOYEES} from '../../constants'
import {Employee} from '../../types';
import API from 'utils/API';

type Props = {
  addEmployee: (employee:Employee)=>void
};

const AddEmployee: React.FC<Props> = ({ addEmployee }) => {

  const onSumbit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      
    if (!e.target) return;

    const formData = new FormData(e.target as HTMLFormElement); 

    const data = Object.fromEntries(formData);

    API.post<Employee>(EMPLOYEES,data).then(({data:employee}) => {
      addEmployee(employee);
    }).catch(err=>console.error(err))
  };

  return (
    <form onSubmit={onSumbit} >
      <label>
        <span>name</span>
        <input type="text" name="name"  />
      </label>
      <label>
        <span>age</span>
        <input type="number" name="age"  />
      </label> 
      <label>
        <span>gender</span>
        <input type="radio" name="gender" value="female" />
        <input type="radio" name="gender" value="male" />
      </label>
      <input type="hidden" name="status" value="inactive" />
      <input type="submit" />
    </form>
  );
};

export default AddEmployee;