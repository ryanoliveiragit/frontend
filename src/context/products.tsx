import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";

export interface ProductsType {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  shipment: string;
  image: string;
}

export interface ProductsProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
  idusuarios: string;
}

export interface ProductsContextType {
  products: ProductsType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductsType[]>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const ContextProducts = createContext<ProductsContextType>({
  products: [],
  setProducts: () => {},
  user: null,
  setUser: () => {},
});

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [user, setUser] = useState<User | null>(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  });

  useEffect(() => {
    if (user && user.email) {
      const userName = user.email.split("@")[0];
      console.log("Username:", userName);
    }
  }, [user]);
  
  console.log('user: ',user)
  return (
    <ContextProducts.Provider
      value={{
        products,
        setProducts,
        user,
        setUser,
      }}
    >
      {children}
    </ContextProducts.Provider>
  );
}
