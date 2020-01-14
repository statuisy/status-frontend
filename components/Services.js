import React from 'react';

const Services = () => {
    return (
        <>
            <div className="">
                <label className="text-center">Service Center </label>
            </div >
            <div className="alert alert-info" role="alert">
                Network Connectivity Issues.
            </div>
            <div className="alert alert-warning" role="alert">
                Software Upgrades
            </div>
            <div className="alert alert-success" role="alert">
                This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-danger" role="alert">
                This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
        </>
    )
}

export default Services;
