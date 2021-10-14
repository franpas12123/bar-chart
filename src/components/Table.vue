<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
</template>
<script>
export default {
  props: ['items', 'perPage'],
  data() {
    return {
      headers: [
        { text: 'Date', value: 'createdAt' },
        { text: 'Business Name', value: 'companyName' },
        { text: 'Owner Name', value: 'name' },
      ],
    };
  },
};
</script>
