export const profile = {
  name: 'Sang Truong',
  title: 'Senior AI Engineer · Applied AI Systems',
  eyebrow: 'AI Systems · Computer Vision · Quantitative ML · Research',
  intro:
    'I lead AI engineering at EPIC TECHNOLOGY and still work directly on architecture and code. Recent work includes credit-risk ML on AWS, clinical AI for hospital physicians, production video intelligence and factory-floor inspection. Before EPIC, I built core enterprise-agent orchestration at FPT Software; my research and independent quant work inform how I evaluate models and build reliable systems.',
  email: 'tqsang97@gmail.com',
  github: 'https://github.com/sangtrx',
  linkedin: 'https://linkedin.com/in/tqsang',
  scholar: 'https://scholar.google.com/citations?user=JG2yzhgAAAAJ',
  resumeSource: '/resume',
};

export const credibility = [
  { label: 'Current role', value: 'Head of Artificial Intelligence' },
  { label: 'AI / software engineering', value: '8+ years' },
  { label: 'Graduate degree', value: 'MS Computer Engineering · 4.0/4.0' },
  { label: 'Research', value: 'IJCV · AAAI Oral · IEEE JBHI · Poultry Science' },
];

export const ownership = [
  {
    title: 'Architecture & authority',
    detail: 'Turn ambiguous requirements into clear system boundaries, data ownership, interfaces, permissions, state, and acceptance criteria.',
  },
  {
    title: 'AI, tools & knowledge',
    detail: 'Design model, retrieval, tool, memory, and human-review paths without letting probabilistic output silently become system truth.',
  },
  {
    title: 'Backend & product',
    detail: 'Build the software around the model: APIs, durable state, async work, streaming, integrations, product surfaces, and operational controls.',
  },
  {
    title: 'Evaluation & reliability',
    detail: 'Separate implemented from validated, make failure modes observable, and use evidence rather than fluent output as the acceptance boundary.',
  },
  {
    title: 'Cloud, edge & deployment',
    detail: 'Carry systems through Docker/Linux, cloud or on-prem delivery, GPU/edge constraints, monitoring, recovery, and handoff.',
  },
  {
    title: 'Research to production',
    detail: 'Preserve causality, provenance, reproducibility, and experimental assumptions while turning research into usable systems.',
  },
];

export const capabilityDomains = [
  {
    index: '01',
    title: 'Applied AI · Agents · Voice · RAG',
    summary:
      'I build the orchestration, data contracts, APIs and safeguards that turn language models into working software.',
    evidence: [
      'Clinical decision support with governed knowledge, citations, deterministic application authority, and explicit human/production boundaries',
      'Designed core LangGraph orchestration for a multi-tenant enterprise assistant: tenant-scoped retrieval, tools, state and failure handling',
      'Multilingual speech and real-time interaction across API, worker, and browser-facing paths',
    ],
    stack: 'Python · FastAPI · LangGraph/LangChain · Azure OpenAI · Qdrant/Milvus/pgvector · PostgreSQL · Playwright · Celery/RabbitMQ/Redis',
  },
  {
    index: '02',
    title: 'Computer Vision · Video · Edge AI',
    summary:
      'Physical-world AI spanning camera/media input, perception, tracking, temporal state, evidence, target-device inference, and recovery.',
    evidence: [
      'Production multi-camera video intelligence across heterogeneous real-world sources and operational failure modes',
      'Industrial and academic vision workflows for inspection, recognition, tracking, and workstation state',
      'Edge optimization with TensorRT/CUDA/Jetson plus RGB-D and embedded perception work',
    ],
    stack: 'PyTorch · TensorFlow · OpenCV · YOLO · ALPR · Tracking · TensorRT · CUDA · ONNX Runtime · Jetson · RTSP/HLS · FFmpeg',
  },
  {
    index: '03',
    title: 'Quantitative ML · Credit Risk · Trading Systems',
    summary:
      'From credit-risk modeling to market research, I work on data availability, leakage, validation and production inference.',
    evidence: [
      'EPIC: Open Banking/CDR features with Spark/Iceberg, XGBoost/LightGBM validation and SageMaker inference',
      'Curren: point-in-time market research, probabilistic forecasting and source-driven signal operations',
      'Leakage-aware evaluation, reproducible data artifacts, selection controls, lifecycle/risk state, and reconciliation',
      'Earlier equity, crypto, and FX research with ML ensembles, market data, cloud execution, and experiment tracking',
    ],
    stack: 'Python · Rust · Spark · Iceberg · SageMaker · XGBoost · LightGBM · Arrow/Parquet · Polars · DuckDB · Scikit-learn · NautilusTrader',
  },
  {
    index: '04',
    title: 'Research · Multimodal & Temporal ML',
    summary:
      'Peer-reviewed research across temporal video understanding, vision-language learning, medical time-series representation learning, and industrial computer vision.',
    evidence: [
      'Temporal action proposal generation and interaction modeling for long untrimmed video',
      'Vision-language learning and coherent video paragraph captioning, including an AAAI 2023 Oral',
      'Medical time-series representation learning and industrial visual inspection research',
    ],
    stack: 'Transformers · Contrastive Learning · PyTorch · TensorFlow · Detectron2 · MATLAB · NumPy · SciPy · Scikit-learn · Weights & Biases',
  },
];

