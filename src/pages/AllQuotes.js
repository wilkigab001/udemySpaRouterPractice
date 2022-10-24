import React from "react";
import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES = [
    {
        id:'q1',
        author:'Gabriel',
        text:'Learning React is fun'
    },
    {
        id:'q2',
        author:'Gabe',
        text:'Learning React can be hard'
    }
]
const AllQuotes = () => {

    return(
        <QuoteList quotes={DUMMY_QUOTES} />
    )
}

export default AllQuotes
