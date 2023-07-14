import { createContext, useContext, useEffect, useReducer } from "react";

const ProductContext = createContext();

const useProductContext = () => useContext(ProductContext);

const reducer = (dsadas, action) => {
  console.log("aaaaaaaaaaa");
  console.log("bbbbbbbbbbbbbb");
  // switch (action.type) {
  //   case "VIEW_Product":
  //     return {
  //       ...state,
  //       productD: state.product.filter((product) => product.id == action.payload.id),
  //     };
  //   default:
  //     return state;
  // }
};

const ProductProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(
  //   reducer,
  //   JSON.parse(localStorage.getItem("state")) ?? { productD: []}
  // );

  // useEffect(() => {
  //   localStorage.setItem("state", JSON.stringify(state));
  // }, [state]);

  // return (
  //   <ProductContext.Provider value={{ state, dispatch }}>
  //     {children}
  //   </ProductContext.Provider>
  // );
};

export { ProductProvider, useProductContext };
