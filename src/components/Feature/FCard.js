import React from 'react'

const FCard = (props) => {
  return (
    <div>
          <div className=" card">
          <img src={props.imgsrc} alt="" className="img-responsive center-block d-block mx-auto"/>
          <div className="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
             {props.content}
            </p>
          </div>
        </div>


    </div>
  )
}

export default FCard