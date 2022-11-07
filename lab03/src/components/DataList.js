import { useState, useEffect } from "react";
import { FixedSizeList as List } from 'react-window';
import Box from '@mui/material/Box';
import DataRow from "./DataRow";

function DataList() {
    const [data, setData] = useState({});

    async function takeData() {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((response) => response.filter(str => str.title.split(' ').length <= 7))
            .catch((error) => console.error(error))
        setData(data)
    }

    const Row = ({ index, style }) => (
        <div style={style}><DataRow data={data[index]} /></div>
    )

    useEffect(() => {
        takeData();
    }, [])
    return (
        <Box mt={10}>
            <List
                height={600}
                itemCount={data.length}
                itemSize={250}
                width="100%"
            >
                {Row}
            </List>
        </Box>
    )
}

export default DataList;