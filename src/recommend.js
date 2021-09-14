import { h } from 'preact';
import { frequentlyBoughtTogether } from '@algolia/recommend-js';
import recommend from '@algolia/recommend';

const recommendClient =  recommend('1EP0YWM713', 'ef9361999973186831870c2a17981e0f');
const indexName = 'YOUR_INDEX_NAME';
const currentObjectID = 'YOUR_OBJECT_ID';

frequentlyBoughtTogether({
  container: '#frequentlyBoughtTogether',
  recommendClient,
  indexName,
  objectIDs: [currentObjectID],
  itemComponent({ item }) {
    return (
      <pre>
        <code>{JSON.stringify(item)}</code>
      </pre>
    );
  },
});