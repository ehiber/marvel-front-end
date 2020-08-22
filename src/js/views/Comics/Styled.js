import styled from "styled-components"

export const Comic = styled.div`
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 20px;
    
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }

`

export const Img = styled.img`

    border-radius : 3px;
    width: 100%;
    height: auto;

`

export const Container = styled.div`

    font-size: 1.5vh;
    font-family: 'Roboto', sans-serif;
    margin: .1em;
    padding: 10px;
    
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
          

`

export const FullDescription = styled.div`

    text-align:left;   
    color : black;
    
    h1{
        margin-bottom:30px;
        font-weight: bold;
    }

    h2{
        font-weight: bold;
    }

    p{
        margin-top: 30px;
        font-size: 3vh;
    }
`