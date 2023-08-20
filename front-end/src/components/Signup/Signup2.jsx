import React, { useState } from 'react'
import './Signup2.css';
import { chevronright } from '../../assets';
import axios from 'axios';
const Signup2 = () => {
    const [text, setText] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    /************************************* */
    const maxWords = 301; // Adjust this according to your desired max word limit

    const handleTextChange = (event) => {
        const newText = event.target.value;
        const words = newText.trim().split(/\s+/);

        if (words.length <= maxWords) {
            setText(newText);
        }
    };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8080/api/auth/register", {
                username: username,
                password: password,
            });
            if (Response)
            alert("user has been signup succ");
        } catch (err) {
            alert(err)

        }
        // axios.post("http://127.0.0.1:8080/api/auth/register", {
        //     "username": "louay",
        //     "password": "123"
        //   })
        //     .then((response) => {
        //         console.log('API Response:', response.data); // Registration successful message
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error)}); // Log the error;
    }
    return (
        <div className="sign-up-enter-your">
            <div className="div-2">
                {/* <NameCrossIconSizeL className="name-cross-icon-size-l" />
        <Icons className="icons-instance" /> */}
                <a href="/signup">
                    <img src={chevronright} alt="chevronright" className="icons-instance" />
                </a>
                <div className="frame-2">
                    <div className="frame-3">
                        <div className="sign-up">SIGN UP</div>
                        <div className="frame-4">
                            <div className="frame-5">
                                {/* <InputField className="design-component-instance-node" state="default" text="Enter your first name" /> */}
                                <div className="text-wrapper-3">First name</div>
                                <input type="text" placeholder="Enter your first name" className="design-component-instance-node" value={username} onChange={(event) => {
                                    setUsername(event.target.value);
                                }} />
                            </div>
                            <div className="frame-5">
                                {/* <InputField className="design-component-instance-node" state="default" text="Enter your last name" /> */}
                                <div className="text-wrapper-3">Last name</div>
                                <input type="text" placeholder="Enter your last name" className="design-component-instance-node" value={password} onChange={(event) => {
                                    setPassword(event.target.value)
                                }} />
                            </div>
                            <div className="frame-5">
                                {/* <SelectFieldWith
                  className="design-component-instance-node"
                  state="default"
                  text="Select your interests for better networking"
                /> */}
                                <div className="text-wrapper-3">Your interests</div>
                                <select className="design-component-instance-node" placeholder="Select your interests for better networking" >
                                    <option value="" disabled selected>
                                        Select your interests for better networking
                                    </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="frame-6">
                                <div className="text-wrapper-3">About yourself (Optional)</div>
                                <textarea
                                    className="design-component-instance-node1"
                                    placeholder="Tell your companions more about yourself and what kind of opportunities you are looking for"

                                    onChange={handleTextChange}
                                    value={formData.about}
                                />
                                <p className="reward"> 0/{maxWords - text.trim().split(/\s+/).length}</p>
                            </div>
                        </div>
                    </div>
                    <a href="/signup/next" onClick={handleSubmit} className="signup"> Sign up </a>
                </div>
            </div>
        </div>
    )
}

export default Signup2