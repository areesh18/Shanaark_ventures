import "react";
import MaskRevealText from "../../components/animations/MaskRevealText";
import ScrollHighlightText from "../../components/animations/ScrollHighlightText";
import Button from "../../components/ui/Button";

const About = () => {
  const stats = [
    { label: "Content Desk", value: "3000+", sub: "Content/Year" },
    { label: "Research Projects", value: "15+", sub: "" },
    { label: "Investor Fact Finding Mission", value: "3", sub: "" },
    { label: "Organizations Served", value: "40+", sub: "" },
    { label: "Countries/Markets Served", value: "5", sub: "" },
  ];

  const team = [
    {
      name: "Krishnendu DCosta",
      role: "LEGAL DIRECTOR",
      desc: "With a degree in commerce and 30 plus years of experience in multiple industry verticals, and having dealt with clients from over 5 countries in his work life, Kris leads business development. He specializes in business growth engineering, equity management and investment strategy.",
    },
    {
      name: "Charlotte Beelen",
      role: "LEGAL DIRECTOR",
      desc: "Charlotte is closely involved with the operations and with capacity building of the team. As the CRM adjudicator, she interacts closely with the markets. With a bachelors degree in leisure management, Charlotte has built over 15 years experience in marketing, liaison, digital consulting and event design.",
    },
    {
      name: "Raymond Francis",
      role: "LEGAL DIRECTOR",
      desc: "Having spent several years in training, sales and tech environments, Raymond is a unique blend. He harnesses strengths in customer services and business development. A graduate of Saint Xaviers College, Kolkata, India, Raymond excels in creative, critical thinking and research.",
    },
    {
      name: "Bitan Biswas",
      role: "LEGAL DIRECTOR",
      desc: "Bitan is an acclaimed educationist with several years in education and learning. His deep understanding of cognitive behavior allows us to build training experiences for trainees and learners. In addition, he understands education from a transformative angle.",
    },
    {
      name: "Vishal Sharma",
      role: "LEGAL DIRECTOR",
      desc: "Mr. Vishal Sharma is a Company Secretary and a Lawyer. He has over 13 years of experience across various functions and domains with top Corporate Houses. He is extensively experienced in the areas of Corporate Secretarial functions. Start up Consultancy, Accounts, regulatory compliances. Merger & Acquisitions and other Company Law matters. He has a vast working experience with ROC, Food Safety, Drug Authorities, SEBI, Various Stock Exchanges and NCLT matters. He held top leadership positions with the big corporate houses as a Company Secretary and Key Managerial Personnel of the Company having exposures in equity funding, NCLT project appraisals, setting up of new business ventures, policy making etc.",
    },
    {
      name: "Jitendra Prasad",
      role: "EMERITUS HONORARY ADVISORY",
      desc: "Jitendra Prasad is a leading marine engineer par excellence based in Houston, Texas. He has also done a lot of research work in alternative energy production besides having had set up various ventures or being involved in different ventures. Mr Prasad boasts of over 40 years of rich experience in design, engineering, and construction of projects worldwide in the energy sector. Graduated from the prestigious IIT Kharagpur and then post graduated from UC Berkeley. Currently he resides in Houston, Texas in the United States of America.",
    },
    {
      name: "Indranil Chakraborty",
      role: "HONORARY ADVISORY",
      desc: "Indranil Chakraborty is a top notch banking and finance professional with expertise in financial reporting, budgeting, analysis, business partnerships and decision making. He has delivered consistent results including improved financial performance, optimized cash flow and fortified internal controls. He has a proven track record in finance projects, implementing Basel ll standards, and refining reporting structures. As a Chartered Accountant he operates from UAE and India, with over 26+ year of experience in banking, accounting, budgeting, portfolio and investment management.",
    },
  ];

  return (
    <div className="min-h-screen bg-(--color-bg-primary) pt-24 selection:bg-(--color-accent) selection:text-(--color-text-primary)">
      {/* 1. HERO SECTION */}
      {/* Editorial split: eyebrow / headline / descriptor row */}
      <section className="max-w-7xl mx-auto px-6 mb-10 animate-fade-up">
        {/* Main headline — mid-weight, two lines, measured size */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-16">
          <h1 className="flex-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-(--color-text-primary) leading-[1.05] max-w-4xl">
            Over a decade of <br />
            <span className="font-serif-italic font-light text-(--color-text-secondary)">
              transforming
            </span>{" "}
            businesses.
          </h1>

          {/* Right descriptor — visible lg+ */}
          <p className="hidden lg:block text-base font-light text-(--color-text-secondary) leading-relaxed max-w-xs pb-1 shrink-0">
            Business restructuring, marketing, and growth solutions — built for
            the markets that matter.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & VIDEO */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-(--color-bg-secondary) relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[10px] sm:text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest mb-8 md:mb-14">
            Our Story
          </h2>

          {/* Opening quote + inline image side by side */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 mb-10 md:mb-16">
            <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
              <MaskRevealText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-(--color-text-primary) leading-[1.15] sm:leading-[1.1]">
                Some ventures begin with a business plan.{" "}
                <br className="hidden sm:block" />
                <span className="font-serif-italic text-(--color-text-secondary)">
                  Ours began with a leap of faith.
                </span>
              </MaskRevealText>
            </div>
            {/* Decorative image — replace with: aerial shot of Suriname city or tropical coastline */}
            <div className="w-full lg:w-2/5 aspect-[4/3] rounded-lg overflow-hidden shrink-0">
              <img
                src="https://images.pexels.com/photos/13966908/pexels-photo-13966908.jpeg"
                alt="Aerial view of Suriname's lush tropical coastline representing the founding location of Shaanark Ventures"
                className="w-full h-full object-cover opacity-100"
              />
            </div>
          </div>

          <ScrollHighlightText className="w-full md:max-w-3xl text-xl sm:text-2xl md:text-3xl font-light text-(--color-text-primary) leading-relaxed mb-10 md:mb-16">
            <p>
              When one of our founders first arrived in Suriname from India, he
              brought little more than curiosity and an entrepreneurial spirit.
              Navigating an unfamiliar culture and an untested market, he did
              what any good storyteller does — he looked for the story worth
              telling. That search led him to a passion project,{" "}
              <em className="font-normal text-(--color-text-primary)">
                The Revealing
              </em>
              , a short film that would quietly change everything.
            </p>
          </ScrollHighlightText>

          <div className="w-full md:w-4/5 lg:w-3/4 md:ml-auto mb-10 md:mb-16 group cursor-pointer">
            <div className="w-full aspect-video bg-(--color-dark) rounded-lg md:rounded-xl overflow-hidden shadow-xl md:shadow-2xl relative">
              <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105">
                <iframe
                  className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="https://www.youtube.com/embed/qtRUUgvJoaw?rel=0"
                  title="The Revealing - Short Film"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-(--color-text-secondary) uppercase tracking-widest mt-3 md:mt-4 text-left md:text-right">
              The Revealing — Where it all started
            </p>
          </div>

          <ScrollHighlightText className="w-full md:max-w-3xl md:ml-auto text-xl sm:text-2xl md:text-3xl font-light text-(--color-text-primary) leading-relaxed flex flex-col gap-6 md:gap-8 mb-10 md:mb-16">
            <p>
              On set, he met Charlotte Beelen, a graduate in Event and Leisure
              Management from the Netherlands. What started as a creative
              collaboration quickly grew into something larger — years of market
              exploration, shared learning, and the kind of entrepreneurial grit
              that only comes from doing things the hard way.
            </p>
            <p>
              By 2024, those experiences had a name:{" "}
              <span className="font-medium">Shaanark Ventures Suriname</span> —
              built with a circle of shareholders and a clear purpose: to
              deliver business restructuring, marketing, and growth solutions
              that are practical, sustainable, and built to last.
            </p>
          </ScrollHighlightText>

          <div className="border-l-2 md:border-l-4 border-(--color-accent) pl-4 md:pl-10 w-full md:max-w-4xl mb-10 md:mb-16">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-(--color-text-primary) tracking-tight leading-snug md:leading-tight">
              But a good story rarely stops at one chapter.
            </p>
          </div>

          <ScrollHighlightText className="w-full md:max-w-3xl text-xl sm:text-2xl md:text-3xl font-light text-(--color-text-primary) leading-relaxed flex flex-col gap-6 md:gap-8 mb-10 md:mb-16">
            <p>
              As the vision expanded, so did the team. In 2026, conversations
              with long-time professional associates{" "}
              <span className="font-semibold">Raymond Francis</span> and{" "}
              <span className="font-semibold">Bitan Biswas</span> opened new
              doors. Through these connections came{" "}
              <span className="font-semibold">Vishal Sharma</span>, Founder of
              Legal Corner, who joined as a Director and helped bring Shaanark
              Ventures India to life — transforming a shared ambition into a
              living, breathing cross-border organization.
            </p>
            <p>
              Off late, a young enthusiast,
              <span className="font-semibold"> Md. Saiyaaz Khan</span>, a
              digital marketer specializing in SEO, analytics, and business
              growth, joined the team to breathe a new creation into the
              organization. Bringing fresh ideas, digital innovation, and a
              growth-oriented mindset.
            </p>
            <p>
              Today, Shaanark Ventures is more than a company. It's a
              collaborative — shaped by its founders, energized by its
              stakeholders, and quietly guided by a key architect whose focus
              remains on what matters most: building relationships, creating
              opportunity, and thinking long-term.
            </p>
          </ScrollHighlightText>

          <div className="w-full md:max-w-3xl mx-auto md:text-center text-lg sm:text-xl md:text-2xl font-light text-(--color-text-secondary) leading-relaxed flex flex-col gap-4 md:gap-6">
            <p>
              With offices in Suriname and India, the firm is backed by Honorary
              Advisors with deep global expertise, a leadership team spanning
              more than six industry verticals, and a track record of delivering
              results across five markets — and counting.
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl text-(--color-text-primary) font-normal mt-2 md:mt-4 leading-snug">
              The journey that began with one person, one unfamiliar country,
              and one short film now reaches across continents.{" "}
              <br className="hidden sm:block" />
              <span className="font-serif-italic text-(--color-text-secondary)">
                And we're just getting started.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. METRICS / STATS */}
      <section className="border-y border-(--color-border) bg-(--color-bg-primary)">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-wrap justify-start lg:justify-between gap-x-12 gap-y-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col flex-1 min-w-37.5 border-l-2 border-(--color-border) pl-6 hover:border-(--color-accent) transition-colors duration-500 cursor-default"
              >
                <span className="text-4xl md:text-5xl lg:text-6xl font-light text-(--color-text-primary) tracking-tighter mb-2">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest leading-relaxed">
                  {stat.label}
                  {stat.sub && (
                    <>
                      <br />
                      {stat.sub}
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH */}
      <section className="py-14 md:py-20 bg-(--color-bg-primary) relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Approach header + image side by side */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:gap-16 mb-10 md:mb-14">
            <div className="flex-1">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-normal tracking-tighter text-(--color-text-primary) leading-[1.05]">
                Empowering organizations to thrive{" "}
                <br className="hidden lg:block" />
                in a{" "}
                <span className="font-serif-italic font-light text-(--color-text-secondary)">
                  fast-paced world.
                </span>
              </h2>
            </div>
            {/* Replace with: strategy session, whiteboard, or consulting room photo */}
            <div className="w-full lg:w-72 aspect-4/3 lg:aspect-3/4 rounded-lg overflow-hidden shrink-0 mt-8 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/7710055/pexels-photo-7710055.jpeg"
                alt=""
                className="w-full h-full object-cover opacity-100"
              />
            </div>
          </div>

          <h3 className="text-[10px] sm:text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest mb-8 md:mb-12">
            Our Approach
          </h3>

          <div className="w-full md:max-w-4xl mb-8 md:mb-14">
            <MaskRevealText className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-(--color-text-primary) leading-[1.15] sm:leading-snug">
              Most businesses know something isn't working.{" "}
              <br className="hidden sm:block" />
              <span className="font-serif-italic text-(--color-text-secondary)">
                Few know exactly why.
              </span>
            </MaskRevealText>
          </div>

          <ScrollHighlightText className="w-full md:max-w-3xl md:ml-auto text-xl sm:text-2xl md:text-3xl font-light text-(--color-text-primary) leading-relaxed mb-8 md:mb-14">
            <p>
              A dip in sales gets blamed on marketing. Weak marketing gets
              blamed on branding. But in our experience, these are rarely the
              real problem — they're symptoms. And treating symptoms without
              understanding the cause is how organizations stay stuck.
            </p>
          </ScrollHighlightText>

          <div className="border-l-2 md:border-l-4 border-(--color-accent) pl-4 md:pl-10 w-full md:max-w-3xl mb-8 md:mb-14">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-(--color-text-primary) tracking-tight leading-snug md:leading-tight">
              At Shaanark Ventures, we go deeper.
            </p>
          </div>

          <ScrollHighlightText className="w-full md:max-w-3xl text-xl sm:text-2xl md:text-3xl font-light text-(--color-text-primary) leading-relaxed flex flex-col gap-6 md:gap-8 mb-8 md:mb-14">
            <p>
              We specialize in business acceleration and ecosystem development —
              which means before we talk about campaigns, content, or
              conversions, we ask harder questions. Is your leadership aligned?
              Is your financial planning built for growth? Do you have the right
              people, and a system to develop them? Are your data practices
              giving you real insight, or just noise?
            </p>
            <p>
              The challenges that quietly strangle business growth are often
              invisible ones — a missing learning culture, an underdeveloped
              MIS, siloed teams, or the absence of digital transformation where
              it matters most. These systemic gaps don't show up in your brand
              colors or your ad spend. But they show up everywhere in your
              results.
            </p>
          </ScrollHighlightText>

          {/* Full-width image break — Replace with: data dashboard, analytics screen, or organizational chart */}
          <div className="w-full aspect-[21/6] rounded-lg overflow-hidden mb-8 md:mb-14">
            <img
              src="https://images.pexels.com/photos/8353773/pexels-photo-8353773.jpeg"
              alt=""
              className="w-full h-full object-cover opacity-100"
            />
          </div>

          <ScrollHighlightText className="w-full md:max-w-3xl md:ml-auto text-xl sm:text-2xl md:text-3xl font-light text-(--color-text-primary) leading-relaxed flex flex-col gap-6 md:gap-8 mb-8 md:mb-14">
            <p>
              Our process is straightforward, even when the problems aren't.
            </p>
            <p>
              We begin by identifying root causes — not surface-level friction,
              but the organizational dynamics that are genuinely holding you
              back. From there, we work shoulder-to-shoulder with business
              owners, leaders, and management teams to design practical
              solutions, build internal capabilities, and drive change that
              actually sticks.
            </p>
            <p>
              We're not here to deliver a report and move on. We're here to help
              you build an organization that doesn't need rescuing every few
              years — one that grows, adapts, and competes on its own terms.
            </p>
          </ScrollHighlightText>

          <div className="w-full md:max-w-4xl mx-auto md:text-center mt-8 md:mt-14">
            <p className="text-3xl sm:text-4xl md:text-6xl text-(--color-text-primary) font-normal tracking-tight leading-snug md:leading-tight">
              Because sustainable success isn't a campaign.{" "}
              <br className="hidden sm:block" />
              <span className="font-serif-italic text-(--color-text-secondary)">
                It's a system.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 5. THE TEAM */}
      <section className="py-14 md:py-20 bg-(--color-bg-primary) relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="text-[10px] sm:text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest mb-4 md:mb-6">
              The Collaborative
            </h2>
            <MaskRevealText className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-normal tracking-tighter text-(--color-text-primary) leading-[1.05]">
              Leadership & <br className="hidden md:block" />
              <span className="font-serif-italic font-light text-(--color-text-secondary)">
                Advisory
              </span>
            </MaskRevealText>
          </div>

          {/* Core team — first 5 members */}
          <div className="border-t-2 border-(--color-text-primary)">
            {team.slice(0, 5).map((member, idx) => (
              <div
                key={member.name}
                className="group relative flex flex-col lg:flex-row items-start py-8 md:py-12 border-b border-(--color-border) hover:bg-(--color-bg-secondary) transition-all duration-500 px-4 sm:px-6 -mx-4 sm:-mx-6 overflow-hidden"
              >
                {/* Number Index */}
                <div className="hidden lg:block w-1/12 pt-2">
                  <span className="text-sm font-medium text-(--color-text-secondary) group-hover:text-(--color-text-primary) transition-colors duration-500">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Name & Role */}
                <div className="w-full lg:w-4/12 mb-4 lg:mb-0 pr-8 z-10">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-(--color-text-primary) mb-4 group-hover:translate-x-4 transition-transform duration-500 ease-out">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-4 group-hover:translate-x-4 transition-transform duration-500 ease-out delay-75">
                    <span className="h-px w-6 bg-(--color-border) group-hover:bg-(--color-accent) transition-colors duration-500"></span>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-(--color-text-secondary) group-hover:text-(--color-text-primary) transition-colors duration-500">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div className="w-full lg:w-7/12 pt-2 z-10">
                  <p className="text-base sm:text-lg font-light text-(--color-text-secondary) leading-relaxed group-hover:text-(--color-text-primary) transition-colors duration-500">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Distinguished advisory members — last 2, rendered in a recessed card panel */}
          <div className="mt-12 md:mt-16 bg-(--color-bg-secondary) rounded-xl px-4 sm:px-8 py-2 border border-(--color-border)">
            {team.slice(5).map((member) => (
              <div
                key={member.name}
                className="group relative flex flex-col lg:flex-row items-start py-8 md:py-12 border-b border-(--color-border) last:border-b-0 hover:bg-(--color-bg-primary) transition-all duration-500 rounded-lg px-2 sm:px-4 overflow-hidden"
              >
                {/* Name & Role */}
                <div className="w-full lg:w-5/12 mb-4 lg:mb-0 pr-8 z-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-(--color-text-primary) mb-4 group-hover:translate-x-3 transition-transform duration-500 ease-out">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-4 group-hover:translate-x-3 transition-transform duration-500 ease-out delay-75">
                    <span className="h-px w-6 bg-(--color-border) group-hover:bg-(--color-accent) transition-colors duration-500"></span>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-(--color-text-secondary) group-hover:text-(--color-text-primary) transition-colors duration-500">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div className="w-full lg:w-7/12 pt-2 z-10">
                  <p className="text-base sm:text-lg font-light text-(--color-text-secondary) leading-relaxed group-hover:text-(--color-text-primary) transition-colors duration-500">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONVERSION PANEL */}
      <section className="py-16 md:py-24 bg-(--color-bg-primary) text-center animate-fade-up px-4 sm:px-6 border-t border-(--color-border)">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-(--color-text-primary) mb-6">
          Ready to scale your{" "}
          <span className="font-serif-italic font-light text-(--color-text-secondary)">
            vision?
          </span>
        </h2>
        <p className="text-lg md:text-xl font-light tracking-tight text-(--color-text-secondary) mb-8 max-w-2xl mx-auto">
          Let's discuss how our transformative strategies and restructuring
          solutions can drive sustainable results for your organization.
        </p>
        <Button
          hasArrow
          className="bg-(--color-text-primary) text-(--color-bg-primary) hover:bg-(--color-accent) hover:text-(--color-text-primary) transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Book Consultation
        </Button>
      </section>
    </div>
  );
};

export default About;
