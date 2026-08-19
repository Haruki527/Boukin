import "./App.css";
import { useState } from "react";

function App() {

  // 入力フォームの値
  const [formData, setFormData] = useState({
    coins_1: "",
    coins_5: "",
    coins_10: "",
    coins_50: "",
    coins_100: "",
    coins_500: "",

    coin_rolls_1: "",
    coin_rolls_5: "",
    coin_rolls_10: "",
    coin_rolls_50: "",
    coin_rolls_100: "",
    coin_rolls_500: "",

    banknotes_1k: "",
    banknotes_2k: "",
    banknotes_5k: "",
    banknotes_10k: ""
  });

  // 計算結果
  const [totalAmount, setTotalAmount] = useState(0);

  // 入力フォームが変更されたとき
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // クリアボタン
  const handleClear = () => {
    setFormData({
      coins_1: "",
      coins_5: "",
      coins_10: "",
      coins_50: "",
      coins_100: "",
      coins_500: "",

      coin_rolls_1: "",
      coin_rolls_5: "",
      coin_rolls_10: "",
      coin_rolls_50: "",
      coin_rolls_100: "",
      coin_rolls_500: "",

      banknotes_1k: "",
      banknotes_2k: "",
      banknotes_5k: "",
      banknotes_10k: ""
    });

    setTotalAmount(0);
  };

  // 計算ボタン
  const handleCalculate = async () => {

    // 空欄は0として送信
    const requestData = {};

    Object.keys(formData).forEach((key) => {
      requestData[key] =
          formData[key] === "" ? 0 : Number(formData[key]);
    });

    try {

      const response = await fetch(
          "http://localhost:8080/api/calculate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
          }
      );

      if (!response.ok) {
        throw new Error("計算に失敗しました");
      }

      const data = await response.json();

      setTotalAmount(data.totalAmount);

    } catch (error) {
      console.error(error);
      alert("計算に失敗しました");
    }
  };

  return (
      <div className="boukin">

        <h1>ボウキン</h1>

        <div className="coin-section">

          {/* 硬貨 */}
          <div className="coin-column">

            <h2>硬貨</h2>

            <div className="input-row">
              <label>1円</label>
              <input
                  type="number"
                  name="coins_1"
                  value={formData.coins_1}
                  onChange={handleChange}
              />
            </div>

            <div className="input-row">
              <label>5円</label>
              <input
                  type="number"
                  name="coins_5"
                  value={formData.coins_5}
                  onChange={handleChange}
              />
            </div>

            <div className="input-row">
              <label>10円</label>
              <input
                  type="number"
                  name="coins_10"
                  value={formData.coins_10}
                  onChange={handleChange}
              />
            </div>

            <div className="input-row">
              <label>50円</label>
              <input
                  type="number"
                  name="coins_50"
                  value={formData.coins_50}
                  onChange={handleChange}
              />
            </div>

            <div className="input-row">
              <label>100円</label>
              <input
                  type="number"
                  name="coins_100"
                  value={formData.coins_100}
                  onChange={handleChange}
              />
            </div>

            <div className="input-row">
              <label>500円</label>
              <input
                  type="number"
                  name="coins_500"
                  value={formData.coins_500}
                  onChange={handleChange}
              />
            </div>

          </div>

          {/* 棒金 */}
          <div className="roll-column">

            <h2>棒金</h2>

            <div className="input-row">
              <label>1円棒金</label>
              <input
                  type="number"
                  name="coin_rolls_1"
                  value={formData.coin_rolls_1}
                  onChange={handleChange}
              />
            </div>

            <div className="input-row">
              <label>5円棒金</label>
              <input
                  type="number"
                  name="coin_rolls_5"
                  value={formData.coin_rolls_5}
                  onChange={handleChange}
              />
            </div>

            <div className="input-row">
              <label>10円棒金</label>
              <input
                  type="number"
                  name="coin_rolls_10"
                  value={formData.coin_rolls_10}
                  onChange={handleChange}
              />
            </div>

            <div className="input-row">
              <label>50円棒金</label>
              <input
                  type="number"
                  name="coin_rolls_50"
                  value={formData.coin_rolls_50}
                  onChange={handleChange}
              />
            </div>

            <div className="input-row">
              <label>100円棒金</label>
              <input
                  type="number"
                  name="coin_rolls_100"
                  value={formData.coin_rolls_100}
                  onChange={handleChange}
              />
            </div>

            <div className="input-row">
              <label>500円棒金</label>
              <input
                  type="number"
                  name="coin_rolls_500"
                  value={formData.coin_rolls_500}
                  onChange={handleChange}
              />
            </div>

          </div>

        </div>

        {/* 紙幣 */}
        <div className="banknote-section">

          <h2>紙幣</h2>

          <div className="input-row">
            <label>千円</label>
            <input
                type="number"
                name="banknotes_1k"
                value={formData.banknotes_1k}
                onChange={handleChange}
            />
          </div>

          <div className="input-row">
            <label>二千円</label>
            <input
                type="number"
                name="banknotes_2k"
                value={formData.banknotes_2k}
                onChange={handleChange}
            />
          </div>

          <div className="input-row">
            <label>五千円</label>
            <input
                type="number"
                name="banknotes_5k"
                value={formData.banknotes_5k}
                onChange={handleChange}
            />
          </div>

          <div className="input-row">
            <label>壱万円</label>
            <input
                type="number"
                name="banknotes_10k"
                value={formData.banknotes_10k}
                onChange={handleChange}
            />
          </div>

        </div>

        {/* ボタン */}
        <div className="button-section">

          <button onClick={handleCalculate}>
            計算
          </button>

          <button onClick={handleClear}>
            クリア
          </button>

        </div>

        {/* 結果 */}
        <div className="result">
          合計金額：{totalAmount.toLocaleString()}円
        </div>

      </div>
  );
}

export default App;