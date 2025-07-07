interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}
function PageTitle({ title, subtitle, className }: PageTitleProps) {
  return (
    <div className={`page-title ${className ?? ""}`}>
      <h1 className="h3 my-3">{title}</h1>
      {subtitle && <h5 className="text-muted">{subtitle}</h5>}
    </div>
  );
}

export default PageTitle;
