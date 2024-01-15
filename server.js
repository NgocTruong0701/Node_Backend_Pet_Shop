const app = require('./src/app');

const PORT = 3055

const server = app.listen(PORT, ()=>{
    console.log(`BACKEND SHOP PET started with port ${PORT}`);
})

process.on('SIGINT', () => {
    server.close(() => {
        console.log(`Exist Server Express`);
    });
})