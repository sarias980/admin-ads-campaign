import React, {useState} from "react";

interface ItemProps {
    value: string;
    placeholder: string;
    setValue: Function;
}

const ItemInput: React.FC<ItemProps> = ({placeholder, value, setValue}) => {
    return (
        <div className={'item-input'}>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default ItemInput
