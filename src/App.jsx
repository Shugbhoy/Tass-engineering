import { useState, useRef, useEffect } from "react";

const NAVY  = "#0D1B3E";
const TEAL  = "#1A9E8F";
const AMBER = "#F4A623";
const RUST  = "#C0392B";
const GREEN = "#1A6B3A";
const STEEL = "#1D4ED8";
const GREY  = "#F0F4F8";
const WHITE = "#FFFFFF";
const MID   = "#64748B";

function TASSLogo({ size = "md", theme = "light" }) {
  const s = { sm:{the:9,main:18,sub:16,tag:9,rW:16,rH:1.5,gap:2}, md:{the:11,main:24,sub:22,tag:11,rW:22,rH:2,gap:3}, lg:{the:14,main:32,sub:29,tag:13,rW:28,rH:2,gap:4} }[size]||{the:11,main:24,sub:22,tag:11,rW:22,rH:2,gap:3};
  const navy=theme==="dark"?"#fff":NAVY, tag=theme==="dark"?"rgba(255,255,255,0.5)":"#6B7FA3", tagB=theme==="dark"?"rgba(255,255,255,0.75)":"#3D4F6B";
  return (
    <div style={{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:s.gap,userSelect:"none"}}>
      <div style={{display:"flex",alignItems:"center",gap:7}}>
        <div style={{width:s.rW,height:s.rH,background:TEAL,borderRadius:99}}/><span style={{color:TEAL,fontSize:s.the,fontWeight:800,letterSpacing:"0.25em",textTransform:"uppercase",lineHeight:1}}>THE</span><div style={{width:s.rW,height:s.rH,background:TEAL,borderRadius:99}}/>
      </div>
      <div style={{color:navy,fontSize:s.main,fontWeight:900,letterSpacing:"-0.01em",textTransform:"uppercase",lineHeight:1,marginTop:-1}}>APPRENTICESHIP</div>
      <div style={{color:TEAL,fontSize:s.sub,fontWeight:900,letterSpacing:"-0.01em",textTransform:"uppercase",lineHeight:1,marginTop:-3}}>SUCCESS SYSTEM™</div>
      <div style={{width:"70%",height:s.rH,background:TEAL,borderRadius:99}}/>
      <div style={{color:tag,fontSize:s.tag,letterSpacing:"0.16em",textTransform:"uppercase",fontWeight:400,marginTop:1}}>Stop Guessing.{" "}<strong style={{fontWeight:800,color:tagB}}>Start Securing.</strong></div>
    </div>
  );
}

const TABS = [
  {id:"home",      icon:"🏠", label:"Home"},
  {id:"sector",    icon:"⚙️",  label:"Sector"},
  {id:"pathways",  icon:"📋", label:"Pathways"},
  {id:"technical", icon:"🔧", label:"Technical"},
  {id:"employers", icon:"🏭", label:"Employers"},
  {id:"apply",     icon:"📝", label:"Apply"},
  {id:"mjs",       icon:"🏛️",  label:"MyJobScot"},
  {id:"cv",        icon:"📄", label:"CV"},
  {id:"star",      icon:"⭐", label:"STAR"},
  {id:"interview", icon:"🎤", label:"Interview"},
  {id:"tests",     icon:"🧮", label:"Tests"},
  {id:"coach",     icon:"🤖", label:"AI Coach"},
];

function PageHeader({icon,title,subtitle}){
  return (
    <div style={{marginBottom:22}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
        <span style={{fontSize:22}}>{icon}</span>
        <h2 style={{color:NAVY,fontSize:20,fontWeight:900,margin:0,letterSpacing:"-0.02em"}}>{title}</h2>
      </div>
      <div style={{height:3,width:40,background:AMBER,borderRadius:2,marginBottom:8}}/>
      {subtitle&&<p style={{color:MID,fontSize:13,lineHeight:1.6,margin:0}}>{subtitle}</p>}
    </div>
  );
}

function Card({children,style={}}){
  return <div style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:12,padding:16,marginBottom:12,boxShadow:"0 1px 4px rgba(0,0,0,0.04)",...style}}>{children}</div>;
}

function InfoBox({text,type="tip"}){
  const s={tip:{bg:"#FFFBEB",border:AMBER,col:"#92400E"},info:{bg:"#EFF6FF",border:TEAL,col:"#1A5276"},success:{bg:"#F0FDF4",border:GREEN,col:"#14532D"},warning:{bg:"#FEF2F2",border:RUST,col:"#7F1D1D"},steel:{bg:"#EFF6FF",border:STEEL,col:"#1E3A8A"}}[type]||{bg:"#FFFBEB",border:AMBER,col:"#92400E"};
  return <div style={{background:s.bg,borderLeft:`4px solid ${s.border}`,borderRadius:8,padding:"10px 13px",marginBottom:14}}><p style={{color:s.col,fontSize:13,lineHeight:1.65,margin:0}}>{text}</p></div>;
}

