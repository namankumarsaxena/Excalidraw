import { useEffect, useState } from "react";
import { WS_URL } from "../config";


export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNDY3NzA3My02ZWFmLTRjNDktOGZiOC02ZGJiYzM3ODgxODMiLCJpYXQiOjE3ODk1ODM1MTd9.Flzkqq-vN1hh0xFe6bSbUhYWJATPA_GxtzFYyZ7FJNc`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, []);

    return {
        socket,
        loading
    }
}