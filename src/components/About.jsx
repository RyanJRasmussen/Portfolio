import React, { useState } from "react";
import Modal from "react-modal";
import HeadshotWide from "../assets/HeadshotWide.jpg";

Modal.setAppElement("#root");

const About = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // function toggleModal() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <h3>About Me</h3>
            </div>
          </div>
        </div>
        <div className="about_image">
          <img src={HeadshotWide} alt="Me" />
        </div>{" "}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Ryan Rasmussen - Software developer</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hey, I'm Ryan. I'm a software developer trained in full stack
                engineering. I have a B.S. in biochemistry from the University
                of Wisconsin, Madison. I'm currently working towards a pivot
                from the biological sciences to software engineering to pursue
                my love of problem-solving.
                <br />
                <br />
                When I'm not coding, I like to play and write music on the
                piano, violin, and guitar. I also love downhill skiing, running,
                and playing video games with my friends.
              </p>
              {/* <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  My Skills
                </button>
              </div> */}
              {/* END LOGO BUTTON */}
            </div>
            {/* END LEFT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      {/* <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Photography Skills</h3>
                  </div>

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Wedding Photography</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Lifestyle Photography</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 80 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Family Photography</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right">
                  <div className="about_title">
                    <h3>Language Skills</h3>
                  </div>
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">English</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Japanese</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Arabian</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 85 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>777+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>3K</h3>
                      <span>Happy Clients</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>9K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="partners">
                <div className="about_title">
                  <h3>Our Partners</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal> */}
    </>
  );
};

export default About;
