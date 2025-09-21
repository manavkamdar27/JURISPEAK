import Script from 'next/script';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "JURISPEAK Advocates & Consultants",
    "description": "Premier legal services in Mumbai, delivering excellence in advocacy and consultation with unwavering commitment to our clients' success.",
    "url": "https://jurispeak.co.in",
    "logo": "https://jurispeak.co.in/logo.png",
    "image": "https://jurispeak.co.in/og-image.jpg",
    "telephone": "+91-98197 27270",
    "email": "mail@jurispeak.co.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 101, E-Wing, Prashal, Sant Janabai Road, Vile Parle (E)",
      "addressLocality": "Mumbai",
      "postalCode": "400 057",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.1000",
      "longitude": "72.8500"
    },
    "openingHours": "Mo-Fr 09:00-18:00,Sa 09:00-13:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "19.1000",
        "longitude": "72.8500"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Law",
            "description": "Comprehensive corporate legal services for businesses of all sizes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Civil Litigation",
            "description": "Expert representation in civil disputes and court proceedings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Law",
            "description": "Sensitive and professional family legal services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real Estate Law",
            "description": "Complete real estate legal solutions for buyers and sellers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Employment Law",
            "description": "Workplace legal issues and employment disputes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intellectual Property",
            "description": "Protection and enforcement of intellectual property rights"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Dinesh Rane",
      "jobTitle": "Partner",
      "email": "dinesh.rane@jurispeak.co.in",
      "telephone": "+91-98197 27270",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "M.B.A. (Finance)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "L.L.B."
        }
      ]
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Dinesh Rane",
        "jobTitle": "Partner",
        "email": "dinesh.rane@jurispeak.co.in",
        "telephone": "+91-98197 27270",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "M.B.A. (Finance)"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "L.L.B."
          }
        ]
      },
      {
        "@type": "Person",
        "name": "Priya Sharma",
        "jobTitle": "Senior Associate",
        "email": "priya.sharma@jurispeak.co.in",
        "telephone": "+91-98765 43210",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "L.L.B."
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "L.L.M. (Corporate Law)"
          }
        ]
      },
      {
        "@type": "Person",
        "name": "Rajesh Kumar",
        "jobTitle": "Associate",
        "email": "rajesh.kumar@jurispeak.co.in",
        "telephone": "+91-98765 43211",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "L.L.B."
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "B.Com"
          }
        ]
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://linkedin.com/company/jurispeak",
      "https://twitter.com/jurispeak"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jurispeak.co.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://jurispeak.co.in/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://jurispeak.co.in/#services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Team",
        "item": "https://jurispeak.co.in/#team"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Careers",
        "item": "https://jurispeak.co.in/#careers"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": "https://jurispeak.co.in/#contact"
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
};

export default StructuredData;
