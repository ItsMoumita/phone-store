import React from 'react';
import { Link } from 'react-router';

const PhoneCard = ({ phone }) => {
    const { name, image, description } = phone || {};
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Phone" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end mt-4">
                        <Link to="/phone-details">
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;