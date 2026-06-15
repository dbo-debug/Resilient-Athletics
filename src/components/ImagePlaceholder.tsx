type ImagePlaceholderProps = {
  label: string;
  accent: string;
};

export function ImagePlaceholder({ label, accent }: ImagePlaceholderProps) {
  return (
    <div className="image-placeholder" aria-label={label}>
      <span className="image-placeholder-number">{accent}</span>
      <span className="image-placeholder-label">{label}</span>
    </div>
  );
}
