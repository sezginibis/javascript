// başlangıçta otomatik olarak tablo oluşturma ve veri ekleme
const sequelize = require("./model/dbconfig");
const Profile = require("./model/profile");

// varsayılan yükleme verileri
sequelize.sync({ force: true }).then(async () => {
  console.log("db hazırlandı");
  for (let i = 1; i < 11; i++) {
    let num = Math.floor(Math.random() * 9000000000) + 1000000000;
    const profile = {
      name: `profil${i}`,
      email: `profil${i}@automation.com`,
      phone: num.toString()
    };
    await Profile.create(profile);
  }
  console.log("örnek veriler eklendi.");
});

// uygulama
const express = require("express");
const profileRoutes = require("./routes/profileRoutes");

const app = express();
app.use(express.json());

// uygulamanın route ları
app.get("/", (req, resp) => resp.send("uygulama ayağa kalktı ve çalışıyor"));

app.use("/api", profileRoutes.routes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Servis endpoint= http://localhost:${PORT}`);
});
