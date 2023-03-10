const calculateGrade = (percentage) => {
  if (percentage < 40) {
    return "E";
  }

  if (percentage < 50) {
    return "D";
  }

  if (percentage < 65) {
    return "C";
  }

  if (percentage < 80) {
    return "B";
  }

  return "A";
}
  
const calculateStatus = (status, comments) => {
  console.log(status, comments);
  return "";
};

// NOTE: do not edit the export below
// it is used to make the web page and tests work
export { calculateGrade, calculateStatus };
