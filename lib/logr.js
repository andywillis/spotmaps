class Logr {

  static ln(str) {
    console.log(str);
  }

  static json(data) {
    process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
  }

}

export default Logr;
