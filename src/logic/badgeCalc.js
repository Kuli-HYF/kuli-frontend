export const badgeCalc = (toCalc) => {
  console.log("to calculate", toCalc);
  const filtered = toCalc.filter((val) => Number(val[2]) !== 0);
  // console.log("filtered", filtered); // [111, 122, 211, 223]

  const groups = [];

  for (let i = 1; i < filtered.length + 10; i++) {
    const group = [];
    filtered.map(
      (val) => (Number(val[0]) === i ? group.push(val) : console.log("nope"))
      // console.log("last try", group, groups);
    );
    groups.push(group);
  }
  const scores = groups.filter((group) => group.length !== 0);
  // console.log("please", scores);

  const totals = [];

  scores.map((score) => {
    const total = {};
    total.badge = score[0][0];
    const sum = score.reduce((sum, num) => {
      return sum + Number(num[2]);
    }, 0);
    const average = sum / score.length;
    total.average = average;
    // console.log("total", total);
    totals.push(total);
  });
  console.log("totals", totals);

  const sort = totals.sort((a, b) => a.average - b.average);
  console.log("sorted", sort);

  const sorted = sort[sort.length - 1];

  let toUpdate = {};
  sorted.average >= 3 ? (toUpdate.badge = sorted.badge) : (toUpdate.badge = 0);
  console.log("sorted:", sorted, "to update:", toUpdate);
};
