import tw, { styled } from 'twin.macro';
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { LoadDiv, LoaderWrapper } from './style'

function Loader() {
    return (
    <> <LoaderWrapper>    

                    <div>
                     <Skeleton  width='6rem' height='2rem'/>
                     </div>  
                    <div>
                     <Skeleton  width='20rem' height='20rem'/>
                     </div> 
                     <Skeleton width ='10rem' height ='2rem'/>
                     <Skeleton width ='20rem' height ='6rem'/>
                   
            
            </LoaderWrapper>      
    </>
    )
}

export default Loader




export const Heading = styled.h1(({isSecondary})=>[  
    tw`text-purple-600  text-center my-10 text-6xl font-bold font-mono
    `,
  
])


