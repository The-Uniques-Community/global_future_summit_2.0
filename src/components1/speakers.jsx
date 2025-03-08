"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

// const speakersData = {
//   "HR Panelists": [
//     {
//       name: "Vani Matta",
//       title: "Senior Analyst, Talent Acquisition & Mangaement, Accenture",
//       photo:
//         "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vGyTkEwZLKfAFGiS2PxkEzJyVjb8BWotX1MeD",
//       bio: "Senior Analyst, Talent Acquisition & Management specializing in strategic hiring, workforce planning, and talent retention.",
//       social: {
//         linkedin: "https://www.linkedin.com/in/vanimatta222681127/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BvB3JW3BBSkODp9JUMttS9g%3D%3D",
//       },
//     },
//     {
//       name: "Ms. Parul kataria",
//       title: "Talent Acquisition Lenskart",
//       photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vWkkEav9ZUJeBczWtaGougO6f0pl3T1mk9ARr",
//       bio: "Recruitment specialist specializing in talent acquisition and workforce planning.",
//       social: {
//         linkedin: "https://www.linkedin.com/in/katariaparul/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BucdHk%2FK%2BTeKGMZr1acOwsA%3D%3D",
//       },
//     },
//     {
//       name: "Ms. Aashi Sharma",
//       title: "Manager - HRBP CAR DEKHO",
//       photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0v1Ab82VXfVZ3duipw2feq0zP7tGHBEISrWCxU",
//       bio: "HR professional specializing in business partnering and employee engagement.",
//       social: {
//         linkedin: "https://www.linkedin.com/in/aashi-sharma-969270151/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BJ%2FYWo5SSRRmr1gwe5qLBNQ%3D%3D",
//       },
//     },
//     {
//       name: "Sonali Varshney",
//       title: "HR Executive, HCLTech",
//       photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vfoFOqKTT6JCm9nZbixYyHo2M3XtLRAwvgGzh",
//       bio: "HR professional specializing in talent management and employee relations.",
//       social: {
//         linkedin: "https://www.linkedin.com/in/sonali-varshney-411864144?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACMCo00BNBAm3JWIlNjX4iUKI-lVjZqBZDE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BAuKah0OkQNiW0pum2Jb4og%3D%3D",
//       },
//     },
//     {
//       name: "Mr. Dhruv Pratap Singh",
//       title: "Deputy General Manager, Swaraj",
//       photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0v8fUdXXnVGBx3sh1tnMD6RjqdSiNbU2ofXmY9",
//       bio: "Leadership expert specializing in operations and strategic management.",   
//     },
//     ],
//   "Industry Panelists": [
//     {
//       name: "Mr. Mukul Batta ",
//       title: "Manager - Barclays",
//       photo:
//         "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0v1k0olTfVZ3duipw2feq0zP7tGHBEISrWCxUT",
//       bio: "Finance professional specializing in banking operations and strategic leadership.",
//       social: {
//         linkedin: "https://www.linkedin.com/in/mukul-batta-612728110/",
//       },
//     },
//     {
//       name: "Mr. Arvind Singh",
//       title: "Project Release Manager at TCS",
//       photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vZPqTZNoJBtS3OouIHyGiDCqsba05rFkR9zPe",
//       bio: "Project management expert specializing in release coordination and delivery.",
//       social: {
//         linkedin: "#",
//       },
//     },
//     {
//       name: "Mr. Sandeep Kumar Rajput",
//       title: "Vice President – Sales Royal Orchid & Regenta Hotels",
//       photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vAqUxao5MEZ0vzHVbdpBI7DRroefhwqXKuty9",
//       bio: "Sales leader specializing in hospitality and business growth strategies.",
//       social: {
//         linkedin: "#",
//       },
//     },
//     {
//       name: "Surbhi Kumar",
//       title: "Manager, People Partner & Talent Development HCLTech"
// ,
//       photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vt5tgF0jZ4VqLnsSvIF5ObGxCNRMKXc7fElge",
//       bio: "HR strategist specializing in talent development and employee engagement.",
//       social: {
//         linkedin: "https://www.linkedin.com/in/surbhi-kumar-3a31b2148/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2F6M1puerS8ae8ZHPmJjlxw%3D%3D",
//       },
//     },
//     {
//       name: "Mr.Bala Krishna",
//       title: "Expert & Training Consultant in Game Development Industry",
//       photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vnrGQhjw6PU0vXr3kA9agDHd8iEzIsGu7KC2j",
//       bio: "Game development expert specializing in training and industry consulting.",
//       social: {
//         linkedin: "#",
//       },
//     },
//     {
//       name: "Mr.PVS Balasubramanyam",
//       title: "Chief Executive Officer, IRA Automations Pvt. Ltd.",
//       photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vGTnlQBZLKfAFGiS2PxkEzJyVjb8BWotX1MeD",
//       bio: "Business leader specializing in automation and industrial innovation.",
//       social: {
//         linkedin: "#",
//       },
//     },
//   ],
// };

