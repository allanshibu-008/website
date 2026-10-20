export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  featuredImage: string;
  galleryImages: string[];
  capabilities: string[];
  equipment: string[];
  standards: string[];
  stats: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'aluminium' | 'steel' | 'civil' | 'mechanical' | 'piping' | 'industrial';
  categoryLabel: string;
  location: string;
  client: string;
  year: string;
  image: string;
  overview: string;
  scope: string[];
  highlight: string;
}

export interface StatItem {
  number: string;
  suffix?: string;
  label: string;
  subtext: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  location: string;
  rating: number;
}

export const COMPANY_STATS: StatItem[] = [
  { number: "15+", label: "Years Experience", subtext: "Established excellence across the Kingdom" },
  { number: "250+", label: "Projects Completed", subtext: "Commercial, industrial & institutional" },
  { number: "100+", label: "Skilled Professionals", subtext: "Certified engineers & master craftsmen" },
  { number: "100%", label: "Client Satisfaction", subtext: "Zero-compromise on quality & delivery" },
  { number: "12,000+", suffix: "m²", label: "Fabrication Facility", subtext: "State-of-the-art CNC & assembly lines" },
  { number: "0", label: "Lost Time Incidents", subtext: "Strict Aramco & OSHA safety compliance" },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "aluminium-fabrication",
    slug: "aluminium-fabrication",
    title: "Aluminium Fabrication & Glazing",
    tagline: "Precision Engineering & Architectural Elegance",
    shortDesc: "Saudi Arabia's premier manufacturer of high-performance architectural curtain walls, structural glazing, thermal break doors, windows, and custom ACP cladding.",
    fullDesc: "Hashem General Contracting Est. operates a specialized, high-capacity aluminium and architectural glazing facility equipped with cutting-edge European CNC machining centers. We engineer, fabricate, and install architectural building envelopes compliant with SASO and international ASTM/BS standards for prestigious commercial towers, institutional landmarks, and luxury complexes.",
    iconName: "Layers",
    featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    ],
    capabilities: [
      "Unitized & Stick Curtain Wall Systems",
      "Structural Silicone Glazing (SSG)",
      "High-Performance Thermal Break Windows & Doors",
      "Aluminium Composite Panel (ACP) Cladding",
      "Architectural Sun Louvers & Aerofoil Blades",
      "Frameless Glass Balustrades & Stainless Steel Handrails",
      "Acoustic & Fire-Rated Glass Partitions",
      "Automated Sliding, Revolving & Swing Sensor Doors",
      "Skylights, Domes & Spider Glazing Facades",
      "Custom Extrusion Fabrication & Powder Coating / Anodizing"
    ],
    equipment: [
      "5-Axis Dual-Head CNC Profile Machining Centers (Emmegi / FOM)",
      "Automated Double-Miter Compound Cutting Saws",
      "CNC Corner Crimping & Milling Machines",
      "Automated Insulated Glass Unit (IGU) Sealing Lines",
      "Multi-Station Punching & Hydraulic Press Units",
      "In-House Certified Quality Control & Water Tightness Test Rig"
    ],
    standards: ["SASO Compliant", "ASTM E283 / E330 / E331", "AAMA 501", "ISO 9001:2015"],
    stats: [
      { label: "Annual Facade Output", value: "85,000 m²" },
      { label: "Profile Precision Tolerance", value: "±0.2 mm" },
      { label: "Wind Load Rating", value: "Up to 4.5 kPa" }
    ],
    faqs: [
      {
        question: "Which profile systems do you work with?",
        answer: "We fabricate and install both proprietary Hashem systems and leading international systems including Schüco, Reynaers, Technal, Gutmann, and Gulf Extrusions based on client and consultant specifications."
      },
      {
        question: "Are your curtain wall systems compliant with Saudi Building Code (SBC)?",
        answer: "Yes, all our facade designs undergo rigorous thermal (U-value), structural wind load, seismic, and water penetration simulations certified to Saudi Building Code (SBC 201/601/801) and SASO standards."
      }
    ]
  },
  {
    id: "civil-works",
    slug: "civil-works",
    title: "Civil Construction & Infrastructure",
    tagline: "Robust Foundations, Enduring Structures",
    shortDesc: "Comprehensive turnkey civil engineering and building construction for industrial plants, commercial centers, residential complexes, and heavy infrastructure across KSA.",
    fullDesc: "From comprehensive site preparation and deep foundation works to multi-story reinforced concrete structures and premium interior finishing, Hashem General Contracting delivers turnkey civil contracting. We handle complex ground engineering, heavy equipment foundations, and architectural finishes with uncompromising safety and precision.",
    iconName: "Building2",
    featuredImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"
    ],
    capabilities: [
      "Commercial & Industrial Building Construction",
      "Mass Reinforced Concrete (RC) Foundations & Superstructures",
      "Underground Water & Fuel Storage Tanks",
      "Reinforced Cable & Utility Trenches",
      "Heavy-Duty Retaining Walls & Shoring Systems",
      "Road Concreting, Subbase & Asphalt Paving",
      "Industrial Epoxy Floor Coating & Polyurethane Screeds",
      "High-Performance Waterproofing & Membrane Insulation",
      "Interior Architectural Fit-Out & Gypsum Partitions",
      "Industrial Laboratory Construction & Clean Rooms"
    ],
    equipment: [
      "Transit Concrete Mixers & High-Reach Boom Pumps",
      "Heavy Earthmoving Excavators, Wheel Loaders & Graders",
      "Vibratory Asphalt & Soil Compactors",
      "Laser-Guided Concrete Screeders & Power Trowels",
      "Total Stations & Digital 3D Laser Scanning Survey Gear"
    ],
    standards: ["Saudi Aramco Civil Specs", "ACI 318 / 301", "ASTM C94", "SBC 304"],
    stats: [
      { label: "Concrete Placed", value: "350,000+ m³" },
      { label: "Built-up Area Delivered", value: "1.2M m²" },
      { label: "On-Time Completion Rate", value: "99.4%" }
    ],
    faqs: [
      {
        question: "Do you execute heavy industrial machine foundations with high vibration damping?",
        answer: "Yes, we specialize in high-spec dynamic equipment foundations for turbines, compressors, stamping presses, and rolling mills, utilizing epoxy grouts and engineered anchor bolt assemblies."
      }
    ]
  },
  {
    id: "steel-fabrication",
    slug: "steel-fabrication",
    title: "Structural Steel Fabrication",
    tagline: "Heavy Industrial Strength & Certified Welding",
    shortDesc: "Design, CNC cutting, automated fabrication, shot blasting, and on-site erection of heavy industrial steel buildings, warehouse frames, pipe racks, and platforms.",
    fullDesc: "Hashem's dedicated steel division fabricates high-capacity structural steel for industrial plants, warehouses, hangars, and petrochemical facilities. With ASME and AWS certified master welders, CNC plasma cutting tables, and overhead crane bays, we produce structures engineered to withstand extreme environmental loads.",
    iconName: "Hammer",
    featuredImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1000&q=80"
    ],
    capabilities: [
      "Pre-Engineered Buildings (PEB) & Heavy Hot-Rolled Structures",
      "Multi-Tier Petrochemical & Industrial Pipe Racks",
      "Industrial Warehouses, Logistics Hubs & Aircraft Hangars",
      "Heavy Equipment Platforms, Mezzanines & Catwalks",
      "OSHA-Compliant Industrial Safety Ladders & Caged Ladders",
      "Custom Handrails, Balustrades & Industrial Stairs",
      "Overhead Crane Runway Beams & Gantry Systems",
      "Automated Sliding Gates & Heavy Steel Security Doors",
      "CNC High-Definition Plasma & Oxy-Fuel Plate Cutting",
      "SA 2.5 Automated Shot Blasting & Epoxy Coating"
    ],
    equipment: [
      "CNC High-Definition Plasma Plate Cutting Table (6m x 2m)",
      "Heavy Hydraulic Beam Punching, Drilling & Sawing Line",
      "Automatic Submerged Arc Welding (SAW) Beam Assemblers",
      "15-Ton & 10-Ton Indoor Overhead Bridge Cranes",
      "Enclosed Blast Room with Recyclable Steel Grit Media"
    ],
    standards: ["AISC 360 / AWS D1.1", "EN 1090-2 EXC3", "SSPC Paint Specs", "ASME Section IX"],
    stats: [
      { label: "Monthly Tonnage Capacity", value: "1,200 MT" },
      { label: "Welder Qualification", value: "100% Certified 6G" },
      { label: "NDT Inspection Pass Rate", value: "99.8%" }
    ],
    faqs: [
      {
        question: "What Non-Destructive Testing (NDT) do you conduct on structural welds?",
        answer: "We perform full NDT including Visual Testing (VT), Magnetic Particle Testing (MPI), Dye Penetrant Testing (DPT), Ultrasonic Testing (UT), and Radiographic Testing (RT) through certified Level II/III inspectors."
      }
    ]
  },
  {
    id: "mechanical-hvac",
    slug: "mechanical-hvac",
    title: "Mechanical Engineering & HVAC",
    tagline: "Engineered Climate Control & Mechanical Systems",
    shortDesc: "Complete industrial HVAC, chilled water plants, AHU networks, cleanroom ventilation, boilers, heat exchangers, and firefighting installations.",
    fullDesc: "We provide end-to-end mechanical contracting for industrial facilities, commercial complexes, and data centers. Our certified mechanical engineers handle load calculations (HAP), chiller plant optimization, ductwork manufacturing, equipment erection, and rigorous Testing, Adjusting, and Balancing (TAB).",
    iconName: "Wind",
    featuredImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
    ],
    capabilities: [
      "Central Chilled Water Systems & Water/Air-Cooled Chillers",
      "Air Handling Units (AHU) & Fan Coil Units (FCU) Installation",
      "Automated CNC Galvanized Iron (GI) & PIR Duct Fabrication",
      "Industrial Kitchen & Plant Exhaust Ventilation Systems",
      "Boilers, Heat Exchangers & Steam Generation Networks",
      "Overhead Crane Installation, Commissioning & Load Testing",
      "Civil Defense Approved Fire Suppression & Sprinkler Networks",
      "Building Management Systems (BMS) & DDC Controls Integration",
      "Thermal & Acoustic Insulation (Fiberglass / Armaflex / Rockwool)",
      "Testing, Adjusting & Balancing (TAB) Certified Services"
    ],
    equipment: [
      "CNC Auto Duct Former Line (Coil to Rectangular Duct)",
      "CNC Plasma Sheet Metal Cutter for Fittings",
      "Hydraulic Pipe Grooving & Threading Machines",
      "Digital Electronic Flow Hoods & Micromanometers",
      "Thermal Imaging & Ultrasonic Flow Meter Diagnostic Kits"
    ],
    standards: ["ASHRAE Standards", "SMACNA Duct Construction", "NFPA 13 / 14 / 20", "AHRI Certified"],
    stats: [
      { label: "Installed Cooling Capacity", value: "45,000+ TR" },
      { label: "Ductwork Fabricated", value: "280,000+ m²" },
      { label: "Energy Savings Optimization", value: "Up to 30%" }
    ],
    faqs: [
      {
        question: "Do you supply and install fire protection systems compliant with Saudi Civil Defense?",
        answer: "Yes, our fire fighting team installs wet and dry sprinkler networks, fire pump sets (UL/FM listed), FM200/Novec gas suppression systems, and clean agent systems certified to Civil Defense standards."
      }
    ]
  },
  {
    id: "piping-works",
    slug: "piping-works",
    title: "Industrial Piping & Utility Systems",
    tagline: "Safe High-Pressure Fluid & Gas Transfer",
    shortDesc: "Fabrication, welding, hydrotesting, and commissioning of stainless steel, carbon steel, duplex, and thermoplastic piping for industrial plants, RO facilities, and chilled water networks.",
    fullDesc: "Hashem delivers specialized process and utility piping solutions for industrial manufacturing plants, food & beverage facilities, pharmaceutical facilities, RO desalination units, and chilled water distribution. We utilize orbital TIG welding and rigorous hydrostatic testing to guarantee zero leaks.",
    iconName: "Cpu",
    featuredImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
    ],
    capabilities: [
      "Stainless Steel 304 / 316L Process Lines & Sanitary Piping",
      "High-Pressure Natural Gas & Industrial Gas Distribution",
      "Compressed Air Networks (Aluminium & Schedule 40 Steel)",
      "District Cooling Chilled Water Headers & Underground Piping",
      "Cold Room Refrigerant & Glycol Loop Lines",
      "Solvent, Chemical & Acid Drainage Transfer Piping",
      "Industrial Thermoplastic (uPVC, cPVC, HDPE, PP-R) Fusion",
      "Reverse Osmosis (RO) Water Desalination Plant Piping",
      "Sewage Treatment & Industrial Wastewater Network Piping",
      "Comprehensive Hydrostatic, Pneumatic & Helium Leak Testing"
    ],
    equipment: [
      "Orbital TIG Pipe Welding Machines",
      "High-Pressure Hydrostatic Test Pumps (Up to 10,000 PSI)",
      "Electrofusion & Butt-Fusion HDPE Welding Machines",
      "Pipe Bevelling & Automatic Cold Cutting Equipment",
      "Borescope Camera Internal Video Inspection Units"
    ],
    standards: ["ASME B31.3 Process Piping", "ASME B31.1 Power Piping", "API 1104", "DIN 8077/8078"],
    stats: [
      { label: "Pipelines Laid", value: "180+ Kilometers" },
      { label: "Pressure Rating Handled", value: "Up to 350 Bar" },
      { label: "Hydrotest First-Time Pass", value: "100%" }
    ],
    faqs: [
      {
        question: "Can you perform food-grade sanitary orbital welding?",
        answer: "Yes, we specialize in food-grade and pharmaceutical SS316L tubing with automatic orbital TIG welding, argon backing gas purging, and internal borescope inspection for zero bacterial traps."
      }
    ]
  },
  {
    id: "industrial-maintenance",
    slug: "industrial-maintenance",
    title: "Industrial Plant Maintenance & Turnaround",
    tagline: "Rapid Response & Operational Continuity",
    shortDesc: "Comprehensive plant turnaround services, structural retrofitting, equipment overhaul, anti-corrosion recoating, and emergency maintenance across Saudi industrial cities.",
    fullDesc: "Keeping mission-critical industrial assets operating with peak efficiency is our mission. Hashem provides scheduled plant turnarounds, emergency structural repairs, facade restoration, mechanical equipment overhauls, and protective coating applications in Jubail, Yanbu, Dammam 2nd Industrial City, and Riyadh Industrial Cities.",
    iconName: "Wrench",
    featuredImage: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80"
    ],
    capabilities: [
      "Scheduled Plant Shutdowns & Emergency Turnarounds",
      "Structural Steel Reinforcement & Corroded Member Replacement",
      "Facade Maintenance, Silicone Joint Resealing & Glass Replacement",
      "Heavy Rotating Equipment Alignment & Overhaul",
      "Storage Tank Floor Inspection, Cleaning & Welded Repairs",
      "Anti-Corrosion Blasting & Specialized Industrial Coating",
      "HVAC Chiller Tube Descaling & Compressor Reconditioning",
      "24/7 Rapid Response Maintenance Contracting"
    ],
    equipment: [
      "Mobile Air Compressors & Blasting Pots",
      "Laser Shaft Alignment Diagnostic Instruments",
      "Scaffolding Systems (Certified BS 1139 / EN 12811)",
      "High-Pressure Hydrojet Cleaning Systems (40,000 PSI)"
    ],
    standards: ["Aramco Safety Manual", "OSHA 1910 General Industry", "SSPC Standards"],
    stats: [
      { label: "Turnaround Deadlines Met", value: "100%" },
      { label: "Emergency Response Time", value: "< 2 Hours" },
      { label: "Manhours without LTI", value: "1.8 Million" }
    ],
    faqs: [
      {
        question: "Do you supply certified multi-craft maintenance crews on call?",
        answer: "Yes, we deploy certified scaffolders, pipefitters, welders, riggers, and mechanical technicians with full Aramco / SABIC vendor passes."
      }
    ]
  }
];

