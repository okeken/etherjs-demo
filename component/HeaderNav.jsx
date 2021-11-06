import tw, { styled } from 'twin.macro';

export const HeaderNav = ()=>{
    return(
    <>
    <Heading>
   Cool Cats NFts
    </Heading>
    </>)
}


export const Heading = styled.h1(({isSecondary})=>[  
    tw`text-purple-600  text-center my-5 text-6xl font-bold font-mono
    `,  
])

