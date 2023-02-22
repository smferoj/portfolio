import React,{useState, useEffect} from 'react';
import './portfolio.css';
import {Container, Row, Col} from "reactstrap";
import products from "../../assets/datasource/product";
import category_1 from "../../assets/images/dataentry-1.png";
import category_2 from "../../assets/images/web-design-2.jpg";
import category_3 from "../../assets/images/web-development-1.png";
import ProductCard from '../../components/UI/product-card/ProductCard';

const Portfolio = () => {
  const [category, setCategory] = useState("ALL");
  const[allProducts, setAllProducts] = useState(products);
  
  useEffect(()=>{
    if(category === "ALL"){
      setAllProducts(products)
    }
    if(category === "DATA_ENTRY"){
       const filteredProducts = products.filter((item) =>item.category === "Data_Entry");
       setAllProducts(filteredProducts);
    }
    if(category === "WEB_DESIGN"){
      const filteredProducts = products.filter((item) =>item.category === "Web_Design");
      setAllProducts(filteredProducts);
   }
   if(category === "WEB_DEVELOPMENT"){
    const filteredProducts = products.filter((item) =>item.category === "Web_Development");
    setAllProducts(filteredProducts);
 }
  },[category]);

  return (
    <div id="portfolio">
      <Container>
        <Row className="portfolio_container">
        <Col lg='12' className='text-center'>
        <h2 className='headline'> SHOWCASE</h2>
        </Col>
        <Col lg='12'>
         <div className="item_category d-flex align-items-center justify-content-center gap-1">
          <button className={`${category === "ALL" ? "itemBtnActive" : ""}`} onClick={()=>setCategory("ALL")}>
            All
          </button>
          <button className={` d-flex align-items-center gap-2 ${category === "DATA_ENTRY" ? "itemBtnActive" : ""}`} onClick={()=>setCategory("DATA_ENTRY")}>
          <img src={category_1} alt=""/> Data Entry
          </button>
          <button className={`d-flex align-items-center gap-2 ${category === "WEB_DESIGN" ? "itemBtnActive" : ""}`} onClick={()=>setCategory("WEB_DESIGN")}>
          <img src={category_2} alt="" /> Web Design
          </button>
          <button className={` all_btn d-flex align-items-center gap-2 ${category === "WEB_DEVELOPMENT" ? "foodBtnActive" : ""}`} onClick={()=>setCategory("WEB_DEVELOPMENT")}
          >
         <img src={category_3} alt="" /> Web Development
          </button>
         </div>
        </Col>
        {allProducts.map((item)=>(
         <Col lg="4"  md="6" sm="12"  key={item.id}
          className='mt-5'>
            <ProductCard item={item} />
          </Col>
        ))}
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio

















