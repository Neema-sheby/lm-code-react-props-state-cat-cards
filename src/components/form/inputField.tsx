interface fieldProps {
  name: string;
  value: string | Array<string> | number;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const InputField: React.FC<fieldProps> = ({ name, value, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="form__label"></label>
      <input
        className="form__input"
        placeholder={`Enter ${name}`}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputField;
