function convertHex(component) {
  const hex = component.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return `#${convertHex(r)}${convertHex(g)}${convertHex(b)}`;
}

console.log(rgbToHex(0, 51, 255));
//O(n^3)
