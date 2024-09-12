import Image from 'next/image';
import MarqeeLogo from '../assets/images/hashmoblogo.webp';

interface MarqueeItemProps {
  text: string;
  isStroke?: boolean; // Optional prop to conditionally add the stroke class
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ text, isStroke }) => {
  return (
    <div className="item px-8 whitespace-nowrap">
      <h4 className={`text-5xl flex items-center ${isStroke ? 'stroke-2' : ''}`}>
        <span>{text}</span>
        <Image src={MarqeeLogo} alt="" className="h-12 w-12 mx-12 animate-pulse" />
      </h4>
    </div>
  );
};

export default MarqueeItem;
