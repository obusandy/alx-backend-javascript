const calculateNumber = (a, b) => {
  const rounddA = Math.round(a);
  const rounddB = Math.round(b);

  return rounddA + rounddB;
};

module.exports = calculateNumber;
