import React from 'react';
import logo from './images/svgs/Robot.png'

const LastSection = () => {
    return (
        <div>
            <div className="rounded-lg shadow-lg my-20 flex flex-row">
                <div
                    className="lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12">
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-extrabold mb-4">Subscribe to get our offers first</h3>
                        <p className="mb-4 leading-relaxed">Want to hear from us when we have new offers? Sign up for
                            our newsletter and we'll email you every time we have new sale offers.</p>
                        <div>
                            <input type="email" placeholder="Enter email address"
                                   className="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4"/>
                            <button type="submit" className="bg-red-600 py-3 rounded-lg w-full">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
                    <img src={logo} className="h-96"/>
                </div>
            </div>

            <div
                className="border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center py-5 text-sm">
                <div className="mb-4">
                    <a href="#" className="mx-2.5">About</a>
                    <a href="#" className="mx-2.5">Privacy Policy</a>
                    <a href="#" className="mx-2.5">Terms of Services</a>
                </div>
                <p>&copy; Copyright Reserved 2021</p>
            </div>
        </div>
    );
};

export default LastSection;
