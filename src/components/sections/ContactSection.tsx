'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    consent: false,
    honeypot: '' // Spam protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inquiryTypes = [
    'Consultation',
    'Case Update',
    'Billing Inquiry',
    'General Question',
    'Other'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'Office No. 101, E-Wing, Prashal,',
        'Sant Janabai Road, Vile Parle (E),',
        'Mumbai - 400 057'
      ],
      link: 'https://maps.google.com/?q=Office+No.+101,+E-Wing,+Prashal,+Sant+Janabai+Road,+Vile+Parle+(E),+Mumbai+-+400+057'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Mobile: +91-98197 27270',
        'Landline: +91(22) 3574 7532'
      ],
      link: 'tel:+919819727270'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['mail@jurispeak.co.in'],
      link: 'mailto:mail@jurispeak.co.in'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ],
      link: null
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      return; // Silent fail for bots
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Mock API call - in production, this would be a real API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Log the contact form data (in production, this would be sent to a server)
      console.log('Contact Form Submission:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiryType: formData.inquiryType,
        message: formData.message,
        consent: formData.consent,
        timestamp: new Date().toISOString()
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
        consent: false,
        honeypot: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 force-white">
          <h2 className="heading-2 mb-6">Contact Us</h2>
          <p className="body-large max-w-3xl mx-auto">
            Ready to discuss your legal needs? Get in touch with our experienced team 
            for a free consultation. We&apos;re here to help you navigate your legal challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Contact form */}
          <div>
            <div className="bg-white rounded-2xl p-8 text-slate-700">
              <h3 className="heading-3 mb-6 force-navy">Send Us a Message</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-white border border-slate-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-navy-900" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Message Sent Successfully!</h4>
                    <p className="text-slate-700 text-sm">Thank you for contacting us. We&apos;ll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-white border border-slate-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-navy-900" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Message Failed</h4>
                    <p className="text-slate-700 text-sm">There was an error sending your message. Please try again.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${errors.name ? 'border-navy-900 focus:ring-navy-900' : ''}`}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-navy-900">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? 'border-navy-900 focus:ring-navy-900' : ''}`}
                    placeholder="Enter your email address"
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-navy-900">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input ${errors.phone ? 'border-navy-900 focus:ring-navy-900' : ''}`}
                    placeholder="Enter your phone number"
                    required
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-navy-900">{errors.phone}</p>
                  )}
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-navy-900 mb-2">
                    How can we help? *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className={`form-select ${errors.inquiryType ? 'border-navy-900 focus:ring-navy-900' : ''}`}
                    required
                  >
                    <option value="">Select an inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.inquiryType && (
                    <p className="mt-1 text-sm text-navy-900">{errors.inquiryType}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`form-textarea ${errors.message ? 'border-navy-900 focus:ring-navy-900' : ''}`}
                    placeholder="Please describe your legal matter or question in detail..."
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-navy-900">{errors.message}</p>
                  )}
                  <p className="mt-1 text-sm text-slate-500">
                    Minimum 20 characters ({formData.message.length}/20)
                  </p>
                </div>

                {/* Consent Checkbox */}
                <div>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className={`mt-1 w-4 h-4 text-gold-500 border-slate-300 rounded focus:ring-gold-500 ${
                        errors.consent ? 'border-navy-900' : ''
                      }`}
                      required
                    />
                    <span className="text-sm text-slate-700">
                      I consent to the processing of my personal data for communication purposes 
                      and agree to the terms and conditions. *
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-sm text-navy-900">{errors.consent}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-white border border-slate-200 rounded-lg">
                <p className="text-sm text-navy-900">
                  <strong>Important:</strong> Please do not send confidential information through this form. 
                  For sensitive legal matters, please call us directly or schedule an in-person consultation.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Contact info and map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="force-white">
              <h3 className="heading-3 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="body-text hover:text-gold-500 transition-colors duration-200"
                        >
                          {info.details.map((detail, idx) => (
                            <div key={idx}>{detail}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="body-text">
                          {info.details.map((detail, idx) => (
                            <div key={idx}>{detail}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Embed */}
            <div>
              <div className="force-white">
                <h3 className="heading-3 mb-6">Find Us</h3>
              </div>
              <div className="bg-slate-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-slate-600">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Google Maps Embed</p>
                  <p className="text-sm">Office No. 101, E-Wing, Prashal</p>
                  <p className="text-sm">Sant Janabai Road, Vile Parle (E), Mumbai - 400 057</p>
                  <a
                    href="https://maps.google.com/?q=Office+No.+101,+E-Wing,+Prashal,+Sant+Janabai+Road,+Vile+Parle+(E),+Mumbai+-+400+057"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-gold-500 text-navy-900 rounded-lg hover:bg-gold-600 transition-colors duration-200"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
