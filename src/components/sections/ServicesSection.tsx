'use client';

import { useRef, useState } from 'react';
import { 
  Building2, 
  Scale, 
  Users, 
  Home, 
  Briefcase, 
  Lightbulb, 
  Plus,
  Minus
} from 'lucide-react';

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const services = [
    {
      id: 1,
      icon: Building2,
      title: 'Corporate Law',
      shortDescription: 'Comprehensive corporate legal services for businesses of all sizes.',
      fullDescription: 'We provide end-to-end corporate legal services including company formation, compliance, mergers & acquisitions, corporate governance, and commercial transactions. Our expertise covers everything from startup incorporation to complex corporate restructuring.',
      features: [
        'Company incorporation and registration',
        'Corporate compliance and governance',
        'Mergers and acquisitions',
        'Commercial agreements and contracts',
        'Corporate restructuring',
        'Board advisory services'
      ]
    },
    {
      id: 2,
      icon: Scale,
      title: 'Civil Litigation',
      shortDescription: 'Expert representation in civil disputes and court proceedings.',
      fullDescription: 'Our civil litigation practice covers a wide range of disputes including contract disputes, property matters, commercial litigation, and civil rights cases. We provide strategic representation from pre-litigation through appeals.',
      features: [
        'Contract disputes and breach of contract',
        'Property disputes and real estate litigation',
        'Commercial litigation',
        'Civil rights and constitutional matters',
        'Appellate practice',
        'Alternative dispute resolution'
      ]
    },
    {
      id: 3,
      icon: Users,
      title: 'Family Law',
      shortDescription: 'Sensitive and professional family legal services.',
      fullDescription: 'We handle all aspects of family law with compassion and expertise, including divorce proceedings, child custody, adoption, and family disputes. Our approach prioritizes the best interests of families and children.',
      features: [
        'Divorce and separation proceedings',
        'Child custody and visitation rights',
        'Adoption and guardianship',
        'Domestic violence protection',
        'Property division and alimony',
        'Family mediation services'
      ]
    },
    {
      id: 4,
      icon: Home,
      title: 'Real Estate Law',
      shortDescription: 'Complete real estate legal solutions for buyers and sellers.',
      fullDescription: 'Our real estate practice covers residential and commercial transactions, property disputes, land use issues, and real estate development. We ensure smooth transactions and protect your property interests.',
      features: [
        'Property purchase and sale agreements',
        'Title verification and due diligence',
        'Property disputes and litigation',
        'Land use and zoning matters',
        'Real estate development projects',
        'Property tax and assessment issues'
      ]
    },
    {
      id: 5,
      icon: Briefcase,
      title: 'Employment Law',
      shortDescription: 'Workplace legal issues and employment disputes.',
      fullDescription: 'We represent both employers and employees in employment-related matters, including wrongful termination, discrimination, wage disputes, and employment contract negotiations.',
      features: [
        'Wrongful termination cases',
        'Employment discrimination',
        'Wage and hour disputes',
        'Employment contract review',
        'Workplace harassment claims',
        'Labor law compliance'
      ]
    },
    {
      id: 6,
      icon: Lightbulb,
      title: 'Intellectual Property',
      shortDescription: 'Protection and enforcement of intellectual property rights.',
      fullDescription: 'Our IP practice helps clients protect their innovations, brands, and creative works through patents, trademarks, copyrights, and trade secrets. We also handle IP disputes and enforcement.',
      features: [
        'Patent filing and prosecution',
        'Trademark registration and protection',
        'Copyright registration and enforcement',
        'Trade secret protection',
        'IP licensing agreements',
        'IP litigation and disputes'
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
              className="card group"
              ref={(el) => {
                cardRefs.current[service.id] = el;
              }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-navy-900" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-4 mb-2">{service.title}</h3>
                  <p className="body-text">{service.shortDescription}</p>
                </div>
              </div>

              <button
                onClick={() => toggleService(service.id)}
                className="w-full flex items-center justify-between p-3 bg-white hover:bg-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500"
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
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="body-text">{feature}</span>
                    </li>
                  ))}
                </ul>
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
