'use client'

import { useEffect, useRef, useState } from 'react'

const LOGO_NAV = 'https://assets.cdn.filesafe.space/GgH0MH445CqnQh3RUyO0/media/69b1829357249b136233f68e.jpg'
const LOGO_FOOTER = 'https://assets.cdn.filesafe.space/GgH0MH445CqnQh3RUyO0/media/69b1829357249b57a333f692.jpg'

const MARQUEE_ITEMS = [
  'AI Implementation','OpenClaw Systems','USF Student-Led','Zero Cost to Orgs',
  'Agentic Workflows','Tampa Bay Community','Harvard Certified AI','SmartEdge Technologies',
  'Mission-Driven Impact','Agent Operator Training',
]

const FAQS = [
  {
    q: 'Is there really no cost to my organization?',
    a: 'We fund 100% of the project cost — technology, student labor, and project management. Your only contribution is time from your team to define the problem and provide feedback. We handle everything else, including documentation and training.',
  },
  {
    q: 'What types of organizations do you work with?',
    a: 'We partner with local community organizations solving real problems — nonprofits, urban farms, health and wellness orgs, educational programs, environmental groups, and any mission-driven organization working to strengthen our community. If you serve people, we want to hear from you.',
  },
  {
    q: 'What types of AI solutions can you build?',
    a: 'We specialize in practical, lightweight agentic solutions built on OpenClaw systems: automation workflows, AI chatbots, scheduling tools, data analysis, resource matching, and content generation. We focus on high-impact solutions your team can maintain independently — no custom ML models requiring data scientists.',
  },
  {
    q: 'How long does a project typically take?',
    a: '2–3 months from application to launch. Week 1: scoping & problem definition. Weeks 2–6: build & test with the student team. Weeks 7–8: refinement, documentation & handoff. We move fast because we\'re focused and resourced.',
  },
  {
    q: 'What about the story documentation — do I have control?',
    a: 'Yes, always. We work with you to tell your story authentically. You approve all content before publication. We\'re transparent about the journey — the challenge, the solution, the real results — which builds more credibility than sanitized marketing ever could.',
  },
  {
    q: 'What happens after the project launches?',
    a: 'We include 30 days of post-launch support for bug fixes and tweaks. After that, you own the solution entirely. We provide comprehensive documentation and training so your team is never stranded. If you want to scale further, SmartEdge Technologies is available as a paid partner — completely separate from this initiative.',
  },
]

