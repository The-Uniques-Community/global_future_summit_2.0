// import React from 'react';

// const AboutUs = () => {
//   return (
//     <section className="bg-white py-20 px-6 font-[Poppins] overflow-hidden w-full">
//       <div className="max-w-7xl mx-auto text-center relative">
//         {/* Background Elements */}
//         <div className="absolute opacity-10 top-40 -right-32 w-96 h-96 rounded-full border-4 border-[#02A8A8] hidden xl:block"></div>

//         {/* Section Heading */}
//         <h2 className="text-lg tracking-[13px] font-semibold text-black mb-6 relative inline-block">
//           ABOUT 
//           <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#025067] to-[#02A8A8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
//           <p className="leading-[60px] tracking-normal text-6xl bg-gradient-to-r from-[#0b7797] to-[#16a3cc] bg-clip-text text-transparent font-bold mt-4">Global Future Summit 2.0 2025</p>
//         </h2>

//         {/* Tagline */}
//         <p className="text-lg text-gray-600 mb-12 relative bottom-4">
//           Where Innovation Meets <span className='text-[#025067] font-medium'>Opportunities</span>
//         </p>

//         <div className="relative bottom-10 max-w-4xl mx-auto">
//           <p className="text-lg font-light">
//             The Global Future Summit 2.0 is a groundbreaking event uniting innovators, industry leaders, and changemakers to shape the future of technology and sustainability. Focused on AI, blockchain, and emerging tech, the summit fosters collaboration to solve real-world challenges. With cutting-edge keynotes, interactive sessions, and high-stakes pitch battles, it's where bold ideas meet global impact. This is more than an event— <span className='text-[#025067] font-semibold'>it's a movement towards a smarter, more connected world</span>. Join us and be part of the future!
//           </p>
//         </div>

//         {/* Feature Blocks */}
//         <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-10">
          
//           {/* Feature 1: Global Innovation */}
//           <div className="relative bg-white rounded-xl shadow-2xl p-8 overflow-hidden border border-[#025067]/10">
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#025067]/5 to-[#02A8A8]/5 z-0"></div>
//             {/* Icon */}
//             <div className="text-[#025067] mb-6 relative z-10">
//               <p className="text-6xl bg-gradient-to-r from-[#025067] to-[#02A8A8] bg-clip-text text-transparent font-bold">01</p>
//             </div>
            
