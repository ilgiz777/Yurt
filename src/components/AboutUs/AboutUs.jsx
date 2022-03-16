import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <header className="masthead">
        <p className="masthead-intro">Hi We are!</p>
        <h1 className="masthead-heading">YURT</h1>
      </header>

      <section className="introduction-section">
        <h1>About Us</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui
          quia velit nisi! Hic ab doloremque ratione ipsa debitis eos, deserunt
          iure aut voluptatibus id velit molestiae, magni modi eaque.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>

      <section className="location-section">
        <h1>Where are we</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic
          dolores veritatis maiores debitis deleniti, ratione rem quas,
          perspiciatis eius explicabo ipsum esse ex enim earum nostrum dolorem
          ea. Enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          provident officia, minus nesciunt fuga animi perferendis ex iste
          soluta atque cumque voluptates, enim eligendi, repellendus a. Possimus
          molestiae aperiam tempore?
        </p>
      </section>

      <section className="questions-section">
        <h1>More about us</h1>
        <h2>What is your dream job</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel soluta
          mollitia illum facere aliquam, omnis esse eligendi nam officia unde id
          tempore in reiciendis laborum accusantium quas nihil, fuga natus?
        </p>
        <h2>What are your favorite appartment?</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
          accusamus..
        </p>
        <h2>Where do you want to live?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          debitis quia deserunt iste animi minus aliquid accusamus possimus
          dolor, assumenda recusandae quas sed exercitationem deleniti tenetur
          quam sit corporis temporibus?
        </p>
      </section>

      <footer className="site-padding">
        <ul className="social">
          <li>
            <a href="https://github.com/ilgiz777/Yurt">Github</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://google.com">Google+</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default AboutUs;
