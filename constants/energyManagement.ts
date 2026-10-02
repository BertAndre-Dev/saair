export const energyManagementPage = {
  hero: {
    imageSrc: "/service/energ.png",
    imageAlt: "Glowing light bulb against a dark blue background",
    title: "ENERGY MANAGEMENT",
  },
  intro: [
    "One managed system for how energy is sold, collected, monitored and reported across your sites.",
    "Supplying power to occupants is only half the job. Someone has to manage the accounts, collect the payments, watch the consumption and report on the costs. On many sites that work is scattered across spreadsheets, manual collections and disconnected systems. Saair’s energy management service brings it together, so owners and operators can run their energy operation with clarity and control instead of chasing it.",
  ],
  offerings: [
    {
      title:
        "Prepaid Energy Management for Residential, Mixed-Use and Commercial Sites",
      imageSrc: "/service/energy/cylinders.png",
      imageAlt: "Rows of blue LPG cylinders",
      body: "We manage prepaid energy for residential, mixed-use and commercial properties, from apartment estates to office complexes to developments that combine both. Occupants pay for energy in advance, so consumption is funded before it is used. For owners and operators, that means steadier cash flow, fewer arrears and no more disputes over estimated bills. The approach adapts to the mix of residents, tenants and businesses on your site.",
    },
    {
      title: "Energy Revenue Management and Collection",
      imageSrc: "/service/energy/generator.png",
      imageAlt: "Portable generator beside a gas cylinder",
      body: "Money owed for energy is often the hardest money to collect. We manage energy revenue and collection on your behalf, tracking what has been paid and what is due across every unit, and keeping the collection process running consistently. You get reliable recovery of energy costs without dedicating your own staff to billing follow-up.",
    },
    {
      title:
        "Centralised Visibility of Energy Consumption across Units and Sites",
      imageSrc: "/service/gas/gas-metering.png",
      imageAlt: "Wall-mounted gas meter on yellow pipework",
      body: "You shouldn’t have to visit each unit, or log into a separate system for each site, to know what is happening. We give you one central view of energy consumption across all your units and all your sites. From a single place, you can see:",
      points: [
        "How much each unit and site is consuming",
        "Where consumption is unusually high or low",
        "How usage compares across properties",
        "Which units and sites need attention",
      ],
      closing:
        "For operators managing more than one property, this replaces a patchwork of reports with one consistent picture.",
    },
    {
      title: "Energy Cost Reporting for Site Owners and Operators",
      imageSrc: "/service/gas/supply.png",
      imageAlt: "Operator monitoring a warehouse distribution line",
      body: "Owners and operators need to know what energy is costing them and how that compares with what is being recovered. We provide energy cost reporting that sets out costs, consumption and collection in a form you can use for budgeting, review and decision-making. Regular reporting removes guesswork from energy costs and gives you evidence to work from when planning ahead.",
    },
  ],
  notes: [
    {
      title: "How This Fits with Our Other Services",
      points: [
        "Energy management works best alongside our other services. It runs on the data from our smart prepaid metering, and it can draw on the findings of an energy audit to show where costs can be reduced. You can take it as a standalone service or as part of a wider Saair energy arrangement for your site.",
      ],
    },
    {
      title: "Who This Is For",
      points: [
        "Estate and residential development owners and managers",
        "Landlords and operators of commercial and mixed-use properties",
        "Facility management companies looking after energy for multiple clients",
        "Owners of several properties who want one view across all of them",
        "Any site owner who wants energy costs recovered reliably and reported clearly",
      ],
    },
  ],
} as const;
