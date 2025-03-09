
export const calculateColorForYear = (year: number) => {
  const yearDiff = year - 2022;
  
  // Using the exponential formula with capped values to prevent overflow
  const r = Math.min(224, Math.round(34 + 190 * (1 - Math.pow(0.95, yearDiff))));
  const g = Math.min(245, Math.round(182 + 63 * (1 - Math.pow(0.95, yearDiff))));
  const b = 255;
  
  // Convert to HEX
  const toHex = (value: number) => {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  
  // Generate color name based on the values
  let name = '';
  if (r < 100) {
    name = 'ディープブルー';
  } else if (r < 150) {
    name = 'ミディアムブルー';
  } else if (r < 200) {
    name = 'ライトブルー';
  } else {
    name = 'スカイブルー';
  }
  
  return { year, hex, name, rgb: `${r}, ${g}, ${b}` };
};

export const generateColorsForYearRange = (startYear: number, endYear: number) => {
  const colors = [];
  
  for (let year = startYear; year <= endYear; year++) {
    colors.push(calculateColorForYear(year));
  }
  
  return colors;
};
