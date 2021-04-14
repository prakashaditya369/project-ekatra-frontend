import React, { useState, useEffect } from "react";
import Card from "./SingleCard";
import Loading from "./Loading";
import Heading from "../shared/Heading";
import Upvotes from "../shared/Upvote";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { baseUrl } from "../shared/baseUrl";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


function PopularPart() {
  
  
  var [recentdata, setData] = useState()
  var [mosthelpful, setHelpful] = useState()
  var [mostvisited, setVisited] = useState()
  if(mosthelpful===undefined)
  {
    fetch(baseUrl+"api/posts/popular")
  .then(responsehelpful=> responsehelpful.json())
  .then(datahelpful => {setHelpful(datahelpful)})
  }
  if(mostvisited===undefined)
  {
    fetch(baseUrl+"api/posts/visited")
  .then(responsevisited=> responsevisited.json())
  .then(datavisited => {setVisited(datavisited)})
  }
  
  
  if(recentdata===undefined){
  fetch(baseUrl+"api/posts/latest")
  .then(response=> response.json())
  .then(data => {setData(data)})
  }
  
  function crouselSlides(){
  var array = []
  for(var i=0;i<recentdata.length;i++)
  {
  array.push(<SplideSlide><Card resource={recentdata[i]} /></SplideSlide>)
  }
  return array;
  }
  
  function SpecialCard(props){
  return <div className = "home-card-main">
  <div className="home-card-main-part">
  <div className ="home-card-title"><Heading link={props.link} heading={props.heading}/></div>
  <div className = "home-card-description">{props.description}</div>
  <div className = "home-card-conclude"><span>{"Shared By "+props.author} </span><span><Upvotes id={props.id} upvote={props.upvote}/></span></div>
  </div>
  </div>
  }
  
  
  return (
    <div className="popular-part">
   {mosthelpful===undefined? <Loading />:<div className= "home-card-theme">
  <div className = "home-card-reason">Most Helpful Resource</div>
   <SpecialCard heading={mosthelpful.heading} link={mosthelpful.link} description = {mosthelpful.description} author={mosthelpful.author} id={mosthelpful._id} upvote = {mosthelpful.upvotes}/>
</div>}
{mostvisited===undefined? <Loading />: <div className= "home-card-theme" style={{flexWrap: "wrap-reverse"}}>
  <SpecialCard heading={mostvisited.heading} link={mostvisited.link} description = {mostvisited.description} author={mostvisited.author} id={mostvisited._id} upvote = {mostvisited.upvotes}/>
  <div className = "home-card-reason">Most Visited Resource</div>
</div>}
      <div className="sub-home-heading">
      Recently Added:
      </div>
      <div className="sub-recent-post-part">
        <div className="sub-recent-main-post-part">
          {recentdata===undefined? <Loading />:
        	<Splide options = {{type: "loop", perPage: 4, width: "100%", perMove: 1, gap: "1.3em", pagination: false, autoplay: true,keyboard: true, drag: true, breakpoints: {576: {perPage: 1}, 768: {perPage: 2}, 991: {perPage: 3}}}}>
        	{crouselSlides()}
        	</Splide>
        	}
        </div>
      </div>
    </div>
  )
}

export default PopularPart;

