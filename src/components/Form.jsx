import React from 'react';

class Form extends React.Component{
    render(){
        return (
            <form onSubmit={this.props.getData}>
                <input type='text' name='city' placeholder='city' />
                <button>Get Data</button>
            </form>
                )
    }
}

export default Form;