import React, { Component } from 'react';
import '../../assets/styles/gallery.css';
import axios from 'axios';

import { Link } from 'gatsby';

let galleryCards = [{
    title: "SPEC",
    sub: "ELECTROTHON",
    link: "",
    img: `url('https://source.unsplash.com/random/?food')`
},
{
    title: "SPEC",
    sub: "SPECFEST",
    link: "",
    img: `url('https://source.unsplash.com/random/?food')`
},
{
    title: "SPEC",
    sub: "WORKSHOP",
    link: "",
    img: `url('https://source.unsplash.com/random/?food')`
},
{
    title: "SPEC",
    sub: "EVENTS",
    link: "",
    img: `url('https://source.unsplash.com/random/?food')`
}];


export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
        };
    }
    componentDidMount() {
        console.log("Mount running");
        axios.get('https://spec-backend.herokuapp.com/api/gallery/')
          .then(response => {
            console.log(response.data)
            this.setState({ data: response.data });
          })
          .catch(err => {
            console.log(err)
          })
      }
    GalleryComponent = galleryCards.map((props) => {
        return (
            <div className="internal-con ">
                <div className="background" style={{ backgroundImage: props.img }}></div>
                <div className="text">
                    <div class="gallery-card-title-medium">{props.title}</div>
                    <div className="gallery-card-title">{props.sub}</div>
                    <div className="gallery-card-title-small">Gallery collection</div>
                    <button className="btn-prime"><Link to = {`/gallery/gallerysecondary/?name=${props.sub}`}>Gallary</Link></button>
                </div>
            </div>
        )
    });
    render() {
        return (
            <div className='gallery-main gallery-color-scheme'>
                <div className="main-container">
                    {this.GalleryComponent}
                </div>
            </div>
        )
    }
}