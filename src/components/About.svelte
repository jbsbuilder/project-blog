<script>
  import {createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  function test(){
    dispatch('resumetest',{text:'test'})
  }

</script>
<section class="px-5 md:px-40 dark:bg-slate-800" id="section-2">
  <!-- left -->
  <div class=" py-20 md:py-40 flex flex-col-reverse items-center md:flex-row gap-10">
    <div class="w-11/12">
      <img class="rounded-3xl" src="images/laptop.jpg" alt="" />
    </div>
    <!-- right -->
    <div class="my-auto flex flex-col gap-4 text-center md:text-left">
      <p class="font-extrabold text-lg text-primary-600">Fill Me in</p>
      <p class="font-semibold text-md dark:text-white">Fill ME in</p>
      <p class="text-slate-400 text-md">Fill me in</p>
      <div class="">
        <button class="group px-4 py-2 rounded-xl border-primary-400 bg-white 
          hover:outline-none hover:border-primary-400
          focus:ring-primary-500 focus:outline-none active:scale-95
          active:ring-1 active:ring-primary-700
          dark:bg-primary-500
          w-fit
          "
          on:click={test}
        >
          <svg class="inline-block w-4 h-4 text-gray-800 group-hover:text-primary-600 group-focus:text-primary-600 dark:text-black dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
          </svg>
        <span class="text-xs font-bold text-black group-hover:text-primary-600 group-focus:text-primary-600 dark:group-hover:text-white">Resumé</span>
        </button>
      </div>
    </div>
  </div>
</section>