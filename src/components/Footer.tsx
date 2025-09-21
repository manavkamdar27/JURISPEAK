'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscriptionStatus('success');
      setEmail('');
    } catch {
      setSubscriptionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Our Team' },
    { href: '#careers', label: 'Careers' },
    { href: '#contact', label: 'Contact' },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/accessibility', label: 'Accessibility Statement' },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-white text-slate-700" role="contentinfo">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/jurispeak-logo.png"
                alt="JURISPEAK Advocates & Consultants logo"
                width={540}
                height={180}
                className="h-44 w-auto object-contain"
                priority
              />
            </div>
            <p className="mb-4 leading-relaxed">
              Premier legal services in Mumbai, delivering excellence in advocacy and consultation 
              with unwavering commitment to our clients&apos; success.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/jurispeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-navy-900 transition-colors"
              aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/jurispeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-navy-900 transition-colors"
              aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-navy-900">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-slate-700 hover:text-navy-900 transition-colors text-left"
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
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <div className="text-slate-700 text-sm">
                  <div>Office No. 101, E-Wing, Prashal,</div>
                  <div>Sant Janabai Road, Vile Parle (E),</div>
                  <div>Mumbai - 400 057</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a 
                  href="tel:+919819727270" 
                  className="text-slate-700 hover:text-navy-900 transition-colors"
                >
                  +91-98197 27270
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a 
                  href="tel:+912235747532" 
                  className="text-slate-700 hover:text-navy-900 transition-colors"
                >
                  +91(22) 3574 7532
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a 
                  href="mailto:mail@jurispeak.co.in" 
                  className="text-slate-700 hover:text-navy-900 transition-colors"
                >
                  mail@jurispeak.co.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <div className="text-slate-700 text-sm">
                  Mon-Fri: 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter removed */}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-700 text-sm">
              © {new Date().getFullYear()} JURISPEAK Advocates & Consultants. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-navy-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Legal disclaimer */}
          <div className="mt-6 pt-6 border-t border-slate-700">
            <div className="text-slate-700 text-xs leading-relaxed">
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
