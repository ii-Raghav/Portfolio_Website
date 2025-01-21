import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Machine Learning /AI Engineer",
      icon: backend,
    },
    {
      title: "Cloud Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Research Assitant",
      company_name: "MISSISSIPPI STATE UNIVERSITY",
      icon: tesla,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Analyzed GHG emissions datasets for 10,000+ facilities using Python, providing actionable insights.",
        "Conducted environmental impact assessments with SQL to enhance resource management strategies.",
        "Developed a business plan that secured $5M in funding for research initiatives.",
        "Collaborated with teams to refine methodologies and improve data accuracy.",
        "Skills: Data analysis, SQL, Python, problem-solving, cross-functional collaboration, project management.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "ORS INFOTECH",
      icon: meta,
      iconBg: "#383E56",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Designed an intuitive UI for the VS open file switcher (Ctrl-Tab), enhancing navigation and user productivity.",
        "Developed and optimized MySQL databases to improve data retrieval and system performance.",
        "Streamlined data collection processes using SharePoint and Power Automate, improving workflow efficiency.",
        "Utilized R for backend data analysis, enabling insights and integration with frontend systems.",
        "Contributed to software solutions for gallery, video, and event management systems, ensuring timely feature delivery.",
        "Skills: UI/UX design, database optimization, data analysis, workflow automation, collaboration, problem-solving, and adaptability",
      ],
    },
    {
      title: "Lead Tutor",
      company_name: "MISSISSIPPI STATE UNIVERSITY",
      icon: tesla,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Provided tailored instruction in data structures, algorithms, and programming, enhancing students’ technical skills and academic performance.",
        "Led a team of engineering tutors, fostering collaboration and ensuring consistent, high-quality academic support.",
        "Developed clear and comprehensive study materials to address diverse student learning needs effectively.",
        "Coordinated schedules and mentoring efforts to optimize tutoring operations and align with course objectives.",
        "Supported students with problem-solving strategies, enabling better understanding and application of core concepts.",
        "Skills: Leadership, computer science education, mentorship, communication, problem-solving, team coordination."
      ],
    },
  ];
  
  const projects = [
    {
      name: "Diabetes Diagnosis Expert System & Neural Network",
      description:
        "Diabetes Diagnosis Expert System & Neural Network A diagnostic platform combining CLIPS rules and a neural network model to assess diabetes risk based on health metrics like BMI, blood pressure, and cholesterol. The system uses an intuitive GUI for real-time input and delivers accurate risk predictions across three categories: No Diabetes, Pre-Diabetes, and Diabetes.",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "neural-networks",
          color: "green-text-gradient",
        },
        {
          name: "DataNormalization",
          color: "pink-text-gradient",
        },
        {
          name: "CrossEntropyLoss",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ii-Raghav/diabetes-predictor",
    },
    {
      name: "Autonomous AI Gameplay System for Super Mario Bros",
      description:
        "A project designed to develop an intelligent system capable of autonomously playing Super Mario Bros using a combination of neural networks and genetic algorithms. The system translates game environments into decisions, enabling Mario to navigate levels, avoid obstacles, and achieve goals without human intervention. By employing evolutionary techniques, the project refines the neural network’s performance over multiple generations, optimizing decision-making strategies. This approach demonstrates the potential of AI-driven solutions in creating adaptive, efficient, and resource-friendly autonomous agents for gaming applications.",
      tags: [
        {
          name: "evolutionaryNetworks",
          color: "blue-text-gradient",
        },
        {
          name: "geneticalgorithm",
          color: "green-text-gradient",
        },
        {
          name: "gameAI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ii-Raghav/Super-Mario-Self-Playing",
    },
    {
      name: "AI Data Structure Suggestion Tool",
      description:
        "This project showcases an AI-powered tool designed to recommend optimal data structures based on user-defined constraints, such as speed, memory efficiency, or specific use cases. Leveraging natural language processing through NLTK, the system extracts key constraints from user input and aligns them with the most suitable data structures, providing detailed explanations for each suggestion. Through practical test cases, such as recommending hash tables for fast lookups or linked lists for efficient memory usage, the tool demonstrates its accuracy and usability. This innovative solution simplifies complex decision-making while enhancing understanding of data structures with transparent and educational recommendations.",
      tags: [
        {
          name: "ArtificialIntelligence",
          color: "blue-text-gradient",
        },
        {
          name: "DataStructures ",
          color: "green-text-gradient",
        },
        {
          name: "NLTK ",
          color: "pink-text-gradient",
        },
        {
          name: "Optimization",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ii-Raghav/data_suggestor",
    },
  ];
  
  export { services, technologies, experiences, projects };