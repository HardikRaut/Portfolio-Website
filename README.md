# Hardik Raut — Independent Deep-Tech Builder Portfolio & Digital Laboratory

> "I build machines for problems that don't have easy answers."

A high-performance, editorial, and scientifically grounded personal portfolio and digital laboratory for **Hardik Raut**. Designed to showcase experimental hardware across **Space Systems, Propulsion, Robotics, Electronics, and Manufacturing**.

---

## 🔬 System Architecture & Aesthetics

- **Visual Identity**: Industrial + Scientific + Editorial + Engineering Notebook.
- **Palette**: Deep dark obsidian/charcoal (`#08090d`), technical slate borders (`#1c222d`), cyan telemetry accents (`#00e5ff`), amber markers (`#f59e0b`), and subtle measurement grid crosshairs.
- **Typography**: `Space Grotesk` (Headings) + `Inter` (Body) + `JetBrains Mono` (Technical specifications, coordinates, telemetry).
- **Zero-Build Step Architecture**: Written in standard ES Modules and Vanilla CSS — zero complex build dependencies or node compilation needed. Runs immediately in any modern browser, static host, or local preview.

---

## 📁 Repository Structure

```
├── index.html                 # Main entry point with SEO & OpenGraph meta tags
├── css/
│   └── main.css               # Design system, laboratory dark theme, blueprint styling
├── js/
│   ├── app.js                 # Application bootstrapper
│   ├── router.js              # Hash-based client router (#/, #/projects, etc.)
│   ├── store.js               # Reactive store with localStorage persistence & auth
│   ├── data.js                # Initial seed database (all 8 projects, lab notes, etc.)
│   ├── components/
│   │   ├── schematics.js      # Precision SVG blueprints & schematics
│   │   └── lightbox.js        # Lightbox modal, toast notifications, clipboard
│   └── pages/
│       ├── home.js            # Editorial hero, disciplines, featured projects, workflow
│       ├── projects.js        # Searchable & filterable project catalog
│       ├── projectDetail.js   # Deep case studies with failure logs & specs table
│       ├── research.js        # Manuscripts, patents, conference presentations
│       ├── lab.js             # Public engineering notebook with experimental logs
│       ├── about.js           # Personal manifesto, workshop toolbox, skills matrix
│       ├── resume.js          # Print-ready engineering dossier & CV
│       ├── contact.js         # Direct channels & interactive inquiry dispatcher
│       ├── admin.js           # Private CMS portal (CRUD, failure logs, data export)
│       └── notFound.js        # 404 "Lost in the lab" page
├── Discription.md             # Original requirements specification
└── README.md                  # Technical documentation and deployment guide
```

---

## 🚀 How to Run Locally

You can run this website instantly using any static server or by simply opening `index.html` in a web browser:

### Option 1: Python HTTP Server
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000`.

### Option 2: VS Code / IDE Live Server
Right-click `index.html` and select **"Open with Live Server"**.

### Option 3: Node `serve` or `npx http-server`
```bash
npx serve .
```

---

## 🛠️ Content Management System (Admin Portal)

Navigate to `#/admin` on the website.

- **Default Passcode**: `hardik2026`
- **Capabilities**:
  - **Create / Edit / Delete Projects**: Add new physical case studies, update technical specifications, and document **"What Failed / Lessons Learned"**.
  - **Lab Notes**: Add new experimental observations, telemetry readings, and mitigation steps.
  - **Live Workbench**: Update the "Currently Building" and "Currently Thinking About" real-time status banners on the homepage.
  - **Data Persistence**: 1-click JSON backup export and restore.

---

## 🌐 Free 1-Click Deployment

### GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`. Click **Save**.
4. Your website is live worldwide in seconds!

### Netlify / Vercel
- Drag and drop the folder directly into the Netlify or Vercel dashboard. No build command required; publish directory is `./`.

---

## 📄 License & Attribution
© 2026 Hardik Raut. All engineering projects, schematics, and case studies original.
