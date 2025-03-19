import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/download.jpeg";
import project3 from "../assets/projects/project-3.jpg";

import project4 from "../assets/projects/project4.png";
import image from "../assets/projects/image.png";

export const HERO_CONTENT = `As a dynamic software developer, I specialize in Full Stack Web Development and Android Development, merging technology with creativity to craft innovative, user-focused solutions. With a solid foundation in web technologies, and Android SDK, I excel in building responsive, efficient web and mobile applications that exceed user expectations.

My journey includes not only extensive hands-on experience but also active participation in various hackathons, where I’ve secured top positions and refined my problem-solving skills. This competitive edge fuels my passion for continuous learning and pushes me to stay ahead of industry trends.

I thrive on collaborating with forward-thinking teams and am always eager to take on new challenges that push the boundaries of technology and design. Let’s connect and explore how we can drive digital transformation together!`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const experience = [
  {
    year: "2024 - 2024",
    role: "Software Developer",
    company: "Heptre Techworks (Startup), Remote",
    description:
      "Designed and developed a robust, scalable full-stack web application using Angular, Tailwind CSS, creating a responsive user interface and integrating Firebase for seamless real-time data updates and secure user authentication. Integrated cutting-edge language models (LLMs) into the application, enabling real-time predictive text features and chatbot functionalities to streamline user interaction and support services. Contributed to team success through thoughtful code reviews, documentation, and knowledge sharing. Implemented Scrum methodology to improve transparency and optimize team productivity in software development.",
    technologies: [
      "Angular JS",
      "Tailwind CSS",
      "Firebase",
      "LLMs",
      "Git",
      "Scrum",
      "Azure DevOps",
      "Google Cloud Platform",
    ],
  },
  {
    year: "2021 - 2023",
    role: "Software Developer",
    company: "Cognizant Technology Solutions, Chennai, India",
    description:
      "Spearheaded the development of a sophisticated database-driven web application for sales performance analytics, integrating Machine Learning models and Tableau CRM to provide actionable insights into sales metrics. Streamlined the integration of Salesforce Analytics into back-end applications, enabling seamless real-time data synchronization and reporting. Automated build and deployment pipelines using Azure DevOps, implementing CI/CD processes with Docker containerization, reducing deployment time by 40%, and ensuring faster, more reliable production releases.",
    technologies: [
      "React.js",
      "Salesforce",
      "SAQL",
      "Tableau CRM",
      "JavaScript",
      "ETL Processes",
      "API Integration",
      "Machine Learning",
      "Azure DevOps",
      "Docker",
    ],
  },
  {
    year: "2020 - 2021",
    role: "Software DevOps Intern",
    company: "3Edge Solutions, Chennai, India",
    description:
      "Supported the Examination Discount App by managing infrastructure, automating deployment, and ensuring seamless integration of third-party APIs. Gained hands-on experience with Docker and Kubernetes for streamlined application deployment, collaborating with cross-functional teams to optimize release cycles. Enhanced system reliability by setting up Prometheus for real-time monitoring and logging.",
    technologies: [
      "Docker",
      "Kubernetes",
      "Cloud Technologies",
      "VMs",
      "CI/CD",
      "Prometheus",
      "API Integration",
    ],
  },
];

