
const localData = {
    employees: [],
    computers: [],
    departments: [],
    locations: [],
    customers: [],
    employeeCustomers: []
}

const mainContainer = document.querySelector("#container")
const API = "http://localhost:8088"

export const fetchComputers = () => {
    return fetch(`${API}/computers`)
    .then(response => response.json())
    .then(
        (computerList) => {
            localData.computers = computerList
        }
    )
}

export const fetchEmployees =  () => {
    return fetch(`${API}/employees`)
    .then(response => response.json())
    .then(
        (employeeList) => {
            localData.employees = employeeList
        }
    )
}

export const fetchDepartments = () => {
    return fetch (`${API}/departments`)
    .then(response => response.json())
    .then(
        (departmentList) => {
            localData.departments = departmentList
        }
    )
}

export const fetchLocations = () => {
    return fetch (`${API}/locations`)
    .then(response => response.json())
    .then(
        (locationList) => {
            localData.locations = locationList
        }
    )
}

export const fetchCustomers = () => {
    return fetch (`${API}/customers`)
    .then(response => response.json())
    .then(
        (customerList) => {
            localData.customers = customerList
        }
    )
}

export const fetchEmployeeCustomers = () => {
    return fetch (`${API}/employeeCustomers`)
    .then(response => response.json())
    .then(
        (employeeCustomerList) => {
            localData.employeeCustomers = employeeCustomerList
        }
    )
}


export const getComputers = () => {
    return localData.computers.map(computer => ({...computer}))
}

export const getEmployees = () => {
    return localData.employees.map(employee => ({...employee}))   
}

export const getDepartments = () => {
    return localData.departments.map(department => ({...department}))
}

export const getLocations = () => {
    return localData.locations.map(location => ({...location}))
}

export const getCustomers = () => {
    return localData.customers.map(customer => ({...customer}))
}

export const getEmployeeCustomers = () => {
    return localData.employeeCustomers.map (employeeCustomer => ({...employeeCustomer}))
}