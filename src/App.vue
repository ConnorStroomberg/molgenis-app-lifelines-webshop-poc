<template>
  <div id="app">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="#">
        <img src="@/assets/logo.svg" alt="LifeLines">
      </b-navbar-brand>
      <b-nav-form>
        <b-button variant="outline-secondary" class="my-2 my-sm-0" type="submit">Save</b-button>
        <b-button variant="outline-secondary" class="my-2 my-sm-0" type="submit">Reset</b-button>
        <b-button variant="outline-secondary" class="my-2 my-sm-0" type="submit">Request</b-button>
      </b-nav-form>
    </b-navbar>
    <router-view/>
  </div>
</template>
