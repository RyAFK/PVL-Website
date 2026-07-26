import Image from "next/image";
import styles from "./hero-eye-journey.module.css";

const FRAMES = [
  "frame-01-slit-lamp-pov",
  "frame-02-scope-push-in",
  "frame-03-corneal-surface",
  "frame-04-corneal-layers",
  "frame-05-anterior-chamber-iris",
  "frame-06-natural-crystalline-lens",
  "frame-07-inside-lens",
  "frame-08-vitreous-focus",
  "frame-09-retinal-focal-point",
];

const LOOP_DURATION_SECONDS = 16;

export function HeroEyeJourney() {
  const slot = LOOP_DURATION_SECONDS / FRAMES.length;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {FRAMES.map((frame, index) => (
        <Image
          key={frame}
          src={`/images/hero-eye-journey/${frame}.png`}
          alt=""
          fill
          preload={index === 0}
          sizes="100vw"
          quality={95}
          className={`${styles.frame} object-cover`}
          style={{ animationDelay: `${(index * slot).toFixed(4)}s` }}
        />
      ))}
    </div>
  );
}
