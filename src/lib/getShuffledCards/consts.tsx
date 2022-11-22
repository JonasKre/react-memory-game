import {
  DiAngularSimple,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
} from "react-icons/di";

import { FaVuejs } from "react-icons/fa";

const CARD_DATA = [
  { name: "react", component: <DiReact /> },
  { name: "angular", component: <DiAngularSimple /> },
  { name: "javascript", component: <DiJavascript1 /> },
  { name: "html", component: <DiHtml5 /> },
  { name: "css", component: <DiCss3 /> },
  { name: "vue", component: <FaVuejs /> },
];

export default CARD_DATA;
