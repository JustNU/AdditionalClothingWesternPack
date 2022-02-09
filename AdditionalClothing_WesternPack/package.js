class Mod
{
    constructor()
    {
		Logger.info("Loading: Additional Clothing - Western Pack");
		
		ModLoader.onLoad["AdditionalClothingWestern"] = require("./src/additionalclothing.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();