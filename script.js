const extendHex = (shortHex) => {
  // write your code here
// Remove the '#' prefix if it exists
// Expand each component and concatenate them
// Add the '#' prefix and return the full hex code

	if (shortHex.startsWith('#')) {
    shortHex = shortHex.slice(1);
  }
  // console.log(shortHex);
  let fullHex = '';
  for (let i = 0; i < 3; i++) {
    const element = shortHex[i];
    // console.log(element);
    fullHex = fullHex + element + element;
  }
  return '#' + fullHex;
	
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
