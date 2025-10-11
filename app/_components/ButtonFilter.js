"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ButtonFilter({ children, filter }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const activeFilter = searchParams.get("capacity") ?? "all";

    function handleFilter(filter) {
        const params = new URLSearchParams(searchParams);

        params.set("capacity", filter);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <button
            className={`px-5 py-2 hover:bg-primary-700 ${
                activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
            }`}
            onClick={() => handleFilter(filter)}
        >
            {children}
        </button>
    );
}
