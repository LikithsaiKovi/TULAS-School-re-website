"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animation/ScrollReveal";

type SectionKey = "academics" | "activities" | "boarding";
type ActivityKey = "sport" | "clubs";

const official = {
  curriculum: "https://tis.edu.in/academics/affilation/",
  activities: "https://tis.edu.in/beyond-academics/",
  sports: "https://tis.edu.in/beyond-academics/sports/",
  clubs: "https://tis.edu.in/beyond-academics/clubs-and-societies/",
  boarding: "https://tis.edu.in/boarding-life/facilities/",
  faq: "https://tis.edu.in/faq/",
  admissions: "https://tis.edu.in/admission-procedure/",
};

const learningNotes = [
  { title: "CBSE course structure", text: "The school follows the Central Board of Secondary Education course structure for Classes IV–XII." },
  { title: "Project & art-integrated learning", text: "The curriculum page describes project-based and art-integrated approaches to learning." },
  { title: "Learning with technology", text: "The school lists digital classrooms, VR simulators and online assessment tools among its learning resources." },
  { title: "Beyond the classroom", text: "Educational trips, science quests, seminars and business conclaves are listed as experiential learning opportunities." },
];

const sports = [
  { name: "Archery", note: "A school archery ground with target lanes." },
  { name: "Cycling", note: "A cycling track and after-school coaching." },
  { name: "Horse riding", note: "Lessons for beginners and experienced riders." },
  { name: "Swimming", note: "Swimming is listed among the school’s sports facilities." },
  { name: "Football", note: "The school lists a football academy and field." },
  { name: "Hockey", note: "Field hockey is part of the school’s sports programme." },
  { name: "Shooting", note: "The school lists a 10-metre indoor range." },
  { name: "Basketball", note: "Basketball is among the school’s coached sports." },
  { name: "Cricket", note: "Cricket practice nets and coaching are listed by the school." },
  { name: "Badminton", note: "The school lists badminton and a coaching club." },
  { name: "Squash", note: "Squash courts and junior programmes are listed by the school." },
  { name: "Taekwondo", note: "The school lists taekwondo instruction." },
  { name: "Volleyball", note: "A volleyball court is listed among the school’s facilities." },
  { name: "Lawn tennis", note: "The school lists tennis courts and coaching." },
  { name: "Table tennis", note: "A table tennis area is listed among the school’s indoor sports." },
  { name: "Billiards & snooker", note: "Billiards and snooker are listed among the school’s indoor activities." },
  { name: "Throwball", note: "Throwball is listed among the school’s sports facilities." },
];

const clubs = [
  { name: "Bookworm", note: "A reading-focused club described by the school." },
  { name: "Student committees", note: "The school describes student-led committees as a way to take part in campus life." },
  { name: "Environment", note: "The clubs page describes student efforts to raise environmental awareness." },
];

const boardingDetails = [
  { title: "Separate hostels", text: "The school describes separate boarding houses for boys and girls." },
  { title: "Meals & dining", text: "The school describes its mess as healthy and multi-cuisine. Its FAQ says meals are vegetarian." },
  { title: "Library & learning spaces", text: "The facilities page lists a library with 20,000+ books and seating for over 100 students, plus digital workstations and laboratories." },
  { title: "Care & support", text: "The facilities page lists personal counselling, career counselling and a 24/7 ambulance service." },
];

const sectionTabs: { key: SectionKey; label: string; number: string }[] = [
  { key: "academics", label: "Academics", number: "01" },
  { key: "activities", label: "Clubs & sport", number: "02" },
  { key: "boarding", label: "Boarding", number: "03" },
];

