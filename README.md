# 🌐 joshcoffey.dev

My personal portfolio and website — live at [joshcoffey.dev](https://joshcoffey.dev)

A terminal-inspired portfolio built with React, TypeScript, and Tailwind CSS. Features a boot sequence animation, interactive career timeline, certifications tracker, impact metrics dashboard, and a full capabilities grid. Deployed through a fully automated serverless pipeline to AWS S3 + CloudFront.

> **The story:** I wanted a portfolio that felt like *me* — something that reflected my DevOps background and love for the terminal. The boot sequence animation isn't just eye candy; it's a nod to the infrastructure I work with every day. Every service starts up, every check passes, and then the real content loads.

---

## ✨ Features

- **Terminal boot sequence** — animated startup that feels like watching a server come online
- **Interactive career timeline** — expandable role details with tech stacks and achievements
- **Certifications section** — active and former certs with visual status indicators
- **Impact metrics dashboard** — quantified achievements (uptime %, deploy frequency, cost savings)
- **Leadership section** — team scaling, mentorship, and management highlights
- **Capabilities grid** — organized by domain (Cloud, IaC, CI/CD, Security, etc.)
- **Responsive dark theme** — optimized for readability and visual impact

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS + PostCSS |
| **Hosting** | AWS S3 + CloudFront |
| **IaC** | Terraform (see `terraform/` directory) |
| **CI/CD** | GitHub Actions |

---

## 📁 Project Structure

```
joshcoffey.dev/
├── src/
│   ├── App.tsx              # Main portfolio component
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind imports + custom styles
├── public/
│   └── index.html           # HTML template
├── terraform/
│   ├── main.tf              # S3 bucket + static hosting
│   ├── cloudfront.tf        # CloudFront distribution + ACM
│   ├── route53.tf           # DNS records
│   └── outputs.tf           # Useful outputs
├── .github/workflows/
│   └── deploy.yml           # CI/CD pipeline
├── index.html               # Vite entry HTML
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔄 Deployment

Deployment is fully automated. Push to `main` and GitHub Actions handles:

1. Install dependencies and build the React app
2. Sync the build output to S3
3. Invalidate the CloudFront cache

The AWS infrastructure (S3, CloudFront, Route 53, ACM) is managed by Terraform in the `terraform/` directory.

---

## 🔗 Related Repos

- [**serverless-portfolio**](https://github.com/hotcoffey/serverless-portfolio) — an earlier version of the infrastructure using Python for content generation and a simpler S3-only hosting setup

---

## 📄 License

MIT
