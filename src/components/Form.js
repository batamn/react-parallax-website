import { useState } from "react";
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        toSendEmail: "batamun@gmail.com"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    console.log(formData);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="formContainer">
            <form className="form" onSubmit={handleSubmit}>
                <div className="inputField">
                    <input
                        className="inputControl"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="name" className="inputLabel">
                        Your Name
                    </label>
                </div>
                <div className="inputField">
                    <input
                        className="inputControl"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="email" className="inputLabel">
                        Your Email
                    </label>
                </div>
                <div className="inputField">
                    <textarea
                        className="inputControl"
                        type="text"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <label htmlFor="message" className="inputLabel">
                        Message
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form;