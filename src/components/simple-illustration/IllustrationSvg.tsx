
import React from 'react';
import { motion } from 'framer-motion';
import GradientDefinitions from './GradientDefinitions';
import ConnectionLines from './ConnectionLines';
import ConceptCircles from './ConceptCircles';
import CircleTexts from './CircleTexts';
import DescriptionBoxes from './DescriptionBoxes';
import BottomCaption from './BottomCaption';

const IllustrationSvg: React.FC = () => {
  return (
    <motion.svg 
      className="w-full h-[400px]" 
      viewBox="0 0 800 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Gradient definitions */}
      <GradientDefinitions />
      
      {/* Connection lines */}
      <ConnectionLines />
      
      {/* Concept circles */}
      <ConceptCircles />
      
      {/* Circle texts */}
      <CircleTexts />
      
      {/* Description boxes */}
      <DescriptionBoxes />
      
      {/* Bottom caption */}
      <BottomCaption />
    </motion.svg>
  );
};

export default IllustrationSvg;
