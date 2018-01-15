const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean1812', { useMongoClient: true });
mongoose.Promise = global.Promise;

const catSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number }
});

const Cat = mongoose.model('Cat', catSchema);

const kitty = new Cat({ name: 'Kitty', age: 2 });
kitty.save()
.then(x => console.log(x))
.catch(err => console.log(err));
