import "./App.css";
import { useState } from "react";
import { calculateMoney } from "./services/calculateApi";

import MoneySection from "./components/MoneySection";
import ActionButtons from "./components/ActionButtons";
import TotalDisplay from "./components/TotalDisplay";

function App() {

  const coinItems = [
    { label: "1円", name: "coins_1" },
    { label: "5円", name: "coins_5" },
    { label: "10円", name: "coins_10" },
    { label: "50円", name: "coins_50" },
    { label: "100円", name: "coins_100" },
    { label: "500円", name: "coins_500" },
  ];

  const rollItems = [
    { label: "1円棒金", name: "coin_rolls_1" },
    { label: "5円棒金", name: "coin_rolls_5" },
    { label: "10円棒金", name: "coin_rolls_10" },
    { label: "50円棒金", name: "coin_rolls_50" },
    { label: "100円棒金", name: "coin_rolls_100" },
    { label: "500円棒金", name: "coin_rolls_500" },
  ];

  const banknoteItems = [
    { label: "千円", name: "banknotes_1k" },
    { label: "二千円", name: "banknotes_2k" },
    { label: "五千円", name: "banknotes_5k" },
    { label: "壱万円", name: "banknotes_10k" },
  ];

  // 入力フォームの値
  const initialFormData = {
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
  };

  const [formData, setFormData] = useState(initialFormData);

  // 計算結果
  const [totalAmount, setTotalAmount] = useState(0);

  // エラーメッセージ
  const [errorMessage, setErrorMessage] = useState("");

  // 個別エラー
  const [fieldErrors, setFieldErrors] = useState({});

  // 入力フォームが変更されたとき
  const handleChange = (e) => {
    const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    };

  // クリアボタン
  const handleClear = () => {
    setFormData(initialFormData);
    setTotalAmount(0);
    setErrorMessage("");
    setFieldErrors({});
  };

  // 計算ボタン
  const handleCalculate = async () => {
    const cleanedData = { ...formData };
    const errors = {};
    let hasError = false;

    // 空欄時は許可
    Object.keys(cleanedData).forEach((key) => {
      let value = cleanedData[key];
      if (value === "") {
        return;
      }

      // 全角数字を半角数字に変換
      value = value.normalize("NFKC");
      cleanedData[key] = value;

      // 半角数字のみ、13桁制限
      if (!/^\d+$/.test(value) || value.length > 13) {
        cleanedData[key] = "";
        errors[key] = "0以上13桁以内の整数で入力してください。";
        hasError = true;
      }
    });

    setFormData(cleanedData);

    // エラーメッセージ
    if (hasError) {
      setFieldErrors(errors);
      return;
    }

    // エラーがなければクリア
    setFieldErrors({});

    // 空欄は0として送信
    const requestData = {};
    Object.keys(cleanedData).forEach((key) => {
      requestData[key] =
          cleanedData[key] === "" ? 0 : Number(cleanedData[key]);
    });

    try {
      const data = await calculateMoney(requestData);
      setTotalAmount(data.totalAmount);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCalculate();
    }
  }

  return (
      <div className="boukin">

        <h1>ボウキン</h1>

        <div className="coin-section">

          {/* 硬貨 */}
          <MoneySection
              title="硬貨"
              items={coinItems}
              formData={formData}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
              fieldErrors={fieldErrors}
          />

          {/* 棒金 */}
          <MoneySection
              title="棒金"
              items={rollItems}
              formData={formData}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
              fieldErrors={fieldErrors}
          />

        </div>

        {/* 紙幣 */}
        <div className="banknote-section">
            <MoneySection
                title="紙幣"
                items={banknoteItems}
                formData={formData}
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
                fieldErrors={fieldErrors}
            />
        </div>

        {/*エラーメッセージ*/}
        {errorMessage && (
            <p className="error-message">
              {errorMessage}
              </p>
        )}

        {/* ボタン */}
        <ActionButtons
            handleCalculate={handleCalculate}
            handleClear={handleClear}
        />

        {/* 結果 */}
        <TotalDisplay totalAmount={totalAmount} />

      </div>
  );
}

export default App;