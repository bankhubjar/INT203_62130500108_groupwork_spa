<template>
  <div class="itemincarts">
    <router-link to="/Cart">
      <span class="cart-badge" id="targetEl">{{ numberofitem }}</span>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 202 167.3"
        style="enable-background: new 0 0 202 167.3"
        xml:space="preserve"
      >
        <g>
          <g>
            <path
              class="st0"
              d="M156.5,107.5H66.5c-3.4,0-6.3-2.4-7-5.6L45.8,37.2l-12.9-1c-3.9-0.3-6.9-3.7-6.6-7.6c0.3-3.9,3.7-6.9,7.6-6.6l18.3,1.4c3.2,0.2,5.8,2.5,6.4,5.6l13.7,64.2h78.4L161,45.5c0.8-3.9,4.6-6.3,8.5-5.5c3.9,0.8,6.3,4.6,5.5,8.5l-11.5,53.4C162.7,105.1,159.8,107.5,156.5,107.5z"
            />
          </g>
          <circle class="st0" cx="82.1" cy="130.8" r="14.2" />
          <circle class="st0" cx="142" cy="130.8" r="14.2" />
        </g>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
    props:{numberofitem: Number},
}
</script>

<style scoped>
.itemincarts {
    width: 170px;
	height: 100%;
	margin: 0 auto 0;
	position: fixed;
	overflow: hidden;
	left: 90%;
	right: 0;
	bottom: 78%;
}
.cart-badge {
  position: absolute;
  left: 75px;
	bottom: 35px;
  display: block;
  width: 27px;
  height: 27px;
  font-size: 1rem;
  font-weight: light;
  font-family: 'Trebuchet MS', sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.8rem;
  color: white;
  border: none;
  border-radius: 50%;
  background: #162b75;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(#fff, .3);
	z-index: 50;
}
svg {
	display: block;
	width: 60px;
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 10px;
	margin-left: auto;
	margin-right: auto;
  fill: rgb(19, 2, 68);
}
#triggerEl {
	margin: 0 auto;
	display: block;
	left: 0;
	right: 0;
	width: 200px;
	position: absolute;
	top: 20px;
	background-color: #65b94c;
	color: white;
	font-weight: 700;
	font-size: 1.125rem;
	text-align: center;
	border-radius: .3125rem;
	letter-spacing: .125rem;
	min-height: 2.5rem;
	border: none;
	padding: .625rem 1.25rem;
	outline: none;
}
</style>