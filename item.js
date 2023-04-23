// Item in shopping cart

const items = require('./fakeDb')

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this);
    }
    static findAll() {
        return items
    }


    // update found items with matching name 
    static update(name, data) {
        let foundItem = Item.findAll(name);
        if (foundItem === undefined) {
            throw { message: "Not Found", status: 404 }
        }
        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

    // find and return item with matching name
    static find(name) {
        const foundItem = items.find(v => v.name === name);
        if (foundItem === undefined) {
            throw { message: "Not Found", status: 404 }
        }
        return foundItem
    }

    // remove item by matching id
    static remove(name) {
        let foundIDx = items.findIndex(v => v.name === name);
        if (foundIDx === -1) {
            throw { message: "Not Found", status: 404 }
        }
        items.splice(foundIDx, 1);
    }
}

module.exports = Item;