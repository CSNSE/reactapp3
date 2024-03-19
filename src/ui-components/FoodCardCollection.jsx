/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { listNotes } from "../graphql/queries";
import FoodCard from "./FoodCard";
import { getOverrideProps } from "./utils";
import { Auth } from "@aws-amplify/auth";
import { Collection, Pagination, Placeholder } from "@aws-amplify/ui-react";
import { API,Storage } from "aws-amplify";
const nextToken = {};
const apiCache = {};
export default function FoodCardCollection(props) {
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
  // Function to extract the last part of the URL
function getKeywordFromUrl() {
  const pathname = window.location.pathname; // e.g., "/1edit/Valetines"
  const parts = pathname.split('/'); // Split the path by '/'
  return parts[parts.length - 1]; // Return the last part
}


// Usage
const keyword = getKeywordFromUrl();
console.log(keyword); // "Valetines"

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
  const loadPage = async (page) => {
    const cacheUntil = page * pageSize + 1;
    const newCache = apiCache[instanceKey].slice();
    let newNext = nextToken[instanceKey];
    while ((newCache.length < cacheUntil || !isPaginated) && newNext != null) {
      setLoading(true);
      const variables = {
        limit: pageSize,
        filter: { ListName: { contains: keyword } },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
console.log("while loop count");

      const result = (
        await API.graphql({
          query: listNotes.replaceAll("__typename", ""),
          variables,
        })
      ).data.listNotes;
      newCache.push(...result.items);
      newNext = result.nextToken;
    const notesFromAPI = result.items
      const user = await Auth.currentAuthenticatedUser();
       await Promise.all(
        notesFromAPI.map(async (note) => {
          if (note.image) {
            const url = await Storage.get(note.image);
            console.log(note.image + "  " + note.name);
            //console.log(user.attributes.email + "  " + note.author);
            note.image = url;
            console.log(note.image);
          }
          return note;
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
        isSearchable={false}
        searchPlaceholder="Search..."
        direction="column"
        justifyContent="left"
        itemsPerPage={pageSize}
        isPaginated={!isApiPagination && isPaginated}
        items={itemsProp || (loading ? new Array(pageSize).fill({}) : items)}
        {...getOverrideProps(overrides, "FoodCardCollection")}
        {...rest}
      >
        {(item, index) => {
          if (loading) {
            return <Placeholder key={index} size="large" />;
          }
          return (
            <FoodCard
              fc={item}
              key={item.id}
              {...(overrideItems && overrideItems({ item, index }))}
            ></FoodCard>
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