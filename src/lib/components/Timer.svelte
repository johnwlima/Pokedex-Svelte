<script lang="ts">
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
  </script>
  
  <div 
	  class="text-slate-50 font-medium bg-slate-800 p-2 h-10 rounded-lg text-md tracking-widest flex items-center justify-center"> <span>Time</span>
	  {time}
  </div>
  
  <style>
  </style>
  
