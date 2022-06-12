export const badgeCalc = (toCalc) => {
  console.log("to calculate", toCalc);
  const filtered = toCalc.filter((val) => Number(val[2]) !== 0);
  console.log("filtered", filtered);
  const groupObject = {};

  const groups = filtered.map((val, i) =>
    val[0] === i ? (groupObject.i = val) : console.log("ping")
  );
  console.log("grouped", groups);

  /*
  const groups = filtered.map((val, i) =>
    val[0] === String(filtered[i + 1])[0]
      ? console.log("equal", val, filtered[i + 1])
      : console.log("nope", val, filtered[i + 1])
  );
*/
  /*
  const groups = filtered.sort((val1, val2) => {
    const intoArr = [];
    val1[0] === val2[0] ? intoArr.push(val1) : console.log("ping");
    return intoArr;
  });
  */
  // console.log("groups", groups);
};
