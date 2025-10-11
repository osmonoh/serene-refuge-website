import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";

export default async function CabinList({ filter }) {
    const cabins = await getCabins();

    if (!cabins.length) return null;

    let dispalayedCabins;
    if (filter === "all") dispalayedCabins = cabins;
    if (filter === "small")
        dispalayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
    if (filter === "medium")
        dispalayedCabins = cabins.filter(
            (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
        );
    if (filter === "large")
        dispalayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {dispalayedCabins.map((cabin) => (
                <CabinCard key={cabin.id} cabin={cabin} />
            ))}
        </div>
    );
}
