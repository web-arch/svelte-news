<script lang="ts">
	import { onMount } from 'svelte';
	import type { DataEntity } from './app-types';

	let news: DataEntity[] = [];

	onMount(async () => {
		const res = await fetch(`https://api.thenewsapi.com/v1/news/top?api_token=f4zlSgcdQ1NMp9Pk9KbEg4wgyDmEWhu4h4lBqfLL`);
		const resJSON = await res.json()
		news = resJSON.data;
	});

	function goToUrl(url: string) {
		return () => { window.location.replace(url); };
	}
</script>

<style>
	.main-heading {
		margin-left: 40px;
	}

	.news {
		display: flex;
		flex-wrap: wrap;
	}

	.one-news {
		cursor: pointer;
		width: 300px;
		border: 5px solid #515151;
	}

	.title {
		display: inline-block;
		padding: 8px;
		font-size: 22px;
		font-weight: bold;
	}

	.img-wrapper {
		width: 300px;
        height: 300px;
        
		overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
	}

	.img {
		height: 100%;
        width: auto;
	}

	.description {
		padding: 8px;
	}
</style>

<h1 class="main-heading">Новости</h1>
<div class="news">
	{#each news as oneNews}
		<figure class="one-news" on:click={goToUrl(oneNews.url)}>
			<figcaption class="title">{oneNews.title}</figcaption>
			<div class="img-wrapper">
				<img class="img" src={oneNews['image_url']} alt={oneNews.title}}/>
			</div>
			<div class="description">{oneNews.description}</div>
		</figure>
	{:else}
		<p>Загрузка...</p>
	{/each}
</div>