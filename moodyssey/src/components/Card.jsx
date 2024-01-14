import React from 'react'

function Card({item}) {
  return (
    <div>
        {
            item.map((val) => (
                <div key={val.id}>
                    <div>
                        <img src={val.img} alt="" />
                    </div>
                    <div>
                        <div>
                            {val.title}
                            {val.author}
                        </div>
                        <div>
                            {val.description}
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Card