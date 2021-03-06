import React, { useContext } from 'react';
import '../style/Search.scss'
import { SearchContext } from '../contexts/SearchContext';

const Search = ({ memes, filteredMemes, setFilteredMemes, tipChoosed, setTipChoosed }) => {

    const { search, setSearch } = useContext(SearchContext);

    const handleSearch = (e) => {
        setSearch(e.target.value)
        let actualMemesList = [];
        let newMemesList = [];
        if (e.target.value !== "") {
            actualMemesList = memes;
            newMemesList = actualMemesList.filter(meme => {
                return meme.name.toLowerCase().includes(e.target.value.toLocaleLowerCase());
            })
        } else {
            newMemesList = memes;
        }
        setFilteredMemes(newMemesList)
    }

    const handleSearchClick = () => {
        setTipChoosed(!tipChoosed);
    }

    const handleSelect = (e) => {
        setTipChoosed(false);
        setSearch(e.currentTarget.getAttribute('value'))
        let actualMemesList = [];
        let newMemesList = [];
        if (e.target.value !== "") {
            actualMemesList = memes;
            newMemesList = actualMemesList.filter(meme => {
                return meme.name.toLowerCase().includes(e.currentTarget.getAttribute('value').toLocaleLowerCase());
            })
        } else {
            newMemesList = memes;
        }
        setFilteredMemes(newMemesList)
    }

    let tips = filteredMemes.sort((memeA, memeB) => memeA.name.localeCompare(memeB.name)); //posortowanie

    tips = filteredMemes.map(meme => (
        <li className="filter__dropdown-item" key={meme.id} value={meme.name} onClick={handleSelect}>{meme.name}</li>
    ));


    return (
        <div className="filter__panel">
            <input className="filter__search-input" type="text" value={search} onClick={handleSearchClick} onChange={handleSearch} />
            {tipChoosed ?
                <i onClick={handleSearchClick} className="filter__arrowIcon filter__arrowIcon--arrowUp fas fa-caret-up"></i> :
                <i onClick={handleSearchClick} className="filter__arrowIcon filter__aarrowIcon--arrowDown fas fa-caret-down"></i>
            }
            <ul className={`filter__dropdown ${tipChoosed ? "filter__dropdown--visible" : "filter__dropdown--hidden"}`}>
                {tipChoosed && tips}
            </ul>
        </div>
    );
}

export default Search;