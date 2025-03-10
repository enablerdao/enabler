
// Calculate color based on year using the formula with Fibonacci sums
// R = round(34 + 190 × (1 - 0.95^(y - 2022)))
// G = round(182 + 63 × (1 - 0.95^(y - 2022)))
// B = 255
export const calculateColorForYear = (year: number) => {
  // For founding year (2022), return the exact founding color
  if (year === 2022) {
    return "#22B6FF"; // Fixed founding color
  }
  
  // For 2025, set the specific blue color as defined in the guidelines
  if (year === 2025) {
    return "#2BBCFF"; // Blue color for 2025
  }
  
  // For specific years defined in the guide
  if (year === 2026) {
    return "#37C0FF"; 
  }
  
  if (year === 2027) {
    return "#4AC4FF"; 
  }
  
  if (year === 2029) {
    return "#3DC6FF"; 
  }
  
  if (year === 2032) {
    return "#41C9FF"; 
  }
  
  // Get the Fibonacci sum year index - 2025 is the first Fibonacci sum year (1st cycle)
  const yearsSinceFounding = year - 2022;
  const fibonacciSumIndex = year >= 2025 ? getFibonacciSumYearIndex(year) : 0;
  
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
export const foundingColor = '#22B6FF'; // Fixed founding color

// Extended Fibonacci sequence for very long-term calculations
// Updated to include standard Fibonacci sequence with two 1s at the beginning
const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040];

// Fibonacci sums for years after 2022 (founding year)
// This means changes happen in years: 2025, 2026, 2027, 2029, 2032, 2037, 2045, etc.
const fibonacciSums = fibonacciSequence.reduce((acc: number[], curr, i) => {
  const prevSum = i > 0 ? acc[i-1] : 0;
  acc.push(prevSum + curr);
  return acc;
}, []);

// Function to check if a year corresponds to a Fibonacci sum year after founding (2022)
// With 2025 as the first Fibonacci sum year (1st cycle)
export const isFibonacciSumYear = (year: number): boolean => {
  // Special case for 2025
  if (year === 2025) return true;
  
  // For other years, check if it matches a Fibonacci sum year starting from 2026
  const yearsSinceFounding = year - 2022;
  // 3 is the offset to make 2025 the first Fibonacci sum year (2022 + 3 = 2025)
  const adjustedYear = yearsSinceFounding - 3;
  
  return adjustedYear >= 0 && fibonacciSums.includes(adjustedYear);
};

// Get the index in the Fibonacci sum sequence for a given year
// Updated to use the standard Fibonacci sequence that begins with [1, 1, 2, 3, 5...]
export const getFibonacciSumYearIndex = (year: number): number => {
  // Special case for 2025 (first milestone)
  if (year === 2025) return 1;
  
  // Special cases for early years to match the defined sequence
  if (year === 2026) return 2;  // Second 1 in the sequence
  if (year === 2027) return 3;  // 2 in the sequence
  if (year === 2029) return 4;  // 3 in the sequence
  if (year === 2032) return 5;  // 5 in the sequence
  if (year === 2037) return 6;  // 8 in the sequence
  if (year === 2045) return 7;  // 13 in the sequence
  if (year === 2058) return 8;  // 21 in the sequence
  if (year === 2079) return 9;  // 34 in the sequence
  if (year === 2113) return 10; // 55 in the sequence
  
  const yearsSinceFounding = year - 2022;
  // 3 is the offset to make 2025 the first Fibonacci sum year (2022 + 3 = 2025)
  const adjustedYear = yearsSinceFounding - 3;
  
  // If before the first Fibonacci sum year, return 0
  if (adjustedYear < 0) return 0;
  
  // Find the highest Fibonacci sum index that doesn't exceed the adjusted years since founding
  let sumIndex = 0;
  for (let i = 0; i < fibonacciSums.length; i++) {
    if (fibonacciSums[i] <= adjustedYear) {
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
  // Special hardcoded colors from the guide
  if (year === 2025) {
    return {
      specialColor: "#4CAF50", // Green color for 2025
      fibNumber: 1
    };
  } else if (year === 2026) {
    return {
      specialColor: "#E54D4D", // Red color for 2026
      fibNumber: 2
    };
  } else if (year === 2027) {
    return {
      specialColor: "#A24DE5", // Purple color for 2027
      fibNumber: 3
    };
  } else if (year === 2029) {
    return {
      specialColor: "#E5D24D", // Yellow color for 2029
      fibNumber: 5
    };
  } else if (year === 2032) {
    return {
      specialColor: "#4D9FE5", // Blue color for 2032
      fibNumber: 8
    };
  } else if (year === 2037) {
    return {
      specialColor: "#E57A4D", // Orange color for 2037
      fibNumber: 13
    };
  }
  
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
