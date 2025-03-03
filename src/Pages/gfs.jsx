import Navbar from "../components1/Navbar";
import HeroSection from "../components1/heroSection";
import WhyAttend from "../components1/WhyAttend";
import Footer from "../components1/footer";
import ImageGrid from "../components1/Gallery";
import Faq8 from "../components1/faq";
import ConsultingSection from "../components1/TUCommunity";
import GlobalFutureSummit from "../components1/About";
import TimelineItem from "../components1/timeline";
import SpeakersSection from "../components1/speakers";
import Ideate from "../components1/ideate";
import CallforSpeaker from "../components1/CallforSpeaker.jsx";

function HomePage() {
  return (
    <div className="font-[poppins] bg-white min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-center">
      <Navbar />
      <section id="Home">
        <HeroSection />
      </section>
      <section id="about">
        <GlobalFutureSummit />
      </section>

      <TimelineItem />
      <section id="objective">
        <WhyAttend />
      </section>

      <section id="callforspeaker">
        <CallforSpeaker />
      </section>
      {/* <CollaboratorsSection/> */}
      <section className="w-[90%] mx-auto" id="speakers">
        <SpeakersSection />
      </section>
      <section id="ideate">
        <Ideate />
      </section>
      <section id="contact">
        <ConsultingSection />
      </section>
      <ImageGrid />
      <Faq8 />
    </div>
  );
}

export default HomePage;
