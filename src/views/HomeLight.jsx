import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMoon, FaSun } from "react-icons/fa";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import home from "../assets/svg/home-run.svg";
import avatar from "../assets/svg/avatar.svg";
import puzzle from "../assets/svg/skills.svg";
import paper from "../assets/svg/paper.svg";
import mail from "../assets/svg/mail.svg";

const HomeLight = () => {
  const [isDark, setIsDark] = useState(false);
  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "light");
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "dark");
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("-light");
      setIsDark(true);
    }
  };

  return (
    <>
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}
      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="menu">
                <ul>
                  <Tab>
                    <img className="svg" src={home} alt="homerun" />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img className="svg" src={avatar} alt="avatar" />
                    <span className="menu_content">About</span>
                  </Tab>
                  <Tab>
                    <img className="svg" src={puzzle} alt="puzzle-piece" />
                    <span className="menu_content">Skills</span>
                  </Tab>
                  <Tab>
                    <img className="svg" src={paper} alt="paper" />
                    <span className="menu_content">Projects</span>
                  </Tab>
                  <Tab>
                    <img className="svg" src={mail} alt="mail" />
                    <span className="menu_content"> Contact</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                <TabPanel>
                  <div data-aos="fade-right" data-aos-duration="1200">
                    <Home />
                  </div>
                </TabPanel>
                {/* END HOME MENU TAB CONTENT */}

                <TabPanel>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <About />
                  </div>
                </TabPanel>
                {/* END ABOUT MENU TAB CONTENT */}

                <TabPanel>
                  <div data-aos="fade-right" data-aos-duration="1200">
                    <Skills />
                  </div>
                </TabPanel>
                {/* END PORTFOLIO MENU TAB CONTENT */}

                <TabPanel>
                  <Projects />
                </TabPanel>
                {/* END PROJECTS MENU TAB CONTENT */}

                <TabPanel>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <Contact />
                  </div>
                </TabPanel>
                {/* END CONTACT MENU TAB CONTENT */}
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
