import { put } from "../api/put";

export const badgeCalc = (toCalc, companyId) => {
  console.log("to calculate", toCalc);
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

  scores.map((score) => {
    const total = {};
    total.badge = score[0][0];
    const sum = score.reduce((sum, num) => {
      return sum + Number(num[2]);
    }, 0);
    const average = sum / score.length;
    total.average = average;
    totals.push(total);
  });

  const sort = totals.sort((a, b) => a.average - b.average);

  const sorted = sort[sort.length - 1];

  let toUpdate = {};
  sorted.average >= 3 ? (toUpdate.badge = sorted.badge) : (toUpdate.badge = 0);

  const badgeId = toUpdate.badge;

  const awardBadge = async (companyId, badgeId) => {
    const search = `companies/${companyId}/?populate=badges`;
    const body = {
      data: {
        badges: {
          id: badgeId,
        },
      },
    };
    const result = await put(search, body);
  };

  badgeId === 0
    ? console.log("no badge to award")
    : awardBadge(companyId, badgeId);
};
