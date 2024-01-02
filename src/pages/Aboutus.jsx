import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ClickToTop from "../components/ClickToTop";
import Imgteam from "../img/Team-img2.jpg";
import Outmission from "../img/OutMission.jpg";
import WhatSetsUsApart from "../img/WhatSetsUsApart.jpg";
import tungjpg from "../img/Tung.jpg";
import nguyenimg from "../img/Nguyen-img.jpg";
const Aboutus = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="aboutus-container">
        <div>
          <p className="txt-aboutus-header"> ABOUT US</p>
        </div>
        <div className="aboutus-left-group">
          <div className="aboutus-content-group aboutus-odd">
            <div className="txt-aboutus-group ">
              <p className="txt-title-content-aboutus">Who We Are: </p>
              <p>
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
              <p>
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
                <p className="txt-title-content-aboutus">
                  What Sets Us Apart:{" "}
                </p>

                <p style={{ marginBottom: 10 }}>
                  <span className="txt-aboutus-strong">Innovation: </span>
                  We constantly strive to incorporate the latest technologies
                  and methodologies to enhance the user experience. Our
                  commitment to innovation drives us to stay at the forefront of
                  the ever-evolving tech landscape.
                </p>

                <p style={{ marginBottom: 10 }}>
                  <span className="txt-aboutus-strong">
                    User-Centric Design:{" "}
                  </span>
                  Our team places a strong emphasis on user-centric design. We
                  believe that technology should be intuitive and user-friendly,
                  ensuring that our platform is accessible to individuals with
                  varying levels of technical expertise.
                </p>

                <p style={{ marginBottom: 10 }}>
                  <span className="txt-aboutus-strong">Collaboration: </span>
                  Group04 operates on the principles of collaboration and
                  teamwork. Each member brings a unique set of skills and
                  perspectives, fostering an environment where creativity
                  thrives and solutions flourish.
                </p>
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
          <p className="txt-aboutus-head-profile">MEET THE TEAM</p>
          <div className="aboutus-profilegroup">
            <div className="aboutus-profile-txt-group">
              <p className="txt-title-profile-aboutus">
                Lượng Đức Tùng - Project Manager/Lead Developer/UX/UI Designer:
              </p>
              <ul className="li-aboutus">
                <li className="li-aboutus">
                  Design: HomePage,ConvertsPage,Aboutus
                </li>
                <li className="li-aboutus">
                  Developer : conversions content, conversion pages, nav,
                  Homepage, Aboutus
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
              <p className="txt-title-profile-aboutus">
                Lê Khánh Nguyên - Developer/UX/UI Designer:
              </p>
              <ul className="li-aboutus">
                <li className="li-aboutus">
                  Design: Artice page and page for artiles
                </li>
                <li className="li-aboutus">
                  Developer : Artice page and page for artiles, search component
                  for article
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="aboutus-form-group">
          <div className="txt-aboutus-head-profile">Contact Us</div>
          <div className="aboutus-form">
            <label>First Name: </label>
            <input
              className="aboutus-form-input"
              type="text"
              name=""
              id=""
              placeholder="Enter First Name"
            />

            <label>Last Name: </label>
            <input
              className="aboutus-form-input"
              type="text"
              name=""
              id=""
              placeholder="Enter Last Name"
            />

            <label>Your Email: </label>
            <input
              className="aboutus-form-input"
              type="email"
              name="txtemail"
              id="txtemail"
              placeholder="Enter Your Email Address"
            />

            <label>Content: </label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
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
