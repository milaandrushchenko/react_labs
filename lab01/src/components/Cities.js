function Cities(props) {
    return (
        <div className="block">
            <div className='block_row'>
                <select className="block_city">
                    {
                        props.cities.map(city => {
                            return (
                                <option key={city.id}>{city.name}</option>
                            );
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default Cities;