import React, { useState } from 'react';
import './Courses.css';
import '../Course/Course';
import {fakeData} from '../../data/fakeData.js';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
const Courses = () => {
    
    // console.log(fakeData)
    const allCourse = fakeData.slice(0,15);
    const [course, setCourse] = useState(allCourse);
    const [cart, setCart] = useState([]);

    const handleEnroll = (course) =>{
        // console.log("Courses Added", course);
        const newCart = [...cart,course];
        setCart(newCart);
    }

    return (
        <div className="courses">  
            <div className="course">
            {/* <h2>This is Course components</h2> */}
             {/* <h4>All Courses : {course.length}</h4> */}
             {
                course.map(course => <Course  
                    course={course} 
                    handleEnroll ={handleEnroll} key= {course.alpha3Code}
                    ></Course>)
             }
            </div>

            <div className="enrolledCourses">
                <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Courses;
