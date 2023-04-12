import React, {useState} from 'react';

function Paragraph(props: { text: string, maxLines: number }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const style = {
        WebkitLineClamp: isExpanded ? 'unset' : props.maxLines, // establecer la propiedad line-clamp
    };

    return (
        <div className="paragraph-wrapper">
            <p style={style}>{props.text}</p>
            {/*
                !isExpanded && (
                    <button className="show-more-button" onClick={toggleExpand}>
                        Ver más
                    </button>
                )
            */}
        </div>
    );
}

export default Paragraph;
