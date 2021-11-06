import {useState} from 'react'
import useViewNfts from '../../hooks/useViewNfts'
import { Card, BtnDiv,Btn, Attributes } from './Style'
import tw from 'twin.macro';
import Loader from '../Loader'


function Nft() {
    const [id, setId] = useState(10)
    const {data, isLoading, firstTimeLoading} = useViewNfts(id)
    const { name, description, image, attributes } ={} = data

    const _view = (
     !isLoading && (
        <Card>
        <h1>{name}</h1>
        <img src = {image} alt = 'cool cats'/>
        {
            attributes?.map((i)=>(
                <>
               <Attributes>
                   {i.value}
               </Attributes>
                </>
            ))
        }
        <p>{description?.slice(0,80)}...</p>
       </Card>
     )
    )
    return (
       <>
        {_view}
        {isLoading && <Loader />}

       {
           !firstTimeLoading && (
            <BtnDiv>
            <Btn 
            onClick ={ ()=> setId(id - 1) } 
            disabled = {id==5 || isLoading}
            css = {[ isLoading && tw`bg-green-100`]}
            > {' < '}</Btn>
            <Btn 
            danger
            disabled={isLoading}
             css = {[ isLoading && tw`bg-red-100`]}
              onClick ={ ()=> setId(id + 1)}>{' > '}</Btn>
        </BtnDiv>
           )

       }
        </>
        

    )
}

export default Nft
