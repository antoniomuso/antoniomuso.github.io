import type { NextPage } from "next";
import env from "../../components/utils/envs";
import { GitHub } from "../../components/utils/github";

const getData = async () => {
  const client = new GitHub(env.GITHUB_USERNAME, env.GITHUB_TOKEN);

  const githubProfileBio = await client.getProfileBio();

  return { githubProfileBio };
};

const About: NextPage = async () => {
  const { githubProfileBio } = await getData();

  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Antonio Musolino a{" "}
                    <span>DevEx - Software Engineer</span>
                  </h2>
                  <p>{githubProfileBio}</p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website:
                        <a href="https://antoniomusolino.com">
                          <span>antoniomusolino.com</span>
                        </a>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        GitHub:
                        <a href="https://github.com/antoniomuso">
                          <span>github.com/antoniomuso</span>
                        </a>
                      </p>
                    </div>

                    <div className="info-item padd-15">
                      <p>
                        Degree: <span>Computer Science</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City: <span>Rome</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row">
                      <div className="buttons padd-15">
                        <a
                          href="/contact"
                          data-section-index={0}
                          className="btn hire-me"
                        >
                          Contact Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Node.js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JavaScript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Rust</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "75%" }} />
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>PostgresSQL, MySQL</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Kubernetes</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Ansible</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Python</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Linux</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Docker</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Go</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <p>
                              <i className="fa fa-calendar" /> 2018 - March 2021
                            </p>
                            <p>
                              <i className="fa fa-building" /> Sapienza
                              University of Rome
                            </p>
                          </h6>
                          <h4 className="timeline-title">
                            Master degree in Computer Science
                          </h4>
                          <ul className="timeline-text-ul timeline-text">
                            <li>
                              <strong>Grade:</strong> 110/110 with honors,
                              equivalent to 4 GPA
                            </li>
                            <li>
                              <strong>Thesis title:</strong> "FogKube: a
                              container orchestration system for fog computing"
                            </li>
                            <li>
                              <strong>Course language:</strong> English
                            </li>
                          </ul>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <p>
                              <i className="fa fa-calendar" /> 2015 - 2018
                            </p>
                            <p>
                              <i className="fa fa-building" /> Sapienza
                              University of Rome
                            </p>
                          </h6>
                          <h4 className="timeline-title">
                            Bachelor's degree in Computer Science
                          </h4>
                          <ul className="timeline-text-ul timeline-text">
                            <li>
                              <strong>Grade:</strong> 110/110 with honors,
                              equivalent to 4 GPA
                            </li>
                            <li>
                              <strong>Thesis title:</strong> "Disambiguation of
                              natural language applied to home automation:
                              Design and implementation of CommandsBN a library
                              based on Babel-Net"
                            </li>
                            <li>
                              <strong>Course language:</strong> Italian
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <p>
                              <i className="fa fa-calendar" /> 2021 - Present
                            </p>
                            <p>
                              <i className="fa fa-building" /> Immobiliare.it
                            </p>
                            <p>
                              <i className="fa fa-map-marker" /> Remote
                            </p>
                          </h6>
                          <h4 className="timeline-title">Software Engineer</h4>
                          <p className="timeline-text">
                            Software engineer in the technology team of{" "}
                            <em>Immobiliare.it</em> oriented into developer
                            experience but also in automation, performance
                            optimization, and technology research.
                          </p>
                          <br />
                          <p className="timeline-text">
                            <ul className="timeline-text-ul timeline-text">
                              <li>
                                Orchestrated the upgrade of production
                                application tools using Ansible, ensuring
                                minimal downtime and risk mitigation.
                              </li>
                              <li>
                                Spearheaded the development of the internal
                                developer portal leveraging{" "}
                                <strong>Backstage</strong>, contributing to the
                                open-source ImmobiliareLabs Backstage Plugins
                                ecosystem.
                              </li>
                              <li>
                                Implemented CI/CD tools using Rust, optimizing
                                development workflows and ensuring efficient
                                delivery pipelines.
                              </li>
                              <li>
                                Designed and integrated data visualization tools
                                (DevLake) with Grafana and MySQL, enhancing
                                data-driven decision-making.
                              </li>
                              <li>
                                Provided high-level support to the product team
                                for critical tasks on Node.js, ensuring
                                application stability, performance, and
                                security.
                              </li>
                            </ul>
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
