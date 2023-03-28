const {Play} = require("./playmodel")
const jwt = require("jsonwebtoken")

const userdto = {
    phone : String,
    password : String
}

class playservice{
    /**
     * 
     * @param {userdto} userdto 
     * @returns {promise<Play>}
     */

    adduser = async(userdto) => {
        const newuser = new Play(userdto)
        const savedUser = await newuser.save();
        return savedUser
    }
}


module.exports = {playservice}