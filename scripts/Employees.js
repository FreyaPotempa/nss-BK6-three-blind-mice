import { getComputers, getEmployees, getDepartments, getLocations, getCustomers, getEmployeeCustomers } from "./dataAccess.js"



export const Employees = () => {
    const employees = getEmployees()

    const matchDepartment = (employee) => {
        const departments = getDepartments()
        const employeeDepartment = departments.find(department => department.id === employee.departmentId)
        return `${employeeDepartment.name}`
    }
    
    const matchComputer = (employee) => {
        const computers = getComputers()
        const employeeComputer = computers.find(computer => computer.id === employee.computerId)
        return `${employeeComputer.year} ${employeeComputer.model}`
    
    }

    const matchLocation = (employee) => {
        const locations = getLocations()
        const employeeLocation = locations.find(location => location.id === employee.locationId)
        return `${employeeLocation.site}`

    }

    const matchCustomers = (employee) => {
        const employeeRelations = getEmployeeCustomers()
        const customers = getCustomers()
        //filtered list that contains all employeeCustomers (the customerIds) this employee has worked with
        const employeeCustomerList = employeeRelations.filter(employeeRel => employeeRel.employeeId === employee.id)
        console.log(employeeCustomerList)

        const customerList = (rel) => {
        const customerMatchName = customers.find(customer => rel.customerId === customer.id)
        return `${customerMatchName.name}`
        }

        let html = `<ul>
        ${employeeCustomerList.map(rel => {
            return `<li>${customerList(rel)}</li>`
            
        }).join("")}
        </ul>`

        return html
    }

    let html = `<div class='employeeList'>
    <h2>Employees</h2>
    ${employees.map(employee => {
        return `<div class="employeeInfo" id=${employee.id}>
        <header class="employee__name">
        <h3>${employee.firstName} ${employee.lastName}</h3>
        </header>
        <section class="employee__computer">
        Currently using a ${matchComputer(employee)}
        </section>
        <section class="employee__department">
        Works in the ${matchDepartment(employee)} department
        </section>
        <section class="employee__location">
        Works in the ${matchLocation(employee)} office
        </section>
        <section class="employee__customers">
        Has worked for the following customers:
        ${matchCustomers(employee)}
        </div>`
    }).join("")}
    </div>`

    return html
}

