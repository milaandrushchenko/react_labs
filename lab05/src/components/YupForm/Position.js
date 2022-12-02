import { useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function Position({ index, typeOfShipment, removePosition, palettes }) {
    const { register, errors } = useFormContext();

    return (
        <div >
            {typeOfShipment === "palette" ?
                (

                    <div className="container_place">
                        <div>
                            <label htmlFor={`positions[${index}].type`}>Тип палети</label>
                            <select defaultValue=""
                                id={`positions[${index}].type`} {...register(`positions[${index}].type`)}>
                                <option value="" disabled hidden>---Оберіть тип палети---</option>
                                {palettes.map(palette =>
                                    <option key={palette.id.toString()} value={palette.value}>{palette.label}</option>)
                                }
                            </select>
                            <span className="error">{errors[`positions[${index}].type`]?.message}</span>
                        </div>

                        <div>
                            <label htmlFor={`positions[${index}].cost`}>Оголошена вартість</label>
                            <input type="text" id={`positions[${index}].cost`}
                                {...register(`positions[${index}].cost`)} />
                            <span className="error">{errors[`positions[${index}].cost`]?.message}</span>
                        </div>

                        <div>
                            <label htmlFor={`positions[${index}].count`}>Кількість</label>
                            <input type="number" id={`positions[${index}].count`}
                                {...register(`positions[${index}].count`)} />
                            <span className="error">{errors[`positions[${index}].count`]?.message}</span>
                        </div>
                        {index > 0 && <FontAwesomeIcon icon={faTrashAlt} onClick={() => removePosition(index)} />}
                    </div>

                ) :
                (
                    <div className="container_place">
                        <div>
                            <label htmlFor={`positions[${index}].count`}>Кількість</label>
                            <input type="number" id={`positions[${index}].count`}
                                {...register(`positions[${index}].count`)} />
                            <span className="error">{errors[`positions[${index}].count`]?.message}</span>
                        </div>

                        <div>
                            <label htmlFor={`positions[${index}].cost`}>Оголошена вартість</label>
                            <input type="text" id={`positions[${index}].cost`}
                                {...register(`positions[${index}].cost`)} />
                            <span className="error">{errors[`positions[${index}].cost`]?.message}</span>
                        </div>

                        <div>
                            <label htmlFor={`positions[${index}].weight`}>Вага</label>
                            <input type="number" id={`positions[${index}].weight`}
                                {...register(`positions[${index}].weight`)} />
                            <span className="error">{errors[`positions[${index}].weight`]?.message}</span>
                        </div>
                        <div>
                            <label htmlFor={`positions[${index}].length`}>Довжина</label>
                            <input type="number" id={`positions[${index}].length`}
                                {...register(`positions[${index}].length`)} />
                            <span className="error">{errors[`positions[${index}].length`]?.message}</span>
                        </div>
                        <div>
                            <label htmlFor={`positions[${index}].width`}>Ширина</label>
                            <input type="number" id={`positions[${index}].width`}
                                {...register(`positions[${index}].width`)} />
                            <span className="error">{errors[`positions[${index}].width`]?.message}</span>
                        </div>
                        <div>
                            <label htmlFor={`positions[${index}].height`}>Висота</label>
                            <input type="number" id={`positions[${index}].height`}
                                {...register(`positions[${index}].height`)} />
                            <span className="error">{errors[`positions[${index}].height`]?.message}</span>
                        </div>
                        {index > 0 && <FontAwesomeIcon icon={faTrashAlt} onClick={() => removePosition(index)} />}
                    </div>
                )

            }
        </div>
    );
}