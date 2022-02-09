"use strict";

class AdditionalClothingWestern
{
	static onLoadMod() 
	{
		// Constants
		const db = `user/mods/AdditionalClothing_WesternPack/db/`;
		
		// add tops
		JustNUCore.AddTop(db, "AddClothingWestern_FlektarnPCSUpper",		"AddClothingWestern/Tops/top_pcsshirt_flektarn_mesh.bundle", 	"AddClothingWestern/Hands/hands_pcsshirt_flecktarn.bundle",	"5d1f5b4886f7744bce0ee9f3");
		JustNUCore.AddTop(db, "AddClothingWestern_Wz93AggressorUpper",		"AddClothingWestern/Tops/top_aggressor_wz93.bundle", 			"AddClothingWestern/Hands/hands_aggressor_wz93.bundle",		"5d1f5b0686f7743f8362bcde");
		JustNUCore.AddTop(db, "AddClothingWestern_MTPPCSUpper",				"AddClothingWestern/Tops/top_pcsshirt_MTP_mesh.bundle", 		"AddClothingWestern/Hands/hands_pcsshirt_MTP.bundle",		"5d1f5b4886f7744bce0ee9f3");
		JustNUCore.AddTop(db, "AddClothingWestern_MTPCombatShirtUpper",		"AddClothingWestern/Tops/top_combatshirt_MTP.bundle", 			"AddClothingWestern/Hands/hands_combatshirt_MTP.bundle",	"5d1f5b3f86f7744bcd1345a2");
		JustNUCore.AddTop(db, "AddClothingWestern_CECJacket",				"AddClothingWestern/Tops/top_nightpatrol_CEC.bundle", 			"AddClothingWestern/Hands/hands_nightpatrol_CEC.bundle",	"5f5f3fc66bdad616ad46d62f");
		
		// add bottoms
		JustNUCore.AddBottom(db, "AddClothingWestern_FlektarnGen2Lower",	"AddClothingWestern/Bottoms/bottom_gen2_flektarn.bundle");
		JustNUCore.AddBottom(db, "AddClothingWestern_Wz93ZaslonLower",		"AddClothingWestern/Bottoms/bottom_zaslon_wz93.bundle");
		JustNUCore.AddBottom(db, "AddClothingWestern_MTPG3CombatPants",		"AddClothingWestern/Bottoms/bottom_g3pants_MTP.bundle");
		JustNUCore.AddBottom(db, "AddClothingWestern_CECbearpants",			"AddClothingWestern/Bottoms/bottom_beardefault_CEC.bundle");
	}
}
	
module.exports = AdditionalClothingWestern;