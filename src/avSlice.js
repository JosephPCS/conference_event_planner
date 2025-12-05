import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "https://pixabay.com/get/g770e819dd5989aadc423cd77b22d8a966ec89207a2204b6534da62ea50c2e4588d0afdcc1ccd6c6087143a557233d9e5826f59b36cdabc06e778f5255dba8ecd_1280.png",
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
        img: "https://pixabay.com/get/g50be9336ac6dcf644980340a7298d88799151d46a9ccfc542c4a5bbeef09e543e2e2798cdde2307371632a59a78a9b6f_1280.png",
        name: "Signage",
        price: 80,
        quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      
    },
    decrementAvQuantity: (state, action) => {
     
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
