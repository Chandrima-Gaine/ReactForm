import React from "react";
import "./App.css";

export default function App() {
  const [state, setState] = React.useState({
    fullName: "",
    emailId: "",
    contactNumber: "",
    ageCategory: "",
    address: "",
    formCopy: true,
    gender: "",
    blood: "",
  });

  function mySubmitHandler() {
    alert("The form is successfully submitted by " + state.fullName);
  }
  
  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
    <div className="app">
      <form>
        <label>
          <div className="mainheading">
          Patient Registration Form
          </div>
        </label>
        <label>
          <div className="heading">Patient's Name</div>
          <input
            type="text"
            name="fullName"
            value={state.fullName}
            onChange={handleChange}
            placeholder="Please enter your fullName..."
          />
        </label>
        <label>
          <div className="heading">Address</div>
          <textarea name="address" value={state.address}
          onChange={handleChange}
          placeholder="Please enter your address..."
          />
        </label>
        <label>
          <div className="heading">Email</div>
          <input
            type="text"
            name="emailId"
            value={state.emailId}
            onChange={handleChange}
            placeholder="Please enter your email..."
          />
        </label>
        <label>
          <div className="heading">Contact Number</div>
          <input
            type="text"
            name="contactNumber"
            value={state.contactNumber}
            onChange={handleChange}
            placeholder="Please enter your mobile number..."
          />
        </label>
        <label>
          <div className="heading">Age category</div>
          <select name="ageCategory " onChange={handleChange} value={state.ageCategory}>
            <option value="select">Select</option>
            <option value="Children">Children: 18+ </option>
            <option value="Adults">Adults: 18+</option>
            <option value="Elderly">Elderly: 65+</option>
          </select>
        </label>
        <div>
          <div className="heading">Gender</div>
          <label>
            Male
            <input
              type="radio"
              name="gender"
              value={state.gender}
              onChange={handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              value={state.gender}
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          <div className="heading">Blood Type</div>
          <select name="blood" onChange={handleChange} value={state.blood}>
            <option value="select">Select</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O+">O+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
          </select>
        </label>
        <label>
          <div className="inputCheckbox">Send a copy of this form by mail</div>
          <input
            type="checkbox"
            name="formCopy"
            checked={state.formCopy}
            onChange={handleChange}
          />
        </label>
        <label>
          <button className="btn btn-default" type="submit" onClick={mySubmitHandler}>
            Submit
          </button>
        </label>
      </form>
    </div>
  );
}