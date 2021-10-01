<script>
	import KalenderView from './gantt-chart/KalenderView.svelte';
	import Map from './Map/Map.svelte';

	// import Test from './Test.svelte';
	import {allHolidays} from '$stores/holidays'

	// console.log(test);
</script>

{#if $allHolidays}
	

<!-- <main class="flex flex-col xl:flex-row">
	

	<div class="flex-1 ">
		{#await ferien}
		loading schmoading
		{:then ferien}
			<KalenderView {ferien}/>
		{/await}
	</div>
</main> -->




<div class="flex flex-col mx-auto lg:flex-row lg:max-w-screen-2xl ">
	<div class="bg-green-400 max-h-subtract-input sticky top-0 z-0 lg:h-screen lg:w-2/5 ">
		<Map/>
	</div>
	
	<div class="z-10 flex-1 lg:max-w-5xl lg:w-3/5">
	
	
		<div class="bg-gray-200 overflow-hidden">
			<div class="">
			
					<KalenderView ferien=$allHolidays/>
					<!-- <Test/> -->
			
			</div>
		</div>
	</div>
</div>
{/if}
<style windi:preflights:global windi:safelist:global>
	.max-h-subtract-input{
		height: calc(100vh - theme('spacing.32'))
	}
	/* @tailwind base;
	@tailwind components;
	@tailwind utilities; */

	/* :root{
		--calendar-head-height : 80px;
	}

	
	.map-wrapper{
		background: blue;
		flex-grow: 1;
		
	}
	.calendar-wrapper{
		background: orange;
		flex-grow: 1;
	}


	@media (max-width: 1000px) {
		.map-wrapper{
			position: fixed;
			height: calc(100vh - var(--calendar-head-height));
		}
		.wrapper{
			width: 100%;
			flex-shrink: 0;
			flex-grow: 0;
		}
  		.calendar-wrapper {
			background-color: lightblue;
			position: absolute;
			top: calc(100vh - var(--calendar-head-height));
			}
		}

	main{
		display: flex;
		background: orchid;
		height: 100vh;
	} */
</style>