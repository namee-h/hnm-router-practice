import React, { useEffect, useState } from "react";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router";
const ProductDetail = ({}) => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("ddd", data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div className="detail-area mt-5">
      <Container>
        <Row>
          <Col lg={6} className="text-end">
            <img  src={product?.img} />
          </Col>
          <Col lg={6}>
            <div>{product?.title}</div>
            <div>₩{product?.price}</div>
            <div>{product?.choice === true ? "Conscious choice" : " "}</div>
            <div>{product?.new === true ? "신제품" : " "}</div>
            <div className="add-area">
              <Dropdown className="mt-3">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  사이즈선택
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    {product?.size[0]}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    {product?.size[1]}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {product?.size[2]}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="dark" className="mt-4">
                추가
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
