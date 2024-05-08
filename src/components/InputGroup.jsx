function InputGroup({ id, labelText, type, placeholder, onChange, value }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>
        <span className="label-text">{labelText}</span>
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        ></input>
      )}
    </div>
  );
}

export default InputGroup;
