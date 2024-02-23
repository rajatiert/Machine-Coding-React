import { createContext , useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children})=>{

    const [name, setName ] = useState("Rajat");

    return <DataContext.Provider value = {{name , setName}} >
        {children}
    </DataContext.Provider >;
}

export default DataProvider;