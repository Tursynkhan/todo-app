package repository

import (
	"github.com/jmoiron/sqlx"
	"github.com/tursynkhan/todo-app"
)

type Authorization interface {
	CreateUser(user todo.User) (int, error)
	GetUser(username,password string)(todo.User,error)
}
type TodoList interface {
	Create(userId int,list todo.Todolist)(int,error)
	GetAll(userId int)([]todo.Todolist,error)
	GetById(userId,listId int)(todo.Todolist,error)
	Delete(userId,listId int)error
	Update(userId, listId int,input todo.UpdateLisInput)error
}
type TodoItem interface {
	Create(listId int,item todo.TodoItem)(int,error)
	GetAll(userId,listId int)([]todo.TodoItem,error)
	GetById(userId, itemId int) (todo.TodoItem, error)
	Delete(userId, itemId int) error
	Update(userId, itemId int, input todo.UpdateItemInput) error
}

type Repository struct {
	Authorization
	TodoList
	TodoItem
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
		TodoList: NewTodoListPostgres(db),
		TodoItem: NewTodoItemPostgres(db),
	}
}
