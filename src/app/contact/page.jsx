import Image from "next/image";
import phone from "../../../public/images/phone.png";
import livechat from "../../../public/images/livechat.png";
import location from "../../../public/images/location.png";
import image from "../../../public/images/image.png";
export default function Contact() {
  return (
    <>
      <main className="container">
        <h1 className="py-5">Contact Us</h1>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6  mx-auto py-5">
            <h2 className="text-center">Send a Message</h2>
            <p className="text-center">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu lorem
              ipsum lorem ipsum lorem ipsum
            </p>
            <form>
              <div class="row g-2">
                <div class="col-6">
                  <div class="p-3">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control border-dark rounded-0"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-3">
                    <input
                      type="number"
                      placeholder="Phone no."
                      className="form-control border-dark rounded-0"
                    />
                  </div>
                </div>
              </div>

              <div class="row g-2">
                <div class="col-6">
                  <div class="p-3">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control border-dark rounded-0"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-3 ">
                    <select className="form-select border-dark rounded-0">
                      <option value="">Interested in</option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row g-5">
                <div class="col-lg-8 col-md-8 col-sm-8 col-8">
                  <div class="p-3 d-flexs">
                    <textarea
                      placeholder="Message"
                      class="form-control border-dark rounded-0"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-2 position-relative ">
                  <div class="p-3 position-absolute bottom-0 end-0">
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
            <Image src={image} alt="image" className="img-fluid" />
          </div>
        </div>
        <section className="mx-auto py-5">
          <h2 className="text-center">More Ways To Connect</h2>
          <p className="text-center">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu lorem
            ipsum lorem ipsum lorem ipsum
          </p>
          <div class="d-flex justify-content-around">
            <div>
              <Image src={phone} alt="phone" className="icons" />
              <div className="text-center">+91 6986969</div>
            </div>
            <div>
              <Image src={livechat} alt="livechat" className="icons" />
              <div className="text-center">Live chat</div>
            </div>
            <div>
              <Image src={location} alt="your location" className="icons" />
              <div className="text-center">your location</div>
            </div>
          </div>
        </section>
        <section>
          <div className=" col-lg-12 col-md-12 col-sm-12 col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.196356743821!2d85.82827517595804!3d20.3747923099171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d464f2a4a3%3A0x1eca19fd1ea4946d!2sSJ%20Developers%20%26%20Housing%20Pvt.Limited!5e0!3m2!1sen!2sin!4v1719388502224!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <footer>
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
                <li>Lorem ipsum doremant si </li>
                <li>Lorem ipsum doremant si </li>
                <li>Lorem ipsum doremant si </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
