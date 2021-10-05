// local.settings.json
// {
//   "IsEncrypted": false,
//   "Values": {
//     "AzureWebJobsStorage": "",
//     "FUNCTIONS_WORKER_RUNTIME": "node",
//     "CONNECTION_STRING": "...."
//   },
//   "Host": {
//     "LocalHttpPort": 7071,
//     "CORS": "*",
//     "CORSCredentials": false
//   }
// }

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
  requestSent: Date,
  dateReceived: Date,
  poNumber: String,
  complete: Boolean,
  notes: String,
  assignedTo: [String],
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
  const id = context.bindingData.id;
  if (id) {
    const purchaseOrder = await model.findOne({ _id: id });
    context.res.body = { purchaseOrder: purchaseOrder };
  } else {
    const purchaseOrders = await model.find();
    context.res.body = { purchaseOrders: purchaseOrders };
  }
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
  context.res.status = 204;
}

async function deletePurchaseOrder(context) {
  const id = context.bindingData.id;
  const result = await model.deleteOne({ _id: id });
  context.res.status = 204;
}
