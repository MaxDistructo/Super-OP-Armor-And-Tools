//Super OP Armor and Tools//
//***By:MaxDistructo***//

var setItem =  ModPE.setItem
var setCraft =  Item.addShapedRecipe
var setBlock = Block.defineBlock
var setArmor = Entity.setArmor
var setDmg = Item.setMaxDamage
var setExplosion = Block.setExplosionResistance
var setDamage = Item.setMaxDamage

setItem(399,"nether_star",0,"Nether Star");
setItem(462,"nether_star",0,"Super Nether Star");
setItem(460,"diamond",0,"Super Diamond");
setItem(461,"stick",0,"Obsidian Stick")
setBlock(207,"Dragon Obsidan",[["dragon_egg",0]],49,false,40);
setExplosion(207,1000000000000000)
setItem(1499,"fireworks_charge",0,"Un-Refined Dragon Egg Essence");
setItem(463,"fireball",0,"Dragon Egg Essence")
setItem(1498,"sword",4,"Super Diamond Sword")
setItem(1500,"sword",2,"Nether Star Sword:WIP");  //Texture is made
setItem(1501,"pickaxe",2,"Nether Star Pickaxe:WIP"); //Texture is made
setItem(1502,"axe",2,"Nether Star Axe:WIP");  //Texture is made
setItem(1503,"shovel",2,"Nether Star Shovel:WIP"); // Texture Made
setItem(1504,"hoe",2,"Nether Star Hoe:WIP"); // Texture Made
setArmor(1505,"helmet",2,"Nether Star Helmet:WIP","armor/iron-1.png",12,ArmorType.helmet);
setArmor(1506,"chestplate",2,"Nether Star Chestplate:WIP","armor/iron-1.png",16,ArmorType.chestplate);
setArmor(1507,"leggings",2,"Nether Star Leggings:WIP","armor/iron-2.png",14,ArmorType.leggings);
setArmor(1508,"boots",2,"Nether Star Boots:WIP","armor/iron-1.png",6,ArmorType.boots);
setItem(1509,"stick",0,"Ender Dragon Sword:WIP");  //Texture is made
setItem(1510,"stick",0,"Ender Dragon Pickaxe:WIP");  //Texture is made
setItem(1511,"stick",0,"Ender Dragon Axe:WIP");  //Texture is made
setItem(1512,"stick",0,"Ender Dragon Shovel:WIP") //Texture is made
setItem(1513,"stick",0,"Ender Dragon Hoe:WIP") //Texture is made
setArmor(1514,"helmet",1,"Ender Dragon Helmet:WIP","armor/chain-1.png",15,ArmorType.helmet);
setArmor(1515,"chestplate",1,"Ender Dragon Chestplate:WIP","armor/chain-1.png",24,ArmorType.chestplate);
setArmor(1516,"leggings",1,"Ender Dragon Leggings:WIP","armor/chain-2.png",21,ArmorType.leggings);
setArmor(1517,"boots",1,"Ender Dragon Boots:WIP","armor/chain-1.png",12,ArmorType.boots);
setCraft(399,1,0,[" a ","aba"," a "],["a",155,0,"b",264,0]);
setCraft(462,1,0,["aaa","aaa","aaa"],["a",399,0])
setCraft(460,1,0,["aaa","aba","aaa"],["a",57,0,"b",264,0]);
setCraft(461,2,0,["a","a"],["a",49,0])
setCraft(207,1,0,["aaa","aaa","aaa"],["a",49,0]);
setCraft(1499,1,0,[" a ","aa ","aaa",],["a",1498,0]);
setCraft(463,1,0,["   "," a ","aaa"],["a",1499,0])
setCraft(1498,1,0,[" a "," a "," b "],["a",460,0,"b",461,0])
setCraft(1500,1,0,[" a "," a "," b "],["a",399,0,"b",461,0])
setCraft(1501,1,0,["aaa"," b "," b "],["a",399,0,"b",461,0])
setCraft(1502,1,0,["aa ","ab "," b "],["a",399,0,"b",461,0])
setCraft(1503,1,0,[" a "," b "," b "],["a",399,0,"b",461,0])
setCraft(1504,1,0,["aa "," b "," b "],["a",399,0,"b",461,0])
setCraft(1505,1,0,["aba","a a","   "],["a",399,0,"b",462,0])
setCraft(1506,1,0,["a a","aba","aaa"],["a",399,0,"b",462,0])
setCraft(1507,1,0,["aba","a a","a a"],["a",399,0,"b",462,0])
setCraft(1508,1,0,["   ","a a","a a"],["a",399,0])
setCraft(1509,1,0,[" a "," a "," b "],["a",1499,0,"b",461,0])
setCraft(1510,1,0,["aaa"," b "," b "],["a",1499,0,"b",461,0])
setCraft(1511,1,0,["aa ","ab "," b "],["a",1499,0,"b",461,0])
setCraft(1512,1,0,[" a "," b "," b "],["a",1499,0,"b",461,0])
setCraft(1513,1,0,["aa "," b "," b "],["a",1499,0,"b",461,0])
setCraft(1514,1,0,["aba","a a","   "],["a",1499,0,"b",463,0])
setCraft(1515,1,0,["a a","aba","aaa"],["a",1499,0,"b",463,0])
setCraft(1516,1,0,["aba","a a","a a"],["a",1499,0,"b",463,0])
setCraft(1517,1,0,["   ","a a","a a"],["a",1499,0])

