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
  if (status === "pass" || status === "fail" ) {
    return status;
  }
  
  if (comments.length > 0) {
    return "started";
  }
  return "todo";
  
};

// NOTE: do not edit the export below
// it is used to make the web page and tests work
export { calculateGrade, calculateStatus };
