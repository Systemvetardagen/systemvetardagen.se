<template>
  <div class="boxes">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.boxes {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 7rem);
  filter: blur(1px);
}

.box {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #7c55c9;
}

.box:nth-child(odd) {
  animation: spinLeft 2.5s 0.2s linear both infinite;
}

.box:nth-child(even) {
  animation: spinRight 1s 0.4s linear both infinite;
}

.box:nth-child(2n) {
  animation: pulse 2s ease-in-out 0.1s infinite;
}

.box:nth-child(4n) {
  animation-direction: reverse;
}

@keyframes pulse {
  50% {
    transform: scale(1.8);
  }

  70% {
    transform: scale(0.6);
  }
}

@keyframes spinLeft {
  from {
    transform: rotate(0deg) translate(50px);
  }

  to {
    transform: rotate(360deg) translate(50px);
  }
}

@keyframes spinRight {
  from {
    transform: rotate(360deg) translate(50px);
  }

  to {
    transform: rotate(0deg) translate(50px);
  }
}
</style>
