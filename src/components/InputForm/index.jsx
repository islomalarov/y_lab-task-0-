import styles from './page.module.css';

const FormInput = ({ inputValue, setInputValue, inputType }) => {
  function inputPlaceholder(inputType) {
    return inputType[0].toLocaleUpperCase() + inputType.slice(1);
  }

  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder(inputType)}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className={styles.input}
      required
    />
  );
};

export default FormInput;
