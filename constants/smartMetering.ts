export const smartMeteringPage = {
  hero: {
    imageSrc: "/service/smart-meter.png",
    imageAlt: "A row of installed smart electricity meters",
    title: "SMART METERING AND REVENUE RECOVERY",
  },
  intro: [
    "Prepaid metering that ensures every unit of energy consumed on your site is measured, billed and paid for.",
    "On many estates, commercial buildings and mixed-use developments, energy is consumed faster than it is paid for. Shared supply, manual billing and unmetered points all let revenue slip away. Saair’s smart metering service closes those gaps. We supply, install and manage prepaid metering, and we connect it to the vending, billing and reporting tools that turn consumption into collected revenue.",
  ],
  offerings: [
    {
      title: "Smart Prepaid Meter Supply",
      imageSrc: "/service/smart-meter/meter.png",
      imageAlt: "Wall-mounted gas meter on yellow pipework",
      body: "We supply smart prepaid meters in both single-phase and three-phase configurations. Single-phase meters suit apartments, shops and smaller units. Three-phase meters serve larger loads such as commercial tenants, industrial units and bigger facilities. Whatever your site's mix of occupants, we can meter every point with the right equipment.",
    },
    {
      title: "Installation, Commissioning and Configuration,",
      imageSrc: "/service/smart-meter/saair.png",
      imageAlt: "Wall-mounted gas meter on yellow pipework",
      body: "A meter only recovers revenue if it is set up correctly. Our team handles installation, commissioning and configuration, so each meter is properly connected, tested and configured for your tariff and site before it goes live. You get working metering from day one, without stitching together separate suppliers and installers.",
    },
    {
      title: "STS-Compliant Prepaid Metering and Token Management",
      imageSrc: "/service/smart-meter/meter2.png",
      imageAlt: "Wall-mounted gas meter on yellow pipework",
      body: "Our prepaid metering is STS-compliant, meaning it follows the Standard Transfer Specification, the widely recognised standard for prepaid electricity meters and token generation. In practice, occupants buy credit and load it onto their meter using a secure token, and we manage token generation and control behind the scenes. Compliance with a recognised standard gives you a system that is secure, interoperable and proven.",
    },
    {
      title: "Vending and Payment Channel for Occupants",
      imageSrc: "/service/smart-meter/betahub2.png",
      imageAlt: "Mobile app showing a prepaid energy wallet balance",
      body: "Collecting payment should be easy for the people paying. We provide a vending and payment channel through which occupants can purchase energy credit for their units, so buying power is convenient for them and reliable for you. Payments are recorded automatically, and you no longer have to chase manual collections.",
    },
    {
      title: "Automated Billing and Revenue Reporting",
      imageSrc: "/service/smart-meter/bertahub.png",
      imageAlt: "Berta meter management dashboard on a laptop",
      body: "Every purchase and every unit of consumption is captured in the system. Automated billing and revenue reporting gives owners, operators and finance teams a clear, current view of:",
      points: [
        "What each unit has consumed and paid",
        "Total revenue collected across the site",
        "Outstanding positions and collection performance",
        "Trends over time, ready for management and finance review",
      ],
      closing:
        "The result is less manual reconciliation and more confidence in your numbers.",
    },
    {
      title: "Tamper Detection and Alerts",
      imageSrc: "/service/smart-meter/tamper.png",
      imageAlt: "Hands working inside an open electricity meter",
      body: "Revenue leakage often comes from meters being bypassed or interfered with. Our meters and monitoring detect tampering and raise alerts, so suspicious activity is flagged early rather than discovered months later in a shortfall. Catching it quickly protects your revenue and keeps the metering honest for everyone on site.",
    },
    {
      title: "Remote Monitoring and Management",
      imageSrc: "/service/smart-meter/remote.png",
      imageAlt: "Berta overview dashboard showing estate revenue",
      body: "Our smart meters can be monitored and managed remotely. Your team can check status, review consumption and manage meters without visiting every unit, which saves time, reduces site visits and speeds up your response when something needs attention.",
    },
    {
      title: "Head-End System Integration",
      imageSrc: "/service/smart-meter/head.png",
      imageAlt: "Illustration of meters connected to a central monitoring platform",
      body: "The head-end system is the central platform that communicates with your meters and gathers their data. We integrate your meters with a head-end system so that readings, events and controls all flow into one place. This gives you a single, connected view of your metering estate rather than a collection of isolated devices.",
    },
    {
      title:
        "Metering for Common Services, Contractor Supply Points and Vacant Units",
      imageSrc: "/service/smart-meter/meterin.png",
      imageAlt: "Four smart meters mounted on a distribution board",
      body: "Revenue recovery isn’t only about occupied units. We also meter the points that commonly go unmeasured:",
      points: [
        "Common services, such as corridors, lifts, water pumps, security and shared lighting",
        "Contractor supply points, where builders and service providers draw power on your site",
        "Vacant units, so that consumption in unoccupied spaces is visible and accounted for",
      ],
      closing:
        "Metering these points gives you a full picture of where your energy goes and who should be paying for it.",
    },
    {
      title: "Meter Maintenance, Replacement and Technical Support",
      imageSrc: "/service/smart-meter/saair.png",
      imageAlt: "SAAIR technician installing a three-phase electricity meter",
      body: "Metering is a long-term system, and it needs to keep working. We provide meter maintenance, replacement of faulty or ageing units, and technical support. Your metering estate stays accurate and dependable, and there is a team to call when something goes wrong.",
    },
  ],
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
