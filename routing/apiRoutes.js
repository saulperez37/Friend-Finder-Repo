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
        const newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };

        const scoresArr = [];
        for (let i = 0; i < req.body.scores.length; i++) {
            scoresArr.push(parseInt(req.body.scores[i])
            )
        }

        newFriend.scores = scoresArr;

        const compareScoreArr = [];
        for (let j = 0; j < friends.length; j++) {

            const comparison = 0;
            for (let k = 0; k < newFriend.scores.length; k++) {
                comparison += Math.abs(newFriend.scores[k] - friends[k].scores[k]);
            }
            compareScoreArr.push(comparison);
        }

        const topMatch = 0;
        for (let l = 1; l < compareScoreArr.length; l++) {

            if (compareScoreArr[l] <= compareScoreArr[topMatch]) {
                topMatch = l;
            };
        };

        const topFriendMatch = friends[topMatch];

        res.json(topFriendMatch);

        friends.push(newFriend);
    });
};


