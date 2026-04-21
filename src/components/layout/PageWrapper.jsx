export default function PageWrapper({ title, subtitle, children }) {
  return (
    <section className="page-block container">
      <div className="page-heading">
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
