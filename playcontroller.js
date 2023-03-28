const {playservice} = require("./playservice")

class playcontroller{

    /**
     * 
     * @param {playservice} playservice 
     */

    constructor(playservice){
        this.playservice = playservice
    }

    adduser = async(req, res) =>{
        const {phone, password} = req.body;
        if(!phone){
            return res.status(400).json({msg:"please iput a phone model"})
        }
        if(!password){
            return res.status(400).json({msg:"please input a password "})
        }

        const saveduser = await this.playservice.adduser({phone:phone, password :password})
        return res.status(200).json({saveduser})
    }
}

module.exports ={playcontroller}