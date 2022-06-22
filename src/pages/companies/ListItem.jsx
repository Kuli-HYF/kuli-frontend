const ListItem = ({ object, handleOnChange }) => {
  return (
    <>
      {object.map((el) => (
        <li className="filerlist-item" key={el.id}>
          <label>
            <input
              type="checkbox"
              value={el.attributes.name}
              id={el.id}
              onChange={handleOnChange}
            />
            {el.attributes.name}
          </label>
        </li>
      ))}
    </>
  );
};

export default ListItem;
