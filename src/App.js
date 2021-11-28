import "./styles.css";

import {
  Container,
  Grid,
  GridColumn,
  Image,
  ImageGroup,
  Item,
} from "semantic-ui-react";
import Footer from "./components/Footer/Footer";
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
