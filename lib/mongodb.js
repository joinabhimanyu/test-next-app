import mongoose from 'mongoose';

const connection = {};

async function connectDB() {
    if (connection.isConnected) {
        console.log('db already connected');
        return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URI || '', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.once('open', () => console.log('Connected to a MongoDB instance'));
    mongoose.connection.on('error', error => console.error(error));

    connection.isConnected = db.connections[0].readyState;
}

export default connectDB;