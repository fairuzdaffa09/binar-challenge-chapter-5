const path = require('path');


module.exports = {
    chapter3: (req, res) => {
        res.sendFile(__dirname + "/chapter3.html")
    },

    chapter4: (req, res) => {
        res.sendFile(__dirname + "/chapter-4.html")
    },

    login: (req, res) => {
        const dummyUser = {
            "email" : "dummy@mail.com",
            "password" : "dummy123"
        }
        if(req.body.email === dummyUser.email && req.body.password === dummyUser.password){
            return res.json({
                "message" : "Login Berhasil",
                "data" : dummyUser
            }, 200)
        }
        return res.json({
            "message" : "Email atau password salah"
        }, 400)

    }, 
}