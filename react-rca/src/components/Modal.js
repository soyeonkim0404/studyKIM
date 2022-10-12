import '../assets/modal.css';
import ReactModal from 'react-modal';

const Modal = ({ isOpen, onSubmit, onCancel }) => {
  const handleClickSubmit = () => {
    onSubmit();
  };
  const handleClickCancel = () => {
    onCancel();
  };
  return (
    <ReactModal isOpen={isOpen}>
      <div>모달입니다</div>
      <div>
        <button onClick={handleClickSubmit}>확인</button>
        <button onClick={handleClickCancel}>취소</button>
      </div>
    </ReactModal>
  );
};

export default Modal;
