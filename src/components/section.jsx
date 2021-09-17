import React from 'react'

const Section = ({subhead, mainhead, caption, extra}) => {
    return (
        <div>
            <div className="the-brand">
        <h6>{subhead}</h6>
        <h1>
         {mainhead}
        </h1>
        <p>
        {caption}
        </p>
        <h5 className="link">{extra}</h5>
      </div> 
        </div>
    )
}

export default Section
