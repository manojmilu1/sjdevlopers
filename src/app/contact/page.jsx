import Image from "next/image";
import RingerVolume from "../../../public/images/RingerVolume.png";
import ChatMessage from "../../../public/images/ChatMessage.png";
import location from "../../../public/images/location.png";
import image from "../../../public/images/image.png";
export default function Contact() {
  return (
    <>
      <main className="container container-fluid">
        <h1 className="py-5">Contact Us</h1>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6  m-auto p-auto">
            <h2 className="text-center">Send a Message</h2>
            <p className="text-center">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu lorem
              ipsum lorem ipsum lorem ipsum
            </p>
            <form>
              <div className="row g-2">
                <div className="col-6">
                  <div className="p-3">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control border-dark rounded-0"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3">
                    <input
                      type="number"
                      placeholder="Phone no."
                      className="form-control border-dark rounded-0"
                    />
                  </div>
                </div>
              </div>

              <div className="row g-2">
                <div className="col-6">
                  <div className="p-3">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control border-dark rounded-0"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 ">
                    <select className="form-select border-dark rounded-0">
                      <option value="">Interested in</option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row g-5">
                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                  <div className="p-3 d-flexs">
                    <textarea
                      placeholder="Message"
                      className="form-control border-dark rounded-0 py-6"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2 position-relative ">
                  <div className="p-3 position-absolute bottom-0 end-0">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-dark rounded-pill"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6  mx-auto py-5">
            <Image src={image} alt="image" className="header-img" />
          </div>
        </div>
        <section style={{ backgroundColor: '#D9D9D9' }} className="mx-auto py-5">
          <div className="text-center">
          <h2>More Ways To Connect</h2>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu lorem 
            ipsum lorem ipsum lorem ipsum</p>
          </div>
          <div className="d-flex justify-content-around" style={{ paddingTop: '2.5rem' }}>
            <div>
              <Image src={RingerVolume} alt="RingerVolume" className="icons" />
              <div className="text-center pt-2">+91 6986969</div>
            </div>
            <div>
              <Image src={ChatMessage} alt="livechat" className="icons" />
              <div className="text-center pt-2">Live chat</div>
            </div>
            <div>
              <Image src={location} alt="your location" className="icons" />
              <div className="text-center pt-2">your location</div>
            </div>
          </div>
        </section>
        <section>
          <div className=" col-lg-12 col-md-12 col-sm-12 col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.196356743821!2d85.82827517595804!3d20.3747923099171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d464f2a4a3%3A0x1eca19fd1ea4946d!2sSJ%20Developers%20%26%20Housing%20Pvt.Limited!5e0!3m2!1sen!2sin!4v1719388502224!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="my-5"
            ></iframe>
          </div>
        </section>
        <section>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 mx-auto">
              <p>Frequently Asked Questions</p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 mx-auto">
              <h2>Lorem ipsum doremant si ?</h2>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu lorem
                ipsum lorem ipsum lorem ipsum
              </p>
              <ul>
                <li>Lorem ipsum doremant si <span>&#9679;</span></li>
                <li>Lorem ipsum doremant si <span>&#9679;</span></li>
                <li>Lorem ipsum doremant si <span>&#9679;</span></li>
              </ul>
            </div>
          </div>
        </section>
        <footer className="mx-auto py-5 bg-dark text-white">
          <div className="d-flex justify-content-around">
              <div>Join Us Today 
              For Your Dream Home</div>
              <div>
                <h5>Address</h5>
                <p>Your address xyz street,  city,
                pin no.</p>
              </div>
              <div>
                <div>
                    <h5>Phone no.</h5>
                    <p>+91 7863489438</p>
                    <p>+91 7863489438</p>
                </div>
                <div>
                <h5>Email</h5>
                    <p>Youremail@gmail.com</p>
                </div>
              </div>
          </div>
        </footer>
      </main>
    </>
  );
}
