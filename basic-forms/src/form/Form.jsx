import { useLayoutEffect, useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [bio, setBio] = useState("");
  const [emailNotifications, setEmailNotifications] = useState("un-checked");
  const [errors, setErrors] = useState([]);

  function validate() {
    const errorMessages = [];
    if (name.length === 0) {
      errorMessages.push("Name required");
    }
    if (email.length === 0) {
      errorMessages.push("Email required");
    }
    if (phoneNumber.length < 10) {
      errorMessages.push("Phone number invalid");
    }
    if (phoneType.length === 0) {
      errorMessages.push("Phone type required");
    }
    if (bio.length === 0) {
      errorMessages.push("Bio required");
    }
    return errorMessages;
  }

  function handleChange(field) {
    return (e) => {
      switch (field) {
        case "name":
          setName(e.target.value);
          break;
        case "email":
          setEmail(e.target.value);
          break;
        case "phoneNumber":
          setPhoneNumber(e.target.value);
          break;
        case "phoneType":
          setPhoneType(e.target.value);
          break;
        case "bio":
          setBio(e.target.value);
          break;
        case "emailNotifications":
          setEmailNotifications(e.target.value);
          break;
      }
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    let errors = validate();
    setErrors(errors);

    if (errors.length === 0) {
      console.log("successfull submission");
      setErrors([]);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setPhoneType("");
      setBio("");
      setEmailNotifications("un-checked");
    }
  }

  return (
    <>
      {errors && (
        <ul>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      )}
      <form action="">
        <input type="text" placeholder="name" onChange={handleChange("name")} />
        <br />
        <input
          type="text"
          placeholder="email"
          onChange={handleChange("email")}
        />
        <br />
        <input
          type="integer"
          placeholder="phone number"
          onChange={handleChange("phoneNumber")}
        />
        <br />
        <input
          type="text"
          placeholder="phone type"
          onChange={handleChange("phoneType")}
        />
        <br />
        <input type="text" placeholder="bio" onChange={handleChange("bio")} />
        <br />
        <label>
          Yes
          <input
            type="radio"
            placeholder="email"
            name="emailNotifications"
            onChange={handleChange("emailNotifications")}
          />
        </label>
        <label>
          No
          <input
            type="radio"
            placeholder="email"
            name="emailNotifications"
            onChange={handleChange("emailNotifications")}
          />
        </label>
        <button type="sumbit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
