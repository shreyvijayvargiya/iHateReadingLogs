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
import { SiTeespring } from 'react-icons/si';
import { DiCode } from 'react-icons/di';

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
                    color: '#4285F4'
                },
                {
                    name: 'Github',
                    url: 'https://github.com/shreyvijayvargiya',
                    icon: <AiOutlineGithub />,
                    color: '#F6D365',
                },
                {
                    name: 'Medium',
                    url: 'https://medium.com/@shreyvijayvargiya26',
                    icon: <AiFillMediumCircle />,
                    color: '#FAF4EE',
                },
                {
                    name: 'Dribbble',
                    icon: <AiOutlineDribbble />,
                    color: '#F92ACC',
                    url: 'https://dribbble.com/witness_trey'
                },
                {
                    name: 'Instagram',
                    icon: <GrInstagram />,
                    color: '#CF556C',
                    url: 'https://www.instagram.com/shreyvj26/'
                },
                {
                    name: 'Teespring',
                    icon: <SiTeespring />,
                    color: '#34A853',
                    url: 'https://my-store-11564192.creator-spring.com'
                }
            ]
        },
    ]);

    const Description = () => {
        return (
            <div className={styles.description}>
                <Grid container alignItems="center" justify="center">
                    <Grid item>
                        <IconButton style={{ color: 'white' }}>
                            <FaLaptopCode />
                        </IconButton>
                    </Grid>
                    <Grid item >
                        <Typography variant="caption">Developer by profession</Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    <Grid item>
                        <IconButton style={{ color: 'white' }}>
                            <GiPencilRuler />
                        </IconButton>
                    </Grid>
                    <Grid item >
                        <Typography variant="caption">Designer by interest</Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    <Grid item>
                        <IconButton style={{ color: 'white' }}>
                            <FaMicrophoneAlt />
                        </IconButton>
                    </Grid>
                    <Grid item >
                        <Typography variant="caption">Journalist by blood</Typography>
                    </Grid>
                </Grid>
            </div>
        );
    };

     return (
        <div className={styles.root}>
            <div container justify="space-between" className={styles.header}>
                <Typography style={{ color: 'white' }} variant="h4">Hello, I am Shrey Vijayvargiya</Typography>
                <Description />
                <br />
                <br />
                <Divider style={{ width: '40%', margin: 'auto', backgroundColor: '#eeeeee' }} />
                <br />
                {data.map(item => {
                    return (
                        <div>
                            {item.socialLinks.map(url => {
                                return (
                                    <a href={url.url} target="_blank">
                                        <IconButton size="medium" color="primary" style={{ color: url.color, fontSize: 32  }}>
                                            {url.icon}
                                            <br />
                                        </IconButton>
                                    </a>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <Divider />
            <br />
            <TableContainer className={styles.tableContainer}>
                <Table stickyHeader className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Topic
                            </TableCell>
                            <TableCell>
                                Article 
                            </TableCell>
                            <TableCell>
                                Code
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
                                        <h2>{item.topic}</h2>
                                        <span style={{ opacity:0.8 }}>{item.description}</span>
                                    </TableCell>
                                    <TableCell>
                                        <a className={styles.topic} target="_blank" href={item.mediumLink}>Read Article</a>
                                    </TableCell>
                                    <TableCell>
                                        <a className={styles.topic} href={item.repository} target="_blank">
                                            <IconButton>
                                                <DiCode style={{ color: '#2d2d2d'}} />
                                            </IconButton>
                                        </a>
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
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    root: {
        margin: 'auto',
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    tableContainer: {
        [theme.breakpoints.down('md')]: {
            width: '107%'
        }
    },
    header: {
        padding: theme.spacing(2),
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#272727',
        "&>div>div>div>span": {
            color: '#eeeeee'
        }
    },
    description: {
        width: '20%',
        margin: 'auto',
        [theme.breakpoints.up('md')]:{
            width: '20%'
        },
        [theme.breakpoints.down('sm')]:{
            width: '100%'
        }
    }
}))