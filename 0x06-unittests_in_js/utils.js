const Utils = {
  calculateNumber(type, a, b) {
    const rounddA = Math.round(a);
    const rounddB = Math.round(b);

    if (type === "SUBTRACT") {
      return rounddA - rounddB;
    }

    if (type === "DIVIDE") {
      if (rounddB === 0) {
        return "Error";
      }
      return rounddA / rounddB;
    }

    return rounddA + rounddB;
  },
};

module.exports = Utils;
