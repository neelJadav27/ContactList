import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  //const navigate = useNavigate();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const saveDetails = async (e) => {
    e.preventDefault();
    try {
      console.log("enter");
      let res = await fetch("http://localhost:3004/addContact", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //   FirstName,
          //   LastName,
          //   Email,
          //   PhoneNumber,
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          PhoneNumber: PhoneNumber,
        }),
      });
      let result = await res.json();
      alert(result.msg);
      //navigate("/");
    } catch (e) {
      console.log(e);
      alert("Retry");
    }
  };

  return (
    <div>
      <h1>Add Contact Details</h1>
      <form onSubmit={(e) => saveDetails(e)}>
        <h3>FirstName: </h3>
        <input
          onChange={(text) => {
            setFirstName(text);
          }}
        />
        <h3>LastName: </h3>
        <input
          onChange={(text) => {
            setLastName(text);
          }}
        />
        <h3>Email: </h3>
        <input
          onChange={(text) => {
            setEmail(text);
          }}
        />
        <h3>PhoneNumber: </h3>
        <input
          onChange={(text) => {
            setPhoneNumber(text);
          }}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddContact;
