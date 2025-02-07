import "./styles.css";
import { useState } from "react";

const intialState = {
  firstname: "",
  lastname: "",
  email: "",
  contact: "",
  gender: "",
};

export default function Form() {
  const [obj, setObj] = useState(intialState);

  const handleChange = (e) => {
    setObj((prevstate) => ({ ...prevstate, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div>
        <form className="form-container">
          <div>
            <label>First name*</label>
            <input
              type="text"
              name="firstname"
              value={obj.firstname}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <label>Last name*</label>
            <input
              type="text"
              name="lastname"
              value={obj.lastname}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <label>Enter email*</label>
            <input
              type="email"
              name="email"
              value={obj.email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <label>Contact*</label>
            <input
              type="text"
              inputMode="numeric"
              name="contact"
              value={obj.contact}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <label name="gender">Gender*</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={(e) => handleChange(e)}
            />
            <label for="male">Male</label>

            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={(e) => handleChange(e)}
            />
            <label for="female">Female</label>

            <input
              type="radio"
              id="others"
              name="gender"
              value="others"
              onChange={(e) => handleChange(e)}
            />
            <label for="others">Others</label>
          </div>
          <button type="submit">Submit</button>
        </form>

        <p> form output</p>
        <p style={{ display: "flex", color: "red", "flex-wrap": "wrap" }}>
          {JSON.stringify(obj)}
        </p>
      </div>
    </>
  );
}
