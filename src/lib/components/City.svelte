<script>
    import { onMount } from 'svelte';
  
    let city = '';
  
    function getCityName(latitude, longitude) {
      const apiKey = 'SUA_API_KEY_AQUI'; // Substitua pela sua chave de API
      const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const fullCityName = data.city || 'Desconhecida';
          const cityParts = fullCityName.split(' ');
          city = cityParts[cityParts.length - 1]; // Pega o último nome da cidade
        })
        .catch(error => {
          console.error('Erro ao obter o nome da cidade:', error);
        });
    }
  
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          getCityName(latitude, longitude);
        });
      } else {
        console.error('Geolocalização não é suportada pelo navegador.');
      }
    }
  
    onMount(() => {
      getLocation();
    });
  </script>

  {#if city !== ''}
    <div class="text-slate-50 font-bold bg-slate-800 p-2 rounded-lg text-lg">
        {city}
    </div>
  {/if} 
  
 
  
  <style>
  </style>
  