import React from "react";
import { useState, useEffect } from "react";

export function ProgressBar() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
    
        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            const Scroll = parseFloat(scroll);
            setScroll(Scroll);
        }
  
        window.addEventListener('scroll', progressBarHandler);
        return () => window.removeEventListener('scroll', progressBarHandler);
    }, []);

    return (
        <div className="z-20 fixed w-full h-2 bg-transparent">
          <div className="bg-blue-600 h-2 progress-bar" id="myBar" style={{transform: `scale(${scroll},1)`, transformOrigin: 'top left'}}></div>
        </div>
    )
}

