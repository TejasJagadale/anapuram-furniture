// Centralized content for Anapuram Wooden Furniture Work.
// Swap the `image` URLs with the client's own photography before launch.

export const ICONS = {
  experience: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v20M4 7l8-5 8 5M4 7v10l8 5 8-5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  wood: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="9" ry="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3c2 3 2 15 0 18M6 6c3 2 9 2 12 0M6 18c3-2 9-2 12 0" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  design: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M4 20l4.2-1.2L19 8a2 2 0 0 0 0-2.8l-.2-.2a2 2 0 0 0-2.8 0L5.2 15.8 4 20z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  delivery: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.5" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  bed: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18v2M21 18v2M3 12V7h6v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  wardrobe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="16" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9.5" cy="12" r="0.6" fill="currentColor" />
      <circle cx="14.5" cy="12" r="0.6" fill="currentColor" />
    </svg>
  ),
  table: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 8h18M5 8v12M19 8v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 8l1.5-4h15L21 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  tvunit: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 18h18M9 14l-1 4M15 14l1 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  cabinet: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12h16M9 4v16M9 8h1M9 16h1M15 8h1M15 16h1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  office: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 19V6h9v13M13 11h7v8M4 19h16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  door: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.5" cy="12" r="0.7" fill="currentColor" />
    </svg>
  ),
  custom: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l2.4 5.1 5.6.7-4 3.9 1 5.6L12 15.8l-5 2.5 1-5.6-4-3.9 5.6-.7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
};

export const SERVICES = [
  {
    key: 'wooden-beds',
    icon: ICONS.bed,
    title: 'Wooden Beds',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    description: 'Solid teak and rosewood bed frames finished with hand-rubbed polish for lasting comfort.',
    features: ['Solid teak & rosewood', 'Hand-rubbed polish finish', 'Storage & king-size options'],
  },
  {
    key: 'wardrobes',
    icon: ICONS.wardrobe,
    title: 'Wardrobes',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80',
    description: 'Custom-fitted wardrobes with sliding or hinged shutters, built to your room dimensions.',
    features: ['Made-to-measure fitting', 'Sliding or hinged shutters', 'Internal shelving & drawers'],
  },
  {
    key: 'dining-tables',
    icon: ICONS.table,
    title: 'Dining Tables',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80',
    description: 'Solid-wood dining sets carved to seat your family, finished to resist daily wear.',
    features: ['4 to 10-seater layouts', 'Termite-resistant treatment', 'Matching chair sets'],
  },
  {
    key: 'tv-units',
    icon: ICONS.tvunit,
    title: 'TV Units',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
    description: 'Wall-mounted and floor TV units designed with concealed wiring and display shelving.',
    features: ['Concealed wire management', 'Open & closed storage', 'Wall-mounted or floor units'],
  },
  {
    key: 'kitchen-cabinets',
    icon: ICONS.cabinet,
    title: 'Kitchen Cabinets',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=900&q=80',
    description: 'Moisture-resistant modular kitchen cabinetry crafted for Kerala\u2019s climate.',
    features: ['Moisture-resistant carcass', 'Soft-close hinges', 'Modular layout planning'],
  },
  {
    key: 'office-furniture',
    icon: ICONS.office,
    title: 'Office Furniture',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80',
    description: 'Executive desks, workstations, and storage units for offices and home studies.',
    features: ['Executive desks & workstations', 'Cable-managed layouts', 'Matching storage cabinets'],
  },
  {
    key: 'wooden-doors',
    icon: ICONS.door,
    title: 'Wooden Doors',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=900&q=80',
    description: 'Solid-panel and carved wooden doors and frames built for durability and detail.',
    features: ['Solid-panel or carved designs', 'Weatherproof sealing', 'Custom frame sizing'],
  },
  {
    key: 'custom-furniture',
    icon: ICONS.custom,
    title: 'Custom Furniture',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    description: 'Bespoke pieces designed around your space, from concept sketch to final polish.',
    features: ['One-on-one design consultation', 'Built to exact measurements', 'Any wood species on request'],
  },
];

export const ADDITIONAL_SERVICES = [
  {
    key: 'furniture-repair',
    icon: ICONS.wood,
    title: 'Furniture Repair',
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&w=900&q=80',
    description: 'Structural repairs and joinery restoration for ageing or damaged wooden furniture.',
    features: ['Joint & frame restoration', 'Termite damage repair', 'Hardware replacement'],
  },
  {
    key: 'polishing',
    icon: ICONS.design,
    title: 'Polishing',
    image: 'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?auto=format&fit=crop&w=900&q=80',
    description: 'Melamine, PU, and traditional French polish finishes that renew and protect wood.',
    features: ['PU & melamine finishes', 'Traditional French polish', 'Colour-matched touch-ups'],
  },
  {
    key: 'wood-carving',
    icon: ICONS.custom,
    title: 'Wood Carving',
    image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=900&q=80',
    description: 'Hand-carved detailing on headboards, doors, and panels in traditional Kerala motifs.',
    features: ['Traditional Kerala motifs', 'Hand-chiselled detailing', 'Custom relief patterns'],
  },
];

export const GALLERY_ITEMS = [
  { title: 'Teak Dining Suite', category: 'Dining', image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80' },
  { title: 'Walk-in Wardrobe', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80' },
  { title: 'Carved Bed Frame', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80' },
  { title: 'Modular Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80' },
  { title: 'Executive Study Desk', category: 'Office', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80' },
  { title: 'Floating TV Console', category: 'Living Room', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80' },
];

export const TESTIMONIALS = [
  {
    name: 'Anitha Menon',
    location: 'Palakkad',
    quote:
      'The wardrobe and bed they built for our new home fit perfectly and the finishing is beautiful. Genuinely skilled craftsmen.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Coimbatore',
    quote:
      'We ordered a full dining set and TV unit. The wood quality and attention to detail was well above what we expected.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Sara Thomas',
    location: 'Palakkad',
    quote:
      'From the first consultation to installation, everything was on schedule. Our kitchen cabinets have held up beautifully.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
];

export const PROCESS_STEPS = [
  { icon: ICONS.design, title: 'Consultation', description: 'We visit your space and understand your style, budget, and needs.' },
  { icon: ICONS.custom, title: 'Design', description: 'Detailed drawings and wood samples are shared for your approval.' },
  { icon: ICONS.wood, title: 'Manufacturing', description: 'Skilled artisans hand-build every piece in our Palakkad workshop.' },
  { icon: ICONS.delivery, title: 'Installation', description: 'Finished furniture is delivered and fitted in your home with care.' },
];
