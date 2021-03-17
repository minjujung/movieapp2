import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import ReactCountryFlag from "react-country-flag";


//span은 margin을 안가져서 margin 값을 줘도 작동 X

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
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
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    z-index: 1;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 30px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        margin-left: 30px;
        width: 5px;  
        height: 8px;
        background-color: transparent;         
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;       
    }   
    ::-webkit-scrollbar-thumb {
        background-color: transparent;    
        border-radius: 5px;
        &:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }     
    }
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.span`
    &:last-child {
        display: inline-block;
        img {
            margin-right: 10px;
        }
    }
`;

const Button = styled.span`    
    background-color: #E2B616;
    color: black;
    padding: 3px 5px;
    border-radius: 5px; 
    font-weight: 800;
`;

const StarsOuter = styled.div`
    position: relative;
    display: inline-block;
    margin-right: 5px;
    ::before {
        content: "\f005 \f005 \f005 \f005 \f005";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        color: white;
        opacity: 0.5;
    }
`;

const StarsInner = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: ${props => props.width}%;
    ::before {
        content: "\f005 \f005 \f005 \f005 \f005";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        color: #E2B616;
    }
`;

const Divider = styled.span`
    margin: 0 10px;
`;

const Flag = styled(ReactCountryFlag)`
`;

const Overview = styled.p`
    font-size: 12px;
    line-height: 1.5; 
    opacity: 0.7;
    width: 70%;
`;

const LongDivider = styled.hr`
    border-top: 3px solid white;
    opacity: 0.3;
    border-radius: 3px;
    margin: 20px 0;
`;

const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
`;

const Video = styled.div`
    display: flex;
    height: 50%;
    overflow-x: scroll;
    iframe {
        margin: 20px 0;
        margin-right: 20px;
        height: 200px;
    }
    ::-webkit-scrollbar {
        width: 5px;  
        height: 8px;        
    }
    ::-webkit-scrollbar-track {
        background: transparent;       
    }   
    ::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.3);    
        border-radius: 5px;     
    }
`;

const Companies = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    img {
        width: 110px;
        height: 80px;
        border-radius: 5px;
    }
`;

const CompaniesInfo = styled.div`
    display: flex;
    font-size: 15px;
    margin-top: 20px;
    overflow-y: hidden;
    overflow-x: scroll;
    div {
        margin-right: 30px;
    }
    h4 {
        margin-top: 5px;
    }
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

const Creators = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    img {
        width: 150px;
        height: 200px;
        border-radius: 5px;
    }
`;

const CreatorsInfo = styled.div`
    display: flex;
    font-size: 15px;
    margin-top: 20px;
    div {
        margin-right: 20px;
    }
    h4 {
        margin-top: 5px;
    }
`;

const Seasons = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    img {
        width: 150px;
        height: 200px;
        border-radius: 5px;
    }
`;

const SeasonsInfo = styled.div`
    display: flex;   
    font-size: 15px;
    margin-top: 20px;
    overflow-y: hidden;
    overflow-x: scroll;
    div {
        margin-right: 20px;
    }
    h4 {
        margin-top: 5px;
        margin-bottom: 20px;
    }
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

const Collection = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    img {
        width: 250px;
        height: 300px;
        border-radius: 5px;
    }
`;

const CollectionInfo = styled.div`
    display: flex;
    font-size: 15px;
    margin-top: 20px;
    div {
        margin-right: 20px;
    }
    h4 {
        margin-top: 5px;
    }
`;

const Homepage = styled.div`
    font-size: 25px;
    color: white;
    span {
        &:hover {
            color: rgba(225, 225, 225, 0.7);
            text-decoration: underline solid white;
        }
    }
`;

