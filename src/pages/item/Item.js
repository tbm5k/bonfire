import React from 'react';

function Item(){
    return(
        <div className="">
            <div className="flex flex-row">
                <img className="h-417 w-347 rounded-2xl" src="https://images.freeimages.com/images/large-previews/0d6/blue-flowers-with-macro-4-1400913.jpg" alt=""/>
                <div>
                    <div>
                        <p className="">Continental Resort</p>   
                        <div>
                            meal plan
                        </div>
                    </div>
                    <div>
                        <button className="bg-bonfireorange hover:bg-darkbonfireorange text-lg font-bold text-white rounded-xl w-52 h-11 mx-auto">Book</button>
                        <button className="bg-bonfireorange hover:bg-darkbonfireorange text-lg font-bold text-white rounded-xl w-52 h-11 mx-auto">Offer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;