# joshcoffey.dev

Personal portfolio for Joshua Coffey — Senior DevOps Engineer & Cloud Architect.

Built with React, Vite, and Tailwind CSS. Hosted on AWS S3 with CloudFront and deployed via GitHub Actions.

## Features

- Terminal-inspired boot sequence animation
- Interactive career timeline with expandable role details
- Certifications section with active/former status
- Impact metrics dashboard with quantified achievements
- Leadership section highlighting team scaling, mentorship, and management
- Full capabilities grid organized by domain
- Responsive design with dark theme

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Hosting**: AWS S3 + CloudFront
- **CI/CD**: GitHub Actions
- **IaC**: Terraform (see `terraform/` directory)

## Local Development

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

## Project Structure

```
src/
├── App.tsx              # Main portfolio component
├── main.tsx             # Entry point
├── index.css            # Tailwind imports + custom styles
public/
└── index.html           # HTML template
terraform/
├── main.tf              # S3 bucket + static hosting
├── cloudfront.tf        # CloudFront distribution + ACM
├── route53.tf           # DNS records
└── outputs.tf           # Useful outputs
.github/workflows/
└── deploy.yml           # CI/CD pipeline
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow which:
1. Installs dependencies and builds the React app
2. Syncs the build output to S3
3. Invalidates the CloudFront cache

## License

MIT