export const INDUSTRIES_SERVED = [
  {
    name: "Oil & Gas & Petrochemicals",
    desc: "Pipe racks, structural steel platforms, blast-resistant doors, industrial maintenance, and plant civil works.",
    icon: "Flame"
  },
  {
    name: "Manufacturing & Heavy Industry",
    desc: "Heavy machinery foundations, gantry crane beams, industrial ventilation, and epoxy flooring systems.",
    icon: "Factory"
  },
  {
    name: "Commercial Towers & Headquarters",
    desc: "Iconic structural glazing, unitized curtain walls, thermal-break facades, and high-efficiency HVAC chillers.",
    icon: "Building"
  },
  {
    name: "Logistics Hubs & Warehouses",
    desc: "Large-span pre-engineered steel buildings, heavy-duty concrete slabs, and automated loading bay gates.",
    icon: "PackageCheck"
  },
  {
    name: "Government & Infrastructure",
    desc: "Civic institutions, utility tunnels, secure access control doors, and high-spec public works.",
    icon: "Landmark"
  },
  {
    name: "Healthcare & Specialized Hospitals",
    desc: "Cleanroom partitions, hygienic HVAC air filtration, medical gas lines, and acoustic architectural glazing.",
    icon: "Activity"
  },
  {
    name: "Educational & University Campuses",
    desc: "Auditoriums, sports complex steel frames, sun louvers, laboratory installations, and structural facades.",
    icon: "GraduationCap"
  },
  {
    name: "Luxury Residential & Compounds",
    desc: "Bespoke architectural aluminium sliding systems, frameless glass balustrades, and structural villas.",
    icon: "Home"
  },
  {
    name: "Water & Desalination Plants",
    desc: "Stainless steel piping headers, RO treatment plant support structures, chemical storage civil works.",
    icon: "Droplets"
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "Engineering Excellence & BIM Integration",
    description: "Our in-house team of licensed civil, structural, and facade engineers utilizes advanced 3D CAD and Revit BIM modeling to eliminate site clashes before fabrication begins.",
    icon: "Compass"
  },
  {
    title: "Advanced 12,000 m² Fabrication Hub",
    description: "Equipped with European 5-axis CNC machining centers, automated cutting saws, and automated welding lines ensuring tight tolerances (±0.2mm).",
    icon: "Cpu"
  },
  {
    title: "Uncompromising Quality & Standards",
    description: "Every batch of raw aluminium, steel, and concrete conforms strictly to SASO, ASTM, DIN, and Saudi Aramco quality specifications with 100% material traceability.",
    icon: "ShieldCheck"
  },
  {
    title: "Safety First (Zero-Compromise HSE)",
    description: "Proud recipient of multiple safety awards with over 1.8 million safe manhours. Stringent adherence to OSHA and Saudi Civil Defense regulations.",
    icon: "HardHat"
  },
  {
    title: "Turnkey Accountability & On-Time Delivery",
    description: "From concept design, engineering, procurement, and factory fabrication to on-site erection and commissioning, you have a single trusted partner.",
    icon: "Clock"
  },
  {
    title: "Aligned with Saudi Vision 2030",
    description: "Committed to local workforce empowerment, sustainable engineering, and contributing to the Kingdom's landmark giga-projects and industrial self-reliance.",
    icon: "Award"
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Al Khobar Prestige Commercial Tower Facade",
    category: "aluminium",
    categoryLabel: "Aluminium & Glazing",
    location: "Al Khobar, Eastern Province",
    client: "Al-Rashed Real Estate Group",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    overview: "Turnkey design, fabrication, and installation of a 14-story unitized aluminium curtain wall with double-silver low-E structural glazing and architectural LED integrated fins.",
    scope: [
      "18,500 m² Unitized Curtain Wall Facade",
      "Integrated architectural aerofoil sun louvers",
      "Ground floor 8-meter high spider glass entrance lobby",
      "Automatic revolving entrance doors and access control"
    ],
    highlight: "Achieved 35% reduction in solar heat gain (SHGC 0.22) meeting high energy-efficiency standards."
  },
  {
    id: "proj-2",
    title: "Jubail Petrochemical Multi-Tier Pipe Racks & Steel",
    category: "steel",
    categoryLabel: "Structural Steel",
    location: "Jubail Industrial City, KSA",
    client: "Advanced Petrochemical Corp",
    year: "2023",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    overview: "Fabrication and heavy crane erection of 2,400 metric tons of hot-dip galvanized structural steel pipe racks, access platforms, and OSHA caged safety ladders.",
    scope: [
      "2,400 MT hot-dip galvanized heavy steel structures",
      "100% full-penetration groove weld ultrasonic testing (UT)",
      "Three-coat offshore epoxy protective paint system (C5-M)",
      "Zero lost time incidents over 140,000 field man-hours"
    ],
    highlight: "Executed within live operational petrochemical environment without plant disruption."
  },
  {
    id: "proj-3",
    title: "Dammam Mega Logistics & Cold Storage Hub",
    category: "civil",
    categoryLabel: "Civil Construction",
    location: "Dammam 2nd Industrial City",
    client: "Gulf Logistics & Warehousing Co.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80",
    overview: "Comprehensive turnkey civil construction of a 42,000 m² temperature-controlled distribution center including super-flat laser screed concrete flooring.",
    scope: [
      "42,000 m² FM2 classified jointless concrete floor slab",
      "Heavy reinforced concrete retaining structures and loading docks",
      "Underground 500,000-liter reinforced concrete firefighting reservoir",
      "Asphalt ring road and 12,000 m² heavy vehicle parking apron"
    ],
    highlight: "Completed 3 weeks ahead of scheduled handover date."
  },
  {
    id: "proj-4",
    title: "Riyadh Corporate Headquarters Chilled Water HVAC Plant",
    category: "mechanical",
    categoryLabel: "Mechanical & HVAC",
    location: "King Fahd Road, Riyadh",
    client: "Tamkeen Investment Holding",
    year: "2023",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
    overview: "Engineering and installation of 3,600 TR magnetic bearing centrifugal water-cooled chillers, cooling towers, and primary/secondary variable speed pumping headers.",
    scope: [
      "4 x 900 TR ultra-efficient magnetic centrifugal chillers",
      "Automated CNC fabricated antimicrobial ductwork network",
      "Smart BMS integration with real-time COP monitoring",
      "Saudi Civil Defense certified sprinkler & dry riser installation"
    ],
    highlight: "Cut building energy consumption by 28% compared to standard ASHRAE 90.1 baseline."
  },
  {
    id: "proj-5",
    title: "Industrial Desalination High-Pressure SS316L Piping",
    category: "piping",
    categoryLabel: "Industrial Piping",
    location: "Ras Al-Khair / Eastern Province",
    client: "Saudi Desalination & Utilities Est.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
    overview: "Precision orbital welding, spool fabrication, and hydrostatic proof testing of 16-inch to 24-inch high-pressure seawater reverse osmosis stainless steel headers.",
    scope: [
      "4,200 meters of high-alloy Super Duplex & SS316L piping",
      "100% radiographic weld seam testing (RT)",
      "Hydrostatic proof testing up to 120 bar pressure",
      "Chemical pickling and passivation treatment"
    ],
    highlight: "Zero weld defect rate across over 850 orbital weld joints."
  },
  {
    id: "proj-6",
    title: "Yanbu Industrial Complex Annual Turnaround",
    category: "industrial",
    categoryLabel: "Industrial Maintenance",
    location: "Yanbu Industrial City, KSA",
    client: "National Petrochemical Alliance",
    year: "2024",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80",
    overview: "Execution of 21-day emergency plant turnaround encompassing structural repairs, heat exchanger retubing, valve refurbishment, and anti-corrosion coating.",
    scope: [
      "De-rigging and reconditioning of 6 heavy shell-and-tube exchangers",
      "Structural beam replacement in high-corrosion marine atmosphere",
      "Abrasive blasting and 100% solids epoxy lining of process vessels",
      "Rapid turnaround completed in 19 days (2 days ahead of target)"
    ],
    highlight: "Zero injuries across 45,000 condensed turnaround work hours."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Hashem General Contracting delivered the structural glazing and curtain wall for our 14-story corporate tower with impeccable precision. Their engineering documentation, European CNC fabrication accuracy, and on-site crane safety were on par with global tier-1 contractors.",
    author: "Eng. Tariq Al-Ghamdi",
    title: "Vice President of Projects",
    company: "Eastern Province Commercial Real Estate Group",
    location: "Al Khobar, Saudi Arabia",
    rating: 5
  },
  {
    id: "test-2",
    quote: "Their steel fabrication yard in Dammam produced over 2,000 tons of structural steel for our petrochemical logistics warehouse with flawless quality. Weld inspections passed 100% first time. Hashem is our go-to partner across the Kingdom.",
    author: "Mansoor Al-Husseini",
    title: "Senior Engineering Manager",
    company: "Saudi Petrochemical Supply Chain Co.",
    location: "Jubail, Saudi Arabia",
    rating: 5
  },
  {
    id: "test-3",
    quote: "From heavy machine concrete foundations to the complete central HVAC chiller plant, Hashem demonstrated why they are a trusted name in industrial contracting. Their adherence to Aramco safety standards is outstanding.",
    author: "Robert Van Der Meer",
    title: "Technical Director",
    company: "Gulf Industrial Manufacturing Consortium",
    location: "Dammam 2nd Industrial City, KSA",
    rating: 5
  }
];

