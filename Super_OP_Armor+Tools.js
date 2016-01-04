//Super OP Armor and Tools//
//***By:MaxDistructo***//

var setItem =  ModPE.setItem
var setCraft =  Item.addShapedRecipe
var setBlock = Block.defineBlock
var setArmor = Item.setArmor
var setDmg = Item.setMaxDamage
var setExplosion = Block.setExplosionResistance
var setDamage = Item.setMaxDamage

setItem(399,"nether_star",0,"Nether Star");
setCraft(399,1,0,[" a ","aba"," a "],["a",155,0,"b",264,0]);

setItem(462,"nether_star",0,"Super Nether Star");
setCraft(462,1,0,["aaa","aaa","aaa"],["a",399,0])

setItem(460,"diamond",0,"Super Diamond");
setCraft(460,1,0,["aaa","aba","aaa"],["a",57,0,"b",264,0]);

setItem(461,"stick",1,"Obsidian Stick")
setCraft(461,2,0,["a","a"],["a",49,0])
Item.setCraftRecipe(461,2,0,[49,2,0])

setBlock(207,"Dragon Obsidan",[["dragon_egg",0]],49,false,40);
setCraft(207,1,0,["aaa","aaa","aaa"],["a",49,0]);
setExplosion(207,1000000000000000)

setItem(1499,"fireball",0,"Condenced Dragon Egg");
setCraft(1499,1,0[" a ","aaa","aaa",],["a",1498,0]);

setItem(1498,"sword",4,"Super Diamond Sword")
setCraft(1498,[" a "," a "," b "],["a",460,0,"b",461,0])

setItem(1500,"sword",2,"Nether Star Sword:WIP");  //Texture is made
setItem(1501,"pickaxe",2,"Nether Star Pickaxe:WIP"); //Texture is made
setItem(1502,"axe",2,"Nether Star Axe:WIP");  //Texture is made
setItem(1503,"shovel",2,"Nether Star Shovel:WIP");
setItem(1504,"hoe",2,"Nether Star Hoe:WIP");
setArmor(1505,"helmet",2,"Nether Star Helmet:WIP","armor/iron-1.png",10,ArmorType.helmet);
setArmor(1506,"chestplate",2,"Nether Star Chestplate:WIP","armor/iron-1.png",16,ArmorType.chestplate);
setArmor(1507,"leggings",2,"Nether Star Leggings:WIP","armor/iron-2.png",14,ArmorType.leggings);
setArmor(1508,"boots",2,"Nether Star Boots:WIP","armor/iron-1.png",8,ArmorType.boots);

setCraft(1500," a "," a "," b ",["a",399,0,"b",461,0])
setCraft(1501,"aaa"," b "," b ",["a",399,0,"b",461,0])

setItem(1509,"stick",0,"Ender Dragon Sword:WIP");  //Texture is made
setItem(1510,"stick",0,"Ender Dragon Pickaxe:WIP");  //Texture is made
setItem(1511,"stick",0,"Ender Dragon Axe:WIP");  //Texture is made
setItem(1512,"stick",0,"Ender Dragon Shovel:WIP")
setItem(1513,"stick",0,"Ender Dragon Hoe:WIP")
setArmor(1514,"helmet",1,"Ender Dragon Helmet:WIP","armor/chain-1.png",15,ArmorType.helmet);
setArmor(1515,"chestplate",1,"Ender Dragon Chestplate:WIP","armor/chain-1.png",24,ArmorType.chestplate);
setArmor(1516,"leggings",1,"Ender Dragon Leggings:WIP","armor/chain-2.png",21,ArmorType.leggings);
setArmor(1517,"boots",1,"Ender Dragon Boots:WIP","armor/chain-1.png",12,ArmorType.boots);

setDamage(1500,5000);
setDamage(1501,5000);
setDamage(1502,5000);
setDamage(1503,5000);
setDamage(1504,5000);
setDamage(1505,10000);
setDamage(1506,10000);
setDamage(1507,10000);
setDamage(1508,10000);
setDamage(1509,10000);
setDamage(1510,10000);
setDamage(1511,10000);
setDamage(1512,10000);
setDamage(1513,10000);
setDamage(1514,100000);
setDamage(1515,100000);
setDamage(1516,100000);
setDamage(1517,100000);

function attackHook(a,v){
  if (Player.getCarriedItem() == 1500){
  var damage = 12.5
    if ([Player.getCarriedItemData() == 5000)
    Entity.setHealth(victim,Entity.getHealth (victim) - damage);
    Entity.getCarriedItem(a,1500),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
  }
}
    if (Player.getCarriedItem() == 1509)
  var damage = 30
    if ([Player.getCarriedItemData() == 10000)
    Entity.setHealth(victim,Entity.getHealth (victim) - damage);
    Entity.getCarriedItem(a,1509),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
      if (Player.getCarriedItem() == 1498{
  var damage = 25
    if ([Player.getCarriedItemData() == 7500)
    Entity.setHealth(victim,Entity.getHealth (victim) - damage);
    Entity.getCarriedItem(a,1500),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
      else
      
  Level.playSoundEnt(a,"random.break",100,10]);
  Player.clearInventorySlot(Player.getSelectedSlotId());
}

