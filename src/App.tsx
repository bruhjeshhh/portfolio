import { Navbar } from "./components/Navbar";
import { DeployPipeline } from "./components/DeployPipeline";
import { Hero } from "./components/Hero";
import { MetricsBar } from "./components/MetricsBar";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { GithubActivity } from "./components/GithubActivity";
import { Projects } from "./components/Projects";
import { Contact, Footer } from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <DeployPipeline />
      <main className="xl:pl-8">
        <Hero />
        <MetricsBar />
        <About />
        <Skills />
        <Experience />
        <GithubActivity />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
