interface selectProps {
  value: string;
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

const SelectField: React.FC<selectProps> = ({ value, onChange }) => {
  return (
    <>
      <select
        className="form__select"
        name="animal"
        placeholder="choose an animal"
        value={value}
        onChange={onChange}
      >
        <option value="">Choose an animal :</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>
    </>
  );
};

export default SelectField;
