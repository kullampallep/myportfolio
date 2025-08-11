import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

import wander1 from "public/images/Wander_1.png";
import wander2 from "public/images/Wander_2.png";
import wander3 from "public/images/Wander_3.png";
import wander4 from "public/images/Wander_4.png";
import wander5 from "public/images/Wander_5.png";

import unoher1 from "public/images/UnoHer_1.png";
import unoher2 from "public/images/UnoHer_2.png";
import unoher3 from "public/images/UnoHer_3.png";

import tunein1 from "public/images/tunein_1.jpg";

import insight1 from "public/images/insight_1.jpg";
import insight2 from "public/images/insight_2.jpg";
import insight3 from "public/images/insight_3.jpg";
import insight4 from "public/images/insight_4.jpg";

import hootanica0 from "public/images/Hootanica_0.png";
import hootanica1 from "public/images/Hootanica_1.png";
import hootanica2 from "public/images/Hootanica_2.png";
import hootanica3 from "public/images/Hootanica_3.png";
import hootanica4 from "public/images/Hootanica_4.png";

import portfolio1 from "public/images/portfolio1.png";



export const products = [
  {
    href: "https://github.com/kullampallep/myportfolio",
    title: "Portfolio Website",
    description:
      "Learn more about me, my professional interests, and work experiences through my portfolio website.",
    thumbnail: portfolio1,
    images: [portfolio1],
    stack: ["Next.js", "TailwindCSS", "Vercel", "PostHog"],
    slug: "portfolio",
    demo: "",
    content: (
     <div>
  <ul>
    <li>
      Customized and enhanced Ascertainy UI Next.js and TailwindCSS template to build a responsive, modern portfolio website.
    </li>
    <li>
      Integrated PostHog analytics for real-time user behavior tracking and data-driven insights and Vercel for deployment.
    </li>
  </ul>
</div>)

  },
  {
    href: "https://github.com/Hootanica/Hootanica",
    title: "Hootanica",
    description:
      "Hootanica is a Mobile Application that allows you to keep track of house plants, and manage watering cycles.",
    thumbnail: hootanica0,
    images: [hootanica1, hootanica2, hootanica3],
    stack: ["react-native"],
    slug: "hootanica",
    demo: "https://drive.google.com/file/d/14aLaUG7tnITPChjimAJI-TL6F3GnagCv/view?usp=sharing",
    content: (
      <div>
        <ul>
          <li>Designed and built a mobile app interface in React Native for logging and managing personalized plant care data, including watering schedules, soil and sunlight needs, and disease history.</li>
          <li>Created a calendar view to track watering tasks and implemented intuitive multi-screen navigation with onboarding and help features.</li>
        </ul> {" "}
      </div>
    ),
  },
  {
    href: "https://github.com/anjalipag/group14-database-project",
    title: "Tune In",
    description:
      "Introducing TuneIn - a social recommendation platform where people create groups based on shared interests and post recommendations for movies, TV shows, music, and books.",
    thumbnail: tunein1,
    images: [tunein1],
    stack: ["Python", "dJango", "PostgreSQL"],
    slug: "tunein",
    demo: "",
    content: (
      <div>
        <ul>
          <li>Built a group-based recommendation web app with a team using Django, PostgreSQL, and Python.</li>
          <li>Implemented features like user auth, group management, commenting, and recommendation posts with role-based access.</li>
          <li>Integrated external APIs to populate books, movies, TV shows and music.</li>
        </ul> {" "}
      </div>
    ),
  },
  {
    href: "https://github.com/kullampallep/insight.ed",
    title: "Insight.Ed",
    description:
      "Insight.Ed is a school rating platform powered by Machine Learning. This projects analyzes Virginia public schools and categorizes schools based on student success rates.",
    thumbnail: insight1,
    images: [insight3, insight4, insight2],
    stack: ["Python", "scikit-learn", "Anvil"],
    slug: "insight.ed",
    demo: "https://m.youtube.com/watch?v=wMsCJockrus",
    content: (
      <div>
        <ul>
          <li>Built a machine learning pipeline to analyze and cluster Virginia public schools based on 30+ academic, funding, and demographic features.</li>
          <li>Engineered a custom 10-point school rating system using K-Means clustering and correlation-weighted scoring.</li>
          <li>Trained logistic regression classifier to predict school rating with ~95% accuracy.</li>
          <li>Developed a front-end using Anvil connected to Google Colab, enabling educators to view ratings and enter data about a school for real time rating prediction</li>
        </ul> {" "}
      </div>
    ),
  },
  {
    href: "https://devpost.com/software/wander-vjhdyn",
    title: "Wander",
    description:
      "Wander is a machine learning-powered travel app that curates personalized city attraction recommendations based on your past likes and dislikes, continuously learning from your feedback to enhance future trip suggestions.",
    thumbnail: wander1,
    images: [wander1, wander2, wander4],
    stack: ["scikit-learn", "Python", "Anvil"],
    slug: "wander",
    demo: "https://devpost.com/software/wander-vjhdyn",
    content: (
      <div>
        <ul>
          <li>Developed Wander, a machine learning–based travel app that recommends city attractions based on users past interests during a hackathon.</li>
          <li>Curated a custom dataset of tourist spots using Generative AI and trained models in Google Colab with scikit-learn and TensorFlow.</li>
          <li>Built a dynamic web app using Anvil to collect user feedback and refine recommendations in real time.</li>
        </ul> {" "}
      </div>
    ),
  },
  {
    href: "https://github.com/schelimilla/UNO-Her",
    title: "Uno-Her",
    description:
      "Uno-Her: Women In Tech Edition, a spin off of the classic game Uno with the primary goal of educating players about influential women in computer science history.",
    thumbnail: unoher1,
    images: [unoher1, unoher2, unoher3],
    stack: ["Python"],
    slug: "unoher",
    demo: "https://devpost.com/software/uno-her",
    content: (
      <div>
        <ul>
          <li>Developed an educational Uno-style game, Uno-Her, using Python and Pygame, featuring an interactive GUI and automated computer opponent logic during a hackathon.</li>
          <li>Implemented event-driven programming to handle user interactions, including card selection and turn-based gameplay updates.</li>
        </ul> {" "}
      </div>
    ),
  },
];
