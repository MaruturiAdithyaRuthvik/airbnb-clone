==================================================
PLAYPOWER LABS - AIRBNB CLONE AI PROMPT & WORKFLOW LOG
==================================================

[PROMPT 1: Architecture & Project Initialization]
"Initialize a production-ready Next.js 14 App Router project using TypeScript and Tailwind CSS. Enforce a strict desktop-only viewport container with high fidelity matching the reference Airbnb UI layout, styling, and typography."

[PROMPT 2: Data Contracts & Asset Pipeline]
"Bypass live external scraping rate limits by constructing a robust local TypeScript data contract at src/data/listingData.ts. Populate it with detailed listing metadata, host stats, amenities, reviews, and a curated set of high-resolution Unsplash image assets mapped cleanly to a 5-grid layout."

[PROMPT 3: Component Engineering & Stateful UI]
"Build out modular UI components:
- Global Header with search bar and user menu triggers.
- Sticky Scroll Navigation bar with smooth section anchors.
- Master-Detail Photo Tour featuring scroll-spy synchronization.
- Stateful interactive calendar picker for 2026 dates.
- z-[100] Lightbox modal with active index tracking and keyboard accessibility."

[PROMPT 4: Sub-Agent & Workflow Specialization]
"Create specialized sub-agent configuration files under ai_agent_configs/ covering UI layout, interaction animations, and keyboard accessibility standards to maintain pristine code quality across all modules."

[PROMPT 5: System Architecture & Packaging]
"Design a high-level system architecture diagram mapping the client edge tier (Next.js, Vercel CDN), frontend component layer, local TypeScript contracts, production microservices (FastAPI), and storage layers (PostgreSQL, Redis, AWS S3). Export as a clean PNG and prepare all deliverables into a structured submission package."