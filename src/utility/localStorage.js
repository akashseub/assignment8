const getStoredDonatedItems = () =>{
    const storedDonatedItem = localStorage.getItem('donated_items');

    if(storedDonatedItem){
        return JSON.parse(storedDonatedItem);
    }return [];
};

const saveDonatedItem = id =>{
    const storedDonatedItems = getStoredDonatedItems();
    const exists = storedDonatedItems.find(donatedItem => donatedItem === id)
    if(!exists){
        storedDonatedItems.push(id);
        localStorage.setItem('donated_items', JSON.stringify(storedDonatedItems))
    }
}

export{saveDonatedItem, getStoredDonatedItems}