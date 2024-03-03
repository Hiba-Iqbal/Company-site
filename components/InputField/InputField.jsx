import classList from "./InputField.module.scss";
import Paragraph from "../Paragraph/Paragraph";

const InputField = ({
  fieldName,
  onChange,
  value,
  name,
  type,
  placeholder,
  errorMessage,
  inputStyle,
  customClass,
  ...restProps
}) => {
  return (
    <>
      <div className={`${classList.inputField} ${customClass}`}>
        {/* <Paragraph color="#0000006e" style={{ fontSize: "14px" }}>
          {fieldName}
        </Paragraph> */}

        <input
          {...restProps}
          onChange={onChange}
          value={value}
          name={name}
          type={type}
          placeholder={placeholder}
          style={inputStyle}
        />

        {errorMessage && (
          <Paragraph color="red" style={{ fontSize: "12px" }}>
            {errorMessage}
          </Paragraph>
        )}
      </div>
    </>
  );
};

export default InputField;
