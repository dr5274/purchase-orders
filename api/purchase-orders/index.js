// Load mongoose
const mongoose = require("mongoose");

mongoose.connect(
  process.env.CONNECTION_STRING, // Retrieve connection string
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const schema = new mongoose.Schema({
  requestDate: Date,
  requestor: String,
  vendor: String,
  supplies: [String],
  supplied: [Boolean],
  quoteNumber: String,
  subTotal: Number,
  dateNeeded: Date,
  billableSC: String,
});

// Create a model using our schema
// This model will be used to access the database
const model = mongoose.model("purchase-order", schema);

module.exports = async function(context, req) {
  // setup our default content type (we always return JSON)
  context.res = {
    header: {
      "Content-Type": "application/json",
    },
  };

  // Read the method and determine the requested action
  switch (req.method) {
    case "GET":
      await getPurchaseOrders(context);
      break;
    case "POST":
      await createPurchaseOrder(context);
      break;
    case "PUT":
      await updatePurchaseOrder(context);
      break;
    case "DELETE":
      await deletePurchaseOrder(context);
      break;
  }
};

async function getPurchaseOrders(context) {
  const purchaseOrders = await model.find();
  context.res.body = { purchaseOrders: purchaseOrders };
}

async function createPurchaseOrder(context) {
  const body = context.req.body;
  const purchaseOrder = await model.create(body);
  context.res.status = 201;
  context.res.body = purchaseOrder;
}

async function updatePurchaseOrder(context) {
  const id = context.bindingData.id;
  const purchaseOrder = context.req.body;
  const result = await model.updateOne({ _id: id }, purchaseOrder);
  if (result.nModified === 1) {
    context.res.status = 204;
  } else {
    context.res.status = 404;
  }
}

async function deletePurchaseOrder(context) {
  const id = context.bindingData.id;
  const result = await model.deleteOne({ _id: id });
  if (result.nModified === 1) {
    context.res.status = 204;
  } else {
    context.res.status = 404;
  }
}

// module.exports = async function(context, req) {
//     const method = req.method.toLowerCase();
//     const id = context.bindingData.id;
//     var payload = null;

//     switch (method) {
//       case "get":
//         return {
//           body: _get(id),
//         };

//       case "post":
//         payload = req.body;
//         break;

//       case "put":
//         payload = {
//           id: req.params.id,
//           todo: req.body,
//         };
//         break;

//       case "delete":
//         payload = { id: req.params.id };
//         break;
//     }

//     // context.res = {
//     //   body: payload,
//     // };
//   };

//   const _get = (id) => {
//     if (id) {
//       return _defaultData.find((po) => po.id == id);
//     } else {
//       return _defaultData;
//     }
//   };

//   const executeSQL = (context, method, payload) => {
//     let response = `method: ${method}, payload: ${payload}`;
//     return {
//       body: response,
//     };
//   };

//   const _defaultData = [
//     {
//       id: 10,
//       requestDate: "2021-08-25",
//       requestor: "Henry",
//       vendor: "PSI",
//       supplies: ["compound", "discs", "red tape"],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "1040781",
//       subTotal: 1933.73,
//       dateNeeded: "1999-01-01",
//       billableSC: "non-billable",
//     },
//     {
//       id: 11,
//       requestDate: "2021-08-31",
//       requestor: "Sig",
//       vendor: "Allied High Tech",
//       supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "86228",
//       subTotal: 5722.0,
//       dateNeeded: "1999-01-01",
//       billableSC: "non-billable",
//     },
//     {
//       id: 12,
//       requestDate: "2021-09-09",
//       requestor: "John",
//       vendor: "Grainger",
//       supplies: [
//         "LED light ring",
//         "sink soap dispenser (x2)",
//         "40 grit sand discs",
//       ],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "cart",
//       subTotal: 1176.53,
//       dateNeeded: "2021-09-14",
//       billableSC: "741344",
//     },
//     {
//       id: 20,
//       requestDate: "2021-08-25",
//       requestor: "Henry",
//       vendor: "PSI",
//       supplies: ["compound", "discs", "red tape"],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "1040781",
//       subTotal: 1933.73,
//       dateNeeded: "1999-01-01",
//       billableSC: "non-billable",
//     },
//     {
//       id: 21,
//       requestDate: "2021-08-31",
//       requestor: "Sig",
//       vendor: "Allied High Tech",
//       supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "86228",
//       subTotal: 5722.0,
//       dateNeeded: "1999-01-01",
//       billableSC: "non-billable",
//     },
//     {
//       id: 22,
//       requestDate: "2021-09-09",
//       requestor: "John",
//       vendor: "Grainger",
//       supplies: [
//         "LED light ring",
//         "sink soap dispenser (x2)",
//         "40 grit sand discs",
//       ],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "cart",
//       subTotal: 1176.53,
//       dateNeeded: "2021-09-14",
//       billableSC: "741344",
//     },
//     {
//       id: 30,
//       requestDate: "2021-08-25",
//       requestor: "Henry",
//       vendor: "PSI",
//       supplies: ["compound", "discs", "red tape"],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "1040781",
//       subTotal: 1933.73,
//       dateNeeded: "1999-01-01",
//       billableSC: "non-billable",
//     },
//     {
//       id: 31,
//       requestDate: "2021-08-31",
//       requestor: "Sig",
//       vendor: "Allied High Tech",
//       supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "86228",
//       subTotal: 5722.0,
//       dateNeeded: "1999-01-01",
//       billableSC: "non-billable",
//     },
//     {
//       id: 32,
//       requestDate: "2021-09-09",
//       requestor: "John",
//       vendor: "Grainger",
//       supplies: [
//         "LED light ring",
//         "sink soap dispenser (x2)",
//         "40 grit sand discs",
//       ],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "cart",
//       subTotal: 1176.53,
//       dateNeeded: "2021-09-14",
//       billableSC: "741344",
//     },
//     {
//       id: 40,
//       requestDate: "2021-08-25",
//       requestor: "Henry",
//       vendor: "PSI",
//       supplies: ["compound", "discs", "red tape"],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "1040781",
//       subTotal: 1933.73,
//       dateNeeded: "1999-01-01",
//       billableSC: "non-billable",
//     },
//     {
//       id: 41,
//       requestDate: "2021-08-31",
//       requestor: "Sig",
//       vendor: "Allied High Tech",
//       supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "86228",
//       subTotal: 5722.0,
//       dateNeeded: "1999-01-01",
//       billableSC: "non-billable",
//     },
//     {
//       id: 42,
//       requestDate: "2021-09-09",
//       requestor: "John",
//       vendor: "Grainger",
//       supplies: [
//         "LED light ring",
//         "sink soap dispenser (x2)",
//         "40 grit sand discs",
//       ],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "cart",
//       subTotal: 1176.53,
//       dateNeeded: "2021-09-14",
//       billableSC: "741344",
//     },
//     {
//       id: 50,
//       requestDate: "2021-08-25",
//       requestor: "Henry",
//       vendor: "PSI",
//       supplies: ["compound", "discs", "red tape"],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "1040781",
//       subTotal: 1933.73,
//       dateNeeded: "1999-01-01",
//       billableSC: "non-billable",
//     },
//     {
//       id: 51,
//       requestDate: "2021-08-31",
//       requestor: "Sig",
//       vendor: "Allied High Tech",
//       supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "86228",
//       subTotal: 5722.0,
//       dateNeeded: "1999-01-01",
//       billableSC: "non-billable",
//     },
//     {
//       id: 52,
//       requestDate: "2021-09-09",
//       requestor: "John",
//       vendor: "Grainger",
//       supplies: [
//         "LED light ring",
//         "sink soap dispenser (x2)",
//         "40 grit sand discs",
//       ],
//       supplied: [false, false, false, false, false, false],
//       quoteNumber: "cart",
//       subTotal: 1176.53,
//       dateNeeded: "2021-09-14",
//       billableSC: "741344",
//     },
//   ];
