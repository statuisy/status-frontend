import React from 'react';

const Services = () => {
    return (
        <>
            <div className="container">
                <label className="text-center">Service Center </label>
                <div className="alert alert-info" role="alert">
                    Network Connectivity Issues.
                </div>
                <div className="alert alert-warning" role="alert">
                    Software Upgrades
                </div>
                <div className="alert alert-success" role="alert">
                    This is a success alert.
                </div>
                <div className="alert alert-danger" role="alert">
                    This is a danger alert.
                </div>
            </div >
        </>
    )
}

export default Services;