export const projects = [
  {
    slug: 'yhct',
    index: '01',
    title: 'Clinical AI for a Traditional Medicine Hospital',
    kicker: 'EPIC TECHNOLOGY · Clinical AI & Decision Support',
    summary:
      'Built the clinical AI platform for prescription extraction, interaction and dose checks, plus source-grounded answers. FastAPI, hybrid Qdrant retrieval and deterministic clinical rules keep physician decisions separate from generated text.',
    role: 'AI Architect / Lead Builder · EPIC TECHNOLOGY',
    year: '2026',
    status: 'Deployed clinical AI · physician decisions remain authoritative',
    proof: ['Governed knowledge', 'Durable application state', 'Explicit clinical authority'],
    tags: ['Clinical AI', 'Agents', 'RAG', 'FastAPI', 'PostgreSQL', 'On-prem'],
    href: '/work/yhct',
    accent: 'blue',
  },
  {
    slug: 'credit-risk',
    index: '02',
    title: 'Credit Risk ML & Decision Infrastructure',
    kicker: 'EPIC TECHNOLOGY · Confidential Australian lender',
    summary:
      'Led an AWS-based credit-risk platform combining consent-qualified Open Banking data, point-in-time Spark/Iceberg features, XGBoost/LightGBM validation and SageMaker scoring. Corrected leakage and training/serving skew ahead of a staged production rollout.',
    role: 'Head of AI · Technical Lead · EPIC TECHNOLOGY',
    year: 'Nov 2025 — Present',
    status: 'Production · approved personal-loan scoring workflow',
    proof: ['Point-in-time features', 'Offline/online parity', 'Risk-governed deployment'],
    tags: ['Credit Risk', 'AWS', 'Spark', 'Iceberg', 'SageMaker', 'MLOps'],
    href: '/work/credit-risk',
    accent: 'blue',
  },
  {
    slug: 'curren',
    index: '03',
    title: 'Curren',
    kicker: 'Independent quantitative intelligence & trading-systems project',
    summary:
      'A solo-built quantitative research and systems platform connecting point-in-time evidence, reproducible evaluation, shared research/runtime semantics, guarded operational state, and a sanitized public verification surface — without publishing strategy internals.',
    role: 'Independent AI/Quant Side Project · Solo Builder',
    year: 'Jun 2026 — Present',
    status: 'Independent research and operating systems',
    proof: ['Point-in-time evidence', 'Research/runtime parity', 'Read-only public surface'],
    tags: ['Quant Research', 'Rust', 'Python', 'PIT Data', 'Trading Systems', 'MCP'],
    href: '/work/curren',
    accent: 'blue',
  },
  {
    slug: 'epic-video',
    index: '04',
    title: 'Production Multi-Camera Video Intelligence',
    kicker: 'EPIC TECHNOLOGY · Computer Vision & Physical-World AI',
    summary:
      'The challenge beyond object detection: making heterogeneous cameras source-qualified, fresh, observable and recoverable, then connecting perception to trusted events and evidence on constrained hardware.',
    role: 'AI / Computer Vision Systems Lead · EPIC TECHNOLOGY',
    year: '2025 — Present',
    status: 'Production multi-camera software · sensitive deployment details withheld',
    proof: ['Source identity and freshness', 'Temporal detection and evidence', 'Bounded recovery'],
    tags: ['Video AI', 'Computer Vision', 'YOLO', 'ALPR', 'Tracking', 'Media pipelines'],
    href: '/work/epic-video',
    accent: 'blue',
  },
  {
    slug: 'enterprise-agents',
    index: '05',
    title: 'Enterprise Conversational AI',
    kicker: 'FPT Software · Team-built agent systems',
    summary:
      'Designed and implemented core LangGraph orchestration for a multi-tenant enterprise agent platform, including tenant-aware retrieval, routing, tools, state, retries and response guards.',
    role: 'AI Engineer · FPT Software',
    year: '2024 — 2025',
    status: 'Core AI orchestration · team-delivered product',
    proof: ['Typed agent state', 'Tenant-aware retrieval', 'Tool and retry contracts'],
    tags: ['Enterprise AI', 'Agents', 'LangGraph', 'Azure OpenAI', 'RAG'],
    href: '/work/enterprise-agents',
    accent: 'blue',
  },
  {
    slug: 'interview-voice',
    index: '06',
    title: 'Interview & Voice AI Systems',
    kicker: 'FPT Software · Conversation, speech & evaluation',
    summary:
      'Speech-enabled interview workflows integrating browser interaction, stateful scenarios, asynchronous AI services and evaluation, with explicit system-versus-personal ownership boundaries.',
    role: 'AI Engineer · FPT Software',
    year: '2024 — 2025',
    status: 'Multilingual speech and interview workflows',
    proof: ['Voice interaction', 'Conversation/scenario state', 'Async evaluation'],
    tags: ['Voice AI', 'Azure Speech', 'Next.js', 'Python', 'Interview AI'],
    href: '/work/interview-voice',
    accent: 'blue',
  },

];

