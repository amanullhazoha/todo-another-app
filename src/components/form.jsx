import React, { Component } from 'react';
import Button from './Button';
import classes from './css/form.module.css';
import Input from './Input';

class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
    };

    componentDidUpdate(prevProps) {
        const { edited } = this.props;
        if (edited === true && prevProps.edited === false) {
            this.stateUp();
        }
    }

    stateUp = () => {
        const { edit } = this.props;
        this.setState({
            firstName: edit.firstName,
            lastName: edit.lastName,
            email: edit.email,
        });
    };

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    error = (value) => {
        if (!value.firstName) {
            return false;
        }
        if (value.firstName.length > 50) {
            return false;
        }
        if (!value.lastName) {
            return false;
        }
        if (value.lastName.length > 50) {
            return false;
        }
        if (!value.email) {
            return false;
        }

        return true;
    };

    handelSubmit = (e) => {
        const { firstName, lastName, email } = this.state;
        const { addEmploye, updateEmploye, edit, edited } = this.props;
        e.preventDefault();
        if (this.error(this.state)) {
            const tod = {
                firstName,
                lastName,
                email,
            };

            this.setState({
                firstName: '',
                lastName: '',
                email: '',
            });

            if (edited) {
                tod.id = edit.id;
                return updateEmploye(tod);
            }
            return addEmploye(this.state);
        }

        return alert('Please provied correct value.');
    };

    render() {
        const { firstName, lastName, email } = this.state;

        return (
            <>
                <h3 className={classes.heading}> Create Todo</h3>
                <form onSubmit={this.handelSubmit}>
                    <Input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={this.handelChange}
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={this.handelChange}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.handelChange}
                    />
                    <div className={classes.submitBtn}>
                        <Button type="submit" text="Submit" />
                    </div>
                </form>
            </>
        );
    }
}

export default Form;
