"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Medal, MoveUpRight, Sparkles, Trophy } from "lucide-react";

const media = "https://tis.edu.in/_next/static/media/";

const sports = [
  ["Archery", "Precision", "archery.7a805345.png"], ["Cycling", "Outdoor", "cycling.80dbb9b1.png"],
  ["Hockey", "Team", "hockey.219fe552.png"], ["Swimming", "Water", "swimming.d4285534.png"],
  ["Taekwondo", "Indoor", ""], ["Football", "Team", "football.ca61e5d0.png"],
  ["Shooting range", "Precision", "shooting.b0b11d74.png"], ["Horse riding", "Outdoor", "horseRiding.8f259127.png"],
  ["Billiards", "Indoor", "billiards-single.a1e831c6.png"], ["Squash", "Racquet", "squash.ffa0360a.png"],
  ["Volleyball", "Team", "volleyball.045be884.png"], ["Basketball", "Team", "basketball.fa70909d.png"],
  ["Cricket", "Team", "Cricket.b06b18ca.png"], ["Lawn tennis", "Racquet", "lawnTennis.7b3b894a.png"],
  ["Badminton", "Racquet", "badminton.a314ff00.png"], ["Table tennis", "Racquet", "tableTennis.61f6bd56.png"],
] as const;

const voices = [
  { name: "Parent review", relation: "Unattributed on the TIS homepage", quote: "We have seen a remarkable improvement in our child's confidence and skills since joining Tulas. The teachers here are genuinely dedicated to bringing out the best in every student, nurturing their strengths and helping them grow in all aspects of life." },
  { name: "Tashi Tsering", relation: "Father of Jigmet Skaldon", quote: "I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son." },
  { name: "Namita Agarwal", relation: "Mother of Krishna Agarwal", quote: "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better." },
  { name: "Sandeep Kumar", relation: "Father of Aryan", quote: "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him." },
  { name: "Pinky Sharma", relation: "Mother of Swastik Sharma", quote: "I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her." },
  { name: "Suresh Kumar", relation: "Father of Aditya Kumar", quote: "Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers." },
  { name: "Mrs Urja Bhayani", relation: "Mother of Shikha & Samarth Bhayani", quote: "Right from the beginning, we have been in touch with Robin Sir and Shweta Ma’am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics." },
  { name: "Amit Agrawal", relation: "Father of Samruddhi Agrawal", quote: "Being a parent it's a big challenge to find a Boarding School that qualifies your Parameters of Security, Health, Hygiene, Academics, Non Academics and Self discipline being key features." },
  { name: "Ashu Arora", relation: "Mother of Manisha Changrani", quote: "It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha." },
  { name: "Gulabdas Gupta", relation: "Father of Annika Gulabdas Gupta", quote: "We admitted our daughter, Annika Gulabdas Gupta, in class VIII this year in Tulas. She is very much satisfied with the facilities offered at Tulas related to education, extra-curricular activities, recreation & hygiene." },
  { name: "Selendra K. Ajmera", relation: "Father of Aman Ajmera", quote: "Hi Tulas! In the beginning it was very tough for me to send my son to a boarding school but the day I visited the campus the first thing which came to my mind was that this is the right place and right environment." },
];

