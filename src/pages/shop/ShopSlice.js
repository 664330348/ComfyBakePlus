import { createSlice } from '@reduxjs/toolkit'
import img001 from '../../images/img001.png';
import img002 from '../../images/img002.png';
import img003 from '../../images/img003.png';
import img004 from '../../images/img004.png';
import img005 from '../../images/img005.png';
import img006 from '../../images/img006.png';
import img007 from '../../images/img007.png';
import img008 from '../../images/img008.png';

const initialState = [
    {id: '1', name:'Mini Cherry Bakewell Tarts', img:img001, 
        body:'A British classic goes bite-sized in these adorable mini tarts filled with jam and frangipane and covered with a snowy white icing.', 
        ingredients:'all-purpose flour, cold butter, egg yolks', 
        price: 3.99, left: 10}, 
    {id: '2', name:'Maple Sugar Scrolls', img:img002, 
        body:'These soft, fluffy buns swap out the usual cinnamon for the delicate sweetness of maple sugar.', 
        ingredients:'milk, eggs, maple sugar, vanilla extract', 
        price: 5.99, left: 15}, 
    {id: '3', name:'Blood Orange Canneles', img:img003, 
        body:'This twist on the traditional French cannelé gets its sweet, citrusy flavour from a combination of blood orange zest and orange liqueur.', 
        ingredients:'whole milk, egg yolk, blood orange, unsalted butter', 
        price: 1.99, left: 5}, 
    {id: '4', name:'Peanut Butter Nanaimo Bars', img:img004, 
        body:'The classic Nanaimo bar gets an upgrade with a sweet, smooth peanut butter filling.', 
        ingredients:'sugar, cocoa, chocolate wafer crumbs, graham cracker crumbs', 
        price: 4.99, left: 20}, 

    {id: '5', name:'Fresh Raspberry Custard Tarts', img:img005, 
        body:'These elegant little tarts pair a buttery shortcrust pastry base with a buttermilk custard filling.', 
        ingredients:'all-purpose flour, eggs, fresh raspberries, whipping cream', 
        price: 3.99, left: 10}, 
    {id: '6', name:'Peanut Butter and Jelly Thumbprints', img:img006, 
        body:'These pretty little thumbprint cookies pack all of the goodness of an old-school PB&J sandwich.', 
        ingredients:'baking soda, baking powder, eggs, creamy peanut butter, grape jelly', 
        price: 5.99, left: 15}, 
    {id: '7', name:'Savoury Cheddar Coins', img:img007, 
        body:'This cheesy twist on the classic icebox cookie is perfect for the holidays.', 
        ingredients:'whole milk, egg yolk, blood orange, unsalted butter', 
        price: 1.99, left: 5}, 
    {id: '8', name:'Pumpkin Cheesecake Swirl Brownies', img:img008, 
        body:"It's tough having to choose between fudgey brownies and tangy pumpkin cheesecake.", 
        ingredients:'unsweetened chocolate, eggs, pumpkin puree, brown sugar', 
        price: 4.99, left: 20}, 
]

const ShopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        ShopItemDecreses (state, action){
           state.find(item => item.id === action.payload.id).left -= action.payload.amount;
        }
    }
})
export const {ShopItemDecreses} = ShopSlice.actions;
export const selectShop = (state) => state.shop;

export default ShopSlice.reducer