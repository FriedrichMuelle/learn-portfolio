import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface projectcardprops {
  value: any;
  num: number
}
const ProjectCards: React.FC<projectcardprops> = ({ value, num }) => {
  return (
    <FramerWrapper
      className="w-[32%] max-lg:w-full p-6 rounded-lg border bg-card shadow-sm h-[280px] flex flex-col justify-between"
      y={100}
      delay={num * 0.1}
    >
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-xl">{value.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{value.description}</p>
        <div className="w-full h-fit flex flex-row gap-3 flex-wrap">
          {value.tags.map((itm:string, indx:number) => (
            <span className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
              itm === 'Nextjs' ? 'bg-teal-100 text-teal-800' : 
              itm === 'Freelancing' ? 'bg-yellow-100 text-yellow-800' : 
              itm === 'Shadcn Ui' ? 'bg-blue-100 text-blue-800' : 
              itm === 'Typescript' ? 'bg-red-100 text-red-800' : 
              'bg-gray-100 text-gray-800'
            }`} key={indx}>{itm}</span>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          href={value.link}
          target="blank"
          className={cn(buttonVariants({ variant: "default", size: "lg" }),"flex")}
        >
          Visit Project <ArrowUpRight className="h-5 w-5 ml-1" />
        </Link>
      </div>
    </FramerWrapper>
  );
};

export default ProjectCards;
