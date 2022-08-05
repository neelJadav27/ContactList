import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const contactDetails = () => {
  const info = useLocation();
  //   console.log(info);
  console.log(info.state?.data.FirstName);
  return (
    <div>
      <Link
        to={{
          pathname: "/",
        }}
      >
        <h3>Back</h3>
      </Link>
      <h1>
        Name: {info.state?.data.FirstName} {info.state?.data.LastName}
      </h1>
      <h1>Phone Number: {info.state?.data.PhoneNumber}</h1>
      <h1>Email: {info.state?.data.Email}</h1>
    </div>
  );
  //   return <div key={info.state?.data.FirstName}> {info.state?.data}</div>;
};

export default contactDetails;
