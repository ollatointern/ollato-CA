import React, { useState } from 'react';
import img from '../assets/SideSection.png';
import './register.css';

const Register = () => {

    // State variables for form fields
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [selectedClass, setSelectedClass] = useState(''); // IX, X, XI, XII
    const [selectedStream, setSelectedStream] = useState(''); // Common, Commerce, Science, Arts
    const [board, setBoard] = useState(''); // CBSE, ICSE, State Board
    const [schoolName, setSchoolName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form validation and submission logic here
        console.log('Form submitted:', {
            fullName,
            gender,
            mobileNo,
            email,
            selectedClass,
            selectedStream,
            board,
            schoolName,
            password,
        });
    };

    // Handle form reset
    const handleReset = () => {
        setFullName('');
        setGender('');
        setMobileNo('');
        setEmail('');
        setSelectedClass('');
        setSelectedStream('');
        setBoard('');
        setSchoolName('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className='parent-container'>
            <div className='image-container'>
                <img className='image' src={img} alt="" />
            </div>

            <div className='reg-container'>
                <h3>Register</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Full Name:
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Gender:
                        <input
                            type="text"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Mobile No:
                        <input
                            type="text"
                            value={mobileNo}
                            onChange={(e) => setMobileNo(e.target.value)}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Email ID:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Class:
                        <select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            required
                        >
                            <option value="">Select Class</option>
                            <option value="IX">IX</option>
                            <option value="X">X</option>
                            <option value="XI">XI</option>
                            <option value="XII">XII</option>
                        </select>
                    </label>
                    <br />

                    <label>
                        Stream:
                        <select
                            value={selectedStream}
                            onChange={(e) => setSelectedStream(e.target.value)}
                            required
                        >
                            <option value="">Select Stream</option>
                            {selectedClass === 'IX' || selectedClass === 'X' ? (
                                <option value="Common">Common (9th to 10th)</option>
                            ) : (
                                <>
                                    <option value="Commerce">Commerce</option>
                                    <option value="Science">Science</option>
                                    <option value="Arts">Arts</option>
                                </>
                            )}
                        </select>
                    </label>
                    <br />

                    <label>
                        Board of the School:
                        <select
                            value={board}
                            onChange={(e) => setBoard(e.target.value)}
                            required
                        >
                            <option value="">Select Board</option>
                            <option value="CBSE">CBSE</option>
                            <option value="ICSE">ICSE</option>
                            <option value="State Board">State Board</option>
                        </select>
                    </label>
                    <br />

                    <label>
                        School Name:
                        <input
                            type="text"
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Create a Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Confirm Password:
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </label>
                    <br />

                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                    <a href="/terms">Terms and Conditions</a>
                </form>
            </div>
        </div>
    )
}

export default Register
