export const site = {
  name: 'Syed Md Tousif',
  role: 'Backend and full-stack developer',
  description:
    'Backend and full-stack developer working on payments, databases, background jobs and production reliability. Remote, based in India.',
  email: 'syedmdtousif.2002@gmail.com',
  github: 'https://github.com/geektousif',
  linkedin: 'https://linkedin.com/in/syed-md-tousif-2002',
  location: 'West Bengal, India',
};

export const bio = [
  'I’m a backend-focused developer from West Bengal, India. Most of my work is on the parts of a product people only notice when they break: payments, databases, background jobs and deployments.',
  'Since 2023 I’ve been the only engineer on a US client’s billing platform, built products in e-commerce, healthcare and education, and taken over several projects that other developers left in a bad state. I’m also studying for an MCA at IIT Patna and IIIT Ranchi.',
];

export type Section = { h: string; p?: string; items?: string[] };
export type Project = {
  slug: string;
  title: string;
  year: string;
  blurb: string;
  stack: string[];
  intro: string;
  sections: Section[];
};

export const projects: Project[] = [
  {
    slug: 'rooftop-nursery',
    title: 'Rooftop Nursery',
    year: '2025 – now',
    blurb: 'An online store and operations system for a plant nursery, self-hosted and in daily use.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Nginx', 'PM2', 'PhonePe'],
    intro:
      'A real online store for a friend’s plant nursery. I took it on so I could own a production system from the first commit to live traffic, and it has served real customers since launch. Features were decided together with the owner, without a formal spec.',
    sections: [
      {
        h: 'Version 1: the store',
        items: [
          'Storefront, admin dashboard and API.',
          'PhonePe payments with idempotent webhooks, retry-safe processing and reconciliation, so a repeated callback never creates a second order.',
          'Concurrency-safe inventory and order updates, so stock and order status stay in sync.',
          'Invoices for both thermal POS printers and A4 PDF.',
          'Self-hosted on a Debian VPS with Nginx, SSL and PM2. This cut hosting cost by roughly 90% compared with managed options.',
        ],
      },
      {
        h: 'Version 2: multiple suppliers',
        items: [
          'Products come from several suppliers, and each supplier fulfils its own part of an order.',
          'An order is split automatically into one shipment per supplier, and each shipment is tracked on its own.',
          'CMS-style storefront management, so the owner can change pages, banners and catalogue content without a developer.',
        ],
      },
    ],
  },
  {
    slug: 'billing-platform-rescue',
    title: 'Rescuing a billing platform',
    year: '2023',
    blurb: 'A US client’s unstable billing system: 150+ defects fixed and a key API cut from about 1.2 s to 0.4 s.',
    stack: ['Node.js', 'Express', 'React', 'MSSQL', 'Redis', 'BullMQ'],
    intro:
      'A US client’s billing platform was failing in production: frequent bugs, slow pages and unreliable QuickBooks invoice sync. I was the only engineer on it. Client details are confidential, so I’m keeping this general.',
    sections: [
      {
        h: 'What I did',
        items: [
          'Fixed 150+ defects, including race conditions, frontend state bugs and broken integrations. Production bugs fell from roughly 25 to roughly 7 a month over about four months.',
          'Cut a key API from about 1.2 s to about 0.4 s by removing N+1 queries, adding indexes, using CTEs and materialized views, and caching hot reads in Redis.',
          'Cleaned up more than 3,000 lines of duplicated React logic and stabilised large data tables with thousands of rows.',
          'Moved QuickBooks OAuth invoice sync into BullMQ jobs with retries. Around 99% of syncs succeeded.',
        ],
      },
      {
        h: 'What I would do differently now',
        p: 'I’d add tracing and a small set of regression tests before touching anything, so every fix has a measurable before and after, and I’d make each sync job idempotent from the start.',
      },
    ],
  },
  {
    slug: 'doctor-booking-platform',
    title: 'Doctor booking platform',
    year: '2025',
    blurb: 'Location-based doctor search and booking for 500+ doctors, with transaction-safe slots.',
    stack: ['Django', 'PostgreSQL', 'Celery'],
    intro:
      'A client project where patients find doctors and hospitals nearby and book a slot without double-booking. Client details are confidential.',
    sections: [
      {
        h: 'What I did',
        items: [
          'Built location-based search with live availability across 500+ doctors.',
          'Designed booking transactions to avoid deadlocks and double-booking.',
          'Brought slow search queries from about 3 s to under 0.5 s with ORM query tuning, and moved emails and notifications to Celery so requests stopped timing out.',
        ],
      },
      {
        h: 'What I would do differently now',
        p: 'I’d use PostgreSQL row locks or exclusion constraints for slot booking, and load-test the booking path with k6 before launch.',
      },
    ],
  },
  {
    slug: 'edtech-mvp-rescue',
    title: 'Rescuing an EdTech MVP',
    year: '2024',
    blurb: 'An abandoned learning platform with broken auth, made safe and fast.',
    stack: ['Next.js', 'Express', 'MongoDB'],
    intro: 'I took over an abandoned MVP with security and functional problems. Client details are confidential.',
    sections: [
      {
        h: 'What I did',
        items: [
          'Fixed JWT authentication flaws and unstable state management.',
          'Designed role-based access for students, educators and admins.',
          'Brought dashboard loads from about 8 s to about 1–2 s with indexing and aggregation pipelines.',
        ],
      },
    ],
  },
];

