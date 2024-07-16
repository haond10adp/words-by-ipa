<script lang="ts">
	import ipaList from '$lib/ipaList';
	import { page } from '$app/stores';
	let { children } = $props();
</script>

<div class="layout">
	<div></div>
	<div class="side">{$page.params.slug}</div>
	<main>
		{@render children()}
	</main>
	<nav>
		{#snippet ipaGroup(groupName: string, ipaGroupName: keyof typeof ipaList)}
			<div>
				<p>{groupName}</p>
				<ul>
					{#each ipaList[ipaGroupName] as ipaChar}
						<li><a href="/{ipaChar}">{ipaChar}</a></li>
					{/each}
				</ul>
			</div>
		{/snippet}
		{@render ipaGroup('Short Vowels', 'shortVowel')}
		{@render ipaGroup('Long Vowels', 'longVowel')}
		{@render ipaGroup('Consonants', 'dConsonants')}
		{@render ipaGroup('Easy Consonants', 'eConsonants')}
	</nav>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Pacifico&display=swap');
	.layout {
		display: grid;
		grid-template-columns: 5em 1fr 1fr 10em;
		font-family: 'Noto Serif', serif;
	}
	.side {
		font-size: 20em;
		font-weight: 100;
		display: grid;
		height: 100vh;
		position: sticky;
		top: 0;
		justify-items: center;
		align-items: center;
		color: gray;
		border-right: 2px dashed gray;
		border-left: 1px dashed black;
	}

	nav {
		height: 100vh;
		overflow-y: scroll;
		scrollbar-width: thin;
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
