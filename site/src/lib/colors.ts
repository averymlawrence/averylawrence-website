// Placeholder rainbow palette from the design handoff's BARS array, indexed by a project's position in the home page list.
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

// `rank` is the project's 1-based position in the home page list (after sorting
// by Order), not its Order value — so Order can be any number, including decimals.
// The palette is spread across however many projects are showing, so the list
// always runs the full rainbow from blue to purple.
export function projectColor(rank: number, hueOverride?: number, total = BAR_COLORS.length): string {
	const last = BAR_COLORS.length - 1;
	const index = total > 1 ? Math.round(((rank - 1) * last) / (total - 1)) : 0;
	const base = BAR_COLORS[Math.max(0, Math.min(last, index))];
	if (hueOverride === undefined) return base;
	const match = base.match(/oklch\(([\d.]+%) ([\d.]+) [\d.]+\)/);
	if (!match) return base;
	return `oklch(${match[1]} ${match[2]} ${hueOverride})`;
}

// Light tint of a project's bar color, used as the background behind its
// overview/credits block on mobile project pages.
export function projectColorTint(rank: number, hueOverride?: number, total?: number): string {
	const base = projectColor(rank, hueOverride, total);
	const match = base.match(/oklch\([\d.]+% [\d.]+ ([\d.]+)\)/);
	const hue = match ? match[1] : '250';
	return `oklch(94% 0.03 ${hue})`;
}

export const GRAY = {
	teaching: 'oklch(65% 0 0)',
	resumes: 'oklch(72% 0 0)',
	projectManagement: 'oklch(80% 0 0)',
	bloopers: 'oklch(87% 0 0)',
};
