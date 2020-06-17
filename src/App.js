import React, {useEffect, useState} from 'react';
import './App.css';
import { Chart } from "react-google-charts";
import Grid from '@material-ui/core/Grid';
import CircularProgress from "@material-ui/core/CircularProgress";
import SimpleSelect from "./DropDown";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";


function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      marginTop: '50dp'
    },
    card: {
      width: '100%',
      height: '100%',
    },
    grid: {
      padding: '50px',
    },
  }));

  const [selection, setSelection] = React.useState('GDP');
  const classes = useStyles();


  return(
      <div className="App">
        <SimpleSelect
            selection = {selection}
            setSelection = {setSelection}>

        </SimpleSelect>
        {(() => {
          switch (selection) {
            case "Population":
              return <Paper className={classes.paper}>
              <Grid container justify={"center"} spacing={2}>
                <Grid container classes={classes.grid} justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/12mdo2VpYp_v8vvEBP3G0y7aDygHDApoNMEPRGRsJCxI/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Top 10 Military Spenders Population',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container classes={classes.grid} justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1FMvHILC2XshVHrS6vnEdNUCJdDxO4z3IGX-852m_yXk/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Bottom 5 Military Spenders Population',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
              </Grid>
              </Paper>;

            case "GDP":
              return <Paper className={classes.paper}>
              <Grid container justify={"center"} spacing={2}>
                <Grid container classes={classes.grid} justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1VNORkhAVTuwayb1sKzJ60QDyKLg0F2OkQ0XntNgbaa0/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Top 10 Military Spenders: GDP (in Billions)',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container classes={classes.grid} justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1lZ1NQ_Yrkv68xE_2SK-CugcGwJ8fkJaORP7NzIFjVgs/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Bottom 5 Military Spenders: GDP (in Billions)',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container classes={classes.grid} justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/16ZMc04274ulUCY0oFsfn4itpQKtNaT24CRGFk4aekZg/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Top 10 Military Spenders: GDP Per Capita',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}

                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container classes={classes.grid} justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1q_ZFK7v_fmzfNhZ-NmCaSvvLHG4ljbP4bdmJn0c8YrQ/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Bottom 5 Military Spenders: GDP Per Capita',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}

                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
              </Grid>
              </Paper>;
            case "Military":
              return <Paper className={classes.paper}>
              <Grid container justify={"center"} spacing={2}>
                <Grid container classes={classes.grid} justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1h7D4gEfPJy4BXO3Dktsu2gZgrMNWwqkibZKyYU86-3A/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Top 10 Military Spenders: Military Spending (in Billions)',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container classes={classes.grid} justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1Mg0O0kiUmC6-Xs0BoDB60aFkAhQftN7OC3r_Ap0Pghk/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Bottom 5 Military Spenders: Military Spending (in Billions)',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                  <Grid container classes={classes.grid} justify={"center"} lg={6}>
                    <Chart
                        chartType="ColumnChart"
                        spreadSheetUrl="https://docs.google.com/spreadsheets/d/1NAOB4qy7iPLY8DAsqJ-4vMIBCOHjeqxvmzeFJdajQ2A/"
                        spreadSheetQueryParameters={{
                          headers: 1,
                          query: 'SELECT A, G, H, I, J, K',
                        }}
                        options={{
                          width: "100%",
                          title: 'Top 10 Military Spenders: Military Spending, Percent of GDP',
                          // hAxis: {
                          // format:'short'
                          // },
                          vAxis: {
                            format: 'long',
                          },
                          animation: {
                            duration: 1000,
                            easing: 'out',
                            startup: true,
                          },
                          legend: {position: 'none'}
                        }}
                        rootProps={{ 'data-testid': '2' }}
                    />
                  </Grid>
                <Grid container classes={classes.grid} justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1oVRpgxNu5i8E598b-UQXSnXqRhN_Lt21w5XQ-X1kf_I/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Bottom 5 Military Spenders: Military Spending, Percent of GDP',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container classes={classes.grid} justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1SPNEk1kIHudzKgwTY1IZ5iGenwbDVa6wnu3Bxgn1TSQ/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Top 10 Military Spenders: Military Spending, Per Capita',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>

                <Grid container classes={classes.grid} justify={"center"} lg={6}>
                    <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1CSkDMbonB3EGrvzCSmCQIGnIRrXKt0DPu4EkffqBk6k/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Bottom 5 Military Spenders: Military Spending, Per Capita',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
              </Grid>
              </Paper>;
            case "Healthcare":
              return <Paper className={classes.paper}>
              <Grid container justify={"center"} spacing={2}>
                <Grid container justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/18TRWppoc894o-CX0sxAcNHyAmLiviG5HqlfbwRSwoQ0/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Top 10 Military Spenders: Healthcare Spending (in Billions)',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1Sy5R3X4AXWJPA4DzuVMsqfxU0-eRNRg1-WSeqmwkNbM/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Bottom 5 Military Spenders: Healthcare Spending (in Billions)',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/17Ee7L3QbPNyT5hlOuq_HIWe3Fbv4Z5iY7kL1yXNbUAc/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Top 10 Military Spenders: Healthcare Spending, Percent of GDP',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1ZXZD1TPkYugdXq6OMpUQDifvmFhs9H7WtSj40_8FksI/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Bottom 5 Military Spenders: Healthcare Spending, Percent of GDP',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/15IbKC_77ci2lMb3_GX_TH5Y_OjZXzXIEuvNHhCeC0ww/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Top 10 Military Spenders: Healthcare Spending, Per Capita',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1f_O2CLt7bFj82X_sMmjcFehl5F065efssrWmVUV0KK0/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Bottom 5 Military Spenders: Healthcare Spending, Per Capita',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
              </Grid>
              </Paper>;
            case "Education":
              return <Paper className={classes.paper}>
              <Grid container justify={"center"} spacing={2}>
                <Grid container justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1dMgs_nO7yBrpKPqpvKLsq1hj6-ZJk4YClyiY1SFC7TU/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Top 10 Military Spenders: Education Spending (in Billions)',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1vncq5k0WuK_9GDeR0hn2HN2_9ClNmh7FXq19TKv2UKo/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Bottom 5 Military Spenders: Education Spending (in Billions)',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1mjcX80yW1I5lJVUg3TKXFw7IusNhY6FkQLFeF4X2LYI/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Top 10 Military Spenders: Education Spending, Percent of GDP',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1-GVPyw_DfHKG78gvvQwnfneM663Le9x8Eaoqhdvolws/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Bottom 5 Military Spenders: Education Spending, Percent of GDP',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1hU-vg0ZLut8QCm8JM_xX0W51-QDW2msozglXVAummTw/"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Top 10 Military Spenders: Education Spending, Per Capita',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
                <Grid container justify={"center"} lg={6}>
                  <Chart
                      chartType="ColumnChart"
                      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1Z-8_opsU6OYWhij7Najl2aBslSCzMrHjXqd4agej1TQ"
                      spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, G, H, I, J, K',
                      }}
                      options={{
                        width: "100%",
                        title: 'Bottom 5 Military Spenders: Education Spending, Per Capita',
                        // hAxis: {
                        // format:'short'
                        // },
                        vAxis: {
                          format: 'long',
                        },
                        animation: {
                          duration: 1000,
                          easing: 'out',
                          startup: true,
                        },
                        legend: {position: 'none'}
                      }}
                      rootProps={{ 'data-testid': '2' }}
                  />
                </Grid>
              </Grid>
              </Paper>;

          }
        })()}

      </div>
  );
}

export default App;
