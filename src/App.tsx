import React from 'react'
import ThemeApplier from "./styles/globalStyles/ThemeApplier";
import Container from "./styles/globalStyles/container"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Section } from "./styles/globalStyles/globalHTML"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import Technologies from "./components/Technologies/Technologies"
import Acomplishments from "./components/Acomplishments/Acomplishments"
import Theme from './styles/globalStyles/theme';
import Coffee from './components/Coffee/Coffee';
import About from './components/About/About';

export default function App() {
  return (
    <ThemeApplier theme={Theme}>
      <Container>
        <Header />
        <Section grid={true} >
          <Hero />
          <Coffee />
        </Section>
        <Projects />
        <Technologies />
        <About />
        <Acomplishments />
        <Footer />
      </Container>
    </ ThemeApplier>
  )
}
