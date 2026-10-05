"use client";

import { initDraw } from "@/draw";
import { useEffect, useRef } from "react";

export function Canvas({roomId} : {roomId : string}) {
     const canvasRef = useRef<HTMLCanvasElement>(null);
    
        useEffect(() => {
            
            if (canvasRef.current) {
                initDraw(canvasRef.current, roomId);
            }
        }, [canvasRef])
    
        return <div>
            <canvas ref={canvasRef} width={1080} height={1080}></canvas>
            <div className="absolute bottom-0 right-0">
                <button className="bg-white text-black">Rect</button>
                <button className="bg-white text-black">Circle</button>
            </div>
        </div>
}