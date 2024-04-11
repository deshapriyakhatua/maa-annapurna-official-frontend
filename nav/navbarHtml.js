document.write(`
    
<style type="text/css">   @import url("../nav/navbar.css"); </style> 
    
<nav class="nav">
    <div class="">
        <div class="logo">
            <a href="../">Annapurna Mandir Menkapur</a>
        </div>
        <div id="mainListDiv" class="main_list">
            <ul class="navlinks">
                <li><a href="../donate">Donate</a></li>
                <li><a href="../festival">Festival</a></li>
                <li><a href="../marriage">Marriage</a></li>
                <li><a href="../about">About</a></li>
                <li><a href="../contact">Contact</a></li>
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
    <a href=""></a><span>Change page Language to <b>Bengali</b></span>
</div>


<script>

    document.querySelector(".navTrigger").addEventListener("click", (event)=>{
        document.querySelector(".navTrigger").classList.toggle("active");
        document.querySelector("#mainListDiv").classList.toggle("show_list");
    });

</script>

<script src="../nav/navbar.js"></script>
    
`);