const visitors = [
  ["Sakshi Malik", "First Indian wrestler to win an Olympic medal (Rio 2016); Olympic bronze medalist, 2014 Commonwealth Games silver medalist, Rajiv Gandhi Khel Ratna (2016) and Padma Shri (2017), as listed by TIS", "SakshiMalik.91174bf4.webp"],
  ["Vishesh Bhriguvanshi", "Indian basketball team captain and FIBA Asia Championship player; under his captaincy India won 3x3 basketball gold at the 2008 Asian Beach Games, as listed by TIS", "VisheshBhriguvanshi.52af8bfd.webp"],
  ["Prakashi Tomar & Late Chandro Tomar", "Known as ‘Shooter Dadi’; the school page notes 30 national championship wins and the film Saand Ki Aankh based on their lives", "PrakashiTomar.339dbb95.webp"],
  ["Abhishek Verma", "Archer; 6th-highest world ranking, Arjuna Awardee and 2013 Asian Games gold medalist, as listed by TIS", "AbhishekVerma.18f9d349.webp"],
  ["Aditi Gopichand Swami", "Archer; 7th-highest world ranking, Arjuna Awardee and 2024 world champion, as listed by TIS", "AditiGopichandSwami.b7afa246.webp"],
  ["Jeevan Jyot Singh Teja", "Dronacharya Awardee in Archery (2022)", "JeevanJyotSinghTeja.9a07711c.webp"],
  ["Ojus Devtale", "Archer; 9th-highest world ranking, Arjuna Awardee (2023), described by the school as a world champion", "OjusPravinDeotale.1d2e01cc.webp"],
  ["Rajat Chauhan", "Archer; 5th-highest world ranking and Arjuna Awardee (2016), as listed by TIS", "RajatChauhan.bcb1fbf2.webp"],
  ["Devendra Singh Bisht", "Under-18 school Indian football team selector", "DevendraSinghBisht.09635f71.webp"],
  ["Manish Metani", "Indian football player", "ManishMetani.ca55bf71.webp"],
  ["Saurabh Joshi", "YouTube creator; the school page lists 30 million subscribers", "SaurabhJoshi.450ff5df.webp"],
  ["Arushi Nishank", "Kathak dancer, actor, film producer, environmentalist, TEDx speaker and National Convener of Sparsh Ganga, as listed by TIS", "ArushiNishank.f3341404.webp"],
  ["Laxmi Agarwal", "International Women Empowerment Award recipient; founder and president of the Laxmi Foundation, as described by TIS", "LakshmiAgarwal.7405df5d.webp"],
] as const;

const leaders = [
  ["Shri Dhan Singh Rawat", "Minister of Higher Education, Uttarakhand (as listed by TIS)", "DhanSinghRawat.f504bd14.webp"],
  ["Shri Trivendra Singh Rawat", "Member of Parliament; former Chief Minister of Uttarakhand (as listed by TIS)", "TrivendraSinghRawat.c2e8d88b.webp"],
  ["Shri Subodh Uniyal", "Technical Education and Forest Minister, Uttarakhand (as listed by TIS)", "SubodhUniyal.25533860.webp"],
  ["Dr Ramesh Pokhriyal Nishank", "Former Union Cabinet Minister for Education; former Chief Minister of Uttarakhand", "RameshPokhriyalNishank.5f11fd77.webp"],
  ["Shri Bhagat Singh Koshyari", "Former Governor of Maharashtra and Goa; former Chief Minister of Uttarakhand", "BhagatSinghKoshyari.f996a329.webp"],
  ["Shri Dharmendra Pradhan", "Union Minister of Education for India (as listed by TIS)", "DharmendraPradhan.cae1e9ae.webp"],
  ["Shri Anurag Tripathi", "CBSE Secretary Uttarakhand (as listed by TIS)", "AnuragTripathi.a8e203b4.webp"],
  ["Shri Arvind Pandey", "MLA; former Education Minister", "ArvindPandey.3f959220.webp"],
  ["Shri Namami Bansal", "IAS Municipal Commissioner Uttarakhand (as listed by TIS)", "NamamiBansal.97f4f1f0.webp"],
  ["Shri Abhinav Kumar", "ADG and former DGP of Uttarakhand Police", "AbhinavKumar.8cbdb15a.webp"],
  ["Shri Janmejaya Khanduri", "IG Dehradun (as listed by TIS)", "JanmejayaKhanduri.18ae0527.webp"],
  ["Shri Ashok Kumar", "Former DGP, Uttarakhand", "AshokKumar.b9a984fa.webp"],
  ["Shri Amit Kumar Sinha", "ADG, Principal Secretary Sports, Uttarakhand (as listed by TIS)", "AmitKumarSinha.5e245cdc.webp"],
  ["Shri Sunil Uniyal Gama", "Former Mayor, Municipal Corporation, Dehradun", "SunilUniyalGama.55361603.webp"],
  ["Shri Sahdev Singh Pundir", "MLA Sahaspur, Uttarakhand (as listed by TIS)", "SahdevSinghPundir.7aa9859f.webp"],
] as const;

