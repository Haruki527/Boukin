function ActionButtons({ handleCalculate, handleClear }) {
    return (
        <div className="button-section">
            <button onClick={handleCalculate}>
                計算
            </button>

            <button onClick={handleClear}>
                クリア
            </button>
        </div>
    );
}

export default ActionButtons;