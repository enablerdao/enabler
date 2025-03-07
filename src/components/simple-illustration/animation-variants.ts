
// Fibonacci sequence for animation timings
const fib = [1, 1, 2, 3, 5, 8, 13];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: fib[2] * 0.1,
      staggerChildren: fib[1] * 0.1
    }
  }
};

export const itemVariants = {
  hidden: { y: fib[3], opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: fib[2] * 0.2,
      ease: "easeOut"
    }
  }
};

export const pulseVariants = {
  pulse: {
    scale: [1, 1.03, 1],
    opacity: [0.95, 1, 0.95],
    transition: {
      duration: fib[4],
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floatVariants = {
  float: (customDelay = 0) => ({
    y: [0, -fib[2], 0],
    transition: {
      duration: fib[4],
      repeat: Infinity,
      ease: "easeInOut",
      delay: customDelay
    }
  })
};

export const spinVariants = {
  spin: (duration = fib[5] * 5) => ({
    rotate: 360,
    transition: {
      duration,
      repeat: Infinity,
      ease: "linear"
    }
  })
};

export const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.8,
    transition: {
      duration: fib[3],
      ease: "easeInOut"
    }
  }
};

export const fibonacciFloatVariants = {
  float: (index: number) => ({
    y: [0, -(fib[index % fib.length] * 2), 0],
    x: [0, (fib[(index + 1) % fib.length]), 0],
    transition: {
      duration: fib[3] + (index % fib.length),
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};
