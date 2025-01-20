// import {Customer} from "../model/Customer";
//
// const prisma = new PrismaClient();
//
// export async function customerAdd(customer:Customer){
//     try{
//         await prisma.customers.create{{
//             data:(
//                 name: customer.name,
//                 email:customer.email,
//                 phone:customer.phone,
//             )
//         }}
//         console.log("customer added successfully")
//
//     }catch(err){
//         console.log(err)
//     }
// }




import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createCustomer(id: number, name: string, email: string) {
    return await prisma.customers.create({
        data: {
            id,
            name,
            email,
        },
    });
}

export async function readCustomer(id: number) {
    return await prisma.customers.findUnique({
        where: { id },
    });
}

export async function updateCustomer(id: number, name: string, email: string) {
    return await prisma.customers.update({
        where: { id },
        data: { name, email },
    });
}

export async function deleteCustomer(id: number) {
    return await prisma.customers.delete({
        where: { id },
    });
}