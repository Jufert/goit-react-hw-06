import React from "react";
import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div className={css.userData}>
        <div className={css.userName}>
          <FaUser className={css.iconUser} />
          <p>{contact.name}</p>
        </div>
        <div className={css.userPhone}>
          <FaPhone className={css.iconPhone} />
          <p>{contact.number}</p>
        </div>
      </div>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default Contact;
