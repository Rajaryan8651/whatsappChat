import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user:codeforinterview@chatapp-shard-00-00.k6q8p.mongodb.net:27017,chatapp-shard-00-01.k6q8p.mongodb.net:27017,chatapp-shard-00-02.k6q8p.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-fnlqbi-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;