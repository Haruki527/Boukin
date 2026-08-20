// src/services/calculateApi.js

const API_URL = "http://localhost:8080/api/calculate";

export async function calculateMoney(formData) {

    // 空欄を0に変換
    const requestData = {};

    Object.keys(formData).forEach((key) => {
        requestData[key] =
            formData[key] === "" ? 0 : Number(formData[key]);
    });

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    });

    if (!response.ok) {
        throw new Error("計算に失敗しました。");
    }

    return await response.json();
}