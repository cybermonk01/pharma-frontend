import React from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

//----Components----
import Loader from "../components/Loader";

//----CSS----
import "./ProductScreen.css";

const SearchResultScreen = ({ match, location, history }) => {
  const [loading, isLoading] = React.useState(false);
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    isLoading(true);
    async function getSearchResults() {
      await axios
        .get(`/api/products?keyword=${match.params.keyword}`)
        .then((d) => {
          isLoading(false);
          if (d.data.products.length > 0) {
            setProducts([...d.data.products]);
          }
        })
        .catch((err) => {
          // console.log('error from search ', err)
        });
    }
    getSearchResults();
  }, [match.params.keyword]);

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", height: "80vh", alignItems: "center" }}>
          <Loader />
        </div>
      ) : (
        <>
          <h4 className="result-Heading">
            Showing results for: "{match.params.keyword}"
          </h4>
          <div className="Search_results_cont">
            {products &&
              products.map((product, idx) => (
                <Card
                  onClick={() => {
                    history.push(`/product/${product._id}`);
                  }}
                  key={idx}
                  style={{ width: "20%", cursor: "pointer" }}
                  className="m-2"
                >
                  <Card.Img variant="top" src={product.image} />

                  <Card.Body>
                    <Card.Title>{product.name} </Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Price: ₹{product.price}
                    </small>
                  </Card.Footer>
                </Card>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default SearchResultScreen;
