package org.sample.boukin.entity;

import jakarta.persistence.*;
@Entity
@Table(name = "calculate")

public class CalculateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer coins_1;
    private Integer coins_5;
    private Integer coins_10;
    private Integer coins_50;
    private Integer coins_100;
    private Integer coins_500;

    private Integer coin_rolls_1;
    private Integer coin_rolls_5;
    private Integer coin_rolls_10;
    private Integer coin_rolls_50;
    private Integer coin_rolls_100;
    private Integer coin_rolls_500;

    private Integer banknotes_1000;
    private Integer banknotes_2000;
    private Integer banknotes_5000;
    private Integer banknotes_10000;

    private Integer totalAmount;

    public CalculateEntity() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getCoins_1() {
        return coins_1;
    }

    public void setCoins_1(Integer coins_1) {
        this.coins_1 = coins_1;
    }

    public Integer getCoins_5() {
        return coins_5;
    }

    public void setCoins_5(Integer coins_5) {
        this.coins_5 = coins_5;
    }

    public Integer getCoins_10() {
        return coins_10;
    }

    public void setCoins_10(Integer coins_10) {
        this.coins_10 = coins_10;
    }

    public Integer getCoins_50() {
        return coins_50;
    }

    public void setCoins_50(Integer coins_50) {
        this.coins_50 = coins_50;
    }

    public Integer getCoins_100() {
        return coins_100;
    }

    public void setCoins_100(Integer coins_100) {
        this.coins_100 = coins_100;
    }

    public Integer getCoins_500() {
        return coins_500;
    }

    public void setCoins_500(Integer coins_500) {
        this.coins_500 = coins_500;
    }

    public Integer getCoin_rolls_1() {
        return coin_rolls_1;
    }

    public void setCoin_rolls_1(Integer coin_rolls_1) {
        this.coin_rolls_1 = coin_rolls_1;
    }

    public Integer getCoin_rolls_5() {
        return coin_rolls_5;
    }

    public void setCoin_rolls_5(Integer coin_rolls_5) {
        this.coin_rolls_5 = coin_rolls_5;
    }

    public Integer getCoin_rolls_10() {
        return coin_rolls_10;
    }

    public void setCoin_rolls_10(Integer coin_rolls_10) {
        this.coin_rolls_10 = coin_rolls_10;
    }

    public Integer getCoin_rolls_50() {
        return coin_rolls_50;
    }

    public void setCoin_rolls_50(Integer coin_rolls_50) {
        this.coin_rolls_50 = coin_rolls_50;
    }

    public Integer getCoin_rolls_100() {
        return coin_rolls_100;
    }

    public void setCoin_rolls_100(Integer coin_rolls_100) {
        this.coin_rolls_100 = coin_rolls_100;
    }

    public Integer getCoin_rolls_500() {
        return coin_rolls_500;
    }

    public void setCoin_rolls_500(Integer coin_rolls_500) {
        this.coin_rolls_500 = coin_rolls_500;
    }

    public Integer getBanknotes_1000() {
        return banknotes_1000;
    }

    public void setBanknotes_1000(Integer banknotes_1000) {
        this.banknotes_1000 = banknotes_1000;
    }

    public Integer getBanknotes_2000() {
        return banknotes_2000;
    }

    public void setBanknotes_2000(Integer banknotes_2000) {
        this.banknotes_2000 = banknotes_2000;
    }

    public Integer getBanknotes_5000() {
        return banknotes_5000;
    }

    public void setBanknotes_5000(Integer banknotes_5000) {
        this.banknotes_5000 = banknotes_5000;
    }

    public Integer getBanknotes_10000() {
        return banknotes_10000;
    }

    public void setBanknotes_10000(Integer banknotes_10000) {
        this.banknotes_10000 = banknotes_10000;
    }

    public Integer getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Integer totalAmount) {
        this.totalAmount = totalAmount;
    }
}

