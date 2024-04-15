
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="https://avatars.githubusercontent.com/u/16511436?s=400"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Antonio Musolino</h1>
            <p>Software Engineer</p>
            <div className="social-links">
              <a href="https://facebook.com/antonio.k.musolino" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/antoniomuso" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/totone_mu" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/in/antonio-musolino" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
