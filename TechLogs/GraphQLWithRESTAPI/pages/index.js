import React from 'react';
import { Button, CircularProgress, Paper, Table, TableContainer, TableBody, TableCell, TableRow, TableHead } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 
import { usersQuery } from '../Packages/api/graphql/users';
import { client } from '../Packages/api/client';

const App = () => {
    const [users, setUsers] = React.useState(null);
    const [loaders, setLoaders] = React.useState(true);
    const styles = useStyles();

    function fetchUsersFromGraphQLQuery(){
        setLoaders(true);
        // Invoke the query and log the person's name
        client.query({ query: usersQuery }).then(response => {
            setUsers(response.data.users);
            setLoaders(false);
        }).catch((error) => {
            console.log(error, 'error');
            setLoaders(false);
        });
    }
    React.useEffect(() => {
        fetchUsersFromGraphQLQuery()
    }, []);
    

    const TableData = () => {
        return(
            <TableContainer className={styles.table}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow >
                            <TableCell>
                                id
                            </TableCell>
                            <TableCell>
                                Username
                            </TableCell>
                            <TableCell>
                                Email
                            </TableCell>
                            <TableCell>
                                Company Name
                            </TableCell>
                        </TableRow>
                    </TableHead>
                        {loaders ? (
                            <div style={{ width: '100%', textAlign: 'center'}}>
                                <CircularProgress style={{ color: 'black'}} />
                            </div>
                            ): 
                            <TableBody>
                                {users && users.map(item => {
                                    return (
                                        <TableRow className={styles.content}>
                                            <TableCell>
                                                {item.id}
                                            </TableCell>
                                            <TableCell>
                                                {item.username}
                                            </TableCell>
                                            <TableCell>
                                                {item.email}
                                            </TableCell>
                                            <TableCell>
                                                {item.company.name}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        }
                </Table>
            </TableContainer>
        )
    }
    return (
        <Paper elevation={3} className={styles.root}>
            <h1>Hello, Welcome to the Demo of Calling REST API inside GraphQL queries</h1>
            <a href="/" target="_blank" style={{ textDecoration: 'none'}}>
                <Button variant="contained" color="primary">Read the Installation Process</Button>
            </a>
            <br />
            <br />
            <TableData />
        </Paper>
    )
};
export default App;

const useStyles = makeStyles(theme => ({
    root: {
        width: '50%',
        margin: 'auto',
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    content: {
        "&:hover": {
            backgroundColor: '#eeeeee',
            cursor: 'pointer'
        }
    },
    table: {
        height: '60vh'
    }
}))
