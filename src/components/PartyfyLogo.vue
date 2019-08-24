<template>
  <h1 class="partyfy title is-1">partyfy</h1>
</template>

<script>
export default {
  name: "PartyfyLogo"
};
</script>

<style scoped>
.partyfy {
  -webkit-animation: party 1s infinite;
  -moz-animation: party 1s infinite;
  -o-animation: party 1s infinite;
  -ms-animation: party 1s infinite;
  animation: party 1s infinite;
}

@keyframes party {
  0% {
    color: #ff8d8b;
  }
  10% {
    color: #fed689;
  }
  20% {
    color: #88ff89;
  }
  30% {
    color: #87ffff;
  }
  40% {
    color: #8bb5fe;
  }
  50% {
    color: #d78cff;
  }
  60% {
    color: #ff8cff;
  }
  70% {
    color: #ff68f7;
  }
  80% {
    color: #fe6cb7;
  }
  90% {
    color: #ff6968;
  }
  100% {
    color: #ff8d8b;
  }
}
</style>