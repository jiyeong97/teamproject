import React from 'react';
import '../css/App.css';

const Term1 = () => {
    return(
        <div>
                    <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>SODV1101 - Programming Fundamentals</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : January 10,2023</div>
                                <div>End Date : April 28, 2023</div>
                                <div>Delivery Mode : In Class</div>
                                <div>Seats Available : 40</div>
                                <div>Tuition : $1857.00</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>Tuesday : 9:30AM ~ 11:00AM</div>
                                <div>Thursday : 9:30AM ~ 11:00AM</div>
                                <button type="button" id="register" className='register' onClick={() => alert('Course has been registered, Congrats!')}>Register</button>
                            </div>
                        </div>
                    </div>
                    <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>TECH1101 - Web and Internet Fundamentals</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : January 10,2023</div>
                                <div>End Date : April 28, 2023</div>
                                <div>Delivery Mode : In Class</div>
                                <div>Seats Available : 40</div>
                                <div>Tuition : $1857.00</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>Monday : 12:30PM ~ 02:00PM</div>
                                <div>Wednesday : 12:30PM ~ 02:00PM</div>
                                <button type="button" id="register" className='register' onClick={() => alert('Course has been registered, Congrats!')}>Register</button>
                            </div>
                        </div>
                    </div>
                    <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>TECH1102 - Internet of Things</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : January 10,2023</div>
                                <div>End Date : April 28, 2023</div>
                                <div>Delivery Mode : In Class</div>
                                <div>Seats Available : 40</div>
                                <div>Tuition : $1857.00</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>Monday : 9:30AM ~ 11:00AM</div>
                                <div>Wednesday : 9:30AM ~ 11:00AM</div>
                                <button type="button" id="register" className='register' onClick={() => alert('Course has been registered, Congrats!')}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
          
    );
}

export default Term1;