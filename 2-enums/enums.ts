console.log('------------------------Start: type-safety-----------------------');

// enum
enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role.Reporter); // 0
console.log(Role); // { '0': 'Reporter', '1': 'Developer', '2': 'Maintainer', '3': 'Owner', '4': 'Guest', Reporter: 0, Developer: 1, Maintainer: 2, Owner: 3, Guest: 4 }

enum Role1 {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role1.Developer); // 1
console.log(Role1); // { '1': 'Reporter', '2': 'Developer', '3': 'Maintainer', '4': 'Owner', '5': 'Guest', Reporter: 1, Developer: 2, Maintainer: 3, Owner: 4, Guest: 5 }

enum Role2 {
    Reporter = 1,
    Developer = 2,
    Maintainer = 3,
    Owner = 4,
    Guest = 5
}
console.log(Role2.Reporter); // 1
console.log(Role2); // { '1': 'Reporter', '2': 'Developer', '3': 'Maintainer', '4': 'Owner', '5': 'Guest', Reporter: 1, Developer: 2, Maintainer: 3, Owner: 4, Guest: 5 }

enum Role3 {
    Reporter = 1,
    Developer = 2,
    Maintainer = 3,
    Owner = 4,
    Guest = 5
}
console.log(Role3.Reporter); // 1
console.log(Role3); // { '1': 'Reporter', '2': 'Developer', '3': 'Maintainer', '4': 'Owner', '5': 'Guest', Reporter: 1, Developer: 2, Maintainer: 3, Owner: 4, Guest: 5 }

console.log('------------------------End: type-safety------------------------');