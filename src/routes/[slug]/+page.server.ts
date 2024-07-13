import type { PageServerLoad } from './$types';
import data from '$lib/common-words.json';

interface Word {
	lemma: string;
	ipa: string;
	translation: string;
}

export const load: PageServerLoad = ({ params }) => {
	const wordList: Word[] = data.Sheet1;
	const ipaChar = params.slug;

	let words = wordList.filter((word) => word.ipa.includes(ipaChar));

	switch (ipaChar) {
		case 'ʃ':
			words = words.filter((word) => !word.ipa.includes('tʃ'));
			break;
		case 'ʒ':
			words = words.filter((word) => !word.ipa.includes('dʒ'));
			break;
		case 'ʊ':
			words = words.filter((word) => !word.ipa.includes('aʊ') && !word.ipa.includes('əʊ'));
			break;
		case 'ə':
			words = words.filter((word) => !word.ipa.includes('əʊ') && !word.ipa.includes('ɪə'));
			break;
		case 'e':
			words = words.filter((word) => !word.ipa.includes('eɪ'));
			break;
		case 't':
			words = words.filter((word) => !word.ipa.includes('tʃ'));
			break;
		case 'd':
			words = words.filter((word) => !word.ipa.includes('dʒ'));
			break;
		case 'ɪ':
			words = words.filter(
				(word) =>
					!word.ipa.includes('eɪ') &&
					!word.ipa.includes('aɪ') &&
					!word.ipa.includes('ɪə') &&
					!word.ipa.includes('ɔɪ')
			);
			break;
	}
	return { words };
};
