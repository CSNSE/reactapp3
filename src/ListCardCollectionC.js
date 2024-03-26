import { ListCardCollection, CommentCardCollection } from './ui-components';

function ListCardCollectionC() {

    <ListCardCollection
      overrideItems={({ item, index }) => ({
        comments: <CommentCardCollection /> //Add the child collection to the "comments" slot
      })}
    />


return (
  <div>
    <header className="App-header">
     
      <ListCardCollection/>
    </header>
  </div>
);
}
export default ListCardCollectionC;