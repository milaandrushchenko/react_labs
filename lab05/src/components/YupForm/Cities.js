import { useFormContext } from "react-hook-form";

export default function Cities({ cities, city }) {
    const { register, errors } = useFormContext();

    return (
        <div className="container_place">
            <label htmlFor="from_city">{city === "from" ? "Місто-відправник" : "Місто-одержувач"}</label>
            <select defaultValue="" id="from" {...register(city === "from" ? "from_city" : "to_city")}>
                <option value="" hidden>---оберіть місто---</option>
                {cities.map(city =>
                    <option key={city.id} value={city.name}>{city.name}</option>
                )}
            </select>
            <span className="error">{errors[city === "from" ? "from_city" : "to_city"]?.message}</span>
        </div>
    );
}