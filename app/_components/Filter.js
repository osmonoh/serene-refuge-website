import ButtonFilter from "./ButtonFilter";

export default function Filter() {
    const buttons = [
        { label: <span>All cabins</span>, filter: "all" },
        { label: <span>1&mdash;3 guests</span>, filter: "small" },
        { label: <span>4&mdash;7 guests</span>, filter: "medium" },
        { label: <span>8&mdash;12 guests</span>, filter: "large" }
    ];

    return (
        <div className="border border-primary-800 flex">
            {buttons.map((button) => (
                <ButtonFilter key={button.filter} filter={button.filter}>
                    {button.label}
                </ButtonFilter>
            ))}
        </div>
    );
}
