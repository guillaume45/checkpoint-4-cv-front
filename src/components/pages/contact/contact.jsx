import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { confirmAlert } from "react-confirm-alert";
import axios from "axios";
import { FETCH } from "../../../Fetch";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faFacebookF,faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const { register, formState } = useForm();
  const { isSubmitSuccessful } = formState;

  const [message,setMessage]=useState();

  const handleChange = (event) => {
    setFormAll({ ...formAll, [event.target.name]: event.target.value });
  };

  const [formAll, setFormAll] = useState({
    firstname_contact: "",
    lastname_contact: "",
    mail_contact: "",
    mobile_contact: "",
    objet_contact: "",
    message_contact: "",
    isNew: 1,
  });

  

  const postForm = () => {

   var err="";

    axios.post(`${FETCH}/contacts`, formAll).catch(function (error) {
      err=error;
      console.log(error);
    });
    console.log(err);
    if(!err){
      setMessage("Votre message à bien été envoyé");
    }
    else{
      setMessage("Un problème est survenu, veuillez réessayer");
    }
    };
  


  return (
    <section className="contact">
      <h1 className="aboutPage-title">Contact :</h1>
            <div className="contact-content">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                postForm();
              }}
            >
              <div>                
                <label>Nom *</label>
                <input
                  required
                  className="lastName"
                  type="text"
                  placeholder="Nom *"
                  name="lastname_contact"
                  ref={register({ required: true, min: 1, maxLength: 50 })}
                  onChange={handleChange}
                />
                <label>Prénom *</label>
                <input
                  required
                  className="firstName"
                  type="text"
                  placeholder="Prénom *"
                  name="firstname_contact"
                  ref={register({ required: true, maxLength: 50 })}
                  onChange={handleChange}
                />
                <label>Téléphone *</label>
                <input
                  className="mobile"
                  type="tel"
                  placeholder="Téléphone *"
                  name="mobile_contact"
                  ref={register({ required: true })}
                  onChange={handleChange}
                />
                <label>Email *</label>
                <input
                  required
                  className="mail"
                  type="email"
                  placeholder="Email *"
                  name="mail_contact"
                  ref={register}
                  onChange={handleChange}
                />
                <label>Objet</label>
                <input
                  className="objet"
                  type="text"
                  placeholder="Objet de votre message"
                  name="objet_contact"
                  ref={register({ maxLength: 150 })}
                  onChange={handleChange}
                />
                <label>Message *</label>
                <textarea
                  required
                  className="Votre message"
                  placeholder="Saisir votre message"
                  name="message_contact"
                  ref={register({ required: true, maxLength: 7000 })}
                  onChange={handleChange}
                />
                <p className="obligatory">* Champs obligatoire.</p>
                <input type="submit" className="btn"/>
              </div>
              {message && (
                <span className="text-success">
                  <small className="p-3">
                    {message}
                  </small>
                </span>
              )}
            </form>
      <div className="rs-content"> 
        <p>Retrouvez moi sur les réseaux sociaux !</p>
        <ul className="rs">
            <li><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="#" target="_blank"><FontAwesomeIcon icon={faGithubAlt} /></a></li>
            <li><a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>

        </ul>
      </div>
            </div>
        </section>
  );
};

export default Contact;

