<script setup>
import { ref,defineProps } from 'vue'
defineProps({
  msg: String,
  href: String,
  title: String,
  body: String,
  isactive: String,
})

</script>

<template>
  <li :class="isactive ? 'link-card link-card-isactive' : 'link-card'">
    <a :href="href">
      <h2>
        {{ title }}
        <span>&rarr;</span>
      </h2>
      <p>
        {{ body }}
      </p>
    </a>
  </li>
</template>

<style scoped>
  :root {
    --link-gradient: linear-gradient(
      45deg,
      #4f39fa,
      #da62c4 30%,
      var(--color-border) 60%
    );
  }

  .link-card {
    list-style: none;
    display: flex;
    cursor: pointer;
    padding: 0.15rem;
    border: 2px solid transparent;
    background-image: var(--link-gradient);
    background-size: 400%;
    border-radius: 0.5rem;
    background-position: 100%;
    transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .link-card > a {
    width: 100%;
    text-decoration: none;
    line-height: 1.4;
    padding: 1em 1.3em;
    border-radius: 0.35rem;
    color: var(--text-color);
    background-color: white;
    opacity: 0.8;
  }

  h2 {
    margin: 0;
    transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  p {
    margin-top: 0.25rem;
    font-size: 0.8rem;
    margin-bottom: 0;
    color:grey;
  }
  h2 span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .link-card-isactive{
    border: 2px solid #4f39fa;
    background-position: 0;
    color: #4f39fa;
  }

  .link-card:is(:hover, :focus-within) {
    background-position: 0;
  }

  .link-card:is(:hover, :focus-within) h2 {
    color: #4f39fa;
  }

  .link-card:is(:hover, :focus-within) h2 span {
    will-change: transform;
    transform: translateX(2px);
  }
</style>
