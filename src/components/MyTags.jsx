import {Tag} from "antd";

export const MyTags = (props) => {
    const {opts, onTagClick} = props
    console.log(opts)

    return (
        <>
            {
                opts.map(o =>
                    <Tag color="green"
                         key={o.label}
                         onClick={() => onTagClick(o.value)}
                    >{o.label}</Tag>)
            }
        </>
    )
}