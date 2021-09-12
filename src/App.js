import ThemeApplier from "./components/ThemeApplier";
import Container from "./styles/globalStyles/container"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Section } from "./styles/globalStyles/globalHTML"
import Hero from "./components/Hero/Hero"
import BgAnimation from "./components/BackgrooundAnimation/BackgroundAnimation"
import Projects from "./components/Projects/Projects"
import Technologies from "./components/Technologies/Technologies"
import Timeline from "./components/TimeLine/TimeLine"
import Acomplishments from "./components/Acomplishments/Acomplishments"

function App() {
  return (
    <ThemeApplier>
      <Container>
        <Header />
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
        <Footer />
      </Container>
    </ThemeApplier>
  );
}

export default App;
