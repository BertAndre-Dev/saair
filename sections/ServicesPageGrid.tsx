"use client";

import { motion, useReducedMotion } from "framer-motion";

import ServiceDetailCard from "@/components/services/ServiceDetailCard";
import StaggerContainer, {
  instantVisible,
  staggerChildVariants,
} from "@/components/motion/StaggerContainer";
import { servicesPageCards } from "@/constants";

const ServicesPageGrid = () => {
  const reduced = useReducedMotion();
  const itemVariants = reduced ? instantVisible : staggerChildVariants;

  return (
    <section className="bg-[#F5F7F7] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <StaggerContainer className="grid gap-8">
          {servicesPageCards.map((card) => (
            <motion.div key={card.number} variants={itemVariants}>
              <ServiceDetailCard
                number={card.number}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                iconSrc={card.iconSrc}
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesPageGrid;
