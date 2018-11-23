<template>
  <div id="app">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="#">
        <img src="@/assets/logo.svg" alt="LifeLines">
      </b-navbar-brand>
    </b-navbar>
    <b-navbar variant="secondary" type="dark">
      <b-nav-form class="mb-4"></b-nav-form>
    </b-navbar>
    <router-view/>
  </div>
</template>
