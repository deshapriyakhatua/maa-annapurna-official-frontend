document.write(`
    
<style type="text/css">   @import url("../nav/navbar.css"); </style> 
    
<nav class="nav">
    <div class="">
        <div class="logo">
            <a href="../">অন্নপূর্ণা মন্দির মেনকাপুর</a>
        </div>
        <div id="mainListDiv" class="main_list">
            <ul class="navlinks">
                <li><a href="../donate">দান</a></li>
                <li><a href="../festival">উৎসব</a></li>
                <li><a href="../marriage">বিবাহ</a></li>
                <li><a href="../about">বিস্তারিত</a></li>
                <li><a href="../contact">যোগাযোগ</a></li>
            </ul>
        </div>
        <span class="navTrigger">
            <i></i>
            <i></i>
            <i></i>
        </span>
    </div>
</nav>

<div class="page_language_banner">
    <a href=""></a><span>Change page Language to <b>English</b></span>
</div>


<script>

    document.querySelector(".navTrigger").addEventListener("click", (event)=>{
        document.querySelector(".navTrigger").classList.toggle("active");
        document.querySelector("#mainListDiv").classList.toggle("show_list");
    });

</script>

<script src="../nav/navbar.js"></script>
    
`);