//Super OP Armor and Tools//
//***By:MaxDistructo***//

var setItem =  ModPE.setItem
var setCraft =  Item.addShapedRecipe
var setBlock = Block.defineBlock
var setArmor = Entity.setArmor
var setDmg = Item.setMaxDamage
var setExplosion = Block.setExplosionResistance
var setDamage = Item.setMaxDamage

function attackHook(a,v){
  if (Player.getCarriedItem() == 1500)
    if (Player.getCarriedItemData() == 5000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 12.5);
    Entity.getCarriedItem(a,1500),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
  

    if (Player.getCarriedItem() == 1509)
    if (Player.getCarriedItemData() == 10000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 20);
    Entity.getCarriedItem(a,1509),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
      if (Player.getCarriedItem() == 1498)
    if (Player.getCarriedItemData() == 7500)
    Entity.setHealth(victim,Entity.getHealth (victim) - 25);
    Entity.getCarriedItem(a,1498),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
      if (Player.getCarriedItem() == 1501)
    if (Player.getCarriedItemData() == 5000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 8);
    Entity.getCarriedItem(a,1501),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
  if (Player.getCarriedItem() == 1502)
    if (Player.getCarriedItemData() == 5000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 10);
    Entity.getCarriedItem(a,1502),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
  if (Player.getCarriedItem() == 1503)
    if (Player.getCarriedItemData() == 5000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 6);
    Entity.getCarriedItem(a,1503),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
 if (Player.getCarriedItem() == 1510)
    if (Player.getCarriedItemData() == 10000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 16);
    Entity.getCarriedItem(a,1510),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
  if (Player.getCarriedItem() == 1511)
    if (Player.getCarriedItemData() == 10000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 18);
    Entity.getCarriedItem(a,1511),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
  if (Player.getCarriedItem() == 1512)
    if (Player.getCarriedItemData() == 10000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 14;
    Entity.getCarriedItem(a,1512),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
      }else{
  Level.playSoundEnt(a,"random.break",100,10]);
  Player.clearInventorySlot(Player.getSelectedSlotId());
}

function useItem(x,y,z,itemId,blockId,side){
if(itemId==1504&&blockId==3&&side==top)
{
    Entity.getCarriedItem(Player.getEntity(),1504),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    Level.setTile(x,y,z,60)
    Level.setTile(x+1,y,z,60)
    Level.setTile(x,y,z+1,60)
    Level.setTile(x-1,y,z,60)
    Level.setTile(x,y,z-1,60)
    Level.setTile(x-1,y,z-1,60)
    Level.setTile(x+1,y,z-1,60)
    Level.setTile(x+1,y,z+1,60)
    Level.setTile(x-1,y,z+1,60)
    Level.playSoundEnt(Player.getEntity,"step.grass",100,10)
    }
    else{
  Level.playSoundEnt(Player.getEntity,"random.break",100,10);
  Player.clearInventorySlot(Player.getSelectedSlotId());
} 
}
