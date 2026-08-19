package org.sample.boukin.dto;

import jakarta.validation.constraints.PositiveOrZero;

public class CalculateRequest {

    // 硬貨
    @PositiveOrZero
    private Integer coins_1;
    @PositiveOrZero
    private Integer coins_5;
    @PositiveOrZero
    private Integer coins_10;
    @PositiveOrZero
    private Integer coins_50;
    @PositiveOrZero
    private Integer coins_100;
    @PositiveOrZero
    private Integer coins_500;

    // 棒金
    @PositiveOrZero
    private Integer coin_rolls_1;
    @PositiveOrZero
    private Integer coin_rolls_5;
    @PositiveOrZero
    private Integer coin_rolls_10;
    @PositiveOrZero
    private Integer coin_rolls_50;
    @PositiveOrZero
    private Integer coin_rolls_100;
    @PositiveOrZero
    private Integer coin_rolls_500;

    // お札
    @PositiveOrZero
    private Integer banknotes_1k;
    @PositiveOrZero
    private Integer banknotes_2k;
    @PositiveOrZero
    private Integer banknotes_5k;
    @PositiveOrZero
    private Integer banknotes_10k;

    public Integer getcoins_1() {
        return coins_1;
    }

    public void setcoins_1(Integer coins_1) {
        this.coins_1 = coins_1;
    }

    public Integer getcoins_5() {
        return coins_5;
    }

    public void setcoins_5(Integer coins_5) {
        this.coins_5 = coins_5;
    }

    public Integer getcoins_10() {
        return coins_10;
    }

    public void setcoins_10(Integer coins_10) {
        this.coins_10 = coins_10;
    }

    public Integer getcoins_50() {
        return coins_50;
    }

    public void setcoins_50(Integer coins_50) {
        this.coins_50 = coins_50;
    }

    public Integer getcoins_100() {
        return coins_100;
    }

    public void setcoins_100(Integer coins_100) {
        this.coins_100 = coins_100;
    }

    public Integer getcoins_500() {
        return coins_500;
    }

    public void setcoins_500(Integer coins_500) {
        this.coins_500 = coins_500;
    }

    public Integer getcoin_rolls_1() {
        return coin_rolls_1;
    }

    public void setcoin_rolls_1(Integer coin_rolls_1) {
        this.coin_rolls_1 = coin_rolls_1;
    }

    public Integer getcoin_rolls_5() {
        return coin_rolls_5;
    }

    public void setcoin_rolls_5(Integer coin_rolls_5) {
        this.coin_rolls_5 = coin_rolls_5;
    }

    public Integer getcoin_rolls_10() {
        return coin_rolls_10;
    }

    public void setcoin_rolls_10(Integer coin_rolls_10) {
        this.coin_rolls_10 = coin_rolls_10;
    }

    public Integer getcoin_rolls_50() {
        return coin_rolls_50;
    }

    public void setcoin_rolls_50(Integer coin_rolls_50) {
        this.coin_rolls_50 = coin_rolls_50;
    }

    public Integer getcoin_rolls_100() {
        return coin_rolls_100;
    }

    public void setcoin_rolls_100(Integer coin_rolls_100) {
        this.coin_rolls_100 = coin_rolls_100;
    }

    public Integer getcoin_rolls_500() {
        return coin_rolls_500;
    }

    public void setcoin_rolls_500(Integer coin_rolls_500) {
        this.coin_rolls_500 = coin_rolls_500;
    }

    public Integer getBanknotes_1k() {
        return banknotes_1k;
    }

    public void setBanknotes_1k(Integer banknotes_1k) {
        this.banknotes_1k = banknotes_1k;
    }

    public Integer getBanknotes_2k() {
        return banknotes_2k;
    }

    public void setBanknotes_2k(Integer banknotes_2k) {
        this.banknotes_2k = banknotes_2k;
    }

    public Integer getBanknotes_5k() {
        return banknotes_5k;
    }

    public void setBanknotes_5k(Integer banknotes_5k) {
        this.banknotes_5k = banknotes_5k;
    }

    public Integer getBanknotes_10k() {
        return banknotes_10k;
    }

    public void setBanknotes_10k(Integer banknotes_10k) {
        this.banknotes_10k = banknotes_10k;
    }
}