//             <h3 className="text-2xl font-bold text-[#025067] mb-4 relative z-10">Global Convergence</h3>
//             <p className="text-gray-600 relative z-10">
//               Connect with visionaries from six continents, exploring breakthrough technologies and forging partnerships that transcend borders.
//             </p>
//             {/* Logo */}
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-[#025067] relative top-7 opacity-60 left-40" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
//             </svg>
//             {/* Decorative Element */}
//             <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#02A8A8]/20 rounded-full z-0"></div>
//             <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#025067]/10 rounded-full z-0"></div>
//           </div>
          
//           {/* Feature 2: Future Technologies */}
//           <div className="relative bg-white rounded-xl shadow-2xl p-8 overflow-hidden border border-[#025067]/10">
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#025067]/5 to-[#02A8A8]/5 z-0"></div>
//             {/* Icon */}
//             <div className="text-[#025067] mb-6 relative z-10">
//               <p className="text-6xl bg-gradient-to-r from-[#025067] to-[#02A8A8] bg-clip-text text-transparent font-bold">02</p>
//             </div>
            
//             <h3 className="text-2xl font-bold text-[#025067] mb-4 relative z-10">Future Technologies</h3>
//             <p className="text-gray-600 relative z-10">
//               Immerse yourself in AI, quantum computing, and next-gen sustainable solutions shaping our collective tomorrow.
//             </p>
//             {/* Logo */}
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-[#025067] relative top-7 opacity-60 left-40" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
//               <path fillRule="evenodd" d="M5 4a1 1 0 00-1 1v1h1V4z" clipRule="evenodd" />
//             </svg>
//             {/* Decorative Element */}
//             <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#02A8A8]/20 rounded-full z-0"></div>
//             <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#025067]/10 rounded-full z-0"></div>
//           </div>
          
//           {/* Feature 3: Sustainable Future */}
//           <div className="relative bg-white rounded-xl shadow-2xl p-8 overflow-hidden border border-[#025067]/10">
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#025067]/5 to-[#02A8A8]/5 z-0"></div>
//             {/* Icon */}
//             <div className="text-[#025067] mb-6 relative z-10">
//               <p className="text-6xl bg-gradient-to-r from-[#025067] to-[#02A8A8] bg-clip-text text-transparent font-bold">03</p>
//             </div>
            
//             <h3 className="text-2xl font-bold text-[#024E68] mb-4 relative z-10">Sustainable Growth</h3>
//             <p className="text-gray-600 relative z-10">
//               Explore innovations that balance economic prosperity with environmental stewardship for a thriving global ecosystem.
//             </p>
//             {/* Logo */}
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-[#025067] relative top-7 opacity-60 left-40" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
//             </svg>
//             {/* Decorative Element */}
//             <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#024E68]/20 rounded-full z-0"></div>
//             <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#024E68]/10 rounded-full z-0"></div>
//           </div>
//         </div>

//         {/* Global Stats */}
//         <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
//           <div className="p-6 bg-[#024E68] rounded-xl text-white">
//             <h4 className="text-4xl font-bold mb-2">1,000+</h4>
//             <p className="text-sm uppercase tracking-wider">Attendees</p>
//           </div>
          
//           <div className="p-6 bg-[#024E68] rounded-xl text-white">
//             <h4 className="text-4xl font-bold mb-2">50+</h4>
//             <p className="text-sm uppercase tracking-wider">Tech Exhibits</p>
//           </div>
          
//           <div className="p-6 bg-[#024E68] rounded-xl text-white">
//             <h4 className="text-4xl font-bold mb-2">10+</h4>
//             <p className="text-sm uppercase tracking-wider">Entrepreneurs</p>
//           </div>
          
//           <div className="p-6 bg-[#024E68] rounded-xl text-white">
//             <h4 className="text-4xl font-bold mb-2">20+</h4>
//             <p className="text-sm uppercase tracking-wider">Speakers</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React, { useEffect, useRef, useState } from 'react';
import { Globe, Cpu, Leaf, Users, Lightbulb, Building, Mic, Award } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [counters, setCounters] = useState({ attendees: 0, exhibits: 0, entrepreneurs: 0, speakers: 0 });
  const [animationComplete, setAnimationComplete] = useState(false);

  // Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Intersection Observer for stats visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Counter animation for stats
  useEffect(() => {
    if (statsVisible && !animationComplete) {
      const duration = 2000; // ms
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      
      const finalValues = {
        attendees: 1000,
        exhibits: 50,
        entrepreneurs: 10,
        speakers: 20
      };
      
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        
        const progress = frame / totalFrames;
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        
        setCounters({
          attendees: Math.floor(easeOutQuad * finalValues.attendees),
          exhibits: Math.floor(easeOutQuad * finalValues.exhibits),
          entrepreneurs: Math.floor(easeOutQuad * finalValues.entrepreneurs),
          speakers: Math.floor(easeOutQuad * finalValues.speakers)
        });
        
        if (frame === totalFrames) {
          clearInterval(counter);
          setAnimationComplete(true);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    }
  }, [statsVisible, animationComplete]);

  // Add keyframes and styles to document
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @keyframes borderPulse {
        0% { border-color: rgba(2, 80, 103, 0.3); }
        50% { border-color: rgba(2, 80, 103, 0.8); }
        100% { border-color: rgba(2, 80, 103, 0.3); }
      }
      
      @keyframes gradientFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-pulse {
        animation: pulse 4s ease-in-out infinite;
      }
      
      .animate-shimmer {
        animation: shimmer 3s linear infinite;
        background: linear-gradient(90deg, 
          rgba(255,255,255,0) 0%, 
          rgba(255,255,255,0.2) 50%, 
          rgba(255,255,255,0) 100%);
        background-size: 200% 100%;
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .animate-fade-in-left {
        animation: fadeInLeft 0.8s ease-out forwards;
      }
      
      .animate-fade-in-right {
        animation: fadeInRight 0.8s ease-out forwards;
      }
      
      .animate-scale-in {
        animation: scaleIn 0.8s ease-out forwards;
      }
      
      .animate-border-pulse {
        animation: borderPulse 2s infinite;
      }
      
      .animate-gradient-flow {
        background-size: 200% 200%;
        animation: gradientFlow 5s ease infinite;
      }
      
      .feature-card {
        transition: all 0.3s ease;
        overflow: hidden;
      }
      
      .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 25px -5px rgba(2, 80, 103, 0.1), 0 10px 10px -5px rgba(2, 80, 103, 0.04);
      }
      
      .feature-card:hover .feature-icon {
        transform: scale(1.1);
      }
      
      .feature-card:hover .feature-number {
        transform: translateY(-5px);
      }
      
      .feature-card:hover .feature-overlay {
        opacity: 0.15;
      }
      
      .feature-icon {
        transition: transform 0.3s ease;
      }
      
      .feature-number {
        transition: transform 0.3s ease;
      }
      
      .feature-overlay {
        transition: opacity 0.3s ease;
      }
      
      .stat-card {
        transition: all 0.3s ease;
        overflow: hidden;
      }
      
      .stat-card:hover {
        transform: translateY(-5px) scale(1.03);
      }
      
      .stat-card:hover .stat-value {
        color: white;
      }
      
      .stat-card:hover .stat-overlay {
        opacity: 0.3;
      }
      
      .stat-value {
        transition: color 0.3s ease;
      }
      
      .stat-overlay {
        transition: opacity 0.3s ease;
      }
      
      .gradient-text {
        background: linear-gradient(to right, #025067, #02A8A8);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      
      .gradient-bg {
        background: linear-gradient(135deg, #025067, #02A8A8);
      }
      
      .about-heading-line {
        position: relative;
        display: inline-block;
      }
      
      .about-heading-line::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(to right, #025067, #02A8A8);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s ease;
      }
      
      .about-heading-line.visible::after {
        transform: scaleX(1);
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  const features = [
    {
      number: "01",
      title: "Global Convergence",
      description: "Connect with visionaries from six continents, exploring breakthrough technologies and forging partnerships that transcend borders.",
      icon: <Globe className="w-10 h-10 text-[#025067]" />,
      delay: 0
    },
    {
      number: "02",
      title: "Future Technologies",
      description: "Immerse yourself in AI, quantum computing, and next-gen sustainable solutions shaping our collective tomorrow.",
      icon: <Cpu className="w-10 h-10 text-[#025067]" />,
      delay: 200
    },
    {
      number: "03",
      title: "Sustainable Growth",
      description: "Explore innovations that balance economic prosperity with environmental stewardship for a thriving global ecosystem.",
      icon: <Leaf className="w-10 h-10 text-[#025067]" />,
      delay: 400
    }
  ];

  const stats = [
    { value: counters.attendees, label: "Attendees", icon: <Users className="w-6 h-6" />, delay: 0 },
    { value: counters.exhibits, label: "Tech Exhibits", icon: <Lightbulb className="w-6 h-6" />, delay: 100 },
    { value: counters.entrepreneurs, label: "Entrepreneurs", icon: <Building className="w-6 h-6" />, delay: 200 },
    { value: counters.speakers, label: "Speakers", icon: <Mic className="w-6 h-6" />, delay: 300 }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-32 w-96 h-96 rounded-full border-4 border-[#025067]/10 animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-4 border-[#02A8A8]/10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-[#025067]/20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-[#02A8A8]/20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-[#025067]/20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: 'radial-gradient(#025067 1px, transparent 1px), radial-gradient(#025067 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Heading */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
          <h2 className="text-lg tracking-[13px] font-semibold text-[#025067] mb-6 about-heading-line uppercase relative inline-block">
            ABOUT
            <span className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#025067] to-[#02A8A8] ${isVisible ? 'about-heading-line visible' : ''}`}></span>
          </h2>
          
          <p className="text-6xl font-bold gradient-text animate-gradient-flow mt-4">
            Global Future Summit 2.0 2025
          </p>
          
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Where Innovation Meets <span className='text-[#025067] font-medium'>Opportunities</span>
          </p>
        </div>

        {/* Main Description */}
        <div className={`max-w-4xl mx-auto mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
          <div className="relative p-8 rounded-2xl bg-white shadow-xl border border-gray-100">
            <div className="absolute inset-0 animate-shimmer opacity-50 rounded-2xl overflow-hidden"></div>
            
            <p className="text-lg leading-relaxed text-gray-700 relative z-10">
              The <span className="font-semibold text-[#025067]">Global Future Summit 2.0</span> is a groundbreaking event uniting innovators, industry leaders, and changemakers to shape the future of technology and sustainability. Focused on AI, blockchain, and emerging tech, the summit fosters collaboration to solve real-world challenges. With cutting-edge keynotes, interactive sessions, and high-stakes pitch battles, it's where bold ideas meet global impact. This is more than an event— <span className='text-[#025067] font-semibold'>it's a movement towards a smarter, more connected world</span>. Join us and be part of the future!
            </p>
            
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#025067]/5 rounded-full z-0"></div>
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#02A8A8]/5 rounded-full z-0"></div>
            
            <Award className="absolute -bottom-6 -right-6 w-12 h-12 text-[#025067]/10" />
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card relative bg-white rounded-xl shadow-xl p-8 border border-[#025067]/10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{animationDelay: `${0.6 + feature.delay/1000}s`}}
            >
              {/* Gradient Overlay */}
              <div className="feature-overlay absolute inset-0 bg-gradient-to-br from-[#025067]/5 to-[#02A8A8]/5 opacity-10 z-0 rounded-xl"></div>
              
              {/* Number */}
              <div className="feature-number text-[#025067] mb-6 relative z-10">
                <p className="text-6xl gradient-text font-bold">{feature.number}</p>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-[#025067] mb-4 relative z-10">{feature.title}</h3>
              <p className="text-gray-600 relative z-10 mb-8">
                {feature.description}
              </p>
              
              {/* Icon */}
              <div className="feature-icon absolute bottom-6 right-6 opacity-70">
                {feature.icon}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#02A8A8]/10 rounded-full z-0 animate-pulse" style={{animationDelay: `${index * 0.5}s`}}></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#025067]/5 rounded-full z-0"></div>
            </div>
          ))}
        </div>

        {/* Global Stats */}
        <div ref={statsRef} className="relative">
          <h3 className={`text-2xl font-bold text-center mb-10 gradient-text ${statsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          The Impact of Global Future Summit in Numbers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`stat-card relative p-8 rounded-xl overflow-hidden ${statsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{
                  animationDelay: `${0.2 + stat.delay/1000}s`,
                  background: 'linear-gradient(135deg, #025067, #02A8A8)'
                }}
              >
                <div className="stat-overlay absolute inset-0 bg-black opacity-20"></div>
                
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <h4 className="stat-value text-4xl font-bold text-white">{stat.value}+</h4>
                  <div className="p-2 bg-white/10 text-white rounded-full">
                    {stat.icon}
                  </div>
                </div>
                
                <p className="text-sm uppercase tracking-wider text-white/80 font-medium relative z-10">
                  {stat.label}
                </p>
                
                {/* Decorative circles */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border border-white/10"></div>
                <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full border border-white/10"></div>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className={`mt-16 text-center ${statsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
            {/* <button 
              className="px-8 py-4 rounded-full bg-white text-[#025067] font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border-2 border-[#025067]/10 animate-border-pulse"
            >
              Join the Movement
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;