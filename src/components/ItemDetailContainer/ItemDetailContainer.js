import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader/Loader'
import './ItemDetailContainer.scss'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(()=>{
    
        setLoading(true)

        pedirDatos()
            .then( resp => {
                setItem( resp.find( prod => prod.id === Number(itemId)) )
        
            })
            .finally(()=>{
            
                setLoading(false)
            })

    }, [itemId])

    return (
        <div className="itemDetailContainer container">
            {
                loading
                
                    ? <Loader />
                    : <ItemDetail {...item} />
            }


        </div>
    )
}