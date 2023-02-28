/* eslint-disable no-unused-vars */
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import './search.scss'
import { useState } from 'react'
import { movie } from '../../pages/movie-container/index'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

export default function SearchComponent(props: {
    searchInputChangeCallback: any
    handleSelectChange: any
    movieArray: movie[]
    orgMovieArray: movie[]
}) {
    const classes = useStyles()
    const {
        searchInputChangeCallback,
        handleSelectChange: handleSelectChangCallback,
        movieArray,
        orgMovieArray,
    } = props

    const [sortValue, setSortByValue] = useState<string>('')
    const [searched, setSearched] = useState<string>('')

    function sortArray(filteredRows: movie[], sortByValue: string) {
        const array = [...filteredRows]
        if (sortByValue === 'episode') {
            array.sort((a, b) => a.episode_id - b.episode_id)
        } else if (sortByValue === 'year') {
            array.sort(
                (a, b) => +new Date(b.release_date) - +new Date(a.release_date),
            )
        }
        return array
    }

    const handleSortTypeSelectChange = (event: any) => {
        const { value } = event?.target || ''
        setSortByValue(value)
        const clonedMovieArray = [...movieArray]
        const filterArray = sortArray(clonedMovieArray, value)
        handleSelectChangCallback(filterArray)
    }

    const requestSearch = (event: any) => {
        const { value: searchedVal } = event?.target || {}
        const filteredRows = orgMovieArray.filter(row =>
            row.title.toLowerCase().includes(searchedVal.toLowerCase()),
        )
        const filterArray = sortArray(filteredRows, sortValue)
        setSearched(searchedVal)
        searchInputChangeCallback(filterArray)
    }

    return (
        <div className="search-container">
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                    Sort By...
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortValue}
                    onChange={handleSortTypeSelectChange}
                >
                    <MenuItem value="episode">Episode</MenuItem>
                    <MenuItem value="year">Year</MenuItem>
                </Select>
            </FormControl>
            <input
                type="text"
                placeholder="Search Movies..."
                className="prompt"
                onChange={requestSearch}
                value={searched}
            />
        </div>
    )
}
