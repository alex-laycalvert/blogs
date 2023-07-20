import type { Config } from "tailwindcss";

export default {
    mode: "jit",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                text: "var(--color-text)",
                background: "var(--color-background)",
                success: "var(--color-success)",
                error: "var(--color-error)",
            },
            backgroundImage: {
                laptopImage: "url('/laptop_new.jpg')",
            },
            fontFamily: {
                siteHeader: ["Rubik"],
                header: ["Lato"],
                body: ["Newsreader"],

                notoSerif: ["Noto Serif"],
                lato: ["Lato"],
                rubik: ["Rubik"],
                ptSans: ["PT Sans"],
                newsreader: ["Newsreader"],
            },
        },
    },
    plugins: [],
} satisfies Config;
