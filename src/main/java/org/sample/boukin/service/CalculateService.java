package org.sample.boukin.service;

import org.sample.boukin.dto.CalculateRequest;
import org.sample.boukin.dto.CalculateResponse;
import org.springframework.stereotype.Service;

@Service
public class CalculateService {

    public CalculateResponse calculate(CalculateRequest request) {

        int total = 0;

        // 通常硬貨
        total += getValue(request.getcoins_1()) * 1;
        total += getValue(request.getcoins_5()) * 5;
        total += getValue(request.getcoins_10()) * 10;
        total += getValue(request.getcoins_50()) * 50;
        total += getValue(request.getcoins_100()) * 100;
        total += getValue(request.getcoins_500()) * 500;

        // 棒金（1本＝50枚）
        total += getValue(request.getcoin_rolls_1()) * 1 * 50;
        total += getValue(request.getcoin_rolls_5()) * 5 * 50;
        total += getValue(request.getcoin_rolls_10()) * 10 * 50;
        total += getValue(request.getcoin_rolls_50()) * 50 * 50;
        total += getValue(request.getcoin_rolls_100()) * 100 * 50;
        total += getValue(request.getcoin_rolls_500()) * 500 * 50;

        // 紙幣
        total += getValue(request.getBanknotes_1k()) * 1000;
        total += getValue(request.getBanknotes_2k()) * 2000;
        total += getValue(request.getBanknotes_5k()) * 5000;
        total += getValue(request.getBanknotes_10k()) * 10000;

        return new CalculateResponse(total);
    }

    /* 未入力（NUll）の場合は0として扱う */
    private int getValue(Integer value) {
        return  value == null ? 0 : value;
    }
}
