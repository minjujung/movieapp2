import { collectionApi } from "api";
import React from "react";
import CollectionPresenter from "./CollectionPresenter";

export default class extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            result: null,
            error: null,
            loading: true,
        };
    }

    async componentDidMount(){
        const{
            match: {
                params: { id }
            },
            history: { goBack },
        } = this.props;
        const parseId = parseInt(id);
        if(isNaN(parseId)){
            return goBack();
        }
        let result = null;
        try {
                ({ data: result } = await collectionApi.collection(parseId));
            console.log(result);
        } catch {
            this.setState({ error: "Can't find any collection of this movie😥"})
        } finally {
            this.setState({ loading: false, result })
        }
    }

    render(){
        const { result, error, loading } = this.state;
        return(
            <CollectionPresenter
                result={result}
                error={error}
                loading={loading}
            />
        );
    }
}