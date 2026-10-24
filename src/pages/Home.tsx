import { useState } from "react";
import { Modal, Stack } from "@mantine/core";
import { Link } from "react-router-dom";
import collage from "../assets/moon-reuben.png";
import resume from "../assets/reuben_bishop_cv.pdf";
import CurrentWorkAccordion from "../components/WorkAccordion/CurrentWorkAccordion";
import PreviousWorkAccordion from "../components/WorkAccordion/PreviousWorkAccordion";
import EducationAccordion from "../components/EducationAccordion/EducationAccordion";
import CertificateAccordion from "../components/EducationAccordion/CertificateAccordion";

type Panel = "Now" | "Experience" | "Projects" | "A bit more";
export default function Home() {
  const [panel, setPanel] = useState<Panel | null>(null);
  return (
    <main className="moon-page">
      <header className="site-header"><a className="wordmark" href="#/">Reuben Bishop</a><a href="mailto:reubenjamesbishop@gmail.com">Say hello ↗</a></header>
      <div className="composition">
        <header className="hello-block"><span className="eyebrow">Sydney, Australia</span><h1>Hey, I’m<br />Reuben.</h1><p>Software engineer.<br />Building things with AI.</p></header>
        <figure className="moon-portrait"><img src={collage} alt="Reuben with his arms raised beneath a giant moon" /></figure>
        <section className="snippet now-block"><span className="eyebrow"><i className="status-dot" />Now</span><h2>AI DevX at Canva.</h2><p>Agent tools. AI spend & usage.<br />Making sense of the numbers.</p><button onClick={() => setPanel("Now")}>What I’m working on <span>↗</span></button></section>
        <section className="snippet experience-block"><span className="eyebrow">Experience</span><h2>A few places<br />I’ve built things.</h2><p>Cortex → Schneider Electric.<br />iO Energy. And a few others.</p><button onClick={() => setPanel("Experience")}>The work <span>↗</span></button></section>
        <section className="snippet projects-block"><span className="eyebrow">On the side</span><h2>Usually making<br />something.</h2><p>An AI patient. A freight dashboard.<br />A very unnecessary puzzle solver.</p><button onClick={() => setPanel("Projects")}>Have a look <span>↗</span></button></section>
      </div>
      <footer className="site-footer"><button onClick={() => setPanel("A bit more")}>A bit more about me <span>↗</span></button><nav aria-label="Profile links"><a href={resume}>Resume ↗</a><a href="https://github.com/reubenjamesbishop">GitHub ↗</a><a href="https://www.linkedin.com/in/reubenbishop/">LinkedIn ↗</a></nav></footer>
      <Modal opened={panel !== null} onClose={() => setPanel(null)} title={panel} closeButtonProps={{ "aria-label": "Close details" }} centered size="lg" padding="xl" radius="md" overlayProps={{ backgroundOpacity: 0.18, blur: 5 }} classNames={{ content: "portfolio-popout", header: "portfolio-popout-header", body: "detail-panel", title: "panel-title" }}>
        {panel === "Now" && <CurrentWorkAccordion />}
        {panel === "Experience" && <PreviousWorkAccordion />}
        {panel === "Projects" && <div className="projects-list">
          <article><h3>Kwack</h3><p>An AI patient to practise clinical exams with. Create cases, share them, get some extra reps in.</p><div className="text-links"><a href="https://kwack.io">Try Kwack ↗</a><Link to="/blog/building-kwack">How I built it ↗</Link></div><details className="demo-details"><summary>Watch the demo</summary><div className="video-frame"><iframe src="https://www.youtube.com/embed/x8-saE-Pvdc" title="Kwack demo" loading="lazy" allowFullScreen /></div></details></article>
          <article><h3>Freight Analysis Dashboard</h3><p>GovHack 2023. One challenge win, two runners-up. Built with three teammates using Python + Streamlit.</p><a href="https://github.com/reubenjamesbishop/govhack23">View project ↗</a></article>
          <article><h3>Puzzle of the Day Solver</h3><p>Taking all the fun out of a daily puzzle with Python, Flask and React.</p><a href="https://medium.com/@reubenjamesbishop/taking-all-of-the-fun-out-of-puzzles-with-python-flask-a81f001a6cb0">Read the write-up ↗</a></article>
        </div>}
        {panel === "A bit more" && <Stack gap="lg"><p>Python · TypeScript · Go · SQL · Snowflake · Dagster · dbt · React · AWS · Docker · Terraform</p><EducationAccordion /><CertificateAccordion /></Stack>}
      </Modal>
    </main>
  );
}
