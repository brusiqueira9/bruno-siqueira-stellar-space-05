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
				neon: {
					cyan: '#00ffff',
					pink: '#ff00ff',
					purple: '#8000ff',
					blue: '#4040ff',
					green: '#00ff80',
					yellow: '#ffff00',
					orange: '#ff8000'
				}
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
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(0, 255, 255, 0.6), 0 0 80px rgba(255, 0, 255, 0.3)' }
				},
				'typing': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'blink': {
					'50%': { borderColor: 'transparent' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'10%': { transform: 'translate(-2px, 2px)' },
					'20%': { transform: 'translate(2px, -2px)' },
					'30%': { transform: 'translate(-2px, -2px)' },
					'40%': { transform: 'translate(2px, 2px)' },
					'50%': { transform: 'translate(-2px, 2px)' },
					'60%': { transform: 'translate(2px, -2px)' },
					'70%': { transform: 'translate(-2px, -2px)' },
					'80%': { transform: 'translate(2px, 2px)' },
					'90%': { transform: 'translate(-2px, 2px)' }
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100vh)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'pulse-neon': {
					'0%, 100%': { 
						boxShadow: '0 0 20px currentColor, 0 0 40px currentColor',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor',
						transform: 'scale(1.05)'
					}
				},
				'scroll': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(5deg)' }
				},
				'float-medium': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-15px) rotate(-3deg)' }
				},
				'float-fast': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-10px) rotate(3deg)' }
				},
				// Novos keyframes
				'sparkle-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(180deg)' },
				},
				'sparkle-fade': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(1)', opacity: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
				'glitch': 'glitch 1s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 10s linear infinite',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
				'scroll': 'scroll 40s linear infinite',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'float-medium': 'float-medium 4s ease-in-out infinite',
				'float-fast': 'float-fast 3s ease-in-out infinite',
				// Novas animações
				'sparkle-spin': 'sparkle-spin 1s linear forwards',
				'sparkle-fade': 'sparkle-fade 1s linear forwards',
			},
			fontFamily: {
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Consolas', 'monospace']
			},
			perspective: {
				'1000': '1000px',
				'2000': '2000px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
