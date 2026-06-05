/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Stylist, Testimonial, FAQItem, BeforeAfterPair } from "./types";

export const SERVICES: Service[] = [
  {
    id: "hair-styling",
    title: "Artistic Hair Styling",
    description: "Couture blowouts, signature cuts, and runway-ready styling curated for your unique face shape and lifestyle.",
    category: "hair",
    startingPrice: 1200,
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    duration: "45 - 60 mins",
    iconName: "Scissors"
  },
  {
    id: "hair-coloring",
    title: "Signature Hair Coloring",
    description: "Multi-dimensional balayage, precision highlights, and bespoke glossing using premium, ammonia-free French dyes.",
    category: "hair",
    startingPrice: 3500,
    imageUrl: "https://images.unsplash.com/photo-1605497746444-ac9db1349176?auto=format&fit=crop&w=800&q=80",
    duration: "120 - 180 mins",
    iconName: "Palette"
  },
  {
    id: "hair-spa",
    title: "Therapeutic Hair Spa",
    description: "Deep nourishing wellness treatments, hair oil infusion, and scalp microcirculation massage to restore absolute radiance.",
    category: "hair",
    startingPrice: 1800,
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13df793f1a?auto=format&fit=crop&w=800&q=80",
    duration: "60 - 75 mins",
    iconName: "Sparkles"
  },
  {
    id: "bridal-makeup",
    title: "High-Definition Bridal Makeup",
    description: "Luxury bridal contouring, airbrush perfection, and long-wear styling designed to make you stunning under all lighting.",
    category: "makeup",
    startingPrice: 15000,
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    duration: "150 - 180 mins",
    iconName: "Heart"
  },
  {
    id: "facial-treatments",
    title: "Elite Facial Treatments",
    description: "Hydra-firming, gold collagen boost, and skin-purifying specialized facials utilizing premium French botanicals.",
    category: "skin",
    startingPrice: 2500,
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    duration: "60 - 90 mins",
    iconName: "Flower"
  },
  {
    id: "nail-art",
    title: "Gold Couture Nail Art",
    description: "Sculpted gel extensions, bespoke metallic detailing, and geometric minimalist nail styles by master nail technicians.",
    category: "nails",
    startingPrice: 1500,
    imageUrl: "https://images.unsplash.com/photo-1604654894610-df4906b241af?auto=format&fit=crop&w=800&q=80",
    duration: "45 - 90 mins",
    iconName: "Layers"
  },
  {
    id: "skin-care",
    title: "Bespoke Skin Care",
    description: "Advanced peptide therapy, localized micro-congestive clearing, and intensive moisturization rituals for a perfect matte glow.",
    category: "skin",
    startingPrice: 2200,
    imageUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
    duration: "50 - 75 mins",
    iconName: "Smile"
  },
  {
    id: "groom-packages",
    title: "Royal Groom & Gentlemen's Package",
    description: "Charcoal clarifying wash, hair texturing, premium hot towel beard styling, and organic essential oil head massage.",
    category: "grooming",
    startingPrice: 4000,
    imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
    duration: "90 - 120 mins",
    iconName: "Crown"
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: "stylist-1",
    name: "Ananya Mehta",
    role: "Creative Director & Hair Alchemist",
    bio: "With over 12 years of styling in Mumbai and Milan, Ananya specializes in high-luxury contour cuts and custom multi-dimensional balayage.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    specialties: ["Balayage", "Bespoke Hair Cuts", "Runway Styling"],
    experience: "12+ Years"
  },
  {
    id: "stylist-2",
    name: "Ranveer Singh",
    role: "Master Bridal & Editorial Makeup Artist",
    bio: "Ranveer's signature dewy, airbrush-finish bridal looks have graced elite fashion magazines. He crafts flawless personalized glow matching every undertone.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    specialties: ["Airbrush Bridal", "High-Definition Contour", "Red Carpet Aesthetics"],
    experience: "10+ Years"
  },
  {
    id: "stylist-3",
    name: "Dr. Priyesha Sen",
    role: "Senior Aesthetic Skin Specialist",
    bio: "Priya combines European botanical therapies with advanced dermal peptides. She leads the skin revitalization and organic treatment division.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    specialties: ["Peptide Resurfacing", "Advanced Hydrafacials", "Glow Therapies"],
    experience: "9+ Years"
  },
  {
    id: "stylist-4",
    name: "Vikram Rathore",
    role: "Royal Barber & Groom Consultant",
    bio: "A master of razor precision and visual flow, Vikram directs our gentlemen's lounge, keeping luxury beard designs and texturized hair meticulously classic.",
    imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=400&q=80",
    specialties: ["Hot Towel Shave", "Classical Texturing", "Scalp Rituals"],
    experience: "8+ Years"
  }
];

