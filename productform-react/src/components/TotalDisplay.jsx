function TotalDisplay({ totalAmount }) {
    return (
        <div className="result">
            合計金額：{totalAmount.toLocaleString()}円
        </div>
    );
}

export default TotalDisplay;