import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    padding: 20px;
`;

//{nowPlaying && nowPlaying.length > 0 && --> nowPlaying 값이 있는지 확인하고
//이게 참이어야 <Section> 파트가 실행이 됨!!

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) => (
    <>
    <Helmet>
        <title>Movies | MovieApp2</title>
    </Helmet>
    {loading ? <Loader /> : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {nowPlaying.map(movie => (
                        <Poster 
                            key={movie.id} 
                            id={movie.id} 
                            title={movie.original_title} 
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />
                        ))}
                </Section>
                )}
            {upComing && upComing.length > 0 && (
                <Section title="Upcoming">
                    {upComing.map(movie => (
                        <Poster 
                            key={movie.id} 
                            id={movie.id} 
                            title={movie.original_title} 
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />
                        ))}
                </Section>
                )}
            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map(movie => (
                        <Poster 
                            key={movie.id} 
                            id={movie.id} 
                            title={movie.original_title} 
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />
                        ))}
                </Section>
                )}
                {error && <Message color="#eb4d4b" text={error}/>}
        </Container>
    )};
    </>
)

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array, 
    upComing: PropTypes.array,
    popular: PropTypes.array, 
    error: PropTypes.string, 
    loading: PropTypes.bool.isRequired 
};

export default HomePresenter;