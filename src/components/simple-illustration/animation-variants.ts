
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const pulseVariants = {
  pulse: {
    scale: [1, 1.03, 1],
    opacity: [0.95, 1, 0.95],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floatVariants = {
  float: {
    y: [0, -5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const spinVariants = {
  spin: (duration = 40) => ({
    rotate: 360,
    transition: {
      duration,
      repeat: Infinity,
      ease: "linear"
    }
  })
};