export const education = [
  {
    year: "2024 - Present",
    role: "Masters in Applied Computing",
    company: "The University of Windsor, Canada",
    description:
      "The Master of Applied Computing program equips me with cutting-edge knowledge and hands-on experience in both computer science and business applications. It emphasizes the practical, industry-oriented aspects of computing, preparing me to tackle complex problems in software development, cloud computing, AI, cybersecurity, and more. This program blends technical expertise with business insights, fostering the skills needed to innovate and drive digital transformation in diverse industries.",
    technologies: [
      "Internet and Security",

      "Database Management Systems",
      "Software Engineering",
      "Web Development",
      "Mobile Development",
      "Cloud Computing",
      "Big Data",

      "Project Management",
      "Business Analysis",
    ],
  },
  {
    year: "2023 - Ongoing",
    role: "Master of Science in Augmented Reality and Virtual Reality",
    company: "Indian Institute of Technology, Jodhpur, India",
    description:
      "This advanced program offers a deep dive into the transformative fields of AR and VR, combining theoretical knowledge with hands-on development of immersive technologies. I gained expertise in computer graphics, 3D modeling, and human-computer interaction, which enables me to create innovative AR/VR applications for industries such as gaming, healthcare, education, and entertainment. My work also focused on how AR and VR can revolutionize user experiences and drive new business opportunities.",
    technologies: [
      "Mobile AR and VR",
      "Haptics",
      "Sensation and Perception",
      "Virtual Reality",
      "Argument Reality",
      "XR",
    ],
  },
  {
    year: "2022 - 2024",
    role: "Master of Business Administration in Business Analytics",
    company: "Anna University, Chennai, India",
    description:
      "The MBA in Business Analytics has broadened my understanding of data science and its strategic application in driving business decisions. With a focus on data mining, machine learning, and predictive analytics, this program has empowered me to leverage data to solve real-world business challenges, optimize operational performance, and drive growth. It has also provided me with a solid foundation in business strategy and leadership.",
    technologies: [
      "Python",
      "Big Data Analytics",
      "Human Resource Management",
      "Machine Learning",
      "Data Analytics",
    ],
  },
  {
    year: "2017 - 2021",
    role: "Bachelor of Engineering in Computer Science & Engineering",
    company: "Anna University, Chennai, India",
    description:
      "The Bachelor of Engineering in Computer Science & Engineering program laid the groundwork for my technical career, focusing on the fundamentals of computer science and software engineering. Through this program, I gained proficiency in programming, algorithms, and systems design, along with hands-on experience in developing software solutions and managing complex IT projects. It honed my problem-solving skills and provided a strong foundation in computer networks and artificial intelligence.",
    technologies: [
      "Data Structure",
      "Operating system",
      "Software Engineering",
      "Artificial Intelligence",
      "Programming Languages",
      "Database",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Paving Concepts",
    image: image,
    description:
      "The website was built to address the growing demand for reliable and professional paving services. It was designed to attract new customers, provide them with detailed information about available services, and establish a strong online presence for the business",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "React JS",
      "Google Domains",
      "GCP",
    ],
  },
  {
    title: "Interactive Human Liver System",
    image: project2,
    description:
      "Constructed an interactive human liver system using Unity, designed to advance educational experiences through immersive 3D visualization.Utilized Unity's AR capabilities to ensure smooth integration and high-quality performance on various AR devices, improving user engagement and learning outcomes.Developed a user-friendly interface that allows users to explore the human liver system in detail, including its structure, functions, and common diseases",
    technologies: ["Unity (for AR development)", " C#", " Blender"],
  },
  {
    title: "Impact of AI Adoption on Business Performance Dashboard",
    image: project3,
    description:
      "	Designed and distributed a comprehensive questionnaire, employing exploratory factor analysis, KMO, Bartlett’s test, and correlation analysis to pinpoint key performance drivers, Upgrading data interpretation accuracy by 70%.",
    technologies: [
      "Power BI",
      "Python (for data analysis and exploratory techniques)",
      "Heroku.",
    ],
  },
  {
    title: "PodcastHM",
    image: project4,
    description:
      "Here News is taken as the example of the data to be streamed and the news articles are the data source and an optimized and more personalized specific to subscribed topics, audio is generated using modern technology which includes Artificial Intelligence. Here the audio acts as a 2-minute podcast that explains what has happened around that day about those topics as a summarized version.",
    technologies: [
      "Android Studio",
      "LLM",
      "Firebase.",
      "Java",
      "Machine Learning",
    ],
  },
];

export const CONTACT = {
  address: " Ontario, Canada",

  email: "monishagovind2000@gmail.com",
};
