import ProfileCard from "@/components/ProfileCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { instructors } from "../../Data";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Instructors = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-1000",
    });
  });
  return (
    <section className="my-10 overflow-hidden">
      <h1 className="text-4xl font-bold text-center my-10">Our Instructors</h1>
      <div className="scrub-slide flex items-stretch gap-3 w-fit">
        {instructors.map((instructor) => (
          <ProfileCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </section>
  );
};

export default Instructors;
