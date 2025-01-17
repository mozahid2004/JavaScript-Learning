const fivePersonData = [
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
    }
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25,
    "email": "jane.smith@example.com",
    "address": {
      "street": "456 Elm St",
      "city": "Los Angeles",
      "state": "CA",
      "zip": "90001"
    }
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 28,
    "email": "alice.johnson@example.com",
    "address": {
      "street": "789 Oak St",
      "city": "Chicago",
      "state": "IL",
      "zip": "60601"
    }
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "age": 35,
    "email": "bob.brown@example.com",
    "address": {
      "street": "321 Pine St",
      "city": "Houston",
      "state": "TX",
      "zip": "77001"
    }
  },
  {
    "id": 5,
    "name": "Emma Wilson",
    "age": 22,
    "email": "emma.wilson@example.com",
    "address": {
      "street": "654 Maple St",
      "city": "San Francisco",
      "state": "CA",
      "zip": "94101"
    }
  }
]

const person = fivePersonData.map((item) => {
  // console.log(item.address.city);
  return item.name;
})

// console.log(person);

const productName = [
  {
      "product_id": 1,
      "name": "Wireless Mouse",
      "price": 15.99
  },
  {
      "product_id": 2,
      "name": "Mechanical Keyboard",
      "price": 45.99
  },
  {
      "product_id": 3,
      "name": "HD Monitor",
      "price": 120.50
  },
  {
      "product_id": 4,
      "name": "USB-C Charger",
      "price": 25.00
  },
  {
      "product_id": 5,
      "name": "Bluetooth Headphones",
      "price": 35.75
  },
  {
      "product_id": 6,
      "name": "External Hard Drive",
      "price": 89.99
  },
  {
      "product_id": 7,
      "name": "Gaming Chair",
      "price": 150.00
  }
]

const price = productName.map( (item) => {
  return item.price;
})

console.log(price);

const sum = price.reduce((acc, currVal) => {
  return acc + currVal;
},0)

console.log(sum);
