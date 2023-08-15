import BreadCumb from "../components/BreadCrumb"
import Meta from "../components/Meta";
import { AiOutlineHome } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaInfo } from 'react-icons/fa';
import Container from "../components/Container";

const Contact = () => {
  return <>

    <Meta title={"Contact"} />
    <BreadCumb title="Contact" />
    <Container class1="contact-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6986.754673057261!2d76.99198359231352!3d28.887133143262584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da5e51463d4c9%3A0xe5a485e2ac7c3d4a!2sMandaura%2C%20Haryana%20131103%2C%20India!5e0!3m2!1sen!2sbr!4v1689738760067!5m2!1sen!2sbr"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="col-12 mt-5">
          <div className="contact-inner-wrapper d-flex justify-content-between">
            <div>
              <h3 className="contact-title mb-4">Contact</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div>
                  <input type="email" className="form-control" placeholder="Email *" />
                </div>
                <div>
                  <input type="tel" className="form-control" placeholder="Phone number" />
                </div>
                <div>
                  <textarea name=""
                    id=""
                    className="w-100 form-control"
                    cols="30"
                    rows="4"
                    placeholder="Comments">
                  </textarea>
                </div>
                <div>
                  <button className="button border-0">Send</button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="contact-title mb-4">Get In Touch With Us</h3>
              <div>
                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineHome className="fs-5" />
                    <address className="mb-0">33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</address>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <FaPhoneAlt className="fs-5" />
                    <a href="tel:+91 7723-4608">(+91)7-723-4608</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <HiMail className="fs-5" />
                    <a href="mailto:demo@company.com">demo@company.com</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <FaInfo className="fs-5" />
                    <p className="mb-0">Monday – Friday 10 AM – 8 PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </>
}

export default Contact