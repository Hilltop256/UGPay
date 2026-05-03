import { useNavigate } from "react-router-dom"
import {
  TrendingUp,
  BarChart3,
  Users,
  CreditCard,
  Smartphone,
  Building2,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
            <span className="text-lg font-bold text-white">U</span>
          </div>
          <span className="text-xl font-bold text-white">UGPAY</span>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          <a href="#features" className="text-sm text-slate-300 transition hover:text-white">Features</a>
          <a href="#how-it-works" className="text-sm text-slate-300 transition hover:text-white">How It Works</a>
          <a href="#municipalities" className="text-sm text-slate-300 transition hover:text-white">For Municipalities</a>
          <a href="#taxpayers" className="text-sm text-slate-300 transition hover:text-white">For Taxpayers</a>
          <a href="#contact" className="text-sm text-slate-300 transition hover:text-white">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="rounded-lg px-4 py-2 text-sm font-medium text-white transition hover:text-blue-400"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/login?cta=landing")}
            className="rounded-lg border border-blue-500 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/10"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 pb-20 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Digitise Revenue Collection for{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Your Municipality
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
          UGPAY helps municipalities and government agencies modernise tax collection, track payments in real-time, and improve compliance across Uganda.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => navigate("/login?cta=landing")}
            className="rounded-xl bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
          >
            Start Free Trial
          </button>
          <button
            onClick={() => navigate("/demo")}
            className="rounded-xl border border-slate-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-slate-700"
          >
            Watch Demo
          </button>
        </div>

        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-slate-700/50 pt-12 sm:grid-cols-4">
          {[
            { value: "50+", label: "Municipalities" },
            { value: "2M+", label: "Citizens Served" },
            { value: "UGX 500B+", label: "Collected" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Real-Time Collections",
      description: "Track every payment as it happens across all channels",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Multi-Channel Payments",
      description: "MTN MoMo, Airtel Money, Bank Transfer, Cash, Agent Banking",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Taxpayer Management",
      description: "Register, profile, and manage taxpayer obligations",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Automated Reconciliation",
      description: "Match payments to obligations automatically",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & Reports",
      description: "Revenue insights, compliance tracking, trend analysis",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "API Integrations",
      description: "Connect to NIRA, mobile money providers, SMS gateways",
    },
  ]

  return (
    <section id="features" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Comprehensive tools to manage every aspect of municipal revenue collection
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      icon: <Building2 className="h-8 w-8" />,
      step: "1",
      title: "Register Your Municipality",
      description: "Sign up, configure tax types, set up payment channels",
    },
    {
      icon: <Users className="h-8 w-8" />,
      step: "2",
      title: "Enrol Taxpayers",
      description: "Import existing records, register new taxpayers via NIN",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      step: "3",
      title: "Start Collecting",
      description: "Citizens pay via mobile money, bank, or agent",
    },
  ]

  return (
    <section id="how-it-works" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Get started in three simple steps
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.step} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-blue-200 md:block" />
              )}
              <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
                <div className="text-blue-600">{step.icon}</div>
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ForMunicipalitiesSection() {
  const benefits = [
    "Multi-tenant architecture",
    "Role-based access control",
    "Audit trail for compliance",
    "Customisable tax types and rates",
    "Real-time dashboards and reports",
  ]

  return (
    <section id="municipalities" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              For Government
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for Government
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Designed from the ground up for municipal revenue collection in Uganda
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-1">
            <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-32 rounded bg-slate-700" />
                  <div className="h-8 w-24 rounded-lg bg-blue-600" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-slate-700/50 p-3">
                    <div className="mb-2 h-3 w-16 rounded bg-slate-600" />
                    <div className="h-5 w-20 rounded bg-blue-500/50" />
                  </div>
                  <div className="rounded-lg bg-slate-700/50 p-3">
                    <div className="mb-2 h-3 w-16 rounded bg-slate-600" />
                    <div className="h-5 w-20 rounded bg-green-500/50" />
                  </div>
                  <div className="rounded-lg bg-slate-700/50 p-3">
                    <div className="mb-2 h-3 w-16 rounded bg-slate-600" />
                    <div className="h-5 w-20 rounded bg-cyan-500/50" />
                  </div>
                </div>
                <div className="rounded-lg bg-slate-700/50 p-4">
                  <div className="mb-3 h-3 w-24 rounded bg-slate-600" />
                  <div className="flex items-end gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 70].map((h, i) => (
                      <div
                        key={i}
                        className="w-full rounded-t bg-blue-500/60"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ForTaxpayersSection() {
  const benefits = [
    "Pay via mobile money from anywhere",
    "Instant SMS receipts",
    "View obligations and balances",
    "Payment history at your fingertips",
  ]

  return (
    <section id="taxpayers" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="mx-auto h-[500px] w-72 rounded-[3rem] border-4 border-slate-800 bg-white p-3 shadow-2xl">
              <div className="h-full rounded-[2rem] bg-slate-50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-4 w-20 rounded bg-slate-300" />
                  <div className="h-6 w-6 rounded-full bg-blue-600" />
                </div>
                <div className="mb-4 rounded-xl bg-green-500 p-4 text-center">
                  <CheckCircle className="mx-auto mb-2 h-8 w-8 text-white" />
                  <p className="text-sm font-semibold text-white">Payment Successful</p>
                  <p className="mt-1 text-xs text-green-100">UGX 150,000</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                    <div>
                      <div className="h-3 w-24 rounded bg-slate-200" />
                      <div className="mt-1 h-2 w-16 rounded bg-slate-100" />
                    </div>
                    <div className="h-4 w-16 rounded bg-slate-200" />
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                    <div>
                      <div className="h-3 w-28 rounded bg-slate-200" />
                      <div className="mt-1 h-2 w-20 rounded bg-slate-100" />
                    </div>
                    <div className="h-4 w-16 rounded bg-slate-200" />
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                    <div>
                      <div className="h-3 w-20 rounded bg-slate-200" />
                      <div className="mt-1 h-2 w-14 rounded bg-slate-100" />
                    </div>
                    <div className="h-4 w-16 rounded bg-slate-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              For Citizens
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Easy Payments for Citizens
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Making it simple for citizens to pay their municipal obligations
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Nakamya",
      role: "Revenue Director, KCCA",
      text: "UGPAY has transformed how we collect revenue. Our compliance rates increased by 40% in the first year.",
      avatar: "SN",
    },
    {
      name: "David Ochen",
      role: "Town Clerk, Wakiso District",
      text: "The automated reconciliation alone has saved our team hundreds of hours. The real-time dashboards give us unprecedented visibility.",
      avatar: "DO",
    },
    {
      name: "Grace Achieng",
      role: "Finance Officer, Jinja City",
      text: "Our citizens love the mobile money integration. Payment complaints dropped by 80% since we implemented UGPAY.",
      avatar: "GA",
    },
  ]

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by Municipal Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Hear from the teams transforming revenue collection across Uganda
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:shadow-lg"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const navigate = useNavigate()

  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Transform Revenue Collection?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          Join 50+ municipalities already digitising their revenue collection with UGPAY
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => navigate("/login?cta=landing")}
            className="rounded-xl bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
          >
            Start Free Trial
          </button>
          <button className="rounded-xl border border-slate-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-slate-700">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                <span className="text-lg font-bold text-white">U</span>
              </div>
              <span className="text-xl font-bold text-white">UGPAY</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Municipal Revenue Collection Platform for the Republic of Uganda
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
              <Mail className="h-4 w-4" />
              <span>info@ugpay.go.ug</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
              <Phone className="h-4 w-4" />
              <span>+256 414 000 000</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4" />
              <span>Kampala, Uganda</span>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Integrations", "Changelog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 transition hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "API Reference", "Guides", "Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 transition hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 transition hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Data Protection", "Compliance"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 transition hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} UGPAY. Republic of Uganda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ForMunicipalitiesSection />
      <ForTaxpayersSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
