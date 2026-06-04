// ═══════════════════════════════════════════════════════════════════════════════
// CENTRAL CONFIGURATION — Edit all links and personal info here
// ═══════════════════════════════════════════════════════════════════════════════

export const config = {
  personal: {
    name: "Siri Vennela Kammari",
    title: "AI Engineer | Machine Learning Enthusiast",
    tagline:
      "Building intelligent systems through AI, Machine Learning, and scalable software solutions.",
    email: "sirivennela.635@gmail.com",
    location: "Hyderabad, Telangana, India",
    resumePath: "/resume/Siri_Vennela_Kammari_Resume.pdf",
    profileImage: "/images/profile.jpg",
  },

  socials: {
    github: "https://github.com/Ksiri03",
    linkedin: "https://www.linkedin.com/in/siri-vennela-9375a42b8/",
  },

  // Formspree endpoint for contact form
  // Sign up at https://formspree.io and create a form to get your endpoint
  formspree: {
    endpoint: "https://formspree.io/f/xlgvqode",
  },

  // Typing animation strings
  typingStrings: [
    "AI Engineer",
    "ML Developer",
    "Problem Solver",
    "Hackathon Participant",
  ],
} as const;
