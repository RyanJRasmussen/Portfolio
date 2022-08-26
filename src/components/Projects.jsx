import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  // const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  // function toggleModalFour() {
  //   setIsOpen4(!isOpen4);
  // }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <h3>My Projects</h3>
            </div>
          </div>
        </div>

        <ul>
          {/* YOUBETCHA */}
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/news/youbetchaScreenshot.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <h3 className="title" onClick={toggleModalOne}>
                    YouBetcha
                  </h3>
                </div>
                {/* END EXTRA */}
                <p className="date">Simulated sports betting application</p>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <h3 className="title">YouBetcha </h3>
                      {/* <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage:
                              "url(assets/img/news/youbetchaScreenshot.png)",
                          }}
                        ></div>
                      </div> */}
                      {/* END IMAGE */}
                      <div className="details">
                        {/* <div className="extra">
                          <p className="date">
                            By <a href="#">Alex Watson</a>
                            <span>05 April 2021</span>
                          </p>
                        </div> */}
                        <h3 className="title">
                          Live updating simulated sports betting application
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <h5>Summary</h5>
                          <p className="bigger">
                            <br />
                            YouBetcha is a full stack sports betting web
                            application that allows users to make accounts and
                            place bets on real MLB games. Users are able to log
                            in at any time to bet fake money on games being
                            played tomorrow or later today, and automatically
                            receive the correct payout if their bet is
                            successful.
                          </p>
                          <br />
                          <br />
                          Technologies used: Authentication = Auth0 Front end:
                          React.js PostgreSQL, Express.js, React.js, Node.js,
                          Node Postgres ORM, The Odds API, Heroku, Heroku
                          Scheduler, Material UI, GitHub/Git, Auth0, Trello
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* HUDDLE */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/news/huddleScreenshot.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <h3 className="title" onClick={toggleModalOne}>
                    Huddle
                  </h3>
                </div>
                {/* END EXTRA */}
                <p className="date">
                  NFL player guessing game inspired by Wordle
                </p>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage:
                              "url(assets/img/news/huddleScreenshot.png)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#">Brook Kennedy</a>
                            <span>22 March 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Sony announced two new full frame cameras with zero
                          fanfare
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}
          {/* CHECKERS */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalThree}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/news/checkersScreenshot.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <h3 className="title" onClick={toggleModalOne}>
                    Checkers
                  </h3>
                </div>
                {/* END EXTRA */}
                <p className="date">The classic two player game</p>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage:
                              "url(assets/img/news/checkersScreenshot.png)",
                          }}
                        ></div>
                      </div>
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#">Paola Atkins</a>
                            <span>15 Feb 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Why every photographer should shoot film, even in 2021
                        </h3>
                      </div>
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quore"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SCCIAL SHARE */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>

          {/* POTENTIAL FOURTH PROJECT, COULD ADD COMING SOON THING FOR PRODUCKTIVE  */}

          {/* <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalFour}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/4.jpg)",
                  }}
                ></div>
              </div>

              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Kevin Stone</a>
                    <span>22 Jan 2021</span>
                  </p>
                </div>

                <h3 className="title" onClick={toggleModalFour}>
                  Stay creative in lockdown with these fun photo projects
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFour}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/4.jpg)",
                          }}
                        ></div>
                      </div>

                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#toggleButton">Kevin Stone</a>
                            <span>22 Jan 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Stay creative in lockdown with these fun photo
                          projects
                        </h3>
                      </div>

                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Projects;
