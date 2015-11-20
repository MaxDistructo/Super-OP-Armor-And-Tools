//Super OP Armor and Tools//
//***By:MaxDistructo***//
ModPE.setItem(399,"nether_star",0,"Nether Star");
Item.addShapedRecipe(399,1,0,[" a ","aba"," a "],["a",155,0,"b",264,0],16);
Block.defineBlock(1498,"Dragon Obsidan",[["glowing_obsidian"]],49,false,40);
Item.addShapedRecipe(1498,1,0,["aaa","aaa","aaa"],["a",49,0]);
Block.setExplosionResistance(1498,1000000000000000)
Item.setItem(1499,"record_11",0,"Condenced Dragon Egg");
Item.addShapedRecipe(1499,1,0[" a ","aaa","aaa",],["a",1498,0]);
ModPE.setItem(1500,"blaze_rod",0,"Nether Star Sword:WIP");
ModPE.setItem(1501,"blaze_rod",0,"Nether Star Pickaxe:WIP");
ModPE.setItem(1502,"blaze_rod",0,"Nether Star Axe:WIP");
ModPE.setItem(1503,"blaze_rod",0,"Nether Star Shovel:WIP");
ModPE.setItem(1504,"blaze_rod",0,"Nether Star Hoe:WIP");
Item.setArmor(1505,"record_13",0,"Nether Star Helmet:WIP","armor/iron-1.png",10,ArmorType.helmet);
Item.setArmor(1506,"record_13",0,"Nether Star Chestplate:WIP","armor/iron-1.png",16,ArmorType.chestplate);
Item.setArmor(1507,"record_13",0,"Nether Star Leggings:WIP","armor/iron-2.png",14,ArmorType.leggings);
Item.setArmor(1508,"record_13",0,"Nether Star Boots:WIP","armor/iron-1.png",8,ArmorType.boots);
ModPE.setItem(1509,"stick",0,"Ender Dragon Sword:WIP");
ModPE.setItem(1510,"stick",0,"Ender Dragon Pickaxe:WIP");
ModPE.setItem(1511,"stick",0,"Ender Dragon Axe:WIP");
ModPE.setItem(1512,"stick",0,"Ender Dragon Shovel:WIP")
ModPE.setItem(1513,"stick",0,"Ender Dragon Hoe:WIP")
Item.setArmor(1514,"record_11",0,"Ender Dragon Helmet:WIP","armor/chain-1.png",15,ArmorType.helmet);
Item.setArmor(1515,"record_11",0,"Ender Dragon Chestplate:WIP","armor/chain-1.png",24,ArmorType.chestplate);
Item.setArmor(1516,"record_11",0,"Ender Dragon Leggings:WIP","armor/chain-2.png",21,ArmorType.leggings);
Item.setArmor(1517,"record_11",0,"Ender Dragon Boots:WIP","armor/chain-1.png",12,ArmorType.boots);
Item.setMaxDamage(1500,5000);
Item.setMaxDamage(1501,5000);
Item.setMaxDamage(1502,5000);
Item.setMaxDamage(1503,5000);
Item.setMaxDamage(1504,5000);
Item.setMaxDamage(1505,10000);
Item.setMaxDamage(1506,10000);
Item.setMaxDamage(1507,10000);
Item.setMaxDamage(1508,10000);
Item.setMaxDamage(1509,10000);
Item.setMaxDamage(1510,10000);
Item.setMaxDamage(1511,10000);
Item.setMaxDamage(1512,10000);
Item.setMaxDamage(1513,10000);
Item.setMaxDamage(1514,100000);
Item.setMaxDamage(1515,100000);
Item.setMaxDamage(1516,100000);
Item.setMaxDamage(1517,100000);
function attackHook(a,v){
  if (Player.getCarriedItem() == 1500)
  var damage = 20
    if ([Player.getCarriedItemData() == 5000)
    Entity.setHealth(victim,Entity.getHealth (victim) - damage);
    Entity.getCarriedItem(a,1500),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    clientMessage(You Attacked A Mob!)
      else
      
  Level.playSoundEnt(a,"random.break",100,10]);
  Player.clearInventorySlot(Player.getSelectedSlotId());
}
function attackHook(a,v){
  if (Player.getCarriedItem() == 1509)
  var damage = 30
    if ([Player.getCarriedItemData() == 10000)
    Entity.setHealth(victim,Entity.getHealth (victim) - damage);
    Entity.getCarriedItem(a,1509),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
      else
      
  Level.playSoundEnt(a,"random.break",100,10]);
  Player.clearInventorySlot(Player.getSelectedSlotId());
}
}
