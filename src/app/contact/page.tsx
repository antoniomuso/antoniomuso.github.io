import ContactData from "@/components/Contact/ContactData";
import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            <ContactData
              contactKey="Email"
              faClassIcon="fa-envelope"
              contactValue="antoniomusolino007@gmail.com"
              showedValue="ant*********07@gmail.com"
            />
            <ContactData
              contactKey="Linkedin"
              faClassIcon="fa-linkedin"
              contactValue="https://www.linkedin.com/in/antonio-musolino"
              showedValue="antonio-musolino"
            />
            <ContactData
              contactKey="Instagram"
              faClassIcon="fa-instagram"
              contactValue="https://www.instagram.com/totone_mu"
              showedValue="totone_mu"
            />
            <ContactData
              contactKey="Facebook"
              faClassIcon="fa-facebook"
              contactValue="https://www.facebook.com/antonio.k.musolino"
              showedValue="antonio.k.musolino"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
