package com.example.scheduler.controller;

import com.example.scheduler.model.Task;
import com.example.scheduler.service.AiSchedulerService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
public class TaskController {
    private final List<Task> taskList = new ArrayList<>();
    private final AiSchedulerService schedulerService;

    public TaskController(AiSchedulerService schedulerService) {
        this.schedulerService = schedulerService;
    }

    @PostMapping
    public Task addTask(@RequestBody Task task) {
        taskList.add(task);
        return task;
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return schedulerService.prioritize(taskList);
    }
}