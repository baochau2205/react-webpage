export function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <p className="eyebrow">Portfolio</p>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}
