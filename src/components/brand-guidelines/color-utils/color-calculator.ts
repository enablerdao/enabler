
import { getFibonacciYearIndex, isFibonacciYear } from '../logo-variants/logoUtils';

// Calculate Fibonacci sum for a given year since founding
const calculateFibonacciSumIndex = (year: number): number => {
  const yearsSinceFounding = year - 2022;
  
  // Fibonacci sequence
  const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
  
  // Fibonacci sums (cumulative sums)
  // 1, 3, 6, 11, 19, 32, 53, 87, 142, 231, 375, 608, 985, 1595, 2582
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
  
  // Fibonacci sequence
  const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
  
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
