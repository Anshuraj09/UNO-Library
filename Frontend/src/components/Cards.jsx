import React from 'react';

function Cards({ item }) {
  return (
    <>
    <div className="mt-4 my-3 p-3">
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-250 dark:bg-slate-900 dark:text-white dark:border">
      <figure>
        <img
          src={item.image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
          alt={item.title || "Product Image"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.title || "Shoes!"}
          {item.isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{item.description || "If a dog chews shoes whose shoes does he choose?"}</p>
        <div className="card-actions flex justify-between">
          <div className="badge badge-outline">${item.price}</div>
          <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]  hover:bg-pink-500 hover:text-white">Buy Now</div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Cards;
