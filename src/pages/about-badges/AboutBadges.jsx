import "./AboutBadges.css";

import ReactFullpage from "@fullpage/react-fullpage";
import Navigation from "../../components/navigation/Navigation";

export const AboutBadges = () => (
  <>
    <Navigation />

    <ReactFullpage
      //fullpage options
      licenseKey={"6T7KK-A9N9J-0I7FI-KSK7H-AAQLO"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            
            <div className="section">
              <div className="about-badges__container">
                <div className="about-badges__title-container">
                  <h2 className="about-badges__title">About our system</h2>
                </div>

                <div className="about-badges__text-container">
                  <p className="about-badges__body-text">
                    Gender Equality and Diversity are fundamental rights and are
                    prerequisites for achieving sustainable development and
                    growth. Evidence shows that promoting gender equality
                    fosters social and economic development and contributes to
                    improving the overall outcomes and sustainability of
                    activities. <br></br>
                    <br></br> The Kuli System provides a tool that allows users
                    to share their experience while recognizing the effort of
                    organizations for a more equal and sustainable society.
                  </p>
                </div>

                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Learn more
                </button>
              </div>
            </div>

            <div className="section">
              <div className="badge-container">
                <div className="badge-title__container">
                  <h2 className="badge-title">Employment and compensation</h2>
                </div>
                <div className="content1-container">
                  <div className="badge__img-container">
                    <img
                      src="https://res.cloudinary.com/doz3koti5/image/upload/v1655159113/logo_e314104866.png"
                      alt="badge"
                    />
                  </div>

                  <div className="badge__text-container">
                    <p>
                      Studies have demonstrated a link between an organization’s
                      performance and the level of diversity of its governing
                      body. Organizations need to expand this process and ensure
                      that both women and men are represented at key positions
                      throughout the administration. Having a gender balanced
                      senior management also sends a strong message to
                      employees, that the organization’s commitment to diversity
                      is not just a marketing ploy, but an actual strategic
                      corporate value. <br></br>
                      <br></br>Organizations awarded this badge have a strong
                      Gender Equality and Diversity culture at every level,
                      including their managerial and administrative positions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="badge-container">
                <div className="badge-title__container">
                  <h2 className="badge-title">
                    Work life balance and career development
                  </h2>
                </div>
                <div className="content2-container">
                  <div className="badge__img-container">
                    <img
                      src="https://res.cloudinary.com/doz3koti5/image/upload/v1655159113/logo_e314104866.png"
                      alt="badge"
                    />
                  </div>

                  <div className="badge__text-container">
                    <p>
                      It's been found that the lack of flexibility can impact
                      negatively the career development of employees. This is
                      particularly true for women with children who pursue a
                      career. Organizations are also impacted by the loss of
                      valuable talent, and continuity in projects. Flexible work
                      policies include flexible scheduling and flexible work
                      location as well as the ability to take a temporary career
                      break and then re-enter the workforce. <br></br>
                      <br></br>Organizations that earned this badge try to offer
                      a flexible work environment and use it as a tool to
                      promote career development and wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="badge-container">
                <div className="badge-title__container">
                  <h2 className="badge-title">
                    Health, safety and freedom from violence
                  </h2>
                </div>
                <div className="content3-container">
                  <div className="badge__img-container">
                    <img
                      src="https://res.cloudinary.com/doz3koti5/image/upload/v1655159113/logo_e314104866.png"
                      alt="badge"
                    />
                  </div>

                  <div className="badge__text-container">
                    <p>
                      Some studies have revealed that investing in employee
                      health reduces worker absenteeism, improves worker morale,
                      and increases employee job commitment and productivity. It
                      is often illegal to discriminate against employees based
                      on their health status. It is important for organizations
                      to understand and address the different types of needs,
                      also from a gender perspective. <br></br>
                      <br></br>Organizations awarded with this badge have have a
                      comprehensive view on the health of their members, which
                      includes a gender perspective.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="badge-container">
                <div className="badge-title__container">
                  <h2 className="badge-title">Governance and leadership</h2>
                </div>
                <div className="content4-container">
                  <div className="badge__img-container">
                    <img
                      src="https://res.cloudinary.com/doz3koti5/image/upload/v1655159113/logo_e314104866.png"
                      alt="badge"
                    />
                  </div>

                  <div className="badge__text-container">
                    <p>
                      Studies have demonstrated a link between an organization’s
                      performance and the level of diversity of its governing
                      body. Organizations need to expand this process and ensure
                      that both women and men are represented at key positions
                      throughout the administration. Having a gender balanced
                      senior management also sends a strong message to
                      employees, that the organization’s commitment to diversity
                      is not just a marketing ploy, but an actual strategic
                      corporate value. <br></br>
                      <br></br>Organizations awarded this badge have a strong
                      Gender Equality and Diversity culture at every level,
                      including their managerial and administrative positions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);
