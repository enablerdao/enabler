
import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Task {
  done: boolean;
  text: string;
}

interface ServiceTasksProps {
  tasks: Task[];
}

export const ServiceTasks: React.FC<ServiceTasksProps> = ({ tasks }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          <Activity size={14} className="text-enabler-600 mr-1" />
        </motion.div>
        <span className="text-xs font-medium">開発タスク</span>
      </div>
      <ul className="space-y-1 text-xs">
        {tasks.map((task, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
            className="flex items-center"
          >
            <span className={cn(
              "w-3 h-3 rounded-full mr-2 flex-shrink-0",
              task.done ? "bg-green-500" : "bg-gray-200"
            )}></span>
            <span className={task.done ? "line-through text-gray-400" : "text-gray-600"}>
              {task.text}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
