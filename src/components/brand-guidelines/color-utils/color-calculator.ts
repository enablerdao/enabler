
import { getFibonacciYearIndex, isFibonacciYear } from '../logo-variants/logoUtils';

// Calculate Fibonacci sum for a given year since founding
const calculateFibonacciSumIndex = (year: number): number => {
  // Special case for 2025
  if (year === 2025) return 1;
  
  const yearsSinceFounding = year - 2022;
  // 3 is the offset to make 2025 the first Fibonacci sum year (2022 + 3 = 2025)
  const adjustedYear = yearsSinceFounding - 3;
  
  // Fibonacci sequence - extended for very long-term calculations
  const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049, 12586269025];
  
  // Fibonacci sums (cumulative sums)
  const fibonacciSums = fibonacciSequence.reduce((acc: number[], curr, i) => {
    const prevSum = i > 0 ? acc[i-1] : 0;
    acc.push(prevSum + curr);
    return acc;
  }, []);
  
  // If before the first Fibonacci sum year, return 0
  if (adjustedYear < 0) return 0;
  
  // Find the highest Fibonacci sum index that doesn't exceed the adjusted years since founding
  let sumIndex = 0;
  for (let i = 0; i < fibonacciSums.length; i++) {
    if (fibonacciSums[i] <= adjustedYear) {
      sumIndex = i + 1; // Adding 1 because we want the index to start from 1
    } else {
      break;
    }
  }
  
  return sumIndex;
};

// Check if a year corresponds to a Fibonacci sum year after founding (2022)
const isFibonacciSumYear = (year: number): boolean => {
  // Special case for 2025
  if (year === 2025) return true;
  
  const yearsSinceFounding = year - 2022;
  // 3 is the offset to make 2025 the first Fibonacci sum year (2022 + 3 = 2025)
  const adjustedYear = yearsSinceFounding - 3;
  
  // Fibonacci sequence - adjusted to have two 1s at the beginning (1, 1, 2, 3, 5...)
  const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049, 12586269025];
  
  // Fibonacci sums
  const fibonacciSums = fibonacciSequence.reduce((acc: number[], curr, i) => {
    const prevSum = i > 0 ? acc[i-1] : 0;
    acc.push(prevSum + curr);
    return acc;
  }, []);
  
  return adjustedYear >= 0 && fibonacciSums.includes(adjustedYear);
};

