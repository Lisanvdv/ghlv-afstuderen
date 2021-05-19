<template>

    <div class="flex-box">

        <div class="flex-item">
            <h2>Welcome!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu urna ac justo hendrerit tincidunt vitae sit amet mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pellentesque interdum vestibulum. Ut cursus neque eget orci 
            imperdiet, eget efficitur mauris posuere. Phasellus nec sem vel massa tristique egestas. Maecenas et eros vitae sem ornare ullamcorper. Integer vehicula risus nec mauris fringilla, vitae tristique lorem feugiat. Morbi sed efficitur purus.</p>
        </div>

        <div class="flex-item">
            <h2>Your call with Nova Green is about to start</h2>
            <p class="min-text">Read the description on the left before entering the video call</p>
            <div class="camera-view-self"></div>
            <router-link to="/main" class="btn">Join now</router-link>
        </div>

    </div>
  
</template>

<style scoped>
h1, h2, h3, h4, h5, h6, p, a{
color: white;
}
.flex-box {
    margin:auto;
    display:flex;
    width: 100%;
    }

.flex-item {
    margin:2%;
    padding:2%;
    width:50%;
    background-color: #1b1b1b;
    
    }

.btn{
  background-color: #E30B5D;
  color: white;
  border: none;
  padding: 1% 2%;
  text-decoration: none;
}

.camera-view-self{
margin: auto;
height:250px;
width:80%;
border: #1e1e1e 1px solid;
margin-bottom: 5%;
}

.min-text{
font-size:smaller;
padding-bottom:2%;
}

</style>