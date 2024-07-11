import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); 
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5 bg-gray-200">
      <h1
        className="text-center mt-5 mb-5 font-bold text-red-600 text-3xl sm:text-4xl md:text-5xl"
        data-aos="fade-up"
      >
        WELCOME TO <span className="block sm:inline">"BETHEL ICRM"</span>
      </h1>
      <p
        className="text-gray-700 text-center max-w-4xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Bethel ICRM Church is a vibrant and mission-driven community committed to
        embodying the love and teachings of Jesus Christ through comprehensive care and outreach initiatives.
        The church's mission focuses on nurturing the villages through Christ morals for their eternal lives.
        Actively engages with the local community through various outreach programs, advocating for the rights and
        well-being. Builds strong partnerships with individuals, churches, and organizations that share the church’s
        vision and mission. Bethel ICRM Church is dedicated to transforming the lives of the world into spiritual
        leading life. By aiming to empower them to lead fulfilling and impactful lives rooted in Christian faith.
      </p>
    </div>
  );
};

export default Section1;
