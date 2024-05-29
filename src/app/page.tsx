import { BeamFive } from "@/components/AnimatedBeams/BeamFive/BeamFive";
import { BeamFour } from "@/components/AnimatedBeams/BeamFour/BeamFour";
import { BeamOne } from "@/components/AnimatedBeams/BeamOne/BeamOne";
import { BeamSix } from "@/components/AnimatedBeams/BeamSix/BeamSix";
import { BeamThree } from "@/components/AnimatedBeams/BeamThree/BeamThree";
import { BeamTwo } from "@/components/AnimatedBeams/BeamTwo/BeamTwo";
import { AnimatedListComponent } from "@/components/AnimatedList/AnimatedList";
import { DockComponent } from "@/components/Dock/Dock";
import { OrbitingIcons } from "@/components/OrbitingIcons/OrbitingIcons";
import { ThemeToggler } from "@/components/ThemeToggler/ThemeToggler";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-5 gap-5">
        <ThemeToggler />
        <BeamOne />
        <BeamTwo />
        <BeamThree />
        <BeamFour />
        <BeamFive />
        <BeamSix />
        {/* <AnimatedListComponent /> */}
        <DockComponent />
        <OrbitingIcons />
      </div>
    </>
  );
}
