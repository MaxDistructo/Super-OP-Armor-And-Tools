//Super OP Armor and Tools//
//***By:MaxDistructo***//
ModPE.setItem(399,"nether_star",0,"Nether Star");
Item.addShapedRecipe(399,1,0,[" a ","aba"," a "],["a",155,0,"b",264,0],16);
Block.defineBlock(1498,"Dragon Obsidan",[["obsidian"]],49,false,40);
Item.addShapedRecipe(1498,1,0,["aaa","aaa","aaa"],["a",49,0]);
Item.setItem(1499,"record_11",0,"Condenced Dragon Egg");
Item.addShapedRecipe(1499,1,0[" a ","aaa","aaa",],["a",1498,0]);
//Creation of the Nether Star//
ModPE.setItem(1500,"blaze_rod",0,"Nether Star Sword:WIP");
ModPE.setItem(1501,"blaze_rod",0,"Nether Star Pickaxe:WIP");
ModPE.setItem(1502,"blaze_rod",0,"Nether Star Axe:WIP");
ModPE.setItem(1503,"blaze_rod",0,"Nether Star Shovel:WIP");
ModPE.setItem(1504,"blaze_rod",0,"Nether Star Hoe:WIP");
Item.setArmor(1505,"record_13",0,"Nether Star Helmet:WIP","armor/iron-1.png",10,ArmorType.helmet);
Item.setArmor(1506,"record_13",0,"Nether Star Chestplate:WIP","armor/iron-1.png",16,ArmorType.chestplate);
Item.setArmor(1507,"record_13",0,"Nether Star Leggings:WIP","armor/iron-2.png",14,ArmorType.leggings);
Item.setArmor(1508,"record_13",0,"Nether Star Boots:WIP","armor/iron-1.png",8,ArmorType.boots);
Item.setMaxDamage(1500,5000);
Item.setMaxDamage(1501,5000);
Item.setMaxDamage(1502,5000);
Item.setMaxDamage(1503,5000);
Item.setMaxDamage(1504,5000);
Item.setMaxDamage(1505,10000);
Item.setMaxDamage(1506,10000);
Item.setMaxDamage(1507,10000);
Item.setMaxDamage(1508,10000);
var damage = 20
function attackHook(a,v){
  if (Player.getCarriedItem() == 1500)
    if ([Player.getCarriedItemData() == 5000)
    Entity.setHealth(victim,Entity.getHealth (victim) - damage);
    Entity.getCarriedItem(a,1500),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
      else
      
  Level.playSoundEnt(a,"random.break",100,10]);
  Player.clearInventorySlot(Player.getSelectedSlotId());
}
}
