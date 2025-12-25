const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  // { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  //{ value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Test features properly, handle errors/loading states, and improve performance where possible.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Give timely updates, explains blockers early, and asks focused questions to avoid delays.",
  },
  {
    imgPath: "/images/time.png",
    title: "Quick learner",
    desc: "Pick up new libraries, patterns, and tools quickly; applies them effectively in real tasks.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Flutter Developer",
    modelPath: "/models/flutter_logo-trasformed.glb",
    scale: 20,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Project Manager",
  //   modelPath: "/models/git-svg-transformed.glb",
  //   scale: 0.05,
  //   rotation: [0, -Math.PI / 4, 0],
  // },
];

const expCards = [
  {
    review:
      "Quick learner and reliable contributor who delivered clean MERN features end-to-end with strong teamwork and communication.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "Full Stack Internee",
    date: "July 2025 - Nov 2025",
    responsibilities: [
      "Built responsive UI components in React and implemented reusable layouts.",
      "Integrated frontend with backend APIs (auth flows, forms, error/loading states).",
      "Implemented authentication/authorization (JWT, role-based access where needed).",
      "Collaborated in an Agile workflow (standups, sprint tasks, documentation).",
    ],
  },
  // {
  //   review:
  //     "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
  //   imgPath: "/images/exp2.png",
  //   logoPath: "/images/logo2.png",
  //   title: "Full Stack Developer",
  //   date: "June 2020 - December 2023",
  //   responsibilities: [
  //     "Led the development of Docker's web applications, focusing on scalability.",
  //     "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
  //     "Contributed to open-source projects that were used with the Docker ecosystem.",
  //   ],
  // },
  // {
  //   review:
  //     "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "React Native Developer",
  //   date: "March 2019 - May 2020",
  //   responsibilities: [
  //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
  //     "Improved app performance and user experience through code optimization and testing.",
  //     "Coordinated with the product team to implement features based on feedback.",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Ammara Fatima",
    // mentions: "@estherhoward",
    review: "He brings a positive attitude and helps the team move faster without compromising quality.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Haroon Ali",
    mentions: "@roonistic",
    review:
      "He pays close attention to detail and consistently delivers polished work. From responsive UI spacing to proper API error handling and edge cases, he makes sure features feel complete — not just ‘working’.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Huzaifa Aziz",
    mentions: "@huzaifaa_aziz",
    review:
      "He was dependable throughout the internship. He managed his tasks well, communicated blockers early, and delivered features that worked as expected. His ability to learn quickly and apply feedback made him a strong addition to the development team.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Fiaz Hussain",
    mentions: "@fiaz_lak",
    review:
      "His code quality stood out during the internship. He focused on clean structure, reusable components, and readable logic, which made his work easy to review and maintain in the codebase.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Haider Naeem",
    mentions: "@hayyder__",
    review:
      "He delivered consistently high-quality UI work. Layouts were responsive, components were well organized, and small UX details (validation, empty states, consistency) were handled thoughtfully.",
    imgPath: "/images/client4.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
