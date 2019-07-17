const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';    // добавляет поле mood со значением 'happy'
user.hobby = 'javascript';   // заменяет значение hobby на 'javascript'
user.premium = 'false';    // заменяет значение premium на false

const entries = Object.entries(user);
for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];

    console.log(key + ': ' + value);// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
}