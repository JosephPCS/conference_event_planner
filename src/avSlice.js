import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "/speaker.jpg",
        name: "Speakers",
        price: 35,
        quantity: 0,
    },
    {
        img:"/Microphone.jpeg",
        name: "Microphones",
        price: 45,
        quantity: 0,
    },
    {
        img:"/whiteboard.jpeg",
        name: "Whiteboards",
        price: 80,
        quantity: 0,
    },
    {
        img: "/projector.jpeg",
        name: "Projectors",
        price: 200,
        quantity: 0,
    },
    {
        img: "/sign.png",
        name: "Signage",
        price: 80,
        quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const {payload : index} = action;
      const item = state[index];
      if(item){
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
    const {payload : index} = action;
    const item = state[index];
      if(item && item.quantity > 0){
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer; 