export const systemPortfolio = [
  {
    period: 'Nov 2025 — Present',
    title: 'Credit Risk ML & Decision Infrastructure',
    owner: 'EPIC TECHNOLOGY · Head of AI / Technical Lead',
    summary:
      'Built the consent-aware Open Banking/Spark/Iceberg feature and SageMaker risk-scoring path for a confidential Australian lender. Temporal leakage, offline/online parity and lender approval were explicit rollout gates.',
    signal: 'Production credit risk · AWS / MLOps',
    href: '/work/credit-risk',
  },
  {
    period: '2026',
    title: 'Hospital Clinical AI & Decision Support',
    owner: 'EPIC TECHNOLOGY · AI Architect / Lead Builder',
    summary:
      'Designed and deployed physician-facing clinical AI for prescription extraction, interaction/contraindication and dose checks, with source-grounded answers and deterministic medical rules.',
    signal: 'Clinical AI · governed knowledge',
    href: '/work/yhct',
  },
  {
    period: '2025 — Present',
    title: 'Production Multi-Camera Video Intelligence',
    owner: 'EPIC TECHNOLOGY · AI / Computer Vision Systems Lead',
    summary:
      'Physical-world video AI spanning heterogeneous media sources, perception and tracking, temporal events, evidence, monitoring, and recovery under constrained hardware and vendor interfaces.',
    signal: 'Production physical-world AI',
    href: '/work/epic-video',
  },
  {
    period: '2025 — Present',
    title: 'AI-Powered Open edX Platform',
    owner: 'EPIC TECHNOLOGY · AI Architect / Lead Builder',
    summary:
      'Teacher-reviewable content generation and AI tutoring with retrieval, Vietnamese speech, real-time interaction, platform integration, browser verification, and operational delivery.',
    signal: 'Education AI · human review',
  },
  {
    period: '2025 — Present',
    title: 'Manufacturing Fastener Visual Inspection',
    owner: 'EPIC TECHNOLOGY · AI / Computer Vision Engineering',
    summary:
      'Deployed edge YOLO inspection on one Japanese customer production line. Owned dataset preparation, fixture/ROI calibration and part-level decisions; handled false rejects after camera movement by recalibrating the vision path.',
    signal: 'Production manufacturing · edge CV',
  },
  {
    period: '2025 — Present',
    title: 'Internal AI Meeting Tool',
    owner: 'EPIC TECHNOLOGY · AI Systems Engineering',
    summary:
      'Built and deployed an internally accepted meeting assistant with live speech, multi-turn conversation state and project-aware retrieval; addressed stale context and cross-project contamination.',
    signal: 'Internal deployment · speech / RAG',
  },
  {
    period: '2024 — 2025',
    title: 'AI4U Enterprise Conversational Agent',
    owner: 'FPT Software · AI Engineer',
    summary:
      'Personally built core LangGraph orchestration for multi-tenant enterprise agents, including routing, tenant-aware retrieval, tool contracts and failure handling; wider platform delivery remained team-owned.',
    signal: 'Enterprise agents · RAG',
    href: '/work/enterprise-agents',
  },
  {
    period: '2024 — 2025',
    title: 'Interview & Voice AI Systems',
    owner: 'FPT Software · AI Engineer (team project)',
    summary:
      'Speech-enabled interview and transcription workflows with browser voice interaction, conversational scenarios, asynchronous AI dialogue/evaluation and backend services.',
    signal: 'Voice & interview AI · evaluation',
    href: '/work/interview-voice',
  },
  {
    period: '2021 — 2024',
    title: 'Industrial & Poultry Vision Research',
    owner: 'University of Arkansas · Applied Research',
    summary:
      'Visual inspection and workstation-state research connecting perception models to bounded physical-process evidence, alongside Jetson/TensorRT/CUDA edge optimization.',
    signal: 'Industrial CV · edge inference',
  },
  {
    period: 'Jun 2026 — Present',
    title: 'Curren Quant Intelligence & Trading Systems',
    owner: 'Independent side project · Solo Builder',
    summary:
      'Point-in-time research evidence, reproducible evaluation, shared causal semantics, durable lifecycle/risk state, guarded execution boundaries, and sanitized public verification.',
    signal: 'Research discipline · system parity',
    href: '/work/curren',
  },
];

