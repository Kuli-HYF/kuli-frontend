import "./Badge.css";

export const Badge = ({ badge }) => {
  return (
    <>
      <div className="survey-intro__category-list__item fadeIn">
        <img src={badge.badgeImg.data[0].attributes.url} alt="badge" />
        <p>{badge.badgeName}</p>
      </div>
    </>
  );
};
