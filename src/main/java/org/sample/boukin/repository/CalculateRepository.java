package org.sample.boukin.repository;

import org.sample.boukin.entity.CalculateEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CalculateRepository
        extends JpaRepository<CalculateEntity, Long> {

}