const speakersData = {
  "HR Panelists": [
    {
      name: "Ms. Sonia Aswani",
      title: "Senior Staffing Lead, Google Cloud Platform",
      photo:
        "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vbjwRk9DyFGCLWKTp5mJs2iROg7XN6rcDnE1l",
      bio: "Talent acquisition expert specializing in staffing and workforce strategy.",
      social: {
        linkedin: "https://www.linkedin.com/in/sonia-aswani-a923a523/",
      },
    },
    {
      name: "Ms. Vani Matta",
      title: "Senior Analyst, Talent Acquisition & Mangaement, Accenture",
      photo:
        "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vGyTkEwZLKfAFGiS2PxkEzJyVjb8BWotX1MeD",
      bio: "Senior Analyst, Talent Acquisition & Management specializing in strategic hiring, workforce planning, and talent retention.",
      social: {
        linkedin: "https://www.linkedin.com/in/vanimatta222681127/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BvB3JW3BBSkODp9JUMttS9g%3D%3D",
      },
    },
    {
      name: "Ms. Parul Kataria",
      title: "Talent Acquisition Lenskart",
      photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vWkkEav9ZUJeBczWtaGougO6f0pl3T1mk9ARr",
      bio: "Recruitment specialist specializing in talent acquisition and workforce planning.",
      social: {
        linkedin: "https://www.linkedin.com/in/katariaparul/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BucdHk%2FK%2BTeKGMZr1acOwsA%3D%3D",
      },
    },
    {
      name: "Ms. Aashi Sharma",
      title: "Manager - HRBP CAR DEKHO",
      photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0v1Ab82VXfVZ3duipw2feq0zP7tGHBEISrWCxU",
      bio: "HR professional specializing in business partnering and employee engagement.",
      social: {
        linkedin: "https://www.linkedin.com/in/aashi-sharma-969270151/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BJ%2FYWo5SSRRmr1gwe5qLBNQ%3D%3D",
      },
    },
    {
      name: "Ms. Sonali Varshney",
      title: "HR Executive, HCLTech",
      photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vfoFOqKTT6JCm9nZbixYyHo2M3XtLRAwvgGzh",
      bio: "HR professional specializing in talent management and employee relations.",
      social: {
        linkedin: "https://www.linkedin.com/in/sonali-varshney-411864144?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACMCo00BNBAm3JWIlNjX4iUKI-lVjZqBZDE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BAuKah0OkQNiW0pum2Jb4og%3D%3D",
      },
    },
    {
      name: "Mr. Dhruv Pratap Singh",
      title: "Deputy General Manager, Swaraj",
      photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0v8fUdXXnVGBx3sh1tnMD6RjqdSiNbU2ofXmY9",
      bio: "Leadership expert specializing in operations and strategic management.",   
    },
    {
      name: "Mr. Sanjeev Kumar Mehra",
      title: "DHead of HR, Aplicar",
      photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0v9RiLAXUSdr4nZgi5HzVLqRAMu9ocPU1EGvTw",
      bio: "HR leader specializing in talent management and organizational development.",   
      social: {
        linkedin: "https://www.linkedin.com/in/sanjeev-kumarhr/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BjO0d%2BwOSTUyt%2BNhResh9Hw%3D%3D",
      },
    },
    ],
  "Industry Panelists": [
    {
      name: "Mr. Mukul Batta ",
      title: "Manager - Barclays",
      photo:
        "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0v1k0olTfVZ3duipw2feq0zP7tGHBEISrWCxUT",
      bio: "Finance professional specializing in banking operations and strategic leadership.",
      social: {
        linkedin: "https://www.linkedin.com/in/mukul-batta-612728110/",
      },
    },
    {
      name: "Mr. Arvind Singh",
      title: "Project Release Manager at TCS",
      photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vZPqTZNoJBtS3OouIHyGiDCqsba05rFkR9zPe",
      bio: "Project management expert specializing in release coordination and delivery.",
    },
    {
      name: "Mr. Sandeep Kumar Rajput",
      title: "Vice President – Sales Royal Orchid & Regenta Hotels",
      photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vAqUxao5MEZ0vzHVbdpBI7DRroefhwqXKuty9",
      bio: "Sales leader specializing in hospitality and business growth strategies.",
      
    },
    {
      name: "Mr. Prateek Kumar",
      title: "Head of Planning & Monitoring, Larsen & Toubro",
      photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vGl1MWfZLKfAFGiS2PxkEzJyVjb8BWotX1MeD",
      bio: "Strategic leader specializing in planning, monitoring, and project execution.",
      
    },
    {
      name: "Surbhi Kumar",
      title: "Manager, People Partner & Talent Development HCLTech"
,
      photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vt5tgF0jZ4VqLnsSvIF5ObGxCNRMKXc7fElge",
      bio: "HR strategist specializing in talent development and employee engagement.",
      social: {
        linkedin: "https://www.linkedin.com/in/surbhi-kumar-3a31b2148/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2F6M1puerS8ae8ZHPmJjlxw%3D%3D",
      },
    },
    {
      name: "Mr.Bala Krishna",
      title: "Expert & Training Consultant in Game Development Industry",
      photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vnrGQhjw6PU0vXr3kA9agDHd8iEzIsGu7KC2j",
      bio: "Game development expert specializing in training and industry consulting.",
    },
    {
      name: "Mr.PVS Balasubramanyam",
      title: "Chief Executive Officer, IRA Automations Pvt. Ltd.",
      photo: "https://19kv9tvyvc.ufs.sh/f/nrJbTqn6PU0vGTnlQBZLKfAFGiS2PxkEzJyVjb8BWotX1MeD",
      bio: "Business leader specializing in automation and industrial innovation.",
    },
  ],
};

