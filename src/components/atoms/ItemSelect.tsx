import React, {ChangeEvent} from "react";

interface ItemSelectProps {
    value: string;
    placeholder: string;
    setValue: Function;
    options: any;
}

const ItemSelect: React.FC<ItemSelectProps> = ({value, setValue, placeholder, options}) => {

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className={'item-input'}>
            <select value={value} onChange={handleChange}>
                {options.map((option: any) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default ItemSelect;
