package com.services.tx.challenge.mapper;

import com.services.tx.challenge.dto.MessageDTO;
import com.services.tx.challenge.model.Message;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.WARN)
public interface ResourceMapper {

  Message mapFromDTO(MessageDTO messageDTO);

  MessageDTO mapToDTO(Message message);

  List<MessageDTO> mapToDTO(List<Message> messages);
}
