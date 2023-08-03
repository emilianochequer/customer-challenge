import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Accordion,
  Form,
  Button,
  Tab,
  Tabs,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import customerData from "../../../customerData";
import CustomerPaymentsTable from "../CustomerPaymentsTable/CustomerPaymentsTable";

const CustomerCustomerProcess = () => {
  const { custId } = useParams();
  const [customerInfo, setCustomerInfo] = useState({
    Id: "",
    Fname: "",
    Lname: "",
    ssn: "",
    DobD: "",
    DobM: "",
    DobY: "",
    Address: "",
    AptNumber: "",
    AptName: "",
    Aptcode: "",
    City: "",
    State: "",
    Zip: "",
    HPhone1: "",
    HPhone2: "",
    HPhone3: "",
    WPhone1: "",
    WPhone2: "",
    WPhone3: "",
    DlNumber: "",
    DlState: "",
    DlExp: "",
    Employer: "",
    Position: "",
    EmploymentYears: "",
    PreEmployer: "",
    PrePosition: "",
    PreEmploymentYears: "",
    MonthlyIncome: "",
    YearsAtHome: "",
    RentType: "",
    MonthlyPayment: "",
    MtgCmyName: "",
    HomeValue: "",
    ReferenceFname: "",
    ReferenceLname: "",
    ReferencePhone: "",
    ReferenceRelation: "",
  });
  const [sales, setSales] = useState([]);

  useEffect(() => {
    // Find customer info based on custId
    const customer = customerData?.find(
      (c) => c?.custInfo?.Id === parseInt(custId)
    );
    if (customer) {
      console.log("asdadad", customer);
      setCustomerInfo(customer.custInfo);
      setSales(customer.sales);
    } else {
      // If customer not found, set default values for new customer
      setCustomerInfo({
        Id: "",
        Fname: "",
        Lname: "",
        ssn: "",
        DobD: "",
        DobM: "",
        DobY: "",
        Address: "",
        AptNumber: "",
        AptName: "",
        Aptcode: "",
        City: "",
        State: "",
        Zip: "",
        HPhone1: "",
        HPhone2: "",
        HPhone3: "",
        WPhone1: "",
        WPhone2: "",
        WPhone3: "",
        DlNumber: "",
        DlState: "",
        DlExp: "",
        Employer: "",
        Position: "",
        EmploymentYears: "",
        PreEmployer: "",
        PrePosition: "",
        PreEmploymentYears: "",
        MonthlyIncome: "",
        YearsAtHome: "",
        RentType: "",
        MonthlyPayment: "",
        MtgCmyName: "",
        HomeValue: "",
        ReferenceFname: "",
        ReferenceLname: "",
        ReferencePhone: "",
        ReferenceRelation: "",
      });
    }
  }, [custId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerInfo((prevCustomerInfo) => ({
      ...prevCustomerInfo,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Save changes to JSON files
  };

  const handleReset = () => {
    // Reset form fields
  };

  const handleResaleCertificate = () => {
    // Generate resale certificate
  };

  return (
    <Container fluid>
      <h4 className="text-black">
        Search Customer:{" "}
        {customerInfo && (
          <b>
            {customerInfo.Fname} {customerInfo.Lname}
          </b>
        )}
      </h4>

      <Link
        className
        to={"/"}
        style={{ textDecoration: "none", color: "white" }}
      >
        <Button
          variant="secondary"
          style={{ margin: "10px 0" }}
          className="text-decoration-none"
        >
          Back
        </Button>
      </Link>
      <Tabs flush defaultActiveKey="data" id="customer-data-process">
        <Tab
          className="min-vh-100"
          eventKey="data"
          title="Applicant Information"
        >
          <Accordion>
            <Accordion.Item
              className="d-flex justify-content-center flex-column"
              eventKey="customer-info"
            >
              <Accordion.Header
                as={Button}
                variant="link"
                eventKey="customer-info"
                className="text-decoration-none margin-0 padding-0 align-items-center"
              >
                Customer Information
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer first name"
                          name="Fname"
                          value={customerInfo.Fname}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formLname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer last name"
                          name="Lname"
                          value={customerInfo.Lname}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Label>SSN</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter customer SSN"
                        name="ssn"
                        value={customerInfo.ssn}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Label>Date of Birth (Day)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter customer date of birth (day)"
                        name="DobD"
                        value={customerInfo.DobD}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col>
                      <Form.Label>Date of Birth (Month)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter customer date of birth (month)"
                        name="DobM"
                        value={customerInfo.DobM}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col>
                      <Form.Label>Date of Birth (Year)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter customer date of birth (year)"
                        name="DobY"
                        value={customerInfo.DobY}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="d-flex justify-content-center flex-column"
              eventKey="contact-info"
            >
              <Accordion.Header
                as={Button}
                variant="link"
                eventKey="contact-info"
                className="text-decoration-none margin-0 padding-0 align-items-center"
              >
                Contact Information
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Group>
                    <Row>
                      <Col>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer address"
                          name="Address"
                          value={customerInfo.Address}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Form.Label>Apt Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer apartment number"
                          name="AptNumber"
                          value={customerInfo.AptNumber}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Form.Label>Apt Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer apartment name"
                          name="AptName"
                          value={customerInfo.AptName}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Form.Label>Apt Code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer apartment code"
                          name="Aptcode"
                          value={customerInfo.Aptcode}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer city"
                          name="City"
                          value={customerInfo.City}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer state"
                          name="State"
                          value={customerInfo.State}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer zip code"
                          name="Zip"
                          value={customerInfo.Zip}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Home Phone (1)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer home phone (1)"
                          name="HPhone1"
                          value={customerInfo.HPhone1}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Form.Label>Home Phone (2)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer home phone (2)"
                          name="HPhone2"
                          value={customerInfo.HPhone2}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Form.Label>Home Phone (3)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer home phone (3)"
                          name="HPhone3"
                          value={customerInfo.HPhone3}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Work Phone (1)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer work phone (1)"
                          name="WPhone1"
                          value={customerInfo.WPhone1}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Form.Label>Work Phone (2)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer work phone (2)"
                          name="WPhone2"
                          value={customerInfo.WPhone2}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Form.Label>Work Phone (3)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer work phone (3)"
                          name="WPhone3"
                          value={customerInfo.WPhone3}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="d-flex justify-content-center flex-column"
              eventKey="drivers-license-info"
            >
              <Accordion.Header
                as={Button}
                variant="link"
                eventKey="drivers-license-info"
                className="text-decoration-none margin-0 padding-0 align-items-center"
              >
                Contact Information
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Row>
                    <Col>
                      <Form.Label>Driver&apos;s License Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter customer driver's license number"
                        name="DlNumber"
                        value={customerInfo.DlNumber}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col>
                      <Form.Label>Driver&apos;s License State</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter customer driver's license state"
                        name="DlState"
                        value={customerInfo.DlState}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col>
                      <Form.Label>Driver&apos;s License Expiration</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter customer driver's license expiration date"
                        name="DlExp"
                        value={customerInfo.DlExp}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="d-flex justify-content-center flex-column"
              eventKey="employment-info"
            >
              <Accordion.Header
                as={Button}
                variant="link"
                eventKey="employment-info"
                className="text-decoration-none margin-0 padding-0 align-items-center"
              >
                Employment Information
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group controlId="formEmployer">
                        <Form.Label>Employer</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer employer"
                          name="Employer"
                          value={customerInfo.Employer}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formPosition">
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer position"
                          name="Position"
                          value={customerInfo.Position}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formEmploymentYears">
                        <Form.Label>Employment Years</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer employment years"
                          name="EmploymentYears"
                          value={customerInfo.EmploymentYears}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group controlId="formPreEmployer">
                        <Form.Label>Previous Employer</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer previous employer"
                          name="PreEmployer"
                          value={customerInfo.PreEmployer}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formPrePosition">
                        <Form.Label>Previous Position</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer previous position"
                          name="PrePosition"
                          value={customerInfo.PrePosition}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formPreEmploymentYears">
                        <Form.Label>Previous Employment Years</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer previous employment years"
                          name="PreEmploymentYears"
                          value={customerInfo.PreEmploymentYears}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="d-flex justify-content-center flex-column"
              eventKey="housing-income-info"
            >
              <Accordion.Header
                as={Button}
                variant="link"
                eventKey="housing-income"
                className="text-decoration-none margin-0 padding-0 align-items-center"
              >
                Housing and Income
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group controlId="formMonthlyIncome">
                        <Form.Label>Monthly Income</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer monthly income"
                          name="MonthlyIncome"
                          value={customerInfo.MonthlyIncome}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formYearsAtHome">
                        <Form.Label>Years at Home</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer years at home"
                          name="YearsAtHome"
                          value={customerInfo.YearsAtHome}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formRentType">
                        <Form.Label>Rent Type</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer rent type"
                          name="RentType"
                          value={customerInfo.RentType}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="formMonthlyPayment">
                        <Form.Label>Monthly Payment</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer monthly payment"
                          name="MonthlyPayment"
                          value={customerInfo.MonthlyPayment}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formMtgCmyName">
                        <Form.Label>Mortgage Company Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer mortgage company name"
                          name="MtgCmyName"
                          value={customerInfo.MtgCmyName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formHomeValue">
                        <Form.Label>Home Value</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer home value"
                          name="HomeValue"
                          value={customerInfo.HomeValue}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="d-flex justify-content-center flex-column"
              eventKey="reference-info"
            >
              <Accordion.Header
                as={Button}
                variant="link"
                eventKey="reference-income"
                className="text-decoration-none margin-0 padding-0 align-items-center"
              >
                Reference Information
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group controlId="formReferenceFname">
                        <Form.Label>Reference First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer reference first name"
                          name="ReferenceFname"
                          value={customerInfo.ReferenceFname}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formReferenceLname">
                        <Form.Label>Reference Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer reference last name"
                          name="ReferenceLname"
                          value={customerInfo.ReferenceLname}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="formReferencePhone">
                        <Form.Label>Reference Phone</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer reference phone"
                          name="ReferencePhone"
                          value={customerInfo.ReferencePhone}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formReferenceRelation">
                        <Form.Label>Reference Relation</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer reference relation"
                          name="ReferenceRelation"
                          value={customerInfo.ReferenceRelation}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Container className="d-flex justify-content-center mt-4 gap-3">
            <Button variant="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
            <Button variant="secondary" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="success" onClick={handleResaleCertificate}>
              Resale Certificate
            </Button>
          </Container>
        </Tab>

        <Tab className="min-vh-100" eventKey="sales" title="View All Sales">
          <CustomerPaymentsTable sales={sales} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default CustomerCustomerProcess;
