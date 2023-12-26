import { React, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import FAQComponent from "./FAQComponent";
import "./HomePage.css";

const HomePage = () => {
  const faqData = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },

    // Add more FAQ data here
  ];

  // Footer links here

  const links = [
    { title: "FAQ", url: "https://example.com/link1" },
    { title: "Help Centre", url: "https://example.com/link2" },
    { title: "Account", url: "https://example.com/link3" },
    { title: "Media Centre", url: "https://example.com/link4" },
    { title: "Investor Relations", url: "https://example.com/link5" },
    { title: "Jobs", url: "https://example.com/link6" },
    { title: "Ways to Watch", url: "https://example.com/link7" },
    { title: "Terms of Use", url: "https://example.com/link8" },
    { title: "Privacy", url: "https://example.com/link9" },
    { title: "Media Centre", url: "https://example.com/link4" },
    { title: "Investor Relations", url: "https://example.com/link5" },
    { title: "Jobs", url: "https://example.com/link6" },
    { title: "Ways to Watch", url: "https://example.com/link7" },
    { title: "Terms of Use", url: "https://example.com/link8" },
    { title: "Privacy", url: "https://example.com/link9" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH"); // Default language

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="image-container">
          <div class="content">
            <h1 class="heading">Unlimited movies, TV shows and more</h1>
            <h5 class="heading5">Watch anywhere. Cancel anytime.</h5>
            <h6 class="heading6">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h6>
            <div className="email-box-container">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="get-started-button">Get Started ></button>
            </div>
          </div>

          <div className="flex-container">
            <div className="h1-container">
              <h1>Download your shows to watch offline</h1>
              <p>
                Save your favourites easily and always have something to watch.
              </p>
            </div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="Image"
            />
          </div>

          <div className="flex-container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              alt="Image"
            />
            <div className="h2-container">
              <h1>Watch everywhere</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,{" "}
                <br />
                laptop, and TV.
              </p>
            </div>
          </div>

          <div className="flex-container">
            <div className="h1-container">
              <h1>Create profiles for kids</h1>
              <p>
                Send children on adventures with their favourite characters in a{" "}
                <br />
                space made just for them—free with your membership.
              </p>
            </div>
            <img
              src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
              alt="Image"
            />
          </div>

          <div className="flex-container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              alt="Image"
            />
            <div className="h2-container">
              <h1>Watch everywhere</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                <br />
                laptop, and TV.
              </p>
            </div>
          </div>

          <div className="Q-container">
            <h1 class="heading2">Frequently Asked Questions</h1>
            <FAQComponent faqData={faqData} />
            <div className="email-box-container">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="get-started-button">Get Started ></button>
            </div>
          </div>

          <div className="link-container">
            <div className="link-container-heading">
              Questions? Call 000-800-919-1694
            </div>
            <div className="link-grid">
              {links.map((link) => (
                <a key={link.title} href={link.url} className="link-item">
                  {link.title}
                </a>
              ))}
              <div className="language-dropdown">
                <label className="globe-icon">&#127760;</label>{" "}
                {/* Globe icon */}
                <select
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                >
                  <option value="ENGLISH">English</option>
                  <option value="HINDI">Hindi</option>
                </select>
              </div>
            </div>
            <div className="footer-heading">Netflix india </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
