import React, { Component } from 'react';
import getQuestion from './Question';
import Brain from '../../images/brain.png';

const numberOfQuestions = 15;

const SearchContainer = ({ question, answersButtons, onButtonClick }) => (
    <div className='justify-center'>
        <h2 className='dark:text-white text-xl w-full flex justify-center'>
            {question}
        </h2>
        <div className='w-full flex justify-center p-5'>
            {answersButtons.map(answer => <button className='rounded-3xl bg-teal-600 text-white font-semibold py-2 px-16 hover:bg-slate-700 dark:hover:bg-slate-800 hover:text-white duration-300 inline-flex items-center justify-center'
                key={Math.random()} onClick={() => onButtonClick(answer.value)}>{answer.title}
            </button>)}
        </div>
    </div>
);

const FinishedContainer = ({ characterMatch }) => (
    <div className='justify-center'>
        <div className='w-full flex justify-center'>
            <img src={characterMatch.image} alt="" />
        </div>
        <h2 className='dark:text-white text-3xl w-full flex justify-center p-5'>
            {characterMatch.name}
        </h2>
    </div>
);

class Chatbot extends Component {
    state = {
        alreadyFeatures: [],
        params: [],
        answers: [],
        answersButtons: [],
        question: '',
        characterMatch: null,
        loading: true,
        finished: false
    };

    componentWillMount() {
        this.setQuestion();
    }

    setQuestion = async () => {
        this.setState({ loading: true });

        try {
            const { alreadyFeatures, params } = this.state;
            const { answers, characterMatch, feature, param, question } = await getQuestion(alreadyFeatures, params, this.state.answers);
            this.setState({ params: [...this.state.params, param], alreadyFeatures: [...this.state.alreadyFeatures, feature], answersButtons: answers, characterMatch, question, loading: false, finished: this.state.finished || !question });
        } catch (error) {
            console.log(error);
            this.setState({ loading: false });
            alert('Error on get Question');
        }
    }

    onButtonClick = async answer => {
        await this.setState({ answers: [...this.state.answers, answer] });
        await this.setQuestion();

        const finished = this.state.answers.length === numberOfQuestions;

        if (finished)
            this.setState({ finished: true });
    }

    render() {
        const { question, answersButtons, loading, finished, characterMatch } = this.state;

        return (
            <div className="bg-white dark:bg-slate-800">
                <section className='container mx-auto pb-20 py-5 lg:px-10'>
                    <h1 className="text-3xl font-bold text-center mb-10 text-violet-800 p-5 dark:text-violet-400">I WILL DISCOVER YOUR SUPERHERO!</h1>
                    <div className="w-full flex justify-center">
                        <img src={Brain} alt="" />
                    </div>
                    <div className='grid grid-rows-1  my-5 mx-5 bg-slate-100 rounded-md shadow-md py-6 dark:bg-slate-700'>
                        {loading && !finished ? <h2 className='dark:text-slate-300 text-2xl w-full flex justify-center'>Loading...</h2> : null}
                        {!loading && !finished ? <SearchContainer question={question} answersButtons={answersButtons} onButtonClick={this.onButtonClick} /> : null}
                        {finished ? <FinishedContainer characterMatch={characterMatch} /> : null}
                    </div>
                </section>
            </div>
        );
    }
}

export default Chatbot;