function Accordion({items,accent=TEAL}){
  const [open,setOpen]=useState(null);
  return (
    <div>{items.map((item,i)=>(
      <div key={i} style={{background:WHITE,border:`1px solid ${open===i?accent:"#E2E8F0"}`,borderRadius:10,overflow:"hidden",marginBottom:8,boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
        <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",background:"none",border:"none",padding:"13px 15px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",fontFamily:"inherit"}}>
          <span style={{color:NAVY,fontWeight:700,fontSize:14,textAlign:"left"}}>{item.title}</span>
          <span style={{color:accent,fontSize:18,flexShrink:0}}>{open===i?"−":"+"}</span>
        </button>
        {open===i&&<div style={{padding:"0 15px 15px",borderTop:"1px solid #F0F4F8"}}><div style={{paddingTop:12}}>{typeof item.content==="string"?<p style={{color:"#444",fontSize:13,lineHeight:1.75,margin:0,whiteSpace:"pre-line"}}>{item.content}</p>:item.content}</div></div>}
      </div>
    ))}</div>
  );
}

function ExampleToggle({weak,strong,weakLabel="✗ Weak",strongLabel="✓ Strong"}){
  const [show,setShow]=useState(null);
  return (
    <div>
      <div style={{display:"flex",gap:8,marginBottom:10}}>
        <button onClick={()=>setShow(show==="weak"?null:"weak")} style={{flex:1,padding:"9px 8px",background:show==="weak"?RUST:WHITE,border:`2px solid ${RUST}`,color:show==="weak"?WHITE:RUST,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{show==="weak"?"Hide":weakLabel}</button>
        <button onClick={()=>setShow(show==="strong"?null:"strong")} style={{flex:1,padding:"9px 8px",background:show==="strong"?GREEN:WHITE,border:`2px solid ${GREEN}`,color:show==="strong"?WHITE:GREEN,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{show==="strong"?"Hide":strongLabel}</button>
      </div>
      {show==="weak"&&<div style={{background:"#FEF2F2",borderLeft:`3px solid ${RUST}`,borderRadius:8,padding:"12px 14px",marginBottom:8}}><p style={{color:RUST,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 6px"}}>Weak — vague, no evidence</p><p style={{color:"#7F1D1D",fontSize:13,lineHeight:1.7,margin:0,fontStyle:"italic",whiteSpace:"pre-line"}}>{weak}</p></div>}
      {show==="strong"&&<div style={{background:"#F0FDF4",borderLeft:`3px solid ${GREEN}`,borderRadius:8,padding:"12px 14px",marginBottom:8}}><p style={{color:GREEN,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 6px"}}>Strong — specific, evidenced</p><p style={{color:"#14532D",fontSize:13,lineHeight:1.75,margin:0,whiteSpace:"pre-line"}}>{strong}</p></div>}
    </div>
  );
}

function NavTabBar({options,active,onSelect}){
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
      {options.map((opt,i)=>{
        const id=typeof opt==="object"?opt.id:opt, label=typeof opt==="object"?opt.label:opt, isActive=active===id;
        return <button key={i} onClick={()=>onSelect(id)} style={{background:isActive?NAVY:WHITE,color:isActive?WHITE:MID,border:`1px solid ${isActive?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:isActive?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase",letterSpacing:0.3,whiteSpace:"nowrap"}}>{label}</button>;
      })}
    </div>
  );
}

// HOME
function HomeModule({setTab}){
  const cards=[
    {id:"sector",    icon:"⚙️", title:"Sector Overview",      desc:"Scotland's engineering landscape — what the sector actually is and who is hiring"},
    {id:"pathways",  icon:"📋",title:"Engineering Pathways",   desc:"10 distinct MA pathways — mechanical, electrical, civil, oil and gas, renewables and more"},
    {id:"technical", icon:"🔧",title:"Technical Basics",       desc:"What you need to know before every engineering interview — most candidates skip this"},
    {id:"employers", icon:"🏭",title:"Scottish Employers",     desc:"Babcock, Leonardo, BAE Systems, Weir Group, SSE, Wood Group and more — who they are and what they offer"},
    {id:"apply",     icon:"📝",title:"How to Apply",           desc:"Where to find Scottish engineering apprenticeships and the application strategy"},
    {id:"mjs",       icon:"🏛️", title:"MyJobScotland",         desc:"Public sector engineering roles — NHS Estates, Transport Scotland, Scottish Water, councils"},
    {id:"cv",        icon:"📄",title:"CV Builder",             desc:"Three complete profiles with weak and strong examples — school leaver, graduate, career changer"},
    {id:"star",      icon:"⭐",title:"STAR Examples",          desc:"Four engineering-specific worked examples — technical problem, teamwork, safety, learning"},
    {id:"interview", icon:"🎤",title:"Interview Prep",         desc:"Technical and competency questions specific to engineering apprenticeship interviews"},
    {id:"tests",     icon:"🧮",title:"Test Preparation",       desc:"Numerical reasoning, mechanical reasoning and situational judgement — how to practise"},
    {id:"coach",     icon:"🤖",title:"AI Coach",               desc:"Mock interviews, CV feedback, technical knowledge checks and application guidance"},
  ];
  return (
    <div>
      <div style={{background:`linear-gradient(135deg, ${NAVY} 0%, #1A3060 100%)`,borderRadius:14,padding:"32px 20px 28px",display:"flex",justifyContent:"center",marginBottom:20}}>
        <TASSLogo size="lg" theme="dark"/>
      </div>
      <Card style={{borderLeft:`4px solid ${STEEL}`,background:"#EFF6FF"}}>
        <p style={{color:"#1E3A8A",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:0.5,margin:"0 0 4px"}}>Engineering and Manufacturing</p>
        <p style={{color:NAVY,fontSize:14,lineHeight:1.7,margin:0}}>Scotland's dedicated preparation module for Engineering and Manufacturing Modern Apprenticeships. Covers all 10 engineering pathways, Scotland's major employers, technical interview prep, test preparation, MyJobScotland guidance and sector-specific STAR examples — with a live AI coach throughout.</p>
      </Card>
      <Card style={{borderLeft:`4px solid ${TEAL}`,background:"#EFF6FF",marginBottom:20}}>
        <p style={{color:"#1A5276",fontWeight:700,fontSize:13,margin:"0 0 4px",textTransform:"uppercase",letterSpacing:0.5}}>Start here</p>
        <p style={{color:"#1A5276",fontSize:13,lineHeight:1.65,margin:0}}>Read <strong>Sector Overview</strong> first to understand the landscape. Then go to <strong>Engineering Pathways</strong> to identify which route suits you. Do <strong>Technical Basics</strong> before any interview — most candidates skip it and most regret it.</p>
      </Card>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:24}}>
        {cards.map((c,i)=>(
          <button key={i} onClick={()=>setTab(c.id)} style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:12,padding:"14px 12px",textAlign:"left",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}
            onMouseEnter={e=>e.currentTarget.style.borderColor=AMBER} onMouseLeave={e=>e.currentTarget.style.borderColor="#E2E8F0"}>
            <div style={{fontSize:20,marginBottom:6}}>{c.icon}</div>
            <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"0 0 3px",lineHeight:1.3}}>{c.title}</p>
            <p style={{color:MID,fontSize:11,lineHeight:1.4,margin:0}}>{c.desc}</p>
          </button>
        ))}
      </div>
      <div style={{textAlign:"center",color:"#AAA",fontSize:11}}><strong style={{color:TEAL}}>The Apprenticeship Success System™</strong> · tass.scot</div>
    </div>
  );
}

// SECTOR
function SectorModule(){
  return (
    <div>
      <PageHeader icon="⚙️" title="Sector Overview" subtitle="Scotland's engineering and manufacturing landscape — what the sector actually is, who is hiring and why now is a strong time to enter."/>
      <Card style={{borderLeft:`4px solid ${STEEL}`,background:"#EFF6FF"}}>
        <p style={{color:"#1E3A8A",fontWeight:800,fontSize:14,margin:"0 0 6px"}}>Engineering employs 1 in 5 of Scotland's workforce</p>
        <p style={{color:"#1E3A8A",fontSize:13,lineHeight:1.7,margin:0}}>Scotland has one of the strongest engineering traditions in the world — from the shipyards of the Clyde to the North Sea oil and gas industry, from precision aerospace manufacturing to the fastest-growing renewables sector in Europe. Engineering apprenticeships in Scotland are among the most sought-after qualifications in the country and among the most secure career foundations available.</p>
      </Card>
      <Accordion accent={STEEL} items={[
        {title:"What Scottish engineering actually looks like",content:"Engineering in Scotland spans a remarkable range of industries:\n\nDefence and aerospace — Scotland is home to major defence contractors including Babcock International (Rosyth), Leonardo (Edinburgh), BAE Systems (Glasgow) and Spirit AeroSystems (Prestwick). These organisations employ thousands of engineers and run structured apprenticeship programmes.\n\nOil, gas and energy — Aberdeen is the oil capital of Europe. Companies including Wood Group, Petrofac, Aker Solutions and TechnipFMC employ large engineering workforces. The transition to renewables (offshore wind, hydrogen) is creating new engineering roles across the same skills base.\n\nRenewables — Scotland has the most ambitious renewable energy targets in Europe. SSE, ScottishPower, Vattenfall and Siemens Gamesa are all active in Scotland, building and maintaining offshore and onshore wind, solar and tidal energy infrastructure.\n\nWater and utilities — Scottish Water employs hundreds of engineers across infrastructure, treatment and network maintenance. Transport Scotland, SEPA and Scottish councils all employ civil and environmental engineers.\n\nPrecision and process — Weir Group (Glasgow), Howden (Glasgow) and Aggreko (Glasgow) are globally significant Scottish engineering companies producing specialist industrial equipment.\n\nManufacturing — From whisky to pharmaceuticals, Scotland has significant process manufacturing. GlaxoSmithKline, AstraZeneca, Diageo and others employ chemical and process engineers."},
        {title:"Why now is a strong time to enter engineering in Scotland",content:"Three factors make this an unusually strong time to enter engineering:\n\n1. The energy transition — Scotland's commitment to net zero by 2045 (the most ambitious target of any nation) requires a massive expansion of the engineering workforce. Offshore wind alone will require tens of thousands of new engineers over the next decade.\n\n2. Defence spending — UK defence spending is increasing significantly. Scotland's defence contractors — Babcock, Leonardo, BAE Systems — are all expanding their workforces and their apprenticeship programmes.\n\n3. Infrastructure investment — The Scottish Government's capital spending programme includes billions for roads, water infrastructure, hospitals and public buildings. Civil and structural engineering demand is high and growing.\n\nFor someone entering engineering now, the labour market will be strong for their entire career."},
        {title:"Engineering MA vs Engineering Graduate Apprenticeship",content:"The Engineering Modern Apprenticeship (SCQF Level 6) is the most common entry route:\n• Entry typically at 16–18 with National 5s or basic Highers\n• 2–4 years depending on pathway\n• Leads to SVQ Level 3 in the relevant engineering discipline\n• Strong employer demand — especially defence, energy and manufacturing\n\nThe Engineering Graduate Apprenticeship (SCQF Level 10 — BEng Hons) is a degree while you work:\n• Entry requires 4 Highers at BBBB including Maths and Physics\n• 4 years — one day per week at university\n• Accredited by IMechE — pathway to Incorporated Engineer (IEng)\n• Available at Heriot-Watt, University of Strathclyde, University of the West of Scotland\n\nThis module focuses primarily on the Modern Apprenticeship route. For the Graduate Apprenticeship, see the TASS Graduate Apprenticeship module."},
        {title:"Salary expectations — Scotland-specific",content:"Modern Apprenticeship (during training):\n• Year 1: £14,000–£18,000\n• Year 2–3: £16,000–£22,000\n• Qualified (post-apprenticeship): £24,000–£32,000\n\nWith experience (5–10 years):\n• Technician/Engineer: £30,000–£45,000\n• Senior Engineer: £42,000–£58,000\n• Lead/Principal Engineer: £55,000–£75,000+\n\nAberdeen (oil and gas) salaries are typically 15–25% above Scottish average for equivalent roles.\n\nDefence contractors (Babcock, Leonardo, BAE Systems) tend to offer structured pay progression tied to qualification milestones — often better than equivalent private sector roles."},
      ]}/>
    </div>
  );
}

// PATHWAYS
function PathwaysModule(){
  const pathways=[
    {id:"mechanical",icon:"⚙️",name:"Mechanical Engineering",
     desc:"The broadest and most common engineering pathway. Covers the design, manufacture and maintenance of mechanical systems — from pumps and valves to turbines and vehicles. Used in almost every engineering sector.",
     roles:"Mechanical Engineering Technician, Maintenance Engineer, Manufacturing Technician, Production Engineer",
     employers:"Weir Group, Howden, Aggreko, Babcock, Scottish Water, NHS Estates",
     quals:"SVQ Level 3 Performing Engineering Operations (Mechanical), City and Guilds Level 3 Engineering",
     day:["8:00 — Morning systems check. Review any overnight maintenance alerts or breakdown reports.","9:00 — Planned preventative maintenance task: strip, inspect and rebuild a pump assembly. Document findings.","11:30 — Respond to a breakdown call. Diagnose fault, order replacement part, implement temporary fix.","14:00 — Drawing review meeting: look at engineering drawings for an upcoming installation project.","16:00 — Update maintenance management system. Complete risk assessment for tomorrow's work."]},
    {id:"electrical",icon:"⚡",name:"Electrical Engineering",
     desc:"Design, installation and maintenance of electrical systems — from building services and industrial plant to high-voltage transmission infrastructure. Strong demand across every sector that uses electricity.",
     roles:"Electrical Engineering Technician, Electrical Maintenance Engineer, Instrumentation Technician",
     employers:"SSE, ScottishPower, Babcock, Weir Group, NHS Estates, Scottish councils",
     quals:"SVQ Level 3 Performing Engineering Operations (Electrical/Electronic), City and Guilds Level 3 Electrotechnical",
     day:["8:00 — Tool and equipment check. Review permit to work system for the day's planned tasks.","9:00 — Cable installation: run new power supplies to a piece of plant equipment. Work from drawings.","11:00 — Fault finding on a control panel. Use multimeter and test equipment systematically.","14:00 — First aid refresher training session — mandatory for electrical workers.","15:30 — Isolation procedure: safely isolate electrical supply for tomorrow's major maintenance work."]},
    {id:"civil",icon:"🏗️",name:"Civil Engineering",
     desc:"Design and construction of infrastructure — roads, bridges, water systems, drainage and buildings. Scotland has significant civil engineering demand driven by infrastructure investment and renewables construction.",
     roles:"Civil Engineering Technician, Site Engineer, Quantity Surveyor Technician, Infrastructure Engineer",
     employers:"Transport Scotland, Scottish Water, Balfour Beatty, BAM, Amey, Scottish councils",
     quals:"SVQ Level 3 Civil Engineering, CITB qualifications, HNC Civil Engineering",
     day:["7:30 — Site briefing: health and safety, weather, today's tasks and any changes to programme.","8:00 — Setting out: use total station to mark positions for drainage installation.","10:00 — Material delivery: check delivery note, inspect materials, organise storage on site.","13:00 — Inspection of completed concrete pour from yesterday. Record results on quality sheet.","15:30 — End of day site walk. Document progress on site diary. Brief for tomorrow."]},
    {id:"instrumentation",icon:"📡",name:"Instrumentation and Control",
     desc:"The people who make industrial processes measurable and controllable. Covers sensors, transmitters, control valves, PLCs and SCADA systems. Critical in oil and gas, chemicals, water and power generation.",
     roles:"Instrument Technician, Control and Instrumentation Engineer, Automation Technician",
     employers:"Wood Group, Petrofac, Honeywell, ABB, Scottish Water, Ineos",
     quals:"SVQ Level 3 Performing Engineering Operations (Instrumentation and Control)",
     day:["8:00 — SCADA system review: check process trends, identify any anomalies in instrument readings.","9:30 — Calibration task: calibrate a pressure transmitter using dead weight tester. Document results.","11:00 — Control valve maintenance: strip, inspect, regrind seat, reassemble and test.","14:00 — Loop check on a new installation: verify signal path from sensor to control room display.","16:00 — Punch list review for commissioning: identify outstanding instrumentation items."]},
    {id:"oilgas",icon:"🛢️",name:"Oil, Gas and Petrochemical",
     desc:"Specialist engineering in the extraction, processing and refining of hydrocarbons. Scotland's North Sea industry is mature but significant, and the skills transfer directly into offshore wind and hydrogen production.",
     roles:"Process Operator, Mechanical Technician (Offshore), Instrument Technician (Offshore), Petroleum Engineer",
     employers:"Wood Group, Petrofac, Apache, Harbour Energy, Aker Solutions, TechnipFMC",
     quals:"SVQ Level 3 Process Operations, OPITO offshore survival and emergency response qualifications",
     day:["Offshore rotations are typically 2 weeks on, 2–3 weeks off (offshore pattern)","Onshore training periods cover process knowledge, safety systems and emergency procedures","Daily tasks offshore: equipment monitoring, routine maintenance, permit to work administration","Exposure to extreme environments — safety culture is non-negotiable in this pathway"]},
    {id:"renewables",icon:"🌊",name:"Renewable Energy",
     desc:"The fastest-growing engineering sector in Scotland. Wind turbine installation and maintenance, offshore construction, grid connection and energy storage systems. Scotland's net zero ambition creates sustained long-term demand.",
     roles:"Wind Turbine Technician, Offshore Wind Technician, Electrical/Mechanical Renewables Engineer",
     employers:"SSE Renewables, ScottishPower Renewables, Siemens Gamesa, Vattenfall, Orsted, Vestas",
     quals:"SVQ Level 3 in relevant engineering discipline, GWO (Global Wind Organisation) safety certification, offshore survival",
     day:["7:30 — Safety briefing and weather check before any turbine access.","8:30 — Tower climb: ascend turbine for scheduled 500-hour service inspection.","10:30 — Gearbox oil sample collection and vibration analysis for condition monitoring.","13:00 — Report writing: document findings and raise work orders for any identified defects.","14:30 — Permit to work administration, tool return, debrief with site supervisor."]},
    {id:"aerospace",icon:"✈️",name:"Aerospace and Defence",
     desc:"Precision manufacturing and maintenance of aircraft, defence systems and associated equipment. Scotland has a world-class aerospace cluster centred on Prestwick (Spirit AeroSystems) and Edinburgh/Glasgow (Leonardo, Thales).",
     roles:"Aerospace Technician, Avionics Technician, Aircraft Maintenance Technician, Manufacturing Technician",
     employers:"Spirit AeroSystems (Prestwick), Leonardo (Edinburgh), Thales (Glasgow), BAE Systems",
     quals:"SVQ Level 3 Aerospace Manufacturing, City and Guilds Aerospace, EASA Part 66 (aircraft maintenance licence pathway)",
     day:["7:00 — Tool accountability check — every tool signed in and out. Non-negotiable in aerospace.","7:30 — Technical briefing: review today's work card and technical documentation.","8:00 — Structure repair: composite repair on a wing leading edge panel. Work to exact technical standard.","12:00 — Quality inspection: first article inspection with QA engineer on completed work.","14:00 — Drawing update briefing: review latest engineering change notice.","15:30 — Close-out documentation: sign and stamp work card. Inspection stamp process."]},
    {id:"manufacturing",icon:"🏭",name:"Manufacturing and Production",
     desc:"The engineering of making things — at scale, consistently, safely and efficiently. Covers everything from CNC machining and fabrication to lean manufacturing, quality systems and production planning.",
     roles:"Manufacturing Technician, CNC Machinist, Quality Control Technician, Production Engineer",
     employers:"Weir Group, Aggreko, Howden, Diageo, GlaxoSmithKline, Michelin (Dundee)",
     quals:"SVQ Level 3 Performing Engineering Operations (Machining), City and Guilds Fabrication and Welding, IQF qualifications",
     day:["7:30 — Machine start-up and warm-up procedures. Check cutting tools and fixture condition.","8:00 — Production run: CNC turning of batch components to engineering drawing tolerances.","10:00 — First-off inspection: measure first component against drawing. Adjust offsets if required.","13:00 — Process improvement meeting: Lean/5S review of work area organisation.","15:00 — Tool change and programme update for tomorrow's different component batch."]},
    {id:"chemical",icon:"⚗️",name:"Chemical and Process Engineering",
     desc:"Managing chemical processes at industrial scale — from whisky distillation to pharmaceutical manufacture. Scotland has a world-class whisky industry and a growing life sciences sector both requiring process engineers.",
     roles:"Process Technician, Chemical Plant Operator, Laboratory Technician, Process Engineer",
     employers:"Diageo, William Grant and Sons, GlaxoSmithKline, AstraZeneca, Ineos, Caledonian Produce",
     quals:"SVQ Level 3 Process Operations (Chemical), BTEC Level 3 Applied Science, City and Guilds process qualifications",
     day:["7:00 — Shift handover: review batch records from previous shift. Any issues to carry forward?","7:30 — Process monitoring: check temperatures, pressures, flow rates against process specification.","9:00 — Sample collection: take samples at key process points. Send to lab for analysis.","11:00 — CIP (clean in place) preparation: set up automated cleaning cycle for process vessel.","14:00 — Batch record completion: document all measurements and deviations for quality records."]},
    {id:"structural",icon:"🏢",name:"Structural and Building Services",
     desc:"The engineering of buildings and built infrastructure — structural integrity, building services (HVAC, water, power), fire protection and energy efficiency. Strong demand driven by Scotland's public sector building programme.",
     roles:"Structural Technician, Building Services Engineer, HVAC Technician, Fire Protection Engineer",
     employers:"NHS Scotland (Estates), all 32 Scottish councils, Robertson Group, Kier, AECOM",
     quals:"SVQ Level 3 Building Services Engineering, City and Guilds Plumbing/Heating, CIBSE qualifications",
     day:["8:00 — Drawing check: review today's installation drawings for a new HVAC system.","9:00 — Installation work: pipe run installation in a new hospital wing.","11:30 — Coordination meeting with other trades: resolve clash between pipework and electrical trunking.","14:00 — Commissioning: balancing and testing of a newly installed air handling unit.","16:00 — As-built mark-up: update drawings to reflect how the installation was actually built."]},
  ];
  const [active,setActive]=useState("mechanical");
  const p=pathways.find(x=>x.id===active)||pathways[0];
  return (
    <div>
      <PageHeader icon="📋" title="Engineering Pathways" subtitle="Ten distinct MA pathways — select yours to see roles, employers, qualifications and a day in the life."/>
      <InfoBox text="All ten pathways lead to SVQ Level 3 qualifications and strong career foundations. The pathway you choose should reflect both your interests and the employers in your area." type="info"/>
      <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
        {pathways.map(pw=>(
          <button key={pw.id} onClick={()=>setActive(pw.id)} style={{background:active===pw.id?NAVY:WHITE,color:active===pw.id?WHITE:MID,border:`1px solid ${active===pw.id?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 10px",fontSize:10,fontWeight:active===pw.id?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            {pw.icon} {pw.name.split(" ")[0]}
          </button>
        ))}
      </div>
      <Card>
        <p style={{color:STEEL,fontWeight:800,fontSize:15,margin:"0 0 6px"}}>{p.icon} {p.name}</p>
        <p style={{color:"#444",fontSize:13,lineHeight:1.65,margin:"0 0 12px"}}>{p.desc}</p>
        {[["Typical roles",p.roles],["Key qualifications",p.quals],["Scottish employers",p.employers]].map(([label,val],i)=>(
          <div key={i} style={{display:"flex",gap:12,padding:"9px 0",borderBottom:"1px solid #F0F4F8"}}>
            <span style={{color:MID,fontSize:11,fontWeight:700,textTransform:"uppercase",minWidth:110,flexShrink:0}}>{label}</span>
            <span style={{color:NAVY,fontSize:13,lineHeight:1.5}}>{val}</span>
          </div>
        ))}
        <p style={{color:TEAL,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:"12px 0 8px"}}>Day in the life</p>
        {p.day.map((item,i)=>(
          <div key={i} style={{display:"flex",gap:10,marginBottom:7,alignItems:"flex-start"}}>
            <div style={{width:5,height:5,background:STEEL,borderRadius:99,flexShrink:0,marginTop:5}}/>
            <p style={{color:"#444",fontSize:13,lineHeight:1.55,margin:0}}>{item}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}

// TECHNICAL BASICS
function TechnicalModule(){
  const [cat,setCat]=useState("safety");
  const categories={
    safety:{label:"Safety",icon:"🦺",items:[
      {q:"What is a permit to work and why does it matter?",a:"A permit to work (PTW) is a formal document that authorises specific people to carry out specific work in a specific location at a specific time. It ensures that all hazards have been identified, all safety measures are in place, and everyone who needs to know has been informed before work begins.\n\nPTWs are used for high-risk work: electrical isolation, confined space entry, hot work (welding), work at height, and work on pressurised systems. The permit must be signed by an authorised person before work starts and formally closed out when work is complete.",why:"If you cannot explain what a permit to work is at an engineering interview, you are signalling that you have not researched the most fundamental safety system in the industry. Safety culture starts before you arrive on site."},
      {q:"What does COSHH stand for and what does it cover?",a:"COSHH stands for Control of Substances Hazardous to Health. It is the UK regulation (COSHH Regulations 2002) that requires employers to control exposure to hazardous substances to prevent ill health. Before using any chemical in a workplace, a COSHH assessment must be carried out — identifying the substance, its hazards, who might be exposed, and what controls are needed.\n\nSubstances covered include: chemicals, fumes, vapours, dust, biological agents. Every engineering workplace uses substances covered by COSHH — from cleaning products to lubricants to process chemicals.",why:"COSHH is relevant to every engineering pathway and every industrial workplace. Being able to explain it demonstrates genuine awareness of workplace health and safety, not just high-visibility clothing."},
      {q:"What is the hierarchy of controls?",a:"The hierarchy of controls is the order in which safety measures should be applied to manage risks — from most effective to least effective:\n\n1. Elimination — remove the hazard entirely\n2. Substitution — replace the hazard with something less dangerous\n3. Engineering controls — isolate people from the hazard (guards, enclosures, LEV)\n4. Administrative controls — change the way people work (training, procedures, permits)\n5. Personal Protective Equipment (PPE) — protect the worker from the hazard\n\nPPE is always the last resort — not the first response. Many workplaces default to PPE when engineering controls would be more effective.",why:"The hierarchy of controls is a fundamental safety concept tested in virtually every engineering interview. Knowing it shows that you understand safety thinking, not just safety compliance."},
      {q:"What does RIDDOR stand for?",a:"RIDDOR stands for Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013. It requires employers to report certain workplace incidents to the Health and Safety Executive (HSE):\n\n• Deaths at work\n• Specified injuries (fractures, amputations, loss of consciousness)\n• Over-7-day incapacitation (employee absent more than 7 consecutive days)\n• Occupational diseases\n• Dangerous occurrences (near misses that could have caused serious injury)\n\nReporting allows the HSE to identify trends and investigate serious incidents.",why:"RIDDOR knowledge shows you understand the regulatory framework around workplace safety — not just the day-to-day safety rules."},
    ]},
    engineering:{label:"Engineering",icon:"⚙️",items:[
      {q:"What is the difference between a tolerance and a fit?",a:"A tolerance is the permissible variation in a dimension — the difference between the maximum and minimum acceptable size of a manufactured part. For example, a shaft specified as 50mm ±0.05mm has a tolerance of 0.1mm.\n\nA fit describes the relationship between two mating parts — how tight or loose the assembly is:\n• Clearance fit: the hole is always bigger than the shaft — they slide together with a gap\n• Interference fit: the shaft is bigger than the hole — they must be pressed or heated together\n• Transition fit: may be either clearance or interference depending on the actual sizes\n\nTolerances and fits are specified on engineering drawings and are critical to manufactured parts working correctly.",why:"Any mechanical, manufacturing or aerospace pathway will involve reading engineering drawings. Understanding tolerances and fits is fundamental to doing the work correctly."},
      {q:"What is the difference between AC and DC electricity?",a:"DC (Direct Current) flows in one direction only — from positive to negative. Batteries produce DC. It is used in electronics, vehicles and some industrial applications.\n\nAC (Alternating Current) reverses direction periodically — in the UK at 50 times per second (50 Hz). The UK mains electricity supply is AC at 230 volts. AC is used for power distribution because it is easier to change voltage levels using transformers.\n\nMost industrial electrical systems use AC for power and DC for control circuits and electronics.",why:"Any electrical, instrumentation or general engineering pathway involves working with both AC and DC. Being unable to explain the difference at interview is a red flag for electrical safety awareness."},
      {q:"What is the purpose of earthing in an electrical system?",a:"Earthing (or grounding) connects electrical equipment to the earth via a low-resistance conductor. Its primary purposes are:\n\n1. Safety — if a fault occurs and a live conductor touches the metal casing of equipment, the earth connection provides a safe path for the fault current, causing the fuse or circuit breaker to operate and disconnecting the supply before anyone is electrocuted\n\n2. Overvoltage protection — earthing limits the voltage that can build up on equipment relative to earth\n\n3. Reference potential — provides a stable voltage reference for measurement and control systems\n\nWithout proper earthing, metal equipment can become live at dangerous voltages with no visible indication.",why:"Earthing is fundamental to electrical safety. Every electrical engineer must understand why it exists, not just that it does."},
      {q:"What is the difference between a lathe and a milling machine?",a:"A lathe rotates the workpiece against a stationary cutting tool. The workpiece spins and the tool is fed into it to remove material. Lathes are primarily used to create cylindrical parts — shafts, bearings, threaded components.\n\nA milling machine holds the workpiece stationary (clamped to a table) while a rotating cutting tool removes material. The table moves in multiple axes to create flat surfaces, slots, holes and complex profiles. CNC milling machines are computer-controlled and can produce highly complex components automatically.\n\nBoth are fundamental machine tools in mechanical and manufacturing engineering.",why:"Knowledge of basic machine tools is expected in mechanical and manufacturing apprenticeship interviews. Knowing the difference between a lathe and a milling machine is the floor, not the ceiling."},
    ]},
    drawings:{label:"Drawings",icon:"📐",items:[
      {q:"What is a first angle projection and how does it differ from third angle?",a:"Engineering drawings use projection to show a 3D object in 2D views.\n\nFirst angle projection (used in the UK and Europe): the front view is top-left, the view from above appears below it, the view from the right appears to the left. The views are projected onto the plane behind the object.\n\nThird angle projection (used in the USA): the front view is top-left, the view from above appears above it, the view from the right appears to the right. The symbol for third angle is a cone with the point away from you.\n\nThe projection method is always indicated on the drawing title block. Using the wrong projection convention causes costly manufacturing errors.",why:"Reading engineering drawings correctly requires knowing the projection method. Getting it wrong means manufacturing parts backwards. This is one of the most common errors made by new apprentices."},
      {q:"What information is contained in the title block of an engineering drawing?",a:"The title block is the information panel — usually in the bottom right corner of an engineering drawing. It contains:\n\n• Part name and number\n• Drawing number and revision level\n• Scale of the drawing\n• Material specification\n• Surface finish requirements\n• Tolerancing standard (e.g. BS8888)\n• Projection method (first or third angle)\n• Designer, checker and approver names and dates\n• Company name and logo\n\nAlways check the title block before starting work — the revision level tells you if you have the latest version.",why:"Every engineering apprentice will work from drawings. Knowing how to read the title block correctly ensures you are working to the right specification and the right version."},
      {q:"What does a dashed line represent on an engineering drawing?",a:"A dashed line (or hidden detail line) represents an edge or surface that is not visible from the viewing direction — it is hidden behind other material.\n\nOn a drawing of a drilled hole that goes through a block, the entry hole would be shown as a solid circle on the face where it enters, and the hidden edge at the back would be shown as a dashed circle.\n\nUnderstanding hidden detail lines is essential for reading complex assembly drawings where internal features must be understood without sectioning the part.",why:"Engineering drawings use a standardised system of line types to convey three-dimensional information in two dimensions. Misreading a hidden detail line can result in machining errors or assembly problems."},
    ]},
    materials:{label:"Materials",icon:"🔩",items:[
      {q:"What is the difference between ferrous and non-ferrous metals?",a:"Ferrous metals contain iron as their main constituent. They are generally strong, hard and magnetic but susceptible to rust if not protected.\n\nCommon ferrous metals: mild steel (iron + carbon, ~0.25%), stainless steel (iron + chromium + nickel), cast iron (iron + 2–4% carbon), tool steel.\n\nNon-ferrous metals do not contain significant iron. They are generally lighter, more corrosion-resistant and non-magnetic.\n\nCommon non-ferrous metals: aluminium (aircraft, packaging), copper (electrical conductors), brass (copper + zinc — valves, fittings), titanium (aerospace — high strength, low weight, corrosion resistant), nickel alloys (high temperature applications).",why:"Materials selection is fundamental to engineering design and manufacture. Every mechanical and manufacturing engineer is expected to understand basic metals classification."},
      {q:"What is work hardening?",a:"Work hardening (also called strain hardening) is the strengthening of a metal by plastic deformation. When a metal is bent, compressed, stretched or hammered beyond its elastic limit, the internal crystal structure changes — dislocations are created that make further deformation more difficult. The metal becomes harder and stronger, but also more brittle.\n\nExamples: repeatedly bending a metal paperclip makes it harder and eventually causes it to fracture. Cold-drawn steel wire is stronger than hot-rolled steel of the same composition because of work hardening during the drawing process.\n\nWork hardening can be useful (strengthening) or problematic (making a material difficult to form). Annealing (heating and slow cooling) can reverse work hardening.",why:"Understanding work hardening explains why you cannot repeatedly bend something without it eventually breaking — a practical reality in mechanical maintenance and manufacturing."},
    ]},
  };
  const cat_data=categories[cat];
  const [open,setOpen]=useState(null);
  return (
    <div>
      <PageHeader icon="🔧" title="Technical Basics" subtitle="What you must know before every engineering interview — most candidates skip this section and most regret it."/>
      <InfoBox text="You do not need to be a qualified engineer before starting an apprenticeship. But demonstrating baseline technical knowledge and genuine curiosity separates prepared candidates from hopeful ones." type="warning"/>
      <NavTabBar options={Object.entries(categories).map(([k,v])=>({id:k,label:v.icon+" "+v.label}))} active={cat} onSelect={(id)=>{setCat(id);setOpen(null);}}/>
      <div>
        {cat_data.items.map((item,i)=>(
          <div key={i} style={{background:WHITE,border:`1px solid ${open===i?STEEL:"#E2E8F0"}`,borderRadius:12,overflow:"hidden",marginBottom:10,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
            <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",background:"none",border:"none",padding:"13px 15px",display:"flex",justifyContent:"space-between",alignItems:"flex-start",cursor:"pointer",fontFamily:"inherit",gap:12}}>
              <span style={{color:NAVY,fontWeight:700,fontSize:14,textAlign:"left",lineHeight:1.4}}>{item.q}</span>
              <span style={{color:STEEL,fontSize:18,flexShrink:0}}>{open===i?"−":"+"}</span>
            </button>
            {open===i&&(
              <div style={{padding:"0 15px 15px",borderTop:"1px solid #F0F4F8"}}>
                <div style={{background:"#EFF6FF",borderLeft:`3px solid ${STEEL}`,borderRadius:8,padding:"11px 13px",margin:"12px 0 10px"}}>
                  <p style={{color:"#1E3A8A",fontSize:13,lineHeight:1.75,margin:0,whiteSpace:"pre-line"}}>{item.a}</p>
                </div>
                <div style={{background:"#FFFBEB",borderLeft:`3px solid ${AMBER}`,borderRadius:8,padding:"9px 12px"}}>
                  <p style={{color:"#92400E",fontSize:12,lineHeight:1.6,margin:0}}>💡 <strong>Why this matters:</strong> {item.why}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// EMPLOYERS
function EmployersModule(){
  const employers=[
    {id:"babcock",name:"Babcock International",icon:"🚢",sector:"Defence and Marine",location:"Rosyth, Fife",size:"3,000+ in Scotland",desc:"One of Scotland's largest engineering employers. The Rosyth dockyard is the primary facility for maintenance of Royal Navy vessels including aircraft carriers and submarines. Also involved in nuclear decommissioning, defence support and complex infrastructure projects.",apprenticeships:"Mechanical Engineering, Electrical Engineering, Marine Engineering, Pipefitting, Structural Engineering",why:"One of the most structured and prestigious apprenticeship programmes in Scotland. Babcock apprentices work on real naval vessels from year one. Strong progression pathway — many senior engineers started as Babcock apprentices.",apply:"Babcock careers website and apprenticeships.scot. Recruitment typically November–February for September start."},
    {id:"leonardo",name:"Leonardo",icon:"✈️",sector:"Aerospace and Defence Electronics",location:"Edinburgh (Crewe Toll)",size:"2,000+ in Scotland",desc:"Leonardo's Edinburgh site is one of the most technologically advanced defence electronics facilities in Europe. Produces radar systems, aircraft sensors, helicopter systems and electronic warfare equipment. Part of the international Leonardo group.",apprenticeships:"Mechanical Engineering, Electronic/Electrical Engineering, Manufacturing Engineering, Software Engineering",why:"Working at the cutting edge of defence electronics. Leonardo apprentices handle technology that ends up on Typhoon fighters and military helicopters. Excellent graduate apprenticeship pathway available.",apply:"Leonardo careers website. Also advertises on apprenticeships.scot. Recruitment typically January–March."},
    {id:"bae",name:"BAE Systems",icon:"🛡️",sector:"Defence",location:"Glasgow (Govan and Scotstoun), Prestwick",desc:"BAE Systems builds Type 26 frigates for the Royal Navy at the Govan and Scotstoun shipyards on the Clyde. Also has aerospace manufacturing at Prestwick. Major long-term employer — the Type 26 programme runs into the 2030s.",apprenticeships:"Mechanical Engineering, Electrical Engineering, Marine Engineering, Manufacturing, Welding and Fabrication",why:"One of the most secure long-term employers in Scottish engineering. The Type 26 frigate programme guarantees workload for over a decade. Excellent training infrastructure and progression.",apply:"BAE Systems Early Careers website. Also apprenticeships.scot. Recruitment January–April."},
    {id:"sse",name:"SSE",icon:"⚡",sector:"Energy — Renewables and Networks",location:"Perth (HQ), throughout Scotland",desc:"SSE is one of the UK's largest energy companies and a major Scottish employer. Owns and operates electricity networks across Scotland and is one of the largest developers of renewable energy (onshore and offshore wind, pumped hydro). Strong commitment to apprenticeships.",apprenticeships:"Electrical Engineering, Overhead Line, Substations, Renewables, Generation",why:"SSE runs one of the best-regarded engineering apprenticeship programmes in Scotland. Apprentices work on live infrastructure across Scotland. Strong in renewables — growth sector. Good pay and pension.",apply:"SSE Early Careers website and apprenticeships.scot. Recruitment September–January for September start."},
    {id:"scottishpower",name:"ScottishPower",icon:"🌬️",sector:"Energy — Renewables and Networks",location:"Glasgow (HQ), throughout Scotland",desc:"ScottishPower is a subsidiary of Iberdrola, one of the world's largest renewables companies. Owns electricity distribution networks in Scotland and is a major offshore wind developer (East Anglia Array, Neart na Gaoithe off the Fife coast).",apprenticeships:"Electrical Engineering, Renewables, Network Operations, Smart Metering",why:"ScottishPower's renewable energy focus makes this an excellent employer for anyone interested in the energy transition. Offshore wind apprenticeships are genuinely exciting and growing.",apply:"ScottishPower careers website. Recruitment typically November–February."},
    {id:"wood",name:"Wood Group",icon:"🛢️",sector:"Oil, Gas and Renewable Energy",location:"Aberdeen (HQ), throughout Scotland",desc:"Wood (formerly John Wood Group) is one of Scotland's largest private sector employers with approximately 40,000 employees worldwide. Provides engineering, operations and technical services to the energy and industrial sectors. Major presence in North Sea oil and gas and growing renewables portfolio.",apprenticeships:"Mechanical Engineering, Instrumentation and Control, Electrical Engineering, Process Operations",why:"Excellent exposure to North Sea operations and the energy transition. Wood's diversification from oil and gas into renewables provides career resilience. Aberdeen salary premium applies.",apply:"Wood careers website (woodplc.com). Recruitment ongoing."},
    {id:"weir",name:"Weir Group",icon:"⚙️",sector:"Mining and Industrial Equipment",location:"Glasgow (HQ), various Scotland sites",desc:"Weir Group is a FTSE 100 Scottish engineering company that designs and manufactures specialist equipment for the mining, oil and gas sectors. Products include pumps, valves, hydrocyclones and screens used in mining operations worldwide. Precision manufacturing at its core.",apprenticeships:"Mechanical Engineering, Manufacturing, CNC Machining, Fabrication and Welding",why:"Weir is a globally significant Scottish engineering company. Apprentices work in genuine precision manufacturing producing equipment that goes to mines worldwide. Strong trade skills development.",apply:"Weir Group careers website. Recruitment typically autumn and spring intake."},
    {id:"spiritaero",name:"Spirit AeroSystems",icon:"🛩️",sector:"Aerospace Manufacturing",location:"Prestwick, Ayrshire",desc:"Spirit AeroSystems manufactures aerostructures — major structural components of commercial aircraft — at Prestwick. The facility produces components for Airbus, Boeing and other aircraft manufacturers. One of the most technically demanding manufacturing environments in Scotland.",apprenticeships:"Aerospace Manufacturing, Composite Manufacturing, Mechanical Engineering, Inspection and Quality",why:"Working at the absolute cutting edge of precision manufacturing. Spirit Prestwick apprentices handle aircraft structural components to tolerances measured in thousandths of an inch. The aerospace quality discipline is an excellent foundation for any engineering career.",apply:"Spirit AeroSystems careers website. Recruitment typically January–March."},
  ];
  const [active,setActive]=useState("babcock");
  const e=employers.find(x=>x.id===active)||employers[0];
  return (
    <div>
      <PageHeader icon="🏭" title="Scottish Employers" subtitle="The major engineering employers in Scotland — who they are, what they offer and how to apply."/>
      <InfoBox text="Researching your target employer before applying is one of the most important things you can do. An application that mentions something specific about the company outperforms a generic one every time." type="tip"/>
      <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
        {employers.map(em=>(
          <button key={em.id} onClick={()=>setActive(em.id)} style={{background:active===em.id?NAVY:WHITE,color:active===em.id?WHITE:MID,border:`1px solid ${active===em.id?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 10px",fontSize:10,fontWeight:active===em.id?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            {em.icon} {em.name.split(" ")[0]}
          </button>
        ))}
      </div>
      <Card>
        <p style={{color:STEEL,fontWeight:800,fontSize:15,margin:"0 0 4px"}}>{e.icon} {e.name}</p>
        <p style={{color:MID,fontSize:12,margin:"0 0 10px"}}>{e.sector} · {e.location}{e.size?` · ${e.size}`:""}</p>
        <p style={{color:"#444",fontSize:13,lineHeight:1.65,margin:"0 0 14px"}}>{e.desc}</p>
        {[["Apprenticeships offered",e.apprenticeships],["Why apply here",e.why],["How to apply",e.apply]].map(([label,val],i)=>(
          <div key={i} style={{display:"flex",gap:12,padding:"9px 0",borderBottom:i<2?"1px solid #F0F4F8":"none"}}>
            <span style={{color:MID,fontSize:11,fontWeight:700,textTransform:"uppercase",minWidth:110,flexShrink:0}}>{label}</span>
            <span style={{color:NAVY,fontSize:13,lineHeight:1.5}}>{val}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}

// APPLY
function ApplyModule(){
  return (
    <div>
      <PageHeader icon="📝" title="How to Apply" subtitle="Where to find Scottish engineering apprenticeships — including the recruitment cycles most candidates miss."/>
      <InfoBox text="Large engineering employers recruit in planned cycles. If you start preparing when the vacancy appears, you are already behind candidates who have been tracking the employer for months. Prepare before vacancies open — not when they appear." type="warning"/>
      <Accordion accent={TEAL} items={[
        {title:"Recruitment cycles — when Scottish engineering employers hire",content:"Most major Scottish engineering employers open their apprenticeship windows between September and February. If you are applying in spring, you are often too late for the current cycle.\n\nEmployer-specific timing:\n• Babcock International — typically opens October/November, closes January/February. Assessment centres February–April. Start September.\n• Leonardo — typically opens January, closes March. Fast-moving process.\n• BAE Systems — typically opens September/October, closes December. Earliest and most competitive.\n• SSE — typically opens September, closes December.\n• ScottishPower — typically opens November, closes January.\n• Wood Group (Aberdeen) — rolling recruitment year-round.\n• NHS Estates (MyJobScotland) — typically January–March for August starts.\n• Scottish councils (MyJobScotland) — typically February–April for August starts.\n• Scottish Water — typically October–January for September starts.\n\nThe key principle: set up your employer alerts in September. Do not wait for a vacancy to be announced before starting your research and preparation."},
        {title:"Company research — how to do it properly",content:"Do not treat company research as a tick-box exercise. It should shape how you write your application and how you answer interview questions.\n\nHow to research effectively:\n• Read the company website — what do they make, build, maintain or operate?\n• Read the apprenticeship section — how do they describe the opportunity?\n• Check external sources — LinkedIn, news articles, recent contracts, awards\n• Identify repeated themes — safety culture, quality, innovation, continuous improvement\n• Translate those themes into your own words and connect them to your evidence\n\nUsing your personal network:\nDo you know anyone who works in engineering, utilities, construction or a related sector? A family member, neighbour, friend's parent or former teacher in the industry can give you insights no website will provide. Ask them: What do employers actually look for? What mistakes do applicants make? What would make you stand out? Even a 10-minute conversation with someone in the sector can sharpen your application significantly.\n\nThe research question test — before submitting any application, answer in full sentences:\n• This company operates in...\n• The most important engineering activity they do is...\n• The qualities they seem to value most are...\n• One specific thing about this company I could not say about their competitors is..."},
        {title:"Where to find Scottish engineering apprenticeships",content:"Primary portals:\n• apprenticeships.scot — filter by Engineering, Manufacturing, Construction. Set up email alerts.\n• Employer websites directly — Babcock, Leonardo, BAE Systems, SSE, ScottishPower all advertise on their own careers pages as well as apprenticeships.scot\n• s1jobs.com — Scottish private sector engineering roles\n• Indeed.co.uk — broader reach, filter by Scotland and apprenticeship\n• MyJobScotland.gov.uk — all public sector engineering roles (NHS, councils, Transport Scotland, Scottish Water)"},
        {title:"The application strategy — quality over quantity",content:"A tailored application to one employer will consistently outperform five generic ones.\n\nBefore you apply anywhere:\n1. Read the full job description and person specification carefully\n2. Identify the 4–5 most important requirements\n3. Research the employer — know something specific about their work, their products, their values\n4. Tailor your personal profile to mention the specific pathway and employer\n5. Make sure your covering letter mentions something specific about the company\n\nFor major employers (Babcock, Leonardo, BAE Systems):\n• Applications are reviewed by experienced engineers — they can immediately identify generic applications\n• Online assessments are common before interview\n• Assessment centres test collaborative behaviour as much as individual knowledge\n\nFor public sector roles (MyJobScotland):\n• The supporting statement is scored against the person specification\n• Address every Essential criterion with a specific example"},
        {title:"What to do before applying",content:"Before submitting any engineering application:\n\n☐ Can you explain what the company makes or does in one sentence?\n☐ Do you know which pathway (mechanical, electrical, civil etc.) you are applying for?\n☐ Have you completed the Technical Basics section in this module?\n☐ Can you explain what a permit to work is?\n☐ Do you have any practical experience — STEM club, school workshop, home projects — to reference?\n☐ Has your CV been reviewed and updated?\n☐ Are your personal profile and covering letter employer-specific?\n☐ Have you prepared at least 3 STAR examples?\n☐ Do you have two references available?\n\nThe employer receives applications from candidates who took 15 minutes to apply. The candidate who researched the company, tailored their application and can explain what a permit to work is stands out immediately."},
        {title:"7/30 day action plan",content:"Days 1–7:\n• Identify your top 5 target employers and save 3 real current job adverts\n• Read the Technical Basics section — at least safety and engineering tabs\n• Draft or update your CV using the TASS CV section\n• Set up job alerts on apprenticeships.scot and target employer websites\n\nDays 8–30:\n• Apply to 2–3 carefully tailored applications per week\n• Practise 3 STAR examples (use the STAR section)\n• Do one mock interview using the AI Coach\n• Research your top target employer in depth — read their website, find a recent news story\n• Practise one numerical reasoning test per week (see Tests section)"},
      ]}/>
    </div>
  );
}

// MYJOBSCOTLAND
function MJSModule(){
  const [section,setSection]=useState("overview");
  const sections={
    overview:{label:"Overview",content:"MyJobScotland is the primary recruitment portal for all 32 Scottish councils, the Scottish Government, NHS Scotland, Police Scotland, Scottish Fire and Rescue and many other public sector organisations.\n\nFor engineering apprenticeships, MyJobScotland is important because:\n• NHS Scotland (Estates and Facilities) recruits mechanical and electrical engineering apprentices at health boards across Scotland\n• All 32 Scottish councils recruit civil engineering, building services and infrastructure apprentices\n• Transport Scotland and Scottish Water recruit civil and mechanical engineering apprentices\n• These roles are funded, structured and offer good benefits including Local Government pension scheme\n\nKey public sector engineering employers on MyJobScotland:\n• NHS Greater Glasgow and Clyde Estates — mechanical and electrical\n• City of Edinburgh Council — civil engineering and building services\n• Glasgow City Council — infrastructure and building services\n• Scottish Water — mechanical and electrical at water treatment facilities\n• Transport Scotland — civil engineering for roads and bridges\n• SEPA and SNH — environmental engineering roles\n\nCreate your profile at myjobscotland.gov.uk before applying. An incomplete profile is screened before a human reads your application.",tip:"Set job alerts for: 'engineering apprentice', 'mechanical apprentice', 'electrical apprentice', 'civil engineering'. Public sector roles often close quickly — set notifications to immediate."},
    statement:{label:"Supporting Statement",content:"For public sector engineering applications via MyJobScotland, the supporting statement is the most important element. It is scored against the person specification — every Essential criterion is a potential scored item.\n\nHow to write it for an engineering application:\n\n1. Print the person specification and highlight every Essential criterion\n2. For each criterion, write one paragraph of evidence using STAR\n3. Use the exact language from the person specification\n4. Address criteria in the order they appear\n5. Keep to 500–800 words maximum\n\nEngineering-specific person specification criteria you will frequently see:\n• Interest in and aptitude for engineering/practical work\n• Ability to follow instructions accurately and safely\n• Ability to work as part of a team\n• Commitment to health and safety\n• Ability to work methodically and accurately\n\nFor 'interest in engineering' — give a specific example: a project you built at home, a school STEM competition, work experience, something you fixed or modified. Generic statements about 'always loving engineering' score zero.",tip:"Public sector engineering apprenticeships at NHS and councils are often undersubscribed compared to defence and energy sector roles. They offer excellent training, strong job security and good benefits. Do not overlook them."},
    tests:{label:"Online Tests",content:"Many large engineering employers — especially defence contractors and energy companies — require online tests before interview.\n\nNumerical reasoning: reading graphs and tables, percentages, ratios, fractions. GCSE/National 5 Maths level but under time pressure. This is the test most candidates fail to prepare for.\n\nMechanical reasoning: pulleys, gears, levers, springs, fluid flow, electrical circuits. Tests intuitive understanding of how mechanical systems work.\n\nSpatial reasoning: visualising 3D objects from 2D drawings, rotating shapes, pattern matching. Tests the spatial thinking that engineering requires.\n\nSituational judgement: workplace scenarios testing safety awareness, teamwork and professional behaviour.\n\nPractice resources:\n• Mechanical Aptitude Test Practice: practiceaptitudetests.com\n• SHL Practice Tests: shldirect.com\n• JobTestPrep Engineering: jobtestprep.co.uk\n• Free Khan Academy: khanacademy.org (Maths and Physics)\n\nThe single most impactful preparation: do 3 timed practice tests per week for 4 weeks. Time pressure is the main difficulty — most candidates know the content but run out of time.",tip:"Numerical and mechanical reasoning tests are the stage where the most candidates are screened out. Many candidates with excellent grades fail because they do not practise under timed conditions. One hour of timed practice per week is worth more than three hours of untimed practice."},
  };
  const s=sections[section];
  return (
    <div>
      <PageHeader icon="🏛️" title="MyJobScotland Guide" subtitle="Public sector engineering roles — NHS, councils, Transport Scotland and Scottish Water."/>
      <NavTabBar options={Object.entries(sections).map(([k,v])=>({id:k,label:v.label}))} active={section} onSelect={setSection}/>
      <Card>
        <p style={{color:TEAL,fontWeight:700,fontSize:13,margin:"0 0 10px",textTransform:"uppercase"}}>{s.label}</p>
        <p style={{color:"#444",fontSize:13,lineHeight:1.75,margin:"0 0 14px",whiteSpace:"pre-line"}}>{s.content}</p>
        <div style={{background:"#FFFBEB",borderLeft:`3px solid ${AMBER}`,borderRadius:8,padding:"9px 12px"}}>
          <p style={{color:"#92400E",fontSize:13,lineHeight:1.6,margin:0}}>💡 {s.tip}</p>
        </div>
      </Card>
      {section==="statement"&&(
        <>
          <p style={{color:NAVY,fontWeight:800,fontSize:12,textTransform:"uppercase",letterSpacing:0.5,margin:"16px 0 10px"}}>Supporting statement — weak vs strong</p>
          <ExampleToggle
            weak="I am applying for this engineering apprenticeship because I have always been interested in engineering. I am good at Maths and Physics and I think I would be a good fit for this role. I am a hard worker and I learn quickly."
            strong="I am applying for this Mechanical Engineering Apprenticeship at NHS Greater Glasgow and Clyde because I want to build the practical engineering skills that keep healthcare facilities running safely and efficiently.\n\nIn response to the Essential criterion 'demonstrates interest in and aptitude for practical engineering work', I draw on three years of practical experience. At school I completed a STEM project designing and building a working model hydraulic bridge — I was responsible for the calculation of the hydraulic ram stroke required to achieve the specified lift angle. At home I have rebuilt the engine on a 1993 Honda CB250 motorcycle from a seized state to running — diagnosing the seizure as a failed main bearing, sourcing the parts and completing the rebuild over 6 weeks.\n\nIn response to the criterion 'demonstrates commitment to health and safety', I am aware that NHS engineering work is safety-critical — the systems maintained by NHS Estates directly support patient care. I have completed an IOSH Working Safely online course (completed June 2024) and I understand the permit to work system and the hierarchy of controls. I recognise that following procedures correctly is non-negotiable in a healthcare environment."
            weakLabel="Weak statement"
            strongLabel="Strong statement"
          />
        </>
      )}
    </div>
  );
}

// CV
function CVModule(){
  const [cohort,setCohort]=useState("school");
  const cvs={
    school:{label:"School Leaver (16–18)",
      profile:{
        weak:"I am 17 and I want to do an engineering apprenticeship. I am good at Maths and Physics and I enjoy practical work. I am a hard worker and I am keen to learn. I think engineering is an exciting career.",
        strong:"Practically-minded 17-year-old with a strong academic foundation in Maths (Higher A) and Physics (Higher B) and two years of hands-on project experience through Riverside Academy's STEM Club. Rebuilt a Honda CB250 motorcycle engine at home over 6 weeks — diagnosing a seized main bearing, sourcing replacement parts and completing the full rebuild to manufacturer's specification. Completed IOSH Working Safely online certificate (2024). Seeking a Mechanical Engineering Apprenticeship with Babcock International at Rosyth — motivated specifically by Babcock's commitment to defence marine engineering and their structured 4-year apprenticeship framework."},
      experience:{
        weak:"I am good at Maths and Physics at school. I have done STEM club and I fixed my dad's car once. I am interested in how things work.",
        strong:"STEM Club, Riverside Academy (Sept 2022–June 2024)\n• Designed and built a working hydraulic bridge model — responsible for calculating ram stroke requirements and selecting appropriate tubing diameters\n• Presented the project to a panel including two professional engineers from Babcock International\n• Achieved second place at the regional STEM competition; 28 teams entered\n\nMechanical Project — Honda CB250 Engine Rebuild (Jan–June 2024)\n• Diagnosed engine seizure as failed main bearing on a 1993 motorcycle\n• Researched repair procedure using manufacturer's workshop manual and online technical forums\n• Sourced replacement parts; completed full strip, inspection, bearing replacement and reassembly\n• Engine now running — documented the process in a photo diary which I can share at interview\n\nPart-time Work, Wickes Building Supplies — Kirkcaldy (Sept 2023–present)\n• Advised customers on materials and fixings; operated warehouse forklift under supervision\n• Consistently accurate on stock counts — zero discrepancy in 3 quarterly audits"}},
    graduate:{label:"Graduate / College Leaver (18–24)",
      profile:{
        weak:"I have finished my HNC in Mechanical Engineering and I am looking for an engineering apprenticeship. I have a good grounding in engineering theory and I am ready to apply my skills in a real workplace.",
        strong:"HNC Mechanical Engineering graduate (Distinction, Fife College, 2024) seeking a Mechanical Engineering Modern Apprenticeship to combine academic knowledge with structured industry experience. Achieved Distinction in Thermodynamics, Fluid Mechanics and Engineering Drawing modules. Completed a final-year project designing a heat exchanger for a small-scale industrial application — submitted as a full engineering report with hand calculations, CAD model (SolidWorks) and costing. Working knowledge of AutoCAD and SolidWorks. IOSH Working Safely certified. Motivated specifically by Weir Group's global manufacturing scale and their commitment to developing Scottish engineering talent through apprenticeship."},
      experience:{
        weak:"I did projects at college as part of my HNC course. I used SolidWorks and AutoCAD and I completed my assignments on time and got good grades.",
        strong:"Final Year Project: Industrial Heat Exchanger Design (Jan–Apr 2024)\n• Sole designer of a shell-and-tube heat exchanger for a 50kW process application\n• Completed full thermodynamic calculations by hand; verified using HTRI Xchanger Suite\n• Created full 3D model in SolidWorks with detailed engineering drawings to BS8888 standard\n• Submitted as a formal engineering report — awarded Distinction; available to share at interview\n\nEngineering Internship, Methil Energy Park (2 weeks, June 2023)\n• Observed offshore wind turbine maintenance operations at the Methil site\n• Assisted with condition monitoring data download and analysis for 6 turbines\n• Completed formal safety induction and received site visitor safety certificate\n\nWorkshop Technician Volunteer, Fife College Engineering Workshop (ongoing)\n• Support technician with workshop setup, material preparation and student guidance on lathe and milling machine operation\n• Completed formal manual handling and machine safety training"}},
    changer:{label:"Career Changer (25+)",
      profile:{
        weak:"I have been working in a non-engineering job for several years but I have always wanted to work in engineering. I have done some learning in my own time and I am motivated to make the change now.",
        strong:"Operations supervisor with 7 years of industrial experience at Diageo's Leven distillery, seeking an Engineering Modern Apprenticeship to formalise technical skills developed on the job and transition into a qualified engineering role. Directly involved in process plant operation and first-line maintenance throughout career — familiar with permit to work procedures, pressure systems, rotating equipment and process instrumentation at an operational level. Completed City and Guilds Level 3 Engineering Principles (evening class, Fife College, 2024) and IOSH Managing Safely. Motivated to qualify as an Instrumentation Technician to deepen the technical knowledge I have been building informally over seven years of process operations."},
      experience:{
        weak:"I have worked in a distillery for 7 years doing operations. I have been involved in some engineering work and I know how process plant works. I am motivated to move into engineering properly.",
        strong:"Operations Supervisor, Diageo — Leven Distillery (Mar 2017–present)\n• Supervised a team of 6 operators managing all aspects of mashing, fermentation and distillation plant\n• Primary point of contact for first-line mechanical issues — diagnosed and resolved 80% of routine mechanical failures without engineering call-out, using plant manuals and technical documentation\n• Implemented a new permit to work recording system that reduced paperwork errors by 40% and was adopted across the site\n• Completed full PSSR (Pressure Systems Safety Regulations) awareness training and actively participated in annual statutory pressure vessel inspections\n• Identified a control valve hunting issue on the low wines still — liaised with the instrument technician to diagnose a faulty positioner; documented the fault-finding process for the site knowledge base\n\nSelf-Directed Technical Development (2022–present)\n• City and Guilds Level 3 Engineering Principles — completed (Fife College evening class, 2024)\n• IOSH Managing Safely — completed (2023)\n• Currently studying Instrumentation and Process Control using ISA training materials"}},
  };
  const c=cvs[cohort];
  return (
    <div>
      <PageHeader icon="📄" title="CV Builder" subtitle="Three complete profiles — school leaver, graduate and career changer — with weak and strong examples."/>
      <InfoBox text="Engineering CVs must demonstrate practical experience — not just academic achievement. Any project you have worked on, any machine you have operated, any system you have repaired belongs on your CV." type="tip"/>
      <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>
        {Object.entries(cvs).map(([k,v])=>(
          <button key={k} onClick={()=>setCohort(k)} style={{background:cohort===k?NAVY:WHITE,color:cohort===k?WHITE:MID,border:`1px solid ${cohort===k?NAVY:"#E2E8F0"}`,borderRadius:10,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",flex:1,fontWeight:700,fontSize:12}}>
            {v.label.split(" (")[0]}
          </button>
        ))}
      </div>
      <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"0 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Personal Profile — {c.label}</p>
      <ExampleToggle weak={c.profile.weak} strong={c.profile.strong} weakLabel="Weak profile" strongLabel="Strong profile"/>
      <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"16px 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Work and Project Experience — {c.label}</p>
      <ExampleToggle weak={c.experience.weak} strong={c.experience.strong} weakLabel="Weak experience" strongLabel="Strong experience"/>
      <Card style={{marginTop:8}}>
        <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 10px",textTransform:"uppercase"}}>Engineering CV checklist</p>
        {["Specific employer named in personal profile — not 'an engineering company'","Specific pathway named — mechanical, electrical, civil etc.","Any practical project included — home repairs, STEM club, college project, work experience","Academic subjects listed with grades — Maths and Physics are critical for most pathways","Any safety qualification included — IOSH Working Safely, First Aid, Manual Handling","Every experience bullet starts with an action verb","At least one bullet quantifies an outcome or scale","'I' used throughout — not 'we'","CV saved as PDF — Firstname_Lastname_CV.pdf","No spelling errors — have someone else check it"].map((item,i)=>(
          <div key={i} style={{display:"flex",gap:10,marginBottom:7,alignItems:"flex-start"}}>
            <div style={{width:18,height:18,border:`2px solid ${TEAL}`,borderRadius:4,flexShrink:0,marginTop:1}}/>
            <p style={{color:"#444",fontSize:13,lineHeight:1.5,margin:0}}>{item}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}

// STAR
const STAR_EXAMPLES=[
  {label:"Technical problem",question:"Tell me about a time you solved a practical or technical problem.",
   weak:"I fixed my bike once when the chain came off. I put it back on and it worked fine.",
   good:"The brakes on my mountain bike stopped working properly. I investigated and found the brake pads were worn. I replaced them using instructions from a YouTube video and the brakes worked correctly afterwards.",
   strong:"My family's central heating stopped working in February. The boiler was showing a fault code I had not seen before. Rather than call an engineer immediately, I researched the fault code online — it indicated a low water pressure fault. I found the pressure gauge on the boiler was reading 0.5 bar, below the normal operating range of 1–1.5 bar.\n\nI researched how to repressure a sealed heating system, identified the filling loop under the boiler, and carefully re-pressurised the system to 1.2 bar while monitoring the gauge. I also checked for visible leaks on radiators and pipework — finding a weeping compression joint on a radiator valve in the bathroom. I tightened the compression nut by one quarter turn, re-tested, and confirmed the leak had stopped.\n\nThe system has maintained pressure for 8 months since. I documented the process in a short guide for my parents. The fault code, the diagnosis process, the fix and the post-repair check are all documented. The experience taught me that systematic fault-finding is faster than random intervention.",
   why:"The strong answer demonstrates a systematic diagnostic approach — fault code research, root cause identification, fix, secondary check for related problems, documentation. These are the habits of a good maintenance engineer. The candidate did not just fix the problem — they understood it."},
  {label:"Teamwork",question:"Describe a time you worked effectively as part of a team on a practical task.",
   weak:"We did a team project at school. We worked together and everyone did their part. The project was successful.",
   good:"In my HNC course, our team of 4 had to design and build a working model of a hydraulic system. I was responsible for the hydraulic calculations. We divided the work, communicated regularly and completed the project on time. The system worked on the first test.",
   strong:"During my HNC, my team of 4 was tasked with designing and testing a working pneumatic control system within a 6-week project. On the first day I suggested we draw up a responsibility matrix — who would do what and by when — because I had seen previous group projects run into problems when everyone assumed someone else was handling a task.\n\nI took responsibility for the control logic design and ladder diagram programming. Midway through week 4, it became clear that the team member handling the physical build was significantly behind — they had been struggling with a component interference issue they had not raised. Rather than allow the project to slip, I spent two evenings helping them resolve the interference, which involved redesigning the mounting bracket in SolidWorks.\n\nWe delivered the project on time. The system operated correctly on first test. Our module leader commented specifically on the quality of the documentation, which I had organised as a shared folder from week one. The experience reinforced that good teamwork requires proactive communication — problems raised early are problems that can be solved.",
   why:"This answer demonstrates project organisation beyond what was required, proactive identification of a team problem, practical intervention, and quality documentation. These are the professional instincts engineering employers look for at entry level — someone who sees beyond their own task."},
  {label:"Safety awareness",question:"Tell me about a time you identified a safety risk and what you did about it.",
   weak:"I noticed a wet floor at work and I put a sign near it so people would not slip. I also told my manager.",
   good:"During my work experience at an engineering company, I noticed that a technician had left a grinding wheel guard removed after completing a job and moved on to another task. I pointed it out to my supervisor who stopped the technician and had them refit the guard before continuing.",
   strong:"During my two-week work experience placement at a local fabrication company, I was observing a welding bay where a welder was about to start a new job. While waiting, I noticed that the welding curtain adjacent to the bay was not fully drawn — there was a gap of approximately 400mm that would allow arc flash to reach anyone in the walkway behind it.\n\nI was new and I was aware I was a visitor — but I recognised that arc flash causes permanent eye damage and the gap was a real risk to anyone passing. I approached the welder's supervisor directly, explained what I had observed, and pointed to the gap. The supervisor immediately asked the welder to pause setup while the curtain was correctly positioned.\n\nAfterwards the supervisor thanked me and explained that the curtain had been adjusted earlier in the day and the gap had been overlooked. They told me that speaking up was exactly the right thing to do, regardless of seniority or visitor status.\n\nThe experience taught me that safety culture is about speaking up — not waiting for someone with more authority to notice first.",
   why:"This answer demonstrates genuine safety awareness, the courage to speak up as a visitor, a clear understanding of the specific hazard (arc flash) and its consequences, and professional communication. Safety culture is one of the most important things engineering employers assess at interview — this answer shows the candidate has it."},
  {label:"Self-directed learning",question:"Tell me about a time you taught yourself something practical or technical.",
   weak:"I taught myself basic electronics from YouTube. I built a simple circuit and it worked. I enjoy learning new things.",
   good:"I decided I wanted to understand how car engines work so I bought a Haynes manual for an older car and read through the engine section. I also watched some YouTube videos. I have not done any practical work on an engine yet but I feel I understand the theory.",
   strong:"When I decided I wanted to apply for an engineering apprenticeship, I identified that I had no formal practical experience to reference. I set myself a structured 8-week project: completely rebuild a bicycle from a stripped frame using second-hand components sourced from eBay.\n\nI started by mapping what I needed to learn: wheel building, headset installation, bottom bracket fitting, gear and brake cable routing. I found a Sheldon Brown's bicycle mechanics reference as my primary technical source — it is the industry-standard resource for bicycle mechanics. I set aside Saturday mornings for the project.\n\nThe rebuild took 11 weeks, not 8 — I had to re-true the rear wheel twice before I understood the spoke tension relationship properly. But I completed it. The bicycle is rideable. I documented every stage in photographs and wrote a short build log that I kept. The whole project cost £140 in parts.\n\nWhat I learned from it is that practical learning requires doing it wrong once before you understand why to do it right. The first wheel true I watched three videos and understood the concept. The second time, when I had to correct my own errors, I understood the mechanics.",
   why:"This answer demonstrates structured self-direction with a specific project goal, genuine use of professional technical resources (not just YouTube), honest reflection on what went wrong and why, quantification (cost, timeline, rework), and documentation. This is the intellectual approach that engineering employers are hiring for."},
];

function STARModule(){
  const [active,setActive]=useState(0);
  const [tier,setTier]=useState("strong");
  const ex=STAR_EXAMPLES[active];
  const tierCol={weak:RUST,good:AMBER,strong:GREEN};
  const tierBg={weak:"#FEF2F2",good:"#FFFBEB",strong:"#F0FDF4"};
  return (
    <div>
      <PageHeader icon="⭐" title="STAR Examples" subtitle="Four engineering-specific worked examples — the scenarios that appear in real engineering apprenticeship interviews."/>
      <InfoBox text="Use 'I' not 'we'. Your interviewer is assessing you. Describe specifically what YOU did and what difference YOUR actions made — not what the team or family did." type="warning"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}>
        {[{l:"S",w:"Situation",d:"Set the scene briefly."},{l:"T",w:"Task",d:"Your specific role."},{l:"A",w:"Action",d:"What YOU did. Use 'I'. 50% of answer."},{l:"R",w:"Result",d:"Outcome + what you learned. Quantify."}].map((item,i)=>(
          <div key={i} style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:10,padding:12}}>
            <div style={{width:30,height:30,borderRadius:6,background:STEEL,color:WHITE,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:16,marginBottom:6}}>{item.l}</div>
            <p style={{color:NAVY,fontWeight:700,fontSize:12,margin:"0 0 3px",textTransform:"uppercase"}}>{item.w}</p>
            <p style={{color:MID,fontSize:12,margin:0}}>{item.d}</p>
          </div>
        ))}
      </div>
      <NavTabBar options={STAR_EXAMPLES.map((e,i)=>({id:i,label:e.label}))} active={active} onSelect={(id)=>{setActive(id);setTier("strong");}}/>
      <Card><p style={{color:MID,fontSize:11,textTransform:"uppercase",margin:"0 0 5px"}}>Interview question</p><p style={{color:NAVY,fontWeight:800,fontSize:15,margin:0}}>"{ex.question}"</p></Card>
      <div style={{display:"flex",gap:6,marginBottom:12}}>
        {["weak","good","strong"].map(t=>(
          <button key={t} onClick={()=>setTier(t)} style={{flex:1,padding:"8px 4px",background:tier===t?tierCol[t]:WHITE,border:`2px solid ${tierCol[t]}`,color:tier===t?(t==="good"?NAVY:WHITE):tierCol[t],borderRadius:8,fontWeight:700,fontSize:11,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            {t==="weak"?"✗ Weak":t==="good"?"◎ Good":"✓ Strong"}
          </button>
        ))}
      </div>
      <div style={{background:tierBg[tier],borderLeft:`3px solid ${tierCol[tier]}`,borderRadius:10,padding:14,marginBottom:12}}>
        <p style={{color:tierCol[tier],fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>{tier==="weak"?"Weak answer":tier==="good"?"Good answer":"Strong answer"}</p>
        <p style={{color:"#333",fontSize:14,lineHeight:1.75,margin:0,fontStyle:"italic",whiteSpace:"pre-line"}}>"{ex[tier]}"</p>
      </div>
      <div style={{background:"#EFF6FF",borderLeft:`3px solid ${STEEL}`,borderRadius:8,padding:12,marginBottom:16}}>
        <p style={{color:STEEL,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 4px"}}>Coach commentary</p>
        <p style={{color:"#1E3A8A",fontSize:13,lineHeight:1.65,margin:0}}>{ex.why}</p>
      </div>
    </div>
  );
}

// INTERVIEW
const INTERVIEW_QS=[
  {q:"Why do you want to work in engineering?",tip:"Do not say you like taking things apart or enjoy practical work without specifics. Connect genuine interest to a specific aspect of engineering.",weak:"I have always been interested in how things work and I enjoy practical work. I think engineering is a good career with good job prospects.",strong:"I want to work in engineering because I find the combination of technical problem-solving and physical outcomes genuinely compelling — the idea that you understand a system well enough to make it work, or to make it work better. I have been building this interest practically: I rebuilt a motorcycle engine at home last year and I run the engineering section of my school STEM club. What specifically draws me to manufacturing engineering is the precision aspect — the discipline of working to tolerances and specifications rather than approximations. I am applying to Weir Group specifically because the scale and complexity of what they manufacture — equipment that goes into mining operations worldwide — represents a level of technical challenge I want to develop towards."},
  {q:"What do you know about health and safety in engineering?",tip:"This is a knowledge test as much as a competency question. Demonstrate specific awareness — not generic statements about wearing PPE.",weak:"Health and safety is very important in engineering. You need to wear the right PPE and follow the rules. Safety should always come first.",strong:"Health and safety in engineering operates through a combination of legislation, systems and culture. The key legislation includes the Health and Safety at Work Act 1974, COSHH Regulations and PUWER. In practice, the most important safety systems are the permit to work — which authorises specific people to do specific work after all hazards have been controlled — and the hierarchy of controls, which prioritises eliminating hazards over controlling them with PPE. I am also aware of RIDDOR and when incidents need to be reported to the HSE. What I think is important to understand is that safety culture is not about compliance — it is about genuinely understanding why each control is in place, so that when you encounter an unusual situation you make the right decision rather than just following a rule that does not quite fit."},
  {q:"Tell me about a practical project you have worked on.",tip:"Every engineering candidate should have at least one specific practical project to describe. If you do not have one, you need one before you apply.",weak:"I did a project at school where we built a model bridge. We used different materials and tested how much weight it could hold. It was interesting and I learned about structures.",strong:"Over the past six months I have been rebuilding a 1993 Honda CB250 motorcycle engine. The engine had seized — I diagnosed the root cause as a failed main bearing by eliminating other possibilities: the oil level was correct, there was no evidence of overheating, and the engine had been standing for two years with the possibility of corrosion on the bearing surfaces. I sourced a workshop manual, disassembled the engine completely, inspected all components, confirmed the bearing failure and identified secondary scoring on the crankshaft journal. I sourced replacement bearings and a regrind of the crankshaft from a specialist. I reassembled the engine to manufacturer torque specifications using a torque wrench throughout. The engine runs. I documented every stage in photographs. The project took 6 weeks and cost £240 in parts and machine work. The thing I am most proud of is the diagnosis process — I did not assume the worst-case failure before I had eliminated the simpler possibilities."},
  {q:"What would you do if you were asked to do something at work that you thought was unsafe?",tip:"This is a values question as much as a knowledge question. The right answer is clear — you stop, you raise it. Show you understand why.",weak:"I would tell my supervisor that I was not comfortable doing it and ask them to show me the safe way to do it.",strong:"I would stop immediately — I would not proceed with work I believed was unsafe, regardless of who asked me to do it. In engineering, the consequences of ignoring a safety concern can be fatal and irreversible, which is a different calculation from most other workplace situations.\n\nI would then raise my concern clearly with the person who gave me the instruction, explaining specifically what I had observed and why I believed it was unsafe. If they disagreed and I still believed there was a genuine risk, I would escalate to their supervisor or to the site safety representative. I would not simply comply to avoid conflict.\n\nI am also aware that most of the time, what seems unsafe is either a misunderstanding I need to have explained, or a genuine gap in the safety controls that the experienced person has not noticed. In either case, raising it is the right action. Engineering safety culture depends on people speaking up — not staying quiet to seem cooperative."},
  {q:"Where do you see yourself in 5 years?",tip:"Show genuine career planning — connect your answer to the specific pathway and employer.",weak:"In five years I see myself as a qualified engineer working in a good job. I hope to have progressed and be taking on more responsibility.",strong:"In five years, my goal is to be a fully qualified Mechanical Engineering Technician — HNC or HND level — with three or four years of practical experience under my belt in defence engineering. I am interested in the maintenance side of the role specifically, and I want to reach the point where I can diagnose and resolve complex faults independently, rather than always needing supervision.\n\nLonger term, I am aware that Babcock offers a Graduate Apprenticeship pathway for people who have completed the Modern Apprenticeship — and degree-level qualification in engineering while continuing to work is something I would seriously consider at the right point. I see this apprenticeship as the foundation of a 15–20 year engineering career, not just a job."},
  {q:"What questions do you have for us?",tip:"Never say none. Engineering interviewers specifically look for technical curiosity. Ask something that shows you have researched the company.",weak:"No, I think you have covered everything. Thank you for your time.",strong:"I have three questions. First — what does the apprentice training programme look like in the first six months? I want to understand how theoretical learning and practical work experience are integrated at the start. Second — I know Babcock is involved in the Type 31 frigate programme at Rosyth. Would an apprentice starting now have exposure to that work during their training? Third — what does the progression pathway look like from apprentice to qualified technician, and at what point do apprentices take on more independent responsibilities?"},
];

function InterviewModule(){
  const [current,setCurrent]=useState(0);
  const [reveal,setReveal]=useState(null);
  const q=INTERVIEW_QS[current];
  return (
    <div>
      <PageHeader icon="🎤" title="Interview Preparation" subtitle="Engineering-specific technical and competency questions — what weak answers look like and what strong answers look like."/>
      <InfoBox text="Engineering interviewers test safety knowledge directly. If you cannot explain what a permit to work is or describe the hierarchy of controls, you are not prepared for interview." type="warning"/>
      <NavTabBar options={INTERVIEW_QS.map((_,i)=>({id:i,label:`Q${i+1}`}))} active={current} onSelect={(id)=>{setCurrent(id);setReveal(null);}}/>
      <Card>
        <p style={{color:MID,fontSize:11,textTransform:"uppercase",margin:"0 0 5px"}}>Interview question</p>
        <p style={{color:NAVY,fontWeight:800,fontSize:15,margin:"0 0 12px"}}>"{q.q}"</p>
        <div style={{background:"#EFF6FF",borderLeft:`3px solid ${TEAL}`,borderRadius:8,padding:"9px 11px"}}>
          <p style={{color:"#1A5276",fontSize:13,lineHeight:1.6,margin:0}}>💡 <strong>Coach tip:</strong> {q.tip}</p>
        </div>
      </Card>
      <div style={{display:"flex",gap:8,marginBottom:12}}>
        <button onClick={()=>setReveal(reveal==="strong"?null:"strong")} style={{flex:1,padding:10,background:reveal==="strong"?GREEN:WHITE,border:`2px solid ${GREEN}`,color:reveal==="strong"?WHITE:GREEN,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{reveal==="strong"?"Hide":"✓ Strong"}</button>
        <button onClick={()=>setReveal(reveal==="weak"?null:"weak")} style={{flex:1,padding:10,background:reveal==="weak"?RUST:WHITE,border:`2px solid ${RUST}`,color:reveal==="weak"?WHITE:RUST,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{reveal==="weak"?"Hide":"✗ Weak"}</button>
      </div>
      {reveal==="strong"&&<div style={{background:"#F0FDF4",borderLeft:`3px solid ${GREEN}`,borderRadius:10,padding:14,marginBottom:12}}><p style={{color:GREEN,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>Strong Answer</p><p style={{color:"#14532D",fontSize:14,lineHeight:1.7,margin:0,whiteSpace:"pre-line"}}>{q.strong}</p></div>}
      {reveal==="weak"&&<div style={{background:"#FEF2F2",borderLeft:`3px solid ${RUST}`,borderRadius:10,padding:14,marginBottom:12}}><p style={{color:RUST,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>Weak Answer</p><p style={{color:"#7F1D1D",fontSize:14,lineHeight:1.7,margin:0}}>{q.weak}</p></div>}
      <Card>
        <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 8px",textTransform:"uppercase"}}>🎤 Practise your answer</p>
        <textarea placeholder="Type your answer here..." rows={4} style={{width:"100%",background:GREY,border:"1px solid #E2E8F0",borderRadius:8,padding:12,color:NAVY,fontSize:13,fontFamily:"inherit",resize:"vertical",boxSizing:"border-box"}}/>
        <p style={{color:MID,fontSize:12,marginTop:8,marginBottom:0}}>💡 Paste into the AI Coach for feedback.</p>
      </Card>
    </div>
  );
}

// TESTS
function TestsModule(){
  const [cat,setCat]=useState("numerical");
  const [reveal,setReveal]=useState({});

  const numQs=[
    {q:"A production line has a target of 1,600 units per week. On Monday it produced 312, Tuesday 298, Wednesday 320, Thursday 305, Friday 315. Did it meet its target?",a:"No — total was 1,550 units, missing the target by 50 units.",opts:["Yes — target met","Short by 25 units","Short by 50 units","Short by 100 units"],why:"Step 1: sum the week — 312+298+320+305+315 = 1,550. Step 2: compare to target — 1,600−1,550 = 50 short. Two steps required. This is the standard SHL table-reading format."},
    {q:"A component must weigh between 1.45kg and 1.55kg. A batch of 5 components has a total weight of 7.6kg. Is it possible all are within tolerance?",a:"Not necessarily — the average is 1.52kg (within tolerance) but individual components could still be outside the range.",opts:["Yes — the average is within tolerance so all are fine","Not necessarily — the average is within tolerance but individuals could still be outside","No — 7.6kg divided by 5 is outside the range","Yes — 1.52kg is the midpoint of the range"],why:"Step 1: 7.6÷5 = 1.52kg average. Step 2: recognise that an average within tolerance does NOT guarantee each individual item is within tolerance. This tests analytical reasoning — the type of question that separates strong candidates."},
    {q:"Material costs £4.80 per metre. A job requires 3 lengths of 2.4m, 2 lengths of 1.75m, and 1 length of 0.9m. What is the total material cost?",a:"£55.68",opts:["£48.00","£52.80","£55.68","£60.48"],why:"Step 1 — total length: (3×2.4)+(2×1.75)+0.9 = 7.2+3.5+0.9 = 11.6m. Step 2 — cost: 11.6×£4.80 = £55.68. Common mistake: multiplying each length separately and losing accuracy."},
    {q:"A machine runs at 85% efficiency. At full capacity it produces 400 units per hour. How many units does it produce in a 7.5-hour shift?",a:"2,550 units",opts:["2,250 units","2,400 units","2,550 units","3,000 units"],why:"Step 1 — actual rate: 400×0.85 = 340 units/hour. Step 2 — shift output: 340×7.5 = 2,550. Apply efficiency as a multiplier before calculating volume."},
    {q:"A maintenance team completes 3 jobs taking 1h 45m, 2h 20m, and 55m. They have a 7.5-hour day with a 30-minute unpaid break. How much working time remains?",a:"2 hours remaining",opts:["1 hour 30 minutes","2 hours","2 hours 30 minutes","3 hours"],why:"Step 1 — total job time: 1h45+2h20+55m = 5h00. Step 2 — available working time: 7.5h−0.5h = 7h. Step 3 — remainder: 7h−5h = 2h. Three steps with mixed time units — easy to lose track."},
    {q:"Engineer A checks 1 component every 4 minutes. Engineer B checks 1 every 6 minutes. Working simultaneously, how many do they check together in 2 hours?",a:"50 components",opts:["30","40","50","60"],why:"Step 1 — convert: 2 hours = 120 minutes. Step 2 — A: 120÷4 = 30. Step 3 — B: 120÷6 = 20. Step 4 — combined: 50. Most candidates who get this wrong forget to convert hours to minutes first."},
  ];

  const mechQs=[
    {q:"If gear A turns clockwise, which direction does a directly connected gear B turn?",a:"Anti-clockwise",opts:["Clockwise","Anti-clockwise","The same direction","It depends on the size"],why:"Principle: Meshed gears always turn in opposite directions."},
    {q:"Gear A has 10 teeth, gear B has 20 teeth. If gear A completes 4 full rotations, how many rotations does gear B complete?",a:"2 rotations",opts:["1","2","4","8"],why:"Gear ratio is 10:20 = 1:2. Gear B turns half as many times as gear A."},
    {q:"A simple open belt connects two pulleys. If the driving pulley turns clockwise, which direction does the driven pulley turn?",a:"Clockwise — same direction",opts:["Anti-clockwise","Clockwise — same direction","It alternates","It stops"],why:"An open belt transfers motion in the same direction. A crossed belt reverses it."},
    {q:"A load hangs from a pulley system with two supporting rope sections. What is the mechanical advantage?",a:"2",opts:["1","2","3","4"],why:"Two rope sections support the load — the effort needed is halved. Mechanical advantage = number of supporting rope sections."},
    {q:"If a longer lever arm is used with the same applied force, what happens to the turning effect (moment)?",a:"It increases",opts:["It decreases","It stays the same","It increases","It depends on the fulcrum"],why:"Turning effect (moment) = force × distance. Longer arm = greater moment."},
  ];

  const sjtQs=[
    {scenario:"You notice a colleague is not following a safety procedure on the workshop floor.",weak:"Ignore it — it is not your responsibility.",strong:"Raise it with your colleague directly if safe to do so, or report it to your supervisor. Safety overrides any discomfort about speaking up. In engineering, procedures exist because someone identified a real risk — not following them puts people at risk.",why:"Safety questions always have the same answer in engineering SJTs: speak up, every time, regardless of seniority or discomfort."},
    {scenario:"You are unsure how to complete a task safely but your supervisor is busy in a meeting.",weak:"Have a go and figure it out yourself — you do not want to look incompetent.",strong:"Wait for an appropriate moment and ask for clarification before starting. Guessing in technical environments creates risk, wastes materials and potentially damages equipment. Asking shows professional judgement, not weakness.",why:"Never guess on a task you do not understand in an engineering environment. This is a values question — they are testing whether you will act safely under social pressure."},
    {scenario:"You finish your assigned task before others in your team with 45 minutes left in the shift.",weak:"Wait at your workstation until the next task is assigned to you.",strong:"Check your own work first for quality, then offer to support a colleague or ask your supervisor what to do next. Proactively contributing when capacity allows is a marker of a strong apprentice.",why:"Engineering workplaces value people who look for work rather than waiting to be directed. This is a work ethic and team awareness question."},
    {scenario:"You make an error during a manufacturing task that affects a component. Nobody else saw it.",weak:"Try to correct it yourself without telling anyone to avoid embarrassment.",strong:"Report it immediately to your supervisor. In engineering, an unreported error can create downstream quality problems or safety risks. Early reporting reduces the impact. This is what professional integrity looks like.",why:"Honesty about mistakes is taken very seriously in engineering and aerospace contexts where a concealed error could affect safety. This question tests integrity, not competence."},
    {scenario:"A colleague asks you to sign off a quality check for a component you have not inspected yourself.",weak:"Sign it off — your colleague is more experienced and you trust them.",strong:"Decline to sign off work you have not personally inspected. Explain that the signature certifies your personal verification, not your trust in someone else. Offer to inspect it yourself before signing.",why:"In aerospace and defence manufacturing especially, signing a work record is a legal certification of personal inspection. Signing off work you have not done is professional misconduct — this tests whether candidates understand that."},
  ];

  const acScenarios=[
    {title:"Bridge building challenge",desc:"Your team of 5 has 20 minutes to design and build a bridge using only paper and tape that can hold a 500g weight. You must agree on a design as a team before building.",watch:["Who listens as well as speaks","Who helps the group decide rather than dominating","Who builds on others' ideas rather than dismissing them","Who checks progress against the time limit","Who stays constructive when an idea does not work"],avoid:["Talking over others","Dismissing ideas without engaging with them","Only speaking when you have something impressive to say","Going silent and disengaging if your idea is not chosen","Performing leadership rather than genuinely helping the group"],tip:"The person who helps the group make a decision — even if it is not their idea — is often rated higher than the person who had the best idea but created friction getting it accepted."},
    {title:"Resource allocation scenario",desc:"Your team has a budget of £10,000 to allocate across 6 maintenance jobs. Each job has a cost, a risk level if not done, and an impact on production. You have 25 minutes to agree on an allocation and present it.",watch:["Whether candidates read the brief carefully before speaking","Whether decisions are based on the evidence in the brief or personal preference","Whether candidates check that the group agrees before moving on","Whether the final answer actually adds up to £10,000","Whether the presentation is clear and structured"],avoid:["Jumping to a decision before reading all the information","Repeating the same point louder when others disagree","Spending 20 of the 25 minutes discussing and leaving no time to prepare the presentation","Taking over the presentation without checking if others want to contribute"],tip:"In resource allocation scenarios, showing your working matters as much as the answer. Assessors watch how you reason through the problem, not just what you decide."},
    {title:"Written scenario — safety incident report",desc:"You have 15 minutes to read a brief account of a near-miss incident in a workshop and write a short report (maximum 200 words) identifying: what happened, what the immediate causes were, and what should be done to prevent recurrence.",model:"Subject: Near-Miss Incident Report — Workshop Bay 3, [Date]

Summary of incident:
At approximately 14:30, a grinder wheel guard was found to be missing from a bench grinder in Workshop Bay 3 following a tool change earlier in the shift. The guard had been removed to fit a larger wheel and had not been refitted before the grinder was returned to service. A technician noticed the missing guard before use and removed the grinder from service.

Immediate causes:
1. Guard removed during tool change and not refitted.
2. No formal check-out/check-in procedure for grinder guards.
3. The returning technician did not complete a pre-use inspection.

Recommended preventive actions:
1. Introduce a pre-use inspection checklist for all abrasive tools.
2. Brief all workshop staff on the requirement to inspect before use.
3. Review the tool change procedure to include guard refitment as a mandatory step before return to service.

Reported by: [Name], [Date]",tip:"What assessors look for: professional structure, factual accuracy (no guessing beyond the brief), clear identification of causes — not just symptoms — and practical recommendations. Tone should be factual, not dramatic."},
  ];

  return (
    <div>
      <PageHeader icon="🧮" title="Tests and Assessment Centre" subtitle="Numerical reasoning, mechanical reasoning, situational judgement and full assessment centre preparation."/>
      <InfoBox text="Online tests screen out the majority of applicants at major engineering employers before a human reads your application. Practice under timed conditions — not just untimed reading." type="warning"/>
      <NavTabBar options={[{id:"numerical",label:"🔢 Numerical"},{id:"mechanical",label:"⚙️ Mechanical"},{id:"sjt",label:"🎯 Judgement"},{id:"ac",label:"🏢 Assessment Centre"}]} active={cat} onSelect={id=>{setCat(id);setReveal({});}}/>

      {cat==="numerical"&&(
        <div>
          <InfoBox text="These questions use the same format as SHL and Cubiks tests used by BAE Systems, Babcock, Leonardo and Spirit AeroSystems. Two or three calculation steps required under time pressure. Under 60 seconds per question." type="steel"/>
          {numQs.map((q,i)=>(
            <Card key={i}>
              <p style={{color:NAVY,fontWeight:700,fontSize:14,margin:"0 0 12px",lineHeight:1.4}}>Q{i+1}: {q.q}</p>
              <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:12}}>
                {q.opts.map((opt,j)=>(
                  <button key={j} onClick={()=>setReveal(r=>({...r,[i]:j}))} style={{background:reveal[i]===j?(opt===q.a?GREEN:RUST):WHITE,border:`1px solid ${reveal[i]===j?(opt===q.a?GREEN:RUST):"#E2E8F0"}`,borderRadius:8,padding:"9px 12px",textAlign:"left",cursor:"pointer",fontFamily:"inherit",color:reveal[i]===j?WHITE:NAVY,fontSize:13}}>
                    {opt}
                  </button>
                ))}
              </div>
              {reveal[i]!==undefined&&(
                <div style={{background:"#EFF6FF",borderLeft:`3px solid ${STEEL}`,borderRadius:8,padding:"10px 12px"}}>
                  <p style={{color:STEEL,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 4px"}}>Working</p>
                  <p style={{color:"#1E3A8A",fontSize:13,lineHeight:1.65,margin:0}}>{q.why}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      {cat==="mechanical"&&(
        <div>
          <InfoBox text="Mechanical reasoning tests your intuitive understanding of physical systems — gears, levers, pulleys, belts. No A-level physics needed. You need to understand the principles." type="info"/>
          {mechQs.map((q,i)=>(
            <Card key={i}>
              <p style={{color:NAVY,fontWeight:700,fontSize:14,margin:"0 0 12px",lineHeight:1.4}}>Q{i+1}: {q.q}</p>
              <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:12}}>
                {q.opts.map((opt,j)=>(
                  <button key={j} onClick={()=>setReveal(r=>({...r,[`m${i}`]:j}))} style={{background:reveal[`m${i}`]===j?(opt===q.a?GREEN:RUST):WHITE,border:`1px solid ${reveal[`m${i}`]===j?(opt===q.a?GREEN:RUST):"#E2E8F0"}`,borderRadius:8,padding:"9px 12px",textAlign:"left",cursor:"pointer",fontFamily:"inherit",color:reveal[`m${i}`]===j?WHITE:NAVY,fontSize:13}}>
                    {opt}
                  </button>
                ))}
              </div>
              {reveal[`m${i}`]!==undefined&&(
                <div style={{background:"#EFF6FF",borderLeft:`3px solid ${STEEL}`,borderRadius:8,padding:"10px 12px"}}>
                  <p style={{color:"#1E3A8A",fontSize:13,lineHeight:1.65,margin:0}}>{q.why}</p>
                </div>
              )}
            </Card>
          ))}
          <Card>
            <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 8px",textTransform:"uppercase"}}>Practice resources</p>
            {[{name:"Assessment Day",url:"assessmentday.co.uk",desc:"Free mechanical aptitude tests"},
              {name:"JobTestPrep",url:"jobtestprep.co.uk",desc:"Paid — best mechanical reasoning practice, used by Babcock and BAE applicants"},
              {name:"Mechanical Comprehension Tests",url:"practiceaptitudetests.com",desc:"Free practice with worked explanations"}].map((r,i)=>(
              <div key={i} style={{display:"flex",gap:10,marginBottom:8,paddingBottom:8,borderBottom:i<2?"1px solid #F0F4F8":"none",alignItems:"flex-start"}}>
                <div style={{width:5,height:5,background:TEAL,borderRadius:99,flexShrink:0,marginTop:5}}/>
                <div><p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"0 0 2px"}}>{r.name} — {r.url}</p><p style={{color:MID,fontSize:12,margin:0}}>{r.desc}</p></div>
              </div>
            ))}
          </Card>
        </div>
      )}

      {cat==="sjt"&&(
        <div>
          <InfoBox text="In engineering SJTs, the best answer usually reflects safety first, then responsibility, then teamwork. Any answer that prioritises completing work over raising a safety concern will score poorly." type="warning"/>
          {sjtQs.map((q,i)=>(
            <Card key={i}>
              <p style={{color:MID,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:"0 0 6px"}}>Scenario {i+1}</p>
              <p style={{color:NAVY,fontWeight:700,fontSize:14,margin:"0 0 14px",lineHeight:1.4}}>{q.scenario}</p>
              <ExampleToggle weak={q.weak} strong={q.strong} weakLabel="✗ Poor response" strongLabel="✓ Best response"/>
              <div style={{background:"#EFF6FF",borderLeft:`3px solid ${STEEL}`,borderRadius:8,padding:"9px 12px",marginTop:8}}>
                <p style={{color:"#1E3A8A",fontSize:12,lineHeight:1.6,margin:0}}>💡 {q.why}</p>
              </div>
            </Card>
          ))}
        </div>
      )}

      {cat==="ac"&&(
        <div>
          <InfoBox text="Assessment centres are used by BAE Systems, Babcock, Leonardo, Weir Group and ScottishPower. You are observed throughout the entire day — not just during formal exercises. Treat every part of the day as part of the assessment." type="warning"/>
          <Card style={{borderLeft:`4px solid ${STEEL}`,background:"#EFF6FF",marginBottom:16}}>
            <p style={{color:"#1E3A8A",fontWeight:800,fontSize:14,margin:"0 0 8px"}}>The critical point most candidates miss</p>
            <p style={{color:"#1E3A8A",fontSize:13,lineHeight:1.7,margin:0}}>Many candidates relax during breaks, tours or lunch and make a poor impression without realising it. How you speak to other candidates, how you behave when waiting, and how you engage during informal parts of the day all contribute to the assessors' view of you. Be genuinely professional throughout — not performatively so.</p>
          </Card>
          <Card style={{marginBottom:12}}>
            <p style={{color:NAVY,fontWeight:800,fontSize:14,margin:"0 0 12px"}}>What assessors are actually watching in the group exercise</p>
            <p style={{color:"#444",fontSize:13,lineHeight:1.65,margin:"0 0 12px"}}>The group exercise is the most misunderstood element. Many candidates believe the goal is to lead or to speak the most. It is not. Assessors are watching for:</p>
            {["Can this person listen as well as speak?","Do they help the group move forward or do they create friction?","Are they aware of others — or only focused on themselves?","Can they manage disagreement without becoming defensive?","Do they show the kind of behaviour we would want in our workplace every day?"].map((item,i)=>(
              <div key={i} style={{display:"flex",gap:10,marginBottom:7,alignItems:"flex-start"}}>
                <div style={{width:5,height:5,background:GREEN,borderRadius:99,flexShrink:0,marginTop:5}}/>
                <p style={{color:"#444",fontSize:13,lineHeight:1.5,margin:0}}>{item}</p>
              </div>
            ))}
          </Card>
          {acScenarios.map((sc,i)=>(
            <Card key={i}>
              <p style={{color:STEEL,fontWeight:800,fontSize:14,margin:"0 0 6px"}}>{sc.title}</p>
              <p style={{color:"#444",fontSize:13,lineHeight:1.6,margin:"0 0 12px"}}>{sc.desc}</p>
              {sc.watch&&(
                <>
                  <p style={{color:GREEN,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:"0 0 6px"}}>What assessors watch for</p>
                  {sc.watch.map((w,j)=><div key={j} style={{display:"flex",gap:8,marginBottom:5,alignItems:"flex-start"}}><div style={{width:5,height:5,background:GREEN,borderRadius:99,flexShrink:0,marginTop:5}}/><p style={{color:"#444",fontSize:13,margin:0}}>{w}</p></div>)}
                  <p style={{color:RUST,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:"12px 0 6px"}}>Common mistakes to avoid</p>
                  {sc.avoid.map((a,j)=><div key={j} style={{display:"flex",gap:8,marginBottom:5,alignItems:"flex-start"}}><div style={{width:5,height:5,background:RUST,borderRadius:99,flexShrink:0,marginTop:5}}/><p style={{color:"#444",fontSize:13,margin:0}}>{a}</p></div>)}
                </>
              )}
              {sc.model&&(
                <>
                  <p style={{color:GREEN,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:"12px 0 6px"}}>Model answer</p>
                  <div style={{background:"#F0FDF4",borderLeft:`3px solid ${GREEN}`,borderRadius:8,padding:"11px 13px"}}>
                    <p style={{color:"#14532D",fontSize:12,lineHeight:1.75,margin:0,whiteSpace:"pre-line",fontFamily:"monospace"}}>{sc.model}</p>
                  </div>
                </>
              )}
              <div style={{background:"#FFFBEB",borderLeft:`3px solid ${AMBER}`,borderRadius:8,padding:"9px 12px",marginTop:10}}>
                <p style={{color:"#92400E",fontSize:12,lineHeight:1.6,margin:0}}>💡 {sc.tip}</p>
              </div>
            </Card>
          ))}
          <Card>
            <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 10px",textTransform:"uppercase"}}>Day before checklist</p>
            {["I know the exact location and have planned my journey with a backup route","I know what time to arrive and aim to be there 15 minutes early","My clothes are prepared — smart, clean and appropriate for an engineering workplace","I have researched the company and can name at least two things they make or do","I have three STAR-structured examples ready for competency questions","I have two or three questions prepared to ask the employer","I know my CV well enough to speak to every item on it","I have a notepad and pen ready"].map((item,i)=>(
              <div key={i} style={{display:"flex",gap:10,marginBottom:7,alignItems:"flex-start"}}>
                <div style={{width:18,height:18,border:`2px solid ${TEAL}`,borderRadius:4,flexShrink:0,marginTop:1}}/>
                <p style={{color:"#444",fontSize:13,lineHeight:1.5,margin:0}}>{item}</p>
              </div>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}

// AI COACH
function CoachModule(){
  const [messages,setMessages]=useState([{role:"assistant",content:"I am your TASS Engineering Apprenticeship Coach.\n\nI can help you with:\n• Mock interviews — technical and competency questions across all 10 engineering pathways\n• CV feedback — paste your draft and I will review it section by section\n• Technical knowledge — safety, engineering principles, drawing reading, materials\n• STAR answer building — share a real experience and I will help you structure it\n• Employer research — Babcock, Leonardo, BAE Systems, SSE, ScottishPower, Weir Group and more\n• Test preparation strategy — numerical, mechanical and spatial reasoning\n• MyJobScotland supporting statements for public sector engineering roles\n\nWhat would you like to work on?"}]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const bottomRef=useRef(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[messages]);

  const PROMPTS=["Run a mock engineering interview","Give feedback on my CV","Quiz me on safety knowledge","Help me build a STAR answer","What should I know about Babcock?","How do I prepare for mechanical reasoning tests?"];

  async function send(){
    if(!input.trim()||loading)return;
    const userMsg=input.trim(); setInput("");
    const newMsgs=[...messages,{role:"user",content:userMsg}];
    setMessages(newMsgs); setLoading(true);
    try{
      const res=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        model:"claude-sonnet-4-5-20250929",max_tokens:1000,
        system:`You are the TASS Engineering Apprenticeship Coach — a direct, expert careers coach helping young people (16–29) in Scotland secure Engineering and Manufacturing Modern Apprenticeships.

Your approach:
- Direct and specific — no vague encouragement. Give actual next steps.
- Scotland-specific: you know Scotland's engineering sector thoroughly — Babcock International (Rosyth, defence marine), Leonardo (Edinburgh, aerospace electronics), BAE Systems (Glasgow, Type 26 frigates), Spirit AeroSystems (Prestwick, aerostructures), SSE (Perth, energy networks and renewables), ScottishPower (Glasgow, renewables), Weir Group (Glasgow, mining equipment), Wood Group (Aberdeen, oil and gas), Scottish Water, Transport Scotland, NHS Estates.
- All 10 engineering pathways: mechanical, electrical, civil, instrumentation and control, oil and gas, renewables, aerospace, manufacturing, chemical and process, structural and building services.
- Safety knowledge: permit to work, hierarchy of controls, COSHH, RIDDOR, PUWER, LOLER. You can explain all of these accurately.
- Technical knowledge: basic engineering principles — tolerances and fits, AC vs DC, earthing, ferrous vs non-ferrous metals, work hardening, machine tools (lathe vs milling machine), engineering drawing conventions (first vs third angle projection, title block, hidden detail lines).
- Test preparation: numerical reasoning, mechanical reasoning, spatial reasoning, situational judgement tests. You know how to prepare for each.

When running mock interviews:
- Ask one question at a time — mix technical (safety, engineering knowledge) and competency questions
- For technical questions: probe for depth — 'can you explain the hierarchy of controls?' not just 'do you know about safety?'
- After each answer: what was strong, what was missing, then show an improved version

When reviewing CVs:
- Check for: specific employer named, specific pathway named, practical experience (any project), safety qualification, grades for Maths and Physics, action verbs, quantification
- Engineering CVs must show practical curiosity — projects, repairs, builds, tinkering

Key things to reinforce:
- Safety knowledge is tested directly — permit to work and hierarchy of controls are minimum knowledge
- Every candidate needs at least one practical project to describe at interview
- Research your specific target employer before applying — generic applications fail
- Mechanical reasoning tests require timed practice — not just content knowledge

Keep responses mobile-friendly. Use short paragraphs and bullet points.`,
        messages:newMsgs.map(m=>({role:m.role,content:m.content}))
      })});
      const data=await res.json();
      const reply=data.content?.[0]?.text||"Connection issue — please try again.";
      setMessages([...newMsgs,{role:"assistant",content:reply}]);
    }catch(error){setMessages([...newMsgs,{role:"assistant",content:`Connection issue — please try again. (${error.message})`}]);}
    setLoading(false);
  }

  return (
    <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 180px)",minHeight:480}}>
      <div style={{background:"#EFF6FF",borderLeft:`3px solid ${TEAL}`,borderRadius:8,padding:"9px 13px",marginBottom:10}}>
        <p style={{color:"#1A5276",fontSize:13,margin:0}}>💡 Ask anything — mock interviews, CV feedback, technical knowledge, employer research or test preparation strategy. Be specific for the best results.</p>
      </div>
      <div style={{display:"flex",gap:6,marginBottom:10,overflowX:"auto",paddingBottom:4}}>
        {PROMPTS.map((p,i)=><button key={i} onClick={()=>setInput(p)} style={{background:TEAL+"15",border:`1px solid ${TEAL}40`,color:TEAL,borderRadius:99,padding:"5px 11px",whiteSpace:"nowrap",fontSize:11,fontWeight:600,cursor:"pointer",flexShrink:0,fontFamily:"inherit"}}>{p}</button>)}
      </div>
      <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:12,paddingRight:4,paddingBottom:8}}>
        {messages.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
            <div style={{maxWidth:"88%",padding:"10px 14px",borderRadius:m.role==="user"?"14px 14px 4px 14px":"14px 14px 14px 4px",background:m.role==="user"?NAVY:WHITE,color:m.role==="user"?WHITE:NAVY,fontSize:13,lineHeight:1.7,whiteSpace:"pre-wrap",border:m.role==="assistant"?"1px solid #E2E8F0":"none",boxShadow:m.role==="assistant"?"0 1px 4px rgba(0,0,0,0.06)":"none"}}>{m.content}</div>
          </div>
        ))}
        {loading&&<div style={{display:"flex",justifyContent:"flex-start"}}><div style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:"14px 14px 14px 4px",padding:"11px 15px",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}><div style={{display:"flex",gap:4}}>{[0,1,2].map(i=><div key={i} style={{width:6,height:6,background:TEAL,borderRadius:99,animation:`b 1.2s ${i*0.2}s infinite`}}/>)}</div></div></div>}
        <div ref={bottomRef}/>
      </div>
      <div style={{display:"flex",gap:8,marginTop:10}}>
        <textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}} placeholder="Ask your coach anything..." rows={3} style={{flex:1,background:WHITE,border:"1px solid #E2E8F0",borderRadius:10,padding:"10px 13px",color:NAVY,fontSize:13,fontFamily:"inherit",resize:"none",minHeight:60,boxSizing:"border-box",lineHeight:1.65}}/>
        <button onClick={send} disabled={loading||!input.trim()} style={{background:input.trim()?TEAL:"#E2E8F0",border:"none",color:input.trim()?WHITE:"#999",borderRadius:10,padding:"0 16px",cursor:input.trim()?"pointer":"default",fontSize:20}}>↑</button>
      </div>
      <style>{`@keyframes b{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}`}</style>
    </div>
  );
}

export default function TASSEngineering(){
  const [tab,setTab]=useState("home");
  const current=TABS.find(t=>t.id===tab);
  return (
    <div style={{fontFamily:"'Segoe UI', system-ui, sans-serif",background:GREY,minHeight:"100vh",color:NAVY}}>
      <style>{`* { box-sizing: border-box; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: ${GREY}; } ::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 4px; } textarea:focus, button:focus { outline: 2px solid ${TEAL}; outline-offset: 2px; }`}</style>
      {tab!=="home"&&(
        <div style={{background:`linear-gradient(135deg, ${NAVY} 0%, #1A3060 100%)`,padding:"12px 16px",display:"flex",alignItems:"center",gap:12,position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}>
          <TASSLogo size="sm" theme="dark"/>
          <div style={{width:1,height:32,background:"rgba(255,255,255,0.15)",margin:"0 4px"}}/>
          <div style={{flex:1}}>
            <div style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:0.5}}>Engineering and Manufacturing</div>
            <div style={{color:WHITE,fontSize:13,fontWeight:700,marginTop:2}}>{current?.icon} {current?.label}</div>
          </div>
        </div>
      )}
      <div style={{maxWidth:640,margin:"0 auto",padding:"20px 16px 110px"}}>
        {tab==="home"      &&<HomeModule setTab={setTab}/>}
        {tab==="sector"    &&<SectorModule/>}
        {tab==="pathways"  &&<PathwaysModule/>}
        {tab==="technical" &&<TechnicalModule/>}
        {tab==="employers" &&<EmployersModule/>}
        {tab==="apply"     &&<ApplyModule/>}
        {tab==="mjs"       &&<MJSModule/>}
        {tab==="cv"        &&<CVModule/>}
        {tab==="star"      &&<STARModule/>}
        {tab==="interview" &&<InterviewModule/>}
        {tab==="tests"     &&<TestsModule/>}
        {tab==="coach"     &&<CoachModule/>}
      </div>
      <div style={{position:"fixed",bottom:0,left:0,right:0,background:WHITE,borderTop:"1px solid #E2E8F0",display:"flex",justifyContent:"center",padding:"8px 2px 12px",zIndex:100,boxShadow:"0 -2px 12px rgba(0,0,0,0.06)"}}>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,maxWidth:52,background:"none",border:"none",cursor:"pointer",padding:"5px 2px",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
            <div style={{fontSize:13,filter:tab===t.id?"none":"grayscale(1) opacity(0.3)"}}>{t.icon}</div>
            <div style={{fontSize:6,color:tab===t.id?TEAL:"#999",fontWeight:tab===t.id?800:400,textTransform:"uppercase",letterSpacing:"0.02em"}}>{t.label.substring(0,5)}</div>
            {tab===t.id&&<div style={{width:12,height:2,background:TEAL,borderRadius:2}}/>}
          </button>
        ))}
      </div>
    </div>
  );
}
