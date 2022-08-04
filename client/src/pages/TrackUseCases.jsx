import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from 'react-bootstrap/Accordion';

import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';


function TrackUseCases() {
  return (
    <React.Fragment>
      <Header />
        <div className="pageContainer">
          <div className="TrackArea">
            <div className="flex-box-section">
              <br />
              <br />
              <SectionHeading title="Track & Use Cases"/>

              <div className="title">Tracks & Solution Themes:</div>
              <div className="description">Your session proposal needs to fall under one of the following tracks and themes.</div>

              <div className="mb-5">
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item className="item mb-2" eventKey="0">
                      <Accordion.Header>Track - Cloud Delivered Security Services (CDSS)</Accordion.Header>
                      <Accordion.Body>
                      <ul>Use Case
                        <li>Unmanaged (IOT) Device Security and Segmentation</li>
                        <li>Data Loss Prevention</li>
                        <li>Securing SaaS Applications</li>
                        <li>Cloud Access Security Broker</li>
                        <li>Malware Analysis & Sandboxing</li>
                        <li>Intrusion Prevention (IPS/IDS)</li>
                        <li>Ransomware Protection</li>
                        <li>Internet/Web Security</li>
                        <li>DNS Security</li>
                        <li>Extending network security to the cloud</li>
                      </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="item mb-2" eventKey="1">
                      <Accordion.Header>Track - Cloud Native Application Protection (Prisma Cloud) </Accordion.Header>
                      <Accordion.Body>
                        <ul >Use Case
                          <li>Cloud Native Application Protection Platform (CNAPP)</li>
                          <li>Cloud Security Posture Management (CSPM)</li>
                          <li>Cloud Workload Protection (CWP)</li>
                          <li>Cloud Access Security Broker</li>
                          <li>Web App and API Security</li>
                          <li>Cloud Network Security and Microsegmentation)</li>
                          <li>Cloud Infrastructure Entitlement Management (CIEM)</li>
                          <li>Cloud Code Security (Infrastructure as Code Security)</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="item mb-2" eventKey="2">
                      <Accordion.Header>Track - Endpoint Security(Cortex XDR)</Accordion.Header>
                      <Accordion.Body>
                      <ul>Use Case
                        <li>Endpoint Protection</li>
                        <li>Endpoint Detection & Response</li>
                        <li>Ransomware Protection</li>
                        <li>Digital Forensics</li>
                      </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="item mb-2" eventKey="3">
                      <Accordion.Header>Track - Cloud Native Application Protection (Prisma Cloud) </Accordion.Header>
                      <Accordion.Body>
                        <ul >Use Case
                          <li>State and Local Government and Education </li>
                          <li>Financial Services</li>
                          <li>ICS/SCADA</li>
                          <li>Manufacturing</li>
                          <li>Healthcare</li>
                          <li>Utilities</li>
                          <li>Oil & Gas</li>
                          <li>Retail</li>
                          <li>Service Providers</li>
                          <li>Other</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
              </div>
              <div>
              
                <strong><div className="title" style={{fontSize: "2rem"}}>Tips for Crafting Your Proposal</div></strong>
                
                <p style={{color:"#5f5f5f",fontSize:"1rem"}}>Session Title and Session Description</p>
                <ul>
                  <li>If your proposal is selected, your Session Title and Session Description will be published in 
                    the Session Catalog. It’s important that you spend some time making them stand out to your 
                    target audience.
                  </li>
                  <li>Educate—don’t sell. Make sure your presentation has salient lessons for the attendees to learn.
                    It should not be a sales pitch.
                  </li>
                  <li>Include keywords that you think your target audience would search for.</li>
                  <li>Session titles should be clear and straightforward. Let attendees know exactly what they can 
                    expect from your session and give them a sense of urgency to find out more.
                  </li>
                  <li>Avoid uncommon acronyms, slang, and jargon. 
                    Some Ignite attendees might be international where English may not be their first language.
                  </li>
                  <li>Session Descriptions should convey the value of the session, the main takeaways, and unique learning 
                    objectives. Focus on how your content is different, innovative, and impactful.
                  </li>
                  <li>Tell a story and support it with data. Stay away from fluffy language and clearly 
                    communicate the value of attending your session.
                  </li>
                </ul>
              </div>

              <div>
                <p style={{color:"#5f5f5f",fontSize:"1rem"}}>Miscellaneous</p>
                  <ul>
                    <li>We appreciate and consider thoughtful proposals. Incomplete proposals will not be reviewed 
                      without comment or feedback.
                    </li>
                    <li>Use the Additional Information section to share anything that will support your Session Description.
                      This can include lessons learned, products and services deployed, measurable results, links to previous 
                      publications, case studies, etc.
                    </li>
                    <li>Make sure to proofread your final proposal.</li>
                  </ul>
              </div>

              <div className='mb-4'>
                <p style={{color:"#5f5f5f",fontSize:"1rem"}}>Session Lengths/Type*:</p>
                <ul>
                  <li className="mb-2">
                    <span className="d-block" style={{textDecoration: 'underline'}}>20 minutes: Lightning Session</span>
                    <span >This is a 20 minute presentation based on your proposal. You may be asked to participate in an 
                    additional session format, such as meetups to share your expertise.</span>
                  </li>
                  <li className="mb-2">
                    <span className="d-block" style={{textDecoration: 'underline'}}>45 minutes: Breakout Session (30 minutes presentation + 15 minute Q&A)</span>
                    <span >This is a 30 minute presentation based on your proposal with 15 minutes after to answer audience questions.
                      A percentage of the breakout sessions will be “pre-recorded” as part of the On-Demand Ignite ‘22 
                      program. You will be given the option to choose one or both “in-person” and “on-demand” delivery 
                      options during the submission process.
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="d-block" style={{textDecoration: 'underline'}}>45 minutes: Breakout Session PANEL (30 minutes presentation + 15 minute Q&A)</span>
                    <span >This is a 30 minute panel based on your proposal with 15 minutes after to answer audience 
                      questions. You as the submitter will be responsible for recruiting the panel members.
                      You can have up to 5 speakers (including yourself and the moderator). All panel speakers will 
                      receive complimentary passes.
                    </span>
                  </li>
                  <p>* Subject to change</p>
                </ul>

                <p>Your session proposal needs to fall under one of the following tracks and themes.</p>

                <div>
                  <p style={{color:"#5f5f5f",fontSize:"1rem"}}>Keep these audiences in mind when writing your session proposal.</p>
                    <ul>
                      <li>Prospective Customer: The company is exploring Palo Alto Networks.</li>
                      <li>In deployment: The company is actively deploying Palo Alto Networks.</li>
                      <li>Live on Palo Alto Networks: The company has been using Palo Alto Networks products and 
                        services for more than one year.
                      </li>
                    </ul>
              </div>

              </div>

            </div>
          </div>

          <div className="buttonArea">
            <Button text="Submit for Proposal"/>
          </div>
        </div>
      <Footer />
    </React.Fragment>
  )
}

export default TrackUseCases