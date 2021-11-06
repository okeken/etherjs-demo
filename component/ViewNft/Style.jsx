import tw, { styled,  css } from 'twin.macro';


export const Card = styled.div(()=>[  
    tw`max-w-sm rounded-xl m-auto bg-gray-50 p-2`,    

    css` 
    img {
        margin-bottom:0.5rem;
    }
    h1 {
            font-size:1.5rem;
        }
    p { 
        margin-top:0.5rem;
        color:green;
    }

   `
])





export const BtnDiv = styled.div(({isSecondary})=>[  
    tw` m-auto text-center `,    
    css` 
   
    `
])

export const Attributes = styled.div(({isSecondary})=>[  
    tw` m-auto text-center `,    
    css` 
        display:inline-flex;
        justify-content:center;
        background:green;
        padding:0.4rem;
        font-size:0.7rem;
        margin:0.2rem;
        font-weight:700;
        border-radius:10px;
        color:whitesmoke;
    `
])

export const Btn = styled.button(()=>[  
    tw``,    
    css` 
            padding:0.2rem 0.6rem;
            background:${props => props.danger ? 'red': 'green'};
            border-radius:5px;
            margin:0.4rem;
            font-weight:600;
            font-size:1.2rem;
            color:white;
    `
])