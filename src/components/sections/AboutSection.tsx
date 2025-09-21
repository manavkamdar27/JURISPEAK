'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Users, Award, MessageSquare, TrendingUp, Scale, Shield, Clock } from 'lucide-react';

const AboutSection = () => {
  const [counters, setCounters] = useState({
    years: 0,
    cases: 0,
    clients: 0,
    languages: 0
  });

  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const targetCounters = { years: 15, cases: 500, clients: 200, languages: 3 };
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounters({
              years: Math.floor(targetCounters.years * easeOutQuart),
              cases: Math.floor(targetCounters.cases * easeOutQuart),
              clients: Math.floor(targetCounters.clients * easeOutQuart),
              languages: Math.floor(targetCounters.languages * easeOutQuart)
            });

            if (step >= steps) {
              clearInterval(timer);
              setCounters(targetCounters);
            }
          }, stepDuration);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const valuePillars = [
    {
      icon: Users,
      title: 'Client First',
      // eslint-disable-next-line react/no-unescaped-entities
      description: 'We prioritize our clients\' needs and maintain open communication throughout every case, ensuring they feel supported and informed.'
    },
    {
      icon: Award,
      title: 'Deep Expertise',
      description: 'Our team brings extensive legal knowledge and experience to every case, staying current with evolving laws and regulations.'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'We believe in transparent, jargon-free communication that helps clients understand their legal situation and options clearly.'
    }
  ];

  const stats = [
    {
      icon: Clock,
      value: counters.years,
      label: 'Years in Practice',
      suffix: '+'
    },
    {
      icon: Scale,
      value: counters.cases,
      label: 'Cases Handled',
      suffix: '+'
    },
    {
      icon: Users,
      value: counters.clients,
      label: 'Satisfied Clients',
      suffix: '+'
    },
    {
      icon: MessageSquare,
      value: counters.languages,
      label: 'Languages Spoken',
      suffix: ''
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 force-white">
          <h2 className="heading-2 mb-3">About Us</h2>
          <p className="body-text italic mb-4">&ldquo;The Constitution is not a mere lawyer's document; it is a vehicle of life, and its spirit is always the spirit of age.&rdquo; &mdash; Dr. B. R. Ambedkar</p>
          <p className="body-text max-w-3xl mx-auto">
            We deliver clear, business‑aligned legal advice across corporate, civil and commercial matters.
            Our team combines deep expertise with pragmatic strategy to help you move forward with confidence.
          </p>
        </div>

        {/* Law imagery slideshow + text (inside grid, like Mission) */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl overflow-hidden">
            <SlideshowGrid />
          </div>
        </div>

        {/* Mission statement */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="heading-3 mb-6">Our Mission</h3>
              <p className="body-large mb-6">
                To provide exceptional legal services that combine deep expertise with personalized 
                attention, ensuring our clients receive the highest quality representation and 
                achieve their legal objectives efficiently and effectively.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="text-left">
                  <h4 className="heading-4 mb-3">Jurisdictions Served</h4>
                  <p className="body-text">
                    We primarily practice in Mumbai, Maharashtra, with extensive experience 
                    in High Court and District Court proceedings. Our expertise extends to 
                    various specialized tribunals and regulatory bodies.
                  </p>
                </div>
                <div className="text-left">
                  <h4 className="heading-4 mb-3">Practice Philosophy</h4>
                  <p className="body-text">
                    We believe in thorough preparation, strategic thinking, and maintaining 
                    the highest ethical standards. Every case receives our full attention 
                    and commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value pillars */}
        <div className="mb-16">
          <div className="force-white">
            <h3 className="heading-3 text-center mb-12">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePillars.map((pillar, index) => (
              <div key={index} className="card text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="heading-4 mb-4">{pillar.title}</h4>
                <p className="body-text">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-navy-900 rounded-2xl p-8 md:p-12">
          <h3 className="heading-3 text-white text-center mb-12">Our Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center force-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-3 mb-6">Why Choose JURISPEAK?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Proven Track Record</h4>
                    <p className="body-text">
                      Over 15 years of successful legal practice with hundreds of satisfied clients 
                      and successful case outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Expert Qualifications</h4>
                    <p className="body-text">
                      Our team holds advanced degrees including M.B.A. (Finance) and L.L.B., 
                      ensuring comprehensive legal and business expertise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Personalized Service</h4>
                    <p className="body-text">
                      Every client receives individual attention and customized legal strategies 
                      tailored to their specific needs and circumstances.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Continuous Growth</h4>
                    <p className="body-text">
                      We stay current with evolving legal landscapes and continuously enhance 
                      our skills to serve clients better.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// Slideshow with image (left) and text (right), all inside one grid
const SlideshowGrid = () => {
  const slides = [
    {
      src: '/image.jpg',
      title: 'Legal Advocacy You Can Trust',
      text:
        'Decades of experience advocating for clients across corporate, civil, and commercial matters with clarity and precision.'
    },
    {
      src: '/image_2.jpg',
      title: 'Research-Driven Strategy',
      text:
        'Thorough legal research and preparation inform every step — from advisory to litigation — so you can move with confidence.'
    },
    {
      src: '/image_5.jpg',
      title: 'Client-Focused Counsel',
      text:
        'We tailor our approach to your goals with transparent communication, practical advice, and professional excellence.'
    },
    {
      src: '/image_4.jpg',
      title: 'Practical, Business‑Aligned Advice',
      text:
        'We align legal strategy with your commercial objectives, balancing risk and opportunity to drive better outcomes.'
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  const current = slides[index];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Left: image slideshow (fills left half with no visible borders) */}
      <div className="relative w-full h-56 sm:h-64 md:h-full md:min-h-[18rem] lg:min-h-[22rem] overflow-hidden">
        <Image
          key={`fg-${index}`}
          src={current.src}
          alt="Law-related imagery for JURISPEAK"
          fill
          sizes="(min-width:768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Right: text for the current slide */}
      <div className="p-6 md:p-10 flex flex-col justify-center">
        <h4 className="heading-3 mb-4 text-navy-900">{current.title}</h4>
        <p className="body-large text-slate-700 mb-6">{current.text}</p>

        {/* Dots */}
        <div className="flex items-center space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-opacity ${
                i === index ? 'bg-gold-500 opacity-100' : 'bg-slate-300 opacity-70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
