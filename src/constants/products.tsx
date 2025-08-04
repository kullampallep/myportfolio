import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://github.com/Hootanica/Hootanica",
    title: "Hootanica",
    description:
      "Hootanica is a Mobile Application that allows you to keep track of house plants, and manage watering cycles.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["react-native"],
    slug: "hootanica",
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
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Python", "dJango", "PostgreSQL"],
    slug: "tunein",
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
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Python", "scikit-learn", "Anvil"],
    slug: "insight.ed",
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
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["scikit-learn", "Python", "Anvil"],
    slug: "wander",
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
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Python"],
    slug: "unoher",
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
