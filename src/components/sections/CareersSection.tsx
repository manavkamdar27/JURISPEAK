'use client';

import { useState } from 'react';
import { Upload, CheckCircle, AlertCircle, Briefcase, Users, Award, Heart } from 'lucide-react';

const CareersSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    linkedinUrl: '',
    websiteUrl: '',
    coverLetter: '',
    resume: null as File | null,
    consent: false,
    honeypot: '' // Spam protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const availableRoles = [
    'Associate Attorney',
    'Paralegal',
    'Legal Assistant',
    'Office Administrator'
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Opportunities for continuous learning and career advancement in a supportive environment.'
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Work with experienced legal professionals who value teamwork and mentorship.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We believe in maintaining a healthy balance between professional excellence and personal well-being.'
    },
    {
      icon: Briefcase,
      title: 'Diverse Practice Areas',
      description: 'Exposure to various legal practice areas and the opportunity to develop specialized expertise.'
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type and size
      if (file.type !== 'application/pdf') {
        setErrors(prev => ({ ...prev, resume: 'Please upload a PDF file only.' }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB
        setErrors(prev => ({ ...prev, resume: 'File size must be less than 5MB.' }));
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
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

    if (!formData.role) {
      newErrors.role = 'Please select a role';
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Cover letter is required';
    } else if (formData.coverLetter.trim().length < 100) {
      newErrors.coverLetter = 'Cover letter must be at least 100 characters';
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
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
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('fullName', formData.fullName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('role', formData.role);
      submitData.append('linkedinUrl', formData.linkedinUrl);
      submitData.append('websiteUrl', formData.websiteUrl);
      submitData.append('coverLetter', formData.coverLetter);
      if (formData.resume) {
        submitData.append('resume', formData.resume);
      }
      submitData.append('consent', formData.consent.toString());

      // Mock API call - in production, this would be a real API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Log the application data (in production, this would be sent to a server)
      console.log('Job Application Received:', {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        linkedinUrl: formData.linkedinUrl,
        websiteUrl: formData.websiteUrl,
        coverLetter: formData.coverLetter,
        resumeFileName: formData.resume?.name,
        resumeSize: formData.resume?.size,
        consent: formData.consent,
        timestamp: new Date().toISOString()
      });

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        role: '',
        linkedinUrl: '',
        websiteUrl: '',
        coverLetter: '',
        resume: null,
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
    <section id="careers" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 force-white">
          <h2 className="heading-2 mb-6">Join Our Team</h2>
          <p className="body-large max-w-3xl mx-auto">
            We&apos;re always looking for talented legal professionals to join our growing team. 
            Explore career opportunities and become part of our commitment to legal excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Company culture and benefits */}
          <div>
            <div className="mb-8 force-white">
              <h3 className="heading-3 mb-6">Why Work With Us?</h3>
              <p className="body-text mb-6">
                At JURISPEAK Advocates & Consultants, we believe that our people are our greatest asset. 
                We foster a collaborative environment where legal professionals can grow, learn, and 
                make a meaningful impact on our clients&apos; lives.
              </p>
            </div>

            <div className="space-y-6 mb-8 force-white">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h4 className="heading-4 mb-2">{benefit.title}</h4>
                    <p className="body-text">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="heading-4 mb-4">Equal Opportunity Employer</h4>
              <p className="body-text">
                JURISPEAK Advocates & Consultants is committed to providing equal employment 
                opportunities to all qualified individuals regardless of race, color, religion, 
                gender, age, national origin, disability, or any other protected characteristic. 
                We value diversity and inclusion in our workplace.
              </p>
            </div>
          </div>

          {/* Right column - Application form */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="heading-3 mb-6">Apply Now</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-white border border-slate-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-navy-900" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Application Submitted Successfully!</h4>
                    <p className="text-slate-700 text-sm">Thank you for your interest. We&apos;ll review your application and get back to you soon.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-white border border-slate-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-navy-900" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Submission Failed</h4>
                    <p className="text-slate-700 text-sm">There was an error submitting your application. Please try again.</p>
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

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-navy-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.fullName ? 'border-navy-900 focus:ring-navy-900' : ''}`}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-navy-900">{errors.fullName}</p>
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

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-navy-900 mb-2">
                    Position Applying For *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={`form-select ${errors.role ? 'border-navy-900 focus:ring-navy-900' : ''}`}
                    required
                  >
                    <option value="">Select a position</option>
                    {availableRoles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  {errors.role && (
                    <p className="mt-1 text-sm text-navy-900">{errors.role}</p>
                  )}
                </div>

                {/* LinkedIn URL */}
                <div>
                  <label htmlFor="linkedinUrl" className="block text-sm font-medium text-navy-900 mb-2">
                    LinkedIn Profile (Optional)
                  </label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                {/* Website/Portfolio */}
                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-navy-900 mb-2">
                    Website/Portfolio (Optional)
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                {/* Cover Letter */}
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-navy-900 mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={6}
                    className={`form-textarea ${errors.coverLetter ? 'border-navy-900 focus:ring-navy-900' : ''}`}
                    placeholder="Tell us why you&apos;re interested in joining our team and what you can bring to JURISPEAK..."
                    required
                  />
                  {errors.coverLetter && (
                    <p className="mt-1 text-sm text-navy-900">{errors.coverLetter}</p>
                  )}
                  <p className="mt-1 text-sm text-slate-500">
                    Minimum 100 characters ({formData.coverLetter.length}/100)
                  </p>
                </div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-navy-900 mb-2">
                    Resume/CV *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf"
                      className="hidden"
                      required
                    />
                    <label
                      htmlFor="resume"
                      className={`flex items-center justify-center w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200 ${
                        errors.resume 
                          ? 'border-navy-900 bg-white' 
                          : 'border-slate-300 hover:border-gold-500 hover:bg-white'
                      }`}
                    >
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-600">
                          {formData.resume ? formData.resume.name : 'Click to upload PDF resume'}
                        </p>
                        <p className="text-xs text-slate-500">PDF only, max 5MB</p>
                      </div>
                    </label>
                  </div>
                  {errors.resume && (
                    <p className="mt-1 text-sm text-navy-900">{errors.resume}</p>
                  )}
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
                      I consent to the processing of my personal data for recruitment purposes 
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
                  className="btn-primary w-full py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
