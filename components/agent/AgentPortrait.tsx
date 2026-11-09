import Image from "next/image";

const PORTRAIT_SRC = "/images/agent/dr-jan-duffy.png";

type AgentPortraitProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  priority?: boolean;
  caption?: boolean;
};

const SIZES = {
  sm: 64,
  md: 96,
  lg: 144,
  xl: 192,
} as const;

/**
 * Dr. Jan Duffy circular portrait — use in schedule, about, contact, and agent CTAs.
 */
export default function AgentPortrait({
  size = "md",
  className = "",
  priority = false,
  caption = false,
}: AgentPortraitProps) {
  const px = SIZES[size];

  return (
    <figure className={`inline-flex flex-col items-center gap-2 ${className}`}>
      <Image
        src={PORTRAIT_SRC}
        alt="Dr. Jan Duffy, Las Vegas REALTOR® — call or schedule online"
        width={px}
        height={px}
        priority={priority}
        className="rounded-full object-cover"
        style={{ width: px, height: px }}
      />
      {caption ? (
        <figcaption className="text-center">
          <span className="block text-sm font-semibold tracking-wide">Dr. Jan Duffy</span>
          <span className="block text-xs opacity-70">REALTOR® · S.0197614.LLC</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

export { PORTRAIT_SRC };
