import { useEffect, useState } from "react";
import { getData } from "./getData";

export const useData = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getData()
            .then(filas => {
                    console.log(filas);
                    setState({
                        data: filas,
                        loading: false
                    });
            })
    },[]);
    console.log(state.loading)
    return state; 
}