module.exports = {
  mongoURI: "mongodb+srv://adminAphrodite:xbRW67LuEkDd3Rg@cluster0.hocbn.mongodb.net/aphro-expenses?retryWrites=true&w=majority" || "mongodb://localhost:27017/expense-track",
  secretOrKey: process.env.SECRET || "secret",
  googleClientId: "65340800012-fr7lftvv951uqje68pbqocluks4lfqn0.apps.googleusercontent.com",
  googleSecret: "x8Y8JUiX8GtbVgkAyfuZHIPo",
  port: process.env.PORT || 5000
};
