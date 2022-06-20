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
        ></img>
      </div>

      <h3 className="about-us__card-title">{teamMember.name}</h3>

      <hr className="about-us-line"></hr>

      <div className="about-us__card-description">{teamMember.description}</div>

      <div className="about-us__card-link-container">
        <div className="about-us__link">linkedin</div>
        <div className="about-us__link">github</div>
      </div>
    </div>
  );
};

export default AboutUsCard;
