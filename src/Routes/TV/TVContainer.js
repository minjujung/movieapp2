import { tVApi } from "api";
import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component{
    state={
        topRated: null,
        airingToday: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount(){
        try{
            const { data: { results: topRated }} = await tVApi.topRated();
            const { data: { results: airingToday }} = await tVApi.airingToday();
            const { data: { results: popular }} = await tVApi.popular();
            this.setState({
                topRated,
                airingToday,
                popular
            })
        } catch {
            this.setState({
                error: "Can't find TV shows information!"
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render(){
        const { topRated, airingToday, popular, error, loading } = this.state;
        return (
            <TVPresenter 
                topRated={topRated}
                airingToday={airingToday}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}