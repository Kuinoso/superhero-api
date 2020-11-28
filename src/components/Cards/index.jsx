import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import CharacterCard from '../CharacterCard';
import { useStyles } from './styles.js';
import Pagination from "react-js-pagination";
import notFound from '../../images/notFound.png';
import { useHistory } from 'react-router-dom';

export default function Cards() {
    const classes = useStyles();
    const history = useHistory();
    const todos = useSelector(
        (store) => store.SearchReducer.results
    );
    const todosPerPage = 9;
    const [activePage, setCurrentPage] = useState(1);
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    };

    const handleHome = (e) => {
        e.preventDefault();
        history.push('/')
    }

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                {todos.length > 0 &&
                    currentTodos.map((item) => (
                        <CharacterCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.images.md}
                            fullName={item.biography.fullName}
                            alignment={item.biography.alignment}
                            publisher={item.biography.publisher}
                        />
                    ))}
            </div>
            {!(todos.length <= 9) && todos.length > 0 &&
                <div className="pagination">
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={9}
                        totalItemsCount={todos.length}
                        pageRangeDisplayed={10}
                        onChange={handlePageChange}
                    />
                </div>
            }
            {todos.length === 0 &&
                <div className={classes.nfContainer}>
                    <div className={classes.nfTop}>
                        <h2 className={classes.text}>Your search didn't return any results!</h2>
                        <button onClick={handleHome} className={classes.button}>Try another search</button>
                    </div>
                    <img src={notFound} alt='Not found' className={classes.notFound} />
                </div>
            }
        </div>
    )
}