export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: "ba-hair-color",
    title: "Signature Hair Coloring",
    description: "Multi-dimensional golden balayage with ammonia-free French colors. Rejuvenating flat, monochrome tresses with custom highlights.",
    beforeUrl: "https://images.unsplash.com/photo-1595959183075-c1d0a16c3ced?auto=format&fit=crop&w=600&q=80",
    afterUrl: "https://images.unsplash.com/photo-1605497746444-ac9db1349176?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ba-hair-spa",
    title: "Therapeutic Hair Spa",
    description: "Deep moisture lock and hair revitalizing treatment. Resolving frizzled, dry strands into absolute silk-like smoothness.",
    beforeUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
    afterUrl: "https://images.unsplash.com/photo-1508186227413-bb1f5c85884a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ba-facial",
    title: "Signature Golden Peptide Hydra-Facial",
    description: "Correcting dry, fatigued patches on sensitive facial skin to reveal an ultra-flawless, hydrated, dewy de-congested radiance.",
    beforeUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    afterUrl: "https://images.unsplash.com/photo-1522337360788-8b13df793f1a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ba-nail-art",
    title: "Gold Couture Nail Art",
    description: "Sculpted gel extensions with bespoke metallic leafing. Restructuring uneven natural plates into immaculate, chic nail styles.",
    beforeUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80",
    afterUrl: "https://images.unsplash.com/photo-1604654894610-df4906b241af?auto=format&fit=crop&w=600&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Meera Oberoi",
    role: "Luxury Event Designer, Mumbai",
    reviewText: "The custom hair balayage and spa here are out of this world. I have visited salon spas in Paris and Paris doesn't match the warmth and precision of Ananya. The gold accents, the service, the herbal teas - absolute perfection.",
    rating: 5,
    date: "14 May, 2026",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "rev-2",
    name: "Aditya Roy Chaudhury",
    role: "Creative Director, South Mumbai",
    reviewText: "The royal groom experience is unparalleled. Truly a ₹1 lakh bespoke service feeling. From the hot razor towel style shave to the therapeutic scalp oil therapy, it's my monthly recharge.",
    rating: 5,
    date: "28 April, 2026",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "rev-3",
    name: "Kiran Gidwani",
    role: "Wellness Influencer & Curator, Dubai",
    reviewText: "Absolutely divine! The bridal trial makeup session left me breathless. Ranveer matches light density with skin-matching airbrush like a literal painter. My skin looked glowing all night long. Worth every rupee.",
    rating: 5,
    date: "03 June, 2026",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you offer pre-wedding customization consultations?",
    answer: "Yes, our Creative Director Ananya and Master Artist Ranveer schedule 1-on-1 private consultations to plan hair, skin, and makeup weeks in advance. We analyze outfits, event lighting, and skin biology for a flawless final look.",
    category: "Consultation"
  },
  {
    id: "faq-2",
    question: "Which luxury cosmetic brands do you use?",
    answer: "We use only ultra-luxury, clinically graded global brands including L'Oréal Professionnel Paris (Ammonia-Free Inoa), Dyson Pro Styling tools, Shiseido, Olaplex, Estée Lauder, Tom Ford, and premium organic French botanicals.",
    category: "Products"
  },
  {
    id: "faq-3",
    question: "What is your booking cancellation and rescheduling policy?",
    answer: "As we run custom boutique sessions to ensure complete focus on you with a dedicated team, we request a minimum of 24 hours notice to reschedule or cancel your luxury appointment.",
    category: "Booking"
  },
  {
    id: "faq-4",
    question: "How do I communicate custom preferences or food allergies?",
    answer: "When completing our Digital Appointment form or when our luxury client desk calls to confirm your preference, please specify any skin, cosmetic, hair allergies, as well as complimentary beverage selections (espresso, matcha tea, custom mocktails).",
    category: "Safety"
  },
  {
    id: "faq-5",
    question: "Do you offer in-hotel/residential salon service?",
    answer: "Yes. For select VIP packages, customized brides, and special events, our specialized elite team travels to high-end hotels and residences in South Mumbai, Bandra, and Juhu. Kindly connect via WhatsApp for bespoke rates.",
    category: "Premium"
  }
];
