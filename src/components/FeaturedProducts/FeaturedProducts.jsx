import React, { useEffect } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";


const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  // useEffect(() => {
  //   console.log(process.env.REACT_APP_API_URL);
  //   const fetchData = async () => {
  //     try {
  //       const data = await axios.get(
  //         process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`,
  //         {
  //           headers: {
  //             Authorization: "bearer " + process.env.REACT_APP_API_TOKEN, 
  //           },
  //         }
  //       );
  //       console.log("check me", data);
  //     } catch (err) {
  //       // Handle errors here
  //       console.error("Error fetching data:", err);
  //     }
  //   };
  //   fetchData();
  // }, []);
  

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