const filters = ["All 16", "Team", "Racquet", "Precision", "Outdoor", "Indoor", "Water"] as const;
const moments = [
  { label: "Dance", kind: "Creative practice", file: "polo.973ddbae.webp", alt: "A dance performance from the TIS homepage gallery" },
  { label: "In practice", kind: "Campus life", file: "Image%203.21dc9e69.webp", alt: "A student practising a martial art in the TIS homepage gallery" },
  { label: "Karate", kind: "Practice", file: "karate.4020fba5.webp", alt: "Karate practice at Tula’s International School" },
  { label: "In the lab", kind: "Learning in action", file: "swimming.6fc81e65.webp", alt: "A student working with a laboratory instrument in the TIS homepage gallery" },
  { label: "Pottery", kind: "Creative practice", file: "pot.6f7c2ee3.webp", alt: "Pottery at Tula’s International School" },
  { label: "Art", kind: "Creative practice", file: "dance.88843edb.webp", alt: "A student painting in the TIS homepage gallery" },
] as const;

const awardImages = ["TopBoarding.e5405c1a.jpg", "BestResidential.5173db8d.jpg", "UTTARAKHAND.652376d5.jpg"] as const;
const partnerMarks = [
  "Universidad.935e33e1.png", "yhnbepcntet.3b80eac6.jpg", "Universitat.f7fac869.jpg", "Cpi6.106c6037.jpg",
  "inseec.780a3115.png", "Trinty.31016999.png", "University.6c89dc70.png", "International_Award_for_Young_People_logo.a0d1c4fa.jpg",
  "lions.bf493cc1.png", "inseecU.1e5c929a.png", "Universitas.d9db402c.png", "universityLogo.6e446aad.jpg",
] as const;

