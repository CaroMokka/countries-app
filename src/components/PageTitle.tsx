interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}
function PageTitle({ title, subtitle, className }: PageTitleProps) {
  return (
    <div className={`page-title ${className ?? ""}`}>
      <h1 className="h3 mb-2">{title}</h1>
      {subtitle && <p className="text-muted">{subtitle}</p>}
    </div>
  );
}

export default PageTitle;
