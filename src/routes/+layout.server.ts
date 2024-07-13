import type { LayoutServerLoad } from './$types';
import data from '$lib/common-words.json';

interface Word {
	lemma: string;
	ipa: string;
	translation: string;
}

export const load: LayoutServerLoad = ({ params }) => {
	const wordList: Word[] = data.Sheet1;
	const words = wordList;
	const slug = params.slug;
	return { words, slug };
};
