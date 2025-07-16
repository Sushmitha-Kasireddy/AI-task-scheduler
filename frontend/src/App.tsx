import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Task {
  id?: number;
  title: string;
  description: string;
  deadline: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:8080/api/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post("http://localhost:8080/api/tasks", { title, description, deadline });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">AI Task Scheduler</h1>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border p-1 mr-2" />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="border p-1 mr-2" />
      <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} className="border p-1 mr-2" />
      <button onClick={addTask} className="bg-green-500 text-white px-2 py-1">Add Task</button>
      <ul className="mt-4">
        {tasks.map((t, i) => (
          <li key={i} className="mb-1">{t.title} - {t.deadline}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;