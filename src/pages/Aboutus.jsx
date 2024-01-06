import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ClickToTop from "../components/ClickToTop";
import Imgteam from "../img/Team-img2.jpg";
import Outmission from "../img/OutMission.jpg";
import WhatSetsUsApart from "../img/WhatSetsUsApart.jpg";
import tungjpg from "../img/Tung.jpg";
import nguyenimg from "../img/Nguyen-img.jpg";
import { useEffect, useState } from "react";

const Aboutus = () => {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [yEmail, setYEmail] = useState();
  const [txtSumbit, setTxtSubmit] = useState();
  const [errorFName, setErrorFName] = useState(false);
  const [errorLName, setErrorLName] = useState(false);
  const [errorYEmail, setErrorYEmail] = useState(false);
  const [errorTxtSubmit, setErrorTxtSubmit] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="aboutus-container">
        <div className="txt-aboutus-header">
          <p> ABOUT</p>
          <p> US</p>
        </div>
        <div className="aboutus-left-group">
          <div className="aboutus-content-group aboutus-odd">
            <div className="txt-aboutus-group ">
              <p className="txt-title-content-aboutus">Who We Are: </p>
              <p style={{ fontSize: 16, fontStyle: "italic" }}>
                We are a dynamic group of Information Technology students
                passionate about simplifying everyday tasks through innovative
                solutions. Our journey began with a shared enthusiasm for
                technology and a vision to make a positive impact on how people
                interact with and utilize digital tools.
              </p>
            </div>
            <div className="aboutus-img-left">
              <img src={Imgteam} alt="WWA img" />
            </div>
          </div>
          <div className="aboutus-content-group">
            <div className="aboutus-img-left">
              <img src={Outmission} alt="WWA img" />
            </div>
            <div className="txt-aboutus-group aboutus-even">
              <p className="txt-title-content-aboutus">Our Mission: </p>
              <p style={{ fontSize: 16, fontStyle: "italic" }}>
                At UnitConverter, our mission is to provide a user-friendly
                platform that facilitates quick and accurate unit conversions.
                We understand the importance of efficiency in today's fast-paced
                world, and our goal is to streamline the process of converting
                various units, making it accessible to everyone.
              </p>
            </div>
          </div>
          <div className="aboutus-content-group aboutus-odd">
            <div className="txt-aboutus-group ">
              <div className="txt-aboutus-group ">
                <p className="txt-title-content-aboutus">What Sets Us Apart:</p>
                <div className="txt-wsua-content-aboutus">
                  <p>Innovation:</p>
                  <p>
                    {"  "}We constantly strive to incorporate the latest
                    technologies and methodologies to enhance the user
                    experience. Our commitment to innovation drives us to stay
                    at the forefront of the ever-evolving tech landscape.
                  </p>
                </div>
                <div className="txt-wsua-content-aboutus">
                  <p>User-Centric Design:</p>
                  <p>
                    {"  "}Our team places a strong emphasis on user-centric
                    design. We believe that technology should be intuitive and
                    user-friendly, ensuring that our platform is accessible to
                    individuals with varying levels of technical expertise.
                  </p>
                </div>
                <div className="txt-wsua-content-aboutus">
                  <p>Collaboration:</p>
                  <p>
                    {"  "}Group04 operates on the principles of collaboration
                    and teamwork. Each member brings a unique set of skills and
                    perspectives, fostering an environment where creativity
                    thrives and solutions flourish.
                  </p>
                </div>
              </div>
            </div>
            <div className="aboutus-img-left">
              <img src={WhatSetsUsApart} alt="WWA img" />
            </div>
          </div>
        </div>
      </div>
      <div className="group-session">
        <div className="aboutus-profile-container">
          <p className="txt-aboutus-head-profile">Meet The Team</p>
          <div className="aboutus-profilegroup">
            <div className="aboutus-profile-txt-group">
              <p className="txt-title-profile-aboutus">Lượng Đức Tùng</p>
              <p className="job-profile-aboutus">
                Project Manager/Lead Developer/UX/UI Designer
              </p>
              <hr className="hr-profile-aboutus" />
              <ul className="li-aboutus">
                <li className="li-aboutus role-profile">
                  Design: HomePage, convertsion pages, aboutus
                </li>
                <li className="li-aboutus role-profile">
                  Developer : Conversion pages, Homepage, Aboutus
                </li>
              </ul>
            </div>
            <div className="aboutus-img-left img-profile ">
              <img className="img-profile" src={tungjpg} alt="" />
            </div>
          </div>
          <div className="aboutus-profilegroup">
            <div className="aboutus-img-left img-profile">
              <img className="img-profile" src={nguyenimg} alt="" />
            </div>
            <div className="aboutus-profile-txt-group">
              <p className="txt-title-profile-aboutus">Lê Khánh Nguyên</p>
              <p className="job-profile-aboutus">Developer/UX/UI Designer</p>
              <hr className="hr-profile-aboutus" />
              <ul className="li-aboutus">
                <li className="li-aboutus role-profile">
                  Design: Article page and page for artiles
                </li>
                <li className="li-aboutus role-profile">
                  Developer : Article page and page for artiles, search
                  component for article
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="aboutus-form-group">
          <div className="txt-aboutus-head-profile">Contact Us</div>
          <div className="aboutus-form">
            <label className="label-form-contactus">First Name: </label>
            <input
              className="aboutus-form-input"
              type="text"
              value={fName}
              placeholder="Enter First Name"
              onChange={(e) => setFName(e.target.value)}
            />
            <div className="error-div-form-aboutus">Error</div>
            <label className="label-form-contactus">Last Name: </label>
            <input
              className="aboutus-form-input"
              type="text"
              value={lName}
              placeholder="Enter Last Name"
              onChange={(e) => setLName(e.target.value)}
            />
            <div className="error-div-form-aboutus">Error</div>
            <label className="label-form-contactus">Your Email: </label>
            <input
              className="aboutus-form-input"
              type="email"
              value={yEmail}
              placeholder="Enter Your Email Address"
              onChange={(e) => setYEmail(e.target.value)}
            />
            <div className="error-div-form-aboutus">Error</div>
            <label className="label-form-contactus">Content: </label>
            <textarea
              value={txtSumbit}
              cols="30"
              rows="10"
              onChange={(e) => setTxtSubmit(e.target.value)}
            ></textarea>
            <div className="error-div-form-aboutus">Error</div>
            <div className="btn-control-aboutus">
              <button className="aboutus-form-btn">Send</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <div className="click-to-top-control">
        <ClickToTop />
      </div>
    </>
  );
};

export default Aboutus;
