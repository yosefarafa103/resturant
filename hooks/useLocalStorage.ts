"use client";
import { useCallback, useEffect, useState } from "react";

export function useLocaleStorage() {
    const [data, setData] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (typeof window === "undefined") return;
        const obj: { [key: string]: string } = {};
        const localSKeys = Object.keys(localStorage);
        for (let i = 0; i < localSKeys.length; i++) {
            const key = localSKeys[i];
            const value = localStorage.getItem(key);
            if (value) obj[key] = value;
        }
        setData(obj);
    }, []);

    const addItem = useCallback((key: string, value: string) => {
        localStorage.setItem(key, value);
        setData(prev => ({ ...prev, [key]: value }));
    }, []);

    const getItem = (key: string) =>
        data[key] === undefined ? 0 : JSON.parse(data[key]);

    const updateItem = useCallback((key: string, updatedValue: any) => {
        const stringValue = JSON.stringify(updatedValue);
        localStorage.setItem(key, stringValue);
        setData(prev => ({ ...prev, [key]: stringValue }));
    }, []);

    return { data, addItem, getItem, updateItem };
}
