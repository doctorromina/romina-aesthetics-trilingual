import { useLocale } from '@/contexts/LocaleContext';

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Romina Raykhshtat",
  "alternateName": ["ד״ר רומינה רייכשטט", "Dr. Romina", "Ромина Райхштат"],
  "description": "Injectable aesthetics specialist with a dental surgery background. Specializing in botulinum therapy, facial sculpting, collagen stimulation, and ULTRAFORMER SMAS lifting.",
  "medicalSpecialty": "Aesthetic Medicine",
  "knowsLanguage": ["he", "ru", "en", "de"],
  "url": "https://drromina.com",
  "availableService": [
    { "@type": "MedicalProcedure", "name": "Botulinum Therapy" },
    { "@type": "MedicalProcedure", "name": "Facial Sculpting" },
    { "@type": "MedicalProcedure", "name": "Lip Enhancement" },
    { "@type": "MedicalProcedure", "name": "Collagen Stimulation" },
    { "@type": "MedicalProcedure", "name": "Skin Quality Treatments" },
    { "@type": "MedicalProcedure", "name": "ULTRAFORMER SMAS Lifting" },
  ],
};

const clinicSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Face&Smile Aesthetics — Bat Yam",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rav Nissenbaum 37",
      "addressLocality": "Bat Yam",
      "addressCountry": "IL",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Face&Smile Aesthetics — Tel Aviv",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Menachem Begin 150",
      "addressLocality": "Tel Aviv",
      "addressCountry": "IL",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Face&Smile Aesthetics — Rishon LeZion",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rothschild 78",
      "addressLocality": "Rishon LeZion",
      "addressCountry": "IL",
    },
  },
];

export function SchemaMarkup() {
  const { t } = useLocale();

  // Build FAQPage schema from all service FAQs
  const allFaqs: { q: string; a: string }[] = [];
  const serviceKeys = ['botulinum', 'sculpting', 'lips', 'collagen', 'skinQuality', 'ultraformer'] as const;

  serviceKeys.forEach((key) => {
    const service = t.services.items[key];
    if (service?.faq) {
      service.faq.forEach((item) => {
        allFaqs.push(item);
      });
    }
  });

  const faqSchema = {
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
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
