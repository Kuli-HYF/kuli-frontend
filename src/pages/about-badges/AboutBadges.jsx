import "./AboutBadges.css";

import ReactFullpage from "@fullpage/react-fullpage";

export const AboutBadges = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"6T7KK-A9N9J-0I7FI-KSK7H-AAQLO"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section section1">
            <div className="about-badges__container">
              <div className="about-badges__title-container">
                <h2 className="about-badges__title">About our system</h2>
              </div>

              <div className="about-badges__text-container">
                <p className="about-badges__body-text">
                  Gender Equality and Diversity are fundamental rights and are
                  prerequisites for achieving sustainable development and
                  growth. Evidence shows that promoting gender equality fosters
                  social and economic development and contributes to improving
                  the overall outcomes and sustainability of activities.
                </p>
                <p className="about-badges__body-text">
                  The Kuli System provides a tool that allows users to share
                  their experience while recognizing the effort of organizations
                  for a more equal and sustainable society.
                </p>
              </div>

              <button onClick={() => fullpageApi.moveSectionDown()}>
                Learn more
              </button>
            </div>
          </div>

          <div className="section">

            <div className="badge1-container">
            <div className="badge-title__container">
              <h2 className="badge-title">Employment and compensation</h2>
            </div>
              <div className="badge1__img-container">
                <img
                  src="https://res.cloudinary.com/doz3koti5/image/upload/v1655159113/logo_e314104866.png"
                  alt="badge"
                />
              </div>
              <div className="badge1__text-container">
                <p>
                  Studies have demonstrated a link between an organization’s
                  performance and the level of diversity of its governing body.
                  Organizations need to expand this process and ensure that both
                  women and men are represented at key positions throughout the
                  administration. Having a gender balanced senior management
                  also sends a strong message to employees, that the
                  organization’s commitment to diversity is not just a marketing
                  ploy, but an actual strategic corporate value.
                </p>
                <p>
                  Organizations awarded this badge have a strong Gender Equality
                  and Diversity culture at every level, including their
                  managerial and administrative positions.
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="badge2-container">
              <div className="badge2__img-container">
                <img
                  src="https://res.cloudinary.com/doz3koti5/image/upload/v1655159113/logo_e314104866.png"
                  alt="badge"
                />
              </div>
              <div className="badge2__title-container">
                <h2>Work life balance and career development</h2>
              </div>
              <div className="badge2__text-container">
                <p></p>
                <p></p>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="badge3-container">
              <div className="badge3__img-container">
                <img
                  src="https://res.cloudinary.com/doz3koti5/image/upload/v1655159113/logo_e314104866.png"
                  alt="badge"
                />
              </div>
              <div className="badge3__title-container">
                <h2>Health, safety and freedom from violence</h2>
              </div>
              <div className="badge3__text-container">
                <p></p>
                <p></p>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="badge4-container">
              <div className="badge4__img-container">
                <img
                  src="https://res.cloudinary.com/doz3koti5/image/upload/v1655159113/logo_e314104866.png"
                  alt="badge"
                />
              </div>
              <div className="badge4__title-container">
                <h2>Governance and leadership</h2>
              </div>
              <div className="badge4__text-container">
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
