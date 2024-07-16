<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<table>
	<caption> Words by their IPA </caption>
	<thead>
		<tr>
			<th scope="col">Word</th>
			<th scope="col">IPA</th>
			<th scope="col">Translation</th>
		</tr>
	</thead>
	<tbody>
		{#each data.words as word}
			<tr>
				<th scope="row">{word.lemma}</th>
				<td>/{word.ipa}/</td>
				<td>{word.translation.toLocaleLowerCase()}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Pacifico&display=swap');

	table {
		font-size: large;
		font-family: 'Noto Serif', serif;
		margin: 0 auto;
		border-collapse: collapse;
	}
	tr {
		border-bottom: 1px solid black;
	}

	table tbody tr:nth-of-type(7n) {
		background: lightgoldenrodyellow;
		border-bottom: 2px solid black;
	}
	table tbody tr td:first-of-type {
		font-size: x-large;
	}

	thead th {
		text-align: left;
		border-bottom: 2px solid black;
	}

	thead th:first-of-type {
		text-align: center;
	}

	caption {
		font-size: xx-large;
		font-family: 'Pacifico', cursive;
		border-bottom: 2px solid black;
		margin-bottom: 1em;
	}
</style>
