import React from "react";
import {Link} from "react-router-dom";
function About(){

document.title = "About | Project Ekatra"
return <div className = "aboutpage">
<p>Project Ekatra is an initiative to collect all educational contents available freely on internet at one place for ease of use and greater accessibility. Many times, we do a lot of searching and we find some educational content that we desire should have known about earlier and so wish to share that resource with others. Project Ekatra is an attempt to collect all those resources at one place so that others can also know about the resources, you have came to know after a lot of finding.</p>
<h1>What Can We Share?</h1>
<p>You can share any education related web page that exists on world wide web and you think is worth sharing. It can a website of educational interest. It can be a tool that increases learner's productivity like Miro. It can be a tweet on twitter, a post on reddit or a post on facebook/instagram that can be useful for a learner. It can be a youtube channel that you think teaches something very effectively. It can be a twitter user or reddit community or facebook page or instagram user that shares educational content. Please ensure that the resource you are sharing is free to some extent.</p>
<p>Don't share anything just to promote it. The only aim of this initiative is to make a worthy educational content accessible to everyone. We don't support piracy but if an educational content exists on internet and people can access it, then only sharing will make it more useful.</p>
<h1>How To Contribute?</h1>
<p>You can contribute a resource using <Link to="/contribute" target="_blank">Contribute</Link> page. You need to enter the resource title and url (url must be of the format <em>protocol://domain</em>, for example: <a href = "https://miro.com">https://miro.com</a>). You need to provide a short description of the resource, why and how is it useful? Then comes the important part. You need to provided the category of the resource. You can choose from existing one or can create your own category. You should choose the category wisely because this will ensure that the resource reaches the right seeker.</p>
<p style={{textAlign: "center",color: "rgba(0,177,64,0.8)"}}><strong>Keep Learning, Keep Sharing, Keep Learning
</strong></p>
</div>
}

export default About;
