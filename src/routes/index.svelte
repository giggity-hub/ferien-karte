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




<div class="flex flex-col mx-auto lg:flex-row  bg-gray-800">
	<!-- <div class=" max-h-subtract-input sticky top-0 z-0 lg:h-full lg:max-h-screen lg:w-2/5 bg-red-200">
		<Map/>
	</div> -->
	<div class="max-h-subtract-input lg:w-2/5 sticky top-0  !lg:h-screen ">
		<div class="w-full h-full lg:max-w-2xl float-right p-5 flex">
			<Map/>
		</div>
		
	</div>
	
	<div class="z-10 flex-1  lg:w-3/5 bg-gray-700 shadow-custom">
	
	
		<div class="  lg:max-w-5xl">
	
			
					<KalenderView ferien=$allHolidays/>
					<!-- <Test/> -->

		</div>
	</div>
</div>
{/if}
<style windi:preflights:global windi:safelist:global>
	.shadow-custom{
		box-shadow: 0px 0px 20px 16px rgba(0,0,0,0.2);
	}
	.max-h-subtract-input{
		height: calc(100vh - theme('spacing.32'))
	}

</style>