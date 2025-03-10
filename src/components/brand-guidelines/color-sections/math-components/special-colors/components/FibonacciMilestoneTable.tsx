
import React from 'react';

interface FibonacciMilestone {
  fib: number;
  year: number;
  description: string;
}

interface FibonacciMilestoneTableProps {
  fibonacciMilestones: FibonacciMilestone[];
}

const FibonacciMilestoneTable: React.FC<FibonacciMilestoneTableProps> = ({ 
  fibonacciMilestones 
}) => {
  return (
    <div className="mt-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="py-2 px-4 border-b">フィボナッチ数</th>
              <th className="py-2 px-4 border-b">対応する年</th>
              <th className="py-2 px-4 border-b">説明</th>
            </tr>
          </thead>
          <tbody>
            {fibonacciMilestones.map((milestone, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-2 px-4 border-b font-mono">{milestone.fib}</td>
                <td className="py-2 px-4 border-b font-mono">{milestone.year}年</td>
                <td className="py-2 px-4 border-b">{milestone.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm mt-4 text-gray-500">
        フィボナッチ数列（1, 1, 2, 3, 5, 8, 13, 21, 34, 55...）に基づいて特別な節目の年を計算しています。
        2025年を最初の節目（フィボナッチ数1）として、それ以降の年はフィボナッチ数列に従って設定されています。
      </p>
    </div>
  );
};

export default FibonacciMilestoneTable;
