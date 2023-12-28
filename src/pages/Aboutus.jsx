import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ClickToTop from "../components/ClickToTop";
const Aboutus = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>Đây là nơi ghi nôi dung</div>
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
