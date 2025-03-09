
import { getFibonacciYearIndex, isFibonacciYear } from '../logo-variants/logoUtils';

// Calculate Fibonacci sum for a given year since founding
const calculateFibonacciSumIndex = (year: number): number => {
  const yearsSinceFounding = year - 2022;
  
  // Fibonacci sequence - extended for very long-term calculations
  const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269];
  
  // Fibonacci sums (cumulative sums)
  // 1, 3, 6, 11, 19, 32, 53, 87, 142, 231, 375, 608, 985, 1595, 2582, 4179, 6763, 10944, 17709, 28655, 46366, 75023, 121391, 196416, 317809, 514227, 832038, 1346267, 2178307, 3524576
  const fibonacciSums = fibonacciSequence.reduce((acc: number[], curr, i) => {
    const prevSum = i > 0 ? acc[i-1] : 0;
    acc.push(prevSum + curr);
    return acc;
  }, []);
  
  // Find the highest Fibonacci sum index that doesn't exceed the years since founding
  let sumIndex = 0;
  for (let i = 0; i < fibonacciSums.length; i++) {
    if (fibonacciSums[i] <= yearsSinceFounding) {
      sumIndex = i + 1; // Adding 1 because we want the index to start from 1
    } else {
      break;
    }
  }
  
  return sumIndex;
};

// Check if a year corresponds to a Fibonacci sum year after founding (2022)
const isFibonacciSumYear = (year: number): boolean => {
  const yearsSinceFounding = year - 2022;
  
  // Fibonacci sequence - extended for very long-term calculations
  const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269];
  
  // Fibonacci sums
  const fibonacciSums = fibonacciSequence.reduce((acc: number[], curr, i) => {
    const prevSum = i > 0 ? acc[i-1] : 0;
    acc.push(prevSum + curr);
    return acc;
  }, []);
  
  return fibonacciSums.includes(yearsSinceFounding);
};

export const calculateColorForYear = (year: number) => {
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

// Calculate the special accent color for Fibonacci years
export const calculateSpecialAccentColor = (year: number) => {
  // Get the Fibonacci sum year index (1-based)
  const fibIndex = calculateFibonacciSumIndex(year);
  
  // Calculate Golden Angle (137.5°) based color - a naturally pleasing progression
  // Convert to radians and use HSL color model
  const hue = (fibIndex * 137.5) % 360;
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
    fibNumber: fibIndex
  };
};

export const generateColorsForYearRange = (startYear: number, endYear: number) => {
  // Only generate colors for Fibonacci sum sequence years after founding
  const colors = [];
  
  // Always include the founding year
  if (startYear <= 2022 && endYear >= 2022) {
    colors.push(calculateColorForYear(2022));
  }
  
  // Add Fibonacci sum years
  for (let year = Math.max(2022, startYear); year <= endYear; year++) {
    if (isFibonacciSumYear(year)) {
      colors.push(calculateColorForYear(year));
    }
  }
  
  return colors;
};
