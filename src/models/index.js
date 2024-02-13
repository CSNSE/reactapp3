// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { List, Note } = initSchema(schema);

export {
  List,
  Note
};