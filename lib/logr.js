const logr = {

  ln(str) {
    console.log(str);
  },

  json(data) {
    process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
  }

};

export default logr;
