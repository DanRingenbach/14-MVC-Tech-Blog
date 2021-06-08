const seedUsers = require("./userData");
const sequelize = require("../config/connection");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  
  process.exit(0);
};

seedDatabase();