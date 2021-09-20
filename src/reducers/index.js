export const initialState = {
  basket: [
    {
      id: "12321342",
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback",
      price: 11.96,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61m2O+gHGIL._AC_UY218_.jpg"
    }
  ],
  user: null
};

export const getBasketTotal = basket => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product (id: ${action.id} as its not there)`
        );
      }
      //logic for removing an item to basket
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;