export default function HomeHighlights() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All 16");
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [showVisitors, setShowVisitors] = useState(false);
  const [momentIndex, setMomentIndex] = useState(0);
  const visibleSports = filter === "All 16" ? sports : sports.filter(([, category]) => category === filter);
  const voice = voices[voiceIndex];
  const stepVoice = (direction: number) => setVoiceIndex((current) => (current + direction + voices.length) % voices.length);

  return (
    <>
      <section id="campus" className="numbers-section section-pad">
        <div className="section-kicker"><span>04</span><span>A campus made for doing</span></div>
        <div className="numbers-heading"><h2>Room for every<br /><em>kind of growth.</em></h2><p>These figures and rankings appear on the TIS homepage. Other TIS pages report different campus-area and teacher–student-ratio figures; confirm current details directly with the school.</p></div>
        <div className="numbers-grid">
          <article><span className="number-index">01 / CAMPUS</span><strong>22 <small>acres</small></strong><p>Pollution-free campus — as listed on the homepage</p><span className="number-outline" aria-hidden="true">22</span></article>
          <article><span className="number-index">02 / SPORT</span><strong>16<small>+</small></strong><p>Olympic sports represented on the school site</p><span className="number-outline" aria-hidden="true">16</span></article>
          <article><span className="number-index">03 / CARE</span><strong>24<small>/7</small></strong><p>Medical assistance, as described on the homepage</p><span className="number-outline" aria-hidden="true">24</span></article>
          <article><span className="number-index">04 / COMMUNITY</span><strong>6<small>:1</small></strong><p>Student–teacher ratio shown on the homepage</p><span className="number-outline" aria-hidden="true">6</span></article>
          <article><span className="number-index">05 / COMMUNITY</span><strong>12<small>+</small></strong><p>Collaborations listed by TIS</p><span className="number-outline" aria-hidden="true">12</span></article>
        </div>
        <div className="rankings-strip"><div><Trophy size={17} /><span>Rankings published on the TIS homepage</span></div><p><b>#1</b> Dehradun · Education Today <i /> <b>#2</b> Uttarakhand · Education Today <i /> <b>#1</b> North India · Outlook <i /> <b>#4</b> India · Education Today</p><small>Survey editions are not stated on the homepage.</small></div>
      </section>

      <section className="school-beliefs" aria-label="What TIS says about its approach"><div><span>BOARDING & DAY SCHOOL EXCELLENCE</span><h2>Leadership. Innovation.<br /><em>Lifelong learning.</em></h2><p>TIS describes its CBSE curriculum as focused on academic excellence, holistic development and preparing students to be global leaders. Its homepage highlights modern facilities and a nurturing environment.</p><p>It also talks about drawing out each student’s strengths across academics, music, art and drama—helping school feel like a place to belong, grow and shine.</p><p className="beliefs-story">At Tulas, we always ask, “What’s the secret to making school awesome?” The school describes learning as an adventure—where curiosity leads, creativity thrives and every day brings something new to discover. When students are inspired, they don’t just learn; they grow, explore and shape their own futures. There, we cracked it!</p></div><blockquote><Sparkles size={17} /><p>“We feel supported in what we do and nudged further to do more”</p><small>— Tulas International School homepage</small></blockquote><blockquote><Sparkles size={17} /><p>“Tulas helped me thrive and become the best version of myself”</p><small>— Tulas International School homepage</small></blockquote></section>

      <section className="moments-section section-pad" aria-label="Moments from the TIS homepage gallery">
        <div className="moments-heading"><div><span className="section-kicker"><span>05</span><span>School in motion</span></span><h2>Learning takes<br /><em>many forms.</em></h2></div><p>Sport, creative practice and campus life—selected imagery from the official TIS homepage gallery.</p></div>
        <div className="moments-gallery">
          <div className="moment-stage">
            <AnimatePresence mode="wait"><motion.div className="moment-image-wrap" key={momentIndex} initial={{ opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .99 }} transition={{ duration: .42 }}><Image src={`${media}${moments[momentIndex].file}`} alt={moments[momentIndex].alt} fill sizes="(max-width: 760px) 100vw, 58vw" unoptimized /></motion.div></AnimatePresence>
            <div className="moment-image-shade" />
            <span className="moment-image-count">{String(momentIndex + 1).padStart(2,"0")} <i /> {String(moments.length).padStart(2,"0")}</span>
            <div className="moment-caption"><span>{moments[momentIndex].kind}</span><h3>{moments[momentIndex].label}</h3></div>
            <div className="moment-arrows"><button type="button" aria-label="Previous school moment" onClick={() => setMomentIndex((momentIndex + moments.length - 1) % moments.length)}><ArrowLeft size={17} /></button><button type="button" aria-label="Next school moment" onClick={() => setMomentIndex((momentIndex + 1) % moments.length)}><ArrowRight size={17} /></button></div>
          </div>
          <div className="moment-index-list" role="group" aria-label="Choose a school moment">{moments.map((moment, index) => <button key={moment.label} type="button" aria-pressed={momentIndex === index} className={momentIndex === index ? "is-selected" : ""} onClick={() => setMomentIndex(index)}><span>{String(index + 1).padStart(2,"0")}</span><span>{moment.label}</span><small>{moment.kind}</small><ArrowUpRight size={14} /></button>)}</div>
        </div>
      </section>

      <section id="sports" className="sports-showcase">
        <div className="sports-visual">
          <div className="sports-visual-orbit" aria-hidden="true"><span>MOVE</span><span>·</span><span>LEARN</span><span>·</span><span>REPEAT</span></div>
          <div className="sports-visual-copy"><span className="section-kicker section-kicker-light"><span>06</span><span>Beyond academics</span></span><p>“It’s not just a facility.<br />At Tulas it’s the <em>foundation.</em>”</p><span className="sports-visual-note">16+ sports curated to bring joy and discipline to your life.</span></div>
          <span className="sports-visual-watermark" aria-hidden="true">T</span>
        </div>
        <div className="sports-content">
          <div className="sports-content-head"><div><span className="overline">Find your way into the game</span><h2>Choose a<br /><em>field of play.</em></h2></div><a className="underlined-link" href="https://tis.edu.in/beyond-academics/sports/" target="_blank" rel="noreferrer">Explore sports at TIS <ArrowUpRight size={15} /></a></div>
          <div className="sport-filters" role="group" aria-label="Filter sports by category">{filters.map((item) => <button type="button" key={item} className={filter === item ? "selected" : ""} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
          <motion.div layout className="sport-grid">{visibleSports.map(([name, category, image], index) => <motion.article layout key={name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .25, delay: index * .018 }} className="sport-tile">{image ? <Image className="sport-tile-image" src={`${media}${image}`} alt="" width={88} height={64} unoptimized /> : <span className="sport-tile-placeholder" aria-hidden="true">T</span>}<span className="sport-index">{String(sports.findIndex(([sport]) => sport === name) + 1).padStart(2, "0")}</span><strong>{name}</strong><small>{category}</small><ArrowUpRight size={14} /></motion.article>)}</motion.div>
          <p className="sports-footnote">The official homepage lists these 16 activities and describes the offering as “16+ sports.” Facilities and coaching details can change; contact the school for current availability.</p>
        </div>
      </section>

      <section id="recognition" className="recognition-section section-pad">
        <div className="recognition-heading"><div><span className="section-kicker"><span>07</span><span>People who inspire</span></span><h2>Stories and people<br />that <em>stay with us.</em></h2></div><p>The TIS homepage features sports personalities, artists and public leaders who have visited the campus. Descriptions below follow the school’s published copy; public roles can change over time.</p></div>
        <button className="visitor-toggle" type="button" aria-expanded={showVisitors} onClick={() => setShowVisitors((open) => !open)}><span><Medal size={18} /> Sports personalities & artists <small>13 names · as featured by TIS</small></span><span className="toggle-symbol">{showVisitors ? "−" : "+"}</span></button>
        <AnimatePresence initial={false}>{showVisitors && <motion.div className="visitor-grid" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .4 }}><div className="visitor-grid-inner">{visitors.map(([name, description, image], index) => <article key={name}><Image className="visitor-image" src={`${media}${image}`} alt={name} width={480} height={360} unoptimized /><span className="visitor-index">{String(index + 1).padStart(2, "0")}</span><div className="visitor-copy"><h3>{name}</h3><p>{description}</p></div><MoveUpRight size={14} /></article>)}</div></motion.div>}</AnimatePresence>
        <div className="leader-list"><span className="leader-caption">Also featured · Leaders of India <i>Roles are transcribed from the TIS page and may have changed.</i></span><div>{leaders.map(([name, role, image], index) => <article key={name}><Image src={`${media}${image}`} alt="" width={54} height={54} unoptimized /><div><span><small>{String(index + 1).padStart(2, "0")}</small>{name}</span><p>{role}</p></div></article>)}</div></div>
        <div className="recognition-bottom"><div><span className="section-kicker"><span>08</span><span>Awards</span></span><h3>We believe in celebrating<br />the hard work and perseverance of the best.</h3></div><a href="https://tis.edu.in/about-tis/awards-achievements/" target="_blank" rel="noreferrer" className="underlined-link">See all awards on TIS <ArrowUpRight size={15} /></a></div>
        <div className="award-gallery" aria-label="Awards featured on the TIS homepage">{awardImages.map((image) => <a key={image} href="https://tis.edu.in/about-tis/awards-achievements/" target="_blank" rel="noreferrer"><Image src={`${media}${image}`} alt="Award graphic from the TIS homepage" width={360} height={250} unoptimized /><span>Featured by TIS <ArrowUpRight size={13} /></span></a>)}</div>
      </section>

      <section id="voices" className="voices-section">
        <div className="voices-intro"><span className="section-kicker section-kicker-light"><span>09</span><span>From the parents</span></span><h2>Every school story<br />is <em>personal.</em></h2><p>Parent comments presented in the “From the Parents” section of the official TIS homepage. Ten carry a published attribution; one is shown there without a name.</p><div className="voices-controls"><button type="button" onClick={() => stepVoice(-1)} aria-label="Previous parent comment"><ArrowLeft size={18} /></button><span>{String(voiceIndex + 1).padStart(2, "0")} <i /> {String(voices.length).padStart(2, "0")}</span><button type="button" onClick={() => stepVoice(1)} aria-label="Next parent comment"><ArrowRight size={18} /></button></div></div>
        <div className="voice-card"><span className="quote-mark">“</span><AnimatePresence mode="wait"><motion.div key={voiceIndex} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .24 }}><p className="voice-quote">{voice.quote}</p><div className="voice-attribution"><span className="voice-avatar" aria-hidden="true">{voice.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span><span><strong>{voice.name}</strong><small>{voice.relation}</small></span><span className="voice-source">TIS homepage</span></div></motion.div></AnimatePresence><div className="voice-dots" aria-label={`Comment ${voiceIndex + 1} of ${voices.length}`}>{voices.map((item, index) => <button key={item.name} type="button" aria-label={`Show comment by ${item.name}`} aria-current={index === voiceIndex ? "true" : undefined} onClick={() => setVoiceIndex(index)} />)}</div></div>
      </section>

      <section id="visit-campus" className="tour-section section-pad">
        <div className="tour-panel"><div className="tour-graphic" aria-hidden="true"><span className="tour-ring tour-ring-one" /><span className="tour-ring tour-ring-two" /><span className="tour-monogram">T</span><span className="tour-coordinates">DHOOLKOT<br />DEHRADUN</span><span className="tour-caption">UTTARAKHAND · INDIA</span></div><div className="tour-copy"><span className="section-kicker"><span>10</span><span>Step inside</span></span><h2>Dive into our<br /><em>virtual tour.</em></h2><p>Explore the campus through the official Tulas International School virtual tour.</p><a className="button-primary" href="https://tis.edu.in/virtual-tour/" target="_blank" rel="noreferrer">Open virtual tour <ArrowUpRight size={16} /></a></div></div>
        <div className="resource-row"><span className="overline">Explore & useful links from TIS</span>
          <a href="https://tis.edu.in/academics/affilation/" target="_blank" rel="noreferrer">Academics <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/boarding-life/facilities/" target="_blank" rel="noreferrer">Boarding facilities <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/beyond-academics/clubs-and-societies/" target="_blank" rel="noreferrer">Clubs & societies <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/events/sports-achievements/" target="_blank" rel="noreferrer">Events & achievements <ArrowUpRight size={13} /></a>
          <a href="https://alumni.tis.edu.in/" target="_blank" rel="noreferrer">Alumni network <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/faq/" target="_blank" rel="noreferrer">FAQs <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf" target="_blank" rel="noreferrer">2024 calendar <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf" target="_blank" rel="noreferrer">School brochure <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/cbse-documents/" target="_blank" rel="noreferrer">Mandatory disclosure <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/privacy-policy/" target="_blank" rel="noreferrer">Privacy policy <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/terms-conditions/" target="_blank" rel="noreferrer">Terms <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/disclaimer/" target="_blank" rel="noreferrer">Disclaimer <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/MandatoryPDF/DisciplinaryPolicy.pdf" target="_blank" rel="noreferrer">Disciplinary policy <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/MandatoryPDF/MobilePhonePolicy.pdf" target="_blank" rel="noreferrer">Mobile phone policy <ArrowUpRight size={13} /></a>
          <a href="https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf" target="_blank" rel="noreferrer">Child welfare policy <ArrowUpRight size={13} /></a>
          <a href="https://tis.fedena.com/" target="_blank" rel="noreferrer">Fedena login <ArrowUpRight size={13} /></a>
        </div>
        <div className="collaboration-row"><div><span className="overline">A connected school community</span><h3>12+ collaborations</h3><p>Partner marks displayed on the TIS homepage.</p></div><div className="collaboration-marks" aria-label="Collaboration marks shown on the TIS homepage">{partnerMarks.map((image, index) => <div key={image}><Image src={`${media}${image}`} alt={`TIS collaboration mark ${index + 1}`} width={112} height={62} unoptimized /></div>)}</div></div>
      </section>
    </>
  );
}
