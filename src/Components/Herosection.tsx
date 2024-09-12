// import React from "react";
// import Image from "next/image";
import HeroBgCard from "../assets/images/card.png";
import HeroBg from "../assets/images/thumb.png";

// const Herosection = () => {
//   return (
//     <section className="pt-40 pb-14 bg_img overflow-hidden relative">
//       <div className="container">
//         <div className="flex flex-col justify-center lg:justify-between lg:flex-row text-center items-center">
//           <div className="order-2 md:order-1 max-w-[500px] xl:max-w-2xl flex flex-col items-center text-center lg:text-start  relative">
//             <h1 className="text-[32px] md:text-[56px] lg:text-[64px] xl:text-[72px] mb-5 font-josefinSans banner-content__title text-[#ffffff] leading-[1.4] font-bold">
//               Experience Web3{" "}
//               <span className="text--base leading-[1.7]">Gaming</span> &amp; World
//             </h1>
//             <p className="mb-10 font-openSans text-xl">
//               Welcome to HashFair, the forefront of decentralized and DAO-based online gaming. Here, every game outcome is tied to blockchain transaction hashes, ensuring an unparalleled level of fairness and transparency.
//             </p>
//             <p className="mb-10 font-openSans text-xl">
//               Step into HashFair's revolutionary platform, where each roll, spin, or deal is reliably calculated using hash values, defining the future of secure and trustworthy online gaming.
//             </p>
//             <Image src={HeroBgCard} alt="" className="shape1" />
//           </div>
//           <div className="order-1 md:order-2 mb-12 md:mb-0 flex items-center text-center md:w-[400px] xl:w-[500px] xl:h-[600px] relative">
//             <Image src={HeroBg} alt="" className="mt-11 lg:mt-0 lg:!w-full lg:!max-w-none lg:!h-full " />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Herosection;
import Image from 'next/image';

const Herosection = () => {
  return (
    <section className="banner-section bg-cover bg-center py-20 lg:py-44 overflow-hidden relative bg_img" >
      <div className="absolute inset-0 bg-[#2e0327] opacity-75"></div>
      <div className="container mx-auto relative z-10">
        <div className="banner-wrapper flex justify-center gap-10 lg:gap-0 lg:justify-between flex-wrap items-center">
          <div className="banner-content flex flex-col text-center lg:text-start  justify-between gap-5 max-w-[700px] lg:max-w-[500px] xl:max-w-[650px] ">
            <h1 className="text-white font-josefinSans uppercase font-bold text-[64px] md:text-[62px] sm:text-[56px] mb-4">
            Experience Web3 {" "} <span className="text-[#FFC827] drop-shadow-lg">Gaming</span> &amp; World
            </h1>
            <p className="text-white font-openSans text-[20px] lg:max-w-[550px]">
              Welcome to HashFair, the forefront of decentralized and DAO-based online gaming. Here, every game outcome is tied to blockchain transaction hashes, ensuring an unparalleled level of fairness and transparency.
            </p>
            <p className="text-white font-openSans text-[20px] lg:max-w-[550px]">
              Step into HashFair's revolutionary platform, where each roll, spin, or deal is reliably calculated using hash values, defining the future of secure and trustworthy online gaming.
            </p>
            
            <div className="absolute top-[-100px] left-[-150px] opacity-25">
              <Image src={HeroBgCard} alt="Card" width={250} height={250} />
            </div>
          </div>
          <div className="banner-thumb">
            <Image src={HeroBg} alt="Banner" width={400} height={600}  className="w-[600px] max-w-none h-[600px]"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

