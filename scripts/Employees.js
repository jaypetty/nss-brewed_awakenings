import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"


const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html

}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            

            for (const employee of employees) {
                if ( employee.id === parseInt(employeeId)) {
                    let employeeSales = 0
                    
                    const employeeOrders = orders.filter(
                        (order) => {
                            if (order.employeeId === employee.id) {
                                employeeSales += 1
                            }
                        }
                    )

                    return window.alert(` ${employee.name} sold ${employeeSales} products `)
                }
            }
        }
    }
)