<script>
  import * as resume from '../lib/ResumeData.js';
  import { Img, Heading, List, Li } from 'flowbite-svelte';

  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher()

  function backToPortfolio() {
    dispatch('backToPage')
  }

</script>

<section class='p-8'>
  <div class="text-center mt-2">
    <Img src="images/meme.png" alt="My profile" class="rounded-full w-48 h-48 border-4 border-primary-500" alignment="mx-auto"/>
    <br />
    <p class='text-lg'>Hello! My name is Jacob Smith, and I am a passionate Operations Manager.</p>
    <p class='text-lg'>I am dedicated to integrating relevant technology into business operations,</p>
    <p class='text-lg'>as I believe it is a powerful catalyst for achieving strategic goals..</p>
    <ul class="my-10">
      <li><a target="_blank" class="hover:text-primary-500" href="mailto:work.jacobsmith@gmail.com">✉️ Email</a></li>
      <li><a target="_blank" class="hover:text-primary-500" href="www.linkedin.com/in/jake-smith-122266165">🖇️ Linkedin</a></li>
      <li><a target="_blank" class="hover:text-primary-500" href="https:cloudsmithlabs.com">📝 Projects</a></li>
    </ul>
  </div>
  <div class="text-left my-20">
    <Heading tag="h1">🧑🏻‍💻 Education</Heading>
    <hr class="mt-2 mb-5"/>
    <div>
      <Heading tag="h5">Fill in</Heading>
      <ul>
        {#each resume.careers as career}
          <li>
            {career.title} | {career.period}
            <List tag="ul" class="space-y-0.5 text-gray-500 dark:text-gray-400">
              {career.description}
            </List>
          </li>
        {/each}
      </ul>
    </div>
    <div class='mt-5'>
      <Heading tag="h5">Degrees</Heading>
      <List tag="ul" class="space-y-0.5 dark:text-gray-4 00">
        {#each resume.educations as edu}
          <Li>{edu.title} | {edu.period}</Li>
        {/each}
      </List>
    </div>
  </div>
  <div class="text-left my-20">
    <Heading tag="h1" class="bottom-line">⚒️ Skills</Heading>
    <hr class="mt-2 mb-5"/>
    <List tag="ul" class="space-y-0.5 text-gray-500 dark:text-gray-400">
      {#each resume.skills as skill}
        <Li>
          {skill.title}: {skill.description}
        </Li>
      {/each}
    </List>
  </div>
  <div class="text-left my-20">
    <Heading tag="h1" class="bottom-line">🖥️ Certifications </Heading>
    <hr class="mt-2 mb-5"/>
    <List tag="ul" class="space-y-0.5 text-gray-500 dark:text-gray-400">
      {#each resume.certificates as certificate}
        <Li>
          {certificate.title} | {certificate.date}
        </Li>
      {/each}
    </List>
  </div>
  <div class="text-left my-20">
    <Heading tag="h1" class="bottom-line">📑 Needs to be filled in</Heading>
    <hr class="mt-2 mb-5"/>
    <ul class="space-y-0.5 text-gray-500">
      {#each resume.papers as paper}
      <li>
        <a href={paper.doi} target="_blank" class="text-gray-500 hover:text-primary-500">{paper.ref}</a>
      </li>
      {/each}
    </ul>
  </div>
  <div class="text-left my-20">
    <Heading tag="h1" class="bottom-line">💼 What can I do for you</Heading>
    <hr class="mt-2 mb-5"/>
    <List tag="ul" class="space-y-0.5 text-gray-500 dark:text-gray-400">
      {#each resume.howIWork as work}
        <Li>{work}</Li>
      {/each}
    </List>
  </div>
  <div>
    <button class="px-4 py-1 text-lg rounded-lg border-primary-500 text-primary-500 font-bold
      hover:border-primary-800 hover:outline-none
      focus:outline-none focus:border-primary-500 
      active:ring-2 active:ring-primary-700 active:scale-95"
      on:click={backToPortfolio}>
      Back to Portfolio
    </button>
  </div>
</section>

