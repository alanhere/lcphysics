// EDIT THIS FILE to update your site. Keep the punctuation around each entry.
window.HUB_DATA = {
  siteName: 'Physics Learning Hub',
  schoolYear: '2026–2027',
  className: '5th Year Physics',
  teacherNote: 'Welcome! Check the latest class entry for what we covered, homework and catch-up steps.',
  lessons: [
    {
      id: '2026-10-19-motion', date: '2026-10-19', title: 'Speed, velocity and acceleration', topic: 'Mechanics',
      summary: 'Distinguished scalar and vector quantities, calculated average speed and acceleration, and interpreted motion graphs.',
      learning: ['Distinguish speed from velocity', 'Calculate acceleration using a = (v − u)/t', 'Interpret displacement–time graphs'],
      homework: 'Complete the sample motion worksheet: questions 1–5.', due: '2026-10-21',
      catchup: ['Read the motion notes in the Topic Library', 'Work through the sample acceleration calculation', 'Complete questions 1–5 and bring any questions to the next class'],
      resources: ['motion-notes', 'motion-video'], sample: true
    },
    {
      id: '2026-10-16-units', date: '2026-10-16', title: 'SI units and scientific notation', topic: 'Foundations',
      summary: 'Practised base units, prefixes, unit conversion and standard form.',
      learning: ['Recognise common SI units', 'Convert between prefixes', 'Write measurements in scientific notation'],
      homework: 'Sample practice: convert ten measurements to SI units.', due: '2026-10-19',
      catchup: ['Review the units guide in Skills Centre', 'Try the scientific notation practice', 'Complete the ten conversions'],
      resources: ['units-guide'], sample: true
    }
  ],
  topics: [
    {name:'Foundations', icon:'🧭', description:'Measurement, SI units, scientific method and essential quantities.'},
    {name:'Mechanics', icon:'🚀', description:'Motion, forces, work, energy, momentum and circular motion.'},
    {name:'Waves', icon:'🌊', description:'Wave properties, sound and wave behaviour.'},
    {name:'Light', icon:'🌈', description:'Reflection, refraction and optical phenomena.'},
    {name:'Heat', icon:'🌡️', description:'Temperature, heat transfer and thermal physics.'},
    {name:'Electricity', icon:'⚡', description:'Charge, current, circuits and electrical energy.'},
    {name:'Modern Physics', icon:'⚛️', description:'Atomic, nuclear and particle physics.'}
  ],
  resources: [
    {id:'motion-notes', title:'Motion — introductory notes', topic:'Mechanics', type:'Notes', url:'', description:'Add a PDF or online notes link here.'},
    {id:'motion-video', title:'Motion — explanation video', topic:'Mechanics', type:'Video', url:'', description:'Add your preferred teaching video URL here.'},
    {id:'units-guide', title:'SI units and prefixes', topic:'Foundations', type:'Guide', url:'', description:'Add a handout or guide URL here.'},
    {id:'test-archive', title:'Previous class tests', topic:'All topics', type:'Tests', url:'', description:'Add a folder link or individual test files when ready.'},
    {id:'investigation-archive', title:'Investigation records', topic:'All topics', type:'Investigations', url:'', description:'Add investigation sheets, results and videos here.'}
  ],
  skills: [
    {title:'Maths for Physics', icon:'🧮', description:'Rearranging equations, powers of ten, prefixes and graph gradients.', tasks:['Rearrange v = u + at to find t', 'Convert 4.2 km to metres', 'Express 0.00036 in standard form']},
    {title:'Experimental Skills', icon:'🔬', description:'Variables, fair tests, graphing, uncertainty and evaluating evidence.', tasks:['Identify independent and dependent variables', 'Explain why repeat measurements matter', 'Describe how to find a graph gradient']},
    {title:'Scientific Understanding', icon:'🧠', description:'Definitions, models, explanations and connecting evidence to claims.', tasks:['Explain the difference between speed and velocity', 'Describe what a model can and cannot show', 'Support a claim with experimental evidence']},
    {title:'Research Skills', icon:'🔎', description:'Reliable sources, referencing and communicating scientific findings.', tasks:['Compare two sources for credibility', 'Record an author and publication date', 'Distinguish a claim from supporting evidence']}
  ]
};
