import React from "react";

interface ItemImageInputProps {
    img: string[]
    setValue: Function
}

const ItemImageInput: React.FC<ItemImageInputProps> = ({img, setValue}) => {

    const handleImgChange = (event: any) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setValue(reader.result as string);
            };
            reader.readAsDataURL(file);
            //setValue(file);
        }
    };

    return (
        <div className={'item-input'}>
            <label>
                <input type="file" accept="image/*" multiple onChange={handleImgChange}/>
            </label>
        </div>
    )
}
export default ItemImageInput;
