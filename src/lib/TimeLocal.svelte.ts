import { onMount } from 'svelte';
	let time: string;
  
	function updateTime() {
	  const now = new Date();
	  time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(/:/g, ':');
	}
  
	onMount(() => {
	  updateTime();
	  const interval = setInterval(updateTime, 1000);
	  return () => clearInterval(interval);
	});