import {useState} from "react";
import FacebookAd from "../../types/FacebookAd";

interface FacebookAdCreateModalProps {
    onCreate: Function
}

const FacebookAdCreateModal = (props:FacebookAdCreateModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState([]);
    const [headline, setHeadline] = useState('');
    const [description, setDescription] = useState('');
    const [cta, setCta] = useState('');

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const newAd = new FacebookAd(img, headline, description, cta);
        props.onCreate(newAd);
        handleClose();
    };

    const handleImgChange = (event: any) => {
        const files = event.target.files;
        const images: string[] = [];
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = (e) => {
                //images.push(e?.target?.result);
                if (images.length > 0){
                   // setImg([...images]);
                }

            };
            reader.readAsDataURL(files[i]);
        }
    };

    return (
        <>
            <button onClick={handleOpen}>Crear anuncio de Facebook</button>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button onClick={handleClose}>Cerrar modal</button>
                        <form onSubmit={handleSubmit}>
                            <h2>Crear anuncio de Facebook</h2>
                            <label>
                                Imágenes:
                                <input type="file" multiple onChange={handleImgChange} />
                            </label>
                            {img.length > 0 && (
                                <div>
                                    {img.map((image) => (
                                        <img src={image} alt="Facebook Ad" key={image} />
                                    ))}
                                </div>
                            )}
                            <label>
                                Titular:
                                <input
                                    type="text"
                                    value={headline}
                                    onChange={(event) => setHeadline(event.target.value)}
                                />
                            </label>
                            <label>
                                Descripción:
                                <textarea
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                />
                            </label>
                            <label>
                                Llamado a la acción:
                                <input
                                    type="text"
                                    value={cta}
                                    onChange={(event) => setCta(event.target.value)}
                                />
                            </label>
                            <button type="submit">Crear</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default FacebookAdCreateModal;
