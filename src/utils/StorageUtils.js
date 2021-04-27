const StorageUtils = {
    set: (key, val)=> {
      
        window.localStorage.setItem(key, JSON.stringify(val));
    },
    get: (key) => {
        let val = window.localStorage.getItem(key);
        if(val && val != null){
            return JSON.parse(val);
        } else {
            return undefined;
        }
    }
}

export default StorageUtils;