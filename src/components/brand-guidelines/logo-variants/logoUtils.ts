
// Calculate color based on year using the formula with Fibonacci sums
// R = round(34 + 190 × (1 - 0.95^(y - 2022)))
// G = round(182 + 63 × (1 - 0.95^(y - 2022)))
// B = 255
export const calculateColorForYear = (year: number) => {
  // Get the Fibonacci sum year index
  const fibonacciSumIndex = getFibonacciSumYearIndex(year);
  
  // Using the exponential formula with a capped maximum to prevent overflow
  // This ensures the formula works for years well beyond 2041
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
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Get founding year color (2022)
export const foundingColor = '#22B6FF'; // Fixed founding color - verified correct

// Extended Fibonacci sequence for very long-term calculations
const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711];

// Fibonacci sums for years after 2022 - extended for long-term calculations
// This means changes happen in years: 2023, 2025, 2028, 2033, 2041, 2054, 2075, 2109, 2164, 2253, 2375, 2608, 2985, 3595, 4582, 6179, 8763, 12944, 19709, 30655
const fibonacciSums = fibonacciSequence.reduce((acc: number[], curr, i) => {
  const prevSum = i > 0 ? acc[i-1] : 0;
  acc.push(prevSum + curr);
  return acc;
}, []);

// Function to check if a year corresponds to a Fibonacci sum year after founding (2022)
export const isFibonacciSumYear = (year: number): boolean => {
  const yearsSinceFounding = year - 2022;
  return fibonacciSums.includes(yearsSinceFounding);
};

// Get the index in the Fibonacci sum sequence for a given year
// If not a Fibonacci sum year, returns the previous Fibonacci sum year index
export const getFibonacciSumYearIndex = (year: number): number => {
  const yearsSinceFounding = year - 2022;
  
  // If before founding year, return 0
  if (yearsSinceFounding <= 0) return 0;
  
  // Find the highest Fibonacci sum index that doesn't exceed the years since founding
  let sumIndex = 0;
  for (let i = 0; i < fibonacciSums.length; i++) {
    if (fibonacciSums[i] <= yearsSinceFounding) {
      sumIndex = i + 1; // We add 1 to start from 1 instead of 0
    } else {
      break;
    }
  }
  
  return sumIndex;
};

// Legacy function for backwards compatibility
export const isFibonacciYear = (year: number): boolean => {
  return isFibonacciSumYear(year);
};

// Legacy function for backwards compatibility
export const getFibonacciYearIndex = (year: number): number => {
  return getFibonacciSumYearIndex(year);
};

// Generate Fibonacci sequence-based accent color for each year
export const generateFibonacciAccentColorForYear = (year: number) => {
  // Get the Fibonacci sum index for the year
  const fibIndex = getFibonacciSumYearIndex(year);
  
  // Calculate Golden Angle (137.5°) based color - a naturally pleasing progression
  // Convert to radians and use HSL color model
  const hue = (fibIndex * 137.5) % 360;
  const saturation = 75; // 75%
  const lightness = 60; // 60%
  
  // Convert HSL to RGB (simplified conversion for this purpose)
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
    specialColor: hex,
    fibNumber: fibIndex
  };
};

// Calculate Golden Ratio for middle line
export const calculateGoldenRatio = (width: number) => {
  // Golden ratio is approximately 1.618
  const goldenRatio = 1.618;
  
  // Calculate segments based on golden ratio
  const segment1 = width / goldenRatio;
  const segment2 = width - segment1;
  
  return { segment1, segment2 };
};
