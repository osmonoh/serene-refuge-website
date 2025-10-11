import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";
import Filter from "@/app/_components/Filter";

// this changes the page from staticly to dynamically generated
// export const revalidate = 0;
// setting a value (in seconds) changes it to something between static and dynamic (every [value] seconds it refreshes the data)
// export const revalidate = 60;

export const metadata = {
    title: "Cabins"
};

export default function Page({ searchParams }) {
    // only page get searchParams
    // it also makes the page dynamic
    const filter = searchParams?.capacity ?? "all";

    return (
        <div>
            <h1 className="text-4xl mb-5 text-accent-400 font-medium">
                Our Luxury Cabins
            </h1>
            <p className="text-primary-200 text-lg mb-10">
                Cozy yet luxurious cabins, located right in the heart of the
                Italian Dolomites. Imagine waking up to beautiful mountain
                views, spending your days exploring the dark forests around, or
                just relaxing in your private hot tub under the stars. Enjoy
                nature&apos;s beauty in your own little home away from home. The
                perfect spot for a peaceful, calm vacation. Welcome to paradise.
            </p>

            <div className="flex justify-end mb-8">
                <Filter />
            </div>

            {/* navigation in next.js is always wrapped in a react transition and in transition suspense will not hide content rendered earlier so spinner will not be shown */}
            {/* fix - using a unique key */}
            <Suspense fallback={<Spinner />} key={filter}>
                <CabinList filter={filter} />
            </Suspense>
        </div>
    );
}
