import React from 'react';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { articlesData } from './data';
import Link from 'next/link';
import { useRouter } from 'next/router';



const Home = () => {
    const [data, setData] = React.useState(articlesData.reverse());
    const styles = useStyles();
    const router = useRouter();

     return (
        <div>
            <h3>List of all Articles</h3>
            <TableContainer>
                <Table stickyHeader className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Topic
                            </TableCell>
                            <TableCell>
                                Link
                            </TableCell>
                            <TableCell>
                                Released Date
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(item => {
                            return (
                                <TableRow  key={item.id} className={styles.tableBodyRow} onClick={() => router.push(item.mediumLink)}>
                                    <TableCell>
                                        <p>
                                            {item.topic}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <a className={styles.topic} target="_blank" href={item.mediumLink}>Read Article</a>
                                    </TableCell>
                                    <TableCell>
                                        {item.date}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default Home;

const useStyles = makeStyles(theme => ({
    tableBodyRow: {
        color: '#2d2d2d',
        '&:hover': {
            backgroundColor: '#EEEEEE',
            cursor: 'pointer'
        },
        '&>a': {
            color: '#2d2d2d'
        }
    },
    topic: {
        color: '#2d2d2d',
    },
    table: {
        width: '80%',
        margin: 'auto'
    }
}))