export const experience = [
  {
    period: 'Jun 2025 — Present',
    role: 'Head of Artificial Intelligence',
    company: 'EPIC TECHNOLOGY',
    summary:
      'Hands-on Head of AI leading architecture and implementation across production credit-risk ML, hospital clinical AI, video intelligence, manufacturing inspection and education AI.',
    details: [
      'Led point-in-time Open Banking/CDR and Spark/Iceberg features, XGBoost/LightGBM risk challengers and SageMaker scoring for an Australian lender; corrected leakage and offline/online skew before rollout.',
      'Designed and deployed hospital clinical AI with deterministic prescription rules, Qdrant retrieval and grounded physician answers.',
      'Built production video intelligence, edge YOLO inspection on a manufacturing line, teacher-reviewed Open edX AI and an internal AI meeting tool.',
      'Led cross-functional delivery while staying hands-on across backend, AI models, evaluation, deployment and recovery.',
    ],
  },
  {
    period: 'Jun 2024 — Present',
    role: 'AI Tech Lead · Part-time / Consulting',
    company: 'A9 IOT',
    summary:
      'Project-based AI consulting, including FastAPI/LightGBM sensor forecasting with 16 metrics, 72 lag features and 36 recursive forecast steps.',
    details: [
      'Worked across LSTM, XGBoost, ARIMA, Prophet, continuous sensor processing, model evaluation, and reporting.',
    ],
  },
  {
    period: 'Oct 2024 — Jun 2025',
    role: 'AI Engineer',
    company: 'FPT Software',
    summary:
      'Designed and implemented the core LangGraph AI orchestration for AI4U and contributed to multilingual speech/interview applications delivered by a wider FPT team.', 
    details: [
      'Implemented typed LangGraph state, tenant-aware retrieval, intent routing, tool contracts, retries/idempotency and output guards for enterprise AI4U.',
      'Contributed to English, Vietnamese, Japanese and Korean speech, browser interaction, session state and asynchronous interview evaluation.',
    ],
  },
  {
    period: 'May 2021 — Jan 2024',
    role: 'Graduate Researcher / PhD Student Researcher & Teaching Assistant',
    company: 'University of Arkansas',
    summary:
      'Graduate research in multimodal video understanding, vision-language learning, medical time-series learning, industrial computer vision, and edge inference; completed an MS in Computer Engineering.',
    details: [
      'Co-developed peer-reviewed temporal action and video-language methods including ABN, AEI, AOE-Net, VLCAP, and VLTinT.',
      'Worked on medical time-series representation learning and poultry/industrial vision, including CarcassFormer.',
      'Optimized target-hardware inference using NVIDIA Jetson, TensorRT, CUDA, and FP16 techniques.',
    ],
  },
];

