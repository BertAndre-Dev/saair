export const energyAuditPage = {
  hero: {
    imageSrc: "/service/energy-audit/hero.png",
    imageAlt: "Engineer in a yellow hard hat reviewing equipment on site",
    title: "ENERGY AUDIT AND ENERGY INTELLIGENCE",
  },
  intro: [
    "Clear, data-backed answers to what your energy really costs, where it goes, and how to spend less of it.",
    "Most sites know their monthly energy bill, but far fewer know what each unit of power actually costs them, how much fuel is being turned into useful energy, or where the losses are. Saair’s energy audit and intelligence service closes that gap. We measure, analyse and report on how your site uses energy, then turn the findings into figures your management, finance and facility teams can act on.",
  ],
  offerings: [
    {
      title: "Energy Audits for Commercial, Industrial and Residential Sites",
      imageSrc: "/service/energy/cylinders.png",
      imageAlt: "Rows of blue LPG cylinders",
      body: "An energy audit is a structured review of how your site sources, uses and pays for energy. We carry out audits across commercial, industrial and residential properties, from offices and factories to estates and apartment developments. Each audit gives you a factual baseline of your current position, so decisions about cost, equipment and supply rest on evidence rather than assumption.",
    },
    {
      title: "True Cost per Unit Delivered, by Supply Source",
      imageSrc: "/service/energy/generator.png",
      imageAlt: "Portable generator beside a gas cylinder",
      body: "Sites often run on more than one source of power, such as the grid, generators or gas. The price on each invoice rarely tells the full story once fuel, maintenance, losses and running hours are counted. We work out the true cost per unit of energy delivered from each supply source, so you can see which sources are genuinely cheapest, which are quietly expensive, and how to shift your mix accordingly.",
    },
    {
      title: "Generator Sizing and Load Performance Assessment",
      imageSrc: "/service/gas/gas-metering.png",
      imageAlt: "Wall-mounted gas meter on yellow pipework",
      body: "A generator that is too large wastes fuel, and one that is too small struggles or fails under load. We assess how your generators are sized against your actual demand and how they perform under real operating loads. You get a clear view of whether your current equipment fits your needs, and what to change if it doesn’t.",
    },
    {
      title: "Fuel Purchased versus Energy Produced Reconciliation",
      imageSrc: "/service/gas/supply.png",
      imageAlt: "Operator monitoring a warehouse distribution line",
      body: "Fuel goes in, energy comes out, and the two should match up. We reconcile the fuel you buy against the energy your generators actually produce. A gap between them can point to inefficient equipment, poor maintenance or fuel that isn’t being accounted for. This reconciliation brings those problems into the open so you can address them.",
    },
    {
      title: "Consumption Pattern and Loss Analysis",
      imageSrc: "/service/gas/diseal.png",
      imageAlt: "Green fuel nozzles at a filling point",
      body: "We analyse how energy is consumed across your site over time and identify where it is lost or wasted. This helps you to:",
      points: [
        "Understand daily, weekly and seasonal demand patterns",
        "Identify unusual or excessive consumption",
        "Locate losses and inefficiencies",
        "Prioritise the changes that will make the biggest difference",
      ],
    },
    {
      title: "Periodic Energy Reporting for Management, Finance and Facility Teams",
      imageSrc: "/service/gas/diseal.png",
      imageAlt: "Green fuel nozzles at a filling point",
      body: "Insight only helps if it reaches the right people. We provide periodic energy reports tailored to the teams that use them:",
      points: [
        "Management, for an overview of performance and key decisions",
        "Finance, for cost, budgeting and reconciliation",
        "Facility teams, for operational detail on equipment and consumption",
      ],
      closing:
        "Regular reporting keeps everyone working from the same numbers and lets you track progress over time.",
    },
  ],
  designBasis: {
    title: "Consumption Data as a Design Basis for Future Projects",
    imageSrc: "/service/gas/diseal.png",
    imageAlt: "Green fuel nozzles at a filling point",
    body: "Real consumption data is one of the most valuable inputs to any new build or expansion. We provide it in a form that can serve as a design basis for future projects, so new power systems, generators and supply arrangements are sized on how your sites actually perform rather than on rough estimates. This reduces the risk of over-building or under-provisioning, and it saves on cost from the start.",
  },
  audience: {
    title: "Who This Is For",
    points: [
      "Estate and residential development owners and managers",
      "Landlords and operators of commercial buildings and mixed-use properties",
      "Facility management companies",
      "Developers planning metering into new projects",
      "Any site where energy is consumed by occupants or third parties but revenue isn’t being fully recovered",
    ],
  },
} as const;
