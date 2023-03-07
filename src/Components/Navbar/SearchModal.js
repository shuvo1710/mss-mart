import React from "react";

const SearchModal = () => {
  return (
    <div className="">

      <input type="checkbox" id="searchModal" className="modal-toggle" />

      <label htmlFor="searchModal" className="modal cursor-pointer absolute -top-96 left-0">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </div>
  );
};

export default SearchModal;
