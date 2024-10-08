<script lang="ts">
	import * as config from '$lib/config'
</script>

<footer>
  <div></div>
  <div class="animate-bounce">
    <img class="rabbit-logo" src="favicon.png" alt="rabbit heart logo">
  </div>
  <div class="text-sm font-bold "><a href="" uk-totop uk-tooltip="To Top"></a></div>
  <div class="text-lg font-bold ">{new Date().getFullYear()} &copy; {config.title} by <a href="mailto:miicaneo@gmail.com" uk-tooltip="My email > miicaneo@gmail.com">miica</a></div>
  <div class="text-sm font-bold ">♥ Build with SvelteKit | UIKit ♥</div>
</footer>

<style>
  /* footer {
    background-color: #1c1c1c;
    padding-block: 5rem;
    margin-top: 5rem;
    border-top: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */

  footer {
    /* background-color: #1c1c1c; */
    padding-block: 5rem;
    margin-top: 5rem;
    /* border-top: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .rabbit-logo {
    filter: saturate(0);
    transition: all .5s;

    &:hover {
      filter: saturate(1);
    }
  }
</style>