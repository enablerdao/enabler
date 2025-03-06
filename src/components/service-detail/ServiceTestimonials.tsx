
import React from 'react';
import { Testimonial } from '@/lib/types/service';
import { Quote, Star } from 'lucide-react';

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
  serviceColor?: string;
}

export const ServiceTestimonials = ({ testimonials, serviceColor = '#6366f1' }: ServiceTestimonialsProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
      <div className="flex items-center mb-6 border-b pb-2" style={{ borderColor: `${serviceColor}40` }}>
        <Quote className="mr-3" style={{ color: serviceColor }} />
        <h2 className="text-xl font-bold">お客様の声</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-5 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3"
                style={{ backgroundColor: serviceColor }}
              >
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <div className="flex flex-wrap items-center mb-1">
                  <h3 className="font-bold text-gray-800 mr-2">{testimonial.author}</h3>
                  {testimonial.rating && (
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < testimonial.rating ? "fill-current text-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-3 italic">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};
