import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { ShieldIllustration } from "./Illustrations";

export function DottedGlowBackgroundDemoSecond() {
  return (
    
      <div className="relative flex w-full h-79 items-center justify-center overflow-hidden">
  
  {/* BACKGROUND — locked behind */}
  <DottedGlowBackground
    className="pointer-events-none
               mask-radial-to-95% dark:mask-radial-to-70%
               opacity-20 dark:opacity-100"
    opacity={1}
    gap={10}
    radius={1.6}
    colorLightVar="--color-neutral-600"
    glowColorLightVar="--color-neutral-400"
    colorDarkVar="--color-neutral-500"
    glowColorDarkVar="--color-sky-800"
    backgroundOpacity={0}
    speedMin={0.3}
    speedMax={1.6}
    speedScale={1}
  />

  {/* SHIELD — solid foreground */}
  <div className="absolute m-auto z-20 opacity-100 rounded-xl">
    <ShieldIllustration />
  </div>

</div>

  
  );
}
