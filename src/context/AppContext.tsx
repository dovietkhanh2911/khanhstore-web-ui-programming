import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { CartItem, Product } from '../types/Product';
interface ContextValue { cart:CartItem[]; addToCart:(p:Product)=>void; removeFromCart:(id:number)=>void; updateQuantity:(id:number,q:number)=>void; clearCart:()=>void; cartCount:number; subtotal:number; darkMode:boolean; toggleTheme:()=>void; }
const AppContext=createContext<ContextValue|null>(null);
export function AppProvider({children}:{children:ReactNode}){
 const [cart,setCart]=useState<CartItem[]>(()=>JSON.parse(localStorage.getItem('khanh-cart')||'[]'));
 const [darkMode,setDarkMode]=useState(()=>localStorage.getItem('khanh-theme')==='dark');
 useEffect(()=>localStorage.setItem('khanh-cart',JSON.stringify(cart)),[cart]);
 useEffect(()=>{localStorage.setItem('khanh-theme',darkMode?'dark':'light');document.documentElement.dataset.theme=darkMode?'dark':'light'},[darkMode]);
 const addToCart=(p:Product)=>setCart(prev=>{const x=prev.find(i=>i.id===p.id);return x?prev.map(i=>i.id===p.id?{...i,quantity:Math.min(i.quantity+1,p.stock)}:i):[...prev,{...p,quantity:1}]});
 const removeFromCart=(id:number)=>setCart(p=>p.filter(i=>i.id!==id));
 const updateQuantity=(id:number,q:number)=>setCart(p=>p.map(i=>i.id===id?{...i,quantity:Math.max(1,Math.min(q,i.stock))}:i));
 const clearCart=()=>setCart([]); const cartCount=cart.reduce((s,i)=>s+i.quantity,0); const subtotal=cart.reduce((s,i)=>s+i.price*i.quantity,0);
 const value=useMemo(()=>({cart,addToCart,removeFromCart,updateQuantity,clearCart,cartCount,subtotal,darkMode,toggleTheme:()=>setDarkMode(v=>!v)}),[cart,cartCount,subtotal,darkMode]);
 return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export const useApp=()=>{const c=useContext(AppContext);if(!c)throw new Error('useApp must be used inside AppProvider');return c};