export default function SpeakersSection() {
  const [selectedPanel, setSelectedPanel] = useState("HR Panelists");
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  
  const carouselRef = useRef(null);
  const autoplayTimerRef = useRef(null);

  const currentSpeakers = speakersData[selectedPanel];
  const maxStartIndex = Math.max(0, currentSpeakers.length - visibleCount);

  // Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    // Initial call
    updateVisibleCount();

    // Add event listener
    window.addEventListener("resize", updateVisibleCount);

    // Cleanup
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handlePanelChange = (panel) => {
    if (panel !== selectedPanel) {
      setSelectedPanel(panel);
      setStartIndex(0);
      resetAutoplayTimer();
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      resetAutoplayTimer();
    }
  };

  const handleNext = () => {
    if (startIndex < maxStartIndex) {
      setStartIndex(startIndex + 1);
      resetAutoplayTimer();
    } else {
      // Loop back to the beginning
      setStartIndex(0);
    }
  };

  const goToSlide = (index) => {
    setStartIndex(index);
    resetAutoplayTimer();
  };

  const resetAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }

    if (isAutoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setStartIndex((prev) => (prev < maxStartIndex ? prev + 1 : 0));
      }, 5000);
    }
  }, [isAutoplay, maxStartIndex]);

  // Setup autoplay
  useEffect(() => {
    resetAutoplayTimer();

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [resetAutoplayTimer]);

  // Pause autoplay when user interacts with carousel
  useEffect(() => {
    const handleMouseEnter = () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };

    const handleMouseLeave = () => {
      if (isAutoplay) {
        resetAutoplayTimer();
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("mouseenter", handleMouseEnter);
      carouselElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        carouselElement.removeEventListener("mouseenter", handleMouseEnter);
        carouselElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [isAutoplay, resetAutoplayTimer]);

  return (
    <section className="py-12 md:py-24 relative w-full overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute left-0 top-1/4 w-32 md:w-64 h-32 md:h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute right-0 bottom-1/3 w-48 md:w-96 h-48 md:h-96 bg-cyan-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute left-1/4 bottom-1/4 w-24 md:w-48 h-24 md:h-48 bg-purple-200 rounded-full filter blur-3xl opacity-10 -z-10"></div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section with animations */}
        <div className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="text-xs font-bold tracking-widest uppercase bg-[#024E68] text-white py-1.5 px-4 rounded-full mb-4 inline-block shadow-sm">
              Meet Our Experts
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-6xl font-bold text-center mb-4 text-gray-900 tracking-tight px-2"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc] relative">
              Speakers
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3C50 0.5 150 0.5 200 3"
                  stroke="url(#paint0_linear)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="0"
                    y1="3"
                    x2="200"
                    y2="3"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0891b2" />
                    <stop offset="1" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-center mb-8 text-gray-600 max-w-3xl mx-auto font-light px-4"
          >
            Join us for an exceptional lineup of industry experts sharing their
            insights and experiences
          </motion.p>
        </div>

        {/* Panel selector with animated indicator - Fixed to scroll horizontally on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mb-8 md:mb-16 overflow-x-auto pb-4 hide-scrollbar"
        >
          <div className="flex flex-nowrap justify-start md:justify-center gap-3 min-w-min px-4">
            {Object.keys(speakersData).map((panel) => (
              <button
                key={panel}
                onClick={() => handlePanelChange(panel)}
                className={`whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 relative overflow-hidden flex-shrink-0 ${
                  selectedPanel === panel
                    ? "text-white"
                    : "bg-white/80 backdrop-blur-sm text-[#024E68] border border-cyan-200 hover:border-[#024E68]"
                }`}
                aria-pressed={selectedPanel === panel}
              >
                {selectedPanel === panel && (
                  <motion.span
                    layoutId="activePanel"
                    className="absolute inset-0 bg-[#0B7797]"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{panel}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Speakers carousel with enhanced transitions and hover effects */}
        <div className="relative mx-auto px-2 max-w-7xl">
          {/* Navigation buttons - redesigned with improved positioning for mobile */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={handlePrevious}
            disabled={startIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${
              startIndex === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-[#024E68] shadow-lg hover:bg-[#0B7798] hover:text-white border border-cyan-200"
            }`}
            aria-label="Previous speakers"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${
              startIndex >= maxStartIndex && maxStartIndex > 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-cyan-700 shadow-lg hover:bg-[#0B7798] hover:text-white border border-cyan-200"
            }`}
            aria-label="Next speakers"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          {/* Speakers cards with enhanced design */}
          <div
            className="overflow-hidden py-4 md:py-8"
            ref={carouselRef}
            aria-live="polite"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-3 md:gap-4 lg:gap-6 transition-all duration-700 ease-out px-1 sm:px-0"
              style={{
                transform: `translateX(calc(-${
                  startIndex * (100 / visibleCount)
                }%))`,
              }}
            >
              {currentSpeakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white cursor-pointer rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg md:shadow-xl border border-gray-100 group flex-shrink-0 transition-all duration-500 ${
                    hoveredCard === index
                      ? "shadow-xl sm:shadow-2xl shadow-[#0B7798]/20"
                      : ""
                  }`}
                  style={{
                    width: `calc(${100 / visibleCount}% - ${
                      ((visibleCount - 1) * (isMobile ? 12 : 24)) / visibleCount
                    }px)`,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="aspect-square sm:aspect-[4/4] overflow-hidden relative">
                    <img
                      src={speaker.photo || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Category badge */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 inline-block px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-bold border border-white/20">
                      {selectedPanel
                        .replace(" Panelists", "")
                        .replace(" Panels", "")}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/10 backdrop-blur-md p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <div
                        className="w-8 sm:w-12 h-1 bg-[#0B7798] rounded-full"
                      ></div>
                    </div>
                  </div>

                  {/* Speaker info in white section */}
                  <div className="p-3 sm:p-4 border-t border-gray-100">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1 line-clamp-1">
                      {speaker.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#025067] mb-1 sm:mb-2 line-clamp-1">
                      {speaker.title}
                    </p>

                    {speaker.bio && (
                      <p className="text-xs text-gray-500 mb-2 sm:mb-3 line-clamp-2 hidden sm:block">
                        {speaker.bio}
                      </p>
                    )}

                    <div className="flex space-x-2 sm:space-x-3 mt-1 sm:mt-2">
                      {speaker.social?.linkedin && (
                        <a
                          href={speaker.social.linkedin}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center text-cyan-700 hover:bg-[#0B7798] hover:text-white transition-colors cursor-pointer"
                          aria-label={`${speaker.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>
                      )}
                      
                      {speaker.social?.instagram && (
                        <a
                          href={speaker.social.instagram}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center text-cyan-700 hover:bg-[#0B7798] hover:text-white transition-colors cursor-pointer"
                          aria-label={`${speaker.name}'s Instagram profile`}
                        >
                          <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Enhanced pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-4 sm:mt-6 md:mt-8 gap-1 sm:gap-2 overflow-x-auto hide-scrollbar"
        >
          {Array.from({ length: maxStartIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={startIndex === index ? "true" : "false"}
            >
              <span
                className={`block transition-all duration-300 rounded-full ${
                  startIndex === index
                    ? "bg-black w-8 sm:w-12 h-2 sm:h-3"
                    : "bg-gray-300 w-2 h-2 sm:w-3 sm:h-3 group-hover:bg-black"
                }`}
              >
                {startIndex === index && (
                  <motion.span
                    layoutId="activeDot"
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full absolute left-0.5 sm:left-1 top-1/2 -translate-y-1/2"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Add styles for hiding scrollbars but allowing scrolling */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );
}