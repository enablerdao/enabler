
import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-6 text-purple-800">
          テクノロジーを通じて、あなたがワクワクする未来を一緒に作りませんか？
        </h3>
        <p className="text-xl font-medium mb-8 text-gray-700 max-w-2xl mx-auto">
          あなたの「あったらいいな」は、もうここにあります。
        </p>
        <div className="mt-10">
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            サービスについて相談する
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
