'use client';

import { MapPin, Phone, Mail, Clock, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const quickLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Our Team' },
    { href: '#careers', label: 'Careers' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector<HTMLElement>(href);
      if (element) {
        const nav = document.querySelector<HTMLElement>('nav[aria-label="Main navigation"]');
        const offset = (nav?.offsetHeight ?? 0) + 16;
        const targetPosition = Math.max(
          element.getBoundingClientRect().top + window.scrollY - offset,
          0
        );

        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[rgba(129,125,123,0.20)] text-navy-900 force-navy" role="contentinfo">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 force-navy">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 lg:gap-x-5">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="mb-4 inline-flex items-center justify-center bg-white rounded-2xl px-6 py-4 shadow-card">
              <Image
                src="/jurispeak-logo.png"
                alt="JURISPEAK Advocates & Consultants logo"
                width={540}
                height={180}
                className="h-36 w-auto object-contain"
                priority
              />
            </div>
            <p className="mb-4 leading-relaxed text-navy-900">
              Premier legal services in Mumbai, delivering excellence in advocacy and consultation 
              with unwavering commitment to our clients&apos; success.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/jurispeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-900 hover:text-gold-500 transition-colors"
              aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/jurispeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-900 hover:text-gold-500 transition-colors"
              aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4 text-navy-900">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-navy-900 hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-navy-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                  <div className="flex items-start space-x-3 sm:flex-1">
                    <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <div className="text-navy-900 text-sm">
                      <div>Office No. 101, E-Wing, Prashal,</div>
                      <div>Sant Janabai Road, Vile Parle (E),</div>
                      <div>Mumbai - 400 057</div>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:w-48 sm:ml-2">
                    <div className="relative rounded-lg overflow-hidden shadow-card">
                      <iframe
                        title="JURISPEAK location map"
                        src="https://maps.google.com/maps?q=Office%20No.%20101,%20E-Wing,%20Prashal,%20Sant%20Janabai%20Road,%20Vile%20Parle%20(E),%20Mumbai%20-%20400%20057&t=k&z=16&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-32 border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                      <a
                        href="https://maps.google.com/?q=Office+No.+101,+E-Wing,+Prashal,+Sant+Janabai+Road,+Vile+Parle+(E),+Mumbai+-+400+057"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0"
                        aria-label="Open JURISPEAK location on Google Maps"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a 
                  href="tel:+919819727270" 
                  className="text-navy-900 hover:text-gold-500 transition-colors"
                >
                  +91-98197 27270
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a 
                  href="tel:+912235747532" 
                  className="text-navy-900 hover:text-gold-500 transition-colors"
                >
                  +91(22) 3574 7532
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a 
                  href="mailto:mail@jurispeak.co.in" 
                  className="text-navy-900 hover:text-gold-500 transition-colors"
                >
                  mail@jurispeak.co.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <div className="text-navy-900 hover:text-gold-500 transition-colors">
                  Mon-Fri: 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter removed */}
        </div>
      </div>


      {/* Bottom bar */}
      <div className="border-t border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 force-navy">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-navy-900">
            <div className="text-sm text-navy-900">
              © {new Date().getFullYear()} JURISPEAK Advocates & Consultants. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm text-navy-900"></div>
          </div>
          
          {/* Legal disclaimer */}
          <div className="mt-6 pt-6 border-t border-slate-300 force-navy">
            <div className="text-navy-900 text-xs leading-relaxed">
              <p className="mb-2">
                <strong>Legal Disclaimer:</strong> The information provided on this website is for general 
                informational purposes only and does not constitute legal advice. Please consult with a 
                qualified attorney for advice regarding your specific legal situation.
              </p>
              <p>
                <strong>Jurisdiction:</strong> Our services are primarily provided in Mumbai, Maharashtra, India. 
                We are licensed to practice law in the jurisdiction where we maintain our principal office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
