
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getImagenes = async () => {
        const newImagenes = await getGifs(category)
        setImages (newImagenes)
        setLoading(false)
    }

    useEffect(()=> {
        getImagenes();
    }, [] )


    return {
        images,
        isLoading
    };
};
