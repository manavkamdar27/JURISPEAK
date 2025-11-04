'use client';

import { useState, useEffect } from 'react';
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
      title: 'Insight over Instinct',
      description:
        "Our strategies are built on thorough research, data-backed analysis, and sectoral insight, particularly in complex real estate and redevelopment matters where detail defines success."
    },
    {
      icon: Award,
      title: 'Partnership, not Patronage',
      description:
       "We see every client relationship as a partnership built on trust, collaboration, and shared success, not just a mere representation."
    },
    {
      icon: MessageSquare,
      title: 'Humanity at the Core',
      description: 
      "Beyond the cases and contracts, we never lose sight of people, their goals, their concerns, and the impact of every decision we help shape."
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

  const whyChooseItems = [
    {
      icon: Shield,
      title: 'Outcome Oriented',
      description:
        'Successful legal practice with hundreds of satisfied clients and successful case outcomes.'
    },
    {
      icon: Award,
      title: 'Expert Qualifications',
      description:
        'Our team holds advanced degrees including M.B.A. (Finance) and L.L.B., ensuring comprehensive legal and business expertise.'
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description:
        'Every client receives individual attention and customized legal strategies tailored to their specific needs and circumstances.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description:
        'We stay current with evolving legal landscapes and continuously enhance our skills to serve clients better.'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 force-white">
          <h2 className="heading-2 mb-3">About Us</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-justify">
            <p className="body-text">
              Established in 2020, Jurispeak is a Mumbai-based law firm recognized for its steadfast dedication to excellence, professionalism, and ethical practice. In a short span of time, Jurispeak has cultivated enduring associations with a diverse and distinguished clientele, a reflection of its strong culture of delivering superior, client-focused legal services.
            </p>
            <p className="body-text">
              At Jurispeak, we hold the conviction that outstanding legal advice stems from a commitment to continuous learning, teamwork, and agility. Our professionals are mentored and empowered to proactively address the dynamic challenges faced by our clients in an ever-evolving legal and commercial landscape. By harmonizing traditional legal wisdom with modern strategic insight, Jurispeak consistently delivers innovative, pragmatic, and outcome-driven solutions across a wide range of practice areas.
            </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left items-start">
              {whyChooseItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-navy-900">{item.title}</h4>
                    <p className="body-text text-justify">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
