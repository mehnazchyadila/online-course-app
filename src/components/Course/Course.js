import React from 'react';
import './Course.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    // console.log(props);
    const {name, price, lecturer, hour} = props.course;
    
    // console.log(name);
    return (
        <div className="course">
            <div className="allCourses">
            <h2><small>{name}</small></h2>
            <h5><small>${price}</small></h5>
            <h5><small>Made By : {lecturer}</small></h5>
            <h5><small><FontAwesomeIcon style={{background_color : "white"}} icon={faPlayCircle} /> {hour}h</small></h5>
            <Button  className="cartBtn"
            onClick={() => props.handleEnroll(props.course)}>
                <button  
                className="btn " onClick={() => props.handleAddProduct(props.course) }>
                </button>Enroll Now</Button>
            </div>
        </div>
    );
};

export default Course;