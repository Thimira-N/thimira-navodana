import { Paintbrush, Code, Layout, Lightbulb, Layers, PenTool } from "lucide-react";

export const projects = [
    {
        id: "1",
        title: "Kasun's",
        category: "Web Development",
        shortDescription: "Authentic Sri Lankan Craftsmanship of Handmade with Passion.",
        imageUrl: "https://images.pexels.com/photos/1272838/pexels-photo-1272838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        slug: "luxury-fashion-ecommerce",
        year: "2023",
        client: "Kasun Perera",
        duration: "8 Weeks",

        // Project Details
        overview: [
            "Developed an e-commerce platform showcasing authentic Sri Lankan handmade crafts.\n\n",
            "Implemented a custom CMS for the client to easily manage products and inventory.",
            "Created a seamless mobile-responsive shopping experience with secure checkout."
        ],

        challenge: [
            "The client needed a solution to showcase hundreds of unique handmade items.",
            "Required integration with multiple payment gateways for international customers.",
            "Needed to maintain the artisanal feel while providing modern e-commerce functionality."
        ],

        // Services and Technologies
        services: [
            "UI/UX Design",
            "Frontend Development",
            "E-commerce Integration",
            "CMS Development"
        ],

        technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Stripe API"
        ],

        // Media
        images: [
            "https://images.pexels.com/photos/1272838/pexels-photo-1272838.jpeg",
            "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
            "https://images.pexels.com/photos/1272839/pexels-photo-1272839.jpeg"
        ],

        // Results
        results: [
            {
                value: "45%",
                description: "Increase in online sales"
            },
            {
                value: "60%",
                description: "Reduction in cart abandonment"
            },
            {
                value: "200+",
                description: "New international customers"
            }
        ],

        testimonial: "Working with this team transformed our small craft business. We've been able to reach customers worldwide while maintaining our authentic handmade process.",

        // Project Links
        liveUrl: "https://kasunhandmade.com",
        githubUrl: "https://github.com/username/kasun-handmade",

        // Related projects (by ID)
        relatedProjects: ["2", "3"]
    },

    {
        id: "2",
        title: "Araliya",
        category: "Web Development",
        shortDescription: "Immersive website for a restaurant with online reservation system.",
        imageUrl: "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        slug: "araliya-restaurant",
        year: "2023",
        client: "Araliya Gastronomy",
        duration: "6 Weeks",

        overview: [
            "Developed an immersive restaurant website with online table reservation system.",
            "Implemented menu management with daily specials and seasonal offerings.",
            "Created photo gallery showcasing culinary creations and restaurant ambiance."
        ],

        challenge: [
            "Needed to reflect the restaurant's premium dining experience digitally.",
            "Required real-time table availability integration with their POS system.",
            "Had to accommodate last-minute reservation changes from both staff and customers."
        ],

        services: [
            "UI/UX Design",
            "Frontend Development",
            "Reservation System",
            "CMS Integration"
        ],

        technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Firebase"
        ],

        images: [
            "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg",
            "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
            "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
        ],

        results: [
            {
                value: "35%",
                description: "Increase in reservations"
            },
            {
                value: "50%",
                description: "Reduction in phone inquiries"
            },
            {
                value: "4.9/5",
                description: "Customer satisfaction rating"
            }
        ],

        testimonial: "The new website has transformed how guests interact with our restaurant. The reservation system alone has saved us 10+ hours of staff time weekly.",

        liveUrl: "https://araliya-restaurant.com",
        githubUrl: "https://github.com/username/araliya-restaurant",

        relatedProjects: ["1", "6"]
    },

    {
        id: "3",
        title: "Neo-Metropolis",
        category: "Web Application",
        shortDescription: "A Cyber Security Response System for Neo Metropolis Smart City.",
        imageUrl: "https://images.pexels.com/photos/18283370/pexels-photo-18283370/free-photo-of-imperia-tower-between-city-of-capitals-at-evolution-tower-in-moscow-international-business-center.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        slug: "neo-metropolis",
        year: "2023",
        client: "Neo Metropolis Municipal Council",
        duration: "5 Months",

        overview: [
            "Developed a comprehensive cyber security monitoring and response platform.",
            "Implemented real-time threat detection and incident reporting system.",
            "Created dashboard for city officials with threat visualization and analytics."
        ],

        challenge: [
            "Required integration with multiple existing city infrastructure systems.",
            "Needed to process massive amounts of security event data in real-time.",
            "Had to maintain strict compliance with government security standards."
        ],

        services: [
            "System Architecture",
            "Full-stack Development",
            "Data Visualization",
            "API Integration"
        ],

        technologies: [
            "React",
            "Node.js",
            "TypeScript",
            "MongoDB",
            "WebSockets"
        ],

        images: [
            "https://images.pexels.com/photos/18283370/pexels-photo-18283370/free-photo-of-imperia-tower-between-city-of-capitals-at-evolution-tower-in-moscow-international-business-center.jpeg",
            "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
            "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg"
        ],

        results: [
            {
                value: "60%",
                description: "Faster threat detection"
            },
            {
                value: "40%",
                description: "Reduction in security incidents"
            },
            {
                value: "99.9%",
                description: "System uptime"
            }
        ],

        testimonial: "This system has become the backbone of our smart city security infrastructure, helping prevent multiple potential cyber attacks.",

        liveUrl: "https://security.neometropolis.gov",
        relatedProjects: ["4", "7"]
    },

    {
        id: "4",
        title: "The Fisherman",
        category: "Mobile App",
        shortDescription: "A Mobile Application for Fulfil all the needs of Fishermen.",
        imageUrl: "https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        slug: "the-fisherman",
        year: "2022",
        client: "National Fisheries Association",
        duration: "3 Months",

        overview: [
            "Developed mobile app connecting fishermen with buyers and suppliers.",
            "Implemented weather and tide prediction features for safer fishing trips.",
            "Created marketplace for equipment and catch sales."
        ],

        challenge: [
            "Needed to work reliably in low-connectivity coastal areas.",
            "Required multilingual support for diverse fishing communities.",
            "Had to accommodate varying levels of digital literacy among users."
        ],

        services: [
            "Mobile UI/UX Design",
            "Cross-platform Development",
            "Location Services",
            "Offline-first Architecture"
        ],

        technologies: [
            "React Native",
            "TypeScript",
            "Firebase",
            "Redux"
        ],

        images: [
            "https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg",
            "https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg",
            "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg"
        ],

        results: [
            {
                value: "10,000+",
                description: "Active users"
            },
            {
                value: "30%",
                description: "Income increase for fishermen"
            },
            {
                value: "4.7/5",
                description: "App store rating"
            }
        ],

        testimonial: "This app has revolutionized how our fishing communities operate, creating new economic opportunities while improving safety at sea.",

        liveUrl: "https://play.google.com/store/apps/details?id=com.fisherman.app",
        relatedProjects: ["3", "5"]
    },

    {
        id: "5",
        title: "Kasun's - Web Design",
        category: "Web Design",
        shortDescription: "Figma Design for E-Commerce Website.",
        imageUrl: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        slug: "kasuns-design",
        year: "2022",
        client: "Kasun Handmade Crafts",
        duration: "3 Weeks",

        overview: [
            "Created comprehensive Figma design system for e-commerce platform.",
            "Developed mobile-first responsive layouts for all key user flows.",
            "Produced interactive prototypes for client demonstration."
        ],

        challenge: [
            "Needed to balance artisanal aesthetic with e-commerce functionality.",
            "Required designs to accommodate hundreds of unique product variations.",
            "Had to create intuitive navigation for first-time online shoppers."
        ],

        services: [
            "UI/UX Design",
            "Wireframing",
            "Prototyping",
            "Design System"
        ],

        technologies: [
            "Figma",
            "Adobe Photoshop",
            "Illustrator"
        ],

        images: [
            "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
            "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
            "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
        ],

        results: [
            {
                value: "90%",
                description: "Design-to-development accuracy"
            },
            {
                value: "50%",
                description: "Reduction in client revisions"
            },
            {
                value: "5/5",
                description: "Client satisfaction rating"
            }
        ],

        testimonial: "The designs perfectly captured our brand essence while providing a seamless shopping experience for our customers.",

        figmaUrl: "https://figma.com/@designer/kasuns-design",
        relatedProjects: ["1", "6"]
    },

    {
        id: "6",
        title: "Araliya - Web Design",
        category: "Web Design",
        shortDescription: "Figma Design for Restaurant Website.",
        imageUrl: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        slug: "araliya-design",
        year: "2022",
        client: "Araliya Gastronomy",
        duration: "2 Weeks",

        overview: [
            "Designed elegant restaurant website focusing on visual storytelling.",
            "Created reservation flow with minimal steps for better conversion.",
            "Developed menu presentation system for both desktop and mobile."
        ],

        challenge: [
            "Needed to convey premium dining experience through visuals.",
            "Required intuitive reservation system accessible to all age groups.",
            "Had to accommodate frequent menu changes and seasonal specials."
        ],

        services: [
            "UI/UX Design",
            "Visual Design",
            "Interaction Design",
            "Prototyping"
        ],

        technologies: [
            "Figma",
            "Adobe XD",
            "Photoshop"
        ],

        images: [
            "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
            "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
            "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
        ],

        results: [
            {
                value: "40%",
                description: "Increase in reservation clicks"
            },
            {
                value: "2.5x",
                description: "Longer session duration"
            },
            {
                value: "4.8/5",
                description: "Client satisfaction"
            }
        ],

        testimonial: "The designs elevated our digital presence to match our Michelin-starred dining experience.",

        figmaUrl: "https://figma.com/@designer/araliya-design",
        relatedProjects: ["2", "5"]
    },

    {
        id: "7",
        title: "ToDo Cabin",
        category: "Web Application",
        shortDescription: "Application for member registry, to-do task management, and minute tracking with real-time data saving and spreadsheet-style work logging.",
        imageUrl: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        slug: "todo-cabin",
        year: "2023",
        client: "Digital Nomad Collective",
        duration: "4 Weeks",

        overview: [
            "Built comprehensive productivity suite for remote teams.",
            "Implemented real-time collaborative editing features.",
            "Created spreadsheet-like interface for flexible task management."
        ],

        challenge: [
            "Required real-time sync across multiple users and devices.",
            "Needed to accommodate complex organizational structures.",
            "Had to maintain performance with large datasets."
        ],

        services: [
            "Product Design",
            "Full-stack Development",
            "Real-time Features",
            "Data Architecture"
        ],

        technologies: [
            "React",
            "Node.js",
            "WebSockets",
            "IndexedDB"
        ],

        images: [
            "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg",
            "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
            "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
        ],

        results: [
            {
                value: "65%",
                description: "Task completion rate"
            },
            {
                value: "3x",
                description: "Faster meeting documentation"
            },
            {
                value: "95%",
                description: "User retention rate"
            }
        ],

        testimonial: "ToDo Cabin has become indispensable to our distributed team's workflow and organization.",

        liveUrl: "https://todocabin.com",
        githubUrl: "https://github.com/username/todo-cabin",
        relatedProjects: ["3", "4"]
    }













    // {
    //     id: "2",
    //     title: "Araliya",
    //     category: "Web Development",
    //     shortDescription: "Immersive website for a restaurant with online reservation system.",
    //     imageUrl: "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     slug: "luxury-fashion-restaurant"
    // },
    //
    // {
    //     id: "3",
    //     title: "Neo-Metropolis",
    //     category: "Web Application",
    //     shortDescription: "A Cyber Security Response System for Neo Metropolis Smart City.",
    //     imageUrl: "https://images.pexels.com/photos/18283370/pexels-photo-18283370/free-photo-of-imperia-tower-between-city-of-capitals-at-evolution-tower-in-moscow-international-business-center.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     slug: "neo-metropolis"
    // },
    //
    // {
    //     id: "4",
    //     title: "The Fisherman",
    //     category: "Mobile App",
    //     shortDescription: "A Mobile Application for Fulfil all the needs of Fishermen.",
    //     imageUrl: "https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     slug: "the-fisherman"
    // },
    //
    // {
    //     id: "5",
    //     title: "Kasun's - Web Design",
    //     category: "Web Design",
    //     shortDescription: "Figma Design for E-Commerce Website.",
    //     imageUrl: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     slug: "kasun's-design"
    // },
    //
    // {
    //     id: "6",
    //     title: "Araliya - Web Design",
    //     category: "Web Design",
    //     shortDescription: "Figma Design for Restaurant Website.",
    //     imageUrl: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     slug: "araliya-design"
    // },
    //
    // {
    //     id: "7",
    //     title: "ToDo Cabin",
    //     category: "Web Application",
    //     shortDescription: "Application for member registry, to-do task management, and minute tracking with real-time data saving and spreadsheet-style work logging.",
    //     imageUrl: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     slug: "todo-cabin"
    // },







    // {
    //     id: "7",
    //     title: "Architectural Visualization",
    //     category: "3D Design",
    //     shortDescription: "Photorealistic renderings and interactive 3D models for an award-winning architecture firm.",
    //     slug: "architectural-visualization"
    // },

    // {
    //     id: "8",
    //     title: "Sustainable Packaging",
    //     category: "Branding",
    //     shortDescription: "Complete brand identity and packaging design for an eco-conscious luxury brand.",
    //     slug: "sustainable-packaging"
    // },
];


