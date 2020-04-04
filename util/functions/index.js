var log = require('../logger');

let charactersArray = ['&','+','_','a','b','c','d','e','f','g','h','i','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',1,2,3,4,5,6,7,8,9];

function randomCharacter(){
  let random = Math.random();
  let arrayLength = charactersArray.length;
  let arrayIndex = Math.floor(random * arrayLength)
  return charactersArray[arrayIndex]
}

exports.upperCaseFirst = async function(word){
  try{
    return word.charAt(0).toUpperCase() + word.slice(1)
  } catch(err){
    log.error(`${err} something went wrong with upperCaseFirst while converting ${word}`);
    return {message: "Cannot upperCase Word", status: "error"}
  }
}

exports.generatePassword = async function (){
  try{
    let pass = randomCharacter() + randomCharacter() + randomCharacter() + randomCharacter() + '-' + randomCharacter() + randomCharacter() + randomCharacter() + randomCharacter();
    return pass;
  } catch(err){
    log.error(err);
    return {message: "Cannot Generate Password", status: "error"}
  }
}

exports.generateComplexPassword = async function (){
  try{
    let pass = randomCharacter() + randomCharacter() + randomCharacter() + randomCharacter() + '-' + randomCharacter() + randomCharacter() + randomCharacter() + randomCharacter() + '-' + randomCharacter() + randomCharacter() + randomCharacter() + randomCharacter() + '-' + randomCharacter() + randomCharacter() + randomCharacter() + randomCharacter() + '-' + randomCharacter() + randomCharacter() + randomCharacter() + randomCharacter();
    return pass;
  } catch(err){
    log.error(err);
    return {message: "Cannot Generate Complex Password", status: "error"}
  }
}

// Notification - create notication for user
// exports.notify = async function (data){
//   try {
//     // Save notification to the DB
//     let notification = await db.Notification.create(data);
//     // Find User by ID
//     let foundUser = await db.User.findById(data.user);
//     // Push notification id to user notification array
//     foundUser.notifications.push(notification.id);
//     // Update the users notification array
//     await foundUser.save();
//     log.info(`${foundNotification.user.username} - User Notified - ${foundNotification}`);
//   } catch (err) {
//     log.error(err);
//   }
// };

// Create a Delay
exports.delay = ms => new Promise(res => setTimeout(res, ms));
