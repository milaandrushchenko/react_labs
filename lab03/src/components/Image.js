import Link from "@mui/material/Link";

function Image(props) {
    const url = props.url
    const thumbnailUrl = props.thumbnailUrl
    return (
        <Link href={url}><img src={thumbnailUrl} alt={url} /></Link>
    )
}

export default Image;