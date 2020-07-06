import Lod from "../assets/images/Lod.png";
import LFG from "../assets/images/LFGwithicon.png";
import Flo from "../assets/images/floswhistle.png";

export const projects = [
  {
    pic: Flo,
    alt: "Flo's Whistle Pandemic",
    title: "Flo's Whistle: Pandemic",
    description:
      "Worked in a small team as frontend developer to build an anonymous reporting platform for medical professionals amidst COVID-19 pandemic with visual data dashboard.",
    tech: "React, react-router-dom, SCSS, Formik, Yup, react-svgmt, d3.",
    github: "https://github.com/codefordayton/floswhistle-pandemic-v2",
    demo: "https://beta.floswhistle.org",
  },
  {
    pic: Lod,
    alt: "Diablo 2 character calculator",
    title: "Diablo II cc",
    description:
      "Complex calculator for Diablo II designed for theory crafting and character build sharing with a companion public resource REST API.",
    tech:
      "React, react-router-dom, Bootstrap, SCSS, Redux, Reselect, Axios, Formik, Yup, Node/Express, Mongoose, MongoDB",
    github: "https://github.com/c-malecki/pod-character-calculator",
    demo: "https://diabloii-cc.netlify.app/",
  },
  {
    pic: LFG,
    alt: "LFG social media app",
    title: "LFG - Looking for Group",
    description:
      "Working prototype of a mock social media site for connecting gamers with play groups. API functionality currently implemented through the use of React context API.",
    tech: "React, react-router-dom, SASS, context API, Formik, Yup",
    github: "https://github.com/c-malecki/lfg-app",
    demo: "https://lfg-demo.netlify.app/",
  },
];
