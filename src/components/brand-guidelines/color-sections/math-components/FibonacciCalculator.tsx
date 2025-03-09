
import React from 'react';

interface FibonacciCalculatorProps {
  fibonacciSequence: number[];
}

const FibonacciCalculator: React.FC<FibonacciCalculatorProps> = ({ fibonacciSequence }) => {
  // Calculate Fibonacci sums (cumulative sums)
  const fibonacciSums = fibonacciSequence.reduce((acc: number[], curr, i) => {
    const prevSum = i > 0 ? acc[i-1] : 0;
    acc.push(prevSum + curr);
    return acc;
  }, []);

  // This component doesn't render anything visible
  return <>{null}</>;
};

// Separate utility function to calculate Fibonacci sums outside the React component lifecycle
export const calculateFibonacciSums = (fibonacciSequence: number[]): number[] => {
  return fibonacciSequence.reduce((acc: number[], curr, i) => {
    const prevSum = i > 0 ? acc[i-1] : 0;
    acc.push(prevSum + curr);
    return acc;
  }, []);
};

export default FibonacciCalculator;
