'use client';

import { useRef, useState } from 'react';
import {
  Building2,
  Scale,
  Users,
  Briefcase,
  Lightbulb,
  Gavel,
  FileText,
  Plus,
  Minus
} from 'lucide-react';

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const services = [
    {
      id: 1,
      icon: Gavel,
      title: 'Litigation & Dispute Resolution',
      tagline: 'Strategic advocacy. Practical resolutions.',
      details: [
        'We represent clients across diverse civil, commercial, and regulatory disputes before all courts, tribunals, authorities, and quasi-judicial bodies including High Court of Bombay, City Civil Courts, Small Causes Court, Real Estate Regulatory Authority including Appellate Authority, National Company Law Tribunal, National Company Law Appellate Tribunal, District Deputy Registrar, Dy. Registrar (Co-operative Societies), Co-operative Court, Minister of Co-operation, and more.',
        'Our approach blends deep legal insight with tactical precision to deliver effective outcomes. At Jurispeak, we aim not merely to litigate but to resolve disputes in a manner that safeguards our clients’ long-term interests.'
      ]
    },
    {
      id: 2,
      icon: Building2,
      title: 'Redevelopment Services for Developers & Societies',
      tagline: 'Shaping structures, securing communities.',
      details: [
        'Jurispeak provides end-to-end legal solutions for redevelopment projects, guiding developers and housing societies through every legal, contractual, and regulatory stage.',
        'Our expertise ensures smooth execution, statutory compliance, and fair balancing of stakeholder interests. We are deeply attuned to the nuances of Mumbai’s redevelopment landscape, enabling legally sound and progressive outcomes.'
      ]
    },
    {
      id: 3,
      icon: FileText,
      title: 'Conveyancing',
      tagline: 'Clarity in every clause, confidence in every transaction.',
      details: [
        'We handle property documentation, title due diligence, and registration processes with precision and transparency.',
        'Our conveyancing team ensures every transaction — residential, commercial, or industrial — is legally secure and efficiently executed. With a meticulous approach, we simplify complexities and protect our clients’ ownership rights.'
      ]
    },
    {
      id: 4,
      icon: Scale,
      title: 'Arbitration',
      tagline: 'Resolving disputes efficiently, beyond the courtroom.',
      details: [
        'Jurispeak represents clients in domestic arbitrations under both institutional and ad-hoc mechanisms.',
        'Our lawyers combine procedural expertise with practical strategy to achieve fair, timely, and cost-effective resolutions. We focus on protecting business relationships while securing our clients’ commercial objectives.'
      ]
    },
    {
      id: 5,
      icon: Briefcase,
      title: 'Corporate Law',
      tagline: 'Legal strength for business success.',
      details: [
        'We advise corporations, partnerships, and start-ups on structuring, governance, and compliance matters.',
        'Our services cover contracts, transactions, and regulatory frameworks that shape strong business foundations. Jurispeak’s commercially attuned counsel empowers clients to make strategic decisions with legal confidence and clarity.'
      ]
    },
    {
      id: 6,
      icon: Users,
      title: 'Succession & Estate Planning',
      tagline: 'Preserving wealth. Protecting legacy.',
      details: [
        'We guide individuals and families in structuring wills, trusts, and succession plans that reflect their values and intentions.',
        'Our advice ensures a seamless transfer of assets while minimizing disputes and legal hurdles. With sensitivity and foresight, we help clients secure peace of mind for generations ahead.'
      ]
    },
    {
      id: 7,
      icon: Lightbulb,
      title: 'Intellectual Property',
      tagline: 'Protecting ideas. Powering innovation.',
      details: [
        'Jurispeak assists clients in safeguarding their intellectual property through registration, enforcement, and strategic management.',
        'From trademarks and copyrights to licensing and infringement actions, we offer end-to-end IP solutions. Our approach ensures that creativity and innovation translate into enduring business value.'
      ]
    }
  ];

  // FAQ removed per request

  const toggleService = (id: number) => {
    const opening = expandedService !== id;
    setExpandedService(opening ? id : null);
    if (opening) {
      setTimeout(() => {
        const el = cardRefs.current[id];
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  };

  // FAQ removed per request

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 force-navy">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">Our Legal Services</h2>
          <p className="body-large max-w-3xl mx-auto">
            We provide comprehensive legal services across multiple practice areas, 
            combining deep expertise with personalized attention to meet your specific needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="card group flex flex-col h-full"
              ref={(el) => {
                cardRefs.current[service.id] = el;
              }}
            >
              <div className="flex-1">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-navy-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-4 mb-2">{service.title}</h3>
                    <p className="body-text">{service.tagline}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => toggleService(service.id)}
                className="mt-auto w-full flex items-center justify-between p-3 bg-white hover:bg-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500"
                aria-expanded={expandedService === service.id}
                aria-controls={`service-${service.id}`}
              >
                <span className="font-medium text-navy-900">Learn More</span>
                {expandedService === service.id ? (
                  <Minus className="w-5 h-5 text-navy-900" />
                ) : (
                  <Plus className="w-5 h-5 text-navy-900" />
                )}
              </button>

              {/* Expanded content */}
              <div
                id={`service-${service.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  expandedService === service.id ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-3">
                  {service.details.map((paragraph, index) => (
                    <p key={index} className="body-text text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section removed */}

        {/* CTA Section */}
        
      </div>
    </section>
  );
};

export default ServicesSection;
