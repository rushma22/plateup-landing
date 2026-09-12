export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#demo", label: "Demo" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const;

export const featuredWork = [
  {
    title: "Guest ordering",
    description:
      "Guests scan a table QR, browse your menu, and send orders straight to the kitchen — no app download required.",
    image: "/guest-ordering.png",
    video: "",
    href: "#demo",
    cta: "Learn more",
  },
  {
    title: "Kitchen board",
    description:
      "Staff run a live order board with real-time status — Received, Cooking, Ready — so every table stays in sync.",
    image: "/kitchen.png",
    video: "",
    href: "#demo",
    cta: "View demo",
  },
] as const;

export const contactEmail = "plateup.company@gmail.com";

const whatsappMessage = encodeURIComponent(
  "Hi PlateUp! I'd like to learn more about your smart menu for my restaurant.",
);

export const contact = {
  whatsappDisplay: "+94 70 137 2477",
  whatsappHref: `https://wa.me/94701372477?text=${whatsappMessage}`,
  instagram: "https://www.instagram.com/plateup_official_/",
  linkedin: "https://www.linkedin.com/company/plateup-smart-menu",
  facebook: "https://www.facebook.com/profile.php?id=61594232570090",
  tiktok: "https://www.tiktok.com/@plateup_official_",
} as const;

export const menuItems = [
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    price: 4.5,
    category: "Starters",
    prep: 8,
    image: "/dish-garlic-bread.png",
  },
  {
    id: "classic-burger",
    name: "Classic Burger",
    price: 14.5,
    category: "Mains",
    prep: 18,
    image: "/dish-classic-burger.png",
  },
  {
    id: "margherita",
    name: "Margherita Pizza",
    price: 12,
    category: "Mains",
    prep: 16,
    image: "/dish-margherita.png",
  },
  {
    id: "lemonade",
    name: "House Lemonade",
    price: 3.5,
    category: "Drinks",
    prep: 3,
    image: "/dish-lemonade.png",
  },
] as const;

export const features = [
  {
    title: "No guest account",
    body: "Diners scan the table QR and order on their phone. No app download. No sign-up.",
  },
  {
    title: "Live kitchen status",
    body: "Orders go straight to the kitchen. Guests watch Received → Cooking → Ready in real time.",
  },
  {
    title: "Menu + order board",
    body: "Staff update the digital menu and run a live order board — photos, prices, prep times, availability.",
  },
] as const;

export const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: 4990,
    priceDisplay: "4,990",
    period: "/month",
    billed: "Billed monthly · LKR",
    blurb: "Full PlateUp, billed month to month.",
    featured: false,
    badge: "",
    features: [
      "QR codes per table",
      "Digital menu with photos",
      "Live kitchen order board",
      "Prep-time ETAs for guests",
      "Cancel anytime",
    ],
  },
  {
    id: "yearly",
    name: "Yearly",
    price: 3990,
    priceDisplay: "3,990",
    period: "/month",
    billed: "Billed annually · LKR",
    blurb: "Same product, lower monthly rate when you pay yearly.",
    featured: true,
    badge: "Best value",
    features: [
      "QR codes per table",
      "Digital menu with photos",
      "Live kitchen order board",
      "Prep-time ETAs for guests",
      "Save Rs. 12,000 per year",
    ],
  },
] as const;
