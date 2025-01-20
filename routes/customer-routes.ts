// import express from "express";
// import {addCustomer,getCustomers} from "../database/local-darta-store";
// import {Customer} from "../model/Customer"
// import {deleteCustomer, updateCustomer} from "../database/local-data-store";
//
// const router = express.Router();
//
// router.add("/add", (req, res) => {
//     // res.send("Hello, customer!");
// });
//
//
// router.get("/get", (req, res) => {
//     res.send("Hello, customer!");
//     const newCustomer:Customer=req.body();
//     addCustomer(newCustomer);
//     res.send('addCustomer')
// });
//
// router.post("/post", (req, res) => {
//     res.send("Hello, customer!");
// });
//
// router.put("/update/:id", (req, res) => {
//     const id:number =+ req.params.id;
//     const customer :Customer = req.body;
//     updateCustomer(id,customer);
//     res.send("update customer!");
// });
//
// router.put("/delete/:id", (req, res) => {
//     const id:number =+ req.params.id;
//     deleteCustomer(id);
//     res.send("delete customer!");
// });
//
// export default router;






//
// import express from "express";
// import { createCustomer, readCustomer, updateCustomer, deleteCustomer } from "../database/local-data-store";
//
// const router = express.Router();
//
// router.get("/:id", (req, res) => {
//   const customer = readCustomer(parseInt(req.params.id));
//   if (customer) {
//     res.json(customer);
//   } else {
//     res.status(404).send("Customer not found");
//   }
// });
//
// router.post("/add", (req, res) => {
//   const { id, name, email } = req.body;
//   const newCustomer = createCustomer(id, name, email);
//   res.status(201).send(newCustomer);
// });
//
// router.put("/:id", (req, res) => {
//   const { name, email } = req.body;
//   const updatedCustomer = updateCustomer(parseInt(req.params.id), name, email);
//   if (updatedCustomer) {
//     res.json(updatedCustomer);
//   } else {
//     res.status(404).send("Customer not found");
//   }
// });
//
// router.delete("/:id", (req, res) => {
//   const success = deleteCustomer(parseInt(req.params.id));
//   if (success) {
//     res.status(204).send();
//   } else {
//     res.status(404).send("Customer not found");
//   }
// });
//
// export default router;



import express from "express";
import { createCustomer, readCustomer, updateCustomer, deleteCustomer } from "../database/prisma-data-store";

const router = express.Router();

router.get("/:id", async (req, res) => {
    const customer = await readCustomer(parseInt(req.params.id));
    if (customer) {
        res.json(customer);
    } else {
        res.status(404).send("Customer not found");
    }
});

router.post("/add", async (req, res) => {
    const { id, name, email } = req.body;
    const newCustomer = await createCustomer(id, name, email);
    res.status(201).send(newCustomer);
});

router.put("/:id", async (req, res) => {
    const { name, email } = req.body;
    const updatedCustomer = await updateCustomer(parseInt(req.params.id), name, email);
    if (updatedCustomer) {
        res.json(updatedCustomer);
    } else {
        res.status(404).send("Customer not found");
    }
});

router.delete("/:id", async (req, res) => {
    const success = await deleteCustomer(parseInt(req.params.id));
    if (success) {
        res.status(204).send();
    } else {
        res.status(404).send("Customer not found");
    }
});

export default router;