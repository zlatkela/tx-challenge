package com.services.tx.challenge.controller;

import com.services.tx.challenge.dto.MessageDTO;
import com.services.tx.challenge.mapper.ResourceMapper;
import com.services.tx.challenge.service.MessageService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/messages")
public class MessageController {

  private final MessageService messageService;
  private final ResourceMapper resourceMapper;

  @GetMapping
  public List<MessageDTO> getMessages() {
    return resourceMapper.mapToDTO(messageService.getAllMessages());
  }

  @PostMapping
  public MessageDTO addMessage(@RequestBody MessageDTO messageDTO) {
    return resourceMapper
        .mapToDTO(messageService.addMessage(resourceMapper.mapFromDTO(messageDTO)));
  }
}