export default function SchoolExperience() {
  const [activeSection, setActiveSection] = useState<SectionKey>("academics");
  const [activeActivity, setActiveActivity] = useState<ActivityKey>("sport");
  const [showAllSports, setShowAllSports] = useState(false);
  const activityItems = activeActivity === "sport" ? sports : clubs;
  const visibleActivities = activeActivity === "sport" && !showAllSports ? activityItems.slice(0, 6) : activityItems;

  return (
    <section id="life" className="experience-section section-pad">
      <div className="section-kicker"><span>03</span><span>Inside Tula’s</span></div>
      <div className="experience-heading">
        <h2>More to a school<br />than <em>the timetable.</em></h2>
        <p>Explore the curriculum, the pursuits students can take up, and what the school describes about boarding life.</p>
      </div>

      <div className="experience-tabs" role="group" aria-label="Explore school life">
        {sectionTabs.map((tab) => (
          <button
            type="button"
            key={tab.key}
            className={`experience-tab${activeSection === tab.key ? " is-selected" : ""}`}
            aria-pressed={activeSection === tab.key}
            onClick={() => setActiveSection(tab.key)}
          >
            <span>{tab.number}</span>{tab.label}<span className="tab-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>

      <div className="experience-panel" key={activeSection}>
        {activeSection === "academics" && (
          <div className="academic-panel">
            <div className="experience-panel-intro">
              <p className="card-label">Classes IV–XII · CBSE</p>
              <h3>Learning with<br /><em>room to apply.</em></h3>
              <p>The school’s curriculum page describes a CBSE course structure with reasoning, project work and learning experiences that extend beyond the classroom.</p>
              <a className="underlined-link" href={official.curriculum} target="_blank" rel="noreferrer">Read the curriculum <span aria-hidden="true">↗</span></a>
            </div>
            <div className="learning-note-list">
              {learningNotes.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.08}>
                <article className="learning-note">
                  <span className="note-index">0{index + 1}</span>
                  <div><h4>{item.title}</h4><p>{item.text}</p></div>
                </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {activeSection === "activities" && (
          <div className="activities-panel">
            <div className="activities-panel-head">
              <div><p className="card-label">Beyond academics</p><h3>Follow an interest.<br /><em>Find your people.</em></h3></div>
              <p>The school lists sports, clubs and student committees as part of campus life.</p>
            </div>
            <div className="activity-controls" role="group" aria-label="Filter activities">
              <button type="button" aria-pressed={activeActivity === "sport"} className={activeActivity === "sport" ? "is-selected" : ""} onClick={() => { setActiveActivity("sport"); setShowAllSports(false); }}>Sports</button>
              <button type="button" aria-pressed={activeActivity === "clubs"} className={activeActivity === "clubs" ? "is-selected" : ""} onClick={() => { setActiveActivity("clubs"); setShowAllSports(false); }}>Clubs & committees</button>
            </div>
            <div className="activity-list" aria-live="polite">
              {visibleActivities.map((item, index) => (
                <ScrollReveal key={item.name} delay={(index % 6) * 0.045}>
                <article className="activity-list-item">
                  <span className="activity-index">{String(index + 1).padStart(2, "0")}</span>
                  <div><h4>{item.name}</h4><p>{item.note}</p></div>
                  <span className="activity-list-mark" aria-hidden="true">↗</span>
                </article>
                </ScrollReveal>
              ))}
            </div>
            {activeActivity === "sport" && (
              <button className="show-more" type="button" onClick={() => setShowAllSports((value) => !value)} aria-expanded={showAllSports}>
                {showAllSports ? "Show fewer sports" : "Show all listed sports"}<span aria-hidden="true">{showAllSports ? "−" : "+"}</span>
              </button>
            )}
            <a className="underlined-link" href={activeActivity === "sport" ? official.sports : official.clubs} target="_blank" rel="noreferrer">More on the official Tula’s site <span aria-hidden="true">↗</span></a>
          </div>
        )}

        {activeSection === "boarding" && (
          <div className="boarding-panel">
            <div className="experience-panel-intro boarding-intro">
              <p className="card-label">Boarding life</p>
              <h3>A place to learn,<br /><em>rest and belong.</em></h3>
              <p>Families can review the school’s published details about hostels, dining, learning spaces and student support.</p>
              <a className="underlined-link" href={official.boarding} target="_blank" rel="noreferrer">See boarding facilities <span aria-hidden="true">↗</span></a>
            </div>
            <div className="boarding-accordions">
              {boardingDetails.map((detail, index) => (
                <details className="boarding-detail" key={detail.title} open={index === 0}>
                  <summary><span className="note-index">0{index + 1}</span><span>{detail.title}</span><span className="detail-plus" aria-hidden="true">+</span></summary>
                  <p>{detail.text}</p>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="faq-block">
        <div className="faq-heading"><div><p className="card-label">A few useful answers</p><h3>Questions families<br />often <em>ask.</em></h3></div><a className="underlined-link" href={official.faq} target="_blank" rel="noreferrer">All school FAQs <span aria-hidden="true">↗</span></a></div>
        <div className="faq-list">
          <details><summary>Which classes does Tula’s offer?<span aria-hidden="true">+</span></summary><p>The school describes its CBSE classes as IV to XII. Check the admissions portal for current class availability.</p></details>
          <details><summary>Are boarding houses separate for boys and girls?<span aria-hidden="true">+</span></summary><p>Yes. The school’s FAQ describes separate boarding houses for boys and girls.</p></details>
          <details><summary>What does the school say about meals?<span aria-hidden="true">+</span></summary><p>The school describes a multi-cuisine dining hall and says its meals are vegetarian. Contact admissions if your family needs current menu or dietary details.</p></details>
          <details><summary>How can I ask about admissions?<span aria-hidden="true">+</span></summary><p>Use the official <a href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">admissions portal</a>, call <a href="tel:+919837983791">+91 98379 83791</a> or email <a href="mailto:info@tis.edu.in">info@tis.edu.in</a>.</p></details>
        </div>
      </div>

      <div className="admissions-steps">
        <div className="admissions-steps-heading"><p className="card-label">Admissions</p><h3>Start with a<br /><em>conversation.</em></h3><p>The school’s admission procedure outlines four stages. Confirm current requirements and dates directly with the admissions team.</p><a className="underlined-link" href={official.admissions} target="_blank" rel="noreferrer">Read admission procedure <span aria-hidden="true">↗</span></a></div>
        <ol className="steps-list">
          {["Application & registration", "Supporting documents", "Assessment & evaluation", "Enrolment & confirmation"].map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong><span className="step-line" /></li>)}
        </ol>
      </div>
    </section>
  );
}
