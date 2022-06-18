const List = ({ children, title }) => {
  return (
    <>
      <div className="filterlist-container">
        <h4 className="filterlist-title">{title}</h4>
        <ul className="filterlist">{children}</ul>
      </div>
    </>
  );
};

export default List;
