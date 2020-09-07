<script>
	import {useTracker} from 'meteor/rdb:svelte-meteor-data';
	import {Studies} from '../api/studies';
	import Toolbar from './components/Toolbar.svelte';

	$: studies = useTracker(() => Studies.find().fetch());
</script>

<style>
	:global(html) { 
		font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
		font-weight: 300;
		line-height: 1.15;
		font-size: 62.5%;
		-webkit-text-size-adjust: 100%;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		overflow: hidden;
	}

	:global(*, *::before, *::after) { 
		-webkit-box-sizing: inherit;
		-moz-box-sizing: inherit;
		box-sizing: inherit;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		font-size: 1.6rem;
	}
</style>

<Toolbar />