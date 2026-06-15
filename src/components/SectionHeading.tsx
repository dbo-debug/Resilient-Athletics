type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'section-heading section-heading-centered' : 'section-heading'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
