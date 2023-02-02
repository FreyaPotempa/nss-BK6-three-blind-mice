import { fetchComputers, fetchCustomers, fetchDepartments, fetchEmployeeCustomers, fetchEmployees, fetchLocations } from "./dataAccess.js"
import { ThreeBlindMice } from "./ThreeBlindMice.js"


const mainContainer = document.querySelector('#container')

// mainContainer.addEventListener(
//     "stateChanged",
//     customEvent => {
//         renderAll()
//     }
// )

export const renderAll = () => {
    fetchEmployees()
    .then(() => fetchComputers())
    .then(() => fetchDepartments())
    .then(() => fetchLocations())
    .then(() => fetchCustomers())
    .then(() => fetchEmployeeCustomers())
    .then(
        () => {
            mainContainer.innerHTML = ThreeBlindMice()
        }
    )
}

renderAll()