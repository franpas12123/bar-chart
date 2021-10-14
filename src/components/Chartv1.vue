<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col class="mt-12" md="10" sm="12" cols="12" align="center" justify="center">
        <v-data-table
          :headers="headers"
          :items-per-page="10"
          class="elevation-1"
        ></v-data-table>
      </v-col>

      <v-col class="mt-12" md="10" sm="12" cols="12" align="center" justify="center">
        <apexchart
          type="bar"
          :height="options.chart.height"
          :options="options"
          :series="series"
        ></apexchart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Chart',
  props: {
    msg: String,
  },
  created() {
    const baseURL = process.ENV.VUE_APP_NETLIFY_URL;
    // axios.get()
    console.log(baseURL);
    this.categories.forEach((category) => {
      const count = this.getRndInteger(30, 100);
      const item = {
        serviceType: category,
        count,
      };
      this.series[0].data.push(count);
      this.items.push(item);
    });
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
      items: [],
      headers: [
        { text: 'Service', value: 'serviceType' },
        { text: 'Count', value: 'count' },
      ],
      options: {
        chart: {
          id: 'vuechart-example',
          height: '500px',
        },
        title: {
          text: 'Report',
          align: 'left',
          // floating: true,
          style: {
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            color: 'black',
          },
          margin: 30,
        },
        // theme: {
        //   mode: 'dark',
        //   palette: 'palette1',
        // },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [],
        },
        plotOptions: {
          bar: {
            barHeight: '80%',
            distributed: true,
            borderRadius: 5,
          },
        },
        legend: {
          position: 'right',
          width: 150,
          horizontalAlign: 'right',
          fontFamily: 'Roboto',
        },
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
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function() {
              return '';
            },
          },
        },
      },
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
