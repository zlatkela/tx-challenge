package com.services.tx.challenge.mapper;

import com.services.tx.challenge.dto.MessageDTO;
import com.services.tx.challenge.model.Message;
import org.mapstruct.Mapper;

@Mapper
public interface ResourceMapper {

  Message mapFromDTO(MessageDTO messageDTO);

  MessageDTO mapToDTO(Message message);
}
