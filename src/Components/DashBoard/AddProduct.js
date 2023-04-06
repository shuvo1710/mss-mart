import React, { useState } from "react";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const submitForm =async  (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true);
    const category = form.category.value;
    const productType = form.productType.value;
    const price = form.price.value;
    const discount = form.discount.value;
    const discountName = form.discountName.value;
    const title = form.title.value;
    const details = form.details.value;
    const deliveryPolicy = form.deliveryPolicy.value;
    const returnAndExchangePolicy = form.returnAndExchangePolicy.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const sSize = form.sSize.value;
    const mSize = form.mSize.value;
    const lSize = form.lSize.value;
    const xlSize = form.xlSize.value;
    const xxlSize = form.xxlSize.value;
    const image1 = form.image1.files[0];
    const image2 = form.image2.files[0];
    const image3 = form.image3.files[0];
    const image4 = form.image4.files[0];
    const image5= form.image5.files[0];
    
    // const files=[image1, image2, image3, image4]
    // const formData = new FormData();

    // for (let i = 0; i < files.length; i++) {
    //   formData.append('image', files[i]);
    //   console.log("i", i)
    // }

    // const apiKey = '30c45cbf02b1638a98e8ac99319f604c';

    // const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    //   method: 'POST',
    //   body: formData,
    // })
    // const data = await response.json();
    // // setImages(data.data.image);
    // setLoading(false);

    // console.log("data", data)
    // console.log("image", images)


  
 
    
  


  };
  return (
    <div className="pt-10">
      <form onSubmit={submitForm} className="">
        <div className="grid grid-cols-12 gap-x-2">
          <div className="form-control w-full lg:col-span-4">
            <label className="label"> What is category name?</label>
            <input
              type="text"
              name="category"
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
          </div>
          <div className="form-control w-full lg:col-span-4">
            <label className="label"> What is productType?</label>
            <input
              type="text"
              name="productType"
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
          </div>
          <div className="form-control w-full lg:col-span-4">
            <label className="label">Price?</label>
            <input
              type="number"
              name="price"
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
          </div>
          <div className="form-control w-full lg:col-span-4">
            <label className="label"> discount percent?</label>
            <input
              type="number"
              name="discount"
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
          </div>
          <div className="form-control w-full lg:col-span-4">
            <label className="label">Discount Name</label>
            <select
              name="discountName"
              className="select select-bordered w-full select-sm"
            >
              <option value="summer" selected className="p-4">
                Summer
              </option>
              <option value="winter" className="p-4">
                Winter
              </option>
            </select>
          </div>
          <div className="form-control w-full lg:col-span-4">
            <label className="label"> Title?</label>
            <input
              type="text"
              name="title"
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
          </div>

          <div className="form-control w-full lg:col-span-6">
            <label className="label"> details?</label>
            <textarea
              name="details"
              className="textarea textarea-bordered textarea-lg w-full"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="form-control w-full lg:col-span-6">
            <label className="label"> deliveryPolicy?</label>
            <textarea
              name="deliveryPolicy"
              className="textarea textarea-bordered textarea-lg w-full"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="form-control w-full lg:col-span-6">
            <label className="label"> returnAndExchangePolicy?</label>
            <textarea
              name="returnAndExchangePolicy"
              className="textarea textarea-bordered textarea-lg w-full"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="form-control w-full lg:col-span-6">
            <label className="label"> description?</label>
            <textarea
              name="description"
              className="textarea textarea-bordered textarea-lg w-full"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="form-control w-full lg:col-span-4">
            <label className="label">Pick your product Rating?</label>
            <select
              name="rating"
              className="select select-bordered w-full select-sm"
            >
              <option value="1" selected className="p-4">
                1
              </option>
              <option value="2" className="p-4">
                2
              </option>
              <option value="3" className="p-4">
                3
              </option>
              <option value="4" className="p-4">
                4
              </option>
              <option value="5" className="p-4">
                5
              </option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-2">
          <div className="lg:col-span-4">
            <label className="label"> Product Size S</label>
            <input
              name="sSize"
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
          </div>
          <div className="lg:col-span-4">
            <label className="label"> Product Size M</label>
            <input
              name="mSize"
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
          </div>
          <div className="lg:col-span-4">
            <label className="label"> Product Size L</label>
            <input
              name="lSize"
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
          </div>
          <div className="lg:col-span-4">
            <label className="label"> Product Size XL</label>
            <input
              name="xlSize"
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
          </div>
          <div className="lg:col-span-4">
            <label className="label"> Product Size XXL</label>
            <input
              name="xxlSize"
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-2">
          <div className="form-control w-full lg:col-span-4">
            <label className="label">Pick 1st Image </label>
            <input
              name="image1"
              type="file"
              className="file-input file-input-bordered w-full file-input-sm"
            />
          </div>
      


          <div className="form-control w-full lg:col-span-4">
            <label className="label">Pick 2nd file </label>
            <input
              name="image2"
              type="file"
              className="file-input file-input-bordered w-full file-input-sm"
            />
          </div>
          <div className="form-control w-full lg:col-span-4">
            <label className="label">Pick 3rd file </label>
            <input
              name="image3"
              type="file"
              className="file-input file-input-bordered w-full file-input-sm"
            />
          </div>
          <div className="form-control w-full lg:col-span-4">
            <label className="label">Pick 4th file </label>
            <input
              name="image4"
              type="file"
              className="file-input file-input-bordered w-full file-input-sm"
            />
          </div>
          <div className="form-control w-full lg:col-span-4">
            <label className="label">Pick 5th file </label>
            <input
              name="image5"
              type="file"
              className="file-input file-input-bordered w-full file-input-sm"
            />
          </div>
        </div>

        <div className="justify-center items-center text-center my-8">
          <button className="py-2 px-6 bg-black text-white font-semibold rounded-md  border border-white">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
