import React from "react";
import StoreHeader from "./storeHeader/StoreHeader";
import StoreSearch from "./storeSearch/StoreSearch";
import StoreCard from "./storeCard/StoreCard";
import axios from "axios";

function StoreDetail(props) {
  const [storeData, setStoreData] = React.useState("");
  const [storeProduct, setStoreProduct] = React.useState("");

  React.useEffect(() => {
    async function fetchStoreData() {
      const responseStore = await axios
        .get(
          `https://saptasoch.herokuapp.com/vendorService/${props.match.params.storeId}`
        )
        .catch(function (error) {
          console.log(error);
        });
      setStoreData(responseStore.data);

      const responseProduct = await axios
        .get(
          `https://saptasoch.herokuapp.com/vendorService/product/${props.match.params.storeId}`
        )
        .catch(function (error) {
          console.log(error);
        });
        console.log("products",responseProduct.data.body)
      setStoreProduct(responseProduct.data.body);
    }

    fetchStoreData();
  }, [props.match.params.storeId]);
  return (
    <>
      <StoreHeader data={storeData} />
      <div className="store">
        <StoreSearch data={storeProduct} />
      </div>
      <StoreCard data={storeProduct} />
    
    </>
  );
}

export default StoreDetail;
