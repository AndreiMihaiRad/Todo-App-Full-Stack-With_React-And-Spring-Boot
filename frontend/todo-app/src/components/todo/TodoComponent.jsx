import React, {Component} from 'react'
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate(values) {
       let errors = {}; 
       if(!values.description) {
           errors.description =  'Enter a description';
       }else if (values.description.lenght < 5 ) {
           errors.description = 'Enter atleast 5 characters in description';
       }

       return errors;
    }

    componentDidMount() {

        if (this.state.id === -1) {
            return
        }

         let username = AuthenticationService.getLoggedInUser();
         TodoDataService.retrieveTodo(username, this.state.id)
         .then(
             response => this.setState({
                 description: response.data.description,
                 targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
             })
         )

    }

    onSubmit(values){
        let username = AuthenticationService.getLoggedInUser();

        let todo =  {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            TodoDataService.createTodo(username, this.state.id, todo)
                .then(() => this.props.history.push(`/todos`));
        }


        TodoDataService.updateTodo(username, this.state.id, todo)
        .then(
            () => this.props.history.push(`/todos`)
        )
    }

    render() {
        let description = this.state.description;
        let targetDate = this.state.targetDate;
        return (
                <div>
                    <h1>Todo</h1>
                    <div className="container">
                        <Formik
                            initialValues={{
                                description: description,
                                targetDate: targetDate
                            }}
                            onSubmit={this.onSubmit}
                            validate={this.validate}
                            validateOnChange={false}
                            validateOnBlur={false}
                            enableReinitialize={true}
                        >
                            {
                                (props) => (
                                    <Form>
                                        <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                        <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                                        <fieldset className="form-group">
                                            <label>description</label>   
                                            <Field className="form-control" type="text" name="description"></Field> 
                                        </fieldset> 
                                        <fieldset className="form-group">
                                            <label>Target Date</label>   
                                            <Field className="form-control" type="date" name="targetDate"></Field> 
                                        </fieldset> 
                                        <button className="btn btn-success" type="submit">Save</button>
                                    </Form> 
                                )
                            }
                        </Formik>
                    </div>
                </div>
        )
    }
}

export default TodoComponent