export const ENGINEERING_PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Feasibility",
    desc: "Detailed site survey, architectural drawing analysis, budget alignment, and client requirement scoping."
  },
  {
    step: "02",
    title: "Planning & Value Engineering",
    desc: "Material selection, timeline scheduling, value engineering to optimize cost without compromising quality."
  },
  {
    step: "03",
    title: "3D CAD & BIM Modeling",
    desc: "Rigorous shop drawing creation, structural wind/load calculations, thermal analysis, and clash detection."
  },
  {
    step: "04",
    title: "Precision CNC Fabrication",
    desc: "Automated cutting, milling, welding, and assembly in our 12,000 m² high-tech manufacturing plant."
  },
  {
    step: "05",
    title: "Quality Inspection & QA/QC",
    desc: "NDT testing, hydrotesting, facade water tightness checks, and full SASO/ISO compliance sign-off."
  },
  {
    step: "06",
    title: "On-Site Erection & Installation",
    desc: "Expert crane handling, certified riggers, master installers adhering to zero-accident HSE standards."
  },
  {
    step: "07",
    title: "Commissioning & Handover",
    desc: "Comprehensive testing, balancing, as-built documentation, warranty certificates, and maintenance manual delivery."
  }
];

export const CERTIFICATIONS = [
  { name: "ISO 9001:2015", desc: "Quality Management System Certified", badge: "Quality" },
  { name: "ISO 45001:2018", desc: "Occupational Health & Safety Certified", badge: "Safety" },
  { name: "ISO 14001:2015", desc: "Environmental Management Certified", badge: "Environment" },
  { name: "SASO Certified", desc: "Saudi Standards, Metrology & Quality Org.", badge: "Saudi Standards" },
  { name: "Saudi Building Code (SBC)", desc: "Compliant with SBC 201 / 304 / 601 / 801", badge: "Code Compliance" },
  { name: "Saudi Civil Defense", desc: "Approved Fire Safety & Structural Contracting", badge: "Civil Defense" }
];

