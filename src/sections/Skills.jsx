export default function Skills({ skills }) {
  return (
    <section className="section" id="skills">
      <div className="section-head">
        <p className="eyebrow">Skills</p>
        <h2>Tools I'm trying to get better at</h2>
      </div>
      <div className="grid skills">
        {skills.map((skill) => (
          <div className="pill strong" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

