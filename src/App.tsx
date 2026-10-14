import { useMemo, useState, type ReactNode, type SVGProps } from "react";

type Page = "home" | "explore" | "certificates" | "packages";
type IconName =
  | "home"
  | "compass"
  | "certificate"
  | "package"
  | "arrow"
  | "play"
  | "clock"
  | "star"
  | "check"
  | "sparkle"
  | "search"
  | "book"
  | "user"
  | "close";

const topics = [
  "Design",
  "Technology",
  "Business",
  "Data science",
  "Marketing",
  "Content creation",
];

const topicDetails: Record<
  string,
  { label: string; color: string; description: string; count: string }
> = {
  Design: {
    label: "Design",
    color: "coral",
    description: "Create thoughtful, useful digital experiences.",
    count: "128 courses",
  },
  Technology: {
    label: "Technology",
    color: "blue",
    description: "Build products with today's most useful tools.",
    count: "214 courses",
  },
  Business: {
    label: "Business",
    color: "lime",
    description: "Grow teams, strategy, and leadership skills.",
    count: "96 courses",
  },
  "Data science": {
    label: "Data science",
    color: "lavender",
    description: "Turn complex data into clear decisions.",
    count: "142 courses",
  },
  Marketing: {
    label: "Marketing",
    color: "yellow",
    description: "Connect ideas with the people who need them.",
    count: "84 courses",
  },
  "Content creation": {
    label: "Content creation",
    color: "aqua",
    description: "Tell better stories across every channel.",
    count: "73 courses",
  },
};

const courseNames: Record<string, string[]> = {
  Design: [
    "Design fundamentals",
    "UI/UX principles",
    "Figma for professionals",
    "Motion & interaction",
  ],
  Technology: [
    "Web development essentials",
    "React in practice",
    "Cloud fundamentals",
    "Applied AI workflows",
  ],
  Business: [
    "Business strategy",
    "Powerful communication",
    "Product management",
    "Leadership essentials",
  ],
  "Data science": [
    "Data analysis foundations",
    "SQL for insights",
    "Python for data",
    "Machine learning basics",
  ],
  Marketing: [
    "Marketing foundations",
    "Brand strategy",
    "Growth experiments",
    "Campaign analytics",
  ],
  "Content creation": [
    "Storytelling essentials",
    "Content strategy",
    "Video production basics",
    "Build your audience",
  ],
};

const navItems: { page: Page; label: string; icon: IconName }[] = [
  { page: "home", label: "Home", icon: "home" },
  { page: "explore", label: "Explore", icon: "compass" },
  { page: "certificates", label: "Certificates", icon: "certificate" },
  { page: "packages", label: "My package", icon: "package" },
];

