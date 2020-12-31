package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class HardCodedService {

    private static List<Todo> todos = new ArrayList();
    private static long idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "in28minutes", "Learn to dance", new Date(), false));
        todos.add(new Todo(++idCounter, "in28minutes", "Learn about Microservices", new Date(), false));
        todos.add(new Todo(++idCounter, "in28minutes", "Learn about Angular", new Date(), false));
    }

    public List<Todo> findAll(){
        return todos;
    }

    public Todo save(Todo todo){
        if(todo.getId() == -1){
            todo.setId(++this.idCounter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);
        if (todo == null) return null;
        if(todos.remove(todo)) return todo;
        return null;
    }

    public Todo findById(long id) {
        return todos.stream()
              .filter(todo -> todo.getId()==id)
              .findFirst()
              .orElse(null);

    }
}
