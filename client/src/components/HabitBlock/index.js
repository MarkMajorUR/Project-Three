import React, {useState} from "react";
import moment from 'moment';

// import WeekDay from "./Moment"

import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const HabitBlock = () => {


// when hooked to database need || operator 
  const [pass, setPass] = useState(0)
  const [fail, setFail] = useState(0)




  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">

              {/* THIS IS A CARD  */}

                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          {/* Firday */}
                           <h2>{ moment().format('dddd') }</h2>
                           
                                           

                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          smoke 6 cigs
                        </span>
                      </div>
                      <Col className="col-auto">
                      

                    <h2 >{pass} </h2>
                    <h2 >{fail} </h2>
                      <button onClick={ () => setPass(pass + 1) } >Add</button>
                      <button onClick={ () => setFail(fail + 1) } >Bad Add</button>
                     
                     </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
                
                
                
               
              </Col>
              
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};



export default HabitBlock
