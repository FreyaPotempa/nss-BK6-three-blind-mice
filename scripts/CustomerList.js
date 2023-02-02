import { getComputers, getEmployees, getDepartments, getLocations, getCustomers, getEmployeeCustomers } from "./dataAccess.js"

//GOAL: reverse the previous code to that customers are listed first and then the employees
//who work for them

export const Customers = () => {
    const customers = getCustomers()

    // const matchDepartment = (employee) => {
    //     const departments = getDepartments()
    //     const employeeDepartment = departments.find(department => department.id === employee.departmentId)
    //     return `${employeeDepartment.name}`
    // }
    
    // const matchComputer = (employee) => {
    //     const computers = getComputers()
    //     const employeeComputer = computers.find(computer => computer.id === employee.computerId)
    //     return `${employeeComputer.year} ${employeeComputer.model}`
    
    // }

    // const matchLocation = (employee) => {
    //     const locations = getLocations()
    //     const employeeLocation = locations.find(location => location.id === employee.locationId)
    //     return `${employeeLocation.site}`

    // }
//THIS FUNCTION IS WHAT I NEED TO MAKE IT TWERK
    const matchEmployees = (customer) => {
        const employeeRelations = getEmployeeCustomers()
        const employees = getEmployees()
        //filtered list that contains all employeeCustomers (the customerIds) this employee has worked with
        const employeeCustomerList = employeeRelations.filter(CustomerRel => CustomerRel.customerId === customer.id)

        const employeeList = (rel) => {
        const employeeMatchName = employees.find(employee => rel.employeeId === employee.id)
        return `${employeeMatchName.firstName} ${employeeMatchName.lastName}`
        }

        let html = `<ul>
        ${employeeCustomerList.map(rel => {
            return `<li>${employeeList(rel)}</li>`
            
        }).join("")}
        </ul>`

        return html
    }

    let html = `<div class='customerList'>
    <h2>Customer List</h2>
    ${customers.map(customer => {
        return `<div class="customer__info" id=${customer.id}>
        <header class="customer__name">
        <h3>${customer.name}</h3>
        </header>
        <section class="customer__employees">
        Has worked with the following employees:
        ${matchEmployees(customer)}
        </div>`
    }).join("")}
    </div>`

    return html
}

