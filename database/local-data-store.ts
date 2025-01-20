// // import {Customer} from"../model/Customer";
// //
// // // create  a customer class
// // const customers:Customer[]=[];
// // // create a customer array
// // export function addCustomer(customer:Customer):void {
// //     customers.push(customer);
// // }
// // // create the crud methods for it
// // export function deleteCustomer(customer:Customer):void {
// //    customer= customers.filter((customer:Customer):boolean=>customer.id;
// // }
// //
// // export function updateCustomer(id:number,cus:Customer):void {
// //     customer= map((customer:Customer):void=>{
// //         if(customer.id===id){
// //
// //         }
// //     }
// // }
// //
// // export function getCustomer(customer:Customer):void {
// //     customers= customers.filter((customer:Customer):boolean=>customer.id;
// // }
//
//
//
//
//
//
// //create a customer class
//
// //create a customer array
//
// //create crud methos for it
//
// import Customer from '../Customer';
//
// const customers: Customer[] = [];
//
// // Create a new customer
// export function createCustomer(id: number, name: string, email: string): Customer {
//     const newCustomer = new Customer(id, name, email);
//     customers.push(newCustomer);
//     return newCustomer;
// }
//
// // Read a customer by ID
// export function readCustomer(id: number): Customer | undefined {
//     return customers.find(customer => customer.id === id);
// }
//
// // Update a customer by ID
// export function updateCustomer(id: number, name: string, email: string): Customer | undefined {
//     const customer = customers.find(customer => customer.id === id);
//     if (customer) {
//         customer.name = name;
//         customer.email = email;
//     }
//     return customer;
// }
//
// // Delete a customer by ID
// export function deleteCustomer(id: number): boolean {
//     const index = customers.findIndex(customer => customer.id === id);
//     if (index !== -1) {
//         customers.splice(index, 1);
//         return true;
//     }
//     return false;
// }



import Customer from '../model/Customer';

const customers: Customer[] = [];

export function createCustomer(id: number, name: string, email: string): Customer {
    const newCustomer = new Customer(id, name, email);
    customers.push(newCustomer);
    return newCustomer;
}

export function readCustomer(id: number): Customer | undefined {
    return customers.find(customer => customer.id === id);
}

export function updateCustomer(id: number, name: string, email: string): Customer | undefined {
    const customer = customers.find(customer => customer.id === id);
    if (customer) {
        customer.name = name;
        customer.email = email;
    }
    return customer;
}

export function deleteCustomer(id: number): boolean {
    const index = customers.findIndex(customer => customer.id === id);
    if (index !== -1) {
        return true;
    }
    return false;
}