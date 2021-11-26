import "./styles.css";

import {
  Container,
  Grid,
  GridColumn,
  Image,
  ImageGroup,
  Item,
} from "semantic-ui-react";
import Footer from "./sections/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Header from "./components/Header/Header";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href =
//   "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);
