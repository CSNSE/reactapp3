import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { ListHeader, EditList } from "./ui-components";
import { API, Storage } from "aws-amplify";
import "./App.css";
import { getList } from "./graphql/queries";
function EditLists() {
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
        <ListHeader />
        <EditList list={cr} />
      </header>
    </div>
  );
}

export default EditLists;