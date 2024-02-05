import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Header, FoodCardCollection } from "./ui-components";
import { API, Storage } from "aws-amplify";
import "./App.css";
import { getList } from "./graphql/queries";
function FoodCardCollection() {
  return <Put />;
}

function Put() {
  const { cid } = useParams();
  const [cr, setMe] = useState({});
useEffect(() => {
    const queryData = async () => {
      const record = cid
        ? (
            await API.graphql({
              query: getList.replaceAll("__typename", ""),
              variables: { id: cid },
            })
          )?.data?.getList
        : cr;
        if (record.image) {
          record.filename = record.image
          const url = await Storage.get(record.image);
          record.image = url;
          }
        setMe(record);
    };
    queryData();
  }, [cid, cr]);



  return (
    <div>
      <header className="App-header">
       
        <FoodCardCollection edt={cr} />
      </header>
    </div>
  );
}

//export default FoodCardCollection;