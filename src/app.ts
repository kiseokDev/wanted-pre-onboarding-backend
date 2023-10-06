import "reflect-metadata";
import express from 'express';
import { MyDataSource } from './data-source';
import { JobPost } from './entities/JobPost.entity';
const app = express();

try {
    MyDataSource.initialize();
    console.log("Data Source has been initialized!");
} catch (error) {
    console.error("Error during Data Source initialization", error);
}

app.get('/', async (req, res) => {
    const db = MyDataSource.getRepository(JobPost);
    const newJobPost = new JobPost();

    newJobPost.companyId = 123;
    newJobPost.position = "position";
    newJobPost.reward = 123;
    newJobPost.description = "description";
    newJobPost.techStack = "techStack";

    await db.save(newJobPost)

    res.send('Hello World!!!!@@!');
});
  
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// When the process is exited or terminated (e.g. by Ctrl+C), close the database connection.
process.on('exit', async () => {
    await MyDataSource.destroy();
    console.log('Database connection closed');
});

process.on('SIGINT', async () => {
    await MyDataSource.destroy();
    console.log('Database connection closed due to application termination');
    process.exit(0);
});
