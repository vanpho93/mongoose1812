const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean1812', { useMongoClient: true });
mongoose.Promise = global.Promise;

const catSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    age: { type: Number }
});

const Cat = mongoose.model('Cat', catSchema);

// const kitty = new Cat({ name: 'Kitty', age: 2 });
// kitty.save()
// .then(x => console.log(x))
// .catch(err => console.log(err));

// Cat.insertMany([
//     { name: 'K2', age: 1 },
//     { name: 'K3', age: 3 },
// ])
// .then(x => console.log(x))
// .catch(err => console.log(err));

/*
    find()
    findById()
    findOne()
*/

Cat.find({ age: 1 }, { age: 0, _id: 0, __v: 0 })
.then(cats => console.log(cats))
.catch(err => console.log(err));
