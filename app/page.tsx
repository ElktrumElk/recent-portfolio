"use client";
import { Gap, Main, ScrollView } from "elk-components";
import Hero from "./component/hero/page";
import About from "./component/about/page";
import Skill from "./component/skill/page";
import Projects from "./component/projects/page";
import Experience from "./component/experience/page";
import Contact from "./component/contact/page";
import Footer from "./component/footer/page";
import Marquee from "./component/marquee/Marquee";
import ScrollToTop from "./component/ScrollToTop";

export default function Home() {
  return (
    <>
      <Main
        className="main"
        child={() => (
          <>
            <ScrollView
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              child={() => (
                <>
                  <section
                    id="home"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Hero />
                  </section>

                  <Marquee />

                  <section
                    id="about"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      marginBlockStart: "2rem",
                    }}
                  >
                    <About />
                  </section>

                  <Gap height="6rem" />
                  <section
                    id="skills"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      marginBlockStart: "2rem",
                    }}
                  >
                    <Skill />
                  </section>

                  <Gap height="6rem" />

                  <section
                    id="experience"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      marginBlockStart: "2rem",
                    }}
                  >
                    <Experience />
                  </section>

                  <Gap height="6rem" />

                  <section
                    id="projects"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      marginBlockStart: "2rem",
                    }}
                  >
                    <Projects />
                  </section>

                  <Gap height="6rem" />

                  <section
                    id="contact"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      marginBlockStart: "2rem",
                    }}
                  >
                    <Contact />
                  </section>

                  <Footer />
                </>
              )}
            />
          </>
        )}
      />
      <ScrollToTop />
    </>
  );
}
