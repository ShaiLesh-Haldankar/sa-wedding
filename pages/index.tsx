import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <Image src={'/images/SA.svg'} alt="SA" height={65} width={75} className="mt-20 ml-20" />
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient-overlay z-[-1]" />
      </div>
      <div data-aos="fade-up" className="bg-[#EAD9C9] w-full relative rounded-b-[200px] pb-[60px]">
        <div className=" absolute top-[-300px] left-[50%] transform translate-x-[-50%]">
          <Image src={'/images/leafs.svg'} alt="leaf" height={1080} width={1920} className="h-[600px] w-auto relative" />
          <div className="bg-white font-cormorant h-[350px] w-[350px] text-[48px] rounded-[50%] absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center">
            <p>Surjith</p>
            <p>Weds</p>
            <p>Amrita</p>

          </div>
        </div>
        <div className="pt-[200px] text-center font-cormorant">
          <h5 className="text-[40px] leading-none text-[#787878]">Two hearts, one love, and a lifetime of memories </h5>
          <h5 className="text-[40px] leading-none text-[#787878]">save the date!</h5>
          <p className="text-[40px] font-bold text-[#787878]">06 th Feb 2025</p>

        </div>
      </div>
      <Slider />
      <Schedule />
      <RouteSection />
      <div
        className="relative w-full py-16 bg-cover bg-center h-[400px] rounded-t-[200px] flex justify-center items-center text-center"
        style={{ backgroundImage: `url('/images/couple.png')`, backgroundPositionY: '-280px' }}
      >
        {/* Your Section Content */}
        <p data-aos="fade-up" className="text-[32px] text-white">Your presence brings joy, happiness,<br /> and blessings to our marriage.</p>
      </div>
    </div>
  );
}



const Slider: React.FC = () => {
  // Array of slides (replace with image URLs later)
  const slides: number[] = [1, 2, 3, 4, 5];

  // State for the current index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Helper function to determine slide positioning
  const getSlideClass = (index: number): string => {
    if (index === currentIndex) return 'z-10 scale-100'; // Center slide
    if (index === (currentIndex + 1) % slides.length) return 'z-5 translate-x-full scale-75'; // Next slide
    if (index === (currentIndex - 1 + slides.length) % slides.length) return 'z-4 -translate-x-full scale-75'; // Previous slide
    return 'opacity-0 scale-50'; // Hidden slides
  };

  return (
    <div data-aos="fade-up" className="py-20">
      <div className="text-center text-[#787878]">
        <p data-aos="fade-left" className="tracking-widest text-[16px]">THE PRE-WEDDING PHOTOGRAPHY</p>
        <h6 data-aos="fade-right" className="text-[60px] font-cormorant">OUR GALLERY</h6>
      </div>

      <div className="relative w-full h-[600px]">
        {/* Slider Container */}
        <div className="relative flex items-center justify-center w-full h-full">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`absolute cursor-pointer w-full max-w-[550px] h-[400px] bg-gray-300 flex items-center justify-center text-xl font-bold transition-transform duration-500 ease-in-out ${getSlideClass(index)
                }`}
            >
              {/* Slide {index + 1} */}
              <Image src={"/images/hall.png"} alt="hall" height={1080} width={1920} className="object-cover w-full h-full" />
            </span>
          ))}
        </div>
      </div>
      <div className="text-center">
        <button className="text-[#787878] border border-[#787878] py-4 px-12 rounded-[40px]">VIEW ALL</button>
      </div>
    </div>
  );
};


const Schedule = () => {
  return <div data-aos="fade-up" className="w-full flex items-center gap-20 px-20 py-20"
    style={{
      background: 'linear-gradient(45deg, #EAD9C9, #FFFFFF)',
    }}
  >
    <div>
      <div className="w-[510px] h-[510px] relative">
        <Image src={"/images/leafs.png"} alt="" height={1080} width={1920} className="w-auto h-auto absolute left-[-50px] top-[-50px]" />
        <Image src={"/images/leafs.png"} alt="" height={1080} width={1920} className="w-auto h-auto absolute bottom-[-50px] right-[-50px] transform scale-y-[-1] scale-x-[-1]" />

        <Image src={'/images/venue.png'} alt="venue" height={1080} width={1920} />
      </div>
      <div className="flex gap-2 justify-center mt-8">
        <button className="h-4 w-4 rounded-[50%] bg-black" />
        <button className="h-4 w-4 rounded-[50%] bg-black" />
        <button className="h-4 w-4 rounded-[50%] bg-black" />
      </div>

    </div>
    <div className="w-[calc(100%-510px)] text-[#787878]">
      <h4 className="text-[60px] mb-8 capitalize font-cormorant whitespace-pre-line leading-none mt-4">{`We will plan your day, 
      your way.`}</h4>
      <div className="w-full flex justify-between border-b border-black mb-10 text-[24px] text-[#353535]">
        <div className="flex gap-20">
          <span>4st Feb 2025 </span>
          <span>Haldi</span>

        </div>
        <div>
          <span>10AM</span>
        </div>

      </div>
      <div className="w-full flex justify-between border-b border-black mb-10 text-[24px] text-[#353535]">
        <div className="flex gap-20">
          <span>4st Feb 2025 </span>
          <span>Haldi</span>

        </div>
        <div>
          <span>10AM</span>
        </div>

      </div>
      <div className="w-full flex justify-between border-b border-black mb-10 text-[24px] text-[#353535]">
        <div className="flex gap-20">
          <span>4st Feb 2025 </span>
          <span>Haldi</span>

        </div>
        <div>
          <span>10AM</span>
        </div>

      </div>
      <div className="w-full flex justify-between border-b border-black mb-10 text-[24px] text-[#353535]">
        <div className="flex gap-20">
          <span>4st Feb 2025 </span>
          <span>Haldi</span>

        </div>
        <div>
          <span>10AM</span>
        </div>

      </div>

    </div>

  </div>
}

const RouteSection: React.FC = () => {
  return (
    <div data-aos="fade-up" className="my-32">
      <div className="text-center mb-20 text-[#787878]">
        <p data-aos="fade-left">SUBTITLE</p>
        <h6 data-aos="fade-right" className="font-cormorant text-[60px]">ROUTE</h6>
      </div>
      <section className="relative w-full bg-white flex  h-[560px]  px-20 ">
        <Image src={"/images/branches.png"} alt="branch" height={1080} width={1920} className="absolute w-auto h-auto left-[10px] top-[-60px] z-[0]" />
        <div className="w-[400px] h-[560px]">
          <div className="w-full h-[480px] overflow-hidden">
            <Image src={"/images/hall.png"} alt="Hall" height={1080} width={1920} className="object-cover h-full" />

          </div>
          <div className="h-[80px] bg-[#EAD9C9] text-center flex justify-center items-center">
            <p className="text-[24px]">Sarji Convention Hall</p>
          </div>

        </div>
        <div className="w-[calc(100%-400px)] h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.074950432517!2d77.54612891479957!3d13.029877590827874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16905e707b63%3A0x7bcb20c828c64069!2sConvention%20Hall!5e0!3m2!1sen!2sin!4v1684048092558!5m2!1sen!2sin"
            width="100%"
            height="560"
            allowFullScreen
            loading="lazy"
            className=""
          />
        </div>
      </section>
    </div>
  );
};