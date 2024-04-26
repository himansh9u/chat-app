import React from "react";

const GenderCheckBox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text text-gray-300">Male</span>
                    <input
                        name="radio-2"
                        type="radio"
                        className="checkbox border-gray-300"
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text text-gray-300">Female</span>
                    <input
                        name="radio-2"
                        type="radio"
                        className="checkbox border-gray-300"
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckBox;
