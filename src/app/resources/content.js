import { InlineCode } from "@/once-ui/components";
import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineLink } from "react-icons/hi2"; // Correct import for Heroicons v2
const person = {
  firstName: "Ethan(Zesheng)",
  lastName: "Jia",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Master of Quantitative Finance, UWaterloo | Affliate Reinforcement Learning AI Researcher, NIMS Lab | Signed Attestation for Advance Sensitive Technology Research Areas in Canada | Former Data Scientist, Dalhousie University & Safeguard Intelligent Medical Diagnosis Inc. | Author/Speaker, 2025 Statistical Society of Canada Annual Meeting",
  avatar: "/images/ethan_avatar.jpeg",
  location: "Canada/Waterloo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Reinforcement Learning", "Statistical Modeling", "Machine Learning", "University of Waterloo",
    "Quantitative Finance", "Data Science"
  ], // optional: Leave the array empty if you don't want to display languages
};

const GitHubLink = ({ url, text = "View Project on GitHub" }) => {
  return (
    <>
      <br />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: "5px", textDecoration: "none" }}
      >
        <FaGithub size={16} /> {text}
      </a>
    </>
  );
};

const NormalLink = ({ url, text = "View Link" }) => {
  return (
    <>
      <br />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: "5px", textDecoration: "none" }}
      >
        <HiOutlineLink size={16} /> {text}
      </a>
    </>
  );
};



export default GitHubLink;

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I share insights on quantitative finance, artificial
      intelligence, Reinforcement learning in Finance, and data-driven decision-making. Subscribe to stay updated on my latest research, projects, and thoughts on the
      intersection of AI, finance, and statistical modeling.
    </>
  ),
};


const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/EasonJia9598",
  },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/in/yingjunchen/",
  // },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Quantitative Finance, AI, Reinforcement Learning + Finance, and Statistical Modeling Enthusiast</>,
  subline: (
    <>
      I am Ethan(Zesheng) Jia, a Master's student in Quantitative Finance (MQF) at the University of Waterloo, specializing in
      AI-driven financial analysis, NLP-powered knowledge extraction, Reinforcement Learning in Finance, and statistical modeling. With a strong foundation in
      machine learning, data science, and investment analysis, I explore the intersection of finance, technology, and
      decision-making. Through this portfolio, I share my research, projects, and insights into the evolving world of AI
      and quantitative finance.
    </>
  ),
};


