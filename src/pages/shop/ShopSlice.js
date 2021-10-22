import { createSlice } from '@reduxjs/toolkit'


const initialState = [
    {id: '0', name:'mini cherry bakewell tarts', img:'https://firebasestorage.googleapis.com/v0/b/comfybakeplus.appspot.com/o/img001.png?alt=media&token=0aa4e4f1-6be8-4371-9a94-5b4280d1422d', 
        body:'A British classic goes bite-sized in these adorable mini tarts filled with jam and frangipane and covered with a snowy white icing.', 
        ingredients:'all-purpose flour, cold butter, egg yolks', 
        price: 3.99, left: 10}, 
    {id: '1', name:'Maple Sugar Scrolls', img:'https://firebasestorage.googleapis.com/v0/b/comfybakeplus.appspot.com/o/img002.png?alt=media&token=af671800-1320-41e1-a794-bceb55e2af8b', 
        body:'These soft, fluffy buns swap out the usual cinnamon for the delicate sweetness of maple sugar.', 
        ingredients:'milk, eggs, maple sugar, vanilla extract', 
        price: 5.99, left: 15}, 
    {id: '2', name:'Blood Orange Canneles', img:'https://firebasestorage.googleapis.com/v0/b/comfybakeplus.appspot.com/o/img003.png?alt=media&token=2a1fd952-3d56-406d-b47e-41d2ae9bffcc', 
        body:'This twist on the traditional French cannelé gets its sweet, citrusy flavour from a combination of blood orange zest and orange liqueur.', 
        ingredients:'whole milk, egg yolk, blood orange, unsalted butter', 
        price: 1.99, left: 5}, 
    {id: '3', name:'Peanut Butter Nanaimo Bars', img:'https://firebasestorage.googleapis.com/v0/b/comfybakeplus.appspot.com/o/img004.png?alt=media&token=b15e41dc-a8dc-4b44-bf74-9a7d398b32e7', 
        body:'The classic Nanaimo bar gets an upgrade with a sweet, smooth peanut butter filling.', 
        ingredients:'sugar, cocoa, chocolate wafer crumbs, graham cracker crumbs', 
        price: 4.99, left: 20}, 
]

const ShopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {}
})
  
export const selectShop = (state) => state.shop;

export default ShopSlice.reducer