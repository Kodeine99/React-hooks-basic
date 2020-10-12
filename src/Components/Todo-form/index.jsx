import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func
};

function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');
    
    function onhandleChange(e) {
        // console.log(e.target.value);
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        // Prevent reloading browser
        e.preventDefault();

        if (!onSubmit) return;
        const formValues = {
            title: value,
        };
        onSubmit(formValues);

        //reset form values
        setValue('');
    }
        
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={onhandleChange} />
        </form>    
    );
}

export default TodoForm;
