
// Calculate color based on year using the formula
// R = round(34 + 190 × (1 - 0.95^(y - 2022)))
// G = round(182 + 63 × (1 - 0.95^(y - 2022)))
// B = 255
export const calculateColorForYear = (year: number) => {
  const yearDiff = year - 2022;
  
  // Using the exponential formula with a capped maximum to prevent overflow
  // This ensures the formula works for years well beyond 2041
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

// Generate Fibonacci sequence-based accent color for each year
export const generateFibonacciAccentColorForYear = (year: number) => {
  // Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34...
  // Calculate Fibonacci number for the year offset (year - 2022)
  const yearOffset = year - 2022;
  
  // For very large year differences, calculate Fibonacci number
  // using a more efficient method to prevent stack overflow
  let fibValue = 1;
  
  if (yearOffset <= 0) {
    fibValue = 1;
  } else if (yearOffset === 1) {
    fibValue = 1;
  } else {
    // Use iterative approach for large numbers
    let a = 1, b = 1;
    for (let i = 2; i <= yearOffset; i++) {
      const next = a + b;
      a = b;
      b = next;
      fibValue = b;
      
      // Cap the Fibonacci value at a reasonable number to prevent overflow
      if (fibValue > 1000) {
        fibValue = 1000; // Cap the max segments to 1000
        break;
      }
    }
  }
  
  return {
    // Special color - a vivid purple
    specialColor: "#8B5CF6",
    fibNumber: fibValue
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