export const additionalExperience = [
  {
    period: 'Jan 2024 — Oct 2024',
    role: 'Quantitative Researcher / Data Scientist',
    company: 'Confidential Fund · NDA Project',
    details: [
      'Developed equity-prediction research with feature engineering, gradient-boosting ensembles, sentiment-derived signals, market-data evaluation/backtesting, constrained AWS execution, and MLflow tracking.',
    ],
  },
  {
    period: 'Mar 2024 — Jun 2024',
    role: 'AI Engineer / Data Scientist · Contract',
    company: 'Crypto Communities Chatbot Development',
    details: [
      'Designed LLM/RAG community assistants with LangChain and Pinecone for grounded support automation.',
    ],
  },
  {
    period: 'Sep 2019 — Oct 2020',
    role: 'Quantitative Researcher / Data Scientist',
    company: 'Bluebelt Group',
    details: [
      'Built Python/FastAPI infrastructure for cryptocurrency and FX trading signals and quantitative/ML experimentation.',
    ],
  },
  {
    period: 'Aug 2018 — Sep 2019',
    role: 'AI Engineer · Computer Vision / Embedded AI',
    company: '5D Agriculture Solutions JSC',
    details: [
      'Built computer-vision systems for autonomous braking, face recognition, and contactless livestock measurement with RGB-D sensing and embedded devices.',
    ],
  },
];

export const epicSystems = systemPortfolio.filter((item) => item.owner.startsWith('EPIC TECHNOLOGY'));

export const teachingExperience = [
  {
    period: '2022 — 2023',
    role: 'Teaching Assistant',
    company: 'University of Arkansas',
    detail: 'Assisted with Algorithms course slides, homework assignments, and exams.',
  },
  {
    period: 'May 2019 — Aug 2019',
    role: "Teaching Assistant · Master's Computer Vision course",
    company: 'HCMC University of Technology and Education',
    detail: 'Prepared course material and instructed graduate Computer Vision practice sessions.',
  },
  {
    period: '2018 — 2019',
    role: 'Teaching Assistant',
    company: 'International University — VNU HCMC',
    detail: 'Taught undergraduate labs/tutorials in Sensors and Instrumentation, Robotics, and Biosignal Processing.',
  },
];

export const achievements = [
  { year: '2023', title: 'Rodger S. Kline Chair in Computer Science and Computer Engineering Scholarship', institution: 'University of Arkansas' },
  { year: '2022', title: 'Reginald R. “Barney” and Jameson A. Baxter Endowed Graduate Scholarship', institution: 'University of Arkansas' },
  { year: '2021', title: 'Fully funded Ph.D. admission · Graduate Assistantship and tuition waiver', institution: 'University of Arkansas' },
  { year: '2015', title: 'First Prize · Ba Ria–Vung Tau Informatics Competition', institution: 'Ba Ria–Vung Tau, Vietnam' },
  { year: '2014', title: 'First Prize · Ba Ria–Vung Tau Informatics Competition', institution: 'Ba Ria–Vung Tau, Vietnam' },
  { year: '2014', title: 'Gold Medal · Vietnam Southern Region Olympic 30/4 — Informatics', institution: 'Vietnam' },
];

export const skillGroups = [
  {
    title: 'Applied AI / LLM / agents',
    items: ['LLM/RAG/agents', 'LangGraph/LangChain', 'tool/model routing', 'memory/context', 'grounded generation', 'guardrails', 'human-review boundaries', 'evaluation'],
  },
  {
    title: 'Retrieval & knowledge systems',
    items: ['Qdrant', 'Milvus', 'Pinecone', 'pgvector', 'PostgreSQL', 'embeddings', 'governed ingestion', 'metadata filtering', 'citations', 'provenance'],
  },
  {
    title: 'Voice / real-time AI',
    items: ['Azure Speech', 'multilingual ASR', 'Vietnamese ASR/TTS', 'speech evaluation', 'WebSockets/SSE', 'AsyncIO', 'background processing'],
  },
  {
    title: 'Computer vision / video / edge',
    items: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLO', 'Detectron2', 'ALPR', 'tracking', 'TensorRT', 'ONNX Runtime', 'CUDA', 'Jetson', 'RGB-D', 'RTSP/HLS', 'FFmpeg'],
  },
  {
    title: 'Quantitative ML & research data',
    items: ['Rust', 'Python', 'point-in-time data', 'Arrow/Parquet', 'Polars', 'DuckDB', 'LightGBM', 'CatBoost', 'XGBoost', 'Scikit-learn', 'SciPy', 'Statsmodels', 'Optuna', 'NautilusTrader'],
  },
  {
    title: 'Backend & distributed systems',
    items: ['Python', 'FastAPI', 'REST/SSE', 'WebSockets', 'Celery', 'RabbitMQ', 'Redis', 'PostgreSQL', 'SQLite', 'MongoDB', 'MinIO/S3', 'retries', 'idempotency', 'durable state'],
  },
  {
    title: 'Product, cloud & delivery',
    items: ['Next.js', 'React', 'TypeScript/JavaScript', 'Open edX', 'Playwright', 'Docker', 'Kubernetes', 'Linux', 'systemd', 'Nginx', 'AWS', 'Azure'],
  },
  {
    title: 'Languages',
    items: ['English — professional working proficiency', 'Vietnamese — native'],
  },
];

