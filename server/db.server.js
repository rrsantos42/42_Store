const prisma = require('@prisma/client');

let db;

if (!db)
{
    console.log("Connection created");
    db = new prisma.PrismaClient();
}

module.exports = {db};