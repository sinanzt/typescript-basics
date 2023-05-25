console.log('------------------------Start: type-safety-----------------------');
// enum
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Maintainer"] = 2] = "Maintainer";
    Role[Role["Owner"] = 3] = "Owner";
    Role[Role["Guest"] = 4] = "Guest";
})(Role || (Role = {}));
console.log(Role.Reporter); // 0
console.log(Role); // { '0': 'Reporter', '1': 'Developer', '2': 'Maintainer', '3': 'Owner', '4': 'Guest', Reporter: 0, Developer: 1, Maintainer: 2, Owner: 3, Guest: 4 }
var Role1;
(function (Role1) {
    Role1[Role1["Reporter"] = 1] = "Reporter";
    Role1[Role1["Developer"] = 2] = "Developer";
    Role1[Role1["Maintainer"] = 3] = "Maintainer";
    Role1[Role1["Owner"] = 4] = "Owner";
    Role1[Role1["Guest"] = 5] = "Guest";
})(Role1 || (Role1 = {}));
console.log(Role1.Developer); // 1
console.log(Role1); // { '1': 'Reporter', '2': 'Developer', '3': 'Maintainer', '4': 'Owner', '5': 'Guest', Reporter: 1, Developer: 2, Maintainer: 3, Owner: 4, Guest: 5 }
var Role2;
(function (Role2) {
    Role2[Role2["Reporter"] = 1] = "Reporter";
    Role2[Role2["Developer"] = 2] = "Developer";
    Role2[Role2["Maintainer"] = 3] = "Maintainer";
    Role2[Role2["Owner"] = 4] = "Owner";
    Role2[Role2["Guest"] = 5] = "Guest";
})(Role2 || (Role2 = {}));
console.log(Role2.Reporter); // 1
console.log(Role2); // { '1': 'Reporter', '2': 'Developer', '3': 'Maintainer', '4': 'Owner', '5': 'Guest', Reporter: 1, Developer: 2, Maintainer: 3, Owner: 4, Guest: 5 }
var Role3;
(function (Role3) {
    Role3[Role3["Reporter"] = 1] = "Reporter";
    Role3[Role3["Developer"] = 2] = "Developer";
    Role3[Role3["Maintainer"] = 3] = "Maintainer";
    Role3[Role3["Owner"] = 4] = "Owner";
    Role3[Role3["Guest"] = 5] = "Guest";
})(Role3 || (Role3 = {}));
console.log(Role3.Reporter); // 1
console.log(Role3); // { '1': 'Reporter', '2': 'Developer', '3': 'Maintainer', '4': 'Owner', '5': 'Guest', Reporter: 1, Developer: 2, Maintainer: 3, Owner: 4, Guest: 5 }
console.log('------------------------End: type-safety------------------------');
