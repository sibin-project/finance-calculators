"use client";
import React from "react";

interface AdUnitProps {
    slot?: string;
    format?: "auto" | "fluid" | "rectangle" | "horizontal";
    className?: string;
    label?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({
    slot = "1234567890",
    format = "auto",
    className = "",
    label = "Advertisement"
}) => {
    // In a real implementation, you would check for environment (prod) before rendering scripts.
    // Monetag (PropellerAds) usually provides a script tag for a specific zone.

    // For development/demo, we render a placeholder.
    const isDev = true; // Set to false to enable the ad script below

    React.useEffect(() => {
        if (!isDev) {
            // --- MONETAG SCRIPT INTEGRATION ---
            // 1. If Monetag gives you a <script> tag to place in the body:
            //    You can dynamically create it here to ensure it loads after the component mounts.

            /*
            const script = document.createElement('script');
            script.src = "https://your-monetag-script-url.com/tag.min.js"; 
            script.dataset.zone = "YOUR_ZONE_ID"; // If applicable
            script.async = true;
            document.getElementById(`ad-slot-${slot}`)?.appendChild(script);
            */

            // 2. OR if they provide a specific container div, ensure it matches the ID below.
        }
    }, [slot, isDev]);

    if (isDev) {
        return (
            <div
                className={`w-full bg-gray-100 border border-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-400 text-sm py-4 my-6 overflow-hidden ${className}`}
                style={{ minHeight: format === 'rectangle' ? '250px' : '100px' }}
            >
                <span className="uppercase tracking-widest text-xs font-semibold mb-1">{label}</span>
                <div className="w-full h-full flex items-center justify-center bg-gray-50/50 border-dashed border-2 border-gray-200 rounded m-2">
                    Monetag Ad Space ({format})
                </div>
                <p className="text-[10px] mt-1">Set isDev = false to see ads</p>
            </div>
        );
    }

    return (
        <div className={`my-6 text-center ${className}`} id={`ad-slot-${slot}`}>
            {/* --- PASTE YOUR MONETAG AD CODE HERE --- */}

            {/* Example for some ad types (Direct Link / Banner) */}
            {/* <div id="container-id"></div> */}

            {/* If using Next.js Script component for global tags (Outside this div usually) */}
            {/* <Script src="// ... " strategy="lazyOnload" /> */}

            <div className="p-4 bg-gray-50 border border-dashed border-gray-300 text-xs text-gray-500">
                Placeholder for Monetag Ad Script (Zone: {slot})
            </div>

            <span className="text-[10px] text-gray-400 uppercase tracking-wide">Advertisement</span>
        </div>
    );
};

export default AdUnit;
