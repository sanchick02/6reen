import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import phoneImage from "./assets/phones.png";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";


function App() {
  const phoneRef = useRef(null); // Create a ref for the phone image

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(phoneRef.current, {
        scale: 0.5 + scrollY / 2000, // Scale based on scroll
        rotate: 1.2 * (scrollY / 100), // Rotate based on scroll
        duration: 0.5,
        ease: "power3.out"
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <div className="flex flex-col items-center justify-center p-4 md:p-8 space-y-4 md:space-y-0 md:flex-row md:space-x-8">
          {/* Left cards */}
          <div className="relative w-full max-w-[208px] h-40 md:h-30 mx-auto md:mx-0 order-1">
            <div className="absolute top-0 left-0 bg-white border border-gray-300 rounded-lg p-2 transform -rotate-6 shadow-md hover:bg-gray-100 transition-colors duration-300 group">
              <span className="text-[#45A4E6] font-semibold text-lg relative">
                <span className="relative">
                  Unsustainable
                  <span className="absolute inset-0 w-0 group-hover:w-full h-0.5 bg-[#45A4E6] top-1/2 -translate-y-1/2 transition-all duration-300 ease-out"></span>
                </span>
              </span>
            </div>
            <div className="absolute top-10 left-5 bg-white border border-gray-300 rounded-lg p-2 transform rotate-3 shadow-md hover:bg-gray-100 transition-colors duration-300 group">
              <span className="text-[#50D0BF] font-semibold text-lg relative">
                <span className="relative">
                  Overtourism
                  <span className="absolute inset-0 w-0 group-hover:w-full h-0.5 bg-[#50D0BF] top-1/2 -translate-y-1/2 transition-all duration-300 ease-out"></span>
                </span>
              </span>
            </div>
            <div className="absolute top-20 left-0 bg-white border border-gray-300 rounded-lg p-2 transform -rotate-3 shadow-md hover:bg-gray-100 transition-colors duration-300 group">
              <span className="text-[#45A4E6] font-semibold text-lg relative">
                <span className="relative">
                  Lack of Options
                  <span className="absolute inset-0 w-0 group-hover:w-full h-0.5 bg-[#45A4E6] top-1/2 -translate-y-1/2 transition-all duration-300 ease-out"></span>
                </span>
              </span>
            </div>
          </div>

          {/* Center text */}
          <div className="text-center max-w-md mx-auto order-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Every Journey <span className="text-[#45A4E6]">Matters</span>,{" "}
              <br />
              Every Choice is <span className="text-[#50D0BF]">Green</span>
            </h1>
            <p className="mt-4 text-gray-600 text-xs sm:text-sm md:text-base">
              Be the change and join us to travel with a<br />
              whole new green experience.
            </p>
          </div>

          {/* Right cards */}
          <div className="relative w-full max-w-[208px] h-40 mx-auto md:mx-0 order-3">
            <div className="absolute top-0 right-0 bg-white border border-gray-300 rounded-lg p-2 transform -rotate-6 shadow-md hover:bg-gray-100 transition-colors duration-300 group">
              <span className="text-[#45A4E6] font-semibold text-lg relative">
                <span className="relative">Sustainable</span>
              </span>
            </div>
            <div className="absolute top-10 right-5 bg-white border border-gray-300 rounded-lg p-2 transform rotate-3 shadow-md hover:bg-gray-100 transition-colors duration-300 group">
              <span className="text-[#50D0BF] font-semibold text-lg relative">
                <span className="relative">Responsible Travel</span>
              </span>
            </div>
            <div className="absolute top-20 right-0 bg-white border border-gray-300 rounded-lg p-2 transform -rotate-3 shadow-md hover:bg-gray-100 transition-colors duration-300 group">
              <span className="text-[#45A4E6] font-semibold text-lg relative">
                <span className="relative">Travel Assistance</span>
              </span>
            </div>
          </div>
        </div>

        {/* New row of cards */}
        <div className="flex justify-center mt-4 md:mt-8 space-x-0">
          <div className="relative w-full max-w-[208px] h-20 md:h-20 mx-auto md:mx-0">
            <div className="absolute top-0 left-20 md:left-44 bg-white border border-gray-300 rounded-lg p-2 transform rotate-6 shadow-md hover:bg-gray-100 transition-colors duration-300 group">
              <span className="text-[#45A4E6] font-semibold text-lg relative">
                <span className="relative">Be</span>
              </span>
            </div>
          </div>
          <div className="relative w-full max-w-[208px] h-20 md:h-20 mx-auto md:mx-0">
            <div className="absolute top-0 left-6 md:left-12 bg-white border border-gray-300 rounded-lg p-2 transform rotate-0 shadow-md hover:bg-gray-100 transition-colors duration-300 group">
              <span className="text-[#50D0BF] font-semibold text-lg relative">
                <span className="relative">The</span>
              </span>
            </div>
          </div>
          <div className="relative w-full max-w-[208px] h-20 md:h-20 mx-auto md:mx-0">
            <div className="absolute top-0 right-20 md:right-44 bg-white border border-gray-300 rounded-lg p-2 transform rotate-0 shadow-md hover:bg-gray-100 transition-colors duration-300 group">
              <span className="text-[#45A4E6] font-semibold text-lg relative">
                <span className="relative">Change</span>
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className="top-0 bg-gradient-to-r from-[#4088FF] to-[#50D0BF] text-white font-bold px-4 rounded-2xl h-[48px] flex items-center justify-center">
            Our app is coming soon
          </button>
        </div>

        {/* Phone Image */}
        <div className="flex justify-center mt-8 bg-gradient-to-b from-[#ffffff] to-[#50D0BF]">
          <div className="relative">
            <img
              ref={phoneRef} // Attach the ref to the image
              src={phoneImage}
              alt="Phone"
              className="w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
