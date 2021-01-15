package com.abcode.registerclient.dto;

import com.abcode.registerclient.entities.Client;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.Instant;

public class ClientDTO implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String cpf;
    private Double income;
    private Instant birthDate;
    private Integer children;

    public ClientDTO(){

    }

    public ClientDTO(Client obj){

    }
}
