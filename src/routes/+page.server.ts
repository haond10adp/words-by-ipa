import type { PageServerLoad } from './$types';
import data from '$lib/common-words.json';

interface Word {
	lemma: string;
	ipa: string;
	translation: string;
}

export const load: PageServerLoad = () => {
	const wordList: Word[] = data.Sheet1;
	const words = wordList;
	return { words };
};
