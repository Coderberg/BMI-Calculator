<template>
  <div class="table-box">
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <tbody>
        <tr>
          <th>Category
          </th>
          <th colspan="2">BMI (kg/m<sup>2</sup>)
          </th>
        </tr>
        <tr>
          <td>
          </td>
          <th>from</th>
          <th>to
          </th>
        </tr>
        <tr>
          <td>Very severely underweight
          </td>
          <td></td>
          <td>15
          </td>
        </tr>
        <tr>
          <td>Severely underweight
          </td>
          <td>15</td>
          <td>16
          </td>
        </tr>
        <tr>
          <td>Underweight
          </td>
          <td>16</td>
          <td>18.5
          </td>
        </tr>
        <tr>
          <td>Normal (healthy weight)
          </td>
          <td>18.5</td>
          <td>25
          </td>
        </tr>
        <tr>
          <td>Overweight
          </td>
          <td>25</td>
          <td>30
          </td>
        </tr>
        <tr>
          <td>Obese Class I (Moderately obese)
          </td>
          <td>30</td>
          <td>35
          </td>
        </tr>
        <tr>
          <td>Obese Class II (Severely obese)
          </td>
          <td>35</td>
          <td>40
          </td>
        </tr>
        <tr>
          <td>Obese Class III (Very severely obese)
          </td>
          <td>40</td>
          <td>45
          </td>
        </tr>
        <tr>
          <td>Obese Class IV (Morbidly Obese)
          </td>
          <td>45</td>
          <td>50
          </td>
        </tr>
        <tr>
          <td>Obese Class V (Super Obese)
          </td>
          <td>50</td>
          <td>60
          </td>
        </tr>
        <tr>
          <td>Obese Class VI (Hyper Obese)
          </td>
          <td>60</td>
          <td>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  /* eslint linebreak-style: ["error", "windows"] */
  name: 'Categories',
};
</script>

<style>
.table-box {
  overflow-x: auto;
}
</style>
