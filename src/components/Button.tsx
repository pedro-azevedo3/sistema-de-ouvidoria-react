import { useState } from 'react';
import praise from '../assets/praise.png';
import denounce from '../assets/denounce.png';
import simplify from '../assets/simplify.png';
import support from '../assets/support.png';
import complaint from '../assets/complaint.png';

const AnimatedImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div 
      className="relative overflow-hidden transition-transform duration-300 ease-in-out transform-gpu hover:scale-105 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt={alt} className="max-w-full rounded-lg" />
      {isHovered && <div className="backdrop-filter absolute inset-0 pointer-events-none"></div>}
    </div>
  );
};

const Buttons: React.FC = () => {
  return (
    <div className='mx-10 my-4 grid gap-4 grid-cols-2 lg:grid-cols-4'>
      <AnimatedImage src={denounce} alt="Denounce" />
      <AnimatedImage src={praise} alt="Praise" />
      <AnimatedImage src={complaint} alt="Complaint" />
      <AnimatedImage src={simplify} alt="Simplify" />
      <AnimatedImage src={support} alt="Support" />
    </div>
  );
}

export default Buttons;
