const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const conectarBD = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ Conectado a la base de datos MongoDB");
    } catch (error) {
        console.error("❌ Error al conectar la base de datos MongoDB:", error);
        process.exit(1);
    }
};

module.exports = conectarBD;
