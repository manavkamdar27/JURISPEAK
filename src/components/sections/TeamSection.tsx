'use client';

import { useState } from 'react';
import { X, Mail, Phone, Award, GraduationCap, Users, BookOpen } from 'lucide-react';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Dinesh Rane',
      title: 'Partner',
      qualifications: 'M.B.A. (Finance), L.L.B.',
      image: '/images/team/dinesh-rane.jpg',
      practiceAreas: ['Corporate Law', 'Civil Litigation', 'Commercial Law'],
      languages: [],
      shortBio: '',
      fullBio: 'Dinesh Rane is a distinguished legal professional with over 15 years of experience in corporate law and civil litigation. He holds an M.B.A. in Finance and an L.L.B., providing him with a unique combination of legal and business expertise. Dinesh has successfully handled numerous complex corporate transactions and high-stakes litigation matters.',
      education: [
        'L.L.B. - Law Degree',
        'M.B.A. (Finance) - Master of Business Administration'
      ],
      experience: [
        '15+ years of legal practice',
        'Specialized in corporate law and civil litigation'
      ],
      memberships: [
        'Bar Council of Maharashtra and Goa',
        'Mumbai Bar Association'
      ],
      publications: [],
      contact: {
        email: 'dinesh.rane@jurispeak.co.in',
        phone: '+91-98197 27270',
        direct: '+91(22) 3574 7532'
      }
    },
    {
      id: 2,
      name: 'Jay Kamdar',
      title: 'Partner',
      qualifications: 'L.L.B.',
      image: '/images/team/jay-kamdar.jpg',
      practiceAreas: ['Corporate Law', 'Civil Litigation', 'Real Estate Law'],
      languages: [],
      shortBio: '',
      fullBio: 'Jay Kamdar is part of the JURISPEAK team. Detailed biography and credentials available on request.',
      education: [],
      experience: [],
      memberships: [],
      publications: [],
      contact: {
        email: 'mail@jurispeak.co.in',
        phone: '+91-98197 27270',
        direct: '+91(22) 3574 7532'
      }
    }
  ];

  const openModal = (memberId: number) => {
    setSelectedMember(memberId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'unset';
  };

  const selectedMemberData = selectedMember ? teamMembers.find(member => member.id === selectedMember) : null;

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 force-white">
          <h2 className="heading-2 mb-6 text-white">Meet Our Team</h2>
          <p className="body-large max-w-3xl mx-auto text-white">
            Our experienced team of legal professionals is dedicated to providing exceptional 
            legal services with integrity, expertise, and personalized attention.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="card group hover:shadow-xl transition-all duration-300">
              {/* Profile image placeholder */}
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-slate-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Profile Photo</p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="heading-4 mb-2">{member.name}</h3>
                <p className="text-gold-500 font-medium mb-4">{member.title}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy-900 mb-2">Practice Areas</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.practiceAreas.map((area, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact on card front */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-gold-500" />
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="body-small text-slate-700 hover:text-navy-900"
                    >
                      {member.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-gold-500" />
                    <a
                      href={`tel:${member.contact.phone}`}
                      className="body-small text-slate-700 hover:text-navy-900"
                    >
                      {member.contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => openModal(member.id)}
                  className="w-full bg-navy-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
                >
                  View Full Bio
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Modal */}
      {selectedMemberData && (
        <div className="fixed inset-0 bg-navy-900/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h2 className="heading-3">{selectedMemberData.name}</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left column - Basic info (no contact or languages in modal) */}
                <div className="lg:col-span-1">
                  <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-slate-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {selectedMemberData.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">Profile Photo</p>
                    </div>
                  </div>

                  {/* Name is already shown in modal header; omit extra details here */}
                </div>

                {/* Right column - Detailed info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="heading-4 mb-3">Biography</h4>
                    <p className="body-text">{selectedMemberData.fullBio}</p>
                  </div>

                  <div>
                    <h4 className="heading-4 mb-3">Education</h4>
                    <ul className="space-y-2">
                      {selectedMemberData.education.map((edu, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <GraduationCap className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                          <span className="body-text">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="heading-4 mb-3">Experience</h4>
                    <ul className="space-y-2">
                      {selectedMemberData.experience.map((exp, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="body-text">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
