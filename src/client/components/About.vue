<template>
  <div class="container__workout">
    <md-table v-model="users" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Workout</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Exercise" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Sets" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Reps" md-sort-by="gender">{{ item.gender }}</md-table-cell>
        <md-table-cell md-label="Rest" md-sort-by="title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Muscle" md-sort-by="title">{{ item.muscle }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'TableTemplate',
    data: () => ({
      users: [
        {
          id: 1,
          name: 'Deadlift',
          email: 3,
          gender: 5,
          title: '4 minutes',
          muscle: 'Back'
        },
        {
          id: 2,
          name: 'Squat',
          email: 3,
          gender: 5,
          title: '4 minutes',
          muscle: 'Legs'
        },
        {
          id: 3,
          name: 'Overhead Press',
          email: 3,
          gender: 5,
          title: '4 minutes',
          muscle: 'Schoulders'
        }
      ]
    })
  }
</script>
