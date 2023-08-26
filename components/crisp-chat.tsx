"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("d83984b0-ec59-46ff-857a-3725583bb56e")
    }, [])

    return null
}