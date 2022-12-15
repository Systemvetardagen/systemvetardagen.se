<template>
    <section class="soon">
        <svg class="vector" width="851px" height="600px" fill="none" xmlns="http://www.w3.org/2000/svg" style=" position: absolute;transform: translate(-333px, 132px)">
        <path d="M-35.9053 636.053C-61.5231 442.987 -28.5368 157.415 56.3299 53.1192C141.197 -51.1762 278.393 26.4438 425.087 58.9798C572.23 92.1537 729.747 79.9049 800.676 237.571C872.482 394.898 858.127 721.163 775.144 959.509C692.184 1199.47 500.931 1400.98 387.673 1396.91C273.538 1393.18 237.847 1184.51 156.767 1056.76C76.1135 928.022 -9.41144 828.78 -35.9053 636.053Z" fill="var(--clr-pink-100)"/>
        </svg>
        <div>
            <h4 class="h4">{{ $t('it_is_almost_time!') }}</h4>
            <p class="p">{{ $t('disk_introduction1') }}<a
            class="inline-link" style="color: black;" href=https://disk.su.se>{{ $t('disk') }}</a>
            {{ $t('disk_introduction2') }}
            </p>
        </div>
                
			</section>

</template>

<script>
    import Button from '@/components/Button.vue'

    export default {
        name: 'heroSection'
    }
    components: {
        Button
    }

</script>

<style>
    .soon{
        position: relative;
        background:  linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('assets\img\Skärmavbild 2022-11-16 kl. 14.51.40.png');
        background-position: center;
        background-size: cover;

    }
    .h4{
        position: relative;
        text-align: right;
        font-family: "Overpass";
        color: var(--clr-pink-600);
        width: 294px;
        height: 128px;
        margin-left: -35%;
        margin-top: 65%;
        /*
        left: 180px;
        top: 150px;
        */
        font-weight: 900;
        font-size: 50px;
        letter-spacing: 2.5px;
        line-height: 55px;
        
    }
    .p{
        position: relative;
        color: black; 
        box-sizing: border-box; 
        font-family: "Overpass";
        font-style: normal;
        width: 650px;
        height: 425px;
        margin-top: -12%;
        margin-left: -56%;
        font-weight: 900; 
        font-size: 27px; 
        line-height: 44px;
        /* 
        left:10px;
        top:-70px;
        */
        letter-spacing: 0.01em;
    }

</style>

/*
/* Vector */

position: absolute;
width: 1207.86px;
left: 491.89px;
top: 191.39%;
bottom: -211.39%;

/* Light Deep Pink/100 */
background: #FFF3F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
transform: matrix(-0.82, -1.17, 0.33, -0.75, 0, 0);


/* Frame 36 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 251px;
gap: 8px;

position: absolute;
width: 640px;
height: 561px;
left: 70px;
top: 442px;



/* Snart är det dags! */

width: 294px;
height: 128px;

/* Display Large */
font-family: 'Overpass';
font-style: normal;
font-weight: 900;
font-size: 57px;
line-height: 64px;
/* or 112% */

color: #FF4CC2;

backdrop-filter: blur(2px);
/* Note: backdrop-filter has minimal browser support */

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* För 26:e året i rad arrangeras Systemvetardagen, studentkåren DISKs egna arbetsmarknadsdag. Under dagen knyts värdefulla kontakter mellan studenter och näringsliv. Systemvetardagen är helt enkelt en unik mötesplats för studenter & organisationer inom IT-branschen. */

width: 596px;
height: 425px;

/* Display Small */
font-family: 'Overpass';
font-style: normal;
font-weight: 900;
font-size: 36px;
line-height: 44px;
/* or 122% */

/* Black/900 */
color: #303030;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Navbar desktop */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 3px 31px;
gap: 350px;

position: absolute;
width: 1439px;
height: 80px;
left: 0px;
top: 0px;

/* Ultramarine Blue/100 */
background: #F2F3FF;
opacity: 0.4;


/* Symbol_Logo_Color */

width: 74px;
height: 74px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 9.56%;
right: 9.55%;
top: 9.55%;
bottom: 9.56%;

background: linear-gradient(26.65deg, #4158D0 -2.52%, #C850C0 49.12%, #FFCC70 100.76%);


/* Navlinks */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 123px;

width: 478px;
height: 28px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Home */

width: 70px;
height: 28px;

/* Body 1 */
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.01em;

color: #000000;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* About */

width: 72px;
height: 28px;

/* Body 1 */
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.01em;

color: #000000;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Catalog */

width: 90px;
height: 28px;

/* Body 1 */
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.01em;

color: #000000;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;









*/





/*

<div class="soon-content text-shadow">
    <h3 style="color: var(--clr-white); position: left; font-style: normal; font-weight: 900; font-size: 48px; line-height: 100%;">{{ $t('it_is_almost_time!') }}</h3>
    <p style="color: var(--clr-pink-300); box-sizing: border-box; font-family: 'Work Sans';font-style: normal;font-weight: 10; font-size: 20px; line-height: 20px; letter-spacing: 0.01em;" >{{ $t('disk_introduction1') }}<a
            class="inline-link" style="color: var(--clr-pink-300);" href=https://disk.su.se>{{ $t('disk') }}</a>
            {{ $t('disk_introduction2') }}
    </p>
</div>
*/