<script lang="ts">
	import ipaList from '$lib/ipaList';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="layout">
	<nav>
		<div>
			<p>Short vowels</p>
			<ul>
				{#each ipaList.shortVowel as ipaChar}
					<li><a href="/{ipaChar}">{ipaChar}</a></li>
				{/each}
			</ul>
		</div>
		<div>
			<p>Long vowels</p>
			<ul>
				{#each ipaList.longVowel as ipaChar}
					<li><a href="/{ipaChar}">{ipaChar}</a></li>
				{/each}
			</ul>
		</div>
	</nav>

	<div>{data.slug}</div>

	<main>
		<slot></slot>
	</main>

	<div>{data.slug}</div>

	<nav>
		<div>
			<p>Consonants</p>
			<ul>
				{#each ipaList.dConsonants as ipaChar}
					<li><a href="/{ipaChar}">{ipaChar}</a></li>
				{/each}
			</ul>
		</div>
		<div>
			<p>Easy Consonants</p>
			<ul>
				{#each ipaList.eConsonants as ipaChar}
					<li><a href="/{ipaChar}">{ipaChar}</a></li>
				{/each}
			</ul>
		</div>
	</nav>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 10em 1fr 2fr 1fr 10em;
		font-family: 'Noto Serif', serif;
	}
	.layout > div {
		font-size: 10em;
		font-weight: 100;
		display: grid;
		height: 100vh;
		position: sticky;
		top: 0;
		justify-items: center;
		align-items: center;
		color: gray;
	}

	nav {
		height: 100vh;
		overflow-y: scroll;
		position: sticky;
		top: 0;
		text-align: center;
		background: whitesmoke;
	}

	nav ul {
		font-size: 3em;
		padding: 0;
		margin: 0;
		list-style-type: none;
	}

	nav ul a {
		color: black;
		display: block;
		text-decoration: none;
	}

	nav p {
		font-weight: bold;
		margin: 0;
		margin-top: 2em;
		margin-bottom: 1em;
	}
</style>
