import { Customers } from "./CustomerList.js"
import { Employees } from "./Employees.js"


export const ThreeBlindMice = () => {
    return `
    <h1>3 Blind Mice Consulting</h1>
    <section class="employees">
    ${Employees()}
    </section>
    <section class="customers">
    ${Customers()}
    </section>
    `
}