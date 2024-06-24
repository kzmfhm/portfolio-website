import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import "./globals.css";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left  ">
            <span className="text-xl ">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">khuzaima </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel in crafting elegant digital experiences and I am efficient
              in various programming languages and technologies
            </p>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