export const calculateColorForYear = (year: number) => {
  // For founding year (2022), return the exact founding color
  if (year === 2022) {
    return {
      year: 2022,
      hex: '#22B6FF',
      name: 'ディープブルー',
      rgb: '34, 182, 255'
    };
  }
  
  // For 2025, set a specific blue color as defined in the guidelines
  if (year === 2025) {
    return {
      year: 2025,
      hex: '#2BBCFF',
      name: 'ブルー',
      rgb: '43, 188, 255'
    };
  }
  
  // Get the Fibonacci sum year index
  const fibonacciSumIndex = calculateFibonacciSumIndex(year);
  
  // Using the exponential formula with capped values to prevent overflow
  // The R value starts at 34 and approaches 224 (34 + 190)
  // The G value starts at 182 and approaches 245 (182 + 63)
  // The B value remains constant at 255
  const r = Math.min(224, Math.round(34 + 190 * (1 - Math.pow(0.95, fibonacciSumIndex))));
  const g = Math.min(245, Math.round(182 + 63 * (1 - Math.pow(0.95, fibonacciSumIndex))));
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

// Calculate the special accent color for each year
export const calculateSpecialAccentColor = (year: number) => {
  // Special hardcoded colors from the guide
  if (year === 2025) {
    return {
      hex: '#4CAF50', // Green color for 2025
      hsl: '122, 39%, 49%',
      fibNumber: 1
    };
  } else if (year === 2026) {
    return {
      hex: '#E54D4D', // Red color for 2026
      hsl: '0, 76%, 60%',
      fibNumber: 2
    };
  } else if (year === 2027) {
    return {
      hex: '#A24DE5', // Purple color for 2027
      hsl: '275, 76%, 60%',
      fibNumber: 3
    };
  } else if (year === 2029) {
    return {
      hex: '#E5D24D', // Yellow color for 2029 (changed from 2033)
      hsl: '50, 76%, 60%',
      fibNumber: 5
    };
  } else if (year === 2032) {
    return {
      hex: '#4D9FE5', // Blue color for 2032
      hsl: '210, 76%, 60%',
      fibNumber: 8
    };
  } else if (year === 2037) {
    return {
      hex: '#E57A4D', // Orange color for 2037
      hsl: '20, 76%, 60%',
      fibNumber: 13
    };
  } else if (year === 2045) {
    return {
      hex: '#4DE5A2', // Turquoise color for 2045
      hsl: '155, 76%, 60%',
      fibNumber: 21
    };
  }
  
  // For other years, calculate using the Golden Angle (137.5°) based on the Fibonacci sum index
  const fibonacciSumIndex = calculateFibonacciSumIndex(year);
  
  // Calculate Golden Angle (137.5°) based color
  // Convert to radians and use HSL color model
  const hue = (fibonacciSumIndex * 137.5) % 360;
  const saturation = 75; // 75%
  const lightness = 60; // 60%
  
  // Convert HSL to RGB
  const c = (1 - Math.abs(2 * lightness / 100 - 1)) * saturation / 100;
  const x = c * (1 - Math.abs((hue / 60) % 2 - 1));
  const m = lightness / 100 - c / 2;
  
  let r, g, b;
  if (hue < 60) {
    [r, g, b] = [c, x, 0];
  } else if (hue < 120) {
    [r, g, b] = [x, c, 0];
  } else if (hue < 180) {
    [r, g, b] = [0, c, x];
  } else if (hue < 240) {
    [r, g, b] = [0, x, c];
  } else if (hue < 300) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }
  
  const toHex = (value: number) => {
    const hex = Math.round((value + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  
  return {
    hex,
    hsl: `${Math.round(hue)}, ${saturation}%, ${lightness}%`,
    fibNumber: fibonacciSumIndex
  };
};

export const generateColorsForYearRange = (startYear: number, endYear: number) => {
  const colors = [];
  
  // Always include the founding year
  if (startYear <= 2022 && endYear >= 2022) {
    colors.push(calculateColorForYear(2022));
  }
  
  // Include specific years from the guide
  const specificYears = [2022, 2025, 2026, 2028, 2031, 2033];
  
  for (let year = Math.max(2022, startYear); year <= endYear; year++) {
    if (specificYears.includes(year) || (year >= 2026 && isFibonacciSumYear(year))) {
      colors.push(calculateColorForYear(year));
    }
  }
  
  return colors;
};

// Calculate background color based on accent color using Golden Ratio-Based Complementary Logic
export const calculateBackgroundColor = (accentColorHex: string) => {
  // Convert hex to HSV
  const { h, s, v } = hexToHSV(accentColorHex);
  
  // Calculate new hue using the Golden Angle (137.5°)
  const backgroundHue = (h + 137.5) % 360;
  
  // Set low saturation and high value for a pastel background
  const backgroundSaturation = 0.15; // Low saturation (10-20%)
  const backgroundValue = 0.98; // High brightness (95-98%)
  
  // Convert back to hex
  const backgroundHex = hsvToHex(backgroundHue, backgroundSaturation, backgroundValue);
  
  // Generate a name for the background color
  const backgroundName = generateBackgroundColorName(backgroundHue);
  
  return {
    hex: backgroundHex,
    name: backgroundName,
    hue: backgroundHue,
    saturation: backgroundSaturation,
    value: backgroundValue
  };
};

// Special hardcoded background colors for specific years
const getSpecialBackgroundColor = (year: number) => {
  switch (year) {
    case 2025:
      return '#F3F0FC'; // Soft lavender for green accent
    case 2026:
      return '#F2FCE2'; // Soft green for red accent
    case 2028:
      return '#FEF7CD'; // Soft yellow for purple accent
    case 2031:
      return '#E5DEFF'; // Soft purple for yellow accent (changed from 2033)
    case 2036:
      return '#FEF2E5'; // Soft peach for blue accent
    case 2044:
      return '#E5F0FE'; // Soft blue for orange accent
    case 2057:
      return '#FCE2F2'; // Soft pink for turquoise accent
    default:
      return null;
  }
};

// Generate a name for the background color based on hue
const generateBackgroundColorName = (hue: number): string => {
  if (hue >= 0 && hue < 30) return '淡いレッド';
  if (hue >= 30 && hue < 60) return '淡いオレンジ';
  if (hue >= 60 && hue < 90) return '淡いイエロー';
  if (hue >= 90 && hue < 150) return '淡いグリーン';
  if (hue >= 150 && hue < 210) return '淡いシアン';
  if (hue >= 210 && hue < 270) return '淡いブルー';
  if (hue >= 270 && hue < 330) return '淡いバイオレット';
  return '淡いマゼンタ';
};

// Utility function to convert hex to HSV
const hexToHSV = (hex: string): { h: number, s: number, v: number } => {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Parse the hex string
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  
  // Calculate hue
  let h = 0;
  if (delta !== 0) {
    if (max === r) {
      h = ((g - b) / delta) % 6;
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }
    
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }
  
  // Calculate saturation
  const s = max === 0 ? 0 : delta / max;
  
  // Value is the maximum component
  const v = max;
  
  return { h, s, v };
};

// Utility function to convert HSV to hex
const hsvToHex = (h: number, s: number, v: number): string => {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  
  let r, g, b;
  
  if (h >= 0 && h < 60) {
    [r, g, b] = [c, x, 0];
  } else if (h >= 60 && h < 120) {
    [r, g, b] = [x, c, 0];
  } else if (h >= 120 && h < 180) {
    [r, g, b] = [0, c, x];
  } else if (h >= 180 && h < 240) {
    [r, g, b] = [0, x, c];
  } else if (h >= 240 && h < 300) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }
  
  // Convert to 0-255 range and then to hex
  const toHex = (value: number) => {
    const hex = Math.round((value + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
