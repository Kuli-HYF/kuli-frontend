export const CompanyBadge = ({ badge }) => {
  return (
    <>
      <div className="company-detail-badge fadeIn">
        <img src={badge.attributes.image.data.attributes.url} alt="badge" />
        <p>{badge.attributes.name}</p>
      </div>
    </>
  );
};
