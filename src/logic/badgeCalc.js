import { put } from "../api/put";

export const badgeCalc = (toCalc, companyId, badgeArray) => {
  // console.log("company id", companyId, "badge array", badgeArray);
  let dummy = 0;
  const filtered = toCalc.filter((val) => Number(val[2]) !== 0);
  const groups = [];

  for (let i = 1; i < filtered.length + 10; i++) {
    const group = [];
    filtered.map((val) =>
      Number(val[0]) === i ? group.push(val) : console.log()
    );
    groups.push(group);
  }
  const scores = groups.filter((group) => group.length !== 0);
  // console.log("filterd", groups, scores);
  const totals = [];

  // console.log("badge array", badges[0]);
  scores.map((score) => {
    const total = {};
    total.badge = score[0][0];
    const sum = score.reduce((sum, num) => {
      return sum + Number(num[2]);
    }, 0);
    const average = sum / score.length;
    total.average = average;
    totals.push(total);
    return dummy;
  });

  // const sort = totals.sort((a, b) => a.average - b.average);

  // const sorted = sort[sort.length - 1];

  /*
  filtered.length !== 0
    ? sorted.average >= 3
      ? (toUpdate.badge = sorted.badge)
      : (toUpdate.badge = 0)
    : (dummy = 1);
*/

  /*
  const testArray = [];

  badgeArray.map((item) =>
    item === Number(badgeId) ? testArray.push(item) : (dummy = 2)
  );
  // console.log("compare", badgeArray, testArray);
*/

  // const badgeId = toUpdate.badge;

  /*
  if (testArray.length !== 0) {
    dummy = 4;
    return;
    }
*/

  // console.log("averages", totals);
  // let toUpdate = {};
  const badgesList = [];

  filtered.length !== 0
    ? totals.map((one) =>
        one.average >= 3 ? badgesList.push(one.badge) : (dummy = 2)
      )
    : (dummy = 1);

  const actualBadge = [];

  badgesList.map((one) =>
    badgeArray.includes(Number(one))
      ? (dummy = 3)
      : actualBadge.push(Number(one))
  );

  // console.log("badges array", badgesList);
  // console.log("to award", actualBadge);

  // toUpdate.badges = newBadges;

  // console.log("combined array", newBadges);

  // console.log("to update", newBadges);
  // const existingBadges = [];
  // existingBadges.push(badgeArray.map((item) => item.id));

  if (filtered.length === 0 || actualBadge.length === 0) {
    return;
  } else {
    const newBadges = badgeArray.concat(actualBadge);

    /*
    badgeArray.push(Number(badgeId));
    dummy = 5;
*/
    const awardBadge = async (companyId, newBadges) => {
      const idArray = [];
      newBadges.map((item) => idArray.push({ id: item }));
      // console.log("to send", idArray);
      const search = `companies/${companyId}/?populate=badges`;
      const body = {
        data: {
          badges: idArray,
        },
      };
      const result = await put(search, body);
      dummy = result;
    };
    awardBadge(companyId, newBadges);
  }
};
