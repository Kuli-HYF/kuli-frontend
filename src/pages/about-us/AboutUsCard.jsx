const AboutUsCard = ({ teamMember }) => {
  // const [teamMembers, setTeamMembers] = useState([]);

  // const fetchCompanies = async () => {
  //   const result = await get("about-us?populate[teamMembers][populate]=*");
  //   setAboutUs(result.data.attributes.teamMembers);
  //   console.log(result.data.attributes.teamMembers);
  // };

  // useEffect(() => {
  //   fetchCompanies();
  //   console.log(aboutUs);
  // }, []);

  return (
    <div className="about-us__card-container">
      <div className="about-us__card-picture__container">
        <img
          className="about-us__card-picture"
          src={teamMember.picture.data.attributes.formats.thumbnail.url}
          alt='profile'
        ></img>
      </div>

      <h3 className="about-us__card-title">{teamMember.name}</h3>

      <hr className="about-us-line"></hr>

      <div className="about-us__card-description">{teamMember.description}</div>

      <div className="about-us__card-link-container">
        <div className="about-us__link">
          <a href={teamMember.socialMedia1}>
            <img src="https://res.cloudinary.com/doz3koti5/image/upload/v1655796248/icons8_github_ccfb07920f.svg?updated_at=2022-06-21T07:24:09.863Z" alt="github" />
          </a>
        </div>
        <div className="about-us__link">
          <a href={teamMember.socialMedia2}>
            <img src="https://res.cloudinary.com/doz3koti5/image/upload/v1655796248/icons8_linkedin_b269338d36.svg?updated_at=2022-06-21T07:24:09.975Z" alt="linkedIn" />
          </a>
        </div>
        <div className="about-us__link">
          <a href={teamMember.socialMedia3}>
            <img src="https://res.cloudinary.com/doz3koti5/image/upload/v1655796248/icons8_developer_96_e407e3f0e7.png?updated_at=2022-06-21T07:24:08.381Z" alt="personal page" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
