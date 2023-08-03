import { useNavigate } from "react-router-dom";
import { Accordion, Form, Button, Container, Row, Col } from "react-bootstrap";
import customerData from "../../../customerData.js";
import { useAppContext } from "../../context/AppContext.jsx";

const CustomerSearchProcess = () => {
  const navigate = useNavigate();

  const { searchCriteria, setSearchCriteria, setSeartchResult, searchResult } =
    useAppContext();

  function findCustomerBySaleId(saleId) {
    for (let i = 0; i < customerData.length; i++) {
      const customer = customerData[i];
      for (let j = 0; j < customer.sales.length; j++) {
        console.log("customer.sales[j]", customer.sales[j]);
        const sale = customer.sales[j];
        if (sale.id === Number(saleId)) {
          return customer;
        }
      }
    }
    return null; // saleId not found
  }

  function findCustomerByReceiptNumber(receiptNumber) {
    for (let i = 0; i < customerData.length; i++) {
      const customer = customerData[i];
      for (let j = 0; j < customer.sales.length; j++) {
        const sale = customer.sales[j];
        if (sale.receiptNumber === Number(receiptNumber)) {
          return customer;
        }
      }
    }
    return null; // saleId not found
  }

  const handleSearch = (e) => {
    e.preventDefault();
    let searchResult;

    if (searchCriteria.salesNumber) {
      searchResult = findCustomerBySaleId(searchCriteria.salesNumber);
    } else if (searchCriteria.receiptNumber) {
      searchResult = findCustomerByReceiptNumber(searchCriteria.receiptNumber);
    } else {
      searchResult = customerData.filter((customer) => {
        return (
          customer.custInfo.Fname === searchCriteria.customerInfo.firstName ||
          customer.custInfo.Lname === searchCriteria.customerInfo.lastName ||
          customer.custInfo.ssn === searchCriteria.customerInfo.ssn ||
          customer.custInfo.HPhone1 ===
            searchCriteria.customerInfo.phoneNumber ||
          customer.custInfo.Id === Number(searchCriteria.customerInfo.Id)
        );
      });
    }
    setSeartchResult(searchResult);
    if (Object.keys(searchResult).length > 0) {
      const customerId = searchResult.custInfo.Id;
      navigate(`/customerInfo/${customerId}`);
    }
  };

  return (
    <Container fluid>
      <h4 className="text-black">
        Search Customer:{" "}
        {searchResult && (
          <b>
            {searchResult.Fname} {searchResult.Lname}
          </b>
        )}
      </h4>
      <Accordion variant="secondary">
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
          <Accordion.Body variant="secondary" eventKey="customer-info">
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter customer first name"
                  onChange={(e) =>
                    setSearchCriteria({
                      ...searchCriteria,
                      customerInfo: {
                        ...searchCriteria.customerInfo,
                        firstName: e.target.value,
                      },
                    })
                  }
                />
                <Form.Control
                  type="text"
                  placeholder="Enter customer last name"
                  onChange={(e) =>
                    setSearchCriteria({
                      ...searchCriteria,
                      customerInfo: {
                        ...searchCriteria.customerInfo,
                        lastName: e.target.value,
                      },
                    })
                  }
                />
                <Form.Control
                  type="text"
                  placeholder="Enter customer SSN"
                  onChange={(e) =>
                    setSearchCriteria({
                      ...searchCriteria,
                      customerInfo: {
                        ...searchCriteria.customerInfo,
                        ssn: e.target.value,
                      },
                    })
                  }
                />
                <Form.Control
                  type="text"
                  placeholder="Enter customer phone number"
                  onChange={(e) =>
                    setSearchCriteria({
                      ...searchCriteria,
                      customerInfo: {
                        ...searchCriteria.customerInfo,
                        phoneNumber: e.target.value,
                      },
                    })
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item
          className="d-flex justify-content-center flex-column"
          eventKey="sales-info"
        >
          <Accordion.Header
            as={Button}
            variant="link"
            eventKey="sales-number"
            className="text-decoration-none margin-0 padding-0 align-items-center"
          >
            Sales Number
          </Accordion.Header>
          <Accordion.Body eventKey="sales-number">
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter sales number"
                  onChange={(e) =>
                    setSearchCriteria({
                      ...searchCriteria,
                      salesNumber: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Button variant="secondary" type="submit" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item
          className="d-flex justify-content-center flex-column"
          eventKey="receipt-info"
        >
          <Accordion.Header
            as={Button}
            variant="link"
            eventKey="receipt-number"
            className="text-decoration-none margin-0 padding-0 align-items-center"
          >
            Receipt Number
          </Accordion.Header>
          <Accordion.Body eventKey="receipt-number">
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter receipt number"
                  onChange={(e) =>
                    setSearchCriteria({
                      ...searchCriteria,
                      receiptNumber: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item
          className="d-flex justify-content-center flex-column"
          eventKey="quote-info"
        >
          <Accordion.Header
            as={Button}
            variant="link"
            eventKey="quote-number"
            className="text-decoration-none margin-0 padding-0 align-items-center"
          >
            Quote Number
          </Accordion.Header>
          <Accordion.Body eventKey="quote-number">
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter quote number"
                  onChange={(e) =>
                    setSearchCriteria({
                      ...searchCriteria,
                      Id: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item
          className="d-flex justify-content-center flex-column"
          eventKey="item-info"
        >
          <Accordion.Header
            as={Button}
            variant="link"
            eventKey="item-information"
            className="text-decoration-none margin-0 padding-0 align-items-center"
          >
            Item Information
          </Accordion.Header>
          <Accordion.Body eventKey="item-information">
            <Form>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Control
                      as="select"
                      onChange={(e) =>
                        setSearchCriteria({
                          ...searchCriteria,
                          itemInformation: {
                            ...searchCriteria.itemInformation,
                            manufacturer: e.target.value,
                          },
                        })
                      }
                    >
                      <option value="">Select manufacturer</option>
                      <option value="Apple">Apple</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Google">Google</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Enter item number"
                      onChange={(e) =>
                        setSearchCriteria({
                          ...searchCriteria,
                          itemInformation: {
                            ...searchCriteria.itemInformation,
                            Id: e.target.value,
                          },
                        })
                      }
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item
          className="d-flex justify-content-center flex-column"
          eventKey="merchant-service-info"
        >
          <Accordion.Header
            as={Button}
            variant="link"
            eventKey="merchant-service-transaction"
            className="text-decoration-none margin-0 padding-0 align-items-center"
          >
            Merchant Service Transaction
          </Accordion.Header>
          <Accordion.Body eventKey="merchant-service-transaction">
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter transaction number"
                  onChange={(e) =>
                    setSearchCriteria({
                      ...searchCriteria,
                      Id: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default CustomerSearchProcess;
