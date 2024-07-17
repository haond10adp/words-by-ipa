<script lang="ts">
	let { data } = $props();
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
	table {
		font-size: large;
		font-family: 'Noto Serif', serif;
		margin: 0 auto;
		border-collapse: collapse;
	}
	tr {
		border-bottom: 1px solid black;
	}
	table tbody tr td:first-of-type {
		font-size: x-large;
	}

	thead th {
		text-align: left;
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
