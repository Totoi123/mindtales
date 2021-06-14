import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const { user, login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const hanldeContactFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const response = await db.collection("messages").add({
      name,
      email,
      message,
      submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    if (response) {
      console.log(response);
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Head>
        <title>Mindtales | Home</title>
      </Head>
      <section className="section is-medium">
        <div className="container">
          <div className="columns is-vcentered is-8">
            <div className="column is-8">
              <h1 className="is-size-1 title has-text-grey-dark">Mindtales</h1>
              <p className="is-size-3 subtitle has-text-grey">
                Enjoy your perspective
              </p>
              <p className="is-size-5 has-text-justified">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                rem illo possimus, ratione nisi magni iure voluptatum impedit
                ipsam quas consequatur beatae, voluptatem libero ab? Alias
                maiores voluptates hic nesciunt!
              </p>
              {!user && (
                <motion.button
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.5, type: "spring", stiffness: 150 }}
                  className="button is-rounded is-primary is-size-5 title mt-2"
                  onClick={login}
                >
                  Get Started
                </motion.button>
              )}
            </div>
            <div className="column is-5">
              <motion.img
                initial={{ y: 0 }}
                animate={{ y: -20, type: "spring" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 1.5,
                }}
                src="/mindtales.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section is-small">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <img data-aos="fade-right" src="/people.svg" alt="people" />
            </div>
            <div className="column">
              <p
                data-aos="fade-up"
                className="is-size-2 has-text-grey-dark title"
              >
                Mindtales
              </p>
              <p data-aos="fade-up" className="is-size-4 has-text-justified">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum deleniti sed enim praesentium, mollitia aut nihil modi,
                dolor commodi cumque voluptatum. Illo quia itaque fuga. Rerum ex
                consequatur eveniet quia voluptatem harum doloribus, animi
                doloremque non assumenda minima velit obcaecati porro? Voluptas
                tempore ex ipsa blanditiis sapiente expedita officia, quibusdam
                tenetur quisquam magni quod quos voluptates, consectetur
                explicabo. Ipsum, quas?
              </p>
            </div>
          </div>
        </div>
        <section className="section is-small">
          <div className="container">
            <div className="columns is-vcentered is-8">
              <div className="column is-7">
                <p
                  data-aos="fade-right"
                  className="is-size-2 has-text-grey-dark title"
                >
                  Enhance Your creativity
                </p>
                <p
                  data-aos="fade-right"
                  className="is-size-4 has-text-justified"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur iure nisi recusandae sed necessitatibus amet!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat officia illo, facere voluptas quae odit cupiditate
                  excepturi quis dolores ipsam.
                </p>
              </div>
              <div className="column is-5 ml-5">
                <img
                  data-aos="fade-left"
                  src="/creativity.svg"
                  alt="creativity"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="section is-small">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6 ml-5">
              <img data-aos="zoom-in" src="/light.svg" alt="light" />
            </div>
            <div className="column">
              <p
                data-aos="fade-left"
                className="is-size-2 has-text-grey-dark title"
              >
                Light, Fast & Responsive
              </p>
              <p data-aos="fade-up" className="is-size-4 has-text-justified">
                Mindtales is ready to use with fast and responsive UI. Get the
                new blogging experience <br /> <br /> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quibusdam possimus consequatur
                veritatis doloremque pariatur non vitae ab cum provident cumque?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column ">
              <p
                data-aos="fade-right"
                className="is-size-2 has-text-grey-dark title"
              >
                That's about it
              </p>
              <p data-aos="fade-right" className="is-size-4 has-text-justified">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                illum consequatur quae sit animi eos, quibusdam vero, distinctio
                dolore odit totam aliquid natus voluptatibus quia.
              </p>
            </div>
            <div className="column">
              <img
                data-aos="fade-left"
                className="image img"
                src="/sitting.svg"
                alt="sitting"
              />
            </div>
          </div>
          <hr />
        </div>
      </section>

      <section className="section is-small">
        <div className="container ">
          <div className="columns ">
            <div className="column">
              <h1
                data-aos="fade-up"
                className="is-size-1 title has-text-centered"
              >
                Customer Testimonials
              </h1>
              <p
                data-aos="fade-up"
                className="is-size-4 has-text-grey has-text-centered move"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
                vero magni? Doloremque, facere corrupti. Deleniti dolores a est
                quia dolor.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column">
              <div data-aos="fade-up" className="card">
                <div className="card-content">
                  <p className="is-size-1 title has-text-link">"</p>
                  <p className="is-size-4 has-text-grey-dark has-text-justified">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatum maiores accusantium dolore delectus rem similique
                    doloribus voluptate qui, in temporibus eos. Voluptate
                    deserunt qui, porro mollitia quae aliquam perspiciatis
                    corporis.
                  </p>
                </div>
                <footer className="card-footer">
                  <p className="is-size-5 card-footer-item title">
                    Ayush / Mindtales
                  </p>
                </footer>
              </div>
            </div>

            <div className="column">
              <div data-aos="fade-up" className="card">
                <div className="card-content">
                  <p className="is-size-1 title has-text-link">"</p>
                  <p className="is-size-4 has-text-grey-dark has-text-justified">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatum maiores accusantium dolore delectus rem similique
                    doloribus voluptate qui, in temporibus eos. Voluptate
                    deserunt qui, porro mollitia quae aliquam perspiciatis
                    corporis.
                  </p>
                </div>
                <footer className="card-footer">
                  <p className="is-size-5 card-footer-item title">
                    Roman / Mindtales
                  </p>
                </footer>
              </div>
            </div>

            <div className="column">
              <div data-aos="fade-up" className="card">
                <div className="card-content">
                  <p className="is-size-1 title has-text-link">"</p>
                  <p className="is-size-4 has-text-grey-dark has-text-justified">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatum maiores accusantium dolore delectus rem similique
                    doloribus voluptate qui, in temporibus eos. Voluptate
                    deserunt qui, porro mollitia quae aliquam perspiciatis
                    corporis.
                  </p>
                </div>
                <footer className="card-footer">
                  <p className="is-size-5 card-footer-item title">
                    Neha / Mindtales
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-small">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column ">
              <p data-aos="fade-right" className="is-size-2 has-text-grey-dark">
                Contact Form
              </p>
              <p data-aos="fade-right" className="is-size-4 has-text-justified">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis illum sit dolore explicabo, ullam atque Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Ea, minus. <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, neque quas! Facilis laborum possimus consectetur
                soluta accusantium et nesciunt quaerat?
              </p>
            </div>

            <div className="column ml-5">
              <form data-aos="fade-left" onSubmit={hanldeContactFormSubmit}>
                <div className="field">
                  <label className="label is-size-5">Name</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input is-medium is-link "
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label is-size-5">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input is-medium is-link"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label is-size-5">Message</label>
                  <div className="control">
                    <textarea
                      type="text"
                      className="textarea is-large is-link"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <input
                    type="submit"
                    disabled={loading}
                    value="Submit"
                    className="button is-medium is-link is-light is-pulled-right is-rounded"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
