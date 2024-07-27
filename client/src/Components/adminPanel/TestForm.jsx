import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../api';

const TestForm = ({ test, onSaved }) => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        questions: '',
        duration: '',
        category: '',
        details: '',
    });

    useEffect(() => {
        if (test) {
            setFormData(test);
        } else {
            setFormData({
                id: '',
                title: '',
                questions: '',
                duration: '',
                category: '',
                details: '',
            });
        }
    }, [test]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.id) {
                // Update existing test
                await api.put(`/api/tests/${formData.id}`, formData);
            } else {
                // Create new test
                await api.post('/api/tests', formData);
            }
            console.log('Test saved successfully');
            onSaved();
            setFormData({
                id: '',
                title: '',
                questions: '',
                duration: '',
                category: '',
                details: '',
            });
        } catch (error) {
            console.error('Error saving test:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                type="number"
                name="questions"
                value={formData.questions}
                onChange={handleChange}
                placeholder="Number of Questions"
            />
            <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Duration (minutes)"
            />
            <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
            />
            <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Details"
            />
            <button type="submit">Save Test</button>
        </form>
    );
};

// Define PropTypes
TestForm.propTypes = {
    test: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string.isRequired,
        questions: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        category: PropTypes.string,
        details: PropTypes.string,
    }),
    onSaved: PropTypes.func.isRequired,
};

// Default props
TestForm.defaultProps = {
    test: null,
};

export default TestForm;
