

const local = () => {
    return (
        <div>
            
        </div>
    );
};

export default local;

export const getDonation = () => {
    
    const allData =(localStorage.getItem('donation'))
    const data = JSON.parse(allData)
    
    
    if(data?.length <= 0 ){
        return []
    }
    else{
        return data
    }
    
   
   
}