import React, {useRef, useState }from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = { 
    onSubmit: null,
};

function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        const eValue = e.target.value;
        setSearchTerm(eValue);
        if (!onSubmit) return;

        // Set - 100 - clear, Set - 300 -Submit
        // Set - 300 -submit
        // Moi lan nhap se doi 3s, nhap tiep thi clear timeout va doi lai 3s, sau3s hoac enter thi submit.
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: eValue
            };
            onSubmit(formValues)
        }, 1000)
    }

    return (
        <form>
            <input type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>    
    );
}

export default PostFiltersForm;