export const education = [
  {
    period: 'Jul 2021 — Dec 2023',
    title: 'Master of Science in Computer Engineering (MSCmpE)',
    institution: 'University of Arkansas',
    detail: 'GPA 4.0/4.0 · thesis: “Towards Multi-modal Interpretable Video Understanding” · advisor: Prof. Ngan Le.',
  },
  {
    period: '2015 — Nov 2019',
    title: 'Bachelor of Engineering in Automation and Control Engineering',
    institution: 'International University — VNU HCMC',
    detail: 'GPA 3.50/4.00 · Ranked 2nd in undergraduate cohort (Top 1%) · half-tuition scholarship.',
  },
  {
    period: 'Secondary education',
    title: 'Specialized Informatics',
    institution: 'Le Quy Don High School for the Gifted — Vung Tau',
    detail: 'Specialized high-school program in Informatics.',
  },
];

export const researchTrajectory = [
  {
    period: '2021 → 2023',
    title: 'Temporal action understanding',
    detail: 'ABN → AEI → AOE-Net: action-boundary and interaction modeling for long untrimmed video, culminating in IJCV.',
  },
  {
    period: '2022 → 2023',
    title: 'Vision-language video understanding',
    detail: 'VLCAP → VLTinT: contrastive and Transformer-based modeling for coherent video paragraph captioning; VLTinT was selected as an AAAI 2023 Oral.',
  },
  {
    period: '2021 → 2024',
    title: 'Medical & industrial ML',
    detail: 'Medical time-series representation learning plus industrial/poultry vision and target-hardware edge optimization.',
  },
];

export const publications = [
  {
    year: '2024',
    title: 'CarcassFormer',
    detail: 'Simultaneous localization, segmentation, and classification of poultry carcass defects',
    venue: 'Poultry Science',
    href: 'https://doi.org/10.1016/j.psj.2024.103765',
  },
  {
    year: '2023',
    title: 'AOE-Net',
    detail: 'Entity-interaction modeling with adaptive attention for temporal action proposal generation',
    venue: 'International Journal of Computer Vision',
    href: 'https://doi.org/10.1007/s11263-022-01702-9',
  },
  {
    year: '2023',
    title: 'VLTinT',
    detail: 'Visual-linguistic Transformer-in-Transformer for coherent video paragraph captioning · AAAI Oral',
    venue: 'AAAI',
    href: 'https://doi.org/10.1609/aaai.v37i3.25412',
  },
  {
    year: '2023',
    title: 'sCL-ST',
    detail: 'Supervised contrastive learning with semantic transformations for multi-lead ECG arrhythmia classification',
    venue: 'IEEE JBHI',
    href: 'https://doi.org/10.1109/JBHI.2023.3246241',
  },
  {
    year: '2022',
    title: 'VLCAP',
    detail: 'Vision-language contrastive learning for coherent video paragraph captioning',
    venue: 'IEEE ICIP',
    href: 'https://doi.org/10.1109/ICIP46576.2022.9897766',
  },
  {
    year: '2021',
    title: 'AEI',
    detail: 'Actor-environment interaction with adaptive attention for temporal action proposal generation',
    venue: 'BMVC',
    href: 'https://doi.org/10.5244/C.35.306',
  },
  {
    year: '2021',
    title: 'ABN',
    detail: 'Agent-aware boundary networks for temporal action proposal generation',
    venue: 'IEEE Access',
    href: 'https://doi.org/10.1109/ACCESS.2021.3110973',
  },
  {
    year: '2021',
    title: 'Multi-module RCNN + Transformer',
    detail: 'Multi-module recurrent convolutional neural network with Transformer encoder for ECG arrhythmia classification',
    venue: 'IEEE BHI',
    href: 'https://doi.org/10.1109/BHI50953.2021.9508527',
  },
];