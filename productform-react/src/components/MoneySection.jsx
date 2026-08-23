function MoneySection({
                          title,
                          items,
                          formData,
                          handleChange,
                          handleKeyDown
                      }) {
    return (
        <div className="money-column">
            <h2>{title}</h2>

            {items.map((item) => (
                <div className="input-row" key={item.name}>
                    <label>{item.label}</label>

                    <input
                        type="text"
                        inputMode="numeric"
                        name={item.name}
                        value={formData[item.name]}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        maxLength={13}
                    />
                </div>
            ))}
        </div>
    );
}

export default MoneySection;