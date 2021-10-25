"use strict";

var family = {
  dad: [
    "FullName: HIGH CHIEF Evans Emeka Amaefule 😎",
    "DOB: 24/12/1958",
    "wife: LOLO Viola-Mark Amaefule",
    ["kids:", "Miracle", "Evangel", "Manna", "Great", "Excel", "winner"],
    ["grandKids:", "mmeso", "splendour", "purity"],
  ],
  mom: [
    " FullName: LOLO Viola-Mark Amaefule 😁😘😍",
    "DOB: 25/12/1968",
    "HUSBAND: HIGH CHIEF Evans Emeka Amaefule",
    ["KIDS:", "Miracle", "Evangel", "Manna", "Great", "Excel", "winner"],
    ["GRANDKIDS:", "mmeso", "splendour", "purity"],
  ],
  miracle: [
    "FULLNAME: Miracle Amaefule😏",
    "DOB: 29/06/87",
    ["siblings:", "Evangel", "manna", "great", "excel", "winner"],
    ["kids:", "mmeso", "splendour"],
    "husband: Mr. Theodor Amaechi",
  ],
  evangel: [
    "FULLNAME:Evangel Amaefule🤗",
    "DOB: 15/01/89",
    ["siblings:", "Miracle", "manna", "great", "excel", "winner"],
    ["kids:", "purity"],
  ],
  manna: [
    "FULLNAME: Manna Amaefule 😁",

    "DOB: no vex, i no remember your birthday.. i think 15th january🥺",
    ["siblings:", "Evangel", "Miracle", "great", "excel", "winner"],
  ],
  great: [
    "FULLNAME: great Amaefule😁",
    "DOB: 31/07/87",
    ["siblings:", "Miracle", "Evangel", "manna", "excel", "winner"],
  ],
  excel: [
    "FULLNAME: Excel Amaefule",
    "DOB: NOT EVEN SURE 😅😪",
    ["siblings:", "Miracle", "Evangel", "manna", "great", "winner"],
  ],
  winner: [
    "FULLNAME: winner Amaefule😋🙄😫",
    "DOB: 5th nov 2002",
    ["siblings:", "Miracle", "Evangel", "manna", "great", "excel"],
  ],
  grandKids: [
    "mmeso is the first grandkid",
    "splendour is the 2nd ",
    "purity is the 3rd",
  ],
};

// console.log(family.mom.grandKids);
// alert(family.mom.fullName, family.mom.dateOfBirth, family.mom.kids);

var dataFamily = prompt(
  "please, input just the first Name or native Name of any member of our family [first letter should be in capital letter]"
);

if (
  dataFamily == "Mom" ||
  dataFamily == "Viola-Mark " ||
  dataFamily == "Raluchukwuokwu"
) {
  for (let i = 0; i < family.mom.length; i++) {
    console.log(family.mom["i"]);
    alert(family.mom[i]);
  }
} else if (
  dataFamily == "Dad" ||
  dataFamily == "Evans" ||
  dataFamily == "Emeka"
) {
  for (let i = 0; i < family.dad.length; i++) {
    console.log(family.dad["i"]);
    alert(family.dad[i]);
  }
} else if (
  dataFamily == "Adanne" ||
  dataFamily == "Miracle" ||
  dataFamily == "Chidinma"
) {
  for (let i = 0; i < family.miracle.length; i++) {
    console.log(family.miracle["i"]);
    alert(family.miracle[i]);
  }
} else if (
  dataFamily == "Evangel" ||
  dataFamily == "Sis evy" ||
  dataFamily == "Munachi"
) {
  for (let i = 0; i < family.evangel.length; i++) {
    console.log(family.evangel["i"]);
    alert(family.evangel[i]);
  }
} else if (
  dataFamily == "Manna" ||
  dataFamily == "Bro manna" ||
  dataFamily == "Ifeanyi"
) {
  for (let i = 0; i < family.manna.length; i++) {
    console.log(family.manna["i"]);
    alert(family.manna[i]);
  }
} else if (
  dataFamily == "Great" ||
  dataFamily == "Bro great" ||
  dataFamily == "Obieze"
) {
  for (let i = 0; i < family.great.length; i++) {
    console.log(family.great["i"]);
    alert(family.great[i]);
  }
} else if (
  dataFamily == "Excel" ||
  dataFamily == "Bro excel" ||
  dataFamily == "Obumneme"
) {
  for (let i = 0; i < family.excel.length; i++) {
    console.log(family.excel["i"]);
    alert(family.excel[i]);
  }
} else if (
  dataFamily == "Winner" ||
  dataFamily == "Wiwi" ||
  dataFamily == "Akuabianuju"
) {
  for (let i = 0; i < family.winner.length; i++) {
    alert(family.winner[i]);
  }
} else if (
  dataFamily == "Mmeso" ||
  dataFamily == "Victoria" ||
  dataFamily == "Victory"
) {
  alert(family.grandKids[0]);
} else if (dataFamily == "purity" || dataFamily == "piu" || dataFamily == "p") {
  alert(family.grandKids[2]);
} else if (
  dataFamily == "Splendor" ||
  dataFamily == "Splendour" ||
  dataFamily == "Chimamanda"
) {
  alert(family.grandKids[1]);
}
