
import { getFibonacciYearIndex, isFibonacciYear } from '../logo-variants/logoUtils';

// Calculate Fibonacci sum for a given year since founding
const calculateFibonacciSumIndex = (year: number): number => {
  // Special case for 2025
  if (year === 2025) return 1;
  
  const yearsSinceFounding = year - 2022;
  // 4 is the offset to make 2026 the first Fibonacci sum year (2022 + 4 = 2026)
  const adjustedYear = yearsSinceFounding - 4;
  
  // Fibonacci sequence - extended for very long-term calculations
  const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269];
  
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
  // 4 is the offset to make 2026 the first Fibonacci sum year (2022 + 4 = 2026)
  const adjustedYear = yearsSinceFounding - 4;
  
  // Fibonacci sequence - extended for very long-term calculations
  const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269];
  
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
  
  // For 2025, set a special blue color as the first important year
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
  // Special case for 2025 - use a specific green color as the first special color
  if (year === 2025) {
    return {
      hex: '#4CAF50', // Green color for 2025
      hsl: '122, 39%, 49%',
      fibNumber: 1
    };
  }
  
  // For special accent color, we use the Golden Angle (137.5°) based on the Fibonacci sum index
  // This ensures both color calculations are consistent and based on Fibonacci principles
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
  
  // Make 2025 the blue special year and 2026 the first Fibonacci sum year
  for (let year = Math.max(2022, startYear); year <= endYear; year++) {
    if (year === 2025 || (year >= 2026 && isFibonacciSumYear(year))) {
      colors.push(calculateColorForYear(year));
    }
  }
  
  return colors;
};
