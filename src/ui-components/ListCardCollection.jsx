/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { listLists } from "../graphql/queries";
import ListCard from "./ListCard";
import { getOverrideProps } from "./utils";
import { Auth } from "@aws-amplify/auth";
import { useAuth } from "@aws-amplify/ui-react/internal";
import { Collection, Pagination, Placeholder } from "@aws-amplify/ui-react";
import { API,Storage } from "aws-amplify";
const nextToken = {};
const apiCache = {};

export default function ListCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [pageIndex, setPageIndex] = React.useState(1);
  const [hasMorePages, setHasMorePages] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [isApiPagination, setIsApiPagination] = React.useState(false);
  const [instanceKey, setInstanceKey] = React.useState("newGuid");
  const [loading, setLoading] = React.useState(true);
  const [maxViewed, setMaxViewed] = React.useState(1);
  const pageSize = 5;
  const isPaginated = true;
  const authAttributes = useAuth().user?.attributes ?? {};
  // Function to extract the last part of the URL
  const au = authAttributes["email"]
function getKeywordFromUrl() {
  const pathname = window.location.pathname; // e.g., "/1edit/Valetines"
  const parts = pathname.split('/'); // Split the path by '/'
  
  return parts[parts.length - 1]; // Return the last part
}

// Usage


  React.useEffect(() => {
    nextToken[instanceKey] = "";
    apiCache[instanceKey] = [];
  }, [instanceKey]);
  React.useEffect(() => {
    setIsApiPagination(!!!itemsProp);
  }, [itemsProp]);
  const handlePreviousPage = () => {
    setPageIndex(pageIndex - 1);
  };
  const handleNextPage = () => {
    setPageIndex(pageIndex + 1);
  };
  const jumpToPage = (pageNum) => {
    setPageIndex(pageNum);
  };
  const filteredItems = items.filter(item => item.view === true);
  const loadPage = async (page) => {
    const cacheUntil = page * pageSize + 1;
    const newCache = apiCache[instanceKey].slice();
    let newNext = nextToken[instanceKey];
    while ((newCache.length < cacheUntil || !isPaginated) && newNext != null) {
      setLoading(true);
      const variables = {
        
        limit: pageSize,
        filter: {author: { contains: au }}||{view: { contains: "true" } },
      };
      console.log(au);
      if (newNext) {
        variables["nextToken"] = newNext;
      }
console.log("while loop count");


      const result = (
        await API.graphql({
          query: listLists.replaceAll("__typename", ""),
          variables,
        })
      ).data.listLists;
      newCache.push(...result.items);
      newNext = result.nextToken;
    const notesFromAPI = result.items
      const user = await Auth.currentAuthenticatedUser();
       await Promise.all(
        notesFromAPI.map(async (list) => {
          if (list.image) {
            const url = await Storage.get(list.image);
           
            //console.log(user.attributes.email + "  " + note.author);
            list.image = url;
            console.log(list.image);
          }
          return list;
        })
        );
    }
  
    const cacheSlice = isPaginated
      ? newCache.slice((page - 1) * pageSize, page * pageSize)
      : newCache;
    setItems(cacheSlice);
    setHasMorePages(!!newNext);
    setLoading(false);
    apiCache[instanceKey] = newCache;
    nextToken[instanceKey] = newNext;
  };
  React.useEffect(() => {
    loadPage(pageIndex);
  }, [pageIndex]);
  React.useEffect(() => {
    setMaxViewed(Math.max(maxViewed, pageIndex));
  }, [pageIndex, maxViewed, setMaxViewed]);
  return (
    <div>
      <Collection
        type="list"
        isSearchable={true}
        searchPlaceholder="Search..."
        direction="column"
        justifyContent="left"
        itemsPerPage={pageSize}
        isPaginated={!isApiPagination && isPaginated}
        items={itemsProp || (loading ? new Array(pageSize).fill({}) : items)}
        {...getOverrideProps(overrides, "ListCardCollection")}
        {...rest}
      >
        {(item, index) => {
          if (loading) {
            return <Placeholder key={index} size="large" />;
          }
          return (
            <ListCard
              lst={item}
              key={item.id}
              {...(overrideItems && overrideItems({ item, index }))}
            ></ListCard>
          );
        }}
      </Collection>
      {isApiPagination && isPaginated && (
        <Pagination
          currentPage={pageIndex}
          totalPages={maxViewed}
          hasMorePages={hasMorePages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          onChange={jumpToPage}
        />
      )}
    </div>
  );
}
