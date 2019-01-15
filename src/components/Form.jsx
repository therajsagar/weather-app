import React from 'react';

class Form extends React.Component{
    render(){
        return (
            <div className='form'>
            <form onSubmit={this.props.getData}>
                <input type='text' name='city' placeholder='city' autoComplete='off'/>
                <button>GO</button>
            </form>
            </div>
                )
    }
}

export default Form;