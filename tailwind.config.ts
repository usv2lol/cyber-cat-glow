import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyber theme colors
				cyber: {
					black: 'hsl(var(--cyber-black))',
					dark: 'hsl(var(--cyber-dark))',
					medium: 'hsl(var(--cyber-medium))',
					light: 'hsl(var(--cyber-light))',
					glow: 'hsl(var(--cyber-glow))',
					'glow-soft': 'hsl(var(--cyber-glow-soft))'
				}
			},
			backgroundImage: {
				'cyber-gradient': 'var(--gradient-cyber)',
				'card-gradient': 'var(--gradient-card)',
				'glow-gradient': 'var(--gradient-glow)'
			},
			boxShadow: {
				'glow-soft': 'var(--glow-soft)',
				'glow-medium': 'var(--glow-medium)',
				'glow-intense': 'var(--glow-intense)',
				'cyber': 'var(--shadow-cyber)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Cyber animations
				'glow-pulse': {
					'0%, 100%': { boxShadow: 'var(--glow-soft)' },
					'50%': { boxShadow: 'var(--glow-medium)' }
				},
				'slide-down-out': {
					'0%': { transform: 'translateY(0px)', opacity: '1' },
					'100%': { transform: 'translateY(100px)', opacity: '0' }
				},
				'pop-in': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(0.95)' },
					'100%': { transform: 'scale(1)' }
				},
				'zoom-shake': {
					'0%': { transform: 'scale(0) rotate(0deg)' },
					'50%': { transform: 'scale(1.1) rotate(1deg)' },
					'75%': { transform: 'scale(1.05) rotate(-1deg)' },
					'100%': { transform: 'scale(1) rotate(0deg)' }
				},
				'zoom-out-fade': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'100%': { transform: 'scale(0.8)', opacity: '0' }
				},
				'particle-fall': {
					'0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
				},
				'spinner': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'slide-down-out': 'slide-down-out 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'pop-in': 'pop-in 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'zoom-shake': 'zoom-shake 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'zoom-out-fade': 'zoom-out-fade 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'particle-fall': 'particle-fall 2s linear infinite',
				'spin-slow': 'spinner 2s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;