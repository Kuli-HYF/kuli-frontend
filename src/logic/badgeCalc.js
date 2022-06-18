import { put } from "../api/put";

export const badgeCalc = (toCalc, companyId, badgeArray) => {
  // console.log("to calculate", toCalc, companyId, badgeArray);
  const filtered = toCalc.filter((val) => Number(val[2]) !== 0);

  const groups = [];

  for (let i = 1; i < filtered.length + 10; i++) {
    const group = [];
    filtered.map((val) =>
      Number(val[0]) === i ? group.push(val) : console.log("nope")
    );
    groups.push(group);
  }
  const scores = groups.filter((group) => group.length !== 0);

  const totals = [];

  const badges = [];
  badges.push(badgeArray.map((badge) => badge.id));
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
    return console.log(average);
  });

  const sort = totals.sort((a, b) => a.average - b.average);

  const sorted = sort[sort.length - 1];

  let toUpdate = {};
  sorted.average >= 3 ? (toUpdate.badge = sorted.badge) : (toUpdate.badge = 0);

  const badgeId = toUpdate.badge;

  const testArray = [];
  badges[0].map((badge) =>
    badge === Number(badgeId) ? testArray.push(badge) : console.log("screen")
  );
  if (badgeId === 0) {
    console.log("no badge to award");
    return;
  }
  if (testArray.length !== 0) {
    console.log("already has badge");
    return;
  } else {
    badges[0].push(Number(badgeId));
    console.log("doesn't have badge", badgeId, badges[0]);

    const awardBadge = async (companyId, badges) => {
      const idArray = [];
      badges[0].map((badge) => idArray.push({ id: badge }));
      // console.log("to send", idArray);
      const search = `companies/${companyId}/?populate=badges`;
      const body = {
        data: {
          badges: idArray,
        },
      };
      const result = await put(search, body);
      console.log(result);
    };
    awardBadge(companyId, badges);
  }
};
