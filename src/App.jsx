import { useState, useEffect, useRef } from "react";

const T = "#1A9E8F";
const N = "#0D1B3E";
const A = "#F4A623";
const R = "#C0392B";
const G = "#1A6B3A";

// ─── Shared TASS Brand Logo ───────────────────────────────────────────────────
function TASSLogo({ size = "md", theme = "light" }) {
  const scales = {
    sm: { the: 9,  main: 18, sub: 16, tag: 9,  ruleW: 16, ruleH: 1.5, gap: 2 },
    md: { the: 11, main: 24, sub: 22, tag: 11, ruleW: 22, ruleH: 2,   gap: 3 },
    lg: { the: 14, main: 32, sub: 29, tag: 13, ruleW: 28, ruleH: 2,   gap: 4 },
  };
  const s = scales[size] || scales.md;
  const navy   = theme === "dark" ? "#fff"  : N;
  const teal   = T;
  const tagCol = theme === "dark" ? "rgba(255,255,255,0.5)" : "#6B7FA3";
  const tagBold = theme === "dark" ? "rgba(255,255,255,0.75)" : "#3D4F6B";
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: s.gap, userSelect: "none" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <div style={{ width: s.ruleW, height: s.ruleH, background: teal, borderRadius: 99 }} />
        <span style={{ color: teal, fontSize: s.the, fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", lineHeight: 1 }}>THE</span>
        <div style={{ width: s.ruleW, height: s.ruleH, background: teal, borderRadius: 99 }} />
      </div>
      <div style={{ color: navy, fontSize: s.main, fontWeight: 900, letterSpacing: "-0.01em", textTransform: "uppercase", lineHeight: 1, marginTop: -1 }}>APPRENTICESHIP</div>
      <div style={{ color: teal, fontSize: s.sub, fontWeight: 900, letterSpacing: "-0.01em", textTransform: "uppercase", lineHeight: 1, marginTop: -3 }}>SUCCESS SYSTEM™</div>
      <div style={{ width: "70%", height: s.ruleH, background: teal, borderRadius: 99 }} />
      <div style={{ color: tagCol, fontSize: s.tag, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 400, marginTop: 1 }}>
        Stop Guessing.{" "}<strong style={{ fontWeight: 800, color: tagBold }}>Start Securing.</strong>
      </div>
    </div>
  );
}

const MODULES = [
  {
    id: 1,
    icon: "🔍",
    title: "What This Sector Actually Is",
    subtitle: "Reality · Shift patterns · Entry requirements · References",
    color: T,
    sections: [
      {
        heading: "What engineering actually is",
        content: [
          { type: "body", text: `Many people describe engineering as "hands-on", "working with tools", or "fixing things". Those descriptions are not wrong, but they are incomplete.\n\nIn reality, engineering is a structured, process-led environment where precision, safety, reliability and accuracy are non-negotiable. The work requires following instructions exactly, maintaining standards consistently, and learning from correction without becoming defensive.\n\nOn day one, an employer is not hiring you because you already know how to do the job. They are hiring you because they believe you can be trained safely, can follow instructions, can learn from correction, and can produce work to standard over time.\n\nThat is what you need to demonstrate — not expertise, but trainability.` },
          { type: "prompt", heading: "Perception check — write your answers before continuing", items: ["What do I currently think engineering work involves?", "Which parts of that belief are based on evidence and which are assumption?", "What parts of this sector attract me?", "What parts of this sector might challenge me?", "After reading this section, do I still want this route for the same reasons?"] }
        ]
      },
      {
        heading: "Day in the life — shift patterns and the lived reality",
        content: [
          { type: "body", text: `A typical apprentice day may start earlier than many school or college days. In some settings the shift may begin around 7:00am or 7:30am. You may be expected to arrive early, change into PPE, attend a briefing, and be ready to start on time.\n\nYou may spend large parts of the day on supervised practical tasks, observing experienced staff, following procedures, completing checks, or learning how to use tools, machines or systems correctly. In process and production environments, the emphasis on accuracy and repetition can be significant.\n\nBe prepared for the emotional reality of the job. You may be corrected frequently. Your work may be checked closely. You may repeat the same task until it is right. That does not mean you are failing. It means you are in a training environment where standards matter.` },
          { type: "infobox", heading: "Shift patterns in engineering — know before you apply", rows: [["Standard days (8am–4pm or 7:30am–3:30pm)", "Most common for apprentices. Early starts, consistent routine, home each evening."], ["Rotating shifts (days and nights alternating)", "Common in utilities, process and energy sectors. Includes night shifts. Sleep patterns and social life are affected."], ["24-hour shift patterns (e.g. 12-hour days/nights)", "Found in energy, offshore support, infrastructure maintenance. May work 4 days on, 4 days off or similar patterns."], ["Working away from home", "Some roles — particularly civil engineering, offshore, defence and rail — require periods away from home for days or weeks at a time. Accommodation is usually provided but this is a significant lifestyle consideration."], ["On-call requirements", "Some maintenance and infrastructure roles require you to be available outside normal hours. Understand this before accepting an offer."]] },
          { type: "body", text: `What to ask at interview about shift patterns:\n• What are the working hours for the apprenticeship specifically?\n• Is there any requirement to work shifts or nights during the apprenticeship period?\n• Are there any roles in this discipline that require working away from home?\n• How much notice is typically given for shift changes?` },
          { type: "prompt", heading: "Reality check — answer honestly", items: ["Can I cope with early starts consistently, not just occasionally?", "Have I thought about whether shift work or working away from home would suit my circumstances?", "Have I discussed any shift pattern requirements with my family or household?", "Can I take instruction without becoming defensive?", "Can I stay focused on accuracy when tasks are repetitive?", "Can I work within strict safety and quality expectations?", "Can I continue when the work feels difficult or slower than I expected?"] }
        ]
      },
      {
        heading: "Entry requirements — advertised versus real",
        content: [
          { type: "body", text: `Many engineering apprenticeships advertise requirements such as National 5 Maths, Physics, or Engineering Science. These matter — but employers use them as an indicator of wider capability. A grade signals numeracy, logical thinking, persistence, and the ability to work with precision.\n\nThis means two things. First, meeting the grades does not guarantee success. Second, if you are slightly below the formal requirement, it may still be possible to reposition yourself through other evidence.` },
          { type: "requirementsTable" },
          { type: "body", text: `If you do not meet a requirement — ask yourself this first:\n• Maths requirement → Can I evidence numeracy, measuring, calculations, ratios or problem solving in any context?\n• Practical requirement → Can I evidence project work, model building, technical coursework or accurate task completion?\n• Reliability requirement → Can I evidence attendance, commitment, punctuality or consistent completion of responsibilities?\n• Science requirement → Can I evidence logical thinking, investigation, analysis or structured problem-solving?` }
        ]
      },
      {
        heading: "3.1 Obtaining a reference",
        content: [
          { type: "body", text: `Most engineering apprenticeship applications will ask you to provide a reference — or will request one if you progress to offer stage. A reference is a written statement from someone who can vouch for your reliability, character and ability to work. Engineering employers take references seriously.` },
          { type: "referenceTable" },
          { type: "body", text: `How to approach asking for a reference:\n• Ask in person or by email — not by text message.\n• Give them advance notice — do not ask at the last minute.\n• Remind them of specific things you did that are relevant to engineering: attendance, project work, practical tasks, reliability.\n• Tell them what the role involves so they can tailor their reference appropriately.\n• Always thank them — and let them know the outcome of your application.` },
          { type: "prompt", heading: "Reference preparation checklist", items: ["I have identified at least two people who could provide a reference", "I have asked them and they have agreed", "I have given them information about the role and what I would like them to highlight", "I have their correct contact details (email and phone) to provide on applications", "I have thanked them for agreeing to support me"] }
        ]
      }
    ]
  },
  {
    id: 2,
    icon: "📅",
    title: "Recruitment Cycles & Research",
    subtitle: "When employers recruit · How to research properly · Your network",
    color: T,
    sections: [
      {
        heading: "When engineering employers recruit",
        content: [
          { type: "body", text: `Large engineering employers often recruit in planned cycles rather than ad hoc. If you start preparing only when the vacancy appears, you may already be behind candidates who have been tracking the employer for months.\n\nMost major Scottish employers open their apprenticeship windows between September and February. If you are applying in spring, you are often too late for the current cycle.\n\nThe key principle: prepare before vacancies open, not when they appear.` },
          { type: "employerTable" }
        ]
      },
      {
        heading: "Company research — how to do it properly",
        content: [
          { type: "body", text: `Do not treat company research as a tick-box exercise. It should shape the way you write your application and the way you answer questions at interview.\n\n• Read the company website — what do they make, build, maintain or deliver?\n• Read the apprenticeship or careers section — how do they describe the opportunity?\n• Check external sources — LinkedIn, news articles, employee content, awards, contracts\n• Identify repeated themes — safety, quality, innovation, teamwork, continuous improvement\n• Translate those themes into your own words and connect them to your own evidence\n• Ask family members or friends who work in engineering or a related sector — their first-hand knowledge of what employers actually look for is often more useful than anything on a website` },
          { type: "callout", text: `Using your personal network: Do you know anyone who works in engineering, utilities, construction, telecoms or a related sector? A family member, neighbour, friend's parent or former teacher in the industry can give you insights that no website will. Ask them: What do employers in this sector actually look for? What mistakes do applicants make? What would make you stand out? Even a 10-minute conversation with someone in the sector can sharpen your application significantly.` },
          { type: "comparison", question: "Why do you want to work for this company?", weak: `"I want to work here because it is a good company."`, strong: `"I am interested in this company because of its reputation in engineering and its focus on quality and structured development. From reviewing its careers material, it is clear that reliability, teamwork and attention to detail matter here — and those are qualities I can evidence through my school projects and work experience."` },
          { type: "prompt", heading: "Research prompt — complete in full sentences before each application", items: ["This company operates in …", "The products, services or engineering activity most important to them are …", "The qualities they seem to value most are …", "This matters to me because …", "The strongest evidence I have that aligns with this is …", "A recent news item or development I found was …"] }
        ]
      },
      {
        heading: "Your 8-week preparation route map",
        content: [
          { type: "weakStrongPairs", pairs: [["Apply when they see a vacancy", "Prepare before vacancies open"], ["Rely on grades alone", "Turn grades into evidence"], ["Assume transport will work out", "Plan the journey and backup before interview"], ["Write generic answers", "Use structured examples with outcomes"], ["Practise tests too late", "Practise tests weeks before applying"], ["Apply to one employer", "Research and track multiple target employers"]] },
          { type: "scheduleTable", rows: [["Weeks 1–2", "Research 5 target roles and 3 target employers. Complete perception check, requirements audit and travel planning.", "Clear understanding of sector, employer shortlist, first notes."], ["Weeks 3–4", "Begin numerical and situational judgement practice daily. Draft CV. Build 5 evidence examples from school, home or other experience.", "First CV draft and evidence bank."], ["Weeks 5–6", "Refine CV, improve weak test areas, practise application answers and company-specific responses.", "Stronger CV and first full application responses."], ["Weeks 7–8", "Mock interview practice, travel answer prepared, assessment centre preparation, final employer tracking.", "Application-ready candidate profile."]] },
          { type: "comparison", question: "Interview question: How will you get to work on time?", weak: `"I'll get the bus."`, strong: `"I have checked the route from home to the site. The journey would take around 45 minutes by bus, and I would take the earlier service so that I arrive around 20 minutes before the shift starts. If that route was disrupted, my backup would be to arrange a lift for that morning and take a later bus home. I have checked the weekly travel cost and it is sustainable on the advertised wage."` }
        ]
      }
    ]
  },
  {
    id: 3,
    icon: "📄",
    title: "CV & Application Form",
    subtitle: "Four profile types · Weak vs strong · Model answers",
    color: T,
    sections: [
      {
        heading: "CV examples — choose your profile type",
        content: [
          { type: "body", text: `Your CV must reflect who you actually are — not who you think an employer wants to see. The four profiles below cover the most common situations for engineering apprenticeship applicants. Find the one closest to your situation and use it as a framework.\n\nIn every case, the principle is the same: every skill must be evidenced, not just claimed. Generic statements are invisible. Specific, quantified, context-rich statements get read.` },
          { type: "cvProfiles" }
        ]
      },
      {
        heading: "Application form — full model answers",
        content: [
          { type: "body", text: `Model answers show the depth expected. They are not scripts to memorise — they are examples of how to think, structure and evidence your answers.\n\nNote the difference in starting point for each profile type. A school leaver builds from projects and coursework. A career changer translates existing experience. A graduate reframes academic work as practical evidence. An adult returner shows what sustained employment taught them.` },
          { type: "comparison", question: "Why do you want this apprenticeship?", weak: "I want this apprenticeship because I want to learn new skills and I think it would be a good opportunity for me.", strong: "I want this apprenticeship because it offers structured technical development alongside a qualification I can build a career on. I have been working in a customer-facing role for three years and I am ready to move into a technical environment where precision and problem-solving matter. Engineering suits the way I think — I want to work in a field where the output is measurable and the standard is clear." },
          { type: "comparison", question: "Why do you want to work for this company?", weak: "I want to work here because it is a good company with a good reputation.", strong: "I researched this company's work on defence systems contracts and its apprenticeship structure before applying. The emphasis on safety culture and continuous improvement in your published values aligns with the way I approach work. I am also attracted by the structured progression route — I want to develop properly, not just get a foot in the door." },
          { type: "comparison", question: "Give an example of when you worked effectively as part of a team.", weak: "I work well in a team. I am a good communicator and I always do my share.", strong: "In my current role in logistics, our team had to restructure our entire picking process during a system migration with 48 hours' notice. I coordinated between four colleagues, divided the manual tasks, and tracked progress against our daily targets on a whiteboard. We hit 94% of our standard output on day one of the new system. I learned that in high-pressure situations, clarity of communication and keeping people focused on the task — not the problem — makes the difference." },
          { type: "comparison", question: "Describe a time when you solved a problem.", weak: "I am good at solving problems. I stay calm under pressure and always find a solution.", strong: "During my HNC project, a component I had designed failed tolerance testing at the third iteration. Rather than guessing the fix, I went back to the original specification, mapped each measurement against the tolerance band, and identified that the error had compounded across two dimensions. I redesigned one dimension only, reran the test, and it passed. The lesson I took was that systematic diagnosis is faster than trial and error — and that matters in an engineering environment where materials and time are not free." }
        ]
      }
    ]
  },
  {
    id: 4,
    icon: "🧮",
    title: "Test Preparation",
    subtitle: "Numerical · Situational judgement · Mechanical reasoning",
    color: T,
    sections: [
      {
        heading: "10.1 Numerical reasoning",
        content: [
          { type: "body", text: `These questions are harder than you might expect. That is intentional.\n\nThe test formats used by BAE Systems, Babcock, Leonardo and Spirit AeroSystems are more demanding than basic school maths. Questions typically require you to read data from a table, perform two or three calculation steps, and compare results — all under strict time pressure.\n\nImprovement comes fastest when you review why you got a question wrong — not just what the right answer was. Repetition without reflection creates slower progress.` },
          { type: "callout", text: `Questions marked ★ use the production table below. Read the table carefully before attempting them — this is exactly what SHL and Cubiks tests require you to do.` },
          { type: "productionTable" },
          { type: "practiceQs", qs: [
            { q: "★ Line A missed its weekly target. By how many units did it fall short?", a: "50 units short.", why: "Step 1 — sum Line A: 312 + 298 + 320 + 305 + 315 = 1,550. Step 2 — compare to target: 1,600 − 1,550 = 50. Two steps, both required. This is the standard SHL table-reading format." },
            { q: "★ Which line achieved the highest percentage of its weekly target?", a: "Line B — 98.6% of target.", why: "Line A: 1,550 ÷ 1,600 = 96.9%. Line B: 1,380 ÷ 1,400 = 98.6%. Line C: 2,040 ÷ 2,100 = 97.1%. Line D: 900 ÷ 950 = 94.7%. Common mistake: assuming the line with the highest raw output wins. You must compare each line to its own target." },
            { q: "★ On Wednesday, was the combined output across all four lines above or below the daily combined target of 1,200 units? By how much?", a: "Below target — Wednesday total was 1,195, missing by 5 units.", why: "Sum the Wednesday column: 320 + 265 + 420 + 190 = 1,195. Compare to 1,200. Easy to misread the column under time pressure — this is where candidates lose marks." },
            { q: "★ If Line B increases its output by 12% every day next week, what will its Monday output be? Round to the nearest whole unit.", a: "308 units.", why: "275 × 1.12 = 308. Read the correct cell first (Line B, Monday = 275), then apply the percentage increase. Two steps, easy to multiply the wrong row." },
            { q: "A quality inspector checks 3 batches. Batch 1: 240 units, 4 defective. Batch 2: 180 units, 6 defective. Batch 3: 300 units, 9 defective. Which batch has the highest defect rate?", a: "Batch 2 — defect rate 3.3%.", why: "Batch 1: 4 ÷ 240 = 1.67%. Batch 2: 6 ÷ 180 = 3.33%. Batch 3: 9 ÷ 300 = 3.0%. Three parallel calculations then a comparison. Batch 3 has more defects in total but a lower rate — a common source of error." },
            { q: "A component must weigh between 1.45kg and 1.55kg. A batch of 5 components has a total weight of 7.6kg. Is it possible that all components are within tolerance?", a: "Not necessarily. The average is 1.52kg (within tolerance) but individual components could still be outside the range.", why: "Step 1: 7.6 ÷ 5 = 1.52kg average. Step 2: recognise that an average within tolerance does not guarantee each individual item is. This tests analytical reasoning — the type of question that separates strong candidates from the rest." },
            { q: "A maintenance team completes 3 jobs taking 1h 45m, 2h 20m, and 55m. They have a 7.5-hour working day with a 30-minute unpaid break. How much working time remains?", a: "2 hours remaining.", why: "Step 1 — total job time: 1h45 + 2h20 + 55m = 5h00. Step 2 — available working time: 7.5h − 0.5h = 7h. Step 3 — remainder: 7h − 5h = 2h. Three steps with mixed time units — easy to lose track." },
            { q: "Material costs £4.80 per metre. A job requires 3 lengths of 2.4m, 2 lengths of 1.75m, and 1 length of 0.9m. What is the total material cost?", a: "£55.68.", why: "Step 1 — total length: (3 × 2.4) + (2 × 1.75) + 0.9 = 7.2 + 3.5 + 0.9 = 11.6m. Step 2 — cost: 11.6 × £4.80 = £55.68. Common mistake: multiplying each length separately and losing accuracy." },
            { q: "A machine runs at 85% efficiency. At full capacity it produces 400 units per hour. How many units does it produce in a 7.5-hour shift at its actual efficiency?", a: "2,550 units.", why: "Step 1 — actual rate: 400 × 0.85 = 340 units/hour. Step 2 — shift output: 340 × 7.5 = 2,550. Applying efficiency as a multiplier before calculating volume — a standard format in manufacturing contexts." },
            { q: "Engineer A checks 1 component every 4 minutes. Engineer B checks 1 every 6 minutes. Working simultaneously, how many components do they check together in a 2-hour period?", a: "50 components.", why: "Step 1 — convert: 2 hours = 120 minutes. Step 2 — A's output: 120 ÷ 4 = 30. Step 3 — B's output: 120 ÷ 6 = 20. Step 4 — combined: 30 + 20 = 50. Four steps. Most candidates who get this wrong forget to convert hours to minutes first." }
          ]}
        ]
      },
      {
        heading: "10.2 Situational judgement",
        content: [
          { type: "body", text: `These tests assess professional judgement — not personality. In engineering contexts, the best answer usually reflects safety first, then responsibility, teamwork and following proper procedure.` },
          { type: "comparison", question: "You notice a colleague is not following a safety procedure. What should you do?", weak: "Ignore it — it is not your responsibility.", strong: "Raise it with your colleague directly if it is safe to do so, or report it to your supervisor. Safety overrides discomfort or hesitation. In engineering environments, procedure exists for a reason." },
          { type: "comparison", question: "You are unsure how to complete a task but do not want to interrupt your supervisor who is busy. What should you do?", weak: "Have a go and figure it out yourself.", strong: "Wait for an appropriate moment and ask for clarification. Guessing in technical environments can create risk, waste materials and delay the task. Asking shows professional judgement, not weakness." },
          { type: "comparison", question: "You finish your task before others in your team. What should you do?", weak: "Wait at your workstation until the next task is assigned.", strong: "Check your own work first for quality, then offer to support a colleague or ask your supervisor what to do next. Proactively contributing to the team's output is a marker of a strong apprentice." },
          { type: "comparison", question: "You make an error that affects a component. What should you do?", weak: "Try to correct it yourself without telling anyone.", strong: "Report it immediately to your supervisor. In engineering, an unreported error can create downstream problems. Honesty and early reporting reduce risk and demonstrate professional maturity." },
          { type: "comparison", question: "A customer or colleague becomes frustrated with a delay you have not caused. What should you do?", weak: "Explain that it is not your fault.", strong: "Listen, acknowledge their frustration without arguing, and explain what you can do or who can help. Taking ownership of communication — even when not responsible for the cause — is a core professional skill." }
        ]
      },
      {
        heading: "10.3 Mechanical reasoning",
        content: [
          { type: "body", text: `Where used, these tests assess simple physical logic — gears, levers, pulleys, forces, direction of movement. You do not need A-level physics. You need to understand the principles.` },
          { type: "practiceQs", qs: [
            { q: "If gear A turns clockwise, which direction does a directly connected gear B turn?", a: "Anti-clockwise.", why: "Principle: Meshed gears always turn in opposite directions." },
            { q: "If a longer lever arm is used with the same applied force, what happens to the turning effect?", a: "It increases.", why: "Principle: Turning effect (moment) = force × distance. Longer arm = greater moment." },
            { q: "A simple open belt connects two pulleys. If the driving pulley turns clockwise, which direction does the driven pulley turn?", a: "Clockwise (same direction).", why: "Principle: An open belt transfers motion in the same direction. A crossed belt reverses it." },
            { q: "Gear A has 10 teeth, gear B has 20 teeth. If gear A completes 4 full rotations, how many rotations does gear B complete?", a: "2 rotations.", why: "Principle: Ratio is 10:20 = 1:2. Gear B turns half as many times as gear A." },
            { q: "A load hangs from a pulley system with two supporting rope sections. What is the mechanical advantage?", a: "2.", why: "Principle: Two rope sections support the load, so the effort needed is halved." }
          ]},
          { type: "prepRoutine" }
        ]
      }
    ]
  },
  {
    id: 5,
    icon: "🏢",
    title: "Assessment Centre",
    subtitle: "Group exercise · Presentation · Written task · Day before",
    color: T,
    sections: [
      {
        heading: "What to expect — and the critical point most candidates miss",
        content: [
          { type: "body", text: `Assessment centres are used by most large engineering employers — including BAE Systems, Babcock, Leonardo, Weir Group and Scottish Power — to evaluate multiple candidates at the same time across a range of exercises.\n\nAn assessment centre is not a single interview. It is a half-day or full-day event with several different activities. You will be observed throughout — not just during the formal exercises.` },
          { type: "acElementsTable" },
          { type: "callout", text: `Critical point — you are always being assessed: Many candidates relax during breaks, tours or lunch and make a poor impression without realising it. How you speak to other candidates, how you behave when waiting, and how you engage during informal parts of the day all contribute to the assessors' view of you. Treat every part of the day as part of the assessment. Be genuinely professional throughout — not performatively so.` }
        ]
      },
      {
        heading: "Group exercise — what assessors are actually watching",
        content: [
          { type: "body", text: `The group exercise is one of the most misunderstood elements of an assessment centre. Many candidates believe the goal is to lead or to speak the most. It is not.` },
          { type: "behaviourTable" },
          { type: "assessorQs", items: ["Can this person listen as well as speak?", "Do they help the group move forward or do they create friction?", "Are they aware of others in the room — or only focused on themselves?", "Can they manage disagreement without becoming defensive or aggressive?", "Do they show the kind of behaviour we would want in our workplace every day?"] }
        ]
      },
      {
        heading: "Individual presentation — including slides guidance",
        content: [
          { type: "body", text: `If you are asked to prepare a short presentation, treat it as seriously as the interview itself. You may be given a topic in advance or on the day.\n\n• Structure your presentation clearly — opening, main points, conclusion\n• Practise it aloud at least three times before the day\n• Keep within the time limit — running over is penalised\n• Make eye contact with your audience — do not read from notes the entire time\n• Expect questions at the end — prepare two or three likely questions and practise your answers` },
          { type: "infobox", heading: "Creating your slides — PowerPoint or Canva", rows: [["PowerPoint", "The standard in most engineering workplaces — if you have access to it, use it."], ["Canva (free at canva.com)", "Works in a browser, clean professional templates, easy to use with no experience."], ["Slide design rules", "Maximum 5 slides. One idea per slide. No walls of text. Use bullet points, not sentences."], ["Font size", "Nothing smaller than 24pt on a slide. Your audience is reading from a distance."], ["What to avoid", "Clip art, decorative fonts or heavy animations — they look unprofessional in an engineering context."], ["Key rule", "Practise presenting WITH your slides, not just reading them. The slides support you — they are not your script."]] },
          { type: "body", text: `If you are given the topic on the day:\n• Use any preparation time given to you — do not skip it.\n• Structure first, content second. Spend the first two minutes planning your structure before you write anything.\n• One clear point made well is better than five rushed points made poorly.\n• If slides are not available, use a single sheet of notes with clear headings — and speak to it, do not read from it.` }
        ]
      },
      {
        heading: "Written exercise — full scenario with model answer",
        content: [
          { type: "body", text: `You may be asked to read a brief document and produce a short written response — a summary, a recommendation, or a reply to a scenario. This tests whether you can communicate professionally under pressure.` },
          { type: "comparison", question: "Basic written exercise — email response", weak: `Hi, just wanted to let you no about the delivery problem. it came late and some bits were damaged. Can you sort it ASAP. cheers`, strong: `Dear [Name],\n\nThank you for getting in touch regarding the recent delivery issue. I am sorry to hear that the delivery arrived late and that some items were damaged on arrival.\n\nI will investigate this with our logistics team as a priority and will provide you with an update by [specific date]. In the meantime, please do not use any damaged items and keep them available for inspection.\n\nIf you need to speak with someone urgently, please contact [name or number].\n\nKind regards,\n[Your name]` },
          { type: "scenario" },
          { type: "body", text: `What assessors look for in a written exercise:\n• Professional language — no slang, casual phrasing or text-speak\n• Clear structure — a beginning, middle and end\n• Relevant content — you answered the actual question or task set\n• Appropriate tone — confident but not arrogant, factual but not cold\n• Accuracy — spelling, grammar and punctuation matter\n• Judgement — did you show you understand what is appropriate in a workplace context?` }
        ]
      },
      {
        heading: "The day before — final checklist",
        content: [
          { type: "checklist", items: ["I know the exact location and have planned my journey with a backup", "I know what time to arrive and aim to be there 15 minutes early", "My clothes are prepared — smart, clean and appropriate for an engineering workplace", "I have researched the company and can name at least two things they do", "I have three STAR-structured examples ready for competency questions", "I have a list of two or three questions I want to ask the employer", "I have slept properly and eaten before I leave", "I know the name of the person I am meeting or the contact number if I am delayed"] }
        ]
      }
    ]
  },
  {
    id: 6,
    icon: "🎤",
    title: "Interview & Case Journeys",
    subtitle: "Winning answers · Team fit · Real candidate stories · Reroute options",
    color: T,
    sections: [
      {
        heading: "How to win at interview in engineering",
        content: [
          { type: "body", text: `At interview, employers are not looking for polished corporate language. They are looking for clarity, evidence and signs that you can be trained. They want to believe you understand the role, understand the company, and are worth investing in.` },
          { type: "comparison", question: "Why engineering?", weak: "Because I like working with my hands and fixing things.", strong: "I am interested in engineering because it combines technical thinking with practical application. Through school projects, I have realised that I enjoy solving problems, working methodically and producing work accurately. An apprenticeship appeals to me because it allows me to build those strengths in a structured environment with real responsibility." },
          { type: "comparison", question: "Tell me about a mistake and what you learned.", weak: "I don't really make mistakes. I'm quite careful.", strong: "During a group task, I initially rushed part of the work and realised later that one of my measurements was inaccurate. Once I recognised the error, I raised it, corrected the measurement and made sure the group adjusted the work before final completion. I learned that accuracy matters more than speed, and that raising an issue early is always better than hoping no one notices." },
          { type: "comparison", question: "How will you cope with early starts and following strict procedures?", weak: "I'm a morning person so that's fine.", strong: "I understand that engineering roles involve early starts and consistent routine. I have already checked the travel and timing involved in getting to this site. I would treat punctuality and following procedures as a core part of the job — not optional extras. I understand that in an engineering environment, cutting corners or arriving unprepared creates risk for others." },
          { type: "comparison", question: "What questions do you have for us?", weak: "No, I think you've covered everything, thanks.", strong: "I would like to ask how the apprenticeship is structured across the first year, and what the balance is between on-the-job training and college time. I would also like to understand how progress is measured and what the pathway looks like for someone who completes the programme well." },
          { type: "comparison", question: "How do you think you would fit into an established team?", weak: "I get on well with most people so I think I'd be fine.", strong: "I understand that joining an established team as an apprentice means earning trust and respect over time rather than expecting it immediately. I would focus on being reliable, doing what I say I will do, and learning from the people around me. I would not assume I already know the best way to do things — I would watch, ask questions, and build trust through consistent behaviour." },
          { type: "callout", text: `Why "fitting in" matters to engineering employers: Engineering teams work closely together, often in safety-critical environments. A poor team fit is not just uncomfortable — it can affect safety, quality and productivity. Employers are asking: would I want to work alongside this person every day? What they want: reliability, humility, willingness to learn, ability to take feedback without ego. What puts them off: candidates who seem to think they already know everything, who are dismissive of others, or who appear to be performing rather than being genuine.` },
          { type: "checklist", items: ["Did I show understanding of the sector — not just enthusiasm for it?", "Did I answer the actual question asked?", "Did I use a real, specific example rather than a general statement?", "Did I structure my answer clearly with a beginning, middle and outcome?", "Did I sound like someone worth training and investing in?", "Did I come across as someone who would fit into a professional team?", "What would I do differently next time?"] }
        ]
      },
      {
        heading: "Case journeys — real candidates, real lessons",
        content: [
          { type: "cases", cases: [
            { name: "Aisha — before and after TASS", beforeLabel: "Before TASS", afterLabel: "After TASS", before: "Academically strong. Assumed good grades in Maths and Physics would be enough. Completed applications only when vacancies appeared. Very little test preparation. CV was generic. Interview answers focused on liking engineering rather than understanding the role. Failed at online assessment stage more than once.", after: "Mapped the recruitment cycle of target employers. Identified test types used and practised numerical reasoning consistently. Rebuilt CV with evidence. Prepared structured answers for applications and interviews. Stopped applying reactively — started applying strategically. Progressed through online tests and to assessment centre stage.", lesson: "Before TASS she relied on ability. After TASS she combined ability with preparation and execution." },
            { name: "Connor — the test failure that almost ended it", beforeLabel: "The problem", afterLabel: "The turning point", before: "Had been working part-time in a garage since he was 16 and had strong practical instincts. He applied to three large engineering apprenticeships and failed the online numerical reasoning tests each time. He assumed the tests were unfair and almost stopped applying entirely.", after: "He realised he had never practised timed numerical tests under pressure before. He spent four weeks doing 20 minutes of practice daily, reviewing every wrong answer carefully. He also learned that his practical experience needed to be reframed in professional language on his CV and in his application answers.", lesson: "Practical ability does not transfer automatically into test performance. Tests are a separate skill — and a learnable one." },
            { name: "Priya — the assessment centre that surprised her", beforeLabel: "The problem", afterLabel: "What changed", before: "Sailed through the online tests and was invited to an assessment centre. She had not prepared specifically for group exercises and did not know what one involved. On the day, she became too focused on demonstrating leadership and talked over two other candidates. She did not progress.", after: "She prepared differently for her next assessment centre. She researched group exercise formats, practised with a friend, and focused specifically on listening and building on others' contributions. She made a point of inviting quieter candidates to speak. She progressed through the group exercise and received positive written feedback.", lesson: "Assessment centres test collaborative behaviour, not just individual performance. Listening is as visible as speaking." }
          ]}
        ]
      },
      {
        heading: "If you are not ready yet — reroute options",
        content: [
          { type: "body", text: `A proper system does not leave you at a dead end. If you are not yet competitive for direct entry, here are your realistic next moves.` },
          { type: "rerouteTable" },
          { type: "finalPrompt", items: ["If I am not ready now, my next best move is: ___", "I will review my progress again on this date: ___", "The one thing I will do differently in my next application is: ___", "The person I will ask to do a mock interview with me is: ___"] }
        ]
      }
    ]
  }
];

const QUIZ = [
  { q: "A shift runs from 7:30am to 3:30pm with a 30-minute break. How many working hours is that?", opts: ["7 hours", "7.5 hours", "8 hours", "8.5 hours"], correct: 1, explain: "8 hours total minus the 30-minute break = 7.5 hours. Straightforward time calculation — accuracy under pressure is what's being tested." },
  { q: "You notice a colleague is not following a safety procedure. What should you do?", opts: ["Ignore it — it is not your responsibility", "Note it and raise it at the end of shift", "Raise it with your colleague or supervisor — safety overrides hesitation", "Wait to see if a supervisor notices"], correct: 2, explain: "In engineering environments, procedure exists for a reason. Safety overrides discomfort. Raise it directly or escalate to your supervisor immediately." },
  { q: "Gear A has 10 teeth and gear B has 20 teeth. Gear A completes 4 rotations — how many does gear B complete?", opts: ["8 rotations", "4 rotations", "2 rotations", "1 rotation"], correct: 2, explain: "Ratio is 10:20 = 1:2. Gear B turns half as many times as gear A. 4 ÷ 2 = 2 rotations." },
  { q: "A fault rate falls from 8% to 5%. What is the reduction?", opts: ["3%", "3 percentage points", "37.5%", "2.4 percentage points"], correct: 1, explain: "3 percentage points. Common mistake: saying '3%'. Percentage points and percentages are different things — this distinction appears in engineering reports." },
  { q: "You make an error affecting a component. What should you do?", opts: ["Try to correct it yourself quietly", "Report it immediately to your supervisor", "Wait to see if it's caught at quality control", "Ask a colleague to fix it"], correct: 1, explain: "In engineering, an unreported error can create downstream problems. Honesty and early reporting reduce risk and demonstrate professional maturity." },
  { q: "A component is measured at 47.3mm with a tolerance of ±0.5mm. What is the acceptable range?", opts: ["47.0mm to 47.6mm", "46.8mm to 47.8mm", "46.5mm to 48.1mm", "47.3mm only"], correct: 1, explain: "47.3 − 0.5 = 46.8 (lower limit). 47.3 + 0.5 = 47.8 (upper limit). Reading tolerances correctly is fundamental in manufacturing and quality control." },
  { q: "At an assessment centre group exercise, which behaviour strengthens your score?", opts: ["Talking the most to show confidence", "Dominating the discussion to demonstrate leadership", "Inviting quieter members to contribute and building on others' ideas", "Staying quiet and letting the strong candidates lead"], correct: 2, explain: "Assessors are watching for collaborative behaviour — listening, building on others, keeping the group on track. The goal is not to lead or speak the most." },
  { q: "Which of these is a 'strong candidate' behaviour according to the TASS approach?", opts: ["Apply when they see a vacancy", "Practise tests the week before applying", "Research and track multiple target employers before vacancies open", "Rely on grades to stand out"], correct: 2, explain: "Strong candidates prepare before vacancies open. Large Scottish employers like BAE Systems and Babcock recruit in structured annual cycles — if you start when the vacancy appears, you're already behind." }
];

// ─── Render helpers ───────────────────────────────────────────────────────────

function Body({ text, color }) {
  return (
    <div style={{ color: "#2D3748", lineHeight: 1.85, fontSize: 15, marginBottom: 18 }}>
      {text.split("\n\n").map((para, i) => (
        <p key={i} style={{ marginBottom: 12 }}>
          {para.split(/(\n•[^\n]+)/g).map((chunk, j) => {
            if (chunk.startsWith("\n•")) return <div key={j} style={{ paddingLeft: 14, borderLeft: `3px solid ${color}30`, marginBottom: 5, color: "#444" }}>{chunk.replace("\n", "")}</div>;
            return chunk;
          })}
        </p>
      ))}
    </div>
  );
}

function Comparison({ question, weak, strong }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ color: "#666", fontSize: 13, fontStyle: "italic", marginBottom: 10, lineHeight: 1.5 }}>{question}</p>
      <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 10, padding: 14, marginBottom: 8 }}>
        <div style={{ color: R, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>✗  Weak answer</div>
        <p style={{ color: "#7F1D1D", fontSize: 14, lineHeight: 1.65, margin: 0, fontStyle: "italic", whiteSpace: "pre-line" }}>{weak}</p>
      </div>
      <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 10, padding: 14 }}>
        <div style={{ color: G, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>✓  Strong answer</div>
        <p style={{ color: "#14532D", fontSize: 14, lineHeight: 1.65, margin: 0, whiteSpace: "pre-line" }}>{strong}</p>
      </div>
    </div>
  );
}

