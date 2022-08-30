import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";
import closeIcon from "../assets/svg/cancel.svg";
import thumb from "../assets/thumbs/4-3.jpg";
import huddleScreenshot from "../assets/news/huddleScreenshot.png";
import youbetchaScreenshot from "../assets/news/youbetchaScreenshot.png";
import checkersScreenshot from "../assets/news/checkersScreenshot.png";

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
                <img src={thumb} alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${youbetchaScreenshot})`,
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
                    <img src={closeIcon} alt="close icon" />
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
                        <h3 className="title">
                          Live updating sports betting application
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <h5>Summary</h5>
                          <p className="bigger">
                            YouBetcha is a full stack sports betting web
                            application that allows users to make accounts and
                            place bets on real MLB games. Users are able to log
                            in at any time to bet fake money on games being
                            played tomorrow or later today, and automatically
                            receive the correct payout if their bet is
                            successful.
                          </p>
                          <br />
                          <h6>Technologies</h6>
                          Authentication: Handled with{" "}
                          <a href="https://auth0.com/" id="ResourceLink">
                            Auth0
                          </a>{" "}
                          <br />
                          Front end: Built in{" "}
                          <a href="https://reactjs.org/" id="ResourceLink">
                            React.js
                          </a>
                          , styled using{" "}
                          <a href="https://mui.com/" id="ResourceLink">
                            MaterialUI
                          </a>
                          <br />
                          Back end: Built in{" "}
                          <a href="https://nodejs.org/en/" id="ResourceLink">
                            Node.js
                          </a>
                          , routing handled with{" "}
                          <a href="https://expressjs.com/" id="ResourceLink">
                            Express.js
                          </a>
                          <br />
                          Database: Cloud{" "}
                          <a
                            href="https://www.postgresql.org/"
                            id="ResourceLink"
                          >
                            PostgreSQL
                          </a>{" "}
                          database hosted on{" "}
                          <a href="https://id.heroku.com/" id="ResourceLink">
                            Heroku
                          </a>
                          <br />
                          API: Data retrieved from{" "}
                          <a href="https://the-odds-api.com/" id="ResourceLink">
                            The Odds API
                          </a>
                          <br />
                          SQL: Data manipulated using the{" "}
                          <a
                            href="https://node-postgres.com/"
                            id="ResourceLink"
                          >
                            Node Postgres ORM
                          </a>
                          <br />
                          Scheduler: Scheduled API calls are made from the back
                          end using{" "}
                          <a
                            href="https://devcenter.heroku.com/articles/scheduler"
                            id="ResourceLink"
                          >
                            Heroku Scheduler
                          </a>
                          <br />
                          Project Management:{" "}
                          <a href="https://trello.com/home" id="ResourceLink">
                            Trello
                          </a>
                          <br />
                          Version control:{" "}
                          <a href="https://github.com/" id="ResourceLink">
                            GitHub
                          </a>
                          <br />
                          <br />
                          <br />
                          <h6>Problems solved</h6>
                          <p>
                            My primary role in this project was on the back end,
                            though I also contributed to the front end. <br />I
                            was responsible for the database in its entirety,
                            setting it up as a Heroku Postgres database. I chose
                            Node Postgres as the ORM, and integrated it into the
                            back end to write SQL queries for database
                            manipulation. I wrote all routes that retreived and
                            dealt with data from The Odds API, as well as routes
                            that moved that data into our database. I wrote
                            routes to create bets and update user funds
                            according to bet results, and set up Heroku
                            Scheduler to carry out game and bet updating POST
                            and PUT requests multiple times a day.
                            <br />
                            On the front end I created and styled the card and
                            modals with MaterialUI. I also added Auth0 to the
                            application.
                          </p>
                          Repositories:{" "}
                          <a
                            href="https://github.com/prashantkumar1113/milestone3-express"
                            id="ResourceLink"
                          >
                            Back End
                          </a>
                          ,{" "}
                          <a
                            href="https://github.com/wjtelliott/PERN-3-Front"
                            id="ResourceLink"
                          >
                            Front End
                          </a>
                          {/* END QUOTEBOX */}
                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>Social:</span>
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
                <img src={thumb} alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${huddleScreenshot})`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <h3 className="title" onClick={toggleModalTwo}>
                    Huddle
                  </h3>
                </div>
                {/* END EXTRA */}
                <p className="date">
                  NFL player guessing game inspired by Wordle
                </p>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwo}>
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
                    <img src={closeIcon} alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <h3 className="title">Huddle </h3>
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
                        <h3 className="title">NFL Player Guessing Game</h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <h5>Summary</h5>
                          <p className="bigger">
                            Huddle is a wordle-inspired guessing game where
                            players guess a player and receive feeback for their
                            guess. Players receive information about each player
                            they guess, including conference and division, team,
                            position, draft team, draft year, pro bowls, and
                            rings won over their career. Players receive hints
                            in the form of colored tiles, much like how letters
                            in wordle are colored according to
                            correctness/closeness. For a more detailed
                            explanation of the rules, see the rules modal on the
                            website. Please feel free to play the game and try
                            to guess the player!
                            <br />
                            Huddle is a front end application with no back end
                            at this time. Data is currently static, and not
                            large enough to slow down the application, so it is
                            stored on the front end. There is no
                            authentication/user profiles that a back end would
                            need to shuttle the data to and from a database.
                            Instead, user specific data is stored on Local
                            Storage.
                          </p>
                          <br />
                          <h6>Technologies</h6>
                          Front end: Built in{" "}
                          <a href="https://reactjs.org/" id="ResourceLink">
                            React.js
                          </a>
                          , styled using{" "}
                          <a
                            href="https://react-bootstrap.github.io/"
                            id="ResourceLink"
                          >
                            React-Bootstrap
                          </a>
                          <br />
                          Hosted on:{" "}
                          <a href="https://id.heroku.com/" id="ResourceLink">
                            Heroku
                          </a>
                          <br />
                          API: Player data retrieved from{" "}
                          <a href="https://sportsdata.io/" id="ResourceLink">
                            SportsDataIO
                          </a>
                          <br />
                          Project Management:{" "}
                          <a href="https://trello.com/home" id="ResourceLink">
                            Trello
                          </a>
                          <br />
                          Version control:{" "}
                          <a href="https://github.com/" id="ResourceLink">
                            GitHub
                          </a>
                          <br />
                          <br />
                          <br />
                          <h6>Problems solved</h6>
                          <p>
                            This project was done alongside a partner, and
                            responsibilities were split evenly. As this project
                            has no back end, this project was an excercise in
                            styling, designing, and creating an intuitive user
                            experience on the front end. I created and iterated
                            on the main table that the user receives feedback
                            from, while also creating the modals that the user
                            can use to check the game rules, view their data, or
                            see player pool info. This project was coded in
                            React Class Components, rather than React Functional
                            Components, providing valuable experience with
                            object-oriented design.
                          </p>
                          <br />
                          <a
                            href="https://github.com/mjbuchman/huddle"
                            id="ResourceLink"
                          >
                            Click here for the code
                          </a>
                          <br />
                          <a
                            href="https://www.huddlegame.com/"
                            id="ResourceLink"
                          >
                            Click here to play Huddle!
                          </a>
                          {/* END QUOTEBOX */}
                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>Social:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
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
                <img src={thumb} alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${checkersScreenshot})`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <h3 className="title" onClick={toggleModalThree}>
                    Checkers
                  </h3>
                </div>
                {/* END EXTRA */}
                <p className="date">The classic two player game</p>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalThree}>
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
                    <img src={closeIcon} alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <h3 className="title">Checkers </h3>
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
                        <h3 className="title">The classic board game</h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <h5>Summary</h5>
                          <p className="bigger">
                            This is checkers as you know it, with black and red
                            pieces, diagonal movement, and pawn-to-king
                            promotion. This project was my first attempt at
                            programming a game. It is built in vanilla
                            JavaScript, HTML, and CSS, and does not use any
                            libraries or frameworks. It is a single screen,
                            multiplayer game, though I plan on eventually adding
                            a simple AI to play one of the colors against a
                            human user.
                          </p>
                          <br />
                          <h6>Technologies</h6>
                          Built in:{" "}
                          <a
                            href="https://www.javascript.com/"
                            id="ResourceLink"
                          >
                            JavaScript
                          </a>
                          ,{" "}
                          <a
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            id="ResourceLink"
                          >
                            CSS
                          </a>
                          , and{" "}
                          <a
                            href="https://www.w3schools.com/html/"
                            id="ResourceLink"
                          >
                            HTML
                          </a>
                          <br />
                          <br />
                          <br />
                          <h6>Problems solved</h6>
                          <p>
                            Checkers was an excellent exercise in DOM
                            manipulation. Among the main challenges was creating
                            a drag and drop UI, which was accomplished using{" "}
                            <a
                              href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API"
                              id="ResourceLink"
                            >
                              this
                            </a>{" "}
                            HTML drag and drop API. Once I had created a simple
                            board and pieces with CSS, and was able to move them
                            around with the drag and drop UI, the remaining
                            challenge was tracking piece location, comparing
                            pieces to other pieces, and either allowing or
                            stopping piece capture depending on those locations.
                            Eventually I accomplished this by comparing the
                            piece to a two-dimensional array of square IDs, in
                            effect creating a coordinate system to ensure move
                            legality. This application will be worked on in the
                            future to add responsive board/piece sizes, and
                            single player mode.
                          </p>
                          <br />
                          <a
                            href="https://github.com/RyanJRasmussen/Checkers"
                            id="ResourceLink"
                          >
                            Click here for the code
                          </a>
                          <br />
                          {/* END QUOTEBOX */}
                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>Social:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* POTENTIAL FOURTH PROJECT, COULD ADD COMING SOON THING FOR PRODUCKTIVE  */}
        </ul>
      </div>
    </>
  );
};

export default Projects;
