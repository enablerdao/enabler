
// Calculate color based on year using the formula
// R = round(34 + 190 × (1 - 0.95^(y - 2022)))
// G = round(182 + 63 × (1 - 0.95^(y - 2022)))
// B = 255
export const calculateColorForYear = (year: number) => {
  // Get the Fibonacci year index
  const fibonacciYearIndex = getFibonacciYearIndex(year);
  
  // Using the exponential formula with a capped maximum to prevent overflow
  // This ensures the formula works for years well beyond 2041
  const yearDiff = fibonacciYearIndex;
  
  const r = Math.min(224, Math.round(34 + 190 * (1 - Math.pow(0.95, yearDiff))));
  const g = Math.min(245, Math.round(182 + 63 * (1 - Math.pow(0.95, yearDiff))));
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

// Fibonacci sequence for years after 2022 - the actual sequence is 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// This means changes happen in years: 2023, 2024, 2025, 2027, 2030, 2035, 2043, 2056, 2077, 2111
const fibonacciYears = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// Function to check if a year corresponds to a Fibonacci sequence year after founding (2022)
export const isFibonacciYear = (year: number): boolean => {
  const yearsSinceFounding = year - 2022;
  return fibonacciYears.includes(yearsSinceFounding);
};

// Get the index in the Fibonacci sequence for a given year
// If not a Fibonacci year, returns the previous Fibonacci year index
export const getFibonacciYearIndex = (year: number): number => {
  const yearsSinceFounding = year - 2022;
  
  // If before founding year, return 0
  if (yearsSinceFounding <= 0) return 0;
  
  // Find the highest Fibonacci index that doesn't exceed the years since founding
  let fibIndex = 0;
  for (let i = 0; i < fibonacciYears.length; i++) {
    if (fibonacciYears[i] <= yearsSinceFounding) {
      fibIndex = fibonacciYears[i];
    } else {
      break;
    }
  }
  
  return fibIndex;
};

// Generate Fibonacci sequence-based accent color for each year
export const generateFibonacciAccentColorForYear = (year: number) => {
  // Get the Fibonacci index for the year
  const fibIndex = getFibonacciYearIndex(year);
  
  return {
    // Special color - a vivid purple
    specialColor: "#8B5CF6",
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
