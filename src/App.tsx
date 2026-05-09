import { useState, useEffect } from 'react'
import {
  Shield, Lock, Clock, ChevronRight, DollarSign, Activity,
  Users, Zap, TrendingUp, Server, Layers, Globe, ExternalLink,
  FileText, MapPin, Target, BookOpen, Crown, Compass
} from 'lucide-react'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("init");
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [bootComplete, setBootComplete] = useState(false);
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const sections = ["init", "certs", "timeline", "impact", "leadership", "stack", "connect"];

  useEffect(() => {
    const bootSequence = [
      { text: "> init_solutions_architect --verbose", delay: 0 },
      { text: "[OK] Primary_Lens: AWS_Well_Architected", delay: 400 },
      { text: "[OK] AI_Stack: Bedrock + SageMaker + Agents", delay: 700 },
      { text: "[OK] Delivery: IaC + CDK + Pipelines", delay: 1000 },
      { text: "[OK] Security: NSA_Background + PCI/DSS + SOC", delay: 1300 },
      { text: "[OK] Scale: 3→40_engineers + 200+_accounts", delay: 1600 },
      { text: "", delay: 1900 },
      { text: "> load_profile --full", delay: 2100 },
      { text: "[OK] Profile loaded. 10+ years. 6 roles. Zero downtime.", delay: 2500 },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];
    bootSequence.forEach((item) => {
      timeouts.push(setTimeout(() => {
        setTerminalLines(prev => [...prev, item.text]);
      }, item.delay));
    });

    timeouts.push(setTimeout(() => {
      setBootComplete(true);
    }, 3000));

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const certifications = [
    { name: "AWS Certified Solutions Architect Associate", date: "Jan 2026", status: "active" },
    { name: "HashiCorp Certified: Terraform Associate (003)", date: "Oct 2024 – Oct 2026", status: "active" },
    { name: "GCP Professional Cloud Architect", date: "Former", status: "former" },
    { name: "GCP Associate Cloud Engineer", date: "Former", status: "former" },
    { name: "CCNP Security", date: "Former", status: "former" },
    { name: "Certified Ethical Hacker", date: "Former", status: "former" },
  ];

  const careerTimeline = [
    {
      period: "Oct 2025 – Present",
      title: "Sr. Cloud DevOps Engineer",
      company: "Innovative Solutions",
      type: "current",
      highlights: [
        "Spearheading agentic AI-powered internal tooling and automation platforms",
        "Principal Cloud Architect — owning end-to-end AWS solution delivery from discovery to production",
        "Authoring Statements of Work and leading discovery workshops for major accounts",
        "Mentoring NOC engineers on AWS modernization and agentic AI tooling"
      ],
      tech: ["SageMaker", "Athena", "Glue", "Lambda", "IAM", "KMS", "Macie", "Azure Entra ID", "Terraform", "Python", "Claude/Cursor", "Docker", "K8s"]
    },
    {
      period: "Apr 2022 – Aug 2025",
      title: "Sr. Cloud DevOps Engineer",
      company: "Southwest Airlines",
      type: "past",
      highlights: [
        "Led platform modernization converting legacy Stacker/CloudFormation to Terraform/TerraGrunt",
        "Evaluated and recommended AI and observability platforms adopted company-wide",
        "Coached multiple development teams on cloud-native practices, accelerating migration timelines"
      ],
      tech: ["EKS", "Lambda", "DynamoDB", "API Gateway", "Kafka", "TerraGrunt", "Python", "Serverless Framework", "Docker"]
    },
    {
      period: "Jan 2021 – Apr 2022",
      title: "Cloud Architect",
      company: "Rackspace",
      type: "past",
      highlights: [
        "Scaled Cloud Migration team from 3 to 40+ engineers while managing client relationships",
        "Led enterprise cloud migrations delivering PCI/DSS and SOC compliant AWS environments",
        "Designed proprietary internal cloud platform — 25% faster deployments, higher customer satisfaction",
        "Reduced security vulnerabilities by 15% through secure architecture and IAM hardening"
      ],
      tech: ["AWS", "Terraform", "CloudFormation", "Runway/Stacker", "Python", "Docker", "Jenkins", "GitLab", "Serverless Framework"]
    },
    {
      period: "Jan 2019 – Dec 2020",
      title: "Cloud Systems Developer",
      company: "Cloudreach",
      type: "past",
      highlights: [
        "Spearheaded cloud-native application development and large-scale migrations on AWS and GCP",
        "Conducted IAM audits across 200+ AWS accounts for financial clients — 20% security risk reduction",
        "Implemented CI/CD pipelines with CodeBuild/CodePipeline — 30% faster delivery cycles"
      ],
      tech: ["AWS", "GCP", "Terraform", "Kubernetes", "Python", "GitLab", "CodePipeline", "CodeBuild"]
    },
    {
      period: "Sep 2016 – Dec 2018",
      title: "Lead Systems Engineer",
      company: "WellaWare Holdings",
      type: "past",
      highlights: [
        "Directed all cloud and IT operations as acting Director of Technology",
        "Executed zero-downtime Rackspace → AWS migration — 99.9% uptime for Java microservices",
        "Reduced cloud costs by 35% through rightsizing, automation, and optimization",
        "Implemented centralized monitoring (Datadog + Logz.io) across 50+ servers"
      ],
      tech: ["AWS", "Terraform", "SaltStack", "Docker", "Kubernetes", "Datadog", "Logz.io"]
    },
    {
      period: "Jun 2015 – Sep 2016",
      title: "Computer Network Operator",
      company: "National Security Agency",
      type: "nsa",
      highlights: [
        "Operating system and network analysis",
        "Intrusion detection and incident response",
        "Penetration testing and vulnerability analysis",
        "Malicious code analysis and network forensics",
        "Low level protocol analysis"
      ],
      tech: ["Windows", "UNIX", "Linux", "Packet Analysis", "Forensics"]
    },
    {
      period: "Oct 2011 – Jun 2015",
      title: "Application Delivery Engineer",
      company: "Rackspace",
      type: "past",
      highlights: [
        "Designed network security infrastructure for Rackspace's largest enterprise clients",
        "Managed VPNs, load balancer rules, and core/distribution/access layer switching",
        "Foundation in Cisco ASA, Catalyst Switches, Brocade, and F5 Big-IP"
      ],
      tech: ["Cisco ASA", "Catalyst Switches", "Brocade", "F5 Big-IP"]
    }
  ];

  const impactMetrics = [
    { label: "Cost Reduction", value: "35%", detail: "WellaWare — rightsizing, automation, optimization", icon: DollarSign },
    { label: "Uptime Achieved", value: "99.9%", detail: "Zero-downtime Rackspace → AWS migration", icon: Activity },
    { label: "Security Risk Reduced", value: "20%", detail: "IAM audits across 200+ AWS accounts", icon: Shield },
    { label: "Team Scaled", value: "3→40+", detail: "Rackspace Cloud Migration team growth", icon: Users },
    { label: "Delivery Accelerated", value: "30%", detail: "CI/CD pipelines at Cloudreach", icon: Zap },
    { label: "Vulnerabilities Reduced", value: "15%", detail: "Secure architecture + IAM hardening at Rackspace", icon: Lock },
    { label: "Deploy Performance", value: "+25%", detail: "Proprietary cloud platform optimization", icon: TrendingUp },
    { label: "Servers Monitored", value: "50+", detail: "Datadog + Logz.io centralized observability", icon: Server },
  ];

  const leadershipHighlights = [
    {
      title: "Team Scaling & Building",
      detail: "Scaled Rackspace Cloud Migration team from 3 to 40+ engineers — hiring, onboarding, and establishing delivery standards while managing client relationships and quality across the growing team.",
      icon: Users,
      context: "Rackspace · 2021–2022"
    },
    {
      title: "Engineering Mentorship",
      detail: "Mentored junior and mid-level NOC engineers at Innovative Solutions on AWS modernization, agentic AI tooling, and cloud best practices for large enterprise accounts. Coached multiple development teams at Southwest Airlines on cloud-native practices, accelerating migration timelines and raising platform quality.",
      icon: Target,
      context: "Innovative Solutions & Southwest Airlines"
    },
    {
      title: "Training Program Leadership",
      detail: "Led training programs on AWS modernization and agentic AI tooling for large enterprise accounts. Established internal knowledge-sharing practices that elevated team capabilities across the organization.",
      icon: BookOpen,
      context: "Innovative Solutions · 2025–Present"
    },
    {
      title: "Acting Director of Technology",
      detail: "Directed all cloud and IT operations at WellaWare Holdings as acting Director of Technology — owning strategy, budget, and execution for the full technology stack while leading the team through a zero-downtime cloud migration.",
      icon: Crown,
      context: "WellaWare Holdings · 2016–2018"
    },
    {
      title: "End-to-End Solution Ownership",
      detail: "Own the full delivery lifecycle: leading discovery workshops, gathering requirements, authoring Statements of Work (SOWs), and delivering secure, scalable architectures from concept to production. Bridging stakeholder needs with engineering execution.",
      icon: FileText,
      context: "Innovative Solutions · 2025–Present"
    },
    {
      title: "Technical Leadership & Influence",
      detail: "Evaluated and recommended AI and observability platforms at Southwest Airlines that were ultimately adopted company-wide. Provided technical leadership during large-scale AWS modernization and AI service evaluation initiatives across the organization.",
      icon: Compass,
      context: "Southwest Airlines · 2022–2025"
    }
  ];

  const techStack: Record<string, string[]> = {
    "Cloud Platforms": ["AWS", "GCP", "Azure"],
    "Compute": ["EC2", "EKS", "Lambda", "ECS", "Fargate"],
    "AI / ML": ["SageMaker", "Bedrock", "Claude", "RAG/Agents", "MLOps"],
    "Data & Analytics": ["Athena", "Glue", "DynamoDB", "RDS", "OpenSearch", "Kafka"],
    "Security & Identity": ["IAM", "KMS", "Macie", "WAF", "GuardDuty", "Azure Entra ID"],
    "IaC & Delivery": ["Terraform", "TerraGrunt", "CDK", "CloudFormation", "Serverless Framework"],
    "CI/CD": ["GitHub Actions", "CodePipeline", "CodeBuild", "Jenkins", "GitLab CI"],
    "Containers & Orchestration": ["Docker", "Kubernetes", "SaltStack"],
    "Networking": ["VPC", "CloudFront", "Route 53", "ALB/NLB", "Cisco ASA", "F5 Big-IP"],
    "Observability": ["CloudWatch", "Datadog", "Logz.io", "X-Ray"],
    "Languages": ["Python", "HCL", "Bash"],
    "Compliance": ["PCI/DSS", "SOC", "Well-Architected"],
  };

  const renderNav = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-emerald-500/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-sm font-bold">$</span>
          <span className="text-white font-mono text-sm">joshcoffey.dev</span>
        </div>
        <div className="flex items-center gap-1 overflow-x-auto">
          {sections.map(section => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all whitespace-nowrap ${
                activeSection === section
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                  : "text-gray-400 hover:text-emerald-400 hover:bg-gray-800/50"
              }`}
            >
              {section === "init" ? "~" : section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderHero = () => (
    <div className="space-y-6">
      <div className="bg-gray-900/80 rounded-lg border border-emerald-500/20 p-6 font-mono text-sm">
        {terminalLines.map((line, i) => (
          <div key={i} className={`${line.startsWith("[OK]") ? "text-emerald-400" : line.startsWith(">") ? "text-emerald-300" : "text-gray-500"}`}>
            {line || "\u00A0"}
          </div>
        ))}
        {!bootComplete && <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1" />}
      </div>

      {bootComplete && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-gray-900/80 rounded-lg border border-emerald-500/20 p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Joshua Coffey
            </h1>
            <p className="text-emerald-400 font-mono text-lg mb-4">
              Senior DevOps Engineer &amp; Cloud Architect
            </p>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              I translate strategy into AWS reference architectures — with heavy emphasis on generative AI, agents, and MLOps — from Well-Architected reviews and cost models through workshops, proofs of concept, and production cutovers. 10+ years spanning NSA network operations, enterprise migrations, and agentic AI platforms.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">AWS Premier Partner</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30">NSA Background</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30">Agentic AI</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30">PCI/DSS · SOC</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gray-900/60 rounded-lg border border-gray-700/50 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">10+</div>
              <div className="text-xs text-gray-400 mt-1">Years Experience</div>
            </div>
            <div className="bg-gray-900/60 rounded-lg border border-gray-700/50 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">6</div>
              <div className="text-xs text-gray-400 mt-1">Certifications</div>
            </div>
            <div className="bg-gray-900/60 rounded-lg border border-gray-700/50 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">200+</div>
              <div className="text-xs text-gray-400 mt-1">Accounts Audited</div>
            </div>
            <div className="bg-gray-900/60 rounded-lg border border-gray-700/50 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">3→40+</div>
              <div className="text-xs text-gray-400 mt-1">Team Scaled</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderCerts = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Shield className="h-5 w-5 text-emerald-400" />
        <h2 className="text-xl font-bold text-white font-mono">certifications</h2>
      </div>
      <div className="grid gap-3">
        {certifications.map((cert, i) => (
          <div key={i} className={`rounded-lg border p-4 flex items-center justify-between ${
            cert.status === "active"
              ? "bg-emerald-500/5 border-emerald-500/30"
              : "bg-gray-900/40 border-gray-700/40"
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${
                cert.status === "active" ? "bg-emerald-400" : "bg-gray-500"
              }`} />
              <div>
                <div className={`font-mono text-sm ${cert.status === "active" ? "text-white" : "text-gray-400"}`}>
                  {cert.name}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{cert.date}</div>
              </div>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-xs font-mono border ${
              cert.status === "active"
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                : "bg-gray-700/30 text-gray-500 border-gray-600/30"
            }`}>
              {cert.status}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-gray-900/60 rounded-lg border border-amber-500/20 p-4 mt-4">
        <div className="flex items-center gap-2 mb-2">
          <Lock className="h-4 w-4 text-amber-400" />
          <span className="font-mono text-sm text-amber-400">security_foundation</span>
        </div>
        <p className="text-gray-400 text-sm">
          Former CCNP Security and Certified Ethical Hacker with NSA Computer Network Operator experience — penetration testing, intrusion detection, vulnerability analysis, and network forensics. This background informs every architecture decision I make.
        </p>
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="h-5 w-5 text-emerald-400" />
        <h2 className="text-xl font-bold text-white font-mono">career_timeline</h2>
      </div>
      <div className="space-y-3">
        {careerTimeline.map((role, i) => (
          <div
            key={i}
            onClick={() => setSelectedExp(selectedExp === i ? null : i)}
            className={`rounded-lg border cursor-pointer transition-all ${
              selectedExp === i
                ? role.type === "nsa"
                  ? "bg-amber-500/5 border-amber-500/40"
                  : role.type === "current"
                  ? "bg-emerald-500/5 border-emerald-500/40"
                  : "bg-gray-800/60 border-gray-600/40"
                : "bg-gray-900/40 border-gray-700/30 hover:border-gray-600/50"
            }`}
          >
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    role.type === "current" ? "bg-emerald-400 animate-pulse" :
                    role.type === "nsa" ? "bg-amber-400" :
                    "bg-gray-500"
                  }`} />
                  <div>
                    <div className="font-mono text-sm text-white">{role.title}</div>
                    <div className="text-xs text-gray-400">{role.company} · {role.period}</div>
                  </div>
                </div>
                <ChevronRight className={`h-4 w-4 text-gray-500 transition-transform ${selectedExp === i ? "rotate-90" : ""}`} />
              </div>

              {selectedExp === i && (
                <div className="mt-4 space-y-3 pl-5 border-l-2 border-gray-700/50">
                  {role.highlights.map((h, j) => (
                    <div key={j} className="text-sm text-gray-300 leading-relaxed">
                      <span className="text-emerald-500 mr-2">→</span>{h}
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {role.tech.map((t, k) => (
                      <span key={k} className="px-2 py-0.5 bg-gray-800/80 border border-gray-700/50 rounded text-xs font-mono text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderImpact = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="h-5 w-5 text-emerald-400" />
        <h2 className="text-xl font-bold text-white font-mono">impact_metrics</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {impactMetrics.map((metric, i) => {
          const IconComp = metric.icon;
          return (
            <div key={i} className="bg-gray-900/60 rounded-lg border border-gray-700/40 p-4 hover:border-emerald-500/30 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-2xl font-bold text-emerald-400 font-mono">{metric.value}</div>
                  <div className="text-sm text-white mt-1">{metric.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{metric.detail}</div>
                </div>
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <IconComp className="h-5 w-5 text-emerald-400" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderLeadership = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Crown className="h-5 w-5 text-emerald-400" />
        <h2 className="text-xl font-bold text-white font-mono">leadership</h2>
      </div>
      <div className="space-y-3">
        {leadershipHighlights.map((item, i) => {
          const IconComp = item.icon;
          return (
            <div key={i} className="bg-gray-900/60 rounded-lg border border-gray-700/40 p-5 hover:border-emerald-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-emerald-500/10 rounded-lg shrink-0">
                  <IconComp className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-mono text-sm text-white">{item.title}</div>
                    <div className="text-xs text-gray-500 shrink-0">{item.context}</div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderStack = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Layers className="h-5 w-5 text-emerald-400" />
        <h2 className="text-xl font-bold text-white font-mono">capabilities_grid</h2>
      </div>
      <div className="space-y-4">
        {Object.entries(techStack).map(([category, items], i) => (
          <div key={i} className="bg-gray-900/40 rounded-lg border border-gray-700/30 p-4">
            <div className="font-mono text-sm text-emerald-400 mb-3">{category}</div>
            <div className="flex flex-wrap gap-2">
              {items.map((item, j) => (
                <span key={j} className="px-3 py-1.5 bg-gray-800/80 border border-gray-700/50 rounded-md text-xs font-mono text-gray-300 hover:border-emerald-500/40 hover:text-emerald-400 transition-all cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderConnect = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Globe className="h-5 w-5 text-emerald-400" />
        <h2 className="text-xl font-bold text-white font-mono">initialize_connection</h2>
      </div>
      <div className="grid gap-3">
        <a href="https://www.linkedin.com/in/Joshua-R-Coffey/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/60 rounded-lg border border-blue-500/30 p-4 flex items-center gap-4 hover:border-blue-500/60 transition-all group">
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <Users className="h-6 w-6 text-blue-400" />
          </div>
          <div>
            <div className="text-white font-mono text-sm group-hover:text-blue-400 transition-colors">LinkedIn</div>
            <div className="text-xs text-gray-500">/in/Joshua-R-Coffey</div>
          </div>
          <ExternalLink className="h-4 w-4 text-gray-600 ml-auto group-hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://github.com/hotcoffey" target="_blank" rel="noopener noreferrer" className="bg-gray-900/60 rounded-lg border border-gray-500/30 p-4 flex items-center gap-4 hover:border-gray-400/60 transition-all group">
          <div className="p-3 bg-gray-500/10 rounded-lg">
            <FileText className="h-6 w-6 text-gray-400" />
          </div>
          <div>
            <div className="text-white font-mono text-sm group-hover:text-gray-300 transition-colors">GitHub</div>
            <div className="text-xs text-gray-500">@hotcoffey</div>
          </div>
          <ExternalLink className="h-4 w-4 text-gray-600 ml-auto group-hover:text-gray-400 transition-colors" />
        </a>
        <div className="bg-gray-900/60 rounded-lg border border-gray-700/30 p-4 flex items-center gap-4">
          <div className="p-3 bg-gray-500/10 rounded-lg">
            <MapPin className="h-6 w-6 text-gray-400" />
          </div>
          <div>
            <div className="text-white font-mono text-sm">Location</div>
            <div className="text-xs text-gray-500">Tyler, TX · Remote</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900/40 rounded-lg border border-emerald-500/20 p-4 mt-4">
        <div className="font-mono text-xs text-emerald-400 mb-2">current_focus</div>
        <p className="text-gray-300 text-sm italic">
          "Helping organizations ship responsible, measurable AI on AWS — from first architecture diagram to governed production inference."
        </p>
      </div>
    </div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case "init": return renderHero();
      case "certs": return renderCerts();
      case "timeline": return renderTimeline();
      case "impact": return renderImpact();
      case "leadership": return renderLeadership();
      case "stack": return renderStack();
      case "connect": return renderConnect();
      default: return renderHero();
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {renderNav()}
      <div className="max-w-4xl mx-auto px-4 pt-20 pb-12">
        {renderSection()}
      </div>
      <footer className="border-t border-gray-800/50 py-6 text-center">
        <div className="font-mono text-xs text-gray-600">
          © {new Date().getFullYear()} Joshua Coffey · Built with React + AWS · <a href="https://github.com/hotcoffey/joshcoffey.dev" className="text-emerald-500/60 hover:text-emerald-400 transition-colors">source</a>
        </div>
      </footer>
    </div>
  );
}
