import { IconBriefcase, IconMoon, IconSun, IconExternalLink, IconArticle, IconBrandGithub, IconBrandMedium, IconBrandLinkedin, IconFileText } from "@tabler/icons-react";
import HarbourScene from "../components/HarbourScene";
import { useState } from "react";
import { Button, Modal } from "@mantine/core";
import { Link } from "react-router-dom";
import personCutout from "../assets/reuben-original-clean-edge.png";
import moonCutout from "../assets/moon-repaired-only.png";
import resume from "../assets/reuben_bishop_cv.pdf";
import CurrentWorkAccordion from "../components/WorkAccordion/CurrentWorkAccordion";
import PreviousWorkAccordion from "../components/WorkAccordion/PreviousWorkAccordion";

type Panel = "Now" | "Experience" | "Projects" | "A bit more";
export default function Home({ night, toggleTheme }: { night: boolean; toggleTheme: () => void }) {
  const [panel, setPanel] = useState<Panel | null>(null);
  return (
    <main className={`moon-page${night ? " night-mode" : ""}`}>
      <header className="site-header"><a className="wordmark" href="#/">Reuben Bishop</a><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={night ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={night} title={night ? "Switch to light mode" : "Switch to dark mode"}>
        <IconSun className="theme-sun" size={21} aria-hidden="true" />
        <IconMoon className="theme-moon" size={21} aria-hidden="true" />
      </button></header>
      <div className="composition">
        <header className="hello-block"><h1>Hey, I’m<br />Reuben.</h1><p>Software engineer with data sprinkles</p><HarbourScene night={night} /></header>
        <figure className="moon-portrait"><svg className="portrait-layers" viewBox="0 0 1800 2400" role="img" aria-label="Reuben with his arms raised beneath a giant moon">
          <image className="separate-moon" href={moonCutout} x="170" y="310" width="950" height="950" />
          <image className="original-person" href={personCutout} width="1800" height="2400" />
        </svg></figure>
        <section className="snippet now-block"><span className="eyebrow"><IconBriefcase size={16} stroke={1.5} aria-hidden="true" />currently</span><h2>AI DevX at Canva</h2><p className="current-role">Software Engineer</p><p>Working on improving the agentic engineering experience at Canva’s Sydney HQ.</p><button onClick={() => setPanel("Now")}>What I’ve been working on <span>↗</span></button></section>
        <section className="snippet experience-block"><span className="eyebrow">Experience</span><h2>A few places <br />I’ve built things.</h2><p>Mostly startups and energy tech, with some submarines sprinkled in.</p><button onClick={() => setPanel("Experience")}>The work <span>↗</span></button></section>
        <section className="snippet projects-block"><span className="eyebrow">Side Projects</span><h2>Usually making <br />something.</h2><p>AI medical study tools, hackathon projects and a very unnecessary puzzle solver.</p><button onClick={() => setPanel("Projects")}>Have a look <span>↗</span></button></section>
      </div>
      <footer className="site-footer"><div className="footer-left"><button onClick={() => setPanel("A bit more")}>A bit more about me <span>↗</span></button></div><nav aria-label="Profile links"><a href={resume}><IconFileText size={15} aria-hidden="true" />Resume ↗</a><a href="https://github.com/reubenjamesbishop"><IconBrandGithub size={15} aria-hidden="true" />GitHub ↗</a><a href="https://www.linkedin.com/in/reubenbishop/"><IconBrandLinkedin size={15} aria-hidden="true" />LinkedIn ↗</a></nav></footer>
      <Modal opened={panel !== null} onClose={() => setPanel(null)} title={panel === "Projects" ? "Side Projects" : panel} closeButtonProps={{ "aria-label": "Close details" }} centered size="lg" padding="xl" radius="md" overlayProps={{ backgroundOpacity: 0.18, blur: 5 }} classNames={{ inner: "portfolio-popout-inner", close: "portfolio-popout-close", content: night ? "portfolio-popout night-popout" : "portfolio-popout", header: "portfolio-popout-header", body: "detail-panel", title: "panel-title" }}>
        {panel === "Now" && <CurrentWorkAccordion />}
        {panel === "Experience" && <PreviousWorkAccordion />}
        {panel === "Projects" && <div className="projects-list">
          <article><h3>Kwack</h3><p>An AI patient to practise clinical exams with. Create cases, share them, get some extra reps in.</p>
            <div className="project-actions"><Button component="a" href="https://kwack.io" variant="outline" leftSection={<IconExternalLink size={16} aria-hidden="true" />}>Try Kwack</Button><Button component={Link} to="/blog/building-kwack" variant="outline" leftSection={<IconArticle size={16} aria-hidden="true" />}>How I built it</Button></div>
            <div className="video-frame"><iframe src="https://www.youtube.com/embed/x8-saE-Pvdc" title="Kwack demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
          </article>
          <article><h3>Puzzle of the Day Solver</h3><p>Taking all the fun out of a daily puzzle with Python, Flask and React.</p><div className="project-actions"><Button component="a" href="https://medium.com/@reubenjamesbishop/taking-all-of-the-fun-out-of-puzzles-with-python-flask-a81f001a6cb0" variant="outline" leftSection={<IconBrandMedium size={16} aria-hidden="true" />}>Read the write-up on Medium</Button></div></article>
          <article><h3>Freight Analysis Dashboard</h3><p>GovHack 2023. One challenge win, two runners-up. Built with three teammates using Python + Streamlit.</p><div className="project-actions"><Button component="a" href="https://github.com/reubenjamesbishop/govhack23" variant="outline" leftSection={<IconBrandGithub size={16} aria-hidden="true" />}>View project</Button></div></article>
        </div>}
        {panel === "A bit more" && <p>I studied mechanical engineering with computer science at Adelaide Uni, then did a grad dip in data science at UNSW. I like working on a bit of everything—especially anything that combines software engineering and data science.</p>}
      </Modal>
    </main>
  );
}
