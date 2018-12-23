<template>
  <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--5-col-desktop">
    <form @submit.prevent="calculate()">
      <div class="mdl-card__title mdl-card--expand">
        <h4>
          BMI - {{ bmi }} kg/m<sup>2</sup>
          <br>
          <span
            :class="className"
            v-if="message"
          >
            {{ message }}
          </span>
          <span
            class="gray"
            v-else
          >
            Enter your height and weight
          </span>
        </h4>
      </div>

      <div class="mdl-card__supporting-text">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            class="mdl-textfield__input"
            autocomplete="off"
            type="text"
            pattern="-?[0-9]*(\.[0-9]+)?"
            id="height"
            v-model="height"
            @input="calculate()"
          >
          <label
            class="mdl-textfield__label"
            for="height"
          >Height (cm)</label>
          <span class="mdl-textfield__error">Input is not a number!</span>
        </div>
        <br>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            class="mdl-textfield__input"
            autocomplete="off"
            type="text"
            pattern="-?[0-9]*(\.[0-9]+)?"
            id="weight"
            v-model="weight"
            @input="calculate()"
          >
          <label
            class="mdl-textfield__label"
            for="weight"
          >Weight (kg)</label>
          <span class="mdl-textfield__error">Input is not a number!</span>
        </div>
        <br>
        <a
          href="#"
          class="mdl-button mdl-js-button mdl-button--raised"
          @click.prevent="reset()"
        >
          Reset
        </a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      height: '',
      weight: '',
      bmi: '',
      message: '',
      className: 'red',
    };
  },
  methods: {
    isNumeric(input) {
      return !isNaN(parseFloat(input)) && isFinite(input);
    },
    isValid(input) {
      if (input !== '' && this.isNumeric(input)) {
        if (input > 3) {
          return true;
        }
      }
      return false;
    },
    calculate() {
      if (this.isValid(this.height) && this.isValid(this.weight)) {
        this.bmi = (this.weight / ((this.height / 100) * (this.height / 100))).toFixed(2);

        this.createMessage(this.bmi);
      }
    },
    createMessage(number) {
      if (number > 59.99) {
        this.message = 'Obese Class VI (Hyper Obese)';
        this.className = 'red';
      } else if (number > 49.99) {
        this.message = 'Obese Class V (Super Obese)';
        this.className = 'red';
      } else if (number > 44.99) {
        this.message = 'Obese Class IV (Morbidly Obese)';
        this.className = 'red';
      } else if (number > 39.99) {
        this.message = 'Obese Class III (Very severely obese)';
        this.className = 'red';
      } else if (number > 34.99) {
        this.message = 'Obese Class II (Severely obese)';
        this.className = 'red';
      } else if (number > 29.99) {
        this.message = 'Obese Class I (Moderately obese)';
        this.className = 'red';
      } else if (number > 24.99) {
        this.message = 'Overweight';
        this.className = 'red';
      } else if (number > 18.49) {
        this.message = 'Normal (healthy weight)';
        this.className = 'green';
      } else if (number > 15.99) {
        this.message = 'Underweight';
        this.className = 'red';
      } else if (number > 14.99) {
        this.message = 'Severely underweight';
        this.className = 'red';
      } else {
        this.message = 'Very severely underweight';
        this.className = 'red';
      }
    },
    reset() {
      this.height = '';
      this.weight = '';
      this.bmi = '';
      this.message = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mdl-card__title h4 span {
  font-size: 16px;
}
.gray {
  color: #999;
}
.red {
  color: #ff4081;
}
.green {
  color: green;
}
</style>
