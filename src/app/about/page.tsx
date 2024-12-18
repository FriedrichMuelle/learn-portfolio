import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "coding" },
    { hobby: "playing games" },
    { hobby: "Watching Anima" },
    { hobby: "Tech Blog writing" },
    { hobby: "creating Cool Projects" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-white">
      <Badge className="inline-flex items-center gap-2 mb-6">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="space-y-6 mb-12">
        <Heading>
          Software Engineer And Web <br /> Developer, Based In India.
        </Heading>
   
        <FramerWrapper y={0} x={100}>
          <p className="text-lg leading-relaxed text-primary/90 max-w-3xl">
            I am a Full Stack Web Developer from Ramgarh cantt, Jharkhand,
            India. I love crafting cool web projects and also open-source
            contribuitions. My biggest achievement lies in my mastery of
            JavaScript and CSS, ensuring pixel-perfect designs that captivate
            users. With a keen eye for detail and a commitment to delivery
            speed, I excel at creating seamless and responsive interfaces that
            leave a lasting impression.
          </p>
        </FramerWrapper>
      </div>

      <FramerWrapper className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" y={100} delay={0.30}>
        <Aboutfooter />
      </FramerWrapper>

      <FramerWrapper y={100} delay={0.31}>
        <h1 className="flex items-center gap-2 text-2xl font-semibold mb-6">
          <Heart className="h-6 w-6" /> 
          Hobbies
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((val, indx) => (
            <div
              key={indx}
              className="flex items-center gap-2 text-lg text-primary/90"
            >
              <Circle className="h-2 w-2 flex-shrink-0" /> 
              <span>{val.hobby}</span>
            </div>
          ))}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
