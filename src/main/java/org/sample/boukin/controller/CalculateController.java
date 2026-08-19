package org.sample.boukin.controller;

import jakarta.validation.Valid;
import org.sample.boukin.dto.CalculateRequest;
import org.sample.boukin.dto.CalculateResponse;
import org.sample.boukin.service.CalculateService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CalculateController {

    private final CalculateService calculateService;

    public CalculateController(CalculateService calculateService) {
        this.calculateService = calculateService;
    }

    @PostMapping("/calculate")
    public CalculateResponse calculate(
            @Valid @RequestBody CalculateRequest request) {

        return calculateService.calculate(request);
    }
}