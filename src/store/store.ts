import { useRef } from "react";
import { create } from "zustand";

type PortfolioState={
    menuClick:boolean
    handleMenuClick:()=>void
    isModalOpen:boolean
    changeModalOpen:()=>void
    messageForm:string
    changeMessageForm:(arg:string)=>void
}

export const usePortfolioStore=create<PortfolioState>()(
    ((set,get)=>({
        menuClick:false,
        handleMenuClick:()=>{
            if(get().menuClick=== true){
                document.body.style.overflow = "";
            }else{
                document.body.style.overflow = "hidden";
            }
            set({menuClick:!get().menuClick});
        },
        isModalOpen:false,
        changeModalOpen:()=>{
            set({isModalOpen:!get().isModalOpen})
        },
        messageForm:"El formulario se envio exitosamente",
        changeMessageForm:(arg)=>{
            set({messageForm:arg})
        }
    }))
)