// Placeholder rainbow palette from the design handoff's BARS array, keyed by project `order` (1-17).
// Colors are explicitly called out as placeholder/adjustable in the handoff README.
const BAR_COLORS = [
	'oklch(66% 0.14 250)',
	'oklch(66% 0.14 225)',
	'oklch(68% 0.13 205)',
	'oklch(70% 0.13 185)',
	'oklch(68% 0.13 165)',
	'oklch(66% 0.15 150)',
	'oklch(66% 0.16 130)',
	'oklch(68% 0.17 110)',
	'oklch(70% 0.16 90)',
	'oklch(72% 0.15 70)',
	'oklch(72% 0.16 50)',
	'oklch(68% 0.17 30)',
	'oklch(64% 0.18 15)',
	'oklch(64% 0.19 355)',
	'oklch(66% 0.18 340)',
	'oklch(68% 0.17 325)',
	'oklch(66% 0.16 305)',
];

export function projectColor(order: number, hueOverride?: number): string {
	const base = BAR_COLORS[order - 1] ?? 'oklch(70% 0.15 250)';
	if (hueOverride === undefined) return base;
	const match = base.match(/oklch\(([\d.]+%) ([\d.]+) [\d.]+\)/);
	if (!match) return base;
	return `oklch(${match[1]} ${match[2]} ${hueOverride})`;
}

export const GRAY = {
	teaching: 'oklch(65% 0 0)',
	resumes: 'oklch(72% 0 0)',
	projectManagement: 'oklch(80% 0 0)',
	bloopers: 'oklch(87% 0 0)',
};
