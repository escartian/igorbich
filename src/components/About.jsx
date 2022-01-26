import React from "react";
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <div className="about">
      <div class="container">
        <Card>
          <Card.Header><h1 class="font-weight-light">Who am I?</h1></Card.Header>
          <Card.Body>
            <Card.Text>
              <div class="row align-items-center my-1">
                <h3>Work Related</h3>
                <p> I work for Tata Consultancy Services (TCS) as a software developer since 2018.
                  I earned my bachelors of science in computer science from The College of New Jersey (TCNJ) in 2018.
                  Currently I am working towards my masters in computer science at Steven's Institute of Technology.
                </p>
                <p>
                  If you are an employer/recruiter know that I am open to opportunities for full time and contract to hire positions in fields related
                  to computer science and software development.
                  My interests within the realm of computer science are software engineering, web development,
                  mobile app development, networks and security, machine learning, and robotics,
                  however with the constant changes in technology, I am open to almost any opportunities.
                </p>
                <p>
                  I am comfortable with any operating system.
                  My main languages are Java and Javascript, however I am familiar with many other popular languages. See the Resume section for more details.
                </p>
                <h3>Hobbies</h3>
                <p>
                  Outside of computer science and software development related activities I have quite a few interests.
                  Of course as someone in the tech industry I do enjoy playing videogames and all that can be experienced with the medium. I enjoy the art, sound, game design and even lore when it exists.
                  I also like to try to break single player games (I consider cheating and hacking fine in single player games as it does not affect others) which is also part of understanding the game design.
                </p><p>
                  I play guitar both electric and classical.
                  Though my favorite guitar I own is a jazz guitar, I find jazz the most difficult style for me to play and also the least enjoyable to listen.
                  The guitar is still amazing and I cherish it greatly as I do with all my guitars!
                  I do also have a flute and have played since the fourth grade and into the college concert band but have not practiced it nearly as often since I graduated college.
                </p><p>
                  I sometimes draw - primarily with pen and ink. I have a small collection of inks and fountain pens and brushes.
                  When I paint I like to do so with watercolors as it requires the least preperation time and forces one to work fast and accept the happy accidents.
                  The pens I have also serve for writing which I try to do a little bit daily either journaling or writing stories.
                </p><p>
                  I also believe that a healthy body is incredibly important (healthy body, healthy mind), so I have found working out enjoyable, from lifting weights, to going on runs, bike riding and swimming.
                  I even have a scuba diving license though have not used it much.
                  I used to do mixed martial arts karate and have a black belt.
                </p>
                <h3>Other Interests</h3>
                <p>
                  Not only do I enjoy playing music, of course I enjoy listening to music of pretty much any genre. I enjoy descovering new sounds.
                  I am interesting in philosophy, environmental issues, physical health, mental health.
                  I love art and architechture so I try to make time for visits to cities nearby and museums.
                  I like science fiction and fantasy stories be it movies books or comics.
                </p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
      <br></br><br></br><br></br>
    </div>
  );
}

export default About;