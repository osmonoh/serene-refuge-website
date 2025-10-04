"use client";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button
            className="bg-orange-950 py-1 px-3"
            onClick={() => setCount((c) => c + 1)}
        >
            {count}
        </button>
    );
}
