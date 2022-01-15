package com.services.tx.challenge.service;

import com.services.tx.challenge.model.Message;
import com.services.tx.challenge.store.MessageRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessageService {

  private final MessageRepository messageRepository;

  public Message addMessage(Message message) {
    return messageRepository.save(message);
  }

  public List<Message> getAllMessages() {
    return messageRepository.findAllByOrderByCreatedAtAsc();
  }
}
