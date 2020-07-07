
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://josimar:ivgvinci@cluster0.bj9yj.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, });
client.connect( async (err) => {
  const collection = client.db('contabil').collection('usuarios');

  const documents =await collection.find().sort({name: (-1)}).limit(1).toArray();
  console.log(documents);

  client.close();
});
