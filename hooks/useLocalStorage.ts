"use client";
import { useCallback, useState } from "react";

type LsData = { key: string, value: string }
export function useLocaleStorage() {
    const [data, setData] = useState(() => {
        const obj: { [key: string]: string } = {};
        const localSKeys = Object.keys(localStorage)
        for (let i = 0; i < localSKeys.length; i++) {
            obj[localSKeys[i]] = localStorage.getItem(localSKeys[i])!;
        }
        return obj
    });
    const addItem = useCallback((key: string, value: string) => {
        localStorage.setItem(key, value);
        setData({ ...data, [key]: value })
    }, [])
    const getItem = (key: string) => data[key] === undefined ? 0 : JSON.parse(data[key])
    const updateItem = useCallback((key: string, updatedValue: any) => {
        localStorage.setItem(key, JSON.stringify(updatedValue))
        setData({ ...data, [key]: updatedValue })
    }, [])
    return { data, addItem, getItem, updateItem }
}