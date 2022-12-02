import React, { useCallback, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as yup from "yup";
import Cities from "./Cities";
import Position from "./Position";

const useYupValidationResolver = validationSchema =>
    useCallback(
        async data => {
            try {
                const values = await validationSchema.validate(data, {
                    abortEarly: false
                });

                return {
                    values,
                    errors: {}
                };
            } catch (errors) {
                return {
                    values: {},
                    errors: errors.inner.reduce(
                        (allErrors, currentError) => ({
                            ...allErrors,
                            [currentError.path]: {
                                type: currentError.type ?? "validation",
                                message: currentError.message
                            }
                        }),
                        {}
                    )
                };
            }
        },
        [validationSchema]
    );

const validationSchema = yup.object({
    from_city: yup.string().required("Оберіть місто"),
    to_city: yup.string().required("Оберіть місто"),
    typeOfShipment: yup.string().required("Оберіть вид відправлення"),
    positions: yup.array()
        .when('typeOfShipment', {
            is: 'palette',
            then: yup.array().of(
                yup.object({
                    type: yup.string().required("Вкажіть тип палета"),
                    cost: yup.number().positive('Ціна повинна мати додатнє значення').required("Вкажіть ціну палета").typeError('Вкажіть ціну'),
                    count: yup.number().positive('Кількість повинна мати додатнє значення').required("Вкажіть кількість").typeError('Вкажіть кількість'),
                })
            ),
        })
        .when('typeOfShipment', {
            is: 'load',
            then: yup.array().of(
                yup.object({
                    count: yup.number().positive('Кількість повинна мати додатнє значення').required("Вкажіть кількість").typeError('Вкажіть кількість'),
                    cost: yup.number().positive('Ціна повинна мати додатнє значення').required("Вкажіть ціну").typeError('Вкажіть ціну'),
                    weight: yup.number().positive('Вага повинна мати додатнє значення').required("Вкажіть вагу").typeError('Вкажіть вагу'),
                    width: yup.number().positive('Вага повинна мати додатнє значення').required("Вкажіть вагу").typeError('Вкажіть вагу'),
                    length: yup.number().positive('Довжина повинна мати додатнє значення').required("Вкажіть довжину").typeError('Вкажіть довжину'),
                    height: yup.number().positive('Висота повинна мати додатнє значення').required("Вкажіть висоту").typeError('Вкажіть висоту'),
                })
            ),
        }),
    packages: yup.boolean().default(false),
    typeOfPackaging: yup.string().when("packages", {
        is: true,
        then: yup.string().required("Вкажіть вид пакування")

    }),
    lift: yup.boolean().default(false),
    liftFloors: yup.number().when("lift", {
        is: true,
        then: yup.number().positive('Поверх повинен мати додатнє значення').typeError("Вкажіть номер поверху")
    }),
    lifUpElevator: yup.boolean().default(false),
    returnDelivery: yup.boolean().label("Зворотня доставка"),
    typeReturnDelivery: yup.string().when("returnDelivery", {
        is: true,
        then: yup.string().required("Вкажіть вид зворотньої доставки")
    }),
    palletization: yup.boolean()
});

export default function FormData({ cities, palettes, packages, typesReturnDelivery }) {
    const resolver = useYupValidationResolver(validationSchema);
    const { handleSubmit, register, formState: { errors }
    } = useForm({ resolver });

    const [typeOfShipment, setTypeOfShipment] = useState("");
    const [positions, setPositions] = useState([]);
    const [count, setCount] = useState(0);
    const [isServicePacking, setServicePacking] = useState(false);
    const [isLift, setLift] = useState(false);
    const [isReturnDelivery, setReturnDelivery] = useState(false);

    const handleTypeOfShipmentChange = (e) => {
        setTypeOfShipment(e.target.value)

        if (e.target.value === "load") {
            setPositions([{ count: 1, cost: 0, weight: 0, length: 0, width: 0, height: 0 }]);
        } else if (e.target.value === "palette") {
            setPositions([{ count: 1, cost: 0, type: "" }]);
        }
        setCount(1);
    }
    const addPosition = (e) => {
        let place = {}
        place["typeOfShipment"] = typeOfShipment;
        setPositions([...positions, place]);
        setCount(count + 1);
    }
    const removePosition = (index) => {
        setPositions(positions.filter((arr, i) => i != index));
    }
    const onReset = () => {
        setTypeOfShipment("");
        setPositions([]);
        setServicePacking(false);
        setLift(false);
        setReturnDelivery(false);
        setCount(0);
    }

    return (
        <FormProvider {...{ register, handleSubmit, errors }} >
            <form onSubmit={handleSubmit(data => console.log(data))} onReset={onReset} className="container">
                <div className="container_place">
                    <Cities cities={cities} city="from" />
                    <Cities cities={cities} city="to" />
                </div>
                <div>
                    <label htmlFor="typeOfShipment">Вид відправлення</label>
                    <select defaultValue="" id="typeOfShipment" {...register("typeOfShipment")} onChange={handleTypeOfShipmentChange}>
                        <option value="" disabled hidden>Вкажіть вид відправлення</option>
                        <option value="palette">Палети</option>
                        <option value="load">Вантажі</option>
                    </select>
                    <span className="error">{errors.typeOfShipment?.message}</span>
                </div>
                <div>
                    {typeOfShipment ?
                        <div>
                            {positions.map((position, index) => (
                                <Position key={"position" + index.toString()} index={index} typeOfShipment={typeOfShipment}
                                    removePosition={removePosition}
                                    palettes={palettes} />
                            ))}
                            <button type="button" onClick={addPosition}>Додати місце</button>
                        </div> : <div></div>}
                </div>
                <div>
                    <input type="checkbox" id="packages"
                        {...register("packages")} onChange={(e) => setServicePacking(!!e.target.checked)} />
                    <label htmlFor="packages">Послуга "Пакування"</label>
                    {isServicePacking && (
                        <div>
                            <div>
                                <select defaultValue="" id="typeOfPackaging" {...register("typeOfPackaging")}>
                                    <option value="" disabled hidden>---оберіть вид пакування---</option>
                                    {packages.map((p, index) => (
                                        <option key={"package" + index.toString()}
                                            value={p.id}>{p.label}</option>
                                    ))}
                                </select>
                                <span className="error">{errors.packagingType?.message}</span>
                            </div>
                            <span>Кількість: {count}</span>
                        </div>
                    )}
                </div>
                <div>
                    <input type="checkbox" id="lift"
                        {...register("lift")} onChange={(e) => setLift(!!e.target.checked)} />
                    <label htmlFor="lift">Послуга "Підйом на поверх"</label>
                    {isLift && (
                        <div>
                            <div>
                                <label htmlFor="liftFloors">Поверх</label>
                                <input id="liftFloors" type="number" {...register("liftFloors")} />
                                <span className="error">{errors.liftFloors?.message}</span>
                            </div>
                            <div>
                                <input id="liftElevator" type="checkbox" {...register("liftElevator")} />
                                <label htmlFor="liftElevator">Ліфт</label>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <input type="checkbox" id="returnDelivery"
                        {...register("returnDelivery")} onChange={(e) => setReturnDelivery(!!e.target.checked)} />
                    <label htmlFor="returnDelivery">Послуга "Зворотна доставка"</label>
                    {isReturnDelivery && (
                        <div>
                            <div>
                                <select defaultValue="" id="typeReturnDelivery" {...register("typeReturnDelivery")}>
                                    <option value="" disabled hidden>---вид зворотної доставки---</option>
                                    {typesReturnDelivery.map((type, index) => (
                                        <option key={"type" + index.toString()}
                                            value={type.id}>{type.label}</option>
                                    ))}
                                </select>
                                <span className="error">{errors.typeReturnDelivery?.message}</span>
                            </div>
                        </div>
                    )}
                </div>
                {typeOfShipment === "palette" ?
                    <div>
                        <input id="palletization" type="checkbox" {...register("palletization")} />
                        <label htmlFor="palletization">Палетування</label>
                    </div>
                    : <></>}
                <div className="container_place">
                    <input type="submit" value="Розрахувати" />
                    <input type="reset" value="Очистити" />
                </div>
            </form>
        </FormProvider>
    );
}

