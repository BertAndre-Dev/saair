export const siteInfrastructurePage = {
  hero: {
    imageSrc: "/service/site.png",
    imageAlt: "Two engineers in high-visibility vests shaking hands on a project site",
    title: "SITE-SPECIFIC INFRASTRUCTURE",
  },
  intro: [
    "Grid connections, transformers, distribution infrastructure and backup generation, arranged through Saair and delivered by trusted technical partners.",
    "Some energy needs go beyond supply, metering and reporting. A site may need a stronger grid connection, a transformer, new distribution lines or a properly planned backup power system. These jobs call for specialist engineering and contracting. Saair does not carry out this work itself. We coordinate it: we bring in the right technical partners, help define what your site needs, and act as your point of contact while they deliver.",
  ],
  howItWorks: {
    title: "How It Works",
    points: [
      "You tell us what your site needs. We use what we know about your energy setup to help frame the requirement.",
      "We arrange the right partners. We connect you with technical partners suited to the job.",
      "Our partners deliver the technical work. The engineering, supply and installation are carried out by the partners, not by Saair.",
      "We stay involved as coordinator. You have one team to speak to instead of managing several specialists on your own.",
    ],
  },
  offerings: [
    {
      title: "Grid Connection Support and Supply Upgrades",
      imageSrc: "/service/energy/cylinders.png",
      imageAlt: "Rows of blue LPG cylinders",
      body: "Getting a reliable grid supply, or increasing the capacity of an existing one, can be slow and complicated. We can arrange support for new grid connections and supply upgrades, including priority connection routes where they are available. Our partners handle the technical work and engage the relevant parties on your behalf. The aim is to get your site connected, or upgraded, with less delay and less effort on your side.",
    },
    {
      title: "Distribution Transformer Supply",
      imageSrc: "/service/energy/generator.png",
      imageAlt: "Portable generator beside a gas cylinder",
      body: "Larger sites often need their own transformer to receive and step down power safely. We can arrange the supply of distribution transformers through our partners, matched to the load your site requires. This spares you from sourcing, specifying and procuring the equipment on your own.",
    },
    {
      title: "Power-Line and Distribution Infrastructure Requirements",
      imageSrc: "/service/gas/gas-metering.png",
      imageAlt: "Wall-mounted gas meter on yellow pipework",
      body: "Getting power to and around a site depends on the right lines and distribution infrastructure. We can help you understand the power-line and distribution infrastructure your project requires, and arrange for the work to be delivered through our technical partners. This is especially useful for developers and estates where the infrastructure needs are not yet clear.",
    },
    {
      title: "Backup Generation Planning and Sizing",
      imageSrc: "/service/gas/supply.png",
      imageAlt: "Operator monitoring a warehouse distribution line",
      body: "Even with a good grid connection, most commercial and residential sites need backup power. We can arrange backup generation planning and sizing through our partners, so the capacity you install fits your real load, not a guess. Well-sized backup power avoids two common problems: paying for more capacity than you need, and finding out during an outage that you have too little.",
    },
  ],
  notes: [
    {
      title: "Why Work Through Saair",
      points: [
        "One point of contact for a range of specialist work",
        "Coordination handled for you, rather than you managing each partner separately",
        "Connected to your wider energy picture, because we already work with sites on gas, metering, audits and energy management",
        "A practical route for projects where the infrastructure requirements are still being defined",
      ],
    },
    {
      title: "Who This Is For",
      points: [
        "Developers and estate owners planning new projects",
        "Commercial and industrial sites needing more capacity or a better connection",
        "Site owners without the in-house team to manage multiple specialist contractors",
        "Any site where energy infrastructure is holding back operations or growth",
      ],
    },
  ],
} as const;
