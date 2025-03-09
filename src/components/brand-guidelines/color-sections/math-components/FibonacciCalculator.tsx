
import React from 'react';

interface FibonacciCalculatorProps {
  fibonacciSequence: number[];
}

const FibonacciCalculator: React.FC<FibonacciCalculatorProps> = ({ fibonacciSequence }) => {
  // Calculate Fibonacci sums (cumulative sums)
  // 1, 3, 6, 11, 19, 32, 53, 87, 142, 231, 375, 608, 985, 1595, 2582, 4179, 6763
  const fibonacciSums = fibonacciSequence.reduce((acc: number[], curr, i) => {
    const prevSum = i > 0 ? acc[i-1] : 0;
    acc.push(prevSum + curr);
    return acc;
  }, []);

  return { fibonacciSums };
};

export default FibonacciCalculator;