export const GALLERY_ITEMS = [
  {
    title: "5-Axis CNC Profile Milling Machine",
    category: "Aluminium Fabrication",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    desc: "High-precision computer numerical controlled profile fabrication for architectural curtain walls."
  },
  {
    title: "Unitized Curtain Wall Installation",
    category: "Glazing & Facades",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    desc: "Glass panel lifting robot installing 3.8m insulated double-glazed acoustic glass units."
  },
  {
    title: "Structural Steel Welding & Fabrication",
    category: "Steel Structures",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    desc: "6G certified master welders executing full-penetration welds for petrochemical pipe racks."
  },
  {
    title: "Commercial Building High-Rise Casting",
    category: "Civil Construction",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80",
    desc: "Mass concrete pouring for heavy foundation footings with laser leveling."
  },
  {
    title: "Chilled Water Pumping Headers & Chillers",
    category: "HVAC Engineering",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
    desc: "High-tonnage central chiller plant header installation with acoustic vibration isolators."
  },
  {
    title: "High-Pressure Super Duplex Stainless Piping",
    category: "Piping Works",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
    desc: "Sanitary orbital TIG welded piping for RO water treatment facility."
  }
];

export const FAQS = [
  {
    question: "Where are Hashem General Contracting's fabrication facilities and offices located?",
    answer: "Our main fabrication facility and corporate headquarters are located in the Eastern Province (Al Khobar / Dammam Industrial Area), Saudi Arabia, spanning over 12,000 square meters. We also maintain a regional project office in Riyadh to support projects across the Kingdom."
  },
  {
    question: "What aluminium and facade systems does Hashem work with?",
    answer: "We are authorized and experienced in fabricating world-renowned architectural systems including Schüco, Reynaers Aluminium, Technal, and Gutmann, as well as high-performance regional profiles from Gulf Extrusions and Alupco, engineered to meet Saudi Building Code (SBC) thermal insulation criteria."
  },
  {
    question: "Are your welders and testing procedures certified for oil & gas / Aramco standards?",
    answer: "Yes, all our structural steel and piping welders are qualified under ASME Section IX and AWS D1.1 in 6G positions. We provide complete Non-Destructive Testing (NDT) reports including RT, UT, MPI, and DPT conducted by certified Level II/III inspectors."
  },
  {
    question: "How do I request a formal quotation or tender submission?",
    answer: "You can submit your project BOQ (Bill of Quantities) and drawings directly through our online 'Request a Quote' form, email us at info@hashemcontracting.com, or call our estimating department at +966 57 017 4535. Our engineering team responds within 24 to 48 hours."
  },
  {
    question: "What warranties and guarantees are provided on aluminium facades and civil projects?",
    answer: "We provide comprehensive warranties: up to 10-25 years on architectural powder coating/anodizing and PVDF finishes, 10 years on insulated glass unit (IGU) seal integrity, and full Decennial Structural Liability guarantees on civil structures in accordance with Saudi law."
  }
];
