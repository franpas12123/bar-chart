<template>
  <v-container>
    <v-row class="">
      <v-col class="mt-12" md="6" sm="12" cols="12" align="center" justify="center">
        <apexchart
          type="bar"
          :height="options.chart.height"
          :options="options"
          :series="series"
        ></apexchart>
      </v-col>
      <v-col class="mt-12" md="6" sm="12" cols="12" align="center" justify="center">
        <apexchart
          type="bar"
          :height="options.chart.height"
          :options="options"
          :series="series1"
        ></apexchart>
      </v-col>
      <!-- <v-spacer></v-spacer> -->
      <!-- </v-row> -->
      <!-- <v-row> -->

      <v-col class="mt-12" md="6" sm="12" cols="12" align="center" justify="center">
        <apexchart
          type="bar"
          :height="options.chart.height"
          :options="options"
          :series="series2"
        ></apexchart>
      </v-col>

      <v-col class="mt-12" md="6" sm="12" cols="12" align="center" justify="center">
        <apexchart
          type="bar"
          :height="options.chart.height"
          :options="options"
          :series="series3"
        ></apexchart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Chartv2',
  props: {
    msg: String,
  },
  created() {
    // this.categories.forEach(() => {
    this.series[0].data.push(this.getRndInteger(30, 100));
    this.series1[0].data.push(this.getRndInteger(30, 100));
    this.series2[0].data.push(this.getRndInteger(30, 100));
    this.series3[0].data.push(this.getRndInteger(30, 100));
    // }
    this.options.xaxis.categories = this.categories;
  },
  data() {
    return {
      categories: [
        'Business plan',
        'Marketing plan',
        'Pro-forma financials',
        'Pre-underwriting',
      ],
      options: {
        chart: {
          id: 'vuechart-example',
          height: '500px',
        },
        xaxis: {
          categories: [],
        },
        plotOptions: {
          bar: {
            barHeight: '100%',
            distributed: true,
            dataLabels: {
              position: 'bottom',
              enabled: false,
            },
          },
        },
        legend: {
          position: 'right',
          width: 200,
          horizontalAlign: 'right',
        },
        colors: [
          '#33b2df', // blue
          '#546E7A',
          '#A5978B',
          '#f48024',
          '#2b908f',
          '#d4526e',
          '#13d8aa',
          '#f9a3a4',
          '#90ee7e',
          '#69d2e7',
        ],
        responsive: [
          {
            breakpoint: 800,
            options: {
              legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                width: '100%',
              },
            },
          },
        ],
      },
      series: [
        {
          name: '',
          data: [],
        },
      ],
      series1: [
        {
          name: '',
          data: [],
        },
      ],
      series2: [
        {
          name: '',
          data: [],
        },
      ],
      series3: [
        {
          name: '',
          data: [],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
