import { Card } from 'components/contactCard/contactCard';
import { nanoid } from 'nanoid';
import { Cnt, List } from './contactsList.styled';
export const ContactsList = ({ list, onDelete }) => {
  return (
    <div>
      <List>
        {list.map(item => (
          <Cnt key={nanoid()}>
            <Card
              name={item.name}
              number={item.number}
              id={item.id}
              onDelete={onDelete}
            />
          </Cnt>
        ))}
      </List>
    </div>
  );
};
