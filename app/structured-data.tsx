export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://tatwermisr.org/#organization",
        name: "مدينة مصر للإسكان والتعمير",
        alternateName: "Madinat Misr",
        url: "https://tatwermisr.org",
        logo: { "@type": "ImageObject", url: "https://tatwermisr.org/logo.png" },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+20-100-8900076",
          contactType: "Customer Service",
          areaServed: "EG",
          availableLanguage: ["Arabic"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://tatwermisr.org/#website",
        url: "https://tatwermisr.org",
        name: "مدينة مصر للإسكان والتعمير",
        publisher: { "@id": "https://tatwermisr.org/#organization" },
        inLanguage: "ar",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