const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Ethan (Zesheng) Jia, a Master's student in Quantitative Finance at the University of Waterloo with a strong background in statistical modeling, AI-driven financial analysis, and NLP-powered knowledge extraction. I specialize in leveraging machine learning and quantitative methods to solve complex financial challenges, from risk modeling to automated trading systems. Passionate about the intersection of AI and finance, I actively work on research and projects that integrate data-driven insights into financial decision-making.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Statistical Society of Canada (SSC)",
        timeframe: "2024 - Present",
        role: "Conference Presenter & Research Collaborator",
        achievements: [
          <>
            Presented research on AI-driven statistical modeling at the 2025 SSC Annual Meeting, collaborating with
            leading researchers in data science and machine learning.
          </>,
          <>
            Developed an innovative AI model framework for data-driven analysis, improving predictive
            accuracy in statistical modeling applications.
          </>,
          <>
            Conducted research on Bayesian inference, regression analysis, and deep learning, applying them to
            complex data-driven decision-making scenarios.
          </>,
        ],
        images: [],
      },
      {
        company: "Dalhousie University",
        timeframe: "2024",
        role: "Affiliate AI Researcher – Reinforcement Learning",
        achievements: [
          <>
            Proposed and implemented novel KL divergence-based algorithms for diversity maintenance in evolutionary reinforcement learning,
            achieving a 300% improvement in population diversity and performance metrics during simulations.
          </>,
          <>
            Developed custom statistical methods to enhance model efficiency and scalability, integrating dynamic thresholding
            and hypothesis testing for optimal agent-based decision-making.
          </>,
          <>
            Increased training speed by 10x and maximum performance score by 2x compared to the original model,
            significantly improving reinforcement learning efficiency.
          </>,
          <>
            Leveraged NVIDIA CUDA with C/C++ to optimize computational performance, accelerating model execution speeds by 30%
            for large-scale decision-making tasks.
          </>,
          <>
            Applied Python, C, C++, Java, and CUDA for high-performance AI model development, ensuring efficient implementation of
            complex machine learning architectures.
          </>,
        ],
        images: [],
      },
      {
        company: "Safeguard Intelligent Medical Diagnosis Inc. & Dalhousie University",
        timeframe: "2023",
        role: "Data Scientist (AI, NLP & Statistical Modeling)",
        achievements: [
          <>
            Designed and implemented a BERT-based NLP model for medical report classification, improving
            predictive accuracy by 15%.
          </>,
          <>
            Processed and analyzed 500,000+ medical records, ensuring accuracy in data reconciliation and
            reporting for government and healthcare professionals.
          </>,
          <>
            Built a GPT-powered document processing pipeline, reducing manual workload by 25% and enhancing
            medical knowledge retrieval.
          </>,
          <>
            Led the development of an AI-driven data visualization dashboard, simplifying complex statistical
            findings for non-technical stakeholders.
          </>,
        ],
        images: [],
      },
      {
        company: "Dalhousie University",
        timeframe: "2024",
        role: "Student Researcher – NLP & Statistical AI Modeling",
        achievements: [
          <>
            Developed an NLP-powered knowledge retrieval system to extract, classify, and organize domain-specific
            documents, improving sentiment analysis accuracy by 20%.
          </>,
          <>
            Implemented Bayesian inference and regression models (CNN-based) for document relationship analysis,
            enhancing data-driven decision-making.
          </>,
          <>
            Increased inference speed 6000x compared to traditional maximum likelihood models, significantly
            optimizing computational efficiency.
          </>,
          <>
            Presented findings to cross-disciplinary research teams, effectively bridging AI, finance, and statistical modeling.
          </>,
        ],
        images: [],
      },
      {
        company: "Personal Research & Projects",
        timeframe: "Ongoing",
        role: "AI & Quantitative Finance Researcher",
        achievements: [
          <>
            Developed machine learning-driven financial forecasting models, improving risk analysis accuracy
            in stock price prediction.
          </>,
          <>
            Built an automated financial data processing pipeline leveraging NLP and AI, streamlining
            document analysis and structured storage.
          </>,
          <>
            Created a GPT-embedded chatbot for investment insights retrieval, integrating vector-based knowledge
            retrieval for financial research.
          </>,
          <>
            Published and maintained a personal blog on AI, machine learning, NLP, and quantitative finance,
            sharing insights with a broad audience.
          </>,
        ],
        images: [],
      },
    ],
  },
  projects: {
    display: true, // set to false to hide this section
    title: "Projects",
    projectsList: [
      {
        name: "AI-Powered Financial Document Analysis",
        timeframe: "2025",
        description: (
          <>
            Built an LLM-based knowledge management system to extract and organize financial reports.
            Leveraged BERT models to enable sentiment analysis across financial documents using dataset financial_phrasebank.
            <br/>
            <GitHubLink 
                url="https://github.com/EasonJia9598" 
                text="Currently Constructing, will publish very soon."
            />
          </>
        ),
        technologies: ["Python", "TensorFlow", "Transformers", "DeepSeek R1", "LangChain", "ChromaDB", "Streamlit"],
        images: [],
      },
      {
        name: "Automated Financial Data Processing Pipeline",
        timeframe: "2024",
        description: (
          <>
            Designed an AI-driven pipeline to automate financial document analysis and structured storage.
            Utilized NLP models for extracting key insights, improving research efficiency by 15%.
          </>
        ),
        technologies: ["Python", "Selenium", "OpenAI API", "SQL", "Pandas"],
        images: [],
      },
      {
        name: "GenAI-Powered Investment Insights Retrieval System",
        timeframe: "2024",
        description: (
          <>
            Developed a GPT-embedded chatbot for querying structured investment reports.
            Integrated vector-based/embedding knowledge retrieval, enhancing financial research workflows.
          </>
        ),
        technologies: ["Python", "OpenAI API", "Streamlit"],
        images: [],
      },
      {
        name: "Real Estate Data Gathering and Analysis",
        timeframe: "2024",
        description: (
          <>
            Designed a Python-based web scraping pipeline to collect and analyze real estate pricing data,
            identifying trends in the housing market. Developed predictive models for real estate price trends using machine learning (LightGBM),
            improving risk analysis accuracy.
          </>
        ),
        technologies: ["Python", "Machine Learning", "Web Scraping"],
        images: [],
      },
      {
        name: "Financial Data Gathering and Forecasting with AI",
        timeframe: "2024",
        description: (
          <>
            Developed a machine learning time-series forecasting model for stock trends, leveraging Selenium for
            advanced data gathering. Captured trending in milliseconds and improved predictive accuracy by 15%
            through optimized data preprocessing.
          </>
        ),
        technologies: ["Python", "Machine Learning", "Time-Series Analysis"],
        images: [],
      },
      {
        name: "Automated Business Analysis and Reporting System",
        timeframe: "2024",
        description: (
          <>
            Designed and developed a report automation system using self-trained GPT models and regression models
            (such as Llama 3, linear regression, or DeepSeek R1). Reduced manual reporting time by 25%.
          </>
        ),
        technologies: ["Python", "Llama 3", "DeepSeek R1", "SQL", "Excel"],
        images: [],
      },
      {
        name: "NASA Satellite Analysis – Australian Wildfires for Insurance Alert",
        timeframe: "2023",
        description: (
          <>
            Analyzed 183,593 NASA VIIRS satellite data points using statistical modeling and machine learning
            (Random Forest, LightGBM), improving wildfire risk prediction by 20% and identifying key FRP predictors
            for insurance strategy optimization.
            <br />
            <GitHubLink url="https://github.com/EasonJia9598/Australian_wildfire_FRP" />
          </>
        ),
        technologies: ["Python", "Machine Learning", "Random Forest", "LightGBM"],
        images: [],
      },
      {
        name: "Generative AI Medical Image Synthesis",
        timeframe: "2023",
        description: (
          <>
            Built a Denoising Diffusion Probabilistic Model (DDPM) to generate high-resolution synthetic MRI images,
            addressing low-data challenges in medical imaging. Improved synthetic image quality by 30% using optimized noise schedules.
            <br />
              <GitHubLink url="https://github.com/EasonJia9598/BrainMRI_Diffusion_Model" />
          </>
        ),
        technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        images: [],
      },
      {
        name: "Deep Learning for Radiology Report Analysis",
        timeframe: "2023",
        description: (
          <>
            Developed a BERT-based NLP model to classify and extract insights from radiology reports, achieving
            15% improvement over TF-IDF models. Integrated a domain-specific medical NLP pipeline, improving
            text classification and anomaly detection.
            <br />
            <GitHubLink url="https://github.com/EasonJia9598/BrainMRI_Diffusion_Model" />
          </>
        ),
        technologies: ["Python", "PyTorch", "Hugging Face Transformers", "Scikit-learn", "SQL"],
        images: [],
      },
      {
        name: "Ethan (Zesheng) Jia’s Blog",
        timeframe: "Since 2022",
        description: (
          <>
            Built and deployed a personal website on Vercel, sharing insights on machine learning, AI, NLP,
            and deep learning. Explored transfer learning and distilled complex concepts into practical insights.
            <br />
            <NormalLink url="https://ethansblog.vercel.app/" />


          </>
        ),
        technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
        images: [],
      },
      {
        name: "Telecom Customer Churn Prediction",
        timeframe: "2022",
        description: (
          <>
            Developed a predictive model to determine customer churn in the telecommunications sector. The project involved data cleaning to handle missing values and irrelevant features, followed by training a classification model to accurately predict customer retention.
            <br />
            <GitHubLink url="https://github.com/EasonJia9598/Tele_customer_churn" />
          </>
        ),
        technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
        images: [],
      }, 
      {
        name: "Amazon Book Review Score Prediction",
        timeframe: "2022",
        description: (
          <>
            Developed a predictive model to estimate Amazon book review scores based on customer review texts. The project utilized Natural Language Processing (NLP) techniques, including TF-IDF for word embeddings, and employed a Random Forest classifier to train on the processed dataset. Additionally, various feature engineering methods were applied, and the impact of different part-of-speech tagging and data cleaning strategies on model performance was analyzed.
            <br />
            <GitHubLink url="https://github.com/EasonJia9598/Amazon_book_review_score" />
          </>
        ),
        technologies: ["Python", "Pandas", "Scikit-learn", "Natural Language Processing", "Random Forest", "TF-IDF"],
        images: [],
      }
    ],
  },

  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: (
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="/images/Studies/University_of_Waterloo.png"
              alt="University of Waterloo Logo"
              style={{ width: "44px", height: "44px", borderRadius: "50%" }}
            />
            University of Waterloo
          </span>
        ),
        description: <>Master of Quantitative Finance (MQF), 2025</>,
      },
      {
        name: (
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="/images/Studies/Dalhousie_University.png"
              alt="Dalhousie University Logo"
              style={{ width: "44px", height: "44px", borderRadius: "50%" }}
            />
            Dalhousie University
          </span>
        ),
        description: (
          <div style={{ marginTop: "8px", lineHeight: "1.6" }}>
            <p><strong>B.Sc. (First Class Honours/Distinction) in Statistics & Mathematics, 2020-2024, Dean’s List</strong></p>
            <p><strong>GPA:</strong> Statistics Major: 4.15/4.3 | Last two years Senior Courses: 4.23/4.3</p>
            <p><strong>Specializations/Certificates:</strong> Data Science (4.0+/4.3), Artificial Intelligence, Intelligent Systems (4.0+/4.3)</p>
          </div>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Machine Learning & AI",
        description: (
          <>
            Experienced in developing machine learning models for financial forecasting, NLP-powered knowledge extraction, and reinforcement learning.
            Strong background in statistical modeling, deep learning, and Bayesian inference.
          </>
        ),
        images: [
        ],
      },
      {
        title: "Natural Language Processing (NLP)",
        description: (
          <>
            Built NLP-powered sentiment analysis and document processing pipelines using BERT, GPT, and Transformers.
            Applied LLM-based models to analyze financial reports and investment insights.
          </>
        ),
        images: [
        ],
      },
      {
        title: "Reinforcement Learning",
        description: (
          <>
            Implemented reinforcement learning models for financial decision-making and optimization.
            Developed KL-divergence-based evolutionary RL algorithms, achieving 300% diversity improvement in decision models.
          </>
        ),
        images: [],
      },
      {
        title: "Financial Data Analysis & Quantitative Modeling",
        description: (
          <>
            Specialized in financial risk modeling, AI-driven quantitative finance, and statistical decision-making.
            Developed stock price prediction models and automated investment analysis tools.
          </>
        ),
        images: [],
      },
      {
        title: "Programming & Development",
        description: (
          <>
            Proficient in Python, C++, C, Java, CUDA, SQL, and JavaScript.
            Experienced in high-performance computing and AI model optimization using Nvidia CUDA.
          </>
        ),
        images: [
        ],
      },
      {
        title: "Full-Stack Development",
        description: (
          <>
            Built and deployed applications using Next.js, React, and Supabase.
            Experienced in backend development and API integration for AI and financial applications.
          </>
        ),
        images: [
        ],
      },
    ],
  },
};
const blog = {
  label: "Blog",
  title: "Writing about AI, Reinforcement Learning, Quant Finance, etc.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Ai and Quant projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
