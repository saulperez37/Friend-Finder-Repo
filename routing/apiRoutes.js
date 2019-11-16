const friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.get("/api/friends/:name", function (req, res) {
        let friendName = req.params.name;

        for (let i = 0; i < friends.length; i++) {
            if (friends[i].name.toLowerCase() === friendName) {

                let friend = friends[i];
                console.log(`Friend found: ${friend}`);

                return res.json(friend);
            }
        };
        return res.send(false);
    });

    app.post("/api/friends", function (req, res) {
        const newFriend = req.body;
    
        newFriend.name = (req.body.name.toLowerCase());
    
        console.log(`New friend info: ${newFriend}`);
    
        friends.push(newFriend);
    
        res.json(newFriend);
    });
};


