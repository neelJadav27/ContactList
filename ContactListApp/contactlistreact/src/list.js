import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const [contactList, setcontactList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = async () => {
    try {
      let res = await fetch("http://localhost:3004/getList", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      let result = await res.json();
      console.log("there");
      setcontactList(result.data);
      console.log(result.data);
    } catch (e) {
      console.log("adsadasdsdasdasdasd ", e);
    }
  };

  return (
    <div>
      <div>
        <Link to={{ pathname: "/addContact" }}>
          <h1>Add Contact</h1>
        </Link>
        {contactList.map(function (item) {
          return (
            <Link
              key={item.FirstName}
              to={{
                pathname: `/contactDetails/${item.FirstName}`,
              }}
              state={{ data: item }}
            >
              <h1 key={item.FirstName}>
                {item.FirstName} {item.LastName}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default List;
