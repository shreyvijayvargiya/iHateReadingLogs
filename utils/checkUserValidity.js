const admin = require("firebase-admin");

async function checkUserValidity(userId){
    return admin.auth().getUser(userId).then(() => {
      return { isUserValid: true }
    }).catch(()=> {
      return { isUserValid : false }
    });
};
module.exports = checkUserValidity;