<template>
  <div>
    <p>Hello, Welcome here</p>
    <v-row>
      <v-col md="3">
        <v-card class="pa-3 text-center elevation-3">
          <p>Total Deaths (Nigeria)</p>
          <h2>{{8767}}</h2>
          <v-progress-linear
            height="6"
            color="primary"
            value="40"
          ></v-progress-linear>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="pa-3 text-center elevation-3">
          <p>Total Deaths (USA)</p>
          <h2>500</h2>
          <v-progress-linear
            height="6"
            color="warning"
            value="50"
          ></v-progress-linear>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="pa-3 text-center elevation-3">
          <p>Total Deaths (Canada)</p>
          <h2>8500</h2>
          <v-progress-linear
            height="6"
            color="error"
            value="60"
          ></v-progress-linear>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="pa-3 text-center elevation-3">
          <p>Total Deaths (Netherlands)</p>
          <h2>8500</h2>
          <v-progress-linear
            height="6"
            color="green"
            value="40"
          ></v-progress-linear>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="8">
        <v-card height="260" class="pa-4 elevation-3">
          <p>Sales Overview</p>
          <!-- <chart-bar /> -->
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card class="pa-4 elevation-3 text-center">
          <p>Customer Feedback</p>
          <h3>7823876</h3>
          <v-progress-circular size="90" color="primary" value="75" width="6">
            <v-icon>insert_link</v-icon>
          </v-progress-circular>
          <div class="d-flex mt-4 justify-center">
            <div class="px-5">
              <p class="mb-0">92%</p>
              <small>Positive</small>
            </div>
            <v-divider vertical></v-divider>
            <div class="px-5">
              <p class="mb-0">92%</p>
              <small>Positive</small>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6">
        <v-card class="pa-4">
          <p>Countries Overview</p>
          <MapChart
            :countryData="{ US: 4, CA: 7, GB: 8, IE: 14, ES: 21 }"
            highColor="#ff0000"
            lowColor="#aaaaaa"
            countryStrokeColor="#909090"
            defaultCountryFillColor="#dadada"
            LangUser="fr"
          />
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card class="pa-4">
          <p>New Orders</p>
          <v-data-table :headers="headers" :items="orders">
            <template v-slot:item.status="{ item }">
              <v-chip
                small
                :color="item.status == 'done' ? 'success' : 'error'"
                >{{ item.status.toUpperCase() }}</v-chip
              >
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// import BarChart from '~/components/BarChart.vue'
// import ChartBar from '~/components/ChartBar.vue'
import MapChart from 'vue-map-chart'

export default {
  components: { MapChart },
  data() {
    return {
      summary: [],
      orders: [
        {
          id: 1,
          name: 'Adewumi Alabi',
          product: 'Chiken laps',
          quantity: 23,
          status: 'done',
        },
        {
          id: 2,
          name: 'Adewumi Alabi',
          product: 'Chiken laps',
          quantity: 23,
          status: 'pending',
        },
        {
          id: 3,
          name: 'Adewumi Alabi',
          product: 'Chiken laps',
          quantity: 23,
          status: 'done',
        },
        {
          id: 4,
          name: 'Adewumi Alabi',
          product: 'Chiken laps',
          quantity: 23,
          status: 'pending',
        },
        {
          id: 5,
          name: 'Adewumi Alabi',
          product: 'Chiken laps',
          quantity: 23,
          status: 'done',
        },
      ],
      headers: [
        { text: '#', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Product', value: 'product' },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Status', value: 'status' },
      ],
    }
  },
  mounted() {
    this.getSummary()
  },
  methods: {
    async getSummary() {
      await this.$store.dispatch('covid/summary').then((response) => {
        this.summary = response.Countries
      })
    },
    getTotalDeaths(country) {
      const obj = this.summary.filter(
        (item) => item.TotalDeaths === country
      )
      return obj.TotalDeaths
    },
  },
}
</script>
