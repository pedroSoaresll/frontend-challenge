import React from 'react'
import {Grid, Paper} from '@material-ui/core'
import SectionTitle from "../shared/section-title/SectionTitle";
import PaperContentSomeFacilities from "../shared/paper-content-some-facilities/PaperContentSomeFacilities";

export default class SomeFacilitiesBox extends React.Component {

  render() {

    return (
      <Grid className="some-facilities-box" container spacing={24} xs={12}>

        <Grid item xs={12}>

          <SectionTitle text="Algumas Facilidades"/>
        </Grid>

        <Grid container spacing={40} className="some-facilities-content">

          <Grid item xs={4}>
            <Paper>
              <PaperContentSomeFacilities icon="history" text="Histórico das pizzas que você viu"/>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper>
              <PaperContentSomeFacilities icon="shopping-cart" text="Pedidos aguardando fechar a compra"/>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper>
              <PaperContentSomeFacilities icon="star" text="Só as favoritas"/>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}