function Prompt({ heading, items, color }) {
  const [checked, setChecked] = useState({});
  return (
    <div style={{ background: color + "10", border: `1px solid ${color}30`, borderRadius: 12, padding: 16, marginBottom: 18 }}>
      <p style={{ color: color, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>✏️ {heading}</p>
      {items.map((item, i) => (
        <div key={i} onClick={() => setChecked(p => ({ ...p, [i]: !p[i] }))}
          style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "8px 0", borderBottom: i < items.length - 1 ? `1px solid ${color}20` : "none", cursor: "pointer" }}>
          <div style={{ width: 20, height: 20, borderRadius: 4, border: `2px solid ${color}`, background: checked[i] ? color : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
            {checked[i] && <span style={{ color: "#fff", fontSize: 12, lineHeight: 1 }}>✓</span>}
          </div>
          <span style={{ color: "#444", fontSize: 14, lineHeight: 1.55 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function Checklist({ items }) {
  const [checked, setChecked] = useState({});
  return (
    <div style={{ background: N + "08", border: `1px solid ${N}18`, borderRadius: 12, padding: 16, marginBottom: 18 }}>
      {items.map((item, i) => (
        <div key={i} onClick={() => setChecked(p => ({ ...p, [i]: !p[i] }))}
          style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "9px 0", borderBottom: i < items.length - 1 ? `1px solid ${N}12` : "none", cursor: "pointer" }}>
          <div style={{ width: 22, height: 22, borderRadius: 4, border: `2px solid ${T}`, background: checked[i] ? T : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
            {checked[i] && <span style={{ color: "#fff", fontSize: 13, lineHeight: 1 }}>✓</span>}
          </div>
          <span style={{ color: "#333", fontSize: 14, lineHeight: 1.55 }}>☐  {item}</span>
        </div>
      ))}
    </div>
  );
}

function Callout({ text }) {
  return (
    <div style={{ background: "#FFF8E7", border: `1px solid ${A}50`, borderLeft: `4px solid ${A}`, borderRadius: 10, padding: 16, marginBottom: 18 }}>
      <p style={{ color: "#6B4A00", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{text}</p>
    </div>
  );
}

function ProductionTable() {
  const headers = ["Line", "Mon", "Tue", "Wed", "Thu", "Fri", "Target (week)"];
  const rows = [
    ["Line A", "312", "298", "320", "305", "315", "1,600"],
    ["Line B", "275", "280", "265", "290", "270", "1,400"],
    ["Line C", "410", "395", "420", "400", "415", "2,100"],
    ["Line D", "180", "175", "190", "185", "170", "950"],
  ];
  return (
    <div style={{ marginBottom: 18 }}>
      <p style={{ color: T, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>📊 Reference table — Caledonian Engineering · Weekly Production Output</p>
      <div style={{ overflowX: "auto", borderRadius: 10, border: "1px solid #E2E8F0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i} style={{ background: N, color: "#fff", padding: "9px 12px", textAlign: i === 0 ? "left" : "right", fontWeight: 600, fontSize: 12, whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: "9px 12px", border: "1px solid #E2E8F0", color: j === 0 ? N : "#444", fontWeight: j === 0 ? 700 : (j === row.length - 1 ? 600 : 400), textAlign: j === 0 ? "left" : "right", background: j === row.length - 1 ? "#F0F4FF" : "transparent" }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PracticeQs({ qs, color }) {
  const [revealed, setReveal] = useState({});
  return (
    <div style={{ marginBottom: 18 }}>
      {qs.map((pq, i) => {
        const usesTable = pq.q.startsWith("★");
        return (
          <div key={i} style={{ background: "#F8FAFC", border: `1px solid ${usesTable ? "`${T}30`" : "#E2E8F0"}`, borderLeft: `4px solid ${usesTable ? T : "#E2E8F0"}`, borderRadius: 12, padding: 16, marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
              <p style={{ color: N, fontWeight: 600, fontSize: 14, lineHeight: 1.5, margin: 0, flex: 1 }}>{pq.q}</p>
              {usesTable && <span style={{ background: "`${T}15`", color: T, border: "1px solid `${T}40`", borderRadius: 99, padding: "2px 9px", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>Uses table</span>}
            </div>
            {revealed[i] ? (
              <div>
                <div style={{ background: "#F0FDF4", borderRadius: 8, padding: 10, marginBottom: 8 }}>
                  <span style={{ color: G, fontWeight: 700, fontSize: 13 }}>Answer: </span>
                  <span style={{ color: "#14532D", fontSize: 13 }}>{pq.a}</span>
                </div>
                <p style={{ color: "#777", fontSize: 12, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>💡 {pq.why}</p>
              </div>
            ) : (
              <button onClick={() => setReveal(p => ({ ...p, [i]: true }))}
                style={{ background: color, border: "none", color: "#fff", borderRadius: 8, padding: "7px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                Reveal answer
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

function InfoBox({ heading, rows, color }) {
  return (
    <div style={{ marginBottom: 18 }}>
      {heading && <p style={{ color: color, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>📋 {heading}</p>}
      <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #E2E8F0" }}>
        {rows.map((row, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", background: i % 2 === 0 ? "#fff" : "#F8FAFC", borderTop: i > 0 ? "1px solid #E2E8F0" : "none" }}>
            <div style={{ padding: "10px 12px", fontSize: 13, fontWeight: 600, color: N, borderRight: "1px solid #E2E8F0" }}>{row[0]}</div>
            <div style={{ padding: "10px 12px", fontSize: 13, color: "#444", lineHeight: 1.5 }}>{row[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeakStrongPairs({ pairs }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #E2E8F0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ background: R + "18", padding: "9px 14px", fontSize: 11, fontWeight: 700, color: R, textTransform: "uppercase", letterSpacing: 0.5 }}>Weak candidates</div>
          <div style={{ background: G + "18", padding: "9px 14px", fontSize: 11, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 0.5 }}>Strong candidates</div>
        </div>
        {pairs.map(([w, s], i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: i % 2 === 0 ? "#fff" : "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
            <div style={{ padding: "9px 14px", fontSize: 13, color: "#7F1D1D", borderRight: "1px solid #E2E8F0" }}>✗  {w}</div>
            <div style={{ padding: "9px 14px", fontSize: 13, color: "#14532D" }}>✓  {s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmployerTable() {
  const rows = [
    ["BAE Systems (Scotstoun, Prestwick)", "Annual structured intake", "September to January", "Application, online tests, assessment centre, interview"],
    ["Babcock International (Rosyth)", "Annual apprentice cohort", "Autumn to February", "Application, assessments, interview"],
    ["Leonardo (Edinburgh)", "Annual intake", "October to February", "Application, online tests, interview"],
    ["Weir Group (Glasgow)", "Annual / planned cohort", "Autumn onwards", "Application, interview, practical assessment"],
    ["Scottish Power / SP Energy Networks", "Annual cohort", "Autumn to winter", "Application, online tests, assessment centre"],
    ["SGN (Scottish Gas Networks)", "Annual cohort", "Autumn to winter", "Application, assessments, interview, practical"],
    ["Wood Group", "Rolling / planned", "Year-round, peak autumn", "Application, competency interview"],
    ["Siemens (various Scottish sites)", "Structured annual", "Autumn to winter", "Application, screening, assessment"],
    ["Spirit AeroSystems (Prestwick)", "Annual cohort", "September to December", "Application, tests, assessment centre, vetting"],
    ["BT / Openreach", "Annual structured intake", "September to February", "Application, online tests, interview"],
    ["Network Rail (Scotland)", "Annual cohort", "Autumn to winter", "Application, tests, assessment centre, interview"],
    ["Transport Scotland / BEAR Scotland", "Ad hoc / project-based", "Variable — track careers pages", "Application and interview"],
    ["NHS Scotland (engineering/estates)", "Ad hoc", "Year-round", "Application and interview"],
    ["Maritime / Clyde shipbuilding", "Project-dependent", "Variable — track careers pages", "Application, trades test, interview"],
    ["Mid-sized manufacturer (varies)", "Ad hoc or annual", "Autumn or spring", "Application and interview"]
  ];
  return (
    <div style={{ overflowX: "auto", marginBottom: 18 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
        <thead>
          <tr>
            {["Employer / Type", "Typical pattern", "Likely window", "Common stages"].map((h, i) => (
              <th key={i} style={{ background: "#4A1B8A", color: "#fff", padding: "8px 10px", textAlign: "left", fontWeight: 600, fontSize: 11 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "8px 10px", border: "1px solid #E2E8F0", color: j === 0 ? N : "#555", fontWeight: j === 0 ? 600 : 400, lineHeight: 1.4 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RequirementsTable() {
  return (
    <div style={{ overflowX: "auto", marginBottom: 18 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr>{["Requirement", "Do I meet it directly?", "Alternative evidence I have", "Action needed"].map((h, i) => <th key={i} style={{ background: "#0D6E8A", color: "#fff", padding: "8px 10px", textAlign: "left", fontWeight: 600, fontSize: 12 }}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {[
            ["National 5 Maths (or equivalent)", "", "Numeracy, measuring, calculations in coursework or work", ""],
            ["National 5 Physics", "", "STEM project work, technical coursework", ""],
            ["Practical experience", "", "Project work, model building, DIY, technical tasks at home", ""],
            ["Reliability evidence", "", "Attendance record, part-time job, volunteering, punctuality", ""]
          ].map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>
              {row.map((cell, j) => <td key={j} style={{ padding: "8px 10px", border: "1px solid #E2E8F0", color: j === 0 ? N : "#666", fontWeight: j === 0 ? 600 : 400 }}>{cell || <span style={{ color: "#CCC" }}>—</span>}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ReferenceTable() {
  const rows = [
    ["School teacher or head of year", "Specific, factual statements about your attendance, attitude and reliability — not just general praise"],
    ["College lecturer or tutor", "Evidence of how you responded to feedback, met deadlines, worked with others"],
    ["Part-time employer or line manager", "Confirmation of hours, reliability, conduct and any responsibilities you held"],
    ["Volunteer or community organisation supervisor", "Evidence of commitment, punctuality and how you worked within a team or with the public"],
    ["Family friend in a professional role (if no other option)", "Character reference only — less weight than a professional reference but acceptable if others are unavailable"]
  ];
  return (
    <div style={{ overflowX: "auto", marginBottom: 18 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead><tr>{["Who can provide a reference?", "What makes a strong reference?"].map((h, i) => <th key={i} style={{ background: "#0D6E8A", color: "#fff", padding: "8px 10px", textAlign: "left", fontWeight: 600, fontSize: 12 }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((row, i) => (<tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>{row.map((cell, j) => <td key={j} style={{ padding: "8px 10px", border: "1px solid #E2E8F0", color: j === 0 ? N : "#555", fontWeight: j === 0 ? 600 : 400, lineHeight: 1.5 }}>{cell}</td>)}</tr>))}</tbody>
      </table>
    </div>
  );
}

function ACElementsTable() {
  const rows = [
    ["Group exercise", "Teamwork, communication, listening, leadership, how you treat others"],
    ["Individual presentation", "Preparation, confidence, structure, ability to explain yourself clearly"],
    ["Technical or practical task", "Accuracy, following instructions, attention to detail, safe working"],
    ["Competency interview", "Evidence-based answers, self-awareness, sector understanding"],
    ["Written exercise", "Literacy, structured thinking, professional communication"],
    ["Informal elements (lunch, tours)", "Professionalism, how you engage when you think you are not being assessed"]
  ];
  return (
    <div style={{ overflowX: "auto", marginBottom: 18 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead><tr>{["Typical element", "What it tests"].map((h, i) => <th key={i} style={{ background: "#7B3FA0", color: "#fff", padding: "8px 12px", textAlign: "left", fontWeight: 600, fontSize: 12 }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((row, i) => (<tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}><td style={{ padding: "9px 12px", border: "1px solid #E2E8F0", color: N, fontWeight: 600, fontSize: 13 }}>{row[0]}</td><td style={{ padding: "9px 12px", border: "1px solid #E2E8F0", color: "#555", fontSize: 13, lineHeight: 1.5 }}>{row[1]}</td></tr>))}</tbody>
      </table>
    </div>
  );
}

function BehaviourTable() {
  const rows = [
    ["Talking over others", "Listening and building on what others say"],
    ["Dominating the discussion", "Inviting quieter members to contribute"],
    ["Dismissing ideas without reason", "Evaluating ideas constructively"],
    ["Going quiet when challenged", "Holding a position calmly with reasons"],
    ["Focusing only on your own contribution", "Keeping the group on track and on time"],
    ["Performing leadership without earning it", "Showing natural collaborative behaviour"]
  ];
  return (
    <div style={{ overflowX: "auto", marginBottom: 18 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead><tr><th style={{ background: R, color: "#fff", padding: "8px 12px", textAlign: "left", fontWeight: 600, fontSize: 12 }}>Behaviours that damage your score</th><th style={{ background: G, color: "#fff", padding: "8px 12px", textAlign: "left", fontWeight: 600, fontSize: 12 }}>Behaviours that strengthen your score</th></tr></thead>
        <tbody>{rows.map((row, i) => (<tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}><td style={{ padding: "9px 12px", border: "1px solid #E2E8F0", color: "#7F1D1D", fontSize: 13 }}>✗  {row[0]}</td><td style={{ padding: "9px 12px", border: "1px solid #E2E8F0", color: "#14532D", fontSize: 13 }}>✓  {row[1]}</td></tr>))}</tbody>
      </table>
    </div>
  );
}

function AssessorQs({ items, color }) {
  return (
    <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 12, padding: 16, marginBottom: 18 }}>
      <p style={{ color: color, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>What assessors are actually asking themselves</p>
      {items.map((q, i) => <p key={i} style={{ color: "#444", fontSize: 14, lineHeight: 1.6, margin: "0 0 8px", borderLeft: `3px solid ${color}`, paddingLeft: 12 }}>"{q}"</p>)}
    </div>
  );
}

function Scenario() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ background: "#F0F4FF", border: "1px solid #C7D2FE", borderRadius: 12, padding: 16, marginBottom: 18 }}>
      <p style={{ color: "#3730A3", fontWeight: 700, fontSize: 13, marginBottom: 8 }}>📝 Full written exercise scenario — practise this in full</p>
      <p style={{ color: "#444", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Background:</p>
      <p style={{ color: "#555", fontSize: 13, lineHeight: 1.65, marginBottom: 10 }}>You are an engineering apprentice at Caledonian Engineering Services. It is your third week. You have been asked by your supervisor to write a short report summarising a safety concern you observed during your shift today.</p>
      <p style={{ color: "#444", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>The situation:</p>
      <p style={{ color: "#555", fontSize: 13, lineHeight: 1.65, marginBottom: 10 }}>During a routine task in the maintenance bay, you noticed that a colleague was using a piece of equipment without wearing the required safety gloves. You were unsure whether to say something directly or report it. You did not interrupt at the time.</p>
      <p style={{ color: "#444", fontSize: 13, fontWeight: 600, marginBottom: 10 }}>Your task: Write a short report (8–12 sentences) to your supervisor describing what you observed, what you did, and what you believe should happen next. Use professional language and a clear structure.</p>
      {!show ? (
        <button onClick={() => setShow(true)} style={{ background: "#4338CA", border: "none", color: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Show model answer</button>
      ) : (
        <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 10, padding: 14 }}>
          <div style={{ color: G, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>✓  Strong response — example</div>
          <p style={{ color: "#14532D", fontSize: 13, lineHeight: 1.75, margin: "0 0 10px", whiteSpace: "pre-line" }}>To: [Supervisor name]{"\n"}From: [Your name]{"\n"}Date: [Today's date]{"\n"}Subject: Safety observation — maintenance bay{"\n\n"}I am writing to report a safety observation I made during my shift today in the maintenance bay.{"\n\n"}At approximately 2:15pm, I observed a colleague using a piece of equipment without wearing the required safety gloves. I was not certain of the correct protocol as an apprentice and did not want to overstep, so I did not raise it directly at the time. However, I recognised that this was a safety matter and that reporting it was the right course of action.{"\n\n"}I have not spoken to the colleague involved. I wanted to raise the matter through the correct channel rather than informally.{"\n\n"}I believe the appropriate next step would be for the team or the individual involved to be reminded of the PPE requirements for that equipment. I am happy to discuss what I observed in more detail if that would be helpful.{"\n\n"}I wanted to make you aware of this as soon as possible.</p>
          <p style={{ color: "#555", fontSize: 12, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>Why this works: Clear structure. Professional tone. Shows knowledge of PPE requirements. Shows appropriate judgement — did not overstep as an apprentice but did not ignore the issue. Offers to follow up. No blame language.</p>
        </div>
      )}
    </div>
  );
}

function ScheduleTable({ rows }) {
  return (
    <div style={{ overflowX: "auto", marginBottom: 18 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead><tr>{["Stage", "What to do", "Output you should have"].map((h, i) => <th key={i} style={{ background: "#4A1B8A", color: "#fff", padding: "8px 12px", textAlign: "left", fontWeight: 600, fontSize: 12 }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((row, i) => (<tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>{row.map((cell, j) => <td key={j} style={{ padding: "9px 12px", border: "1px solid #E2E8F0", color: j === 0 ? N : "#444", fontWeight: j === 0 ? 700 : 400, lineHeight: 1.5 }}>{cell}</td>)}</tr>))}</tbody>
      </table>
    </div>
  );
}

function PrepRoutine() {
  const rows = [
    ["1", "Understand test types. Baseline your level — do a short practice test and note your weakest areas.", "20 minutes"],
    ["2", "Daily short practice sessions. Focus on weakest area first.", "25 minutes"],
    ["3", "Review every mistake — write down why you got it wrong, not just the right answer.", "25 minutes"],
    ["4", "Timed mixed practice across all three test types.", "30 minutes"],
    ["5", "Repeat weakest areas. Simulate test conditions — timed, no distractions.", "30 minutes"]
  ];
  return (
    <div style={{ marginBottom: 18 }}>
      <p style={{ color: T, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>📅 Test preparation routine</p>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead><tr>{["Week", "Focus", "Daily time"].map((h, i) => <th key={i} style={{ background: T, color: "#fff", padding: "8px 10px", textAlign: "left", fontWeight: 600, fontSize: 12 }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((row, i) => (<tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>{row.map((cell, j) => <td key={j} style={{ padding: "8px 10px", border: "1px solid #E2E8F0", color: j === 0 ? N : "#444", fontWeight: j === 0 ? 700 : 400, lineHeight: 1.5 }}>{cell}</td>)}</tr>))}</tbody>
      </table>
      <div style={{ background: "#FFF8E7", border: `1px solid ${A}50`, borderLeft: `4px solid ${A}`, borderRadius: 10, padding: 14, marginTop: 12 }}>
        <p style={{ color: "#6B4A00", fontSize: 13, fontWeight: 700, margin: "0 0 4px" }}>Gold nugget</p>
        <p style={{ color: "#6B4A00", fontSize: 13, lineHeight: 1.65, margin: 0 }}>Improvement comes fastest when you review why you got a question wrong — not just what the right answer was. Repetition without reflection creates slower progress. Spend as much time on your mistakes as on new questions.</p>
      </div>
    </div>
  );
}

const CV_PROFILES = [
  {
    id: "schoolleaver",
    label: "School Leaver",
    age: "16–18",
    icon: "🎓",
    situation: "No formal work experience. Building entirely from coursework, projects and school activities.",
    weakName: "Jordan M.",
    weakContent: [
      ["Profile", "I am a hardworking individual looking for an engineering apprenticeship. I am a quick learner and work well in a team."],
      ["Skills", "Teamwork, communication, hardworking, punctual"],
      ["Education", "Currently at school. Studying Maths, Physics and English."],
      ["Experience", "No work experience yet but I am keen to learn."],
    ],
    weakWhy: "Every line is a claim with no evidence. 'Hardworking' and 'quick learner' mean nothing without context. The employer has no reason to believe any of it.",
    strongName: "Aisha K.",
    strongProfile: "Motivated and reliable school leaver with strong mathematical ability and a practical approach to problem solving. Seeking a Modern Apprenticeship in engineering to develop technical skills in a structured environment. Demonstrated accuracy, teamwork and commitment through National 5 coursework and school STEM projects.",
    strongSkills: [
      "Problem solving — applied during STEM coursework, including design and build projects requiring tolerance calculations",
      "Attention to detail — developed through measuring, checking and iterating practical work to meet specification",
      "Teamwork — demonstrated across group projects with fixed deadlines and defined roles",
      "Reliability — evidenced by 98% attendance record and consistent completion of coursework to deadline",
    ],
    strongEdu: "National 5 Mathematics (B) · National 5 Physics (C) · National 5 English (B)",
    strongExp: "School STEM Project (S5) — Designed and built a load-bearing structure as part of a team of four. Responsible for measurements and material calculations. Final model passed load test at first attempt.\n\nPeer Mentor (S5–S6) — Selected by school to support S1 pupils with numeracy. Developed structured explanation skills and patience working with different learning styles.",
    strongWhy: "Every skill is proven with a specific context. The STEM project shows practical application. Peer mentoring reframes a school activity as professional evidence — responsibility, communication, reliability.",
  },
  {
    id: "adultreturner",
    label: "Adult Returner",
    age: "19–29",
    icon: "🔄",
    situation: "Has work history — possibly patchy, unrelated, or from low-skilled roles. Needs to reframe existing experience in engineering language.",
    weakName: "Liam T.",
    weakContent: [
      ["Profile", "I have been working in a warehouse for a few years but I want to change career. I think engineering would suit me and I am willing to work hard."],
      ["Skills", "Physical fitness, working with others, time management"],
      ["Experience", "Amazon warehouse — picking and packing. Before that some bar work."],
      ["Education", "Standard Grades from school. Nothing recent."],
    ],
    weakWhy: "The experience is real but entirely unframed. 'Picking and packing' tells an engineering employer nothing. The physical fitness point is irrelevant. The profile sounds apologetic rather than confident.",
    strongName: "Liam T.",
    strongProfile: "Reliable and physically capable worker with four years of experience in high-throughput logistics environments, seeking to transition into a structured engineering career through a Modern Apprenticeship. Brings proven accuracy under time pressure, systematic working habits and a strong safety awareness developed in a regulated warehouse setting.",
    strongSkills: [
      "Accuracy under pressure — maintained pick accuracy rate of 99.2% across 18 months on timed productivity targets",
      "Safety awareness — completed manual handling, COSHH and fire safety training; zero reportable incidents in four years",
      "Process compliance — worked within strict operational procedures including scan verification and batch tracking",
      "Physical and practical capability — comfortable with extended manual work in varying temperature environments",
    ],
    strongEdu: "Standard Grades: Mathematics (3), English (3), Technical (2) — Anytown Academy\nForklift Operator Licence (RTITB) — 2022\nManual Handling Supervisor Certificate — 2023",
    strongExp: "Logistics Operative | ScotFulfil Warehouse, Glasgow | Sept 2020 – Present\n• Maintained pick accuracy of 99.2% across 18 months against a team average of 97.1%\n• Trained 3 new operatives in scan verification and batch tracking procedures\n• Selected for quality audit team — responsible for checking 200+ items per shift against specification\n• Promoted to team lead cover role after 18 months",
    strongWhy: "The same job — reframed entirely. Accuracy rate, safety record, training responsibility, promotion — these are all engineering employer signals. The candidate hasn't changed. The language has.",
  },
  {
    id: "graduate",
    label: "Graduate",
    age: "21–25",
    icon: "📚",
    situation: "Has a degree but limited practical experience. University support for labour market entry has been weak. Needs to translate academic work into practical evidence.",
    weakName: "Priya S.",
    weakContent: [
      ["Profile", "Recent engineering graduate looking for an opportunity to apply my degree in a practical environment. I have strong academic knowledge and am keen to develop hands-on skills."],
      ["Skills", "Academic research, report writing, working independently"],
      ["Education", "BEng Mechanical Engineering (2:1) — University of Strathclyde, 2024"],
      ["Experience", "Final year project. Some lab work. One summer as a shop assistant."],
    ],
    weakWhy: "A 2:1 in engineering should be a strong foundation — but this CV squanders it. 'Keen to develop hands-on skills' signals a gap rather than a strength. The project and lab work are dismissed in a single line. The shop work is irrelevant as presented.",
    strongName: "Priya S.",
    strongProfile: "BEng Mechanical Engineering graduate (2:1, University of Strathclyde) with practical experience in CAD modelling, materials testing and project-based team engineering. Seeking a Graduate Modern Apprenticeship to build applied industry competence alongside a professional qualification. Brings strong analytical foundations, a structured approach to problem solving and the ability to translate technical knowledge into practical outputs.",
    strongSkills: [
      "CAD and technical drawing — proficient in SolidWorks; produced full assembly drawings for final year project to ISO standards",
      "Materials knowledge — conducted tensile and fatigue testing on aluminium alloys in university materials lab; interpreted BS EN test standards",
      "Project management — led a four-person team through a 12-week design project; produced Gantt chart, risk register and final technical report",
      "Technical communication — presented findings to a panel of academic and industry assessors; received distinction for technical report clarity",
    ],
    strongEdu: "BEng Mechanical Engineering (2:1) — University of Strathclyde, 2024\nRelevant modules: Thermodynamics, Structural Analysis, Manufacturing Processes, Engineering Management\nFinal Year Project: Design and analysis of a lightweight bracket assembly for aerospace application — Grade A",
    strongExp: "Final Year Project — Aerospace Bracket Design | University of Strathclyde | 2023–2024\n• Designed a lightweight bracket assembly using SolidWorks; conducted FEA stress analysis\n• Reduced component weight by 18% against baseline while maintaining structural integrity\n• Produced full technical report and presented to panel including two industry engineers\n\nLaboratory Demonstrator (Part-time) | University of Strathclyde | 2022–2023\n• Supported 20+ undergraduate students through materials testing lab sessions\n• Ensured safe use of testing equipment and accurate data recording\n• Developed structured explanation skills working with students of varying ability",
    strongWhy: "The degree is now working hard. CAD proficiency, materials testing, project leadership, industry presentation — all pulled from work the candidate already did. The lab demonstrator role reframes as supervisory and safety experience.",
  },
  {
    id: "careerchanger",
    label: "Career Changer",
    age: "Any",
    icon: "↗️",
    situation: "Has substantial experience in a different sector. The challenge is translation — making an employer in engineering see the relevance of what looks like unrelated work.",
    weakName: "Marcus D.",
    weakContent: [
      ["Profile", "I have spent 6 years in retail management but I want to move into engineering as I have always been interested in how things work. I am a fast learner and motivated to change."],
      ["Skills", "Management, sales, customer service, team leadership"],
      ["Experience", "Store Manager — SuperShop, 2018–2024. Managed a team of 12."],
      ["Education", "HNC Business — Glasgow College, 2018"],
    ],
    weakWhy: "Six years of management experience is genuinely valuable — but none of it is framed for an engineering audience. 'Always been interested in how things work' sounds casual. The skills listed are retail skills, not translated engineering-adjacent skills.",
    strongName: "Marcus D.",
    strongProfile: "Experienced operations manager with six years of team leadership, process compliance and quality management in a high-volume regulated retail environment, seeking to transition into engineering through a Modern Apprenticeship. Brings demonstrated ability to manage to standard, maintain accurate records, lead people safely, and drive continuous improvement in operational processes — competencies directly transferable to an engineering setting.",
    strongSkills: [
      "Process compliance and quality control — responsible for daily compliance checks across 400+ SKUs; maintained store audit score of 94% over three years",
      "Team leadership and development — managed, trained and performance-reviewed a team of 12; reduced staff turnover by 30% through structured induction improvements",
      "Safety management — conducted weekly health and safety audits; held IOSH Managing Safely certificate; zero reportable incidents in four years as manager",
      "Data-driven decision making — used weekly KPI reports to identify efficiency gaps; implemented rota restructure that reduced overtime cost by 18%",
    ],
    strongEdu: "HNC Business Management — Glasgow College, 2018\nIOSH Managing Safely — 2020\nLevel 3 Food Safety Supervision — 2019 (process/hygiene compliance transferable to engineering regulated environments)",
    strongExp: "Store Manager | SuperShop, Glasgow | June 2018 – March 2024\n• Led a team of 12 across all operational functions including receiving, stock control, compliance and customer service\n• Maintained store audit score of 94% — top quartile in Scotland region — through consistent procedural discipline\n• Implemented revised goods-in checking process that reduced stock discrepancy by 22% in first quarter\n• Managed equipment maintenance schedules and contractor relationships for refrigeration and HVAC systems\n• Delivered structured induction training to 30+ new starters; reduced 3-month turnover from 45% to 15%",
    strongWhy: "The retail experience is now speaking engineering. Process compliance, quality audits, safety management, equipment maintenance, data-driven improvement — these are all engineering employer values, expressed through real evidence from a different sector.",
  },
];

function CVProfiles() {
  const [active, setActive] = useState("schoolleaver");
  const [view, setView] = useState("strong");
  const p = CV_PROFILES.find(p => p.id === active);

  return (
    <div style={{ marginBottom: 18 }}>
      {/* Profile selector */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
        {CV_PROFILES.map(prof => (
          <button key={prof.id} onClick={() => { setActive(prof.id); setView("strong"); }}
            style={{ background: active === prof.id ? N : "#fff", border: active === prof.id ? `2px solid ${N}` : "2px solid #E2E8F0", borderRadius: 12, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
            <div style={{ fontSize: 18, marginBottom: 4 }}>{prof.icon}</div>
            <div style={{ color: active === prof.id ? "#fff" : N, fontWeight: 700, fontSize: 13 }}>{prof.label}</div>
            <div style={{ color: active === prof.id ? "rgba(255,255,255,0.6)" : "#999", fontSize: 11, marginTop: 2 }}>Age {prof.age}</div>
          </button>
        ))}
      </div>

      {/* Situation callout */}
      <div style={{ background: T + "10", border: `1px solid ${T}30`, borderLeft: `4px solid ${T}`, borderRadius: 10, padding: 14, marginBottom: 14 }}>
        <p style={{ color: T, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5, margin: "0 0 4px" }}>Situation</p>
        <p style={{ color: "#444", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{p.situation}</p>
      </div>

      {/* Weak / Strong toggle */}
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        <button onClick={() => setView("weak")}
          style={{ flex: 1, padding: "10px", background: view === "weak" ? R : "#fff", border: `2px solid ${view === "weak" ? R : "#E2E8F0"}`, color: view === "weak" ? "#fff" : "#666", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
          ✗ Weak CV
        </button>
        <button onClick={() => setView("strong")}
          style={{ flex: 1, padding: "10px", background: view === "strong" ? G : "#fff", border: `2px solid ${view === "strong" ? G : "#E2E8F0"}`, color: view === "strong" ? "#fff" : "#666", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
          ✓ Strong CV
        </button>
      </div>

      {/* Weak CV */}
      {view === "weak" && (
        <div style={{ border: `2px solid ${R}`, borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
          <div style={{ background: R, padding: "10px 16px" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>✗  {p.weakName} — weak example ({p.label})</span>
          </div>
          <div style={{ padding: 16, background: "#fff" }}>
            {p.weakContent.map(([label, val], i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase" }}>{label}</span>
                <p style={{ fontSize: 13, color: "#333", margin: "4px 0 0", lineHeight: 1.6 }}>{val}</p>
              </div>
            ))}
            <div style={{ background: "#FEF2F2", borderRadius: 8, padding: 12 }}>
              <p style={{ color: R, fontSize: 13, lineHeight: 1.6, margin: 0 }}>⚠️ {p.weakWhy}</p>
            </div>
          </div>
        </div>
      )}

      {/* Strong CV */}
      {view === "strong" && (
        <div style={{ border: `2px solid ${G}`, borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
          <div style={{ background: G, padding: "10px 16px" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>✓  {p.strongName} — strong example ({p.label})</span>
          </div>
          <div style={{ padding: 16, background: "#fff" }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase" }}>Profile</span>
              <p style={{ fontSize: 13, color: "#333", margin: "4px 0 0", lineHeight: 1.65 }}>{p.strongProfile}</p>
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase" }}>Key Skills</span>
              {p.strongSkills.map((s, i) => (
                <p key={i} style={{ fontSize: 13, color: "#333", margin: "5px 0 0", lineHeight: 1.5 }}>• {s}</p>
              ))}
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase" }}>Education & Qualifications</span>
              <p style={{ fontSize: 13, color: "#333", margin: "4px 0 0", lineHeight: 1.65, whiteSpace: "pre-line" }}>{p.strongEdu}</p>
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase" }}>Experience</span>
              <p style={{ fontSize: 13, color: "#333", margin: "4px 0 0", lineHeight: 1.65, whiteSpace: "pre-line" }}>{p.strongExp}</p>
            </div>
            <div style={{ background: "#F0FDF4", borderRadius: 8, padding: 12 }}>
              <p style={{ color: G, fontSize: 13, lineHeight: 1.6, margin: 0 }}>✓ {p.strongWhy}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Cases({ cases }) {
  return (
    <div style={{ marginBottom: 18 }}>
      {cases.map((c, ci) => (
        <div key={ci} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 14, overflow: "hidden", marginBottom: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <div style={{ background: N, padding: "11px 16px" }}><span style={{ color: T, fontWeight: 800, fontSize: 14 }}>📖 {c.name}</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ padding: 14, borderRight: "1px solid #E2E8F0" }}>
              <div style={{ color: R, fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 7 }}>{c.beforeLabel}</div>
              <p style={{ color: "#555", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.before}</p>
            </div>
            <div style={{ padding: 14 }}>
              <div style={{ color: G, fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 7 }}>{c.afterLabel}</div>
              <p style={{ color: "#333", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.after}</p>
            </div>
          </div>
          <div style={{ background: A + "20", padding: "10px 16px", borderTop: `1px solid ${A}40` }}>
            <p style={{ color: "#7A4F00", fontSize: 13, fontWeight: 600, margin: 0 }}>Lesson: {c.lesson}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function RerouteTable() {
  const rows = [
    ["College engineering course (NC or HNC level)", "Strengthens technical base, adds qualifications, keeps options open"],
    ["Bridging support in Maths or numeracy", "Addresses the most common barrier to passing online tests"],
    ["Pre-apprenticeship or sector taster programme", "Builds evidence, exposure and employer contacts"],
    ["Part-time or voluntary work in a relevant setting", "Demonstrates reliability, commitment and practical awareness"],
    ["Reapply in the next recruitment cycle", "Better-prepared candidates succeed — timing is rarely the only factor"],
    ["Build project-based evidence at home", "Technical tasks, model building, repair work — all evidenceable"]
  ];
  return (
    <div style={{ overflowX: "auto", marginBottom: 18 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead><tr>{["Option", "What it gives you"].map((h, i) => <th key={i} style={{ background: N, color: "#fff", padding: "8px 12px", textAlign: "left", fontWeight: 600, fontSize: 12 }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((row, i) => (<tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>{row.map((cell, j) => <td key={j} style={{ padding: "9px 12px", border: "1px solid #E2E8F0", color: j === 0 ? N : "#555", fontWeight: j === 0 ? 600 : 400, lineHeight: 1.5 }}>{cell}</td>)}</tr>))}</tbody>
      </table>
    </div>
  );
}

function FinalPrompt({ items }) {
  return (
    <div style={{ background: T + "10", border: `1px solid ${T}30`, borderRadius: 12, padding: 16, marginBottom: 18 }}>
      <p style={{ color: T, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>✏️ Final prompt — complete before closing this module</p>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: i < items.length - 1 ? `1px solid ${T}20` : "none" }}>
          <div style={{ width: 22, height: 22, borderRadius: 4, border: `2px solid ${T}`, flexShrink: 0 }} />
          <span style={{ color: "#444", fontSize: 14, lineHeight: 1.55 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Section dispatcher ───────────────────────────────────────────────────────

function RenderContent({ content, mod }) {
  return content.map((item, i) => {
    switch (item.type) {
      case "body": return <Body key={i} text={item.text} color={mod.color} />;
      case "comparison": return <Comparison key={i} {...item} />;
      case "prompt": return <Prompt key={i} {...item} color={mod.color} />;
      case "checklist": return <Checklist key={i} {...item} />;
      case "callout": return <Callout key={i} text={item.text} />;
      case "productionTable": return <ProductionTable key={i} />;
      case "practiceQs": return <PracticeQs key={i} qs={item.qs} color={mod.color} />;
      case "infobox": return <InfoBox key={i} {...item} color={mod.color} />;
      case "weakStrongPairs": return <WeakStrongPairs key={i} {...item} />;
      case "employerTable": return <EmployerTable key={i} />;
      case "requirementsTable": return <RequirementsTable key={i} />;
      case "referenceTable": return <ReferenceTable key={i} />;
      case "acElementsTable": return <ACElementsTable key={i} />;
      case "behaviourTable": return <BehaviourTable key={i} />;
      case "assessorQs": return <AssessorQs key={i} items={item.items} color={mod.color} />;
      case "scenario": return <Scenario key={i} />;
      case "scheduleTable": return <ScheduleTable key={i} rows={item.rows} />;
      case "prepRoutine": return <PrepRoutine key={i} />;
      case "cvProfiles": return <CVProfiles key={i} />;
      case "cvWeak": return <CVProfiles key={i} />;
      case "cvStrong": return <CVProfiles key={i} />;
      case "cases": return <Cases key={i} cases={item.cases} />;
      case "rerouteTable": return <RerouteTable key={i} />;
      case "finalPrompt": return <FinalPrompt key={i} items={item.items} />;
      default: return null;
    }
  });
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function TASSEngineering() {
  const [screen, setScreen] = useState("home");
  const [modIdx, setModIdx] = useState(null);
  const [secIdx, setSecIdx] = useState(0);
  const [quiz, setQuiz] = useState({ q: 0, score: 0, answered: null, done: false });
  const [msgs, setMsgs] = useState([{ role: "assistant", content: "Welcome. I'm your TASS Engineering Coach.\n\nI'm here to help you prepare properly — not just feel ready. Ask me to run a mock interview, help you build a STAR answer, work through a numerical question, or help you research a specific employer.\n\nWhat do you want to work on?" }]);
  const [input, setInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const msgEnd = useRef(null);

  useEffect(() => { msgEnd.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  const sendMsg = async () => {
    if (!input.trim() || aiLoading) return;
    const userMsg = input.trim();
    setInput("");
    const newMsgs = [...msgs, { role: "user", content: userMsg }];
    setMsgs(newMsgs);
    setAiLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-5-20250929",
          max_tokens: 1000,
          system: `You are the TASS Engineering Apprenticeship Coach. Your approach is direct, evidence-focused and unsparing — you don't offer vague encouragement, you help candidates prepare properly.

Core TASS philosophy:
- Strong candidates prepare before vacancies open. Weak candidates apply when they see a vacancy.
- Grades are entry criteria, not a competitive advantage. You need to turn grades into evidence.
- Test performance is a separate skill from practical ability — it must be practised separately.
- Assessment centres test collaborative behaviour, not just individual performance. Listening is as visible as speaking.
- The employer is not hiring you because you already know the job. They are hiring because they believe you can be trained safely, follow instructions, and learn from correction.
- "Fitting in" matters in engineering — teams are often safety-critical. Employers want: reliability, humility, willingness to learn, ability to take feedback without ego.

Key Scottish employers and their patterns:
- BAE Systems (Scotstoun, Prestwick) — Sept–Jan, annual structured intake
- Babcock International (Rosyth) — Autumn–Feb
- Leonardo (Edinburgh) — Oct–Feb
- Weir Group (Glasgow) — Autumn onwards
- SGN (Scottish Gas Networks) — Autumn–winter
- SP Energy Networks / ScottishPower — Autumn–winter
- BT/Openreach — Sept–Feb
- Network Rail (Scotland) — Autumn–winter
- Spirit AeroSystems (Prestwick) — Sept–Dec, includes vetting
- NHS Scotland (engineering/estates) — ad hoc, year-round

When running mock interviews: push for specific examples. Call out vague answers. Model the strong response using the document's exact language where possible.
When helping with CVs: extract their real experiences and reframe using engineering employer language — safety, accuracy, reliability, teamwork, following procedure.
Use UK spelling. Refer to Scottish apprenticeships as "Modern Apprenticeships". Keep responses focused — 2–4 paragraphs maximum.`,
          messages: newMsgs.map(m => ({ role: m.role, content: m.content }))
        })
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Connection issue — please try again.";
      setMsgs([...newMsgs, { role: "assistant", content: reply }]);
    } catch (error) {
      setMsgs([...newMsgs, { role: "assistant", content: `Connection issue — please try again. (${error.message})` }]);
    }
    setAiLoading(false);
  };

  const handleQuizAnswer = (i) => {
    if (quiz.answered !== null) return;
    const correct = i === QUIZ[quiz.q].correct;
    setQuiz(q => ({ ...q, answered: i, score: correct ? q.score + 1 : q.score }));
  };

  const nextQuiz = () => {
    if (quiz.q + 1 >= QUIZ.length) setQuiz(q => ({ ...q, done: true }));
    else setQuiz(q => ({ ...q, q: q.q + 1, answered: null }));
  };

  // ── Quiz ──
  if (screen === "quiz") {
    const qData = QUIZ[quiz.q];
    return (
      <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#F5F7FA", minHeight: "100vh" }}>
        <style>{`* { box-sizing: border-box; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #F5F7FA; } ::-webkit-scrollbar-thumb { background: #D1D9E6; border-radius: 4px; } @keyframes b{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}} button:focus, input:focus { outline: 2px solid #1A9E8F; outline-offset: 2px; }`}</style>
        <div style={{ background: `linear-gradient(135deg, ${N} 0%, #1A3060 100%)`, padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => { setScreen("home"); setQuiz({ q: 0, score: 0, answered: null, done: false }); }}
            style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 14 }}>← Back</button>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.15)", margin: "0 4px" }} />
          <TASSLogo size="sm" theme="dark" />
          <div style={{ marginLeft: "auto", color: T, fontWeight: 800, fontSize: 16 }}>{quiz.score}/{QUIZ.length}</div>
        </div>
        <div style={{ padding: "20px 16px", maxWidth: 600, margin: "0 auto" }}>
          {quiz.done ? (
            <div style={{ background: "#fff", borderRadius: 16, padding: 32, textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>{quiz.score >= 6 ? "🏆" : quiz.score >= 4 ? "💪" : "📚"}</div>
              <h2 style={{ color: N, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{quiz.score >= 6 ? "Strong performance" : quiz.score >= 4 ? "Solid foundations" : "Keep practising"}</h2>
              <p style={{ color: "#666", fontSize: 15, marginBottom: 24 }}>{quiz.score} out of {QUIZ.length} — {quiz.score >= 6 ? "you're applying the TASS approach." : "review the weak answer patterns and try again."}</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <button onClick={() => setQuiz({ q: 0, score: 0, answered: null, done: false })} style={{ padding: "12px 24px", background: T, border: "none", color: "#fff", borderRadius: 10, fontWeight: 700, cursor: "pointer" }}>Try again</button>
                <button onClick={() => setScreen("home")} style={{ padding: "12px 24px", background: N, border: "none", color: "#fff", borderRadius: 10, fontWeight: 700, cursor: "pointer" }}>Back</button>
              </div>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#888", marginBottom: 6 }}>
                  <span>Question {quiz.q + 1} of {QUIZ.length}</span><span>Score: {quiz.score}</span>
                </div>
                <div style={{ background: "#E2E8F0", borderRadius: 99, height: 5 }}>
                  <div style={{ background: T, height: 5, borderRadius: 99, width: `${(quiz.q / QUIZ.length) * 100}%`, transition: "width 0.3s" }} />
                </div>
              </div>
              <div style={{ background: "#fff", borderRadius: 14, padding: 22, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 12 }}>
                <p style={{ color: N, fontSize: 16, fontWeight: 700, lineHeight: 1.55, marginBottom: 18 }}>{qData.q}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {qData.opts.map((opt, i) => {
                    let bg = "#F8FAFC", border = "2px solid #E2E8F0", color = "#2D3748";
                    if (quiz.answered !== null) {
                      if (i === qData.correct) { bg = "#F0FDF4"; border = "2px solid #10B981"; color = "#065F46"; }
                      else if (i === quiz.answered) { bg = "#FEF2F2"; border = "2px solid #EF4444"; color = "#991B1B"; }
                    }
                    return (
                      <button key={i} onClick={() => handleQuizAnswer(i)}
                        style={{ background: bg, border, color, borderRadius: 10, padding: "11px 14px", textAlign: "left", cursor: quiz.answered === null ? "pointer" : "default", fontSize: 14, fontWeight: 500 }}>
                        <span style={{ fontWeight: 700, marginRight: 8 }}>{String.fromCharCode(65 + i)}.</span>{opt}
                      </button>
                    );
                  })}
                </div>
              </div>
              {quiz.answered !== null && (
                <>
                  <div style={{ background: quiz.answered === qData.correct ? "#F0FDF4" : "#FEF2F2", borderRadius: 12, padding: 14, marginBottom: 12, border: `1px solid ${quiz.answered === qData.correct ? "#10B981" : "#EF4444"}` }}>
                    <p style={{ color: quiz.answered === qData.correct ? G : R, fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{quiz.answered === qData.correct ? "✅ Correct" : "✗ Incorrect"}</p>
                    <p style={{ color: "#374151", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{qData.explain}</p>
                  </div>
                  <button onClick={nextQuiz} style={{ width: "100%", padding: 14, background: N, border: "none", color: "#fff", borderRadius: 12, fontWeight: 700, cursor: "pointer", fontSize: 15 }}>
                    {quiz.q + 1 >= QUIZ.length ? "See results" : "Next question →"}
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  // ── AI Coach ──
  if (screen === "ai") {
    return (
      <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#F5F7FA", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <style>{`* { box-sizing: border-box; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #F5F7FA; } ::-webkit-scrollbar-thumb { background: #D1D9E6; border-radius: 4px; } @keyframes b{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}} button:focus, input:focus { outline: 2px solid #1A9E8F; outline-offset: 2px; }`}</style>
        <div style={{ background: `linear-gradient(135deg, ${N} 0%, #1A3060 100%)`, padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setScreen("home")} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 14 }}>← Back</button>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.15)", margin: "0 4px" }} />
          <TASSLogo size="sm" theme="dark" />
          <div style={{ marginLeft: "auto" }}>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, lineHeight: 1 }}>Engineering Coach</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, marginTop: 2 }}>AI-Powered</div>
          </div>
        </div>
        <div style={{ background: "#fff", borderBottom: "1px solid #E2E8F0", padding: "10px 14px", display: "flex", gap: 8, overflowX: "auto" }}>
          {["Run a mock interview", "Help me write my personal statement", "Work through a numerical test question", "Explain the BAE Systems process", "Help me rewrite my CV profile", "I don't have a reference — what do I do?"].map((p, i) => (
            <button key={i} onClick={() => setInput(p)} style={{ background: T + "15", border: `1px solid ${T}40`, color: T, borderRadius: 99, padding: "5px 12px", whiteSpace: "nowrap", fontSize: 12, fontWeight: 600, cursor: "pointer", flexShrink: 0 }}>{p}</button>
          ))}
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 14 }}>
          {msgs.map((m, i) => (
            <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", gap: 8 }}>
              {m.role === "assistant" && <div style={{ width: 30, height: 30, background: T, borderRadius: 99, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0, alignSelf: "flex-end" }}>⚙️</div>}
              <div style={{ maxWidth: "82%", padding: "11px 15px", borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px", background: m.role === "user" ? N : "#fff", color: m.role === "user" ? "#fff" : "#2D3748", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{m.content}</div>
            </div>
          ))}
          {aiLoading && (
            <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
              <div style={{ width: 30, height: 30, background: T, borderRadius: 99, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>⚙️</div>
              <div style={{ background: "#fff", borderRadius: "16px 16px 16px 4px", padding: "12px 16px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", gap: 4 }}>{[0,1,2].map(i => <div key={i} style={{ width: 7, height: 7, background: T, borderRadius: 99, animation: `b 1.2s ${i*0.2}s infinite` }} />)}</div>
              </div>
            </div>
          )}
          <div ref={msgEnd} />
        </div>
        <div style={{ padding: "10px 14px", background: "#fff", borderTop: "1px solid #E2E8F0", display: "flex", gap: 8 }}>
          <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMsg()} placeholder="Ask your coach anything…" rows={2}
            style={{ flex: 1, padding: "11px 14px", borderRadius: 10, border: "2px solid #E2E8F0", fontSize: 14, outline: "none", fontFamily: "inherit", resize: "none", minHeight: 52, maxHeight: 120, boxSizing: "border-box" }} />
          <button onClick={sendMsg} disabled={aiLoading || !input.trim()}
            style={{ padding: "0 18px", background: input.trim() ? T : "#E2E8F0", border: "none", color: input.trim() ? "#fff" : "#999", borderRadius: 10, fontWeight: 700, cursor: input.trim() ? "pointer" : "default", fontSize: 20 }}>↑</button>
        </div>
        <style>{`@keyframes b{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}}`}</style>
      </div>
    );
  }

  // ── Module ──
  if (screen === "module" && modIdx !== null) {
    const mod = MODULES[modIdx];
    const sec = mod.sections[secIdx];
    return (
      <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#F5F7FA", minHeight: "100vh" }}>
        <style>{`* { box-sizing: border-box; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #F5F7FA; } ::-webkit-scrollbar-thumb { background: #D1D9E6; border-radius: 4px; } button:focus, input:focus, textarea:focus { outline: 2px solid #1A9E8F; outline-offset: 2px; }`}</style>
        <div style={{ background: `linear-gradient(135deg, ${N} 0%, #1A3060 100%)`, padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => { setScreen("home"); setSecIdx(0); }} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 14 }}>← Back</button>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.15)", margin: "0 4px" }} />
          <div style={{ flex: 1 }}>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Section {mod.id} of {MODULES.length}</div>
            <div style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>{mod.icon} {mod.title}</div>
          </div>
        </div>
        <div style={{ background: "#fff", borderBottom: "1px solid #E2E8F0", display: "flex", overflowX: "auto", padding: "0 12px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          {mod.sections.map((s, i) => (
            <button key={i} onClick={() => setSecIdx(i)} style={{ border: "none", background: "none", padding: "10px 8px", fontSize: 11, fontWeight: 600, color: secIdx === i ? T : "#999", borderBottom: secIdx === i ? `3px solid ${T}` : "3px solid transparent", cursor: "pointer", whiteSpace: "nowrap", marginRight: 4 }}>
              {i + 1}. {s.heading.replace(/^\d+.\d+\s+/, "").substring(0, 22)}{s.heading.length > 22 ? "…" : ""}
            </button>
          ))}
        </div>
        <div style={{ padding: "20px 16px", maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ color: N, fontSize: 19, fontWeight: 800, marginBottom: 4, lineHeight: 1.3 }}>{sec.heading}</h2>
          <div style={{ height: 3, width: 36, background: `linear-gradient(90deg, ${T}, #0D8B7D)`, borderRadius: 2, marginBottom: 18 }} />
          <RenderContent content={sec.content} mod={mod} />
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            {secIdx > 0 && <button onClick={() => setSecIdx(s => s-1)} style={{ flex: 1, padding: "12px", background: "#fff", border: `2px solid ${T}`, color: T, borderRadius: 10, fontWeight: 700, cursor: "pointer", fontSize: 14 }}>← Previous</button>}
            {secIdx < mod.sections.length - 1
              ? <button onClick={() => setSecIdx(s => s+1)} style={{ flex: 1, padding: "12px", background: T, border: "none", color: "#fff", borderRadius: 10, fontWeight: 700, cursor: "pointer", fontSize: 14 }}>Next →</button>
              : <button onClick={() => { setScreen("home"); setSecIdx(0); }} style={{ flex: 1, padding: "12px", background: N, border: "none", color: "#fff", borderRadius: 10, fontWeight: 700, cursor: "pointer", fontSize: 14 }}>✅ Section complete</button>}
          </div>
        </div>
      </div>
    );
  }

  // ── Home ──
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#F5F7FA", minHeight: "100vh" }}>
      <style>{`* { box-sizing: border-box; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #F5F7FA; } ::-webkit-scrollbar-thumb { background: #D1D9E6; border-radius: 4px; } button:focus, input:focus { outline: 2px solid #1A9E8F; outline-offset: 2px; }`}</style>
      <div style={{ background: `linear-gradient(135deg, ${N} 0%, #1A3060 100%)`, padding: "28px 20px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -50, right: -30, width: 180, height: 180, borderRadius: "50%", background: "rgba(26,158,143,0.08)" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
          <TASSLogo size="sm" theme="dark" />
          <div>
            <h1 style={{ color: "#fff", fontSize: 22, fontWeight: 900, lineHeight: 1.2, margin: "0 0 6px" }}>Engineering & Manufacturing</h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.65, margin: 0 }}>Full-depth sector module · Decision, Preparation, Execution</p>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 16px 0" }}>
        <button onClick={() => setScreen("ai")} style={{ width: "100%", background: `linear-gradient(135deg, ${T}, #0D8B7D)`, border: "none", borderRadius: 14, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14, cursor: "pointer", boxShadow: `0 4px 20px ${T}40`, marginBottom: 10 }}>
          <div style={{ width: 44, height: 44, background: "rgba(255,255,255,0.2)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>⚙️</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>TASS Engineering Coach</div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>Mock interviews · STAR answers · Test practice · CV help</div>
          </div>
          <div style={{ marginLeft: "auto", color: "rgba(255,255,255,0.6)", fontSize: 20 }}>→</div>
        </button>
        <button onClick={() => setScreen("quiz")} style={{ width: "100%", background: N, border: "none", borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14, cursor: "pointer", marginBottom: 20 }}>
          <div style={{ width: 44, height: 44, background: A + "25", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>🧮</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 15 }}>Knowledge Check</div>
            <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 12 }}>8 questions drawn from the module content</div>
          </div>
          <div style={{ marginLeft: "auto", color: A, fontWeight: 700, fontSize: 13 }}>Start →</div>
        </button>
      </div>

      <div style={{ padding: "0 16px 28px" }}>
        <div style={{ fontSize: 11, color: "#999", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Module content</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {MODULES.map((mod, i) => (
            <button key={mod.id} onClick={() => { setModIdx(i); setSecIdx(0); setScreen("module"); }}
              style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", textAlign: "left" }}>
              <div style={{ width: 46, height: 46, background: T + "18", borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{mod.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, color: T, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 }}>Section {mod.id}</div>
                <div style={{ color: N, fontWeight: 700, fontSize: 14 }}>{mod.title}</div>
                <div style={{ color: "#999", fontSize: 11, marginTop: 2 }}>{mod.subtitle}</div>
              </div>
              <div style={{ color: "#CCC", fontSize: 18 }}>›</div>
            </button>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "4px 20px 28px", color: "#bbb", fontSize: 11 }}>
        <strong style={{ color: T }}>The Apprenticeship Success System™</strong> · Engineering & Manufacturing · tass.scot
      </div>
    </div>
  );
}