function openForm(url: string) {
  window.open(url, '_blank', 'width=820,height=920,scrollbars=yes,resizable=yes')
}

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.pageYOffset - 96
  window.scrollTo({ top: y, behavior: 'smooth' })
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navClose = () => {
    setMobileOpen(false)
  }

  const navScroll = (id: string) => {
    navClose()
    scrollToSection(id)
  }

  return (
    <>
      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="mainNav">
        <a className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_NAV} alt="AI for Local Good" width={56} height={56} />
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links${mobileOpen ? ' mobile-open' : ''}`} id="navLinks">
          <li><a onClick={() => navScroll('about')}>About</a></li>
          <li><a onClick={() => navScroll('why-matters')}>Why It Matters</a></li>
          <li><a onClick={() => navScroll('donate')}>Donate</a></li>
          <li><a onClick={() => navScroll('sponsorship')}>Sponsor</a></li>
          <li><a onClick={() => navScroll('intern-applications')}>Join Team</a></li>
          <li><a onClick={() => navScroll('faq')}>FAQ</a></li>
          <li>
            <a
              className="nav-cta"
              onClick={() => { navClose(); openForm('https://api.leadconnectorhq.com/widget/form/YquhcaRbr8h0fT5iabGE') }}
            >
              Apply Now
            </a>
          </li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-circle hero-circle-1" />
        <div className="hero-circle hero-circle-2" />
        <div className="hero-circle hero-circle-3" />

        <div className="hero-body">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              🎓 Tampa Bay · Student-Led · Community-Funded
            </div>

            <h1 className="hero-title">
              Real Students.<br />
              <span className="accent">Real AI Projects.</span><br />
              Real Community Impact.
            </h1>

            <p className="hero-subtitle">
              We train USF students in real agentic AI — not theory — by pairing them with local small
              businesses and nonprofits who need it most. Community-funded. Mentor-guided. 100% free for local orgs.
              <span className="chip">🤖 Powered by OpenClaw AI</span>
            </p>

            <div className="hero-actions">
              <button
                className="btn-hero-primary"
                onClick={() => openForm('https://api.leadconnectorhq.com/widget/form/YquhcaRbr8h0fT5iabGE')}
              >
                Apply for a Free AI Project
                <span className="arrow">→</span>
              </button>
              <button className="btn-hero-outline" onClick={() => scrollToSection('about')}>
                See How It Works
              </button>
            </div>

            <div className="hero-trust">
              <span className="hero-trust-label">Powered by:</span>
              <span className="trust-chip">🎓 USF Student-Led</span>
              <span className="trust-chip">🏛️ Harvard Certified Mentor</span>
              <span className="trust-chip">💚 Free for Local Orgs</span>
              <span className="trust-chip">📖 Agent Operator Trained</span>
              <span className="trust-chip">🏘️ Community-Funded</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card-stack">
              <div className="hero-card hero-card-main">
                <div className="card-icon">🤖</div>
                <div className="card-label">Active Project</div>
                <div className="card-title">Agentic AI Deployment</div>
                <div className="card-body">Local nonprofit saved 18+ hours/week with automated intake &amp; follow-up workflows</div>
                <div className="progress-bar">
                  <div className="progress-fill" />
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop:'8px' }}>
                  <span style={{ fontSize:'11px', color:'var(--text-muted)' }}>Week 6 of 8</span>
                  <span className="card-badge card-badge-green">78% complete</span>
                </div>
              </div>

              <div className="hero-card hero-card-stat hero-card-stat-1">
                <div className="card-stat-num">100<span style={{ color:'var(--sky)', fontSize:'22px' }}>%</span></div>
                <div className="card-stat-label">Free for local orgs</div>
                <span className="card-badge card-badge-blue" style={{ marginTop:'8px' }}>Stays Local</span>
              </div>

              <div className="hero-card hero-card-stat hero-card-stat-2">
                <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'8px' }}>
                  <span style={{ fontSize:'20px' }}>📚</span>
                  <span className="card-badge card-badge-green">Agent Operator</span>
                </div>
                <div className="card-body" style={{ fontSize:'12px' }}>
                  USF students trained in real agentic AI systems — not just theory.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-powered">
          <div className="powered-label">Ecosystem Partners</div>
          <div className="powered-chips">
            <div className="powered-chip">🤖 OpenClaw AI</div>
            <div className="powered-chip">📖 Agent Operator</div>
            <div className="powered-chip">🎓 USF Partnership</div>
            <div className="powered-chip">💼 SmartEdge Technologies</div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div className="marquee-item" key={i}>
              <span className="dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── WIN-WIN ── */}
      <section className="winwin-section" id="about">
        <div className="wrap">
          <div className="reveal">
            <div className="section-eyebrow">The Model</div>
            <h2 className="section-heading">Education Meets<br />Community Impact.</h2>
            <p className="section-sub">
              This isn't a software company. It's a community-funded education model — students learn by doing real
              work, local organizations get free AI help, and the community funds it all.
            </p>
          </div>

          <div className="winwin-grid">
            {[
              { num:'01', icon:'🤝', iconClass:'winwin-icon-blue', title:'Local Orgs Get Free AI Help', body:'Small businesses and nonprofits get a real AI solution built for their specific problem — at zero cost. Our students do the work, mentors ensure quality, and your community sees the impact.' },
              { num:'02', icon:'📚', iconClass:'winwin-icon-green', title:'Students Learn by Doing', body:'USF students don\'t just study AI — they build and deploy it for real clients. Trained on OpenClaw agentic systems with Harvard-certified mentorship, they graduate with a live portfolio, not just a degree.' },
              { num:'03', icon:'🎬', iconClass:'winwin-icon-orange', title:'Every Project Gets Documented', body:'We film, record, and publish every project — showing how real AI gets built for real needs. These stories educate the broader community and inspire other cities to replicate the model.' },
              { num:'04', icon:'🏆', iconClass:'winwin-icon-purple', title:'Donors Fund Real Change', body:'Community donations and project sponsors make everything possible. Every dollar funds student training and local AI deployments — with full transparency on exactly where it goes and what it created.' },
            ].map((card, i) => (
              <div className={`winwin-card reveal reveal-delay-${i + 1}`} key={i}>
                <div className="winwin-number">{card.num}</div>
                <div className={`winwin-icon-wrap ${card.iconClass}`}>{card.icon}</div>
                <div className="winwin-title">{card.title}</div>
                <div className="winwin-body">{card.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="why-section" id="why-matters">
        <div className="wrap">
          <div className="reveal">
            <div className="section-eyebrow">Why It Matters</div>
            <h2 className="section-heading">Why Student-Led AI<br />Education Matters Now.</h2>
            <p className="section-sub">
              Traditional education can't keep up with AI. The only way students learn it is by building it.
              We create that opportunity — locally, affordably, and with real community benefit.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card reveal">
              <div className="stat-eyebrow">AI Adoption</div>
              <div className="stat-num">70<span className="stat-plus">%+</span></div>
              <div className="stat-desc">of organizations expected to adopt AI in daily operations by 2026. It's no longer optional — it's core infrastructure.</div>
            </div>
            <div className="stat-card reveal reveal-delay-1">
              <div className="stat-eyebrow">Job Market Signal</div>
              {/* Fixed: was rendering as 35-5× in GHL due to font rendering of em dash */}
              <div className="stat-num">3<span className="stat-plus">–5×</span></div>
              <div className="stat-desc">AI jobs growing faster than traditional tech roles. Hands-on implementation experience is the differentiator — not theory.</div>
            </div>
            <div className="stat-card reveal reveal-delay-2">
              <div className="stat-eyebrow">Local Economic Impact</div>
              <div className="stat-num">$Bn</div>
              <div className="stat-desc">AI-driven productivity gains for regional economies. Communities that build AI skills locally retain value, talent, and innovation.</div>
            </div>
            <div className="stat-card reveal reveal-delay-3">
              <div className="stat-eyebrow">Talent Gap</div>
              <div className="stat-num">Millions</div>
              <div className="stat-desc">of AI roles unfilled due to lack of practical, applied training. Education hasn't caught up — real projects close the gap.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ── */}
      <section className="involve-section">
        <div className="wrap">
          <div className="reveal" style={{ textAlign:'center' }}>
            <div className="section-eyebrow" style={{ justifyContent:'center' }}>Get Involved</div>
            <h2 className="section-heading">Join the Movement —<br />Three Ways In</h2>
            <p className="section-sub" style={{ margin:'0 auto' }}>
              Whether you're a student hungry for real experience, a local org that needs help, or someone who wants
              to fund the next generation of AI talent — we have a place for you.
            </p>
          </div>

          <div className="involve-grid">
            <div className="involve-card reveal reveal-delay-1">
              <div className="involve-card-accent involve-card-accent-blue" />
              <div className="involve-icon">🎓</div>
              <div className="involve-title">Students: Join the Team</div>
              <div className="involve-body">
                Stop learning from textbooks. Build real agentic AI systems for real Tampa Bay businesses, guided by
                mentors with 20+ years of experience. Graduate with a live portfolio and real client references.
              </div>
              <button className="btn-involve btn-involve-blue" onClick={() => scrollToSection('intern-applications')}>
                View Open Positions →
              </button>
            </div>

            <div className="involve-card reveal reveal-delay-2">
              <div className="involve-card-accent involve-card-accent-green" />
              <div className="involve-icon">🏢</div>
              <div className="involve-title">Local Orgs: Apply Free</div>
              <div className="involve-body">
                Drowning in manual work? We'll send a trained student team to scope, build, and deploy an AI solution
                for your organization — for free. You get the tool, the training, and the story told publicly.
              </div>
              <button className="btn-involve btn-involve-blue" onClick={() => openForm('https://api.leadconnectorhq.com/widget/form/YquhcaRbr8h0fT5iabGE')}>
                Apply Now →
              </button>
            </div>

            <div className="involve-card reveal reveal-delay-3">
              <div className="involve-card-accent involve-card-accent-gold" />
              <div className="involve-icon">💝</div>
              <div className="involve-title">Community: Fund It</div>
              <div className="involve-body">
                This model runs on community support. Your donation funds student stipends, tools, and project costs.
                You'll see exactly which project your money powered and the impact it created.
              </div>
              <button className="btn-involve btn-involve-outline" onClick={() => scrollToSection('donate')}>
                Explore Options →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATION TIERS ── */}
      <section className="donate-section" id="donate">
        <div className="wrap">
          <div className="reveal" style={{ textAlign:'center' }}>
            <div className="section-eyebrow" style={{ justifyContent:'center' }}>Community Support</div>
            <h2 className="section-heading">Support Students.<br />Get AI Education Back.</h2>
            <p className="section-sub" style={{ margin:'0 auto' }}>
              Your donation funds student training and local AI projects. In return, you get hands-on AI education
              — delivered by the same USF students your contribution helped train.
            </p>
          </div>

          <div className="donate-grid">
            {/* Community */}
            <div className="donate-card reveal">
              <div className="donate-header">
                <div className="donate-tier">Community Tier</div>
                <div className="donate-amount"><small>$</small>Any</div>
                <div className="donate-subtitle">Open contribution</div>
              </div>
              <div className="donate-body">
                <ul className="donate-perks">
                  <li><span className="perk-check">✓</span><span>Funds student learning &amp; local SMB impact projects</span></li>
                  <li><span className="perk-check">✓</span><span>Named supporter recognition in impact reports</span></li>
                  <li><span className="perk-check">✓</span><span>Our genuine gratitude for helping build the future</span></li>
                </ul>
                <a href="https://link.fastpaydirect.com/payment-link/69bac3b8c1b7344f595a5a37" target="_blank" rel="noreferrer" className="btn-donate btn-donate-outline">Donate Freely</a>
              </div>
            </div>

            {/* Learner */}
            <div className="donate-card reveal reveal-delay-1">
              <div className="donate-header">
                <div className="donate-tier">Learner Tier</div>
                <div className="donate-amount"><small>$</small>50</div>
                <div className="donate-subtitle">AI Introduction Session</div>
              </div>
              <div className="donate-body">
                <ul className="donate-perks">
                  <li><span className="perk-check perk-check-blue">✓</span><span>30-minute AI introduction session</span></li>
                  <li><span className="perk-check perk-check-blue">✓</span><span>Delivered by a trained USF student</span></li>
                  <li><span className="perk-check perk-check-blue">✓</span><span>Practical overview of AI tools for your business or career</span></li>
                </ul>
                <a href="https://link.fastpaydirect.com/payment-link/69bacd6ff35c540e148334e5" target="_blank" rel="noreferrer" className="btn-donate btn-donate-solid">Book for $50</a>
              </div>
            </div>

            {/* Builder - featured */}
            <div className="donate-card featured reveal reveal-delay-2">
              <div className="donate-featured-tag">Most Popular</div>
              <div className="donate-header">
                <div className="donate-tier">Builder Tier</div>
                <div className="donate-amount"><small>$</small>125</div>
                <div className="donate-subtitle">AI Deep Dive + Book</div>
              </div>
              <div className="donate-body">
                <ul className="donate-perks">
                  <li><span className="perk-check perk-check-blue">✓</span><span>60-minute AI introduction session</span></li>
                  <li><span className="perk-check perk-check-blue">✓</span><span>Delivered by a trained USF student</span></li>
                  <li><span className="perk-check perk-check-blue">✓</span><span>Free <em>Agent Operator</em> book — the agentic AI playbook</span></li>
                </ul>
                <a href="https://link.fastpaydirect.com/payment-link/69bacdd7c1b7344f595a5a7f" target="_blank" rel="noreferrer" className="btn-donate btn-donate-solid">Book for $125</a>
              </div>
            </div>

            {/* Executive */}
            <div className="donate-card reveal reveal-delay-3">
              <div className="donate-header">
                <div className="donate-tier">Executive Tier</div>
                <div className="donate-amount"><small>$</small>250</div>
                <div className="donate-subtitle">CEO AI Audit + Book</div>
              </div>
              <div className="donate-body">
                <ul className="donate-perks">
                  <li><span className="perk-check perk-check-blue">✓</span><span>60-minute 1:1 AI audit with Christina Dills, CEO of SmartEdge Technologies</span></li>
                  <li><span className="perk-check perk-check-blue">✓</span><span>Custom AI roadmap for your business or organization</span></li>
                  <li><span className="perk-check perk-check-blue">✓</span><span>Free <em>Agent Operator</em> book included</span></li>
                </ul>
                <a href="https://link.fastpaydirect.com/payment-link/69bace0fc1b7344f595a5a81" target="_blank" rel="noreferrer" className="btn-donate btn-donate-solid">Book for $250</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSOR ── */}
      <section className="sponsor-section" id="sponsorship">
        <div className="wrap">
          <div className="reveal">
            <div className="section-eyebrow">Corporate Sponsorship</div>
            <h2 className="section-heading">Sponsor a Real<br />AI Project</h2>
            <p className="section-sub">
              Fund a complete AI implementation for a local organization. Measurable impact.
              Transparent reporting. Genuine community recognition.
            </p>
          </div>

          <div className="sponsor-grid">
            <div className="sponsor-card reveal reveal-delay-1">
              <div className="section-eyebrow" style={{ marginBottom:'0' }}>Project Sponsor</div>
              <div className="sponsor-amount">$2K<span>–</span>$7K</div>
              <p className="sponsor-desc">
                Fund a complete AI implementation project for a local organization. You receive recognition,
                PR opportunities, and detailed impact reports showing exactly how your investment created community
                value. You'll see the problem, the solution, and the measurable outcome.
              </p>
              <button className="btn-involve btn-involve-blue" onClick={() => openForm('https://api.leadconnectorhq.com/widget/form/fV1gOeZy79U65goIJYDz')}>
                Become a Project Sponsor →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section" id="faq">
        <div className="wrap">
          <div className="reveal" style={{ textAlign:'center' }}>
            <div className="section-eyebrow" style={{ justifyContent:'center' }}>FAQ</div>
            <h2 className="section-heading">Common Questions</h2>
          </div>

          <div className="faq-grid">
            {FAQS.map((faq, i) => (
              <div className={`faq-item reveal${openFaq === i ? ' open' : ''}`} key={i}>
                <button
                  className="faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className="faq-chevron">▾</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERN APPLICATIONS ── */}
      <section className="intern-section" id="intern-applications">
        <div className="wrap">
          <div className="reveal">
            <div className="section-eyebrow">Open Positions</div>
            <h2 className="section-heading">Join Our Team of<br />Student Innovators</h2>
            <p className="section-sub">
              Build real AI systems. Work with real clients. Make a real difference — and build a portfolio
              that gets you hired.
            </p>
          </div>

          <div className="intern-cards">
            <div className="intern-card reveal reveal-delay-1">
              <div className="intern-role-tag">🔗 Community Engagement</div>
              <div className="intern-title">Community Partnership Coordinator</div>
              <div className="intern-body">
                Connect with local organizations, understand their challenges, and help scope projects that will
                transform their operations. Perfect for students interested in community engagement, business
                analysis, and project management.
              </div>
              <button className="btn-involve btn-involve-blue" onClick={() => openForm('https://api.leadconnectorhq.com/widget/form/lcHQ9vHMy8YKNLzks464')}>
                Apply for This Role →
              </button>
            </div>

            <div className="intern-card reveal reveal-delay-2">
              <div className="intern-role-tag">📊 Analysis &amp; Strategy</div>
              <div className="intern-title">Business Process Analyst</div>
              <div className="intern-body">
                Analyze workflows, identify inefficiencies, and design AI solutions that solve real problems
                using OpenClaw agentic systems. Ideal for students with analytical minds who love understanding
                how systems work.
              </div>
              <button className="btn-involve btn-involve-blue" onClick={() => openForm('https://api.leadconnectorhq.com/widget/form/jNSh89utNmtiaoMkjDdF')}>
                Apply for This Role →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta-section">
        <div className="wrap">
          <div className="cta-inner reveal">
            <h2 className="cta-title">Train Students.<br />Help Local Orgs.<br />Build Community.</h2>
            <p className="cta-sub">
              This is AI education the way it should work — students learn by solving real problems, local orgs
              get free help, and the community funds the whole thing together.
            </p>
            <div className="cta-buttons">
              <button className="btn-cta-gold" onClick={() => openForm('https://api.leadconnectorhq.com/widget/form/YquhcaRbr8h0fT5iabGE')}>
                Apply Now — It's Free
              </button>
              <button className="btn-cta-ghost" onClick={() => scrollToSection('about')}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO_FOOTER} alt="AI for Local Good" className="footer-logo" />
              <p className="footer-tagline">
                Advancing people-first AI through local implementation, student education, and transparent
                community impact.
              </p>
              <div className="footer-social">
                <a href="https://www.linkedin.com/company/ai-for-good-u-s/?viewAsMember=true" target="_blank" rel="noreferrer" title="LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://x.com/AIForGood_US" target="_blank" rel="noreferrer" title="X">
                  <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.instagram.com/aiforgood.us/" target="_blank" rel="noreferrer" title="Instagram">
                  <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="https://www.facebook.com/share/1AELPghGqk/?mibextid=wwXIfr" target="_blank" rel="noreferrer" title="Facebook">
                  <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.youtube.com/@AIForGood.U.S" target="_blank" rel="noreferrer" title="YouTube">
                  <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li><a onClick={() => scrollToSection('about')}>Our Mission</a></li>
                <li><a onClick={() => scrollToSection('about')}>How It Works</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Learning Hub</a></li>
                <li><a href="https://agentoperator.co/the-agent-operator-page" target="_blank" rel="noreferrer">Agent Operator Book</a></li>
                <li><a href="#">Podcast</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Get Involved</h4>
              <ul>
                <li><a onClick={() => openForm('https://api.leadconnectorhq.com/widget/form/YquhcaRbr8h0fT5iabGE')}>Apply for Project</a></li>
                <li><a onClick={() => scrollToSection('sponsorship')}>Become a Sponsor</a></li>
                <li><a onClick={() => scrollToSection('intern-applications')}>Join as Intern</a></li>
                <li><a onClick={() => scrollToSection('donate')}>Donate</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">© 2025 AI for Local Good (Tampa Bay &amp; Surrounding Area). All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="https://aiforgood.us" target="_blank" rel="noreferrer">AIforGood.us</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
