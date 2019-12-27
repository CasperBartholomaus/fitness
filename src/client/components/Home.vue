<template>
  <div class="container__form">
    <md-steppers v-show="showStepper" :md-active-step.sync="active" md-linear>
      <md-step id="first" md-label="Days" :md-done.sync="first" :md-editable="status.first">
        <md-button class="md-raised md-primary" :value="3" @click="setDone('first', 'second', $event)">3</md-button>
        <md-button class="md-raised md-primary" value="4" @click="setDone('first', 'second')">4</md-button>
        <md-button class="md-raised md-primary" value="5" @click="setDone('first', 'second')">5</md-button>
        <md-button class="md-raised md-primary" value="6" @click="setDone('first', 'second')">6</md-button>
      </md-step>

      <md-step id="second" md-label="Focus" :md-error="secondStepError" :md-done.sync="second" :md-editable="status.second">
        <md-button class="md-raised md-primary" value="muscle" @click="setDone('second', 'third')">Muscle</md-button>
        <md-button class="md-raised md-primary" value="strength" @click="setDone('second', 'third')">Strength</md-button>
        <md-button class="md-raised md-primary" value="flexibility" @click="setDone('second', 'third')">Flexibility</md-button>
        <md-button class="md-raised md-primary" value="cardio" @click="setDone('second', 'third')">Cardio</md-button>
      </md-step>

      <md-step id="third" md-label="Muscle" :md-done.sync="third" :md-editable="status.third">
        <md-button class="md-raised md-primary" value="chest" @click="createWorkout()">Chest</md-button>
        <md-button class="md-raised md-primary" @click="createWorkout()">Tricep</md-button>
      </md-step>
    </md-steppers>
    <md-progress-spinner v-show="showSpinner" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
    export default {
        name: "StepperLinear",
        data: () => ({
            active: "first",
            first: false,
            second: false,
            third: false,
            secondStepError: null,
            showSpinner: false,
            showStepper: true,
            status: {
                first: true,
                second: true,
                third: true
            }
        }),
      computed: {
        muscle: function () {
          return this.$store.workoutConfig.state.muscle;
        }
      },
        methods: {
            setDone(id, index, event) {
                console.log(event.target);
                this[id] = true;
                this.status[id] = !this.status[id];
                this.secondStepError = null;

                if (index) {
                    this.active = index;
                }
            },
            createWorkout(){
              this.showSpinner = true;
              this.showStepper = false;
              this.$router.push('/about');
            },
            setReset(id, index) {
                this[id] = false;
                this.status[index] = !this.status[index];
                this.secondStepError = null;

                if (index) {
                    this.active = index;
                }
            },
            setError() {
                this.secondStepError = "This is an error!";
            }
        },
    };
</script>

<style lang="scss" scoped>
    .md-steppers {
    }
</style>
