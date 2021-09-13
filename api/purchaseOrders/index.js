module.exports = async function (context/* , req */) {
  context.res.json([
      {
        id: 10,
        requestDate: "4/5/84",
        requestor: "ashley",
        vendor: "lauren",
        supplies: [
          'first', 'second', 'third',
        ],
        quoteNumber: '123'
      },
      {
        id: 20,
        requestDate: "5/19/87",
        requestor: "amanda",
        vendor: "nicole",
      },
      {
        id: 30,
        requestDate: "4/17/88",
        requestor: "lance",
        vendor: "jonathan",
      },
    ]);
};
