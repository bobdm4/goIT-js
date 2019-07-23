import users from "./users.js";

// // *task1
// const getUserNames = users => users.map(el => el.name);

// console.log(getUserNames(users));

// // *task2
// const getUsersWithEyeColor = (users, color) => users.filter(users => users.eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));

// // *task3
// const getUsersWithGender = (users, gender) => users.filter(users => users.gender === gender).map(el => el.name)

// console.log(getUsersWithGender(users, 'male'));

// //*task4
// const getInactiveUsers = users => users.filter(users => !users.isActive);

// console.log(getInactiveUsers(users));

// //*task5
// const getUserWithEmail = (users, email) => users.find(el => el.email === email);

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// //*task6
// const getUsersWithAge = (users, min, max) => users.filter(users => users.age >= min && users.age <= max);

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

// //*task7
// const calculateTotalBalance = users => users.reduce((acc, el) => acc + el.balance, 0);

// console.log(calculateTotalBalance(users)); // 20916

// //*task8
// const getUsersWithFriend = (users, friendName) => users.filter(users => users.friends.includes(friendName)).map(el => el.name)

// console.log(getUsersWithFriend(users, 'Briana Decker')); 
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); 

// //*task9
// const getNamesSortedByFriendsCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(el => el.name);

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//*task10;
const getSortedUniqueSkills = users => {
    let newArr = [];
    users.forEach(user => newArr.push(...user.skills));
    const userFind = newArr.reduce((acc, el) => {
        if (!acc.includes(el)) {
            acc.push(el);
        }
        return acc;
    }, []);
    return userFind.sort();
}

console.log(getSortedUniqueSkills(users));