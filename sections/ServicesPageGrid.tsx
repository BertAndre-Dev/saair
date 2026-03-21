import ServiceDetailCard from "@/components/services/ServiceDetailCard";
import { servicesPageCards } from "@/constants";

const ServicesPageGrid = () => {
  return (
    <section className="bg-[#F5F7F7] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="grid gap-8 ">
          {servicesPageCards.map((card) => (
            <ServiceDetailCard
              key={card.number}
              number={card.number}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              iconSrc={card.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPageGrid;
