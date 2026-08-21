const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const calculateMoney = async (formData) => {
    const response = await fetch(
        `${API_BASE_URL}/api/calculate`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
    );

    if (!response.ok) {
        throw new Error("計算に失敗しました");
    }

    return await response.json();
};