<template>
  <div id="app">

    <!-- Always shows a header, even in smaller screens. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">BMI Calculator</span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a
              class="mdl-navigation__link"
              href="https://github.com/Coderberg/BMI-Calculator"
              target="_blank"
            ><i class="material-icons">code</i> Source code</a>
          </nav>

        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">BMI Calculator</span>
        <nav class="mdl-navigation">
          
          <a
            class="mdl-navigation__link"
            href="#/"
          ><i class="material-icons"> dialpad </i> Calculator</a>
          <a
            class="mdl-navigation__link"
            href="#/categories"
          ><i class="material-icons"> format_list_bulleted </i> Categories</a>

          <a
            class="mdl-navigation__link"
            href="https://github.com/Coderberg/BMI-Calculator"
            target="_blank"
          ><i class="material-icons">code</i> Source code</a>

        </nav>
      </div>
      <main class="mdl-layout__content mdl-color--grey-100">
        <div class="mdl-grid demo-content">

          <router-view></router-view>

        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Calculator from './components/Calculator';
import Categories from './components/Categories';

export default {
  name: 'App',
  components: {
    Calculator,
    Categories,
  },
};
</script>
