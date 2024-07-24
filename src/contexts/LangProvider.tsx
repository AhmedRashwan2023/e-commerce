'use client'

import { NextIntlClientProvider, useMessages } from "next-intl"
import { createContext,ReactNode, useContext, useEffect, useState } from "react"

const LangContext = createContext<any>("fr")

export const LangWrapper = ({children, messages}:{children: ReactNode,messages: any})=>{
    const [lang, setLang] = useState<any>("fr")
    
    useEffect(()=>{
        const currenctLang = localStorage.getItem("locale");
        if(currenctLang) setLang(currenctLang)
    },[])

    return (
        <LangContext.Provider value={{lang, setLang}}>
            <NextIntlClientProvider messages={messages} locale={lang}>
            {`Language is ${lang}`}
            {children}
            </NextIntlClientProvider>
        </LangContext.Provider>
    )
}

export const useLangContext = ()=>{
    return useContext(LangContext)
}