/**
 * Structured Data (JSON-LD) component for SEO.
 * Provides Person schema markup for Google Search to show rich results
 * such as knowledge panels, contact info, and professional summaries.
 */
export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Edgar Osvaldo Pech García",
    url: "https://edgaropech.dev",
    image: "https://edgaropech.dev/me.jpg",
    jobTitle: "Software Engineer",
    description:
      "Senior Full-Stack Engineer and AI Integration Developer specializing in React, Next.js, React Native, Supabase, Elixir, and AWS cloud solutions.",
    email: "contact@edgaropech.dev",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Supabase",
      "LangChain",
      "Generative UI",
      "AWS",
      "Elixir",
      "Phoenix Framework",
      "Python",
      "Firebase",
    ],
    sameAs: [
      "https://github.com/edgaropechdev",
      "https://www.linkedin.com/in/edgaropechdev/",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Exploration & Discovery Technologies",
        url: "https://www.vemio.com.mx",
      },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Politécnica de Quintana Roo",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
