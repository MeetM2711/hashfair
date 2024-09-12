// components/AboutSection.jsx
import Image from 'next/image';
import AboutImage from '@/assets/images/about.png'
import AboutShape from '@/assets/images/shape.png'
import CmnButton from '@/Components/CmnButton'

const AboutSection = () => {
  return (
    <section className="relative about-section bg-[#2e0327] py-[100px] overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center relative">
          {/* About Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="about-content">
              <div className="section-header mb-4">
                <h2 className="text-6xl font-bold font-josefinSans mb-4">About HashFair</h2>
                <p className='font-openSans text-lg'>
                HashFair is an innovative online casino platform that utilizes blockchain technology to establish a decentralized gaming environment. The platform's unique feature is its use of transaction hashes from the blockchain to determine game outcomes, ensuring total transparency and trust in the gaming process.
                </p>
              </div>
              <p className='font-openSans text-lg'>
              Every game result is securely tied to these transaction hashes, making the process immune to tampering and outside the control of any entity, including HashFair. This method allows players to verify the fairness of each game, promoting a trustworthy and honest platform.
              </p>
              <div className='mt-14'>

              <CmnButton>Get Started</CmnButton>
              </div>
              
            </div>
          </div>

          {/* About Image */}
          <div className="lg:w-1/2">
            <div className="about-thumb section-thumb">
              <Image
                src={AboutImage}
                alt="About"
                width={500}
                height={500}
                className="ml-auto"
              />
            </div>
          </div>
        </div>
      <div className="shapes relative">
        <Image
          src={AboutShape}
          alt="Shape"
          width={150}
          height={150}
          className="absolute top-1/2 -z-10"
        />
      </div>
      </div>

      {/* Shapes */}
    </section>
  );
};

export default AboutSection;