export const smaller = [
  'Also in 2024: I moved 500+ products with variants from WordPress to Strapi and Next.js, fixed SSR hydration issues, and cut hosting from about $50 to about $8 a month.',
];

export const services = [
  ['Fix and stabilise', 'Bugs, slow queries and APIs, failing payments or webhooks, unreliable background jobs and production incidents.', 'fixed scope'],
  ['Maintain', 'A monthly retainer for deployments, updates, monitoring and small enhancements on a Node.js or Django app.', 'monthly'],
  ['Build and extend', 'New features, backends for web apps, payment and third-party integrations, and migrations between stacks.', 'fixed or hourly'],
  ['Join your team', 'Part-time, contract or full-time backend and full-stack work, embedded in your team and your process.', 'contract'],
  ['Work behind an agency', 'Custom backends and integrations delivered under your name, for clients who have outgrown a template or CMS.', 'subcontract'],
];

export const path = [
  ['2023', 'Intern at Hashtag Systems: Django REST APIs and scrapers.'],
  ['2023', 'Sole engineer on a US client’s billing platform at Xotentia Solutions.'],
  ['2024 – now', 'Independent: rescuing and building apps for clients.'],
  ['2025 – now', 'Built and run the online store for Rooftop Nursery.'],
  ['2026 – now', 'MCA at IIT Patna and IIIT Ranchi, alongside client work.'],
];

export const lab = [
  ['Code-judge platform', 'A LeetCode-style site with a submission API, a queue and sandboxed judge workers, with the worker later rewritten in Go.', 'designing'],
  ['Ticket booking engine', 'Seat availability, double-booking prevention, idempotent payments and failure recovery.', 'planned'],
  ['Small backend builds', 'An auth service, a rate limiter and a URL shortener, each as a small finished repository.', 'planned'],
  ['Same spec, different language', 'One small spec rebuilt in Go, Rails, Spring and Rust, to compare how each handles the same problems.', 'experiments'],
];

export const experience = [
  {
    role: 'Full-Stack Developer (Contract)',
    org: 'Rooftop Nursery',
    period: 'Jun 2025 – present',
    points: [
      'Designed, built and deployed an e-commerce platform (Node.js, Express, PostgreSQL, React) on a self-managed Debian VPS with Nginx, SSL and PM2.',
      'Integrated PhonePe payments with idempotent webhooks, retry-safe processing and reconciliation.',
      'Built an admin dashboard with inventory management and POS thermal and A4 invoices.',
      'Built version 2 with multi-supplier fulfilment, automatic order splitting into shipments, and CMS-style storefront management.',
      'Cut hosting costs by roughly 90% by self-hosting instead of using managed services.',
    ],
  },
  {
    role: 'Freelance Full-Stack Developer',
    org: 'Independent',
    period: '2024 – present',
    points: [
      'Delivered full-stack applications from scratch and rescued struggling projects, focusing on performance, reliability and production debugging.',
      'Optimised APIs and databases on 6+ production apps (Node.js, Django): fixed N+1 queries, added indexes, and improved CI/CD, payments and logging. Throughput gains were roughly 40–80%.',
      'Built a doctor booking platform, rescued an EdTech MVP, and migrated a WordPress catalogue to a headless CMS.',
    ],
  },
  {
    role: 'Software Developer',
    org: 'Xotentia Solutions LLP (remote)',
    period: 'Jun 2023 – Dec 2023',
    points: [
      'Sole engineer stabilising a US client’s billing platform (Node.js, React, MSSQL).',
      'Resolved 150+ defects, reducing production bugs from roughly 25 to roughly 7 a month.',
      'Cut key API latency from about 1.2 s to about 0.4 s with query fixes, indexes, materialized views and Redis caching.',
      'Integrated the QuickBooks API (OAuth) with BullMQ background jobs, with around 99% sync success.',
    ],
  },
  {
    role: 'Web Developer Intern',
    org: 'Hashtag Systems Inc (remote)',
    period: 'Jan 2023 – Apr 2023',
    points: [
      'Built REST APIs with Django REST Framework for an e-commerce catalogue, inventory and orders.',
      'Wrote Selenium and BeautifulSoup scrapers for catalogue and pricing data.',
    ],
  },
];

export const education = [
  ['MCA, joint degree programme', 'IIT Patna and IIIT Ranchi', '2026 – present'],
  ['BCA', 'Indira Gandhi National Open University', '2022 – 2025'],
];

export const skills = [
  ['Languages', 'TypeScript, JavaScript, Python'],
  ['Backend', 'Node.js (Express, NestJS), Django and DRF, FastAPI'],
  ['Data', 'PostgreSQL, Redis, MongoDB, MSSQL, Prisma, Drizzle'],
  ['Queues', 'BullMQ, Celery'],
  ['Run and ship', 'Docker, Nginx, Linux VPS, PM2, GitHub Actions, AWS (EC2, S3), k6'],
  ['Frontend', 'React, Next.js, Tailwind'],
  ['Learning', 'Go, Rails, Spring, Rust'],
];
