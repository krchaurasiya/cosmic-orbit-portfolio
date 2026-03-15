import { PORTFOLIO } from '../config';

export default function Certificates() {
  return (
    <section id="certs">
      <h2 className="section-title">Certificates</h2>
      <div className="certs-grid">
        {PORTFOLIO.certificates.map((cert, i) => (
          <div className="cert-card-wrapper" key={i}>
            <div className="cert-card">
              {/* FRONT */}
              <div
                className="cert-face cert-front"
                style={{ background: `linear-gradient(135deg, ${cert.frontColor}dd, ${cert.backColor}cc)` }}
              >
                <div className="cert-badge">🎓</div>
                <div className="cert-title-text">{cert.title}</div>
                <div className="cert-issuer">{cert.issuer}</div>
                <span className="cert-hover-hint">HOVER TO REVEAL ↩</span>
              </div>

              {/* BACK */}
              <div
                className="cert-face cert-back"
                style={{ background: `linear-gradient(135deg, ${cert.backColor}cc, ${cert.frontColor}88)` }}
              >
                <div className="cert-back-title">{cert.title}</div>
                <div className="cert-detail-row">Issuer: <span>{cert.issuer}</span></div>
                <div className="cert-detail-row">Date: <span>{cert.date}</span></div>
                <div className="cert-detail-row">ID: <span>{cert.credentialId}</span></div>
                <div className="cert-detail-row" style={{ marginTop: 10 }}>Skills: <span>{cert.skills}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
