"use client";

import { BsBell } from "react-icons/bs";

const TabsHeader = () => {
    return (
        <div className="py-8 gap-6 flex items-center justify-between">
            <div>
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2">
                    Welcome back, Ean!
                </h1>
                <p className="text-base md:text-lg text-white/60">
                    Track your university application progress
                </p>
            </div>
            <button className="rounded-xl px-3 aspect-square py-3 border border-zinc-600">
                <BsBell className="h-5 w-5" />
            </button>
        </div>
    );
};

export default TabsHeader;
