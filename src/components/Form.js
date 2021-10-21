import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */

            this.state = {name: " ", URL: " "};

            this.handleChange = this.handleChange.bind(this);
            this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */

            if (event.target.id  === "name") {
                this.setState({name: event.target.value });

            } else{
                this.setState({URL: event.target.value});
            }
    }

   handleSubmit = (event) => {
        // to prevent page reload on form submit

       let newLink = {name: this.state.name, URL: this.state.URL}
       this.props.newSubmit(newLink)
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */




    }

    render() {

        return(
            <form> onFormSubmit={this.handleSubmit}
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                
                <><label>Name</label><input type="text" onInput={(event) => this.handleChange(event)} /><label>URL</label><input type="text" onInput={(event) => this.handleChange(event)} /><button type="submitForm" onClick={this.onFormSubmit} /></>
                
            </form>
        );
    
    }
}

export default Form;
