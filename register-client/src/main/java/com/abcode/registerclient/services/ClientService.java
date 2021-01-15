package com.abcode.registerclient.services;

import com.abcode.registerclient.dto.ClientDTO;
import com.abcode.registerclient.repositories.ClientRepository;
import com.abcode.registerclient.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ClientService {

    @Autowired
    private ClientRepository repository;

    @Transactional(readOnly = true)
    public Page<ClientDTO> findAllPaged(PageRequest pageRequest) {
        var listPageable = repository.findAll(pageRequest);
        return listPageable.map(ClientDTO::new);
    }

    @Transactional(readOnly = true)
    public ClientDTO findById(Long id) {
        var entityClient = repository.findById(id);
        return new ClientDTO(entityClient.orElseThrow(() -> new ResourceNotFoundException("Entity not found")));
    }
}
