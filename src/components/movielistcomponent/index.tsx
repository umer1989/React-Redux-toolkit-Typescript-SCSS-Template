/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import './listcomponent.scss'
import convert from '../../utils/commonfunctions'
/* eslint-disable-line no-unused-vars */
import { movie } from '../../pages/movie-container/index'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

export default function MovieList(props: {
    movies: movie[]
    onMovieSelected: any
}) {
    const { movies = [], onMovieSelected } = props
    const classes = useStyles()

    return (
        <Paper>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Episode</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Release Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map(
                            (row: {
                                episode_id: number
                                title: string
                                release_date: string
                            }) => (
                                <TableRow
                                    key={row.episode_id}
                                    onClick={() => onMovieSelected(row)}
                                >
                                    <TableCell component="th" scope="row">
                                        EPISODE {row.episode_id}
                                    </TableCell>
                                    <TableCell>
                                        Episode {convert(row.episode_id)} -{' '}
                                        {row.title}
                                    </TableCell>
                                    <TableCell>{row.release_date}</TableCell>
                                </TableRow>
                            ),
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
