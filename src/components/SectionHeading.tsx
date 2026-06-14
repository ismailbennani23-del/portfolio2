import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-[52px] max-w-[680px]">
      <span className="eyebrow-line mb-[18px]">{eyebrow}</span>
      <h2 className="font-display text-[clamp(30px,4vw,44px)] font-medium leading-[1.08] tracking-[-0.01em] text-navy">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[17px] text-muted">{description}</p>
      ) : null}
    </Reveal>
  );
}
