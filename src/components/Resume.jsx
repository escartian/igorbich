import React from "react";
import Card from 'react-bootstrap/Card';
import './Resume.css';
function Resume() {
    return (
        <div className="resume">
            <div class="container">
                <Card>
                    <Card.Header><h1>Igor Bich - Software Developer</h1></Card.Header>
                    <Card.Body>
                        <Card.Text>
                        <table class="table"><tr>
                        <th scope="col">Greater New York Metropolitan Area</th>
                        <th scope="col">escartian@gmail.com</th>
                        </tr>
                        </table>
                                <h2>Skills</h2>
                                <p class = "resume_body">Profcient: Java, JavaScript, HTML, CSS</p>
                                <p class = "resume_body">Knowledgeable: C++, C, XML, Mathematica, shell scripting, Matlab, Python</p>
                                <p class = "resume_body">Familiar: PowerShell, R, VBA, SPSS, Vim, Emacs, Git, GitHub, LaTeX, SQL, Angular.js, React, Spring</p>
                                <h2>Experience</h2>
                                <p class = "resume_body fw-light">September 2018 - PRESENT</p>
                                <h3>Tata Consultancy Services - Software Developer</h3>
                                <p class = "resume_body fw-light">April 2021 - PRESENT</p>
                                <h4>Albertsons - Software Developer</h4>
                                <p class = "resume_body">● Integrated various supply chain applications under one unifed web app using React and Java</p>
                                <p class = "resume_body">●Created unit tests for React and Java</p>
                                <p class = "resume_body">●Reverse engineering cobalt mainframe code to Java as part of mainframe modernization</p>
                                <p class = "resume_body">●Fixed defects with billing system and forecast and replenishment applications</p>
                                <p class = "resume_body">●Communicating with business to create modern design for systems used and document design</p>
                                <p class = "resume_body fw-light">June 2020 - March 2021</p>
                                <h4>USAA - Software Developer</h4>
                                <p class = "resume_body">●Enriched UI for end user account creation for bank account using React</p>
                                <p class = "resume_body">●Documented processes and control fow of UI for non-technical people to understand</p>
                                <p class = "resume_body">●Performed unit and regression tests to ensure system is secure</p>
                                <p class = "resume_body fw-light">June 2020 - March 2021</p>
                                <h4>Bank of America - Software Developer, Tech Lead</h4>
                                <p class = "resume_body">●Performed regular code reviews and jUnit testing for team’s Java code changes.</p>
                                <p class = "resume_body">●Made record keeping flags for sending expired campaign and out of market letters - Exit Strategy</p>
                                <p class = "resume_body">●Communicated status/requirements/updates of team between Business, Dev Ops, Developers</p>
                                <p class = "resume_body">●Created/updated existing services to send data between platforms as middleware in Java</p>
                                <p class = "resume_body">●Added data display and client verifcation to security verifcation page as part of AML</p>
                                <p class = "resume_body">●Provided regular weekend release support, documenting issues and features in Jira</p>
                                <p class = "resume_body fw-light">February 2018 - May 2018</p>
                                <h3>The College of New Jersey - Research Student</h3>
                                <p class = "resume_body">●Investigated machine learning techniques to gauge for average user interest in a video</p>
                                <p class = "resume_body">●Provided regular weekend release support, documenting issues and features in Jira</p>
                                <p class = "resume_body">●Performed data reduction via key frame extraction using Python</p>
                                <p class = "resume_body">●Used binary classifcation to compare two random videos via DNN in Matlab to determine which is more interesting for an average viewer</p>
                                <p class = "resume_body fw-light">May 2017 - August 2017</p>
                                <h3>Leidos - Software Developer Intern</h3>
                                <p class = "resume_body">●Enriched existing Java Swing based GUI used for testing production ready code for the FAA with, documentation and code clean-up</p>
                                <p class = "resume_body">●Simplifed running of whole test suites to a single button operation if no custom inputs required</p>
                                <p class = "resume_body">●Fixed a few defects in shell scripts that is used for calling the test suite</p>
                                <p class = "resume_body">● Supplemented GUI to allow for customized look, feel, and color to cater to individual tastes</p>
                                <p class = "resume_body fw-light">June 2016 - August 2016</p>
                                <h3>Ipreo- Software Engineer Intern</h3>
                                <p class = "resume_body">● Automated the installation, updating and server confguration management processes that occurs multiple times daily and required manual input using a combination of Java and PowerShell</p>
                                <p class = "resume_body">● Increased speed of deploying production code, server confguration needs, and unit testing</p>
                                <h2>Education</h2>
                                <p class = "resume_body fw-light">May 2021 - August 2024 expected</p>
                                <p class = "resume_body">Stevens Institute of Technology, Hoboken NJ - Master of Science in Computer Science</p>
                                <p class = "resume_body">August 2014 - May 2018</p>
                                <p class = "resume_body">The College of New Jersey, Ewing NJ - Bachelor of Science in Computer Science</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <br></br><br></br><br></br>
        </div>
    );
}

export default Resume;