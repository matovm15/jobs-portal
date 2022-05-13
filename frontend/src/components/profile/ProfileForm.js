/* eslint-disable */
import React from "react";

const ProfileForm = () => {
  return (
    <form className="default-form">
      <div className="row">
        <div className="form-group col-lg-6 col-md-12">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Jerome" />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Job Title</label>
          <input type="text" name="name" placeholder="UI Designer" />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Phone</label>
          <input type="text" name="name" placeholder="0 123 456 7890" />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Email address</label>
          <input type="text" name="name" placeholder="creativelayers" />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Website</label>
          <input type="text" name="name" placeholder="www.jerome.com" />
        </div>
        <div className="form-group col-lg-3 col-md-12">
          <label>Current Salary($)</label>
          <select>
            <option>40-70 K</option>
            <option>50-80 K</option>
            <option>60-90 K</option>
            <option>70-100 K</option>
            <option>100-150 K</option>
          </select>
        </div>
        <div className="form-group col-lg-3 col-md-12">
          <label>Expected Salary($)</label>
          <select className="chosen-select">
            <option>120-350 K</option>
            <option>40-70 K</option>
            <option>50-80 K</option>
            <option>60-90 K</option>
            <option>70-100 K</option>
            <option>100-150 K</option>
          </select>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <input type="text" name="name" placeholder="5-10 Years" />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Age</label>
          <select className="chosen-select">
            <option>23 - 27 Years</option>
            <option>24 - 28 Years</option>
            <option>25 - 29 Years</option>
            <option>26 - 30 Years</option>
          </select>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Education Levels</label>
          <input type="text" name="name" placeholder="Certificate" />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Languages</label>
          <input type="text" name="name" placeholder="English, Turkish" />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Categories </label>
          <select
            data-placeholder="Categories"
            className="chosen-select multiple"
            multiple
          >
            <option value="Banking" readOnly>Banking</option>
            <option value="Digital&amp;Creative" readOnly>Digital &amp; Creative</option>
            <option value="Retail" readOnly>Retail</option>
            <option value="Human Resources" readOnly>Human Resources</option>
            <option value="Management" readOnly>Management</option>
          </select>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Allow In Search &amp; Listing</label>
          <select className="chosen-select" >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <button className="theme-btn btn-style-one">Save</button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
