const mongoose = require("mongoose");

mongoose.connect(
  process.env.CONNECTION_STRING, // Retrieve connection string
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const schema = new mongoose.Schema({
  assignees: [String],
});

// Create a model using our schema
// This model will be used to access the database
const model = mongoose.model("assignees", schema);

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
      await getAssignees(context);
      break;
  }
};

async function getAssignees(context) {
  const data = await model.findOne({ _id: "617818b96f3da6644784c5c7" });
  context.res.body = { assignees: data.assignees };
}
