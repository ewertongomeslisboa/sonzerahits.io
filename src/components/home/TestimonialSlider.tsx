import React from 'react';
import Slider from 'react-slick';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-3 py-2">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="mb-4 flex justify-between items-start">
        <div className="flex items-center">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-primary-500"
          />
          <div>
            <h4 className="font-medium">{testimonial.name}</h4>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>
        <Quote size={24} className="text-primary-500/40" />
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < testimonial.rating ? 'text-yellow-500' : 'text-gray-600'} 
            fill={i < testimonial.rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      
      <p className="text-gray-300 flex-grow">{testimonial.content}</p>
    </div>
  );
};

export default TestimonialSlider;