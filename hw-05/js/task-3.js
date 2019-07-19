class Storage {
    constructor(storage) {
        this.item = storage;
    }

    getItems() {
        return this.item;
    }

    addItem(item) {
        return this.item.push(item);
    }

    removeItem(item) {
        for (const i of this.item) {
            if (i === item){
                this.item.splice (this.item.indexOf(i), 1);
            }
        }
        return this.item;
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.item); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.item); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

