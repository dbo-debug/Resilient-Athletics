type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-accent" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
