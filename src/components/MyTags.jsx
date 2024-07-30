import {Tag} from "antd";

export const MyTags = (props) => {
    const {opts, onTagClick} = props
    console.log(opts)

    return (
        <>
            {
                opts.map(o =>
                    <Tag color="green"
                         style={{
                             lineHeight: '0.9rem',
                             fontSize: '0.9rem',
                             height: '1.4rem',
                             padding: '0.2rem',
                             cursor: 'pointer',
                         }}
                         title={`${o.label}: ${o.value}`}
                         key={o.label}
                         onClick={() => onTagClick(o.value)}
                    >{o.label}</Tag>)
            }
        </>
    )
}