export const services = [
    {
        id: "ui-design",
        title: "UI/UX Design",
        description: "Creating intuitive, beautiful interfaces that delight users and achieve business goals.",
        icon: Paintbrush,
        features: [
            "User Experience Research",
            "Interface Design",
            "Interaction Design",
            "Usability Testing",
            "Design Systems"
        ]
    },
    {
        id: "web-development",
        title: "Web Development",
        description: "Building responsive, high-performance websites and web applications with modern technologies.",
        icon: Code,
        features: [
            "Frontend Development",
            "React/Next.js Applications",
            "CMS Integration",
            "E-commerce Solutions",
            "Progressive Web Apps"
        ]
    },
    {
        id: "branding",
        title: "Branding & Identity",
        description: "Crafting cohesive brand identities that communicate your unique value and resonate with your audience.",
        icon: PenTool,
        features: [
            "Logo Design",
            "Brand Strategy",
            "Visual Identity Systems",
            "Brand Guidelines",
            "Marketing Materials"
        ]
    },
    {
        id: "strategy",
        title: "Digital Strategy",
        description: "Developing comprehensive digital strategies to enhance your online presence and drive results.",
        icon: Lightbulb,
        features: [
            "Content Strategy",
            "SEO Optimization",
            "Conversion Rate Optimization",
            "Analytics & Reporting",
            "Marketing Automation"
        ]
    },
    {
        id: "app-development",
        title: "App Development",
        description: "Creating custom mobile and web applications that solve problems and enhance user experiences.",
        icon: Layers,
        features: [
            "Mobile App Development",
            "Web Applications",
            "Custom Software",
            "API Integration",
            "Maintenance & Support"
        ]
    },
    {
        id: "web-design",
        title: "Web Design",
        description: "Designing visually stunning websites that align with your brand and engage your audience.",
        icon: Layout,
        features: [
            "Website Design",
            "Landing Page Design",
            "Responsive Design",
            "Prototyping",
            "UI Animation"
        ]
    }
];


