import MarqueeItem from './MarqueeItem';

const SlideBox = () => {
  const items = [
    "HFG Withdrawals Are Now Live on HashFair Games.",
    "HFG Coin Staking is Now live.",
    "Mainnet Web3 Games are Live.",
    "Hashfair NFT Marketplace is live Now, Go and Buy Your Share with HFG.",
  ];

  return (
    <div className="box flex">
      {items.map((item, index) => (
        <MarqueeItem 
          key={index} 
          text={item} 
          isStroke={index % 2 !== 0} 
        />
      ))}
    </div>
  );
};

export default SlideBox;
