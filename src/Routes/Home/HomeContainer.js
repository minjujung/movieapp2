import { moviesApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

//container presenter pattern
//container: it has data, state and get api -> it will do all the logic => data
//presenter: it shows the data -> just function of component => styles

export default class extends React.Component{
    state = {
        nowPlaying: null,
        upComing: null, 
        popular: null,
        error: null,
        loading: true
    };

    // 'try' to do something, 
    // if it doesnt work 'catch' the error
    // even if succeed or fail, 
    // we gonna do something the end('finally')

    //async : if it uses 'async', it says to javascript
    //"hey! Wair for me until I finish doing something"

    //await : if it uses 'await', it says to javascript
    //"Don't continue until I'm not finished"
    

    async componentDidMount(){
        try{
            const { data:{ results: nowPlaying } } = await moviesApi.nowPlaying();
            const { data:{ results: upComing } } = await moviesApi.upComing();
            const { data:{ results: popular } } = await moviesApi.popular();
            this.setState({
                nowPlaying,
                upComing,
                popular
            })
        } catch{
            this.setState({
                error: "Can't find movies information!"
            })
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const { nowPlaying, upComing, popular, error, loading } = this.state;
        return (
            <HomePresenter  
                nowPlaying={nowPlaying} 
                upComing={upComing} 
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}