<template>
  <div>
    <landing-home />
    <saling-section/>
    <highest-rating />
    <last-add />
    <brand-section />
  </div>
</template>

<script>
import LandingHome from "@/components/Home/LandingHome.vue";
import BrandSection from "@/components/Home/BrandSection.vue";
import SalingSection from '@/components/Home/SalingSection.vue';
import HighestRating from '@/components/Home/HighestRating.vue';
import LastAdd from '@/components/Home/LastAdd.vue';
export default {
  components: { LandingHome, BrandSection, SalingSection, HighestRating, LastAdd },
};
</script>

<style>

</style>
