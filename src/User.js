import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import UserDocument from "./UserDocument";

const User = ({ user }) => {
  const { name, phone, username } = user;
  return (
    <div className="user card">
      <div className="username">Username : {username}</div>
      <div className="name">Name : {name}</div>
      <div className="phone">Phone : {phone}</div>

      <PDFDownloadLink
        document={<UserDocument data ={user} />}
        // fileName="userlist.pdf"
        fileName={`${name}_full_details.pdf`}
        className="btn"
      >
        {({ blob, url, loading, error }) => {
          if (loading) {
           
            return "Loading...";
          } else {
            
            return "Download";
          }
        }}
      </PDFDownloadLink>
    </div>
  );
};

export default User;
