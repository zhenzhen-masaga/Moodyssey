import { useState } from 'react';
import { ArticleList } from '../assets/ArticleList';
import Card from '../components/Card';
import Filter from '../components/Filter';

function Articles() {
  const [ item, setItems ] = useState(ArticleList);
  const itemFilter = [...new Set(ArticleList.map((val) => val.filter))]

  const filterItems = (cat) => {
    const newItems = ArticleList.filter((newval) => newval.filter === cat)
    setItems(newItems)
  }

  return (
    <>
      <div>
        <h2>Blog Filter</h2>
        <Filter
          itemFilter = {itemFilter}
          filterItems = {filterItems}
          setItems = {setItems}
        />

        <Card item = {item} />
      </div>
    </>
  );
}

export default Articles
