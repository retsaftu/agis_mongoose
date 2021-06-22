const User = require("../models/user.js");

exports.getUsers = function(req, res){
    User.find({}, function(err, users){
        console.log(users);
        if(err) return console.log(err);
        res.send(users)
    });
};

exports.getUsersId = function(req, res){
  const id = req.params.id;
  User.findOne({_id: id}, function(err, user){

      if(err) return console.log(err);
      res.send(user);
  });
};

exports.postUsers = function(req, res){
  if(!req.body) return res.sendStatus(400);

    const userName = req.body.name;
    const userAge = req.body.age;
    const user = new User({name: userName, age: userAge});

    user.save(function(err){
        if(err) return console.log(err);
        res.send(user);
    });
};

exports.deleteUsers = function(req, res){
  const id = req.params.id;
    User.findByIdAndDelete(id, function(err, user){

        if(err) return console.log(err);
        res.send(user);
    });
};

exports.putUsers = function(req, res){
  if(!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const userName = req.body.name;
    const userAge = req.body.age;
    const newUser = {age: userAge, name: userName};

    User.findOneAndUpdate({_id: id}, newUser, {new: true}, function(err, user){
        if(err) return console.log(err);
        res.send(user);
    });
};
