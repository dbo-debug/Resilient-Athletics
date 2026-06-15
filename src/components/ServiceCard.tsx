type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
};

export function ServiceCard({ image, title, description }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card-image-wrap">
        <img className="service-card-image" src={image} alt={title} />
        <div className="service-card-overlay" />
      </div>
      <div className="service-card-body">
        <div className="service-accent" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
