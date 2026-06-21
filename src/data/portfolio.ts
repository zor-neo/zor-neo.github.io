export type ProjectStatus = 'Live' | 'Cloud case study' | 'Featured prototype' | 'Ongoing concept' | 'Tool' | 'Analysis';

export interface ProjectLink {
	label: string;
	href: string;
}

export interface Project {
	title: string;
	status: ProjectStatus;
	summary: string;
	detail: string;
	stack: string[];
	links: ProjectLink[];
	visual?: 'lotto' | 'wisdom' | 'cloudtask';
}

export const featuredProjects: Project[] = [
	{
		title: 'CloudTask',
		status: 'Cloud case study',
		summary: 'A serverless AWS task manager built to showcase secure cloud architecture.',
		detail:
			'Combines a React dashboard with Cognito authentication, API Gateway JWT authorization, Python Lambda APIs, DynamoDB user-scoped records, private S3 uploads, CloudFront delivery, and Terraform infrastructure as code.',
		stack: ['AWS', 'Terraform', 'React', 'Lambda', 'DynamoDB', 'S3', 'CloudFront'],
		links: [
			{ label: 'View repository', href: 'https://github.com/zor-neo/aws_portfolio_1' },
			{ label: 'Read case study', href: 'https://github.com/zor-neo/aws_portfolio_1/blob/main/docs/portfolio-case-study.md' },
		],
		visual: 'cloudtask',
	},
	{
		title: 'Lotto Hub',
		status: 'Live',
		summary: 'A free-market lottery exchange built around choice, transparency, and fast matching.',
		detail:
			'Connects buyers and sellers at self-determined prices, with automated matching, seller operations, participation and winnings records, resilient API fallbacks, and near-live draw-day polling.',
		stack: ['Full-stack web', 'API integration', 'Resilient polling', 'Product design'],
		links: [{ label: 'Visit live product', href: 'https://lotto-hub-khaki.vercel.app/' }],
		visual: 'lotto',
	},
	{
		title: 'Spring Wisdom',
		status: 'Live',
		summary: 'A knowledge-sharing community designed for thoughtful posts and discussions.',
		detail:
			'An independently built community product where people can publish ideas, discover shared knowledge, and engage through discussion.',
		stack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Docker'],
		links: [
			{ label: 'Visit live product', href: 'https://spring-wisdom.onrender.com' },
			{ label: 'View source', href: 'https://github.com/zor-neo/Spring-Wisdom' },
		],
		visual: 'wisdom',
	},
];

export const repositoryProjects: Project[] = [
	{
		title: 'KPay Verifier',
		status: 'Featured prototype',
		summary: 'A reusable payment-verification layer for small businesses.',
		detail:
			'Reduces repetitive manual slip checks, detects reused submissions, and explores integration into personal apps and messaging workflows such as Telegram.',
		stack: ['Python', 'AI-assisted verification', 'API integration', 'Automation'],
		links: [{ label: 'View repository', href: 'https://github.com/zor-neo/KPay-verifier' }],
	},
	{
		title: 'All-in-One Classroom',
		status: 'Ongoing concept',
		summary: 'A unified learning hub that brings classes, communication, and community together.',
		detail:
			'Explores a self-contained education experience combining learning resources, open-source video conferencing, messaging, and social interaction.',
		stack: ['Product architecture', 'Education technology', 'Open source'],
		links: [{ label: 'View repository', href: 'https://github.com/zor-neo/all-in-one-classroom' }],
	},
	{
		title: 'Gold Price Tracker',
		status: 'Tool',
		summary: 'Real-time gold-price monitoring paired with a personal savings database.',
		detail:
			'Turns changing market data into a practical view of gold holdings, savings history, and value over time.',
		stack: ['Python', 'Market data APIs', 'Data persistence'],
		links: [{ label: 'View repository', href: 'https://github.com/zor-neo/gold-price-tracker' }],
	},
	{
		title: 'Deep Link Tester',
		status: 'Tool',
		summary: 'A lightweight web utility for validating deep-link endpoints.',
		detail:
			'Helps developers quickly test whether application deep links resolve correctly across different endpoints.',
		stack: ['JavaScript', 'Web APIs', 'Developer tooling'],
		links: [{ label: 'View repository', href: 'https://github.com/zor-neo/deep-link-tester' }],
	},
	{
		title: 'Tech Career Builder',
		status: 'Tool',
		summary: 'An interactive guide for exploring a suitable path into technology.',
		detail:
			'Uses a focused sequence of questions to help people identify technology careers that fit their interests and working preferences.',
		stack: ['Python', 'Decision flows', 'Interactive web'],
		links: [{ label: 'View repository', href: 'https://github.com/zor-neo/tech-career-builder' }],
	},
	{
		title: 'OCR Lottery',
		status: 'Featured prototype',
		summary: 'Computer-vision extraction for six-digit Thai lottery ticket numbers.',
		detail:
			'Explores reliable number extraction from ticket imagery to reduce manual entry and enable downstream lottery workflows.',
		stack: ['JavaScript', 'OCR', 'Computer vision'],
		links: [{ label: 'View repository', href: 'https://github.com/zor-neo/OCR-Lottery' }],
	},
	{
		title: 'Diabetes Risk Exploring',
		status: 'Analysis',
		summary: 'Exploratory analysis of diabetes risk factors using Python.',
		detail:
			'Investigates health data to surface patterns, relationships, and useful questions around diabetes risk.',
		stack: ['Python', 'Jupyter', 'Data analysis'],
		links: [{ label: 'View repository', href: 'https://github.com/zor-neo/diabetes-risk-exploring' }],
	},
];

export const capabilities = [
	{
		number: '01',
		title: 'Full-stack product development',
		text: 'Turning a practical problem into a coherent product, from interface and data flow to deployment and iteration.',
	},
	{
		number: '02',
		title: 'Applied AI engineering',
		text: 'Entry-level AI and automation work focused on useful verification, OCR, and data-assisted product features.',
	},
	{
		number: '03',
		title: 'Cloud foundations',
		text: 'AWS-certified cloud fundamentals backed by a serverless portfolio project using Terraform, Cognito, API Gateway, Lambda, DynamoDB, S3, and CloudFront.',
	},
	{
		number: '04',
		title: 'Agent-assisted engineering',
		text: 'Using agents deliberately across specification, implementation, testing, review, and verification.',
	},
];

export const coreStack = ['Python', 'JavaScript', 'TypeScript', 'Astro', 'Django', 'APIs', 'AWS', 'Terraform', 'Docker', 'Data analysis', 'PHP'];
