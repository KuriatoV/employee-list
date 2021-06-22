import { useState, useEffect } from 'react';

import API from 'utils/API'
import { Employee } from '../../types'
import {EMPLOYEES} from '../../constants'


interface Output {
    employeesList: Employee[];
    addEmployee:(employee:Employee)=>void
}

const useEmployeeList = (): Output => {
    const [employeesList, setEmployeesList] = useState<Employee[]>([]);

    useEffect(() => {
       API.get<Employee[]>(EMPLOYEES).then(({data})=> setEmployeesList(data)) 
     },[])


    const addEmployee = async (employee: Employee) => {
        try {
            
            const {data:newEmployee} = await API.post<Employee[]>(EMPLOYEES, employee)
            
            setEmployeesList(prev => [...prev, ...newEmployee])
        } catch (err) {
            console.error(err)
        }

     }

    return {
        employeesList,
        addEmployee,
    };
};


export default useEmployeeList;
