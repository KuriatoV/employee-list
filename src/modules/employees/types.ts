enum Gender {
    MALE = 'male',
    FEMALE='female'
}

enum EmployeeStatus {
    ACTIVE = "active",
    INACTIVE ="inactive"
}

export type Employee = {
    _id: string;
    name: string;
    age: number;
    gender: Gender;
    status:EmployeeStatus
}
