export const CompanyBadge = ({ badge }) => {
  return (
    <>
      <div className="survey-intro__category-list__item fadeIn">
        <img src={badge.attributes.image.data.attributes.url} alt="badge" />
        <p>{badge.attributes.name}</p>
      </div>
    </>
  );
};
