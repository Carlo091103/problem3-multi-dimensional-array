// mdArray.js

function restructureArray() {
  let namesStr = prompt("Enter names separated by commas (e.g., Genevieve,Juan,Luna,Gabriel,Elise):");
  let agesStr = prompt("Enter ages separated by commas (e.g., 24,65,21,5,9):");

  //Error handling for empty inputs
  if (!namesStr || !agesStr) {
    console.error("Please enter both names and ages.");
    return;
  }

  const names = namesStr.split(",");
  const ages = agesStr.split(",").map(Number);

    // Input validation: Check for consistent array lengths.
  if(names.length !== ages.length){
    console.error("Error: The number of names and ages must be equal.");
    return;
  }

    // Input validation: Check if ages are valid numbers.
  if (ages.some(isNaN)) {
    console.error("Invalid input: Ages must be numeric.");
    return;
  }


  const restructuredArray = [];
  for (let i = 0; i < names.length; i++) {
    restructuredArray.push([names[i], ages[i]]);
  }

  console.log("Restructured array:");
  restructuredArray.forEach(subArray => console.log(subArray));
}

restructureArray();