function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  const paths: Record<IconName, ReactNode> = {
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5.5 9.5V21h13V9.5M9.5 21v-7h5v7" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.8 8.2-2.1 5.5-5.5 2.1 2.1-5.5 5.5-2.1Z" />
      </>
    ),
    certificate: (
      <>
        <path d="M5 4.5h14v11H5z" />
        <path d="M8 8h8M8 11h5M9 15.5 8 21l4-2 4 2-1-5.5" />
      </>
    ),
    package: (
      <>
        <path d="m4 7 8-4 8 4-8 4-8-4Z" />
        <path d="m4 7 8 4 8-4v10l-8 4-8-4V7Z" />
        <path d="M12 11v10" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5V7Z" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    star: <path d="m12 3 2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8-5.3 2.8 1-6-4.4-4.2 6-.9L12 3Z" />,
    check: <path d="m5 12 4.2 4L19 7" />,
    sparkle: (
      <>
        <path d="M12 2.5c.6 5.5 2 7 7.5 7.5-5.5.6-7 2-7.5 7.5-.6-5.5-2-7-7.5-7.5 5.5-.6 7-2 7.5-7.5Z" />
        <path d="M19 16.5c.2 2 .8 2.6 2.8 2.8-2 .2-2.6.8-2.8 2.7-.2-1.9-.8-2.5-2.8-2.7 2-.2 2.6-.8 2.8-2.8Z" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 5 5" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5c3.5 0 6 .7 8 2.5v12c-2-1.8-4.5-2.5-8-2.5v-12Z" />
        <path d="M20 5.5c-3.5 0-6 .7-8 2.5v12c2-1.8 4.5-2.5 8-2.5v-12Z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21c.6-4.2 3-6.5 7.5-6.5s6.9 2.3 7.5 6.5" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      className={`button button--${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Brand() {
  return (
    <div className="brand">
      <span className="brand__mark">
        <Icon name="book" />
      </span>
      <span>Pathwise</span>
    </div>
  );
}

function Navigation({
  current,
  onNavigate,
}: {
  current: Page;
  onNavigate: (page: Page) => void;
}) {
  return (
    <aside className="nav-shell">
      <Brand />
      <nav className="nav-list" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item.page}
            type="button"
            className={`nav-item ${current === item.page ? "is-active" : ""}`}
            onClick={() => onNavigate(item.page)}
            aria-current={current === item.page ? "page" : undefined}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="nav-tip">
        <Icon name="sparkle" />
        <p>Build a plan around your goals, not a subscription.</p>
      </div>
      <button className="profile-mini" type="button">
        <span>AM</span>
        <span>
          <strong>Alex Morgan</strong>
          <small>Learning steadily</small>
        </span>
      </button>
    </aside>
  );
}

function Topbar({ page }: { page: Page }) {
  const labels: Record<Page, string> = {
    home: "Overview",
    explore: "Explore learning",
    certificates: "Certificates",
    packages: "Your package",
  };
  return (
    <header className="topbar">
      <div className="mobile-brand">
        <Brand />
      </div>
      <span className="eyebrow">{labels[page]}</span>
      <div className="topbar__actions">
        <button type="button" className="search-button" aria-label="Search">
          <Icon name="search" />
          <span>Search courses</span>
        </button>
        <button type="button" className="avatar" aria-label="Open profile">
          AM
        </button>
      </div>
    </header>
  );
}

function HomePage({
  onNavigate,
  topic,
}: {
  onNavigate: (page: Page) => void;
  topic: string;
}) {
  const featured = [
    {
      tag: "Design",
      title: "Figma for confident product teams",
      tone: "coral",
      lessons: "8 lessons",
      duration: "4h 20m",
    },
    {
      tag: "Technology",
      title: "Build your first responsive website",
      tone: "lime",
      lessons: "12 lessons",
      duration: "6h 15m",
    },
    {
      tag: "Business",
      title: "Communicate ideas that move people",
      tone: "lavender",
      lessons: "7 lessons",
      duration: "3h 40m",
    },
  ];

  return (
    <div className="page page--home">
      <section className="hero">
        <div className="hero__copy">
          <span className="pill pill--blue">
            <Icon name="sparkle" /> Learning, made personal
          </span>
          <h1>
            Learn what matters.
            <br />
            <em>Spend what works.</em>
          </h1>
          <p>
            Tell us what you want to achieve and your budget. We’ll create a
            focused learning path with no filler and no surprise costs.
          </p>
          <div className="hero__actions">
            <Button onClick={() => onNavigate("explore")}>
              Build my package <Icon name="arrow" />
            </Button>
            <Button variant="ghost" onClick={() => onNavigate("packages")}>
              View example plan
            </Button>
          </div>
          <div className="proof-row">
            <div className="proof-avatars">
              <span>MK</span>
              <span>JL</span>
              <span>SA</span>
            </div>
            <p>
              <strong>4.9 average rating</strong>
              <span>from 12,000+ focused learners</span>
            </p>
          </div>
        </div>
        <div className="hero__visual">
          <div className="visual-orbit visual-orbit--one" />
          <div className="visual-orbit visual-orbit--two" />
          <div className="learning-card learning-card--main">
            <span className="learning-card__icon">
              <Icon name="play" />
            </span>
            <div>
              <small>Continue learning</small>
              <h3>Design systems that scale</h3>
              <div className="progress">
                <span />
              </div>
              <p>Lesson 4 of 8 · 28 min</p>
            </div>
          </div>
          <div className="floating-note floating-note--top">
            <span className="icon-chip icon-chip--lime">
              <Icon name="check" />
            </span>
            <div>
              <strong>Right on track</strong>
              <small>3 lessons this week</small>
            </div>
          </div>
          <div className="floating-note floating-note--bottom">
            <strong>$68</strong>
            <span>saved vs. separate courses</span>
          </div>
          <div className="hero-stat">
            <Icon name="clock" />
            <span>
              <strong>6.5 hrs</strong>
              designed around your week
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Explore your next skill</span>
            <h2>Popular starting points</h2>
          </div>
          <Button variant="ghost" onClick={() => onNavigate("explore")}>
            Browse all <Icon name="arrow" />
          </Button>
        </div>
        <div className="topic-row">
          {topics.slice(0, 4).map((item) => (
            <button
              type="button"
              className={`topic-tile topic-tile--${topicDetails[item].color}`}
              key={item}
              onClick={() => onNavigate("explore")}
            >
              <span className="topic-tile__icon">
                <Icon
                  name={
                    item === "Design"
                      ? "sparkle"
                      : item === "Technology"
                        ? "package"
                        : item === "Business"
                          ? "star"
                          : "compass"
                  }
                />
              </span>
              <span>
                <strong>{item}</strong>
                <small>{topicDetails[item].count}</small>
              </span>
              <Icon name="arrow" className="topic-tile__arrow" />
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Loved by learners</span>
            <h2>Short courses, lasting skills</h2>
          </div>
        </div>
        <div className="course-grid">
          {featured.map((course, index) => (
            <article className="course-card" key={course.title}>
              <div className={`course-art course-art--${course.tone}`}>
                <span className="course-art__number">0{index + 1}</span>
                <span className="course-art__shape" />
                <span className="course-art__play">
                  <Icon name="play" />
                </span>
              </div>
              <div className="course-card__body">
                <div className="course-card__meta">
                  <span>{course.tag}</span>
                  <span>
                    <Icon name="star" /> 4.9
                  </span>
                </div>
                <h3>{course.title}</h3>
                <div className="course-card__footer">
                  <span>
                    <Icon name="book" /> {course.lessons}
                  </span>
                  <span>
                    <Icon name="clock" /> {course.duration}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <span className="pill">Built around {topic}</span>
          <h2>Your goals are personal. Your learning plan should be too.</h2>
        </div>
        <Button variant="dark" onClick={() => onNavigate("explore")}>
          Get my custom plan <Icon name="arrow" />
        </Button>
      </section>
    </div>
  );
}

function ExplorePage({
  budget,
  setBudget,
  topic,
  setTopic,
  style,
  setStyle,
  onBuild,
}: {
  budget: number;
  setBudget: (budget: number) => void;
  topic: string;
  setTopic: (topic: string) => void;
  style: string;
  setStyle: (style: string) => void;
  onBuild: () => void;
}) {
  return (
    <div className="page">
      <section className="builder-intro">
        <div>
          <span className="pill pill--blue">Your learning, your way</span>
          <h1>
            Invest in your <em>future</em>
          </h1>
          <p>
            Set your preferences and we’ll do the course matching, scheduling,
            and budget balancing for you.
          </p>
        </div>
        <div className="builder-summary">
          <span>Estimated plan</span>
          <strong>3–5 courses</strong>
          <small>Based on your current choices</small>
        </div>
      </section>

      <section className="builder-card">
        <div className="builder-step">
          <span>01</span>
          <div>
            <h2>Set your total budget</h2>
            <p>You’ll only pay for the courses included in your path.</p>
          </div>
        </div>
        <div className="budget-display">
          <span>Your budget</span>
          <strong>${budget}</strong>
          <small>one-time total</small>
        </div>
        <div className="range-wrap">
          <input
            type="range"
            min="45"
            max="300"
            step="15"
            value={budget}
            onChange={(event) => setBudget(Number(event.target.value))}
            aria-label="Learning budget"
            style={{ "--range": `${((budget - 45) / 255) * 100}%` } as React.CSSProperties}
          />
          <div className="range-labels">
            <span>$45</span>
            <span>$120</span>
            <span>$210</span>
            <span>$300</span>
          </div>
        </div>

        <div className="divider" />

        <div className="builder-step">
          <span>02</span>
          <div>
            <h2>What do you want to learn?</h2>
            <p>Pick the topic you’d most like to make progress in.</p>
          </div>
        </div>
        <div className="choice-grid">
          {topics.map((item) => (
            <button
              type="button"
              key={item}
              className={`choice-card choice-card--${topicDetails[item].color} ${
                topic === item ? "is-selected" : ""
              }`}
              onClick={() => setTopic(item)}
              aria-pressed={topic === item}
            >
              <span className="choice-card__check">
                <Icon name="check" />
              </span>
              <strong>{item}</strong>
              <small>{topicDetails[item].description}</small>
            </button>
          ))}
        </div>

        <div className="divider" />

        <div className="builder-step">
          <span>03</span>
          <div>
            <h2>How do you learn best?</h2>
            <p>We’ll prioritize courses that match your style.</p>
          </div>
        </div>
        <div className="style-grid">
          {[
            ["Video-first", "Guided, visual lessons", "play"],
            ["Reading-first", "Articles and useful notes", "book"],
            ["A balanced mix", "A little bit of both", "sparkle"],
          ].map(([name, description, icon]) => (
            <button
              type="button"
              key={name}
              className={`style-choice ${style === name ? "is-selected" : ""}`}
              onClick={() => setStyle(name)}
              aria-pressed={style === name}
            >
              <span>
                <Icon name={icon as IconName} />
              </span>
              <strong>{name}</strong>
              <small>{description}</small>
            </button>
          ))}
        </div>

        <div className="builder-submit">
          <div>
            <Icon name="sparkle" />
            <span>
              <strong>Ready to build</strong>
              <small>
                {topic} · {style} · ${budget} max
              </small>
            </span>
          </div>
          <Button onClick={onBuild}>
            Build my package <Icon name="arrow" />
          </Button>
        </div>
      </section>
    </div>
  );
}

function CertificatePage({ onExplore }: { onExplore: () => void }) {
  const benefits = [
    ["Shareable proof", "Add verified credentials to your profile and résumé."],
    ["Built by experts", "Demonstrate skills reviewed by working professionals."],
    ["Made to matter", "Every certificate maps to practical, portfolio-ready work."],
  ];

  return (
    <div className="page">
      <section className="certificate-hero">
        <div className="certificate-copy">
          <span className="pill pill--blue">Proof of progress</span>
          <h1>
            Skills you can show,
            <br />
            not just <em>say.</em>
          </h1>
          <p>
            Complete a Pathwise learning package and earn a verified certificate
            that shows exactly what you learned and built.
          </p>
          <Button onClick={onExplore}>
            Find a certificate path <Icon name="arrow" />
          </Button>
        </div>
        <div className="certificate-stage">
          <div className="certificate-paper">
            <div className="certificate-paper__top">
              <Brand />
              <span>PW · 2025 · 0184</span>
            </div>
            <span className="certificate-label">Certificate of completion</span>
            <h3>Product Design</h3>
            <p>Presented to</p>
            <h4>Alex Morgan</h4>
            <div className="certificate-signatures">
              <span>
                <strong>R. Quinn</strong>
                Program director
              </span>
              <span className="certificate-seal">
                <Icon name="check" />
              </span>
              <span>
                <strong>May 24, 2025</strong>
                Completion date
              </span>
            </div>
          </div>
          <div className="certificate-float certificate-float--top">
            <Icon name="star" />
            <span>
              <strong>Verified</strong>
              Secure credential
            </span>
          </div>
          <div className="certificate-float certificate-float--bottom">
            <span>in</span>
            <strong>Share to LinkedIn</strong>
          </div>
        </div>
      </section>

      <section className="section certificate-benefits">
        <div className="section-heading section-heading--center">
          <div>
            <span className="eyebrow">Designed for real careers</span>
            <h2>A credential worth completing</h2>
            <p>
              More than a badge — clear evidence of the work you’ve put in.
            </p>
          </div>
        </div>
        <div className="benefit-grid">
          {benefits.map(([title, description], index) => (
            <article key={title} className="benefit-card">
              <span>0{index + 1}</span>
              <div className="benefit-card__icon">
                <Icon
                  name={
                    index === 0 ? "certificate" : index === 1 ? "star" : "package"
                  }
                />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="certificate-quote">
        <Icon name="sparkle" />
        <blockquote>
          “My Pathwise certificate helped me talk about my skills with confidence
          — and the portfolio work helped me prove them.”
        </blockquote>
        <p>Jamie Lee · Junior product designer</p>
      </section>
    </div>
  );
}

function PackagePage({
  budget,
  topic,
  style,
  onAdjust,
}: {
  budget: number;
  topic: string;
  style: string;
  onAdjust: () => void;
}) {
  const [selectedPackageIndex, setSelectedPackageIndex] = useState<number | null>(
    null,
  );
  const packageData = useMemo(() => {
    const names = courseNames[topic] ?? courseNames.Design;
    const starterTotal = Math.min(budget, Math.max(39, Math.round(budget * 0.44)));
    const balancedTotal = Math.min(budget, Math.max(69, Math.round(budget * 0.72)));
    const completeTotal = budget;
    return [
      {
        label: "A focused start",
        name: "Starter path",
        description: "Build the fundamentals with a short, confident first step.",
        total: starterTotal,
        hours: 12,
        courses: names.slice(0, 2),
        tone: "lime",
      },
      {
        label: "Best match",
        name: "Balanced path",
        description: "The right mix of core skills and practical application.",
        total: balancedTotal,
        hours: 26,
        courses: names.slice(0, 3),
        tone: "coral",
      },
      {
        label: "Most complete",
        name: "Deep-dive path",
        description: "A comprehensive route from foundations to confident practice.",
        total: completeTotal,
        hours: 44,
        courses: names,
        tone: "aqua",
      },
    ];
  }, [budget, topic]);

  const allocateCost = (total: number, count: number) =>
    Array.from({ length: count }, (_, index) => {
      const base = Math.floor(total / count);
      return base + (index < total % count ? 1 : 0);
    });

  const lessonTemplates = [
    ["Core concepts", "Tools and guided practice", "Applied mini-project"],
    ["Essential methods", "Worked examples", "Skill check and feedback"],
    ["Planning the work", "Hands-on workshop", "Portfolio challenge"],
    ["Advanced patterns", "Real-world case study", "Final capstone"],
  ];

  const selectedPackage =
    selectedPackageIndex === null ? null : packageData[selectedPackageIndex];
  const selectedCourseCosts = selectedPackage
    ? allocateCost(selectedPackage.total, selectedPackage.courses.length)
    : [];

  return (
    <div className="page">
      <section className="package-heading">
        <div>
          <span className="pill pill--blue">
            <Icon name="sparkle" /> Built for your goals
          </span>
          <h1>
            Packages for <em>you</em>
          </h1>
          <p>
            We found three {topic.toLowerCase()} paths that fit your ${budget}{" "}
            budget and {style.toLowerCase()} preference.
          </p>
        </div>
        <Button variant="secondary" onClick={onAdjust}>
          Adjust preferences
        </Button>
      </section>

      <div className="package-layout">
        <div className="package-list">
          {packageData.map((item, index) => (
            <article
              className={`package-card package-card--${item.tone} ${
                index === 1 ? "is-featured" : ""
              }`}
              key={item.name}
            >
              <div className="package-card__main">
                <div>
                  <span className="package-label">{item.label}</span>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="package-price">
                  <strong>${item.total}</strong>
                  <span>one-time total</span>
                </div>
              </div>
              <div className="package-stats">
                <span>
                  <strong>{item.courses.length}</strong> courses
                </span>
                <span>
                  <strong>{item.hours}h</strong> learning
                </span>
                <span>
                  <strong>{Math.ceil(item.hours / 5)}</strong> weeks
                </span>
              </div>
              <div className="package-courses">
                {item.courses.map((course, courseIndex) => (
                  <div key={course}>
                    <span>
                      <Icon name="check" />
                    </span>
                    <strong>{course}</strong>
                    <small>
                      ${allocateCost(item.total, item.courses.length)[courseIndex]}
                    </small>
                  </div>
                ))}
              </div>
              <div className="package-card__footer">
                <span>
                  <Icon name="certificate" /> Certificate included
                </span>
                <Button
                  variant="primary"
                  onClick={() => setSelectedPackageIndex(index)}
                >
                  View details <Icon name="arrow" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <aside className="plan-sidebar">
          <div className="plan-profile">
            <span className="plan-profile__avatar">AM</span>
            <h3>Your learning plan</h3>
            <p>Personalized for Alex</p>
          </div>
          <div className="plan-detail">
            <span>Available budget</span>
            <strong>${budget}</strong>
            <small>Nothing over your limit</small>
          </div>
          <div className="plan-detail">
            <span>Learning focus</span>
            <strong>{topic}</strong>
            <small>{style}</small>
          </div>
          <div className="weekly-card">
            <div className="weekly-card__heading">
              <span>Learning progress</span>
              <strong>42%</strong>
            </div>
            <div className="weekly-progress">
              <span />
            </div>
            <small>3.5 of 8 weekly hours complete</small>
            <div className="weekly-bars">
              {[48, 72, 58, 84, 64, 36, 25].map((height, index) => (
                <i key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="weekly-days">
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
              <span>S</span>
            </div>
          </div>
          <div className="plan-promise">
            <Icon name="check" />
            <p>
              <strong>The Pathwise promise</strong>
              Switch courses within 14 days if the fit isn’t right.
            </p>
          </div>
        </aside>
      </div>

      {selectedPackage && (
        <div
          className="detail-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedPackageIndex(null);
            }
          }}
        >
          <section
            className="package-detail"
            role="dialog"
            aria-modal="true"
            aria-labelledby="package-detail-title"
          >
            <header className="package-detail__header">
              <div>
                <span className="pill pill--blue">Full cost breakdown</span>
                <h2 id="package-detail-title">{selectedPackage.name}</h2>
                <p>
                  Every dollar is assigned to a lesson, so you know exactly what
                  you’re paying for.
                </p>
              </div>
              <button
                type="button"
                className="detail-close"
                onClick={() => setSelectedPackageIndex(null)}
                aria-label="Close package details"
              >
                <Icon name="close" />
              </button>
            </header>

            <div className="transparency-note">
              <Icon name="check" />
              <span>
                <strong>100% transparent pricing</strong>
                No enrollment, platform, or certificate fees
              </span>
              <strong>${selectedPackage.total}</strong>
            </div>

            <div className="lesson-ledger">
              {selectedPackage.courses.map((course, courseIndex) => {
                const courseCost = selectedCourseCosts[courseIndex];
                const lessons = lessonTemplates[courseIndex];
                const lessonCosts = allocateCost(courseCost, lessons.length);

                return (
                  <article className="lesson-group" key={course}>
                    <div className="lesson-group__heading">
                      <span>{String(courseIndex + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{course}</h3>
                        <p>3 lessons · guided project included</p>
                      </div>
                      <strong>${courseCost}</strong>
                    </div>
                    <div className="lesson-list">
                      {lessons.map((lesson, lessonIndex) => (
                        <div key={lesson}>
                          <span>
                            {courseIndex + 1}.{lessonIndex + 1}
                          </span>
                          <strong>{lesson}</strong>
                          <small>
                            {lessonIndex === 2 ? "Project · 50 min" : "Lesson · 35 min"}
                          </small>
                          <b>${lessonCosts[lessonIndex]}</b>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>

            <footer className="package-detail__footer">
              <div>
                <span>Total package investment</span>
                <strong>${selectedPackage.total}</strong>
                <small>
                  {selectedPackage.courses.length * 3} lessons · Certificate
                  included
                </small>
              </div>
              <Button
                variant="primary"
                onClick={() => setSelectedPackageIndex(null)}
              >
                Choose this path <Icon name="arrow" />
              </Button>
            </footer>
          </section>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [budget, setBudget] = useState(135);
  const [topic, setTopic] = useState("Design");
  const [style, setStyle] = useState("A balanced mix");

  const navigate = (nextPage: Page) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <Navigation current={page} onNavigate={navigate} />
      <main className="main-content">
        <Topbar page={page} />
        {page === "home" && <HomePage onNavigate={navigate} topic={topic} />}
        {page === "explore" && (
          <ExplorePage
            budget={budget}
            setBudget={setBudget}
            topic={topic}
            setTopic={setTopic}
            style={style}
            setStyle={setStyle}
            onBuild={() => navigate("packages")}
          />
        )}
        {page === "certificates" && (
          <CertificatePage onExplore={() => navigate("explore")} />
        )}
        {page === "packages" && (
          <PackagePage
            budget={budget}
            topic={topic}
            style={style}
            onAdjust={() => navigate("explore")}
          />
        )}
      </main>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <button
            type="button"
            key={item.page}
            className={page === item.page ? "is-active" : ""}
            onClick={() => navigate(item.page)}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
