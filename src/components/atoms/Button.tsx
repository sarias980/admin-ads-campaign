import React from "react";

interface ItemButtonProps {
    text: string;
    onClick: Function;
}

const ItemButton : React.FC<ItemButtonProps> = ({text, onClick}) => {

    return (
        <div className={'item-button'}>
            <button onClick={() => onClick()}>{text}</button>
        </div>
    )
}
export default ItemButton
