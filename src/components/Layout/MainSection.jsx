import React, { Component } from 'react';
import TODO from '../../data';
import Container from '../container';
import Control from '../Control';
import classes from '../css/mainSection.module.css';
import Form from '../form';
import Model from '../Model';
import PageVeiw from '../pageVeiw';
import Veiw from '../veiw';

class MainSection extends Component {
    state = {
        todos: [],
        veiwTodo: null,
        isOpen: false,
        edit: {
            edited: false,
            todo: null,
        },
    };

    componentDidMount() {
        this.setState({
            todos: TODO,
        });
    }

    handelUpdate = (id) => {
        const { todos } = this.state;
        const updateTodo = todos.filter((todo) => todo.id === id);
        const [update] = updateTodo;
        this.setState({
            edit: {
                edited: true,
                todo: update,
            },
        });

        this.toggler();
    };

    handelDelete = (id) => {
        const { todos } = this.state;
        const deleteTodo = todos.filter((todo) => todo.id !== id);
        this.setState({
            todos: deleteTodo,
        });
        this.closeVeiwPage();
    };

    handelVeiw = (id) => {
        const { todos } = this.state;
        const veiwTodo = todos.filter((todo) => todo.id === id);
        this.setState({
            veiwTodo,
        });
    };

    toggler = () => {
        const { isOpen } = this.state;

        this.setState({
            isOpen: !isOpen,
        });
    };

    closeVeiwPage = () => {
        this.setState({
            veiwTodo: null,
        });
    };

    addEmploye = (vlaue) => {
        const { todos } = this.state;
        if (todos.find((todo) => todo.email === vlaue.email)) {
            alert('Already an Account');
        } else {
            const add = vlaue;
            add.id = new Date().toLocaleTimeString();
            const stateUpdate = [add, ...todos];
            this.setState({
                todos: stateUpdate,
            });

            this.toggler();
        }
    };

    updateEmploye = (value) => {
        const { todos } = this.state;
        const todo = [...todos];
        const update = todo.find((t) => value.id === t.id);
        update.firstName = value.firstName;
        update.lastName = value.lastName;
        update.email = value.email;

        this.setState({
            todos: todo,
            edit: {
                edited: false,
                todo: null,
            },
        });

        this.toggler();
    };

    render() {
        const { todos, veiwTodo, isOpen, edit } = this.state;
        const { edited, todo } = edit;

        return (
            <main id={classes.mainSection}>
                <Container>
                    <Control toggler={this.toggler} />
                    <Veiw
                        todos={todos}
                        handelUpdate={this.handelUpdate}
                        handelDelete={this.handelDelete}
                        handelVeiw={this.handelVeiw}
                    />
                </Container>
                <Model isOpen={isOpen} toggler={this.toggler}>
                    {edited ? (
                        <Form updateEmploye={this.updateEmploye} edit={todo} edited={edited} />
                    ) : (
                        <Form addEmploye={this.addEmploye} edited={edited} />
                    )}
                </Model>

                <Model isOpen={veiwTodo} toggler={this.closeVeiwPage}>
                    {veiwTodo && <PageVeiw veiwTodo={veiwTodo} handelDelete={this.handelDelete} />}
                </Model>
            </main>
        );
    }
}

export default MainSection;
