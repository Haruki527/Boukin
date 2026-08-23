function MoneySection({
                          title,
                          items,
                          formData,
                          handleChange,
                          handleKeyDown,
                        　fieldErrors
                      }) {
    return (
        <div className="money-column">
            <h2>{title}</h2>

            {items.map((item) => (
                <div className="input-group" key={item.name}>

                    <div className="input-row">
                        <label>{item.label}</label>

                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={13}
                            name={item.name}
                            value={formData[item.name]}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            className={fieldErrors[item.name] ? "input-error" : ""}
                        />

                        <span className={"unit"}>
                        {title === "棒金" ? "本" : "枚"}
                    </span>
                    </div>

                    {fieldErrors[item.name] && (
                        <p className="field-error">
                            {fieldErrors[item.name]}
                        </p>
                    )}

                </div>
            ))}
        </div>
    );
}

export default MoneySection;