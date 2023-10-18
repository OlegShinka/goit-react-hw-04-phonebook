import { Cont, Inp } from './filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <Cont>
        <h2> Find contacts by name</h2>
        <Inp
          type="text"
          name="filter"
          value={filter}
          onChange={evt => onChangeFilter(evt.target.value)}
        />
      </Cont>
    </div>
  );
};
