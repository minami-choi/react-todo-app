import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {

        // todos: todo객체가 있는 배열
        // onToggle: 체크박스 체크켜고 끄는 함수
        // onRemove: 아이템삭제함수
        const { todos, onToggle, onRemove, color } = this.props;


        const todoList = todos.map(
            todo => (
                <TodoItem
                    id={todo.get('id')}
                    key={todo.get('id')}
                    text={todo.get('text')}
                    done={todo.get('done')}
                    // onToggle={onToggle}
                    // onRemove ={onRemove}
                    onToggle={() => onToggle(todo.get('id'))}
                    onRemove={() => onRemove(todo.get('id'))}
                    key={todo.get('id')}
                />
            )
            // ({id, text, checked}) => (
            //     <TodoItem
            //         id={id}
            //         text={text}
            //         checked= {checked}
            //         onToggle={onToggle}
            //         onRemove ={onRemove}
            //         key={id}
            //         // color={color}
            //     />
            // )
        );

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;