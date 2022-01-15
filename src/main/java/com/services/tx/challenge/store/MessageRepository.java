package com.services.tx.challenge.store;

import com.services.tx.challenge.model.Message;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {

  List<Message> findAllByOrderByCreatedAtAsc();

}
