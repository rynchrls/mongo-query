## 🔒 mongo-query-utils

A simple **mongo query** builder for node.js for Node/Express.js.

### 🚀 Features

✅ **Create Documents** – Create a new document and save to database  
✅ **Fetch Documents** – Collect all or necessary documents from the database  
✅ **Update Documents** – Update all or specific document(s) from the database  
✅ **Delete Documents** – Remove documents from the database  
✅ **Join Documents** – Join documents from different tables

---

## 📦 Installation

```sh
npm install mongo-query-utils
```

---

## 🚀 Usage

### 1️⃣ **Import the Module**

```js
const {
  fetchAll,
  fetchOne,
  generate,
  fetchById,
  patchOneAndUpdate,
  patchByIdAndUpdate,
  patchOne,
  patchMany,
  replaceOne,
  removeOne,
  removeMany,
  summarize,
} = require("mongo-query-utils");
```

## Create a New Document

```js
const Table = require("your-schema");
const document = {
  first_name: "Sample",
  last_name: "Test",
};
const newDoc = await generate(document, Table, {}); // The third param is an option on how the data is served.
console.log(Table);
```

---

## 🔍 Fetch a Single Document

Fetch a single document based on the provided query.

```js
const query = { email: "user@example.com" };
const user = await fetchOne(query, User);
console.log(user); // { _id: 123, email: "user@example.com", name: "John Doe" }
```

---

## 🆔 Fetch Document by ID

Retrieve a document using its unique \_id.

```js
const id = "60d5f9e8f1c2b4a3d8f5e7c6";
const document = await fetchById(id, Table);
console.log(document);
```

---

## ✏️ Update Documents

Update the first document that matches the query.

### Update a Single Document

```js
const query = { email: "user@example.com" };
const update = { name: "Updated Name" };
const updatedDoc = await patchOneAndUpdate(query, update, User);
console.log(updatedDoc);
```

### Update a Document by ID

```js
const id = "60d5f9e8f1c2b4a3d8f5e7c6";
const update = { status: "Active" };
const updatedDoc = await patchByIdAndUpdate(id, update, Table);
console.log(updatedDoc);
```

### Update Multiple Documents

```js
const query = { status: "Pending" };
const update = { status: "Completed" };
const updatedDocs = await patchMany(query, update, Table);
console.log(updatedDocs);
```

---

## 🔄 Replace a Document

Replace an entire document with new data.

```js
const query = { email: "user@example.com" };
const newDocument = { email: "user@example.com", name: "New Name" };
const replacedDoc = await replaceOne(query, newDocument, User);
console.log(replacedDoc);
```

---

## 🗑️ Delete Documents

### Delete a Single Document

```js
const query = { email: "user@example.com" };
const deletedDoc = await removeOne(query, User);
console.log(deletedDoc);
```

### Delete Multiple Documents

```js
const query = { status: "Inactive" };
const deletedDocs = await removeMany(query, User);
console.log(deletedDocs);
```

---

## 🔗 Join Collections

Join documents from two collections using $lookup.

```js
const pipeline = [
  {
    $match: {_id: 'sample_id'}
    $lookup: {
      from: "orders",        // Collection to join
      localField: "_id",      // Field in primary collection
      foreignField: "userId", // Field in foreign collection
      as: "userOrders"        // Output array
    }
  }
];
const usersWithOrders = await summarize(pipeline, User);
console.log(usersWithOrders);
```

---

## 🛠️ Options

Each function accepts an optional third parameter for customization:

```js
const options = { sort: { createdAt: -1 }, limit: 10 };
const latestUsers = await fetchAll({}, User, options);
console.log(latestUsers);
```

---

## 📜 License

MIT License. See `LICENSE` for details.

📌 **Author**: Ryan Charles Alcaraz ([github](https://github.com/rynchrls/mongo-query))

---
