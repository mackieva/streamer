import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
	weight: ['300', '500'],
});

export const metadata: Metadata = {
	title: {
		template: `%s | Streamer`,
		default: `Streamer`,
	},
	description: 'How about we watch something',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${outfit.variable} $antialiased`}>{children}</body>
		</html>
	);
}
