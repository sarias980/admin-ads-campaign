import React, { FC } from 'react';

interface ModalProps {
    message: string;
    confirm: () => void;
    cancel: () => void;
}

const DeleteModalConfirm: FC<ModalProps> = ({ message, confirm, cancel }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-message">{message}</div>
                <div className="modal-buttons">
                    <button className="modal-confirm" onClick={confirm}>
                        Confirm
                    </button>
                    <button className="modal-cancel" onClick={cancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModalConfirm;
