export const siteConfig = {
  brand: "Noor-ul-Quran",
  brandSuffix: "Academy",
  tagline: "Guiding Hearts Through the Light of the Quran",
  description:
    "Learn the Holy Quran online with Noor-ul-Quran Academy. Explore personalized Hifz, Nazra, and Tajweed classes through video and audio calls, with dedicated female instruction available.",

  whatsapp: {
    number: "[WHATSAPP_NUMBER]",
    display: "[WhatsApp Number — To Be Added]",
    prefilledMessage:
      "Assalamu Alaikum, I am interested in online Quran classes at Noor-ul-Quran Academy. Please share the available courses, teaching methods, and timings.",
  },

  email: {
    address: "[ACADEMY_EMAIL]",
    display: "[Email Address — To Be Added]",
    subject: "Enquiry About Online Quran Classes — Noor-ul-Quran Academy",
    body: "Assalamu Alaikum,\n\nI would like to enquire about online Quran classes.\n\nName:\nStudent's Age:\nPreferred Course:\nPreferred Teaching Method:\n\nJazak Allah.",
  },

  teachers: [
    {
      id: "qari",
      name: "[Qari Name]",
      role: "Qualified Qari",
      qualifications: "[Islamic Degrees and Qualifications — To Be Added]",
      experience: "[Experience — To Be Added]",
      specialization: "[Hifz, Nazra, Tajweed — Confirm Before Publishing]",
      biography: "[Teacher Biography — To Be Added]",
      teaches: "Students of all ages",
      initials: "QN",
    },
    {
      id: "hafiza",
      name: "[Daughter's Name]",
      role: "Female Quran Teacher",
      qualifications: "Hafiza-e-Quran · [Additional Qualifications — To Be Added]",
      experience: "[Experience — To Be Added]",
      specialization: "[Confirm Available Courses]",
      biography: "[Teacher Biography — To Be Added]",
      teaches: "Female students only",
      initials: "HQ",
    },
  ],

  courses: [
    {
      id: "nazra",
      title: "Nazra Quran",
      icon: "BookOpen",
      description:
        "Learn to read the Holy Quran correctly with guided practice and individual attention.",
      features: [
        "Step-by-step Quran reading",
        "Correct pronunciation",
        "Improved fluency and confidence",
        "Lessons suited to the student's current level",
      ],
      enquiry:
        "Assalamu Alaikum, I would like to enquire about the Nazra Quran course at Noor-ul-Quran Academy.",
    },
    {
      id: "hifz",
      title: "Hifz-ul-Quran",
      icon: "Sparkles",
      description:
        "Begin your Quran memorization journey with a structured learning and revision routine.",
      features: [
        "Guided memorization",
        "Regular revision sessions",
        "Individual learning pace",
        "Progress monitoring",
      ],
      enquiry:
        "Assalamu Alaikum, I would like to enquire about the Hifz-ul-Quran course at Noor-ul-Quran Academy.",
    },
    {
      id: "tajweed",
      title: "Quran with Tajweed",
      icon: "Mic",
      description:
        "Improve your Quran recitation by learning the rules of Tajweed and practicing correct pronunciation.",
      features: [
        "Introduction to Tajweed rules",
        "Guided recitation practice",
        "Pronunciation correction",
        "Individual feedback",
      ],
      enquiry:
        "Assalamu Alaikum, I would like to enquire about the Quran with Tajweed course at Noor-ul-Quran Academy.",
    },
    {
      id: "beginners",
      title: "Quran for Beginners",
      icon: "GraduationCap",
      description:
        "A welcoming starting point for children and adults who want to begin learning the Quran from the basics.",
      features: [
        "Beginner-friendly lessons",
        "Gradual skill development",
        "Guided practice",
        "Personalized learning support",
      ],
      enquiry:
        "Assalamu Alaikum, I would like to enquire about the Quran for Beginners course at Noor-ul-Quran Academy.",
    },
  ],

  verses: [
    {
      arabic: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
      translation:
        "And We have certainly made the Quran easy to remember, so is there anyone who will be mindful?",
      reference: "Surah Al-Qamar · 54:17",
    },
    {
      arabic: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ",
      translation: "Indeed, this Quran guides to that which is most suitable.",
      reference: "Surah Al-Isra · 17:9",
    },
    {
      arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
      translation: "And say, 'My Lord, increase me in knowledge.'",
      reference: "Surah Taha · 20:114",
    },
  ],

  closingVerse: {
    arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
    translation: "And say, 'My Lord, increase me in knowledge.'",
    reference: "Surah Taha · 20:114",
  },
};

export function buildWhatsAppLink(message?: string) {
  const number = siteConfig.whatsapp.number.replace(/[^0-9]/g, "");
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.prefilledMessage);
  const base = number ? `https://wa.me/${number}` : "https://wa.me/";
  return `${base}?text=${text}`;
}

export function buildMailtoLink(subject?: string, body?: string) {
  const address = siteConfig.email.address;
  const params = new URLSearchParams();
  params.set("subject", subject ?? siteConfig.email.subject);
  if (body ?? siteConfig.email.body) {
    params.set("body", body ?? siteConfig.email.body);
  }
  return `mailto:${address}?${params.toString()}`;
}
