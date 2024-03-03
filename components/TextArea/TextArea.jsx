import classList from "./TextArea.module.scss";
import Paragraph from "../Paragraph/Paragraph";

const TextArea = ({
  fieldName,
  value,
  onChange,
  name,
  type,
  placeholder,
  errorMessage,
  label,
  inputStyle
}) => {
  return (
    <>
      <div className={classList.textArea}>
        <textarea
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          style={inputStyle}
          id=""
          cols="20"
          rows="6"></textarea>
        {errorMessage && (
          <Paragraph color="red" style={{ fontSize: "12px" }}>
            {errorMessage}
          </Paragraph>
        )}
      </div>
    </>
  );
};

export default TextArea;
