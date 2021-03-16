import styled from "styled-components";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "Components/Loader";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
 
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
`;

const Title = styled.div`
    position: fixed;
    top: 50px;
    transition: top 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    font-size: 40px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(215, 212, 212, 0.3);
    z-index: 2;
    margin-top: 20px;
`;

const Cover = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-auto-rows: 1fr;
   row-gap: 40px;
   padding-top: 100px;
   justify-items: center;
   align-items: center;
   z-index: 1;
   overflow-y: scroll;
   ::-webkit-scrollbar {
        width: 5px;  
        height: 8px;        
    }
    ::-webkit-scrollbar-track {
        background: transparent;       
    }   
    ::-webkit-scrollbar-thumb {
        background-color: transparent;    
        border-radius: 5px;
        &:hover {
            background-color: rgba(255, 255, 255, 0.3); 
        }     
    }
`;

const SLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-align: center;
    &:hover {
        opacity: 0.7;
    }
    h4 {
        align-self: center;
        margin: 20px 0;
        font-size: 20px;
    }
    img{
        width: 250px;
        height: 320px;
        border-radius: 5px;
    }
    
`;


const CollectionPresenter= ({ result, error, loading }) => (
    loading ? (
        <>
            <Helmet>
                <title>Loading | MovieApp2</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        <Container>
            <Helmet>
                <title>
                    {result.name ? result.name + " |" : ""} MovieApp2
                </title>
            </Helmet>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            />
            <Content>
                <Title>
                    {result.name && `${result.name}`}
                </Title>
                <Cover>
                {result.parts && 
                    result.parts.map(part => part.poster_path 
                        ? <SLink to={`/movie/${part.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original${part.poster_path}`} />
                            <h4>{part.original_title.length > 20 ? `${part.original_title.substring(0, 20)}...`: `${part.original_title}` }</h4>
                        </SLink>  
                        : "")}
            </Cover>
            </Content>           
        </Container>

    )
);

CollectionPresenter.propTypes = {
    result: PropTypes.array,
    error: PropTypes.string, 
    loading: PropTypes.bool.isRequired 
};

export default CollectionPresenter;