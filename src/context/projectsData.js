import Lod from "../assets/images/Lod.png";
import FTA from "../assets/images/FinancialTrackerApp.png";
import Flo from "../assets/images/floswhistle.png";

export const projects = [
  {
    pic: Flo,
    alt: "Flo's Whistle Pandemic",
    title: "Flo's Whistle: Pandemic",
    titleId: 2,
    description:
      "Anonymous reporting platform for medical professionals amidst COVID-19 pandemic with visual data dashboard.",
    descriptionId: 2,
    github: "https://github.com/codefordayton/floswhistle-pandemic-v2",
    demo: "https://beta.floswhistle.org",
  },
  {
    pic: Lod,
    alt: "Diablo 2 character calculator",
    title: "Diablo II cc",
    titleId: 1,
    description:
      "Complex calculator built with MERN stack that recreates Diablo II's game logic and UI.",
    descriptionId: 1,
    github: "https://github.com/c-malecki/pod-character-calculator",
    demo: "https://diabloii-cc.netlify.app/",
  },
  {
    pic: FTA,
    alt: "Financial Tracker Application",
    title: "Financial Tracker App",
    titleId: 2,
    description:
      "Personal finance tracker similar to banking app. Uses React, React-Router, Redux, Formik, Yup, Bootstrap.",
    descriptionId: 2,
    github: "https://github.com/c-malecki/FinancialTrackerApp",
    demo: "https://codesandbox.io/s/github/c-malecki/FinancialTrackerApp",
  },
];
