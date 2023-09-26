import React, { useEffect } from 'react';

const local = () => {
    return (
        <div>
            
        </div>
    );
};

export default local;

export const getDonation = () => {
    const allData =(localStorage.getItem('donation'))
    const datas = JSON.parse(allData)
    const data = (datas.length);
    
    
    
   
    return data
}