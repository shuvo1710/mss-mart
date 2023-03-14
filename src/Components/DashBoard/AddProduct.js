import React from 'react';

const AddProduct = () => {
    return (
        <div className='pt-10'>
            <from className="">
                <div className='grid grid-cols-12 gap-x-2'>
                    <div className="form-control w-full lg:col-span-4">
                        <label className="label"> What is category name?</label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full input-sm" />
                    </div>
                    <div className="form-control w-full lg:col-span-4">
                        <label className="label"> What is productType?</label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full input-sm" />
                    </div>
                    <div className="form-control w-full lg:col-span-4">
                        <label className="label">Price?</label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full input-sm" />
                    </div>
                    <div className="form-control w-full lg:col-span-4">
                        <label className="label"> discount percent?</label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full input-sm" />
                    </div>
                    <div className="form-control w-full lg:col-span-4">
                        <label className="label">Discount Name</label>
                        <select className="select select-bordered w-full select-sm">
                            <option selected className='p-4'>Summer</option>
                            <option className='p-4'>Winter</option>
                            
                        </select>
                    </div>
                    <div className="form-control w-full lg:col-span-4">
                        <label className="label"> Title?</label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full input-sm" />
                    </div>
                    
                    <div className="form-control w-full lg:col-span-6">
                        <label className="label"> details?</label>
                        <textarea className="textarea textarea-bordered textarea-lg w-full" placeholder="Bio"></textarea>
                        
                    </div>
                    <div className="form-control w-full lg:col-span-6">
                        <label className="label"> deliveryPolicy?</label>
                        <textarea className="textarea textarea-bordered textarea-lg w-full" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control w-full lg:col-span-6">
                        <label className="label"> returnAndExchangePolicy?</label>
                        <textarea className="textarea textarea-bordered textarea-lg w-full" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control w-full lg:col-span-6">
                        <label className="label"> description?</label>
                        <textarea className="textarea textarea-bordered textarea-lg w-full" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control w-full lg:col-span-4">
                        <label className="label">Pick your product Rating?</label>
                        <select className="select select-bordered w-full select-sm">
                            <option selected className='p-4'>1</option>
                            <option className='p-4'>2</option>
                            <option className='p-4'>3</option>
                            <option className='p-4'>4</option>
                            <option className='p-4'>5</option>
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-x-2'>
                    <div className='lg:col-span-4'>
                        <label className="label"> Product Size S</label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full input-sm" />
                    </div>
                    <div className='lg:col-span-4'>
                        <label className="label"> Product Size M</label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full input-sm" />
                    </div>
                    <div className='lg:col-span-4'>
                        <label className="label"> Product Size L</label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full input-sm" />
                    </div>
                    <div className='lg:col-span-4'>
                        <label className="label"> Product Size XL</label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full input-sm" />
                    </div>
                    <div className='lg:col-span-4'>
                        <label className="label"> Product Size XXL</label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full input-sm" />
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-x-2'>
                    <div className="form-control w-full lg:col-span-4">
                        <label className="label">Pick 1st Image </label>
                        <input type="file" className="file-input file-input-bordered w-full file-input-sm" />
                    </div>
                    <div className="form-control w-full lg:col-span-4">
                        <label className="label">Pick 2nd file </label>
                        <input type="file" className="file-input file-input-bordered w-full file-input-sm" />
                    </div>
                    <div className="form-control w-full lg:col-span-4">
                        <label className="label">Pick 3rd file </label>
                        <input type="file" className="file-input file-input-bordered w-full file-input-sm" />
                    </div>
                    <div className="form-control w-full lg:col-span-4">
                        <label className="label">Pick 4th file </label>
                        <input type="file" className="file-input file-input-bordered w-full file-input-sm" />
                    </div>
                    <div className="form-control w-full lg:col-span-4">
                        <label className="label">Pick 5th file </label>
                        <input type="file" className="file-input file-input-bordered w-full file-input-sm" />
                    </div>
                </div>
            </from>
        </div>
    );
};

export default AddProduct;