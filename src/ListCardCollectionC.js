import { ListCardCollection, CommentCardCollection } from './ui-components';

function ListCardCollectionC() {
return(
    <ListCardCollection
      overrideItems={({ item, index }) => ({
        comments: <CommentCardCollection /> //Add the child collection to the "comments" slot
      })}
    />

);

}
export default ListCardCollectionC;