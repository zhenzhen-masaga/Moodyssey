import React from 'react'
import { ArticleList } from '../assets/ArticleList'

function Filter({itemFilter, filterItems, setItems}) {
  return (
    <>
        <div>
            {
                itemFilter.map(val => (
                    <button className='bg-red-200 mx-5' onClick={() => filterItems(val)}>
                        {val}
                    </button>
                ))
            }            
            <button className='bg-red-200 mx-5' onClick={() => setItems(ArticleList)}>All</button>
        </div>
    </>
  )
}

export default Filter