const DetailPresenter = ({ result, error, loading }) => (
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
              <title>{result.original_title 
                    ? result.original_title 
                    : result.original_name} | MovieApp2</title>
          </Helmet>
        <Backdrop 
            bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}>
        </Backdrop>
        <Content>
            <Cover
                bgImage={
                    result.poster_path
                        ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                        : ("/noPosterSmall.PNG")
                } 
                />
        <Data>
            <Title>
                {result.original_title 
                    ? result.original_title 
                    : result.original_name} 
            </Title>
            <ItemContainer>
                <Item>
                    {result.release_date && result.release_date !== null
                        ? result.release_date.substring(0, 4) 
                        : ""}
                    {result.first_air_date && result.first_air_date !== null
                        ? result.first_air_date.substring(0, 4)
                        : ""}
                </Item>
                <Divider>•</Divider>
                <Item>
                    {result.runtime 
                        ? result.runtime
                        : result.episode_run_time} min
                </Item>
                <Divider>•</Divider>
                <Item>
                    {result.genres && 
                        result.genres.map((genre, index) => 
                            index === result.genres.length - 1 ? genre.name : `${genre.name} / `
                        )}
                </Item>
                <Divider>•</Divider>
                <Item>
                    {result.imdb_id 
                    ? (<Button><a href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank">IMDb</a></Button>)
                    : ""
                    }
                </Item>
                <Item>
                    {result.imdb_id ? <Divider>•</Divider> : ""}
                    <StarsOuter>
                        <StarsInner width={result.vote_average && `${result.vote_average}`*10} />
                    </StarsOuter>
                    {result.vote_average && `${result.vote_average}`}
                </Item>
                <Divider>•</Divider>
                <Item>
                    {result.production_countries && 
                        result.production_countries.map(country => country.iso_3166_1 
                            ? <Flag countryCode={`${country.iso_3166_1}`} svg style={{ width: "2em", height: "2em"}} />
                            : ""
                        )}
                </Item>
            </ItemContainer>
            <Overview>
                {result.overview}
            </Overview>
            <LongDivider></LongDivider>
            <VideoContainer>
                Videos
                <Video>
                    {result.videos.results &&
                        result.videos.results.map(video => video.site === "YouTube" 
                            ? <iframe src={`https://www.youtube.com/embed/${video.key}`}
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'
                            />
                            : "Can't find videos in YouTube😥")}
                </Video>
            </VideoContainer>
            <LongDivider></LongDivider>
            <Companies>
                {result.production_companies && <span>Companies</span>}
                <CompaniesInfo>
                    {result.production_companies &&
                        result.production_companies.map(company => company.logo_path 
                            ? <div>
                                <img src={`https://image.tmdb.org/t/p/original${company.logo_path}`}/> 
                                <h4>{`${company.name}`}</h4>
                            </div> 
                            : <div>
                                <img src="/noPosterSmall.PNG"/> 
                                <h4>{`${company.name}`}</h4>
                            </div> 
                        )}
                </CompaniesInfo>
            </Companies>
            {result.created_by && <LongDivider></LongDivider>}
            <Creators>
                {result.created_by && <span>Creators</span>}
                <CreatorsInfo>
                    {result.created_by &&
                        result.created_by.map(people => people.profile_path 
                            ? <div>
                                <img src={`https://image.tmdb.org/t/p/original${people.profile_path}`}/> 
                                <h4>{`${people.name}`}</h4>
                            </div>
                            : <div>
                                <img src="/noPosterSmall.PNG"/> 
                                <h4>{`${people.name}`}</h4>
                            </div>
                        )}
                </CreatorsInfo>
            </Creators>
            {result.seasons && <LongDivider></LongDivider>}
            <Seasons>
                {result.seasons && <span>Seasons</span>}
                <SeasonsInfo>
                    {result.seasons &&
                            result.seasons.map(season => season.poster_path 
                                ? <div>
                                    <img src={`https://image.tmdb.org/t/p/original${season.poster_path}`}/> 
                                    <h4>{`${season.name}`}</h4>
                                </div>
                                : <div>
                                    <img src="/noPosterSmall.PNG"/> 
                                    <h4>{`${season.name}`}</h4>
                                </div>
                            )}
                </SeasonsInfo>
            </Seasons>
            {result.belongs_to_collection && <LongDivider></LongDivider>}
            <Collection>
                {result.belongs_to_collection && <span>Collection</span>}
                <CollectionInfo>
                    {result.belongs_to_collection
                                ? <Link to={`/collection/${result.belongs_to_collection.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/original${result.belongs_to_collection.poster_path}`}/> 
                                    <h4>{`${result.belongs_to_collection.name}`}</h4>
                                </Link>
                                : ""
                            }
                </CollectionInfo>
            </Collection>
            {result.homepage && <LongDivider></LongDivider>}
            <Homepage>
                {result.homepage 
                        ? <span><a href={`${result.homepage}`} target="_blank">More Infromation</a></span>
                        : ""
                        }
            </Homepage>
        </Data>
        </Content>
      </Container>
    )
);

DetailPresenter.propTypes = {
    result: PropTypes.array,
    error: PropTypes.string, 
    loading: PropTypes.bool.isRequired 
};

export default DetailPresenter;