import { useLocale } from '@/contexts/LocaleContext';
import { useLocation } from 'react-router-dom';

const CLINIC_IDS = {
  batYam: 'https://drromina.com/#clinic-bat-yam',
  telAviv: 'https://drromina.com/#clinic-tel-aviv',
  rishon: 'https://drromina.com/#clinic-rishon-lezion',
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://drromina.com/#physician",
  "name": "Dr. Romina Raykhshtat",
  "alternateName": [
    "Dr. Romina Reichstatt",
    "Dr. Romina Reichstadt",
    "Doctor Romina Raykhshtat"
  ],
  "description": "Injectable aesthetics specialist combining dental precision with facial rejuvenation. Treatments include Botulinum Therapy, Facial Sculpting, Lip Enhancement, Collagen Stimulation, Skin Quality, and ULTRAFORMER in Israel.",
  "url": "https://drromina.com",
  "knowsLanguage": ["he", "ru", "en", "de"],
  "sameAs": ["https://instagram.com/doctor_romina"],
  "workLocation": [
    { "@id": CLINIC_IDS.batYam },
    { "@id": CLINIC_IDS.telAviv },
    { "@id": CLINIC_IDS.rishon },
  ],
  "availableService": [
    { "@type": "MedicalProcedure", "name": "Botulinum Therapy" },
    { "@type": "MedicalProcedure", "name": "Facial Sculpting" },
    { "@type": "MedicalProcedure", "name": "Lip Enhancement" },
    { "@type": "MedicalProcedure", "name": "Collagen Stimulation" },
    { "@type": "MedicalProcedure", "name": "Skin Quality" },
    { "@type": "MedicalProcedure", "name": "ULTRAFORMER" },
  ],
};

const clinicSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": CLINIC_IDS.batYam,
    "name": "Face&Smile Aesthetics \u2014 Bat Yam",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rav Nissenbaum 37",
      "addressLocality": "Bat Yam",
      "addressCountry": "IL",
    },
    "medicalSpecialty": "Aesthetic Medicine",
    "availableService": { "@id": "https://drromina.com/#physician" },
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": CLINIC_IDS.telAviv,
    "name": "Face&Smile Aesthetics \u2014 Tel Aviv",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Menachem Begin 150",
      "addressLocality": "Tel Aviv",
      "addressCountry": "IL",
    },
    "medicalSpecialty": "Aesthetic Medicine",
    "availableService": { "@id": "https://drromina.com/#physician" },
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": CLINIC_IDS.rishon,
    "name": "Face&Smile Aesthetics \u2014 Rishon LeZion",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rothschild 78",
      "addressLocality": "Rishon LeZion",
      "addressCountry": "IL",
    },
    "medicalSpecialty": "Aesthetic Medicine",
    "availableService": { "@id": "https://drromina.com/#physician" },
  },
];

export function SchemaMarkup() {
  const { t } = useLocale();
  const location = useLocation();

  // Only emit FAQPage schema on services page
  const isServicesPage = /^\/(en|ru)?\/?(services)?$/.test(location.pathname) &&
    location.pathname.includes('services');

  const allFaqs: { q: string; a: string }[] = [];
  if (isServicesPage) {
    const serviceKeys = ['botulinum', 'sculpting', 'lips', 'collagen', 'skinQuality', 'ultraformer'] as const;
    serviceKeys.forEach((key) => {
      const service = t.services.items[key];
      if (service?.faq) {
        service.faq.forEach((item) => {
          allFaqs.push(item);
        });
      }
    });
  }

  const faqSchema = allFaqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      {clinicSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
