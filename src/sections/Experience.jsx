export default function Experience({ experiences }) {
  return (
    <section className="section" id="experience">
      <div className="section-head">
        <p className="eyebrow">Places i worked at</p>
      </div>
      <div className="stacked-cards">
        {experiences.map((role) => (
          <article className="card" key={role.title}>
            <div className="card-head">
              <div>
                <p className="mono-label">{role.period}</p>
                <h3>{role.title}</h3>
                <p className="muted">{role.company}</p>
              </div>
            </div>
            <ul className="list">
              {role.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

