<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col class="mt-6" md="10" sm="12" cols="12" align="center" justify="center">
        <v-data-table
          :headers="headers"
          :items="items"
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
  async created() {
    const baseURL = process.env.VUE_APP_NETLIFY_URL;
    const randomNum = Math.floor(Math.random() * (3 - 0) + 0);
    let res;
    console.log('num: ', randomNum);
    if (randomNum == 0) {
      res = await axios.get(`${baseURL}/technicalAssistanceChartData.json`);
    } else {
      res = await axios.get(`${baseURL}/technicalAssistanceChartData${randomNum}.json`);
    }
    this.items = res.data;
    this.items.forEach((item) => {
      // const count = this.getRndInteger(30, 100);
      // const item = {
      //   serviceType: category,
      //   count,
      // };
      this.series[0].data.push(item.value);
      this.options.xaxis.categories.push(item.name);
      // this.items.push(item);
    });
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
        { text: 'Service', value: 'name' },
        { text: 'Count', value: 'value' },
      ],
      options: {
        chart: {
          id: 'vuechart-example',
          height: '500px',
        },
        title: {
          text: '',
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
