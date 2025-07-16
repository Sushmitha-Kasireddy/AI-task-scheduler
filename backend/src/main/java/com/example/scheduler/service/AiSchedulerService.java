package com.example.scheduler.service;

import com.example.scheduler.model.Task;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AiSchedulerService {
    public List<Task> prioritize(List<Task> tasks) {
        return tasks.stream()
                    .sorted((a, b) -> a.getDeadline().compareTo(b.getDeadline()))
                    .collect(Collectors.toList());
    }
}