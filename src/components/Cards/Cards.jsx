import React from 'react';
import styles from "./Cards.module.css"
import { Card, CardContent, Typography, Grid, CardMedia } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...'
    }
    return (
        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardMedia component="img" alt="Infected" height="120" image="https://cdn.technologynetworks.com/tn/images/thumbs/jpeg/640_360/previous-covid-19-infection-prevents-reinfection-for-at-least-6-months-343087.jpg" title="Infected" />
                    <CardContent>

                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardMedia component="img" alt="Recovery" height="120" image="https://www.horizon-europe-infodays2021.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-05/health_0.jpg?itok=HlqLEmN-" title="Recovered" />
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveriesfrom COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardMedia component="img" alt="Death" height="120" image="https://static.scientificamerican.com/sciam/cache/file/87B40CEF-61FD-4351-85F7621BA6C17951.jpg" title="Death" />
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards

