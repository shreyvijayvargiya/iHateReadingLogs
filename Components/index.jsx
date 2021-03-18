import React from 'react';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table, IconButton, Grid, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { articlesData } from './data';
import { useRouter } from 'next/router';
import { FaLaptopCode, FaMicrophoneAlt } from 'react-icons/fa';
import { GiPencilRuler, GiMute } from 'react-icons/gi';
import { MdCardTravel } from 'react-icons/md';
import { GrInstagram } from 'react-icons/gr';
import { AiOutlineGithub, AiFillMediumCircle, AiFillLinkedin, AiOutlineDribbble } from 'react-icons/ai';


const Home = () => {
    const styles = useStyles();
    const router = useRouter();

     const [data, setData] = React.useState([
        {
            name:'Shrey Vijayvargiya',
            socialLinks: [
                {
                    name: 'LinkedIn',
                    url: 'https://linkedin.com/in/shrey-vijayvargiya-b62a3a105',
                    icon: <AiFillLinkedin />,
                },
                {
                    name: 'Github',
                    url: 'https://github.com/shreyvijayvargiya',
                    icon: <AiOutlineGithub />,
                },
                {
                    name: 'Medium',
                    url: 'https://medium.com/@shreyvijayvargiya26',
                    icon: <AiFillMediumCircle />,
                },
                {
                    name: 'Dribbble',
                    icon: <AiOutlineDribbble />,
                    url: 'https://dribbble.com/witness_trey'
                },
                {
                    name: 'Instagram',
                    icon: <GrInstagram />,
                    url: 'https://www.instagram.com/shreyvj26/'
                }
            ]
        },
    ]);

    const Description = () => {
        return (
            <Grid container>
                <Grid item>
                    <Grid container alignItems="center">
                        <Grid item>
                            <IconButton style={{ color: 'black' }}>
                                <FaLaptopCode />
                            </IconButton>
                        </Grid>
                        <Grid item >
                            <Typography variant="caption">Developer by profession</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center">
                        <Grid item>
                            <IconButton style={{ color: 'black' }}>
                                <GiPencilRuler />
                            </IconButton>
                        </Grid>
                        <Grid item >
                            <Typography variant="caption">Designer by interest</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center">
                        <Grid item>
                            <IconButton style={{ color: 'black' }}>
                                <FaMicrophoneAlt />
                            </IconButton>
                        </Grid>
                        <Grid item >
                            <Typography variant="caption">Journalist by blood</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center">
                        <Grid item>
                            <IconButton style={{ color: 'black' }}>
                                <MdCardTravel />
                            </IconButton>
                        </Grid>
                        <Grid item >
                            <Typography variant="caption">Traveller by nature</Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        )
    }

     return (
        <div className={styles.root}>
            <Grid container justify="space-between">
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <h5>Who I am</h5>
                   <Description />
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={!2}>
                    <h5>Reach me here:</h5>
                    {data.map(item => {
                        return (
                            <div className={styles.iconContainer}>
                                {item.socialLinks.map(url => {
                                    return (
                                        <a href={url.url} target="_blank">
                                            <IconButton color="primary" style={{ color: 'black' }}>
                                                {url.icon}
                                            </IconButton>
                                        </a>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Grid>
            </Grid>
            <Divider />
            <br />
            <p>Articles</p>
            <TableContainer className={styles.tableContainer}>
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
                        {articlesData.reverse().map(item => {
                            return (
                                <TableRow  key={item.id} className={styles.tableBodyRow}>
                                    <TableCell>
                                        <h5>{item.topic}</h5>
                                        <span style={{ opacity:0.8 }}>{item.description}</span>
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
        width: '100%',
    },
    root: {
        width: '80%',
        margin: 'auto',
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            width: '98%'
        }
    },
    tableContainer: {
        maxHeight: '70vh',
        [theme.breakpoints.down('md')]: {
            height: '100vh'
        }
    }
}))