"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import { Aperture, DatabaseZap, FileText, MessageCircleMore, Phone, Server, User } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

export function BeamFive({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <User className="text-black" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-16 w-16">
            <Server className="h-6 w-6 text-black" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
        <Circle ref={div1Ref}>
            <Aperture className="h-6 w-6 text-black" />
          </Circle>
          <Circle ref={div2Ref}>
            <FileText className="h-6 w-6 text-black" />
          </Circle>
          <Circle ref={div3Ref}>
            <Phone className="h-6 w-6 text-black" />
          </Circle>
          <Circle ref={div4Ref}>
            <MessageCircleMore className="h-6 w-6 text-black" />
          </Circle>
          <Circle ref={div5Ref}>
            <DatabaseZap className="h-6 w-6 text-black" />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}
