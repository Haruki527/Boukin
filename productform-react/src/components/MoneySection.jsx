function MoneySection({
                          title,
                          items,
                          formData,
                          handleChange
                      }) {
    return (
        <div className="money-column">
            <h2>{title}</h2>

            {items.map((item) => (
                <div className="input-row" key={item.name}>
                    <label>{item.label}</label>

                    <input
                        type="text"
                        min="0"
                        step="1"
                        name={item.name}
                        value={formData[item.name]}
                        onChange={handleChange}
                    />
                </div>
            ))}
        </div>
    );
}

export default MoneySection;