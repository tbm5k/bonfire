import React from 'react';

function Item(){
    return(
        <div className="">
            <div className="flex flex-row justify-between">
                <img className="h-96 w-80 rounded-2xl" src="https://images.freeimages.com/images/large-previews/0d6/blue-flowers-with-macro-4-1400913.jpg" alt=""/>
                <div className="flex flex-col justify-between w-1/2">      
                    <p className="font-bold">Continental Resort</p>   
                    <table className="table-auto text-sm text-left w-full">
                        <thead>
                            <tr>
                                <th>Meal plan</th>
                                <th>4 Day SGR</th>
                                <th>4 Day flight</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-24">
                                <td>Half board</td>
                                <td>Ksh 17000 <br/> Ksh 16000 + 5000 BP</td>
                                <td>Ksh 31500 <br/> Ksh 30500 + 5000 BP</td>
                            </tr>
                            <tr>
                                <td>Full board</td>
                                <td>Ksh 20000 <br/> Ksh 19000 + 5000 BP</td>
                                <td>Ksh 34500 <br/> Ksh 33500 + 5000 BP</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex flex-row justify-between">
                        <button className="bg-bonfireorange hover:bg-darkbonfireorange text-lg font-bold text-white rounded-xl w-40 h-11 mx-auto">Book</button>
                        <button className="bg-bonfireorange hover:bg-darkbonfireorange text-lg font-bold text-white rounded-xl w-40 h-11 mx-auto">Offer</button>
                    </div>
                </div>
            </div>
            <div className="">
                    Image slideshow
            </div>
        </div>
    );
}

export default Item;