
import app from './app';
import mongoose from 'mongoose';
const port: number = 5000;
// databse connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/module_6');
        console.log('hello there !');
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.log('falied to connect data', error);
    }
}
main();



