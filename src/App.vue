<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <label>
      <h1>Andre's First vue2-google-maps Demo for
        <a href="https://indagodigital.us/">Indago Digital, Inc.</a>
      </h1>
      <hr>
      <GmapAutocomplete @place_changed="setPlace">
      </GmapAutocomplete>
      <button @click="usePlace">Add</button>
    </label>
    <br/>

    <GmapMap style="width: 600px; height: 300px;" :zoom="1" :center="{lat: 0, lng: 0}">
      <GmapMarker v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        />
      <GmapMarker
        v-if="this.place"
        label="★"
        :position="{
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        }"
        />
    </GmapMap>
  </div>

</template>

<script>

export default {
  data () {
    return {
      markers: [],
      place: null
    }
  },
  description: 'Autocomplete Example (#164)',
  methods: {
    setDescription (description) {
      this.description = description
    },
    setPlace (place) {
      this.place = place
    },
    usePlace (place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng()
          }
        })
        this.place = null
      }
    }
  }
}
</script>
