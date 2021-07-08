const { description } = require("../../package");

module.exports = {
	title: "ITS42104",
	description: description,

	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		// ["meta", { name: "theme-color", content: "#3eaf7c" }],
		["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
		["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" }],
		["link", { rel: "icon", type: "image/png", href: "/assets/images/hhicon.png" }],
	],

	/**
	 * Base
	 * If you are deploying to https://<USERNAME>.github.io/,
	 * you can omit base as it defaults to "/".
	 *
	 * If you are deploying to https://<USERNAME>.github.io/<REPO>/, for example your repository is at
	 * https://github.com/<USERNAME>/<REPO>,
	 * then set base to "/<REPO>/".
	 */
	base: "/ooad-labs/",

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		repo: "",
		editLinks: false,
		docsDir: "",
		editLinkText: "",
		lastUpdated: true,
		nav: [
			{ text: "WP", link: "https://deezombiedude612.github.io/wp-labs" },
			{ text: "OOP", link: "https://deezombiedude612.github.io/oop-labs" },
			{ text: "OOAD", link: "/" },
		],
		sidebar: [
			"/",
			{
				title: "2021 August",
				collapsable: false,
				children: ["/lab01", "/lab02", "/lab03", "/lab04", "/lab05", "/lab06", "/lab07"],
			},
			{
				title: "Archive",
				collapsible: true,
				children: [
					{
						title: "2021 April",
						collapsable: true,
						children: [],
					},
					{
						title: "2020 August",
						collapsable: true,
						children: [],
					},
				],
			},
		],
	},
	markdown: {
		lineNumbers: true,
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
