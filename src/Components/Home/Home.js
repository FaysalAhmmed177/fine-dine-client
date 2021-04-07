import React from 'react';
import './Home.css';
import SearchIcon from '@material-ui/icons/Search';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from './../Lunch/Lunch';
import Dinner from './../Dinner/Dinner';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import FastDeliveryImg from '../../Images/adult-blur-blurred.png';
import image2 from '../../Images/chef-cook-food-33614.png';
import image3 from '../../Images/architecture-building-city-2047397.png';

const Home = () => {
    const history = useHistory();
    return (
        <div>
            {/* Banner part starts from here */}
            <div class="banner-image">
                <div className="banner-items">
                    <form action="" className="d-flex justify-content-center">

                        <input type="text" className="form-control w-25 justify-content-center rounded" placeholder="Search food items" />
                        <button className="btn btn-danger"><SearchIcon /></button>

                    </form>
                </div>
            </div>
            {/* Banner part end from here */}

            {/* Tab starts from here */}
            <div className="tab mt-5" style={{height: '200px'}}>

                <Link to="/breakfast" className="mr-5">Breakfast</Link>
                <Link to="/lunch" className="mr-5">Lunch</Link>
                <Link to="/dinner">Dinner</Link>

            </div>
            {/* Tab end from here */}

            <div className="">
                <div className="col-sm-4">
                    <h3>Why you choose us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo deleniti vel reiciendis itaque dolor id, quia voluptates delectus dolorem.</p>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div class="card p-3 mb-3"  >
                            <img style={{ height: '150px', width: '180px' }} src={FastDeliveryImg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div className="d-flex h-50">
                                    <h4>Fast Delivery</h4>
                                </div><br />
                                <div className="d-flex justify-content-center align-items-center justify-content-between">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div class="card p-3 mb-3"  >
                            <img style={{ height: '150px', width: '180px' }} src={image2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div className="d-flex h-50">
                                    <h4>A Good Auto Responder</h4>
                                </div><br />
                                <div className="d-flex justify-content-center align-items-center justify-content-between">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div class="card p-3 mb-3"  >
                            <img style={{ height: '150px', width: '180px' }} src={image3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div className="d-flex h-50">
                                    <h4>Home Delivery</h4>
                                </div><br />
                                <div className="d-flex justify-content-center align-items-center justify-content-between">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer starts from here */}
            <footer className="footer">
                <div className="container">
                    <div className="d-flex row">
                        <div className="col-sm-4">
                            <h4>Fine Dine</h4>
                        </div>
                        <div className="col-sm-4">
                            <Link to="#">About our food</Link><br />
                            <Link to="#">Read our blogs</Link><br />
                            <Link to="#">Sign up to deliver</Link><br />
                            <Link to="#">Add your Resturant</Link>
                        </div>
                        <div className="col-sm-4">
                            <Link to="#">Get help</Link><br />
                            <Link to="#">Read all FAQ</Link><br />
                            <Link to="#">View all cities</Link><br />
                            <Link to="#">Resturant near me</Link>
                        </div>
                    </div><br /><br />
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="text-secondary">Copyright &#169; faysalahmmed177@gmail.com</p>
                        </div>
                        <div className="justify-content-end">
                            <Link to="#" className="mr-5">Privacy Policy</Link>
                            <Link to="#" className="mr-5">Terms of use</Link>
                            <Link to="#" className="mr-5">Pricing</Link>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer section end here */}
        </div>
    );
};

export default Home;