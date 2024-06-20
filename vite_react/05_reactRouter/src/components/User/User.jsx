import React from "react";

//for get data from url
import { useParams } from "react-router-dom";

export default function User() {
  const { userid } = useParams();
  return <div>User:{userid}</div>;
}
