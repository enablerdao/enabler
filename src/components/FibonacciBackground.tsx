
import React, { useEffect, useRef } from 'react';

interface FibonacciBackgroundProps {
  className?: string;
}

const FibonacciBackground: React.FC<FibonacciBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match the window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Fibonacci spiral parameters
    const goldenRatio = 1.618033988749895;
    let scaleFactor = Math.min(canvas.width, canvas.height) * 0.0018;
    
    // Animation parameters
    let angle = 0;
    let lastTime = 0;
    const rotationSpeed = 0.0003; // Very slow rotation
    const movementAmplitude = 0.15; // Subtle movement
    
    // Color palette
    const colors = [
      'rgba(59, 130, 246, 0.2)',  // Blue
      'rgba(14, 165, 233, 0.2)',  // Sky blue
      'rgba(79, 70, 229, 0.15)',  // Indigo
      'rgba(99, 102, 241, 0.1)'   // Purple blue
    ];
    
    // Draw Fibonacci spiral
    const drawFibonacciSpiral = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate animation values
      const deltaTime = time - lastTime;
      lastTime = time;
      angle += rotationSpeed * deltaTime;
      
      // Create a subtle pulsing effect
      const pulse = 1 + 0.05 * Math.sin(time * 0.0005);
      
      // Center position with some movement
      const centerX = canvas.width / 2 + Math.sin(time * 0.0002) * canvas.width * movementAmplitude;
      const centerY = canvas.height / 2 + Math.cos(time * 0.0003) * canvas.height * movementAmplitude;
      
      // Draw multiple spirals with different parameters
      for (let spiralIndex = 0; spiralIndex < 3; spiralIndex++) {
        const spiralScaleFactor = scaleFactor * (1 + spiralIndex * 0.4);
        const spiralStartAngle = angle + spiralIndex * Math.PI / 4;
        const color = colors[spiralIndex % colors.length];
        
        ctx.beginPath();
        
        // Generate Fibonacci sequence points
        let a = 0, b = 1;
        let radius = 0;
        
        for (let i = 0; i < 20; i++) {
          const temp = a + b;
          a = b;
          b = temp;
          
          const fib = a * spiralScaleFactor * pulse;
          
          // Calculate position using logarithmic spiral formula (approximation of Fibonacci)
          const spiralAngle = spiralStartAngle + i * 0.5;
          const x = centerX + fib * Math.cos(spiralAngle);
          const y = centerY + fib * Math.sin(spiralAngle);
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          
          // Draw circle at Fibonacci points
          if (i > 5) {
            ctx.fillStyle = color;
            ctx.beginPath();
            const circleRadius = Math.min(8, fib * 0.06);
            ctx.arc(x, y, circleRadius, 0, Math.PI * 2);
            ctx.fill();
          }
          
          radius = fib;
        }
        
        // Draw the spiral path
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      
      requestAnimationFrame(drawFibonacciSpiral);
    };
    
    // Start animation
    requestAnimationFrame(drawFibonacciSpiral);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className={`absolute inset-0 -z-10 ${className || ''}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default FibonacciBackground;
