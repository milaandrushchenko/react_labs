import Stack from '@mui/material/Stack';
import Image from './Image';

function DataRow(props) {
    const { albumId, title, url, thumbnailUrl } = props.data

    return (

        <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="stretch"
            spacing={2}
        >
            <div><span>Album ID : </span>{albumId}</div>
            <div><span>Title : </span>{title}</div>
            <div><Image url={url} thumbnailUrl={thumbnailUrl} /></div>
        </Stack>
    )

}
export default DataRow;