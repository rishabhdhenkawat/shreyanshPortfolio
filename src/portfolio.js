/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shrayansh Jakar",
  title: "Hi all, I'm Shrayansh",
  subTitle: emoji(
    "Proven track record in backend optimization, API development, and enhancing user experience. Passionate about leveraging technology to solve real-world problems and improve user satisfaction.🚀 "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LKLb6-pHdHt2rcaf0tzZax7KgB2JJEV8/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shrayansh19",
  linkedin: "https://www.linkedin.com/in/shrayansh1/",
  gmail: "shrayanshjakar@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I'm passionate about leveraging technology to solve complex problems and drive innovation, and I'm always excited to explore new advancements in the tech world." ,
  skills: [
    emoji(
      "⚡ Passionate about leveraging technology to solve complex problems and drive innovation"
    ),
    emoji("⚡ Curious and eager to learn, constantly exploring new advancements in the tech world"),
    emoji(
      "⚡ Thrive in dynamic environments, applying skills to create impactful solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "C/C++",
    fontAwesomeClassname: "fab fa-cuttlefish"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "Django",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "TensorFlow",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "Scikit-Learn",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "PyTorch",
    fontAwesomeClassname: "fas fa-fire-alt"
  },
  {
    skillName: "Tableau",
    fontAwesomeClassname: "fas fa-chart-bar"
  },
  {
    skillName: "Power BI",
    fontAwesomeClassname: "fas fa-chart-pie"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git"
  }
]
,
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology Kanpur",
      logo: "https://alpha.indicwiki.in/images/a/ae/1024px-IIT_Kanpur_Logo.svg.png",
      subHeader: "Bachelor of Technology in Materials Science and Engineering",
      duration: "July 2019 - June 2023",
      desc: "Graduated with a focus on MSE, with a CPI of 7.2.",
      descBullets: [
        "Winner of the Hackathon at NIT Hamirpur, 2022",
        "Solved 500+ problems on platforms like InterviewBit, LeetCode, and GeeksForGeeks",
        "Secured AIR 4996 in JEE, 2019, among 1.2 million aspirants across India"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "88%"
    },
    {
      Stack: "Data Analysis/ML", // Insert stack or technology you have experience in
      progressPercentage: "85%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "82%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst",
      company: "Oculosense",
      companylogo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Foculosense-private-limited&psig=AOvVaw3XMJjdJeeC8Q8wroeLDL8i&ust=1718377519336000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDchKft2IYDFQAAAAAdAAAAABAE", // Use the web link for the logo
      date: "August 2023 – Present",
      desc: "Developed and deployed machine learning models, enhanced visual recognition systems, and optimized backend infrastructure.",
      descBullets: [
        "Leveraged Python, TensorFlow, Scikit-Learn, PySpark, and Databricks to develop and deploy ML models, boosting object detection accuracy by 25%.",
        "Built and deployed a RESTful API using Flask on AWS EC2, enabling communication between user devices and backend services.",
        "Administered MySQL and PostgreSQL, optimized queries and indexing, developed ETL processes, reducing query execution time by 33%.",
        "Created reports and visualizations using Tableau, Power BI, and Microsoft Excel, reducing the decision-making cycle from 7 days to 4 days."
      ]
    },
    {
      role: "Backend Development Intern",
      company: "UnOrg Vendor Solutions Online",
      companylogo: "https://play.google.com/store/apps/datasafety?id=com.unorguserapp.unorg", // Use the web link for the logo
      date: "May 2022 – July 2022",
      desc: "Implemented a voice search feature, processed voice data, and optimized backend system performance.",
      descBullets: [
        "Developed a voice search feature using Django, machine learning, and NLP, enhancing user engagement by 30% and search accuracy by 40%.",
        "Collected and curated diverse voice samples, applied NLP techniques for feature extraction, reducing query response time from 2.5s to 1.5s.",
        "Conducted extensive testing and backend optimization, leveraging AWS services and performance monitoring tools, improving efficiency by 20% and halving server load times."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7424868032",
  email_address: "shrayanshjakar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
