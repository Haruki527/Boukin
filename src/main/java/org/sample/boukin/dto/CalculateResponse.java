package org.sample.boukin.dto;

public class CalculateResponse {

    private Integer totalAmount;

    public CalculateResponse(Integer totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Integer getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Integer totalAmount) {
        this.totalAmount = totalAmount;
    }
}