const shoppingLists = [
    {
        listName: 'Groceries',
        id: 1,
        url: 'https://example.com/groceries',
        userID: 1,
        listItem: [
            {
                itemName: 'Apples',
                itemQuantity: 5,
                itemImage: ['https://example.com/images/apples.jpg'],
                maxPricePerUnit: 2.5
            },
            {
                itemName: 'Milk',
                itemQuantity: 2,
                itemImage: ['https://example.com/images/milk.jpg', 'https://example.com/images/milk-label.jpg'],
                maxPricePerUnit: 3.0
            }
        ]
    },
    {
        listName: 'Household Supplies',
        id: 2,
        url: 'https://example.com/household',
        userID: 1,
        listItem: [
            {
                itemName: 'Toilet Paper',
                itemQuantity: 12,
                itemImage: ['https://example.com/images/toilet_paper.jpg'],
                maxPricePerUnit: 1.0
            },
            {
                itemName: 'Dish Soap',
                itemQuantity: 1,
                itemImage: ['https://example.com/images/dish_soap.jpg'],
                maxPricePerUnit: 4.0
            }
        ]
    }
];



module.exports = shoppingLists;
