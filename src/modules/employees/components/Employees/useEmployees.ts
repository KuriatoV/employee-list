import { useState, useEffect, useCallback } from 'react';

import API from 'utils/API'
import { Employee } from '../../types'
import {EMPLOYEES} from '../../constants'


interface Output {
    employees: Employee[];
    addEmployee:(employee:Employee)=>void
}

const useEmployees = (): Output => {
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
       API.get<Employee[]>(EMPLOYEES).then(({data})=> setEmployees(data)) 
     },[])


    const addEmployee = useCallback( async (employee: Employee) => {
        try {
            
            const {data:newEmployee} = await API.post<Employee[]>(EMPLOYEES, employee)
            
            setEmployees(prev => [...prev, ...newEmployee])
        } catch (err) {
            console.error(err)
        }

     },[])

    return {
        employees,
        addEmployee,
    };
};


export default useEmployees;
