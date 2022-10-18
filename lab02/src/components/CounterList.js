import MyCounter from "./MyCounter";

function CounterList(props) {
    return (
        <div>
            <h1>{props.nameTask}</h1>
            {props.counters.map((counter) => {
                const { id, initial, min, max } = counter
                return <MyCounter key={id} initial={initial} min={min} max={max} />

            })}
        </div>
    );
}

export default CounterList;