export const testimonials = [
    {
        id: "1",
        name: "Alexandra Chen",
        role: "CEO at Lumina Brands",
        content: "Working with Thimira was transformative for our brand. The attention to detail and creative vision elevated our digital presence beyond our expectations.",
        imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "2",
        name: "Marcus Williams",
        role: "Creative Director at Elevate Studio",
        content: "The level of craftsmanship in both design and development is unmatched. Our collaboration resulted in an award-winning website that perfectly captures our brand essence.",
        imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "3",
        name: "Sophia Rodriguez",
        role: "Founder of Moda Luxe",
        content: "From concept to execution, the entire process was seamless. The team's understanding of luxury aesthetics and technical expertise delivered exceptional results for our e-commerce platform.",
        imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
];


export const skills = [
    {
        category: "Design",
        items: [
            "UI/UX Design",
            "Brand Identity",
            "Typography",
            "Motion Design",
            "3D Visualization"
        ]
    },

    {
        category: "Development",
        items: [
            "React/Next.js",
            "TypeScript",
            "Node.js",
            "Three.js (currently studying)",
            "Framer Motion"
        ]
    },

    {
        category: "Tools",
        items: [
            "Figma",
            "Adobe Photoshop",
            "Webstorm",
            "VS Code",
            "GitHub",
            "Vercel"
        ]
    }
];


export const workExperience = [
    {
        id: "1",
        role: "UI/UX Design Lead",
        company: "E-Commerce",
        period: "2024 - Present",
        description: "Directed user experience strategy and interface design for high-end e-commerce and finance sector clients.",
        achievements: [
            "Redesigned handmade product increasing conversion rates by 25%",
            "Mentored fellow designers, implementing growth framework for team skill development",
            "Collaborated with clients and stakeholders to collect feedback for better improvement process"
        ]
    },

    {
        id: "2",
        role: "Real World Solutions",
        company: "Neo-Metropolis Smart City",
        period: "2025",
        description: "Built a solution for cyber-attack scenario",
        achievements: [
            "Implemented a new system for the city management",
            "Used proper data structures",
            "Increased security on the new system with proper management options"
        ]
    },

    {
        id: "3",
        role: "Mobile App Developer",
        company: "Fisheries Departments",
        period: "2025",
        description: "Developed custom mobile application solution with focus on performance and sophisticated interactions for luxury clientele.",
        achievements: [
            "Built mobile application for fishermen",
            "Implemented advanced animation techniques and easy interactions",
            "Optimized the app for fishermen (mainly focused on out-door use)",
        ]
    },

    {
        id: "4",
        role: "Web Developer",
        company: "E-Commerce (Handmade Products, Restaurant)",
        period: "2024 - 2025",
        description: "Developed custom web solutions with focus on performance and sophisticated interactions for luxury clientele.",
        achievements: [
            "Built award-winning websites for e-commerce related clients",
            "Implemented advanced animation techniques that became agency signature",
            "Optimized site performance improving load times by 60%"
        ]
    }
];