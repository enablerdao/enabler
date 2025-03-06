
import React from 'react';
import { Testimonial } from '@/lib/types/service';
import { MessageSquareQuote, Star } from 'lucide-react';

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
}

export const ServiceTestimonials = ({ testimonials }: ServiceTestimonialsProps) => (
  <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
    <div className="flex items-center mb-6">
      <MessageSquareQuote className="text-enabler-600 mr-3" />
      <h2 className="text-xl font-bold">お客様の声</h2>
    </div>
    
    <div className="space-y-6">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="border border-gray-100 rounded-lg p-5">
          <div className="flex items-start">
            <div className="mr-4">
              {testimonial.avatar ? (
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <p className="text-gray-700 mb-3 italic">"{testimonial.content}"</p>
              
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
                
                {testimonial.rating && (
                  <div className="flex items-center mt-2 sm:mt-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating! 
                          ? 'text-amber-400 fill-amber-400' 
                          : 'text-gray-300'
                        } 
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
