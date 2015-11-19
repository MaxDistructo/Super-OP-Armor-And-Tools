//Super OP Armor and Tools//
//***By:MaxDistructo***//
ModPE.setItem(399,"nether_star",0,"Nether Star");
Item.addShapedRecipe(399,1,0,[" a ","aba"," a "],["a",155,0,"b",264,0],16);
//Creation of the Nether Star//
ModPE.setItem(1500,"blaze_rod",0,"Nether Star Sword:WIP");
Item.setMaxDamage(1500,5000)
var damage = 20
function attackHook(a,v){
  if (Player.getCarriedItem() == 1500)
    if ([Player.getCarriedItemData() == 5000)
    Entity.setHealth(victim,Entity.getHealth (victim) - damage);
    Entity.getCarriedItem(a,1500),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
      else
      
  
  
}

//Easter Eggs!//
function chatHook(fuck){Stop Swearing!}
function chatHook(bitch){Stop Swearing!}
}
