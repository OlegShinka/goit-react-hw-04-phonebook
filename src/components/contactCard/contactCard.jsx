import { BtnStyle } from './contactCard.styled';
import { HiTrash } from 'react-icons/hi';
export const Card = ({ name, number, onDelete, id }) => {
  return (
    <div>
      <span>{name} :</span>
      <span>{number} </span>

      <BtnStyle type="button" onClick={() => onDelete(id)}>
        <HiTrash />
      </BtnStyle>
    </div>
  );
};
