import React from "react";
import { Jumbotron } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div className="home">
      <div class="container">

          <Card>
            <Card.Header><h1 class="font-weight-light">Welcome!</h1></Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
              <div class="container">
                <p>
                  {' '}
                  You have reached the personal website of Igor Bich.<br />
                  If you would like to learn more about me please visit the about page.<br />
                  If you are a recruiter, or just curious, feel free to visit the resume page.<br />
                  Feel free to contact or follow me in the below listed social media platforms.
                  I am not very active on any social media but I do check them from time to time. <br />
                  Let me know that you came from my website, I would appreciate that.<br />
                  This website was made entirely by me using React and Bootstrap frameworks.<br/>
                  The source code can be made available upon request{' '}
                </p>
                </div>
              </blockquote>
            </Card.Body>
          </Card>
          <Jumbotron>
            <h5>“The wisdom of the wise, and the experience of ages, may be preserved by quotation.”</h5>
            — Issac D’Israeli

            <h5>"An unexamined life is not worth living." </h5> — Socrates
          </Jumbotron>




      